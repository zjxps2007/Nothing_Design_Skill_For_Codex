# Nothing Design Skill

English · [한국어](#한국어-안내)

A Codex skill inspired by Nothing's visual language. Monochrome, typographic, industrial.

This repository is a Codex-compatible adaptation of [dominikmartn/nothing-design-skill](https://github.com/dominikmartn/nothing-design-skill). It packages Swiss typography, OLED blacks, segmented progress bars, and dot-matrix motifs into a reusable interface-design workflow.

![Animated FIELDWORK greenhouse dashboard demo](preview.gif)

## What you get

Invoke `$nothing-design`, or explicitly ask for "Nothing style", and Codex will design or implement UI using these principles:

- Three-layer visual hierarchy (display, body, metadata — that's it)
- Space Grotesk + Space Mono + Doto font stack
- Full dark and light mode token system
- Segmented progress bars, mechanical toggles, instrument-style widgets
- Output as HTML/CSS, SwiftUI, or React/Tailwind

## Install

Copy the `nothing-design` folder into your Codex skills directory:

```sh
mkdir -p ~/.codex/skills
cp -R ./nothing-design ~/.codex/skills/
```

Run these commands from this adapted checkout. Start a new Codex task after installation so the skill is discovered.

## Use

```text
$nothing-design Build a responsive system-monitor dashboard in React and Tailwind.
```

You can also request the style naturally:

```text
Restyle this settings screen in Nothing style. Preserve the existing React components.
```

The skill intentionally does not trigger for generic UI requests unless Nothing's design language is explicitly requested.

## Demo

The repository includes an original responsive dashboard demo named **FIELDWORK / NODE 07**. It uses the skill's typography, hierarchy, token, and component rules without reproducing Nothing branding or product imagery.

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/demo/`. The demo includes a dark/light mode control and an interactive mechanical vent switch.

## What's inside

| File | |
|------|---|
| `SKILL.md` | Design philosophy, craft rules, workflow |
| `agents/openai.yaml` | Codex UI metadata and default invocation prompt |
| `demo/` | Original responsive HTML/CSS/JS demo |
| `references/tokens.md` | Colors, fonts, spacing, motion tokens |
| `references/components.md` | Buttons, cards, lists, tables, overlays |
| `references/platform-mapping.md` | HTML/CSS, React/Tailwind, SwiftUI, and mockup mappings |

## 한국어 안내

Nothing의 시각 언어에서 영감을 받은 Codex용 UI 디자인 스킬입니다. 단색 중심의 색상, 강한 타이포그래피 위계, 산업적인 인터페이스를 HTML/CSS, React/Tailwind, SwiftUI 등에 적용할 수 있습니다.

### 주요 기능

- 화면을 주요 정보, 보조 정보, 메타데이터의 세 단계로 구성
- Doto, Space Grotesk, Space Mono 기반 타이포그래피
- 다크·라이트 모드 디자인 토큰 제공
- 분할 진행 표시줄, 기계식 토글, 계기판 형태의 컴포넌트 제공
- 일반적인 UI 요청에는 자동 적용되지 않으며, Nothing 스타일을 명시적으로 요청할 때 사용

### 설치

저장소 루트에서 다음 명령을 실행합니다.

```sh
mkdir -p ~/.codex/skills
cp -R ./nothing-design ~/.codex/skills/
```

설치 후 새 Codex 작업을 시작하면 스킬이 인식됩니다.

### 사용법

스킬 이름으로 직접 호출할 수 있습니다.

```text
$nothing-design React와 Tailwind로 반응형 시스템 모니터링 대시보드를 만들어줘.
```

또는 자연어로 Nothing 스타일을 명시해도 됩니다.

```text
기존 React 컴포넌트는 유지하고 이 설정 화면을 Nothing 스타일로 변경해줘.
```

### 데모 실행

```sh
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173/demo/`을 열면 **FIELDWORK / NODE 07** 데모를 확인할 수 있습니다. 다크·라이트 모드 전환과 기계식 환기구 스위치를 직접 조작할 수 있습니다.

## License

MIT
