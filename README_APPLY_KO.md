# NovaCell v34 — v29 정상 대표 이미지 복원 패치

이 패치는 현재 `novacell.kr`에서 화면 안에 같은 화면이 반복되어 보이는 문제를 해결합니다.

## 원인

완성된 페이지 전체 캡처가 기존 대표 이미지 프레임 안에 들어가면서 다음 현상이 발생했습니다.

- Healing Points 화면 안에 작은 카드와 화면이 다시 표시됨
- Reflex Therapy Guide 화면 안에 같은 상세 페이지가 다시 표시됨

## 수정 내용

첨부된 `NovaCell_Website_v29_Legal_Access_Maintenance(1).zip`에서 정상 원본 두 장을 추출하여 그대로 복원했습니다.

- `images/healing-points-main.jpg`
- `images/reflex-guide-main-gate-v2.png`

## 적용 방법

1. 이 압축파일을 풉니다.
2. 안에 있는 `images` 폴더를 NovaCell 홈페이지 GitHub 저장소 최상위에 업로드합니다.
3. 위 두 파일을 교체합니다.
4. Netlify 자동 배포 완료 후 브라우저에서 강력 새로고침을 합니다.
   - Windows: `Ctrl + F5`
   - Mac: `Command + Shift + R`
5. 한국어와 영어의 Reflex Therapy Guide 및 Healing Points 화면을 확인합니다.

## 변경하지 않는 항목

- HTML 및 CSS
- 가격과 문구
- 로그인·회원가입
- 한국어·영어 전환
- 메뉴와 링크
- 회원 이용권 접근 제한
- `guide.novacell.kr`
- `healing.novacell.kr`

현재 정상 기능을 보호하기 위해 이미지 두 장 이외의 파일은 포함하지 않았습니다.
