# Featured work grid

Date: 2026-09-07
Status: approved

## Goal

Recruiter hitting EXPERIENCES sees current Haus + Vogue work first, as larger cards, then everything else. Card titles are readable without hovering.

## Non-goals

- Case-study copy rewrites or new screenshots
- SEO / prerender / sitemap / JSON-LD
- Video compression
- Featured shelf vs archive toggle (old posts stay in the lower grid)
- New nav item
- Adding a test runner

## Landing structure

`Landing` stays Hero → About → work → Contact.

Work is one `<section id="work">` (existing `SECTION_IDS.work`) wrapping two inner sections:

1. **Selected work** — the 6 featured posts, in this order:
   - `haus-workflow`
   - `haus-storefront-elementor-widgets`
   - `haus-storefront-components`
   - `haus-nx-monorepo`
   - `wearehaustech`
   - `vogue`
2. **More experiences** — remaining posts (`POSTS` minus those 6 IDs). Existing type + language filters. Default filter stays `All`.

Nav EXPERIENCES still calls `goToSection("work")` and lands on Selected work. No duplicate cards between the two lists.

Unknown featured ID: fail at module init (`POSTS_BY_ID[id]` missing throws). Do not silently skip.

## Layout

Selected work: CSS grid 2 columns desktop, 1 column below 640px. Three rows of larger `PostCard`s.

- Aspect `16 / 9` (lower grid stays `4 / 3`)
- Taller min-height than the compact card
- Title **and** subtitle always visible

More experiences: keep the current 3 / 2 / 1 column breakpoints, `4 / 3` cards, existing `FilterBar`s.

Compact cards: **title always visible**. Subtitle stays hover (and current `hover: none` always-on) so the smaller overlay does not fill with two lines by default.

Hover lift on the card stays. Overlay is no longer `opacity: 0` on desktop.

## Components

- `src/data/featured.ts` — `FEATURED_POST_IDS` (readonly tuple in the order above), `featuredPosts`, `restPosts` derived from `POSTS` / `POSTS_BY_ID`. Featured order is the tuple order, not `sortPostsByDate`.
- `src/components/FeaturedSection/` — heading "Selected work", 2-col grid of `PostCard variant="featured"`.
- `ExperienceSection` — drop `id={SECTION_IDS.work}` (moves to the Landing wrapper). Heading becomes "More experiences". Render `restPosts` instead of `POSTS`. Filters unchanged, including the type/language mutual-exclusion behavior.
- `Landing` — wrap Featured + Experience in `<section id={SECTION_IDS.work} aria-label="Work">`.
- `PostCard` — add `variant?: "compact" | "featured"` (default `"compact"`). Featured applies the larger media class; compact keeps current media sizing.

## Copy / a11y

- Headings: "Selected work" (`h2`), "More experiences" (`h2`). Outer work section uses `aria-label="Work"` so the existing `#work` target stays unique.
- Featured grid and more-experiences grid stay `<ul>` / `<li>` lists.
- No Font Awesome / SEO / Formspree changes.

## Verify

No test runner in this repo. After implementation:

1. `/` — Selected work shows exactly those 6, in tuple order, 2-col on a wide viewport.
2. Click EXPERIENCES — scroll lands on Selected work (header offset via existing `scroll-margin-top`).
3. None of the 6 appear again under More experiences.
4. Filter Work / Project / Extracurricular / a language chip on the lower grid only. Featured stays put.
5. Desktop: compact titles visible at rest; featured title+subtitle visible at rest.
6. Narrow viewport: both grids 1-col; titles still visible (existing `hover: none` path).
7. `/experience/vogue` and back-to-experiences still scroll to `#work`.
