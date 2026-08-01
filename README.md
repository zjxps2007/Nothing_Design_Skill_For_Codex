# Nothing Design Skill

**English** · [한국어](./README.ko.md)

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

## License

MIT
