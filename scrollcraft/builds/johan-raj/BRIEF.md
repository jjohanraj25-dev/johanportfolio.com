# BRIEF — Johan Raj J, portfolio

**Self-authored under explicit creative delegation.** Johan asked for "the best output"
and supplied a written to-do list instead of sitting an interview. The aesthetic
direction below is quoted from that list; the structural decisions are authored and
labelled as such.

## Source of truth

`C:\Users\DELL\Desktop\add on portfolio\To do.docx`, verbatim:

1. Add the pictures in the respective places mentioned in each folders
2. Remove supply chain case study column in projects
3. Fill data analytics project as "A DATA DRIVEN ANALYTICAL STUDY OF LOT-WISE
   PROFITABILITY AT WHITE GIANT CASHEWS USING POWER BI"
4. Connect with Higgsfield AI and add animations in required possible places
5. Do required alterations in the portfolio such that the outcome is crisp, catchy,
   cool trendy looking colours, fonts and maintains professionalism

Prior decisions carried forward from the base build (his own answers, earlier session):
positioning is **healthcare + business**; public contact is **email, LinkedIn and city
only** — no phone number, no street address.

## The eight topics

1. **Vibe.** Authored from item 5: crisp, catchy, trendy, professional. References:
   a printed science feature, a Monocle-style profile spread, an eye chart.
2. **Journey.** Authored: his career reads as chapters in the order he lived them —
   the clinic, the counter, the community, the question he published, the numbers,
   the lens. Ends at how to reach him.
3. **Energy.** Calm and formal at the title page, steady through the working chapters,
   one loud moment at the research, quiet again at the close.
4. **Feeling, and the one moment.** See the curve and the peak below.
5. **The thing no other site does.** His published paper is about *chromostereopsis*:
   red and blue at the same physical distance appear to sit at different depths
   because the eye focuses the two wavelengths differently. No other portfolio can
   make the visitor's own eyes perform its owner's research. That is the peak and the
   signature move.
6. **Distance from premium-minimal.** Editorial, not minimal. Real photographs, real
   captions, chapter furniture, high type contrast.
7. **One world or distinct scenes?** Authored: **distinct chapters**. A career is not
   one continuous place, and the hard cut between grounds is what makes it read as a
   feature article rather than a slideshow.
8. **Assets.** All real, all his: 22 photographs and screenshots across ten folders.
   **Nothing is generated.** Higgsfield AI reports 0 credits on a free plan, so no AI
   image or video was produced; every frame on the page is a photograph Johan supplied.
   Motion is authored in CSS and JS rather than pre-rendered, which also keeps the page
   fast on a phone.

## Grammar: chaptered editorial

The page is a printed feature about a person. Chapters are the unit. Hard cuts between
grounds, media in its own column with a caption, a folio in the margin instead of a
fixed marketing bar, a colophon instead of a CTA island.

Why the other seven lost:

- **Filmic one-shot** — carries a burden of proof, and his content is credentials in
  sequence, not one emotional arc. It is also the shape his base site already had.
- **Live surface** — he is not a product. His Power BI work exists as screenshots, and
  a div-built fake dashboard is banned.
- **Continuous world** — no geography, no footage, and the most fragile thing to build.
- **Typographic poster** — he has 22 real photographs. A type-only page throws away the
  single most valuable asset he owns, and to-do item 1 asks for the opposite.
- **Gallery / catalog** — the closest rival, and wrong on two counts: his chapters are
  sequential rather than equivalent objects, and museum labels forbid the persuasion a
  job-seeking close needs.
- **Split stage** — tempting, because he genuinely is two things. But it forces five
  internships, four degrees and a photo essay into two columns, and its collapse ending
  would declare one half of his career the winner. Neither half wins; they combine.
- **Rhythmic cutlist** — an energy-brand grammar. Wrong register for healthcare, and it
  bans the dwell the research chapter is built on.

## The feeling curve

Written before the chapters existed.

