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

## Post content

Project page content is extracted from legacy HTML into `src/data/postDetails.js`:

```bash
yarn extract-posts
```

Run this if you add or edit files under `public/posts/` (images only — pages are React routes).

## Deployment

Pushes to `main` or `master` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. Open **Settings → Pages**
2. Set **Source** to **GitHub Actions**

Live site: [https://aniisabihi.github.io](https://aniisabihi.github.io)

## Structure

```
src/
  components/   Header, Footer, PostCard, FilterBar, ImageCarousel
  config/       Site constants
  data/         posts.js (grid metadata), postDetails.js (page content)
  pages/        Work, About, PostDetail, NotFound
  styles/       Layered CSS
public/
  posts/        Project images (per project folder)
  img/          Profile images
  illustrations/ Grid thumbnails
```

## Routes

| Path            | Page            |
| --------------- | --------------- |
| `/`             | Work grid       |
| `/about`        | About + contact |
| `/work/:postId` | Project detail  |
