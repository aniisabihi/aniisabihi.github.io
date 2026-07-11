# aniisabihi.github.io

React portfolio site deployed to GitHub Pages.

## Development

```bash
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
yarn build
yarn preview
```

## Deployment

Pushes to `main` or `master` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To enable deployment:

1. Open the repository **Settings → Pages**
2. Set **Source** to **GitHub Actions**

Project pages live at [https://aniisabihi.github.io](https://aniisabihi.github.io).

## Structure

```
src/
  components/   Shared UI (Header, Footer, PostCard, FilterBar)
  config/       Site constants and navigation
  data/         Portfolio post metadata
  pages/        Route-level pages (Work, About, NotFound)
  styles/       Layered CSS (tokens, base, layout, work, about)
public/
  posts/        Static project detail pages
  img/          Profile images
  illustrations/ Project thumbnails
```

## Notes

- The React app handles `/` and `/about`.
- Individual project pages remain static HTML under `public/posts/` for now.
- Shared design tokens live in `src/styles/tokens.css` and `public/css/main.css`.
