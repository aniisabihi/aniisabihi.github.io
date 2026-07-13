import type { CSSProperties } from "react";
import { SECTION_IDS } from "../../config/site";
import { useUi } from "../../context/UiContext";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  const { openCv } = useUi();

  return (
    <section
      id={SECTION_IDS.about}
      className={`${landing.section} ${styles.about}`}
      aria-labelledby="about-heading"
    >
      <div className={`${landing.inner} ${styles.inner}`}>
        <div
          className={`${styles.photo} fade-rise`}
          style={{ "--animation-order": 1 } as CSSProperties}
        >
          <img src="/img/aniisa_hi.PNG" alt="Aniisa Bihi" />
        </div>

        <div
          className={`${styles.bio} fade-rise`}
          style={{ "--animation-order": 2 } as CSSProperties}
        >
          <h2 id="about-heading">I&apos;m Aniisa</h2>
          <p>
            I&apos;m a software engineer building production platforms across
            headless commerce, developer tooling, and interactive web
            experiences.
          </p>
          <p>
            At Haus Tech I&apos;m a full-stack developer working on
            TypeScript/React storefront libraries, WordPress commerce plugins,
            internal CLI tooling for AI-assisted development, and the
            documentation platform that ties our multi-repo ecosystem together.
            I&apos;ve owned projects end to end — from an Nx monorepo of Vendure
            plugins to a shadow-DOM Elementor widget suite backed by GraphQL.
          </p>
          <p>
            Before Haus I was the first in-house developer at Vogue Scandinavia,
            taking ownership of the React/Next.js platform from an agency-built
            codebase. I started through Capgemini&apos;s Ignite program on
            enterprise Java delivery at Telia.
          </p>
          <p>
            I care about reliable delivery, clear developer experience, and
            interfaces that hold up for real users. I still reach for
            visualization and interaction design when the problem calls for it —
            solo projects like CloudMood and Rock Paper Scissors AI are where I
            explore that side.
          </p>
          <p>
            Outside work: friends, board games, food, documentaries, true crime.
          </p>
          <p>
            Feel free to check out{" "}
            <button type="button" className={styles.resume} onClick={openCv}>
              my resume
            </button>{" "}
            or reach out below.
          </p>
        </div>
      </div>
    </section>
  );
}
