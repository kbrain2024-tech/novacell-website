-- ============================================================================
-- NovaCell Bookstore (노바셀 북스토어) 박창혁 박사 저서 6권 판매 및 입금확인 자동발송 스키마
-- Supabase SQL Editor에서 1회 실행하세요.
-- ============================================================================

-- 1. 전자책 6권 + 6권 전권 패키지 상품 등록 (영구 소장용 36500일 설정)
insert into public.products (code, name_ko, name_en, price_krw, price_usd, duration_days, active)
values
  ('ebook_novacell_therapy', '노바셀 통치 요법 (PDF 전자책 · 235쪽)', 'NovaCell Pain Therapy (PDF E-Book · 235p)', 100000, 80, 36500, true),
  ('ebook_divine_course', '디바인 코스 (PDF 전자책 · 308쪽)', 'Divine Course (PDF E-Book · 308p)', 100000, 80, 36500, true),
  ('ebook_reflex_therapy', '리플렉스 테라피 (PDF 전자책 · 206쪽)', 'Reflex Therapy (PDF E-Book · 206p)', 100000, 80, 36500, true),
  ('ebook_balance_therapy', '밸런스 테라피 (PDF 전자책 · 326쪽)', 'Balance Therapy (PDF E-Book · 326p)', 100000, 80, 36500, true),
  ('ebook_awakening_cell', '세포야 깨어나라! (PDF 전자책 · 471쪽)', 'Awakening Cell! (PDF E-Book · 471p)', 100000, 80, 36500, true),
  ('ebook_energy_therapy', '에너지 테라피 (PDF 전자책 · 321쪽)', 'Energy Therapy (PDF E-Book · 321p)', 100000, 80, 36500, true),
  ('ebook_master_bundle_6', '박창혁 박사 저서 6권 전권 마스터 컬렉션 (20% 특별할인)', 'Dr. Park 6-Book Master Collection (20% Off)', 480000, 380, 36500, true)
on conflict (code) do update set
  name_ko = excluded.name_ko,
  name_en = excluded.name_en,
  price_krw = excluded.price_krw,
  price_usd = excluded.price_usd,
  duration_days = excluded.duration_days,
  active = true;

-- 2. 전자책 주문 및 자동 메일 발송 관리 테이블 (비회원/회원 모두 지원)
create table if not exists public.ebook_orders (
  order_id text primary key,
  user_id uuid references auth.users(id) on delete set null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  depositor_name text not null default '',
  book_slugs text[] not null default '{}',
  book_titles text not null default '',
  amount integer not null check (amount > 0),
  payment_method text not null default 'bank_transfer' check (payment_method in ('bank_transfer', 'toss_card', 'admin_grant')),
  status text not null default 'pending_deposit' check (status in ('pending_deposit', 'paid', 'cancelled', 'refunded')),
  license_key text unique,
  email_sent boolean not null default false,
  email_sent_at timestamptz,
  approved_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists ebook_orders_email_idx on public.ebook_orders (lower(customer_email), created_at desc);
create index if not exists ebook_orders_status_idx on public.ebook_orders (status, created_at desc);

alter table public.ebook_orders enable row level security;

-- 누구나 주문 생성 가능, 본인 주문 또는 관리자는 조회 가능
drop policy if exists "anyone can create ebook order" on public.ebook_orders;
create policy "anyone can create ebook order" on public.ebook_orders
  for insert to anon, authenticated with check (true);

drop policy if exists "admins manage ebook orders" on public.ebook_orders;
create policy "admins manage ebook orders" on public.ebook_orders
  for all to authenticated
  using (exists (select 1 from public.admin_users a where a.user_id = auth.uid()));
