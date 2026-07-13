import type { CSSProperties } from "react";
import HeroCodeDecor from "../HeroCodeDecor";
import { SECTION_IDS } from "../../config/site";
import { useSectionNav } from "../../hooks/useSectionNav";
import landing from "./LandingSection.module.scss";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const { goToSection } = useSectionNav();

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
            Aniisa Bihi
          </h1>
          <p className={styles.tagline}>
            Building headless commerce platforms, developer tooling, and
            interactive web experiences.
          </p>
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.ctaPrimary}
              onClick={() => goToSection(SECTION_IDS.work)}
            >
              View experiences
            </button>
            <button
              type="button"
              className={styles.ctaSecondary}
              onClick={() => goToSection(SECTION_IDS.contact)}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
