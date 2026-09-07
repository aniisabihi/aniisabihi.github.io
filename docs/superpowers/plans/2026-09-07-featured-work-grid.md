# Featured Work Grid Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Recruiter hitting EXPERIENCES sees six current Haus + Vogue cards first (large 2-col), then the remaining posts in the existing filtered grid, with titles visible without hover.

**Architecture:** A `featured.ts` module splits `POSTS` into `featuredPosts` (tuple order) and `restPosts`. Landing wraps both lists in one `#work` section. `PostCard` gains a `featured` variant for size; compact cards keep the 3-col grid.

**Tech Stack:** React 19, TypeScript, CSS Modules / Sass, React Router 7, Vite 6. No new dependencies. No test runner (spec non-goal). Gate is `yarn build`.

## Global Constraints

- Featured IDs, in this order only: `haus-workflow`, `haus-storefront-elementor-widgets`, `haus-storefront-components`, `haus-nx-monorepo`, `wearehaustech`, `vogue`
- Unknown featured ID: throw at module init. Do not skip.
- Headings: `Selected work` (`h2`), `More experiences` (`h2`). Outer section `aria-label="Work"` and `id="work"` (`SECTION_IDS.work`)
- Featured grid 2-col desktop, 1-col below 640px, aspect `16 / 9`. Lower grid stays 3/2/1 and `4 / 3`
- Compact: title always visible; subtitle hover (and always-on at `hover: none`). Featured: title and subtitle always visible
- Default lower filter stays `All`. Type/language mutual exclusion unchanged
- Both grids stay `<ul>` / `<li>`
- Do not add a test runner, rewrite case-study copy, add screenshots, change SEO, compress videos, or add a nav item
- Do not commit unless the user asked for commits in this session; skip every Commit step if they have not

---

## File structure

Create:

- `src/data/featured.ts` — featured IDs, `featuredPosts`, `restPosts`
- `src/components/FeaturedSection/FeaturedSection.tsx`
- `src/components/FeaturedSection/FeaturedSection.module.scss`
- `src/components/FeaturedSection/index.ts`

Modify:

- `src/components/PostCard/PostCard.tsx` — `variant?: "compact" | "featured"`
- `src/components/PostCard/PostCard.module.scss` — always-visible titles; featured sizing
- `src/components/ExperienceSection/ExperienceSection.tsx` — `restPosts`, heading, drop `#work`
- `src/pages/Landing/Landing.tsx` — wrap Featured + Experience in `#work`

Unchanged: `src/data/posts.ts`, filters, Header, `useSectionNav`, PostDetail.

---

### Task 1: Featured post lists

**Files:**
- Create: `src/data/featured.ts`

**Interfaces:**
- Consumes: `POSTS`, `POSTS_BY_ID` from `src/data/posts.ts`; `Post` from `src/types/post.ts`
- Produces: `FEATURED_POST_IDS` (readonly tuple), `featuredPosts: Post[]` (tuple order), `restPosts: Post[]` (`POSTS` minus those IDs, original `POSTS` order)

- [ ] **Step 1: Create `src/data/featured.ts`**

```ts
import type { Post } from "../types/post";
import { POSTS, POSTS_BY_ID } from "./posts";

export const FEATURED_POST_IDS = [
  "haus-workflow",
  "haus-storefront-elementor-widgets",
  "haus-storefront-components",
  "haus-nx-monorepo",
  "wearehaustech",
  "vogue",
] as const;

export type FeaturedPostId = (typeof FEATURED_POST_IDS)[number];

function requirePost(id: FeaturedPostId): Post {
  const post = POSTS_BY_ID[id];
  if (!post) {
    throw new Error(`Missing featured post: ${id}`);
  }
  return post;
}

export const featuredPosts: Post[] = FEATURED_POST_IDS.map(requirePost);

const featuredIdSet = new Set<string>(FEATURED_POST_IDS);

export const restPosts: Post[] = POSTS.filter(
  (post) => !featuredIdSet.has(post.id),
);
```

- [ ] **Step 2: Typecheck**

Run: `yarn build`

Expected: PASS (existing site still renders one grid; this file is unused until Task 3). FAIL only if a featured id is missing from `POSTS_BY_ID` — then fix the id, do not delete the throw.

- [ ] **Step 3: Commit** (skip if user did not ask to commit)

