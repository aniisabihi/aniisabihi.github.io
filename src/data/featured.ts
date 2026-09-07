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
