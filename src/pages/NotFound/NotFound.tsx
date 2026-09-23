import { useRef } from "react";
import PageMeta from "../../components/PageMeta";
import { SECTION_IDS } from "../../config/site";
import { useRouteFocus } from "../../hooks/useRouteFocus";
import { useSectionNav } from "../../hooks/useSectionNav";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  const { sectionLinkHandler } = useSectionNav();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useRouteFocus(headingRef);

  return (
    <section className={styles.root} aria-labelledby="not-found-heading">
      <PageMeta title="Page not found" />
      <p className={styles.code} aria-hidden="true">
        404
      </p>
      <h1 id="not-found-heading" ref={headingRef} tabIndex={-1}>
        Page not found
      </h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <a
        href={`/#${SECTION_IDS.work}`}
        className={styles.backLink}
        onClick={sectionLinkHandler(SECTION_IDS.work)}
      >
        Back to experiences
      </a>
    </section>
  );
}
