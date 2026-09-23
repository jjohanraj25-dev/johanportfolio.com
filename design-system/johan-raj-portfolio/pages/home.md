# Page Override — Home (single-page portfolio)

> These rules override `../MASTER.md` for `index.html`.

## Why this override exists
The generator classified the project as "Resume / CV Builder" and suggested a
"Product Demo + Features" layout. That's wrong for a personal portfolio, so the page uses
the **Portfolio / Hero-centric** pattern from the landing database instead. An earlier query also
suggested Brutalism with handwritten fonts (Caveat/Quicksand); that was rejected as unprofessional.

## Decisions (confirmed with the site owner)
- Positioning: **Healthcare + Business** ("Optometrist · MBA Candidate · Data & Operations")
- Public contact: email + LinkedIn + city only (no phone, no street address)
- Theme: light + dark (follows OS, manual toggle persisted in `localStorage`)

## Section order
Hero → About (+ stats) → Education → Experience (timeline) → Skills → Projects & Research
→ Achievements → Beyond work (+ gallery) → Contact → Footer

## Palette additions (dark theme)
| Role | Light | Dark |
|------|-------|------|
| Background | `#F8FAFC` | `#0B1120` |
| Alt section | `#EEF2F7` | `#0F172A` |
| Card | `#FFFFFF` | `#131C2F` |
| Heading | `#1E3A5F` | `#F8FAFC` |
| Body text | `#0F172A` | `#E2E8F0` |
| Muted text | `#475569` | `#94A3B8` |
| Accent (buttons) | `#2563EB` | `#2563EB` |
| Accent text/icons | `#1D4ED8` | `#93C5FD` |
| Success text | `#166534` on `#DCFCE7` | `#86EFAC` on green/14% |

Green `#16A34A` is not used for small text (3.3:1 fails); `#166534` is used instead.

## Motion
IntersectionObserver fade-rise (16px, 500ms, ease-out, 70ms stagger). Everything renders
in its final state under `prefers-reduced-motion` or without JS. No GSAP.

## Image slots
All image slots reserve space with `aspect-ratio`, so dropping in real photos causes no layout shift.
See `assets/images/README.md`.
