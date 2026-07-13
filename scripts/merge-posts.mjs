import fs from "fs";
import { POST_GRID_META } from "./postGridMeta.js";

const detailsPath = new URL("../src/data/postDetails.js", import.meta.url);
const detailsSource = fs.readFileSync(detailsPath, "utf8");
const match = detailsSource.match(
  /export const POST_DETAILS = (\[[\s\S]*?\]);/,
);

if (!match) {
  throw new Error("Could not parse POST_DETAILS from postDetails.js");
}

const details = JSON.parse(match[1]);
const missing = [];

const posts = details.map((detail) => {
  const grid = POST_GRID_META[detail.id];

  if (!grid) {
    missing.push(detail.id);
    return null;
  }

  return {
    ...detail,
    ...grid,
  };
});

if (missing.length) {
  throw new Error(`Missing grid metadata for: ${missing.join(", ")}`);
}

const output = `import type { Post } from "../types/post";

/** Portfolio posts — grid + detail content. Regenerate detail fields: yarn extract-posts && yarn merge-posts */
export const POSTS: Post[] = ${JSON.stringify(posts, null, 2)};

export const POSTS_BY_ID = Object.fromEntries(
  POSTS.map((post) => [post.id, post]),
) as Record<string, Post>;

export const TYPE_FILTERS = ["All", "Extracurricular", "Work", "Project"] as const;

export const LANGUAGE_FILTERS = [
  "JavaScript",
  "HTML",
  "CSS",
  "C++",
  "Python",
  "WordPress",
  "Matlab",
  "C#",
  "OpenGL",
] as const;
`;

fs.writeFileSync(new URL("../src/data/posts.ts", import.meta.url), output);
console.log(`Merged ${posts.length} posts into src/data/posts.ts`);
