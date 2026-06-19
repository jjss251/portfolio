<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 프로젝트 규칙

## 목적

- 박준성(UX 디자이너 / HCI 연구자)의 **개인 포트폴리오 사이트**.
- 단순 이력서가 아니라 **AI 시대의 개인 브랜딩 사이트**. 콘텐츠와 인터랙션이 "어떤 사람인지"를 드러내야 한다.

## 기술 스택

- **Next.js** (App Router, `app/` 디렉터리). 이 버전은 기존과 다를 수 있으니 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드를 확인한다.
- **shadcn/ui** — UI 컴포넌트의 기본 소스. 새 컴포넌트가 필요하면 직접 만들기보다 shadcn에서 먼저 가져온다.
- **Tailwind CSS v4** — 스타일링. 색상/타이포 토큰은 `app/globals.css`의 CSS 변수를 활용한다.
- **lucide-react** — 아이콘은 전부 lucide에서 사용한다. 다른 아이콘 라이브러리를 추가하지 않는다.

## 디자인 원칙

- **Apple 스타일의 깔끔함**: 여백을 충분히 두고, 한 화면에 한 가지 메시지. 장식보다 콘텐츠와 타이포그래피로 위계를 만든다.
- **Linear 수준의 정돈된 UI**: 일관된 간격 스케일, 절제된 색 대비, 정렬·그리드를 엄격하게 지킨다. 미묘하고 의도된 모션만 사용한다.
- **shadcn 컴포넌트 우선**: 버튼, 카드, 다이얼로그 등은 shadcn 컴포넌트로 구성하고 Tailwind로 확장한다. 마크업을 처음부터 새로 만들기 전에 shadcn에 대응 컴포넌트가 있는지 먼저 확인한다.

## 코드 컨벤션

- 다크모드는 **지원하지 않는다**. `dark:` 변형이나 `.dark` 분기를 추가하지 않는다.
- 컴포넌트는 함수형으로 작성하고, 의도가 드러나지 않는 부분에만 주석을 단다.
- 한국어 콘텐츠가 기본이며, 페이지 `lang`은 `ko`로 둔다.
