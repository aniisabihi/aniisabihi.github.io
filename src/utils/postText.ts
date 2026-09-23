import type { CSSProperties } from "react";
import type { Post } from "../types/post";

/**
 * Post titles are written "Organisation | Role". Split them so the
 * organisation can carry the headline and the role sit underneath it.
 */
export function splitTitle(title: string): { name: string; role?: string } {
  const [name, ...rest] = title.split(" | ");
  const role = rest.join(" | ").trim();
  return role ? { name: name.trim(), role } : { name: title };
}

/**
 * Compress a date range ("March 2025 – Present") to its years
 * ("2025–Present") for the dense card kicker. Falls back to the original
 * string when no year is found.
 */
export function formatYears(date: string): string {
  const years = date.match(/\d{4}/g);
  if (!years) {
    return date;
  }

  const start = years[0];
  if (/present/i.test(date)) {
    return `${start}–Present`;
  }

  const end = years[years.length - 1];
  return start === end ? start : `${start}–${end}`;
}

const CATEGORY_LABELS: Record<string, string> = {
  work: "Work",
  project: "Project",
  extracurricular: "Extracurricular",
};

export function categoryLabel(category: string): string {
  return CATEGORY_LABELS[category] ?? category;
}

/** Background styles for a post's thumbnail tile (grid card, detail cover). */
export function thumbnailStyle(post: Post): CSSProperties {
  return {
    backgroundImage: `url(${post.thumbnail})`,
    backgroundSize: post.thumbnailScale
      ? `${post.thumbnailScale}% auto`
      : (post.thumbnailSize ?? "contain"),
  };
}
