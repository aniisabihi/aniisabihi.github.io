import { useEffect } from "react";
import { absoluteUrl, SITE } from "../config/site";

type PageMetaProps = {
  title: string;
  description?: string;
  image?: string;
  path?: string;
};

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

export default function PageMeta({
  title,
  description = SITE.defaultDescription,
  image = SITE.defaultOgImage,
  path = "/",
}: PageMetaProps) {
  useEffect(() => {
    const pageTitle =
      title === SITE.name ? SITE.name : `${title} | ${SITE.name}`;
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = pageTitle;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
  }, [title, description, image, path]);

  return null;
}
