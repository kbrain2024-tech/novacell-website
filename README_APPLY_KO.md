# NovaCell v32 우선 수정 패치

이 파일은 **전체 홈페이지가 아니라 안전한 소형 패치**입니다. 현재 운영 중인 회원가입, 로그인, 제품 가격, 이미지와 다른 페이지를 덮어쓰지 않습니다.

## 포함된 수정

1. 한국어·영어 리플렉스 테라피 상세 페이지에 앱 열기 버튼 추가
   - 한국어: `리플렉스 테라피 앱 열기`
   - 영어: `Open Reflex Therapy App`
   - 연결 주소: `https://guide.novacell.kr/`
2. 영어 상세 페이지의 표준 주소를 `/en/reflex-therapy-guide`로 통일
3. 기존 `/en/reflex-guide` 주소는 새 표준 주소로 한 번만 이동
4. 스마트폰에서 새 버튼이 한 줄씩 넓게 표시되도록 보완

## GitHub 적용 방법

압축을 푼 뒤, 이 폴더 안의 파일과 폴더를 NovaCell 홈페이지 저장소의 **최상위 위치**에 그대로 업로드합니다. GitHub에서 같은 이름의 아래 파일만 교체하거나 추가합니다.

- `_redirects`
- `css/styles.css`
- `ko/reflex-therapy-guide.html`
- `en/reflex-therapy-guide.html` (새 표준 영문 페이지)

기존 `en/reflex-guide.html`은 삭제하지 않아도 됩니다. `_redirects`가 새 주소로 안전하게 연결합니다.

## 배포 후 확인 주소

- `https://novacell.kr/ko/reflex-therapy-guide`
- `https://novacell.kr/en/reflex-therapy-guide`
- `https://novacell.kr/en/reflex-guide` → 위 영문 표준 주소로 1회 이동
- 두 상세 페이지의 앱 열기 버튼 → `https://guide.novacell.kr/`

## 로그인 관련 안내

이 패치는 기존 로그인·회원가입 파일이나 공급자 설정을 변경하지 않습니다. Google·Kakao 실제 로그인 완료 여부는 각 공급자의 키와 허용 콜백 주소가 설정된 뒤 운영 주소에서 별도로 시험해야 합니다. Naver 로그인은 현재 준비 중 상태를 유지합니다.
