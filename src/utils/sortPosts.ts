import type { Post } from "../types/post";

const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

function parseMonthYear(value: string): number {
  const normalized = value.trim().toLowerCase();

  if (normalized === "present") {
    return Number.MAX_SAFE_INTEGER;
  }

  const match = normalized.match(/^([a-z]+)\s+(\d{4})$/);
  if (!match) {
    return 0;
  }

  const month = MONTH_INDEX[match[1]];
  if (month === undefined) {
    return 0;
  }

  return Number(match[2]) * 12 + month;
}

function getPostDateSortKey(date: string): { end: number; start: number } {
  const normalized = date.replace(/\s*[–—]\s*/g, " - ");
  const parts = normalized.split(" - ").map((part) => part.trim());

  if (parts.length === 1) {
    const timestamp = parseMonthYear(parts[0]);
    return { end: timestamp, start: timestamp };
  }

  return {
    start: parseMonthYear(parts[0]),
    end: parseMonthYear(parts[1]),
  };
}

export function sortPostsByDate(posts: Post[]): Post[] {
  return [...posts].sort((left, right) => {
    const leftKey = getPostDateSortKey(left.date);
    const rightKey = getPostDateSortKey(right.date);

    if (rightKey.end !== leftKey.end) {
      return rightKey.end - leftKey.end;
    }

    return rightKey.start - leftKey.start;
  });
}
