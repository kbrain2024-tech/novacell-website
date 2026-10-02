-- =========================================================================
-- NovaCell 회원 정리 및 김현옥(kbrain2024@gmail.com) VIP 권한 설정 스크립트
-- Supabase 대시보드 -> SQL Editor 에서 전체 복사 후 [Run]을 누르세요.
-- =========================================================================

-- 1. [외래키 제약조건 방지] 결제 주문 중 김현옥님 제외 데이터 정리
delete from public.payment_orders
where user_id not in (
  select id from auth.users 
  where lower(email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com')
);

-- 2. 이용권 중 김현옥님 제외 데이터 정리
delete from public.entitlements
where user_id not in (
  select id from auth.users 
  where lower(email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com')
);

-- 3. 관리자 중 김현옥님 제외 데이터 정리
delete from public.admin_users
where user_id not in (
  select id from auth.users 
  where lower(email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com')
);

-- 4. 프로필 중 김현옥님 제외 데이터 정리
delete from public.profiles
where id not in (
  select id from auth.users 
  where lower(email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com')
);

-- 5. 계정(auth.users) 중 김현옥님 제외 전체 삭제 (기존 테스트 회원 일괄 정리)
delete from auth.users
where lower(email) not in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com');

-- 6. 김현옥님 계정 프로필 업데이트 ('김현옥' 성함 부여)
update auth.users
set raw_user_meta_data = jsonb_set(
  coalesce(raw_user_meta_data, '{}'::jsonb),
  '{full_name}',
  '"김현옥"'
)
where lower(email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com');

update public.profiles
set full_name = '김현옥', updated_at = now()
where lower(email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com');

-- 7. 관리자(admin_users) 권한 부여
insert into public.admin_users (user_id)
select id from auth.users
where lower(email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com')
on conflict (user_id) do nothing;

-- 8. VIP 전 종목 이용권(Reflex Therapy + Healing Points) 10년 프리패스 부여
insert into public.entitlements (user_id, product_code, status, starts_at, expires_at, source, updated_at)
select 
  u.id, 
  p.code, 
  'active', 
  now(), 
  now() + interval '10 years', 
  'admin_vip', 
  now()
from auth.users u
cross join public.products p
where lower(u.email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com')
on conflict (user_id, product_code) 
do update set 
  status = 'active',
  expires_at = now() + interval '10 years',
  source = 'admin_vip',
  updated_at = now();

-- 9. [자동화 트리거] 만약 아직 가입 전이더라도 추후 가입 시 자동으로 VIP 및 관리자 권한 부여
create or replace function public.auto_grant_vip_to_owner()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if lower(new.email) in ('kbrain2024@gmail.com', 'kbrain2024@gmai.com') then
    insert into public.admin_users (user_id)
    values (new.id)
    on conflict (user_id) do nothing;

    insert into public.entitlements (user_id, product_code, status, starts_at, expires_at, source, updated_at)
    select 
      new.id, 
      p.code, 
      'active', 
      now(), 
      now() + interval '10 years', 
      'admin_vip', 
      now()
    from public.products p
    on conflict (user_id, product_code) 
    do update set 
      status = 'active',
      expires_at = now() + interval '10 years',
      source = 'admin_vip',
      updated_at = now();
  end if;
  return new;
end;
$$;

drop trigger if exists on_auth_user_vip_auto on auth.users;
create trigger on_auth_user_vip_auto
  after insert on auth.users
  for each row
  execute procedure public.auto_grant_vip_to_owner();

-- 10. 최종 정리 결과 확인 (김현옥님의 등록 및 VIP 상태 조회)
select 
  p.id as user_id,
  p.email,
  p.full_name,
  e.product_code,
  e.status,
  e.expires_at,
  case when a.user_id is not null then true else false end as is_admin
from public.profiles p
left join public.entitlements e on p.id = e.user_id
left join public.admin_users a on p.id = a.user_id;
