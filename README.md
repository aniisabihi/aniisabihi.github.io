# aniisabihi.github.io

React + TypeScript portfolio deployed to GitHub Pages.

## Development

```bash
yarn install
cp .env.example .env.local   # optional — Formspree + site URL
yarn dev
```

## Scripts

| Command                | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `yarn dev`             | Local dev server                                       |
| `yarn build`           | Typecheck + production build                           |
| `yarn preview`         | Preview production build                               |
| `yarn lint`            | ESLint                                                 |
| `yarn format`          | Prettier write                                         |
| `yarn optimize-images` | Compress images in `public/`                           |
| `yarn extract-posts`   | Regenerate post content from legacy HTML (if restored) |
| `yarn merge-posts`     | Merge `postDetails.js` + grid meta → `posts.ts`        |

## Contact form

1. Create a form at [formspree.io](https://formspree.io)
2. Copy `.env.example` → `.env.local`
3. Set `VITE_FORMSPREE_FORM_ID=your_form_id`

Without it, the form shows a fallback message with a mailto link.

## Deployment

Push to `main`/`master` → GitHub Actions (`.github/workflows/deploy.yml`).

**Settings → Pages → Source:** GitHub Actions

## Structure

```
src/
  components/   UI (Header, PostCard, ImageCarousel, PageMeta, ContactForm)
  config/       Site constants
  data/
    posts.ts         Single source — grid + project detail content
    postDetails.js   Generated intermediate (yarn extract-posts)
  pages/        Route pages
  types/        TypeScript types
  styles/       CSS layers
public/
  posts/        Project images
  illustrations/ Grid thumbnails
  img/          Profile images
scripts/        extract-posts, merge-posts, optimize-images
```

## Routes

| Path            | Page            |
| --------------- | --------------- |
| `/`             | Work grid       |
| `/about`        | About + contact |
| `/work/:postId` | Project detail  |

Legacy URLs like `/posts/project/openspace/openspace.html` redirect to `/work/openspace`.

## Post content workflow

Edit **`src/data/posts.ts`** directly for day-to-day updates.

To re-import from legacy HTML (if you restore files under `public/posts/**/*.html`):

```bash
yarn extract-posts   # writes postDetails.js + merges into posts.ts
```

Grid-only fields (thumbnail, categories, animation order) live in `scripts/postGridMeta.js`.
