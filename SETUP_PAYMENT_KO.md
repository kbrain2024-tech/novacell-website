# NovaCell 회원 결제·자동 이용권 설정 안내 (v30)

이 버전은 기존 회원가입·로그인·앱 이용권 차단 기능을 유지하면서 **토스페이먼츠 국내 테스트 결제**와 **결제 완료 후 365일 이용권 자동 발급**을 추가합니다.

## 가장 중요한 배포 원칙

- 현재 운영 중인 `js/novacell-auth-config.js`의 실제 Supabase URL과 공개 키를 보존하세요.
- `SUPABASE_SERVICE_ROLE_KEY`와 `TOSS_SECRET_KEY`는 GitHub·HTML·JavaScript에 넣지 않습니다.
- 처음에는 반드시 토스 테스트 키만 사용합니다.
- 테스트 결제·이용권 발급·취소 대응을 모두 확인하기 전에는 운영 키로 바꾸지 않습니다.

## 1. 데이터베이스 업그레이드

1. Supabase의 **SQL Editor**를 엽니다.
2. `supabase/payment_upgrade.sql` 전체를 복사하여 한 번 실행합니다.
3. 실행 후 Table Editor에서 `payment_orders` 테이블이 생성되었는지 확인합니다.
4. 기존 `products` 테이블에서 아래 두 상품과 가격을 확인합니다.
   - `reflex_therapy_1y`: 99,000원 / 365일
   - `healing_points_1y`: 330,000원 / 365일

## 2. Netlify 비밀 환경변수

NovaCell 홈페이지 Netlify 프로젝트의 **Site configuration → Environment variables**에 다음 값을 등록합니다.

| 이름 | 설명 |
|---|---|
| `SUPABASE_URL` | 현재 회원 시스템에 사용하는 Supabase Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | 서버 전용 service_role 비밀 키 |
| `TOSS_CLIENT_KEY` | 토스페이먼츠 테스트 클라이언트 키 |
| `TOSS_SECRET_KEY` | 토스페이먼츠 테스트 시크릿 키 |
| `SITE_URL` | `https://novacell.kr` |

환경변수 저장 후 **Deploys → Trigger deploy → Deploy site**로 다시 배포합니다.

## 3. 배포 파일

홈페이지 저장소에 v30 내부 파일 전체를 올립니다. 단, GitHub에 이미 실제 값이 설정된 `js/novacell-auth-config.js`는 v30의 예시 파일로 덮어쓰지 마세요.

추가되는 주요 주소:

- `/products.html`: 이용권 선택
- `/checkout.html`: 로그인 회원 결제
- `/payment-success.html`: 승인 및 자동 이용권 발급
- `/payment-fail.html`: 결제 실패 안내

## 4. 필수 테스트 순서

1. 일반 테스트 회원으로 가입·이메일 인증·로그인을 완료합니다.
2. 마이페이지에서 기존 이용권 상태를 확인합니다.
3. `products.html`에서 Reflex Therapy 이용권을 선택합니다.
4. 토스 테스트 결제를 완료합니다.
5. 결제 완료 화면에서 마이페이지로 이동합니다.
6. `reflex_therapy_1y`의 만료일이 365일 뒤로 표시되는지 확인합니다.
7. `guide.novacell.kr`에 입장되는지 확인합니다.
8. Healing Points는 아직 차단되는지 확인합니다.
9. Healing Points도 같은 방식으로 별도 테스트합니다.
10. 같은 결제 완료 주소를 새로고침해도 중복 이용권이 생기지 않는지 확인합니다.

## 5. 정식 판매 전 남은 작업

- 토스페이먼츠 사업자 심사·전자결제 계약
- 이용약관·개인정보처리방침·전자상거래 환불정책 최종 검토
- 취소·부분취소·환불 시 이용권 회수 관리자 기능
- 결제 완료 이메일 및 영수증 안내
- 소액 운영 결제와 취소를 실제 카드로 1회 검증
- 해외 결제용 Stripe 계정·테스트 키·웹훅 연결

영문 페이지의 US$100 및 US$300은 표시 가격입니다. v30에서 실제로 활성화되는 결제는 국내 원화 토스 결제이며, 달러 결제 버튼은 Stripe 연결 전까지 구매 문의로 유지됩니다.

## 장애 시 원칙

결제 문자를 받았는데 완료 화면에서 오류가 나오면 재결제하지 않습니다. Supabase의 `payment_orders`와 토스 결제내역을 대조한 뒤 관리자 테스트 이용권 발급 기능으로 임시 복구하고 원인을 확인합니다.
