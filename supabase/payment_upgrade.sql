-- NovaCell v30 국내 온라인 결제 업그레이드
-- 기존 회원·이용권 스키마를 설치한 뒤 Supabase SQL Editor에서 1회 실행합니다.

create extension if not exists pgcrypto;

create table if not exists public.payment_orders (
  order_id text primary key,
  user_id uuid not null references auth.users(id) on delete restrict,
  product_code text not null references public.products(code),
  provider text not null default 'toss' check (provider in ('toss','stripe')),
  currency text not null check (currency in ('KRW','USD')),
  amount integer not null check (amount > 0),
  status text not null default 'pending' check (status in ('pending','paid','cancelled','refunded','failed')),
  payment_key text unique,
  payment_method text,
  provider_status text,
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists payment_orders_user_created_idx
  on public.payment_orders(user_id, created_at desc);

alter table public.payment_orders enable row level security;
grant select on public.payment_orders to authenticated;

drop policy if exists "members read own payment orders" on public.payment_orders;
create policy "members read own payment orders" on public.payment_orders
  for select using (auth.uid() = user_id);

create or replace function public.complete_payment_and_grant(
  p_order_id text,
  p_user_id uuid,
  p_payment_key text,
  p_method text,
  p_provider_status text
) returns table(product_code text, expires_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_order public.payment_orders%rowtype;
  v_days integer;
  v_start timestamptz;
  v_expiry timestamptz;
begin
  select * into v_order
  from public.payment_orders
  where order_id = p_order_id and user_id = p_user_id
  for update;

  if not found then raise exception 'ORDER_NOT_FOUND'; end if;
  if v_order.status = 'paid' and v_order.payment_key = p_payment_key then
    return query select e.product_code, e.expires_at
      from public.entitlements e
      where e.user_id = p_user_id and e.product_code = v_order.product_code;
    return;
  end if;
  if v_order.status <> 'pending' then raise exception 'ORDER_NOT_PENDING'; end if;

  select duration_days into v_days from public.products where code = v_order.product_code and active = true;
  if v_days is null then raise exception 'PRODUCT_NOT_ACTIVE'; end if;

  select case when e.expires_at > now() then e.expires_at else now() end
    into v_start
    from public.entitlements e
    where e.user_id = p_user_id and e.product_code = v_order.product_code
    for update;
  v_start := coalesce(v_start, now());
  v_expiry := v_start + make_interval(days => v_days);

  update public.payment_orders
    set status = 'paid', payment_key = p_payment_key, payment_method = p_method,
        provider_status = p_provider_status, approved_at = now(), updated_at = now()
    where order_id = p_order_id;

  insert into public.entitlements
    (user_id, product_code, status, starts_at, expires_at, source, granted_by, updated_at)
  values
    (p_user_id, v_order.product_code, 'active', now(), v_expiry, 'toss_payment', null, now())
  on conflict (user_id, product_code) do update set
    status = 'active', expires_at = excluded.expires_at, source = 'toss_payment',
    granted_by = null, updated_at = now();

  return query select v_order.product_code, v_expiry;
end;
$$;

revoke all on function public.complete_payment_and_grant(text,uuid,text,text,text) from public, anon, authenticated;
grant execute on function public.complete_payment_and_grant(text,uuid,text,text,text) to service_role;
