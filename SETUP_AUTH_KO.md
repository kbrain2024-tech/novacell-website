# NovaCell 회원가입·로그인 및 테스트 이용권 설정 안내

이 배포본은 다음 세 주소에서 하나의 Supabase 회원 데이터베이스를 사용하도록 준비되어 있습니다.

- 공개 홈페이지: `https://novacell.kr`
- Reflex Therapy Guide: `https://guide.novacell.kr`
- Healing Points: `https://healing.novacell.kr`

> 중요: 이번 버전은 회원가입·로그인·이용권 흐름을 검증하는 1차 시험 단계입니다. 결제 연결과 정식 유료 콘텐츠 보호는 이 시험을 완료한 다음 단계에서 진행합니다.

## 1. Supabase 프로젝트 만들기

1. `https://supabase.com`에 로그인합니다.
2. **New project**를 눌러 NovaCell 전용 프로젝트를 만듭니다.
3. Database Password는 안전한 곳에 별도로 보관합니다.
4. 프로젝트 생성이 끝나면 **SQL Editor**를 엽니다.
5. 이 배포본의 `supabase/schema.sql` 파일 전체를 복사하여 실행합니다.

이 SQL은 다음 자료를 만듭니다.

- 회원 프로필
- 상품 정보
- 회원별 이용권과 만료일
- 관리자 목록
- 회원 본인만 자기 이용권을 읽을 수 있는 보안 규칙

## 2. 홈페이지 공개 설정값 입력

Supabase의 **Project Settings → API**에서 다음 두 값을 확인합니다.

- Project URL
- Publishable key 또는 anon public key

홈페이지의 `js/novacell-auth-config.js` 파일을 열고 다음 두 항목만 교체합니다.

```javascript
supabaseUrl: "https://실제프로젝트ID.supabase.co",
supabaseAnonKey: "실제_PUBLIC_키",
```

`service_role` 키는 절대로 이 파일에 넣지 마세요. 이 파일은 방문자의 브라우저에서도 볼 수 있는 공개 설정 파일입니다.

## 3. 인증 주소 설정

Supabase의 **Authentication → URL Configuration**에서 다음과 같이 설정합니다.

- Site URL: `https://novacell.kr`
- Redirect URLs:
  - `https://novacell.kr/login.html`
  - `https://novacell.kr/reset-password.html`
  - `https://novacell.kr/login.html?lang=ko`
  - `https://novacell.kr/login.html?lang=en`
  - `https://novacell.kr/reset-password.html?lang=ko`
  - `https://novacell.kr/reset-password.html?lang=en`

Authentication의 Email 설정에서 회원가입과 이메일 확인 기능이 켜져 있는지도 확인합니다.

## 4. Netlify 비밀 환경변수 설정

NovaCell 홈페이지를 배포하는 Netlify 사이트에서 **Site configuration → Environment variables**를 엽니다.

다음 두 환경변수를 추가합니다.

| 이름 | 값 |
|---|---|
| `SUPABASE_URL` | Supabase Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service_role 비밀 키 |

`SUPABASE_SERVICE_ROLE_KEY`는 관리자 테스트 이용권 발급 함수에서만 사용합니다. GitHub, HTML, JavaScript 파일에 넣으면 안 됩니다.

환경변수를 저장한 뒤 홈페이지를 다시 배포합니다.

## 5. 박 교수님 관리자 계정 등록

1. 먼저 홈페이지의 `회원가입`에서 박 교수님 관리자 이메일로 가입합니다.
2. 이메일 인증을 완료합니다.
3. Supabase **SQL Editor**에서 아래 SQL의 이메일을 실제 가입 이메일로 바꿔 실행합니다.

```sql
insert into public.admin_users (user_id)
select id from auth.users
where lower(email)=lower('실제_관리자_이메일')
on conflict (user_id) do nothing;
```

## 6. 배포 순서

반드시 아래 순서를 지킵니다.

1. `NovaCell_Website_v27_Member_Auth_Pilot.zip`의 압축을 풉니다.
2. 홈페이지 GitHub 저장소의 최상단에 내부 파일 전체를 올립니다.
3. Netlify 배포 완료 후 회원가입·로그인 화면을 확인합니다.
4. `NovaCell_Reflex_Therapy_v19_Entitlement_Gate.zip`을 Reflex Therapy 전용 프로젝트에 올립니다.
5. `NovaCell_Healing_Points_v32_Entitlement_Gate.zip`을 Healing Points 전용 프로젝트에 올립니다.

두 앱은 `novacell.kr`에 있는 공통 인증 프로그램을 불러옵니다. 그러므로 홈페이지를 가장 먼저 배포해야 합니다.

## 7. 테스트 회원에게 이용권 발급

1. 테스트 회원이 먼저 회원가입과 이메일 인증을 완료합니다.
2. 박 교수님 관리자 계정으로 로그인합니다.
3. 마이페이지에서 **테스트 이용권 관리**를 누릅니다.
4. 테스트 회원 이메일, 상품, 사용일수를 입력합니다.
5. **테스트 이용권 발급**을 누릅니다.

상품 코드는 다음 두 가지입니다.

- Reflex Therapy Guide: `reflex_therapy_1y`
- Healing Points: `healing_points_1y`

## 8. 정상 작동 확인 순서

1. 로그아웃 상태에서 `guide.novacell.kr` 접속 → 로그인 화면이 보여야 합니다.
2. 이용권이 없는 회원으로 로그인 → 이용권이 없다는 안내가 보여야 합니다.
3. Reflex 테스트 이용권 발급 → Reflex 앱만 열려야 합니다.
4. Healing Points는 계속 차단되어야 합니다.
5. Healing 테스트 이용권 발급 → Healing Points도 열려야 합니다.
6. 관리자 화면에서 1일 이용권으로 시험한 뒤 만료 처리 여부를 확인합니다.
7. PC와 스마트폰에서 회원가입·로그인·로그아웃을 각각 확인합니다.

## 9. 이번 시험 단계의 범위

- 실제 회원가입과 이메일 인증
- 로그인·로그아웃
- 비밀번호 재설정
- 마이페이지
- 회원별 상품 이용권과 만료일
- 관리자 테스트 이용권 발급
- 두 앱의 이용권 입장 화면

정식 판매 전 다음 단계에서는 결제 승인 서버, 결제 완료 시 자동 이용권 발급, 환불·취소 처리, 더 강한 서버 기반 콘텐츠 보호를 추가해야 합니다.
