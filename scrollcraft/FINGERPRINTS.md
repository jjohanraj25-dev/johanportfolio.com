# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| **johan-raj** (2026-09-19) | Chaptered editorial | Folio in the left margin: chapter numeral + title, updating as chapters pass, clickable; a 46px folio strip on phones. No fixed bar, no CTA in the chrome | Title page: type only, three type planes at different parallax rates, no media above the fold | 8 chapters, ~17.5vh desktop: flow > reveal > parallax > flow(silence) > **pin 3.6** > pan 2.8 > reveal > flow. Zero scrub acts | Colophon on paper: the smallest type on the site, CTA as a line of running text, three columns of record, then a credits line | **The chromostereopsis plate**: one word printed twice, pulled into long- and short-wavelength copies by scroll so the reader's own eyes see false depth, with a separation slider, resolving back to one word | Photographic, editorial, ink/paper hard cuts, one amber accent in two stops | Static HTML/CSS/JS |

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- **Chaptered editorial** as a grammar, with hard-cut ink/paper grounds.
- **The margin folio** as the only chrome, flipping colour with the ground beneath it.
- **A type-only title page** whose depth comes from parallaxed type planes rather than media.
- **The colophon close**: running-text CTA, no button island, smallest type on the page.
- **The chromostereopsis plate** as a signature move. It is tied to this person's published
  research and cannot be reused honestly anywhere else.
- The **8-chapter, ~17.5vh, zero-scrub** shape. A later build reaching for a single long pin
  as its only pinned act should check it is not repeating this one.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
