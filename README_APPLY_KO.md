# NovaCell v31 통합 패치 적용 안내

이 압축 파일은 기존 홈페이지 전체를 대체하는 파일이 아니라, 현재 정상 운영 중인 홈페이지에 덮어쓰는 **업데이트 패치**입니다.

## 포함된 변경

1. 제품 홍보명 변경
   - 한국어: `노바셀 미세전류 전압 치료기`
   - 영어: `NovaCell High Voltage & Microcurrent`
   - 식약처 허가 고지에는 공식 품목명 `2등급 의료용 조합자극기`를 유지했습니다.
2. 로그인·회원가입 화면에 Google, 카카오, 네이버 간편 로그인 버튼을 추가했습니다.
3. 로그인·회원가입·비밀번호 재설정 화면의 비밀번호 입력란에 보기/숨기기 버튼을 추가했습니다.
4. 기존 `js/novacell-auth-config.js`는 포함하지 않아 현재 Supabase 연결값을 덮어쓰지 않습니다.

## 적용 순서

1. 현재 GitHub 저장소를 백업하거나 새 브랜치를 만듭니다.
2. 이 압축 파일을 풀어 나온 `css`, `js`, `ko`, `en` 폴더를 저장소 최상위 폴더에 복사합니다.
3. 같은 이름의 파일만 덮어씁니다.
4. `SOCIAL_LOGIN_SETUP_KO.md`에 따라 Google·카카오 제공자 설정을 끝냅니다.
5. 설정 완료 후 한 번에 커밋하고 Netlify 배포를 확인합니다.

## 주의

- Google·카카오 로그인은 각 개발자 콘솔의 Client ID와 Client Secret 없이는 동작하지 않습니다.
- Client Secret은 HTML, JavaScript, GitHub에 절대 넣지 말고 Supabase의 Provider 설정 화면에만 입력합니다.
- 네이버 버튼은 코드와 디자인이 준비되어 있지만 기본값은 비활성입니다. 네이버의 중첩형 회원정보 응답과 Supabase 사용자 생성을 실제 계정으로 검증한 뒤 `novacell-auth-config.js`에 `naverOAuthEnabled: true`를 추가해 활성화합니다.
- 네이버 이메일 주소(`@naver.com`)는 지금도 일반 이메일 회원가입으로 사용할 수 있습니다.