```bash
git add src/data/featured.ts
git commit -m "$(cat <<'EOF'
feat: split featured and remaining portfolio posts

EOF
)"
```

---

### Task 2: PostCard variants and visible titles

**Files:**
- Modify: `src/components/PostCard/PostCard.tsx`
- Modify: `src/components/PostCard/PostCard.module.scss`

**Interfaces:**
- Consumes: existing `Post`
- Produces: `PostCard({ post, variant }: { post: Post; variant?: "compact" | "featured" })` with default `"compact"`

- [ ] **Step 1: Update `PostCard.tsx`**

Replace the whole file with:

```tsx
import type { CSSProperties } from "react";
import type { Post } from "../../types/post";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.scss";

type PostCardVariant = "compact" | "featured";

type PostCardProps = {
  post: Post;
  variant?: PostCardVariant;
};

export default function PostCard({
  post,
  variant = "compact",
}: PostCardProps) {
  const cardClass =
    variant === "featured"
      ? `${styles.card} ${styles.featured}`
      : styles.card;

  return (
    <li
      className={cardClass}
      style={{ "--animation-order": post.animationOrder } as CSSProperties}
    >
      <Link to={`/experience/${post.id}`} className={styles.link}>
        <div
          className={styles.media}
          style={{
            backgroundImage: `url(${post.thumbnail})`,
            backgroundSize: post.thumbnailScale
              ? `${post.thumbnailScale}% auto`
              : (post.thumbnailSize ?? "contain"),
          }}
        >
          <div className={styles.overlay}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.subtitle}>{post.subtitle}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
```

- [ ] **Step 2: Replace `PostCard.module.scss` overlay/title rules**

Keep `.card` animation, `.link` hover lift, `.media` 4/3, reduced-motion, and the 640px compact min-height. Change overlay from hidden-until-hover to always-on. Hide compact subtitle until hover. Featured: 16/9, taller, subtitle always on.

Full file:

```scss
.card {
  animation: fade-rise 350ms ease both;
  animation-delay: calc(var(--animation-order, 0) * 80ms);
}

.link {
  display: block;
  height: 100%;
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition:
    transform var(--transition-medium),
    box-shadow var(--transition-medium);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(26, 26, 26, 0.14);
  }

  &:hover .overlay,
  &:focus-visible .overlay {
    background: linear-gradient(
      180deg,
      rgba(193, 187, 221, 0.15) 10%,
      rgba(26, 26, 26, 0.88) 100%
    );
  }

  &:hover .subtitle,
  &:focus-visible .subtitle {
    opacity: 1;
    transform: none;
  }
}

.media {
  position: relative;
  min-height: 16rem;
  aspect-ratio: 4 / 3;
  background-color: var(--darkpink);
  background-repeat: no-repeat;
  background-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: var(--space-2);
  padding: var(--space-4);
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0.05) 20%,
    rgba(26, 26, 26, 0.78) 100%
  );
  color: var(--white);
  opacity: 1;
  transition: background var(--transition-medium);
}

.title {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.35;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.subtitle {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.88);
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity var(--transition-medium),
    transform var(--transition-medium);
}

.featured {
  .media {
    min-height: 20rem;
    aspect-ratio: 16 / 9;
  }

  .title {
    font-size: 1.15rem;
  }

  .subtitle {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .overlay,
  .title,
  .subtitle {
    transition: none;
  }

  .link:hover {
    transform: none;
  }
}

@media (hover: none) {
  .subtitle {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 640px) {
  .media {
    min-height: 14rem;
  }

  .featured .media {
    min-height: 16rem;
  }
}
```

- [ ] **Step 3: Typecheck**

Run: `yarn build`

Expected: PASS. Existing `PostCard` callers omit `variant` and stay compact. Desktop: titles visible at rest on the current grid; subtitles still appear on hover.

- [ ] **Step 4: Commit** (skip if user did not ask to commit)

```bash
git add src/components/PostCard/PostCard.tsx src/components/PostCard/PostCard.module.scss
git commit -m "$(cat <<'EOF'
feat: show post card titles without hover

EOF
)"
```

---

### Task 3: FeaturedSection

**Files:**
- Create: `src/components/FeaturedSection/FeaturedSection.tsx`
- Create: `src/components/FeaturedSection/FeaturedSection.module.scss`
- Create: `src/components/FeaturedSection/index.ts`

