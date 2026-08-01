# Nothing Design Skill

[English](./README.md) · **한국어**

Nothing의 시각 언어에서 영감을 받은 Codex용 디자인 스킬입니다. 단색, 타이포그래피 중심, 산업적인 인터페이스를 지향합니다.

이 저장소는 [dominikmartn/nothing-design-skill](https://github.com/dominikmartn/nothing-design-skill)을 Codex에서 사용할 수 있도록 수정한 버전입니다. 스위스 타이포그래피, OLED 블랙, 분할 진행 표시줄, 도트 매트릭스 모티프를 재사용 가능한 인터페이스 디자인 워크플로로 제공합니다.

![FIELDWORK 온실 대시보드 애니메이션 데모](preview.gif)

## 제공 기능

`$nothing-design`을 호출하거나 프롬프트에 `Nothing 스타일` 또는 `낫싱 스타일`을 명시하면 다음 원칙에 따라 UI를 설계하거나 구현합니다.

- 화면을 주요 정보, 보조 정보, 메타데이터의 세 단계로 구성
- Doto, Space Grotesk, Space Mono 기반 타이포그래피
- 다크·라이트 모드 디자인 토큰 제공
- 분할 진행 표시줄, 기계식 토글, 계기판 형태의 컴포넌트 제공
- HTML/CSS, SwiftUI, React/Tailwind 출력 지원

## 설치

`nothing-design` 폴더를 Codex 스킬 디렉터리에 복사합니다.

```sh
mkdir -p ~/.codex/skills
cp -R ./nothing-design ~/.codex/skills/
```

이 저장소의 루트에서 명령을 실행하세요. 설치 후 새 Codex 작업을 시작하면 스킬이 인식됩니다.

## 사용법

스킬 이름으로 직접 호출할 수 있습니다.

```text
$nothing-design React와 Tailwind로 반응형 시스템 모니터링 대시보드를 만들어줘.
```

또는 자연어로 Nothing 스타일을 명시해도 됩니다.

```text
기존 React 컴포넌트는 유지하고 이 설정 화면을 Nothing 스타일로 변경해줘.
```

일반적인 UI 요청에는 자동으로 적용되지 않으며, Nothing 디자인 언어를 명시적으로 요청할 때 사용됩니다.

## 데모

이 저장소에는 스킬의 타이포그래피, 위계, 토큰, 컴포넌트 규칙을 적용한 반응형 **FIELDWORK / NODE 07** 대시보드 데모가 포함되어 있습니다. Nothing의 로고나 제품 이미지는 사용하지 않았습니다.

```sh
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173/demo/`을 여세요. 다크·라이트 모드 전환과 기계식 환기구 스위치를 직접 조작할 수 있습니다.

## 구성

| 파일 | 설명 |
|------|------|
| `SKILL.md` | 디자인 철학, 제작 규칙, 작업 흐름 |
| `agents/openai.yaml` | Codex UI 메타데이터와 기본 호출 프롬프트 |
| `demo/` | 반응형 HTML/CSS/JavaScript 데모 |
| `references/tokens.md` | 색상, 글꼴, 간격, 모션 토큰 |
| `references/components.md` | 버튼, 카드, 목록, 표, 오버레이 패턴 |
| `references/platform-mapping.md` | HTML/CSS, React/Tailwind, SwiftUI, 목업 매핑 |

## 라이선스

MIT
