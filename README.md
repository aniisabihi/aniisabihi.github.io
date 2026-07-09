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

- `src/` — React app (home, about, shared layout)
- `public/posts/` — static project detail pages (preserved from the original site)
- `public/img/`, `public/illustrations/` — images and thumbnails
