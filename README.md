# Johan Raj J — portfolio

A scroll-driven editorial feature in six chapters. Plain HTML, CSS and JavaScript.
No build step, no framework, no dependencies to install.

## View it

Double-click `index.html`, or serve the folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Structure

```
index.html            The whole page. Chapters are commented: I … VI, then the colophon.
css/feature.css       Design tokens, the two grounds, layout, the chromostereopsis plate.
js/feature.js         Folio, ground switching, the plate. Loads after the engine.
engine/               scrollcraft.css + scrollcraft.js. The scroll engine; do not edit.
assets/img/           Every photograph, processed for the web (WebP).
assets/favicon.svg    The JR monogram.
scrollcraft/          BRIEF.md (why the page is shaped this way) and the build registry.
design-system/        The earlier UI/UX Pro Max design system, kept for reference.
previous-version/     The first portfolio, kept intact in case you want anything back.
```

## The two grounds

Each chapter paints its own background and hard-cuts to the next. The tokens are at the
top of `css/feature.css`:

| | Ink chapters | Paper chapters |
|---|---|---|
| Background | `#0C0E12` | `#EDEDE8` |
| Text | `#F2EFE9` | `#14161A` |
| Secondary text | `#A3A9B5` | `#565C66` |
| Accent | `#FFC043` | `#8A5300` |

To change a chapter's ground, swap `ch--ink` for `ch--paper` on its `<section>` and update
its `data-ground` attribute to match, so the folio flips with it.

Type is Archivo (headings) and Instrument Sans (body), loaded from Google Fonts.

## Editing the content

Everything is real text in `index.html`. Useful anchors:

- Each chapter starts with a comment banner, e.g. `<!-- ====== III · QUESTION ====== -->`
- Captions follow one schema: **Bold subject.** Then dates, then one clause of fact.
- The chapter index lives in two places, the desktop folio and the mobile sheet. If you
  rename a chapter, change both.

### Captions worth making more specific

Three captions describe photographs I could not verify from the files alone. Replace them
with the real details when you get a moment:

- `Sunset.` in chapter VI
- `Basilica.` in chapter VI
- `The arch, SRM Kattankulathur.` in chapter VI

### Photographs

Swap any image by replacing the file in `assets/img/` and keeping the name, or by pointing
the `src` at a new file. Every `<img>` carries `width` and `height` so the layout does not
jump while the page loads. If you add a new photo, run it through the same treatment:
crop, then export WebP at about 1200px wide and quality 82 to 86.

## Chapter IV

The red and blue plate is a live demonstration of chromostereopsis, the subject of the
paper cited there. It is built from CSS and about 40 lines of JavaScript in
`js/feature.js`; nothing is pre-rendered, so it costs no video and works offline. The
slider lets a reader drive the separation by hand. Under `prefers-reduced-motion` it
renders in its split state without the scroll choreography, because the illusion is
colour rather than movement.

## Publishing it

- **GitHub Pages**: push this folder to a repository, then Settings → Pages → deploy from
  `main`. Upload the whole folder, `engine/` and `assets/` included.
- **Netlify**: drag the folder onto the dashboard.

Set `og:image` to your live domain once you have one. It currently points at a relative
path, which works on the site but not in every chat app's link preview:

```html
<meta property="og:image" content="https://your-domain/assets/img/og-cover.jpg">
```

## Still to do

- [ ] Add a public résumé PDF and link it from the colophon (leave out the phone number
      and the home address, as on the rest of the site)
- [ ] Make the three photography captions specific
- [ ] Confirm the internship descriptions read the way you want them to