```
0  Arrival      his name at plate scale on ink, three type planes at different depths
1  Recognition  a portrait, then his hands on a slit lamp: a real person in a real room
2  Competence   the counter and the outreach camp, plainly captioned, dates that check out
3  Curiosity    a published abstract, set quiet and small. The silence before the peak
4  WONDER       PEAK. Red and blue separate and the reader's own eyes see false depth
5  Clarity      the same curiosity pointed at money: four dashboards travelling sideways
6  Intimacy     his own photographs, no argument attached
7  Resolve      a colophon. The smallest type on the site, an address, and a full stop
```

No two adjacent chapters carry the same feeling. Chapter 3 is authored silence, not
dead scroll: it is a short, still, text-only chapter whose whole job is to make
chapter 4 land.

## The peak

> the screen went black and two words pulled apart, one red one blue, and even though
> they were flat on the glass one of them was floating in front of the other. Then it
> told me that is what his paper measured.

Chapter IV. It gets the largest span on the page, the darkest ground, and the only
pinned act in the build.

## The tell-someone sentence

> It's the site where the red word and the blue word pull apart and your own eyes see
> depth that isn't there.

## The signature move: the chromostereopsis plate

A pinned optical plate. Two copies of the same word, one in long-wavelength red and one
in short-wavelength blue, sit exactly on top of each other on a black ground. Scroll
drives them apart along the depth axis, not the screen axis: the red plane grows and
warms, the blue plane recedes and cools, and the eye's own chromatic aberration does the
rest. A focus control lets the visitor drive the separation by hand and feel their eyes
re-accommodate. It ends with the plate resolving back to one word and the paper's real
citation underneath.

Bespoke JS reading `--sc-p`. The engine is untouched. It is not in the kit, it is not a
recoloured spotlight, and no other portfolio can use it, because it is the subject of
his own research.

## Fingerprint gate

Registry `scrollcraft/FINGERPRINTS.md` is empty. This is the first build in it, so there
is no row to clear. The row gets appended after shipping.

## Palette and type, with the traps avoided

Two grounds, hard cut between chapters, so the accent carries two stops of one hue as
taste.md permits.

- Ink ground `#0C0E12`, bone ink `#F2EFE9`, cool soft ink `#A2A8B4`, amber `#FFC043`
- Paper ground `#EDEDE8`, blue-black ink `#14161A`, cool soft ink `#565C66`, deep amber `#8A5300`

The cream-and-brass artisan palette is banned and this is deliberately not it: the paper
is cool rather than warm, the dark is blue-black rather than espresso, and the accent is a
saturated signal amber rather than metallic brass. Red and blue appear **only** inside the
chromostereopsis plate, where they are the subject under study, not decoration.

Display **Archivo**, text **Instrument Sans**. Two families, no third. Inter is avoided
as a non-decision. No mono face is loaded; labels are Archivo at wide tracking.

## Score

| # | Chapter | Feeling | Device | Why this one |
|---|---|---|---|---|
| 0 | Title page | Arrival | `flow` + `parallax` type planes | Depth without media, which is what this grammar's hero allows |
| I | The Clinic | Recognition | `reveal` + `in` | A wipe at a chapter boundary is the page turning |
| II | The Counter, The Community | Competence | `parallax` in the media column + `count` | Real figures only: 5 placements, 7.85, 7.87 |
| III | The Question | Curiosity | `in` only | The quiet act. No motion beyond the fade, on purpose |
| IV | **The Plate** | **Wonder** | `pin` + bespoke | The peak. Largest span, darkest ground, only pin |
| V | The Numbers | Clarity | `pan` | Lateral travel reads as breadth: four views of one study |
| VI | The Lens | Intimacy | `reveal` | His photographs, arriving one at a time |
| — | Colophon | Resolve | `in` | Running text, not a button island |

Seven device families across eight chapters, never the same one twice in a row, zero
scrub acts (there is no footage, and none was invented).