**Interfaces:**
- Consumes: `featuredPosts` from `src/data/featured.ts`; `PostCard` with `variant="featured"`
- Produces: default export `FeaturedSection` — inner `<section aria-labelledby="featured-heading">`, heading `Selected work`, `<ul>` of 6 featured cards. No `id="work"`

- [ ] **Step 1: Create `FeaturedSection.module.scss`**

```scss
.inner {
  padding-top: var(--space-6);
  padding-bottom: 0;
}

.header {
  margin-bottom: var(--space-6);
  text-align: center;
}

.title {
  margin-bottom: 0;
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  letter-spacing: 0.02em;
}

.postGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);
}

@media (max-width: 640px) {
  .postGrid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Create `FeaturedSection.tsx`**

```tsx
import PostCard from "../PostCard";
import { featuredPosts } from "../../data/featured";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./FeaturedSection.module.scss";

export default function FeaturedSection() {
  return (
    <section
      className={landing.section}
      aria-labelledby="featured-heading"
    >
      <div className={`${landing.inner} ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="featured-heading" className={styles.title}>
            Selected work
          </h2>
        </header>

        <ul className={styles.postGrid}>
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} variant="featured" />
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `src/components/FeaturedSection/index.ts`**

```ts
export { default } from "./FeaturedSection";
```

- [ ] **Step 4: Typecheck**

Run: `yarn build`

Expected: PASS. Component still unused on the page until Task 5.

- [ ] **Step 5: Commit** (skip if user did not ask to commit)

```bash
git add src/components/FeaturedSection
git commit -m "$(cat <<'EOF'
feat: add selected-work featured section

EOF
)"
```

---

### Task 4: More experiences uses `restPosts`

**Files:**
- Modify: `src/components/ExperienceSection/ExperienceSection.tsx`

**Interfaces:**
- Consumes: `restPosts` from `src/data/featured.ts`; existing `TYPE_FILTERS`, `LANGUAGE_FILTERS`, `FilterBar`, `PostCard` (default compact)
- Produces: inner section, no `id`, heading `More experiences` with `id="more-experiences-heading"`, filters `restPosts` only, default type filter `All`

- [ ] **Step 1: Update `ExperienceSection.tsx`**

Replace the whole file with:

```tsx
import { useMemo, useState } from "react";
import FilterBar from "../FilterBar";
import PostCard from "../PostCard";
import { restPosts } from "../../data/featured";
import { LANGUAGE_FILTERS, TYPE_FILTERS } from "../../data/posts";
import type { LanguageFilter, TypeFilter } from "../../types/post";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./ExperienceSection.module.scss";

function matchesFilter(categories: string[], activeFilter: string) {
  if (activeFilter === "All") {
    return true;
  }

  return categories.includes(activeFilter);
}

export default function ExperienceSection() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [languageFilter, setLanguageFilter] = useState<LanguageFilter | null>(
    null,
  );

  const visiblePosts = useMemo(() => {
    return restPosts.filter((post) => {
      const matchesType = matchesFilter(post.categories, typeFilter);
      const matchesLanguage = languageFilter
        ? post.categories.includes(languageFilter)
        : true;

      return matchesType && matchesLanguage;
    });
  }, [typeFilter, languageFilter]);

  const selectType = (filter: string) => {
    setTypeFilter(filter as TypeFilter);
    setLanguageFilter(null);
  };

  const selectLanguage = (filter: string) => {
    setLanguageFilter((current) =>
      current === filter ? null : (filter as LanguageFilter),
    );
    setTypeFilter("All");
  };

  return (
    <section
      className={landing.section}
      aria-labelledby="more-experiences-heading"
    >
      <div className={`${landing.inner} ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="more-experiences-heading" className={styles.title}>
            More experiences
          </h2>
        </header>

        <div className={styles.filters}>
          <FilterBar
            filters={TYPE_FILTERS}
            activeFilter={languageFilter ? null : typeFilter}
            onSelect={selectType}
            variant="type"
          />
          <FilterBar
            filters={LANGUAGE_FILTERS}
            activeFilter={languageFilter}
            onSelect={selectLanguage}
            variant="language"
          />
        </div>

        <ul className={styles.postGrid}>
          {visiblePosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>

        {visiblePosts.length === 0 && (
          <p className={styles.empty}>No projects match these filters.</p>
        )}
      </div>
    </section>
  );
}
```

Do not change `ExperienceSection.module.scss`. Do not import `SECTION_IDS` or `POSTS`.

- [ ] **Step 2: Typecheck**

Run: `yarn build`

Expected: PASS. Until Task 5, the page has no `#work` (ExperienceSection dropped it). Header EXPERIENCES will not scroll until Task 5 — that is expected for this task only.

- [ ] **Step 3: Commit** (skip if user did not ask to commit)

```bash
git add src/components/ExperienceSection/ExperienceSection.tsx
git commit -m "$(cat <<'EOF'
feat: keep featured posts out of the experiences grid

EOF
)"
```

---

### Task 5: Landing `#work` wrapper

**Files:**
- Modify: `src/pages/Landing/Landing.tsx`

**Interfaces:**
- Consumes: `FeaturedSection`, `ExperienceSection`, `SECTION_IDS.work`, `landing.section` from `src/components/LandingSection/LandingSection.module.scss`
- Produces: Hero → About → `<section id="work" aria-label="Work">` (Featured then Experience) → Contact

- [ ] **Step 1: Update `Landing.tsx`**

Replace the whole file with:

```tsx
import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import ExperienceSection from "../../components/ExperienceSection";
import FeaturedSection from "../../components/FeaturedSection";
import HeroSection from "../../components/HeroSection";
import PageMeta from "../../components/PageMeta";
import landing from "../../components/LandingSection/LandingSection.module.scss";
import { SECTION_IDS, SITE } from "../../config/site";
import { useHashScroll } from "../../hooks/useHashScroll";
import styles from "./Landing.module.scss";

export default function Landing() {
  useHashScroll();

  return (
    <div className={styles.page}>
      <PageMeta
        title={SITE.name}
        description={SITE.defaultDescription}
        path="/"
      />
      <HeroSection />
      <AboutSection />
      <section
        id={SECTION_IDS.work}
        className={landing.section}
        aria-label="Work"
      >
        <FeaturedSection />
        <ExperienceSection />
      </section>
      <ContactSection />
    </div>
  );
}
```

`landing.section` supplies `scroll-margin-top` for the header offset. Do not add a new Landing scss rule.

- [ ] **Step 2: Typecheck**

Run: `yarn build`

Expected: PASS.

- [ ] **Step 3: Commit** (skip if user did not ask to commit)

```bash
git add src/pages/Landing/Landing.tsx
git commit -m "$(cat <<'EOF'
feat: put selected work first in the experiences section

EOF
)"
```

---

### Task 6: Verify against the spec

**Files:**
- Modify: `docs/superpowers/specs/2026-09-07-featured-work-grid-design.md` (status line only)

**Interfaces:**
- Consumes: the built app from Tasks 1–5
- Produces: spec status `approved`; all seven spec verify items checked

- [ ] **Step 1: Build**

Run: `yarn build`

Expected: PASS (`tsc --noEmit` + vite build + `dist/404.html`).

- [ ] **Step 2: Run the spec verify list**

Run: `yarn dev` and check in the browser (desktop + a viewport ≤640px):

1. `/` — Selected work shows exactly those 6 IDs, in tuple order, 2-col on a wide viewport
2. Header EXPERIENCES (and Hero "View experiences") — scroll lands on Selected work, not under the header
3. None of the 6 appear again under More experiences
4. Filter Work / Project / Extracurricular / a language chip — only the lower grid changes; featured stays
5. Desktop: compact titles visible at rest; compact subtitle on hover; featured title+subtitle at rest
6. Narrow viewport: both grids 1-col; titles still visible
7. Open `/experience/vogue`, click Back to experiences — lands on `#work`

If any item fails, fix in the file that owns it (data → `featured.ts`, card chrome → `PostCard`, lists → Featured/Experience, scroll target → `Landing.tsx`). Re-run `yarn build`.

- [ ] **Step 3: Mark the spec approved**

In `docs/superpowers/specs/2026-09-07-featured-work-grid-design.md`, change:

```markdown
Status: draft — awaiting user review
```

to:

```markdown
Status: approved
```

- [ ] **Step 4: Commit** (skip if user did not ask to commit)

```bash
git add docs/superpowers/specs/2026-09-07-featured-work-grid-design.md
git commit -m "$(cat <<'EOF'
docs: mark featured work grid spec approved

EOF
)"
```
