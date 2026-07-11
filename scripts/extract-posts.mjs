import fs from "fs";
import path from "path";

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(entryPath));
    } else if (entry.name.endsWith(".html")) {
      results.push(entryPath);
    }
  }
  return results;
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractLinks(block) {
  return [
    ...block.matchAll(/href="([^"]+)"[^>]*>\s*<i class="fa fa-([^"]+)"/g),
  ].map((match) => ({ href: match[1], icon: match[2] }));
}

function normalizeParagraph(html) {
  return html.replace(/\s+/g, " ").trim();
}

const postsDir = "public/posts";
const files = walk(postsDir).sort();

const posts = files.map((filePath) => {
  const html = fs.readFileSync(filePath, "utf8");
  const id = path.basename(filePath, ".html");
  const relativeDir = path.dirname(filePath).replace(/^public\/posts\/?/, "");
  const assetBase = `/posts/${relativeDir}`;

  const images = [
    ...html.matchAll(
      /<div class="(?:widthImg|heightImg)"><img src="([^"]+)"[^>]*alt="([^"]*)"/g,
    ),
  ].map((match) => ({
    src: `${assetBase}/${match[1]}`,
    alt: match[2] || id,
    variant:
      html.includes(`src="${match[1]}"`) && html.includes("heightImg")
        ? html
            .slice(html.indexOf(match[0]) - 20, html.indexOf(match[0]))
            .includes("heightImg")
          ? "height"
          : "width"
        : "width",
  }));

  // Fix variant detection - simpler approach
  const imageEntries = [
    ...html.matchAll(
      /<div class="(widthImg|heightImg)"><img src="([^"]+)"(?:\s+alt="([^"]*)")?/g,
    ),
  ].map((match) => ({
    src: `${assetBase}/${match[2]}`,
    alt: match[3] || id,
    variant: match[1] === "heightImg" ? "height" : "width",
  }));

  const skills = [
    ...html.matchAll(/<i class="fa fa-star"><\/i>\s*([^<\n]+)/g),
  ].map((match) => match[1].trim());

  const dateMatch = html.match(/fa-calendar.*?<\/i>\s*([^<]+)/);
  const date = dateMatch ? dateMatch[1].trim() : "";

  const paragraphs = [
    ...html.matchAll(/<p class="p-text">([\s\S]*?)<\/p>/g),
  ].map((match) => normalizeParagraph(match[1]));

  const linksBlock = html.match(/<p class="p-links">([\s\S]*?)<\/p>/);
  const links = linksBlock ? extractLinks(linksBlock[1]) : [];

  const titleMatch = html.match(/<h2>([^<]+)<\/h2>/);
  const title = titleMatch ? titleMatch[1].trim() : id;

  return {
    id,
    slug: relativeDir.replace(/\//g, "-"),
    category: relativeDir.split("/")[0],
    title,
    date,
    skills,
    images: imageEntries,
    paragraphs,
    links,
  };
});

const output = `// Auto-generated from public/posts HTML. Run: node scripts/extract-posts.mjs

export const POST_DETAILS = ${JSON.stringify(posts, null, 2)};

export const POST_DETAILS_BY_ID = Object.fromEntries(
  POST_DETAILS.map((post) => [post.id, post]),
);
`;

fs.writeFileSync("src/data/postDetails.js", output);
console.log(`Extracted ${posts.length} posts to src/data/postDetails.js`);
