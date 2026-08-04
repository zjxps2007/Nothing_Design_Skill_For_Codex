# Nothing Design for Codex

**English** · [한국어](./README.ko.md)

A Codex plugin that packages a design skill inspired by Nothing's visual language. Monochrome, typographic, industrial.

This repository is a Codex-compatible adaptation of [dominikmartn/nothing-design-skill](https://github.com/dominikmartn/nothing-design-skill). It packages Swiss typography, OLED blacks, segmented progress bars, and dot-matrix motifs into a reusable interface-design workflow.

![Animated FIELDWORK greenhouse dashboard demo](preview.gif)

## What you get

Invoke `$nothing-design`, or explicitly ask for "Nothing style", and Codex will design or implement UI using these principles:

- Three-layer visual hierarchy (display, body, metadata — that's it)
- Space Grotesk + Space Mono + Doto font stack
- Full dark and light mode token system
- Segmented progress bars, mechanical toggles, instrument-style widgets
- Output as HTML/CSS, SwiftUI, or React/Tailwind

## Install as a Codex plugin (recommended)

Codex plugins can be installed from a repository marketplace with the Codex CLI. Add this repository, then install the plugin:

```sh
codex plugin marketplace add zjxps2007/Nothing_Design_Skill_For_Codex
codex plugin add nothing-design@nothing-design-for-codex
```

Confirm that it is installed:

```sh
codex plugin list
```

Start a new Codex task so the skill is discovered. In the Codex app, you can also open **Plugins**, select **Nothing Design for Codex** after adding the marketplace, and choose **Install**.

See the official [plugin packaging guide](https://developers.openai.com/plugins/build/plugins) and [Codex plugin CLI reference](https://learn.chatgpt.com/docs/developer-commands?surface=cli#cli-codex-plugin) for details.

### Update

Refresh the marketplace and reinstall the latest available version:

```sh
codex plugin marketplace upgrade nothing-design-for-codex
codex plugin add nothing-design@nothing-design-for-codex
```

### Manual skill install

If your Codex version does not yet include plugin commands, clone this repository and copy the packaged skill into your Codex skills directory:

```sh
mkdir -p ~/.codex/skills
cp -R ./plugins/nothing-design/skills/nothing-design ~/.codex/skills/
```

Run the manual install commands from this repository's root, then start a new Codex task.

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
| `.agents/plugins/marketplace.json` | Repository marketplace used by `codex plugin` |
| `plugins/nothing-design/.codex-plugin/plugin.json` | Codex plugin manifest |
| `plugins/nothing-design/skills/nothing-design/SKILL.md` | Design philosophy, craft rules, workflow |
| `plugins/nothing-design/skills/nothing-design/agents/openai.yaml` | Codex UI metadata and default invocation prompt |
| `demo/` | Original responsive HTML/CSS/JS demo |
| `plugins/nothing-design/skills/nothing-design/references/tokens.md` | Colors, fonts, spacing, motion tokens |
| `plugins/nothing-design/skills/nothing-design/references/components.md` | Buttons, cards, lists, tables, overlays |
| `plugins/nothing-design/skills/nothing-design/references/platform-mapping.md` | HTML/CSS, React/Tailwind, SwiftUI, and mockup mappings |

## License

MIT
