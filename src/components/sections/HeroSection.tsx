import type { CSSProperties } from "react";
import CodeTerminal from "../CodeTerminal";
import { SECTION_IDS } from "../../config/site";
import { useSectionNav } from "../../hooks/useSectionNav";

export default function HeroSection() {
  const { goToSection } = useSectionNav();

  return (
    <section
      id={SECTION_IDS.hero}
      className="landing-section landing-section--hero"
      aria-labelledby="hero-heading"
    >
      <div className="landing-section__inner hero-section__inner">
        <div
          className="hero-section__content fade-rise"
          style={{ "--animation-order": 1 } as CSSProperties}
        >
          <p className="hero-section__eyebrow">Software Engineer</p>
          <h1 id="hero-heading" className="hero-section__title">
            Aniisa Bihi
          </h1>
          <p className="hero-section__tagline">
            Building headless commerce platforms, developer tooling, and
            interactive web experiences.
          </p>
          <div className="hero-section__actions">
            <button
              type="button"
              className="hero-section__cta hero-section__cta--primary"
              onClick={() => goToSection(SECTION_IDS.work)}
            >
              View experiences
            </button>
            <button
              type="button"
              className="hero-section__cta hero-section__cta--secondary"
              onClick={() => goToSection(SECTION_IDS.contact)}
            >
              Get in touch
            </button>
          </div>
        </div>

        <div
          className="hero-section__visual fade-rise"
          style={{ "--animation-order": 2 } as CSSProperties}
        >
          <div className="hero-section__terminal-slot">
            <CodeTerminal />
          </div>
          <img
            className="hero-section__avatar"
            src="/img/aniisa_hi.PNG"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
