import type { CSSProperties } from "react";
import HeroCodeDecor from "../HeroCodeDecor";
import { SECTION_IDS, SITE } from "../../config/site";
import { useSectionNav } from "../../hooks/useSectionNav";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const { sectionLinkHandler } = useSectionNav();

  return (
    <section
      id={SECTION_IDS.hero}
      className={`${landing.section} ${styles.hero}`}
      aria-labelledby="hero-heading"
    >
      <HeroCodeDecor />
      <div className={`${landing.inner} ${styles.inner}`}>
        <div
          className={`${styles.content} fade-rise`}
          style={{ "--animation-order": 1 } as CSSProperties}
        >
          <p className={styles.eyebrow}>Software Engineer</p>
          <h1 id="hero-heading" className={styles.title}>
            {SITE.name}
          </h1>
          <p className={styles.tagline}>
            Curious full-stack developer who loves solving complex problems and
            turning AI and technology into practical, useful solutions.
          </p>
          <div className={styles.actions}>
            <a
              href={`/#${SECTION_IDS.work}`}
              className={styles.ctaPrimary}
              onClick={sectionLinkHandler(SECTION_IDS.work)}
            >
              View experiences
            </a>
            <a
              href={`/#${SECTION_IDS.contact}`}
              className={styles.ctaSecondary}
              onClick={sectionLinkHandler(SECTION_IDS.contact)}
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
