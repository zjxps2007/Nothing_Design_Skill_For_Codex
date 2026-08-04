# Nothing Design System — Platform Mapping

Read only the section matching the user's target platform. Preserve the target project's existing architecture and naming conventions.

## 1. HTML / CSS / WEB

Load fonts via Google Fonts `<link>` or `@import`. Use CSS custom properties, `rem` for type, `px` for spacing/borders. Dark/light via `prefers-color-scheme` or class toggle.

```css
:root {
  --black: #000000;
  --surface: #111111;
  --surface-raised: #1A1A1A;
  --border: #222222;
  --border-visible: #333333;
  --text-disabled: #666666;
  --text-secondary: #999999;
  --text-primary: #E8E8E8;
  --text-display: #FFFFFF;
  --accent: #D71921;
  --accent-subtle: rgba(215,25,33,0.15);
  --success: #4A9E5C;
  --warning: #D4A843;
  --interactive: #5B9BF6;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
}
```

---

## 2. REACT / TAILWIND

- Keep design tokens as CSS custom properties in the project's global stylesheet. Reference them from Tailwind utilities with arbitrary values such as `bg-[var(--surface)]` and `text-[var(--text-primary)]`, or map them through the project's existing theme configuration.
- Reuse existing primitives before creating new ones. Keep variants explicit (`primary`, `secondary`, `ghost`, `destructive`) and use data attributes for component state when the codebase already follows that pattern.
- Load Doto, Space Grotesk, and Space Mono once at the application shell or root layout. Do not import fonts inside individual components.
- Keep responsive behavior structural: stack or collapse secondary information before shrinking the primary display layer.
- Avoid constructing dynamic Tailwind class names that a build-time scanner cannot detect. Use complete literal classes or a variant map.
- Implement both modes with one token set and a theme selector. Do not duplicate whole component trees for dark and light mode.

---

## 3. SWIFTUI / iOS

Register fonts in Info.plist, bundle `.ttf` files. Use `@Environment(\.colorScheme)` for mode switching.

```swift
extension Color {
    static let ndBlack = Color(hex: "000000")
    static let ndSurface = Color(hex: "111111")
    static let ndSurfaceRaised = Color(hex: "1A1A1A")
    static let ndBorder = Color(hex: "222222")
    static let ndBorderVisible = Color(hex: "333333")
    static let ndTextDisabled = Color(hex: "666666")
    static let ndTextSecondary = Color(hex: "999999")
    static let ndTextPrimary = Color(hex: "E8E8E8")
    static let ndTextDisplay = Color.white
    static let ndAccent = Color(hex: "D71921")
    static let ndSuccess = Color(hex: "4A9E5C")
    static let ndWarning = Color(hex: "D4A843")
    static let ndInteractive = Color(hex: "5B9BF6")
}
```

Use the light values from the Dark/Light table in `tokens.md`. Define a small `Font` extension from the font stack table using `.custom("Doto"/"SpaceGrotesk-Regular"/"SpaceMono-Regular", size:)`. Verify the PostScript font names from the bundled files rather than assuming the filenames are valid names.

---

## 4. STATIC MOCKUPS / DESIGN ARTIFACTS

Use direct hex values rather than CSS variables. Keep dark and light mode on separate artboards or clearly separated frames. Include a compact annotation block for fonts, token values, spacing, and interaction states so the mockup can be implemented without guessing.

For raster mockups, preserve sharp 1px rules, unblurred surfaces, and square-ended chart marks. Avoid introducing gradients or soft shadows during image generation.
