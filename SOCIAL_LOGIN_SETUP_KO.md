# Google·카카오·네이버 간편 로그인 연결 안내

## 1. Supabase 공통 설정

Supabase Dashboard → Authentication → URL Configuration에서 다음을 확인합니다.

- Site URL: `https://novacell.kr`
- Redirect URLs:
  - `https://novacell.kr/login.html`
  - `https://novacell.kr/login.html?lang=ko`
  - `https://novacell.kr/login.html?lang=en`
  - `https://guide.novacell.kr/**`
  - `https://healing.novacell.kr/**`

Supabase Dashboard → Authentication → Providers 화면에 표시되는 Callback URL은 보통 아래 형식입니다.

`https://프로젝트참조값.supabase.co/auth/v1/callback`

이 Callback URL을 Google·카카오·네이버 개발자 설정에 등록합니다. `novacell.kr/login.html`을 제공자 Callback URL로 직접 입력하지 않습니다.

## 2. Google 로그인

1. Google Cloud의 Google Auth Platform에서 웹 애플리케이션용 OAuth Client를 만듭니다.
2. Authorized JavaScript origins에 `https://novacell.kr`을 추가합니다.
3. Authorized redirect URIs에 Supabase가 표시한 Callback URL을 추가합니다.
4. 범위는 `openid`, 이메일, 프로필 정보만 사용합니다.
5. 발급된 Client ID와 Client Secret을 Supabase → Authentication → Providers → Google에 입력하고 활성화합니다.
6. Google 동의 화면의 앱 이름, 로고, 개인정보처리방침 주소를 NovaCell 정보로 설정합니다.

## 3. 카카오 로그인

1. Kakao Developers에서 애플리케이션을 만들고 대표 도메인을 `https://novacell.kr`로 설정합니다.
2. 플랫폼 키에서 REST API 키를 확인합니다. 이 값이 Client ID입니다.
3. 카카오 로그인 Client Secret을 발급하고 활성화합니다.
4. 카카오 로그인 Redirect URI에 Supabase Callback URL을 등록합니다.
5. 동의항목에서 닉네임과 이메일을 설정합니다. 현재 NovaCell 회원·이용권 구조는 이메일을 기준으로 연결되므로 `account_email` 제공 동의를 필수로 준비하는 것이 안전합니다.
6. Supabase → Authentication → Providers → Kakao에서 REST API 키와 Client Secret을 입력하고 활성화합니다.
7. NovaCell의 현재 회원 테이블은 이메일이 없는 사용자를 전제로 하지 않으므로 Supabase의 `Allow users without an email`은 켜지 않습니다.

## 4. 네이버 로그인

네이버 로그인은 Supabase 기본 제공자가 아니므로 최종 실계정 검증이 필요합니다. 우선 Naver Developers에서 애플리케이션을 등록하고 이메일·이름 제공 권한을 신청합니다.

공식 엔드포인트는 다음과 같습니다.

- Authorization URL: `https://nid.naver.com/oauth2.0/authorize`
- Token URL: `https://nid.naver.com/oauth2.0/token`
- UserInfo URL: `https://openapi.naver.com/v1/nid/me`

Supabase Custom OAuth 제공자를 사용할 때 식별자는 코드와 맞게 `custom:naver`로 설정합니다. 다만 네이버 회원정보 응답은 사용자 정보가 `response` 객체 안에 들어가는 구조입니다. Supabase가 이 구조의 `id`와 `email`을 올바르게 해석하는지 실계정으로 먼저 검증해야 합니다. 검증에 실패하면 Netlify Function에서 네이버 콜백을 처리하는 별도 연결 방식으로 전환해야 합니다.

검증에 성공한 뒤에만 기존 `js/novacell-auth-config.js` 객체 안에 다음 한 줄을 추가합니다.

```js
naverOAuthEnabled: true,
```

## 5. 배포 전 필수 검사

- 한국어 로그인과 회원가입에서 Google·카카오 버튼이 각각 해당 계정 선택 화면을 여는지 확인
- 로그인 성공 후 원래 요청한 앱 또는 한국어 홈으로 돌아가는지 확인
- 동일 이메일로 일반 로그인과 소셜 로그인을 사용했을 때 중복 회원이 생기지 않는지 확인
- 카카오 계정이 이메일을 제공하지 않을 때 가입을 허용하지 않는지 확인
- 비밀번호 보기/숨기기 버튼이 로그인, 회원가입의 두 입력란, 비밀번호 재설정의 두 입력란에서 모두 작동하는지 확인
- 모바일 화면에서 버튼 높이가 충분하고 비밀번호 입력 글자가 눈 모양 버튼 아래에 가려지지 않는지 확인

## 보안 원칙

- Client Secret, Supabase service role key, Toss Secret Key를 GitHub에 올리지 않습니다.
- 프런트엔드에는 Supabase anon key만 사용합니다.
- 실제 운영 전에 Google·카카오 동의 화면과 개인정보처리방침의 수집 항목을 일치시킵니다.

