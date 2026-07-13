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
      <div
        className={`${styles.photo} fade-rise`}
        style={{ "--animation-order": 1 } as CSSProperties}
      >
        <img src="/img/aniisa_hey.png" alt="Aniisa Bihi" />
      </div>

      <div className={styles.inner}>
        <div
          className={`${styles.bio} fade-rise`}
          style={{ "--animation-order": 2 } as CSSProperties}
        >
          <h2 id="about-heading">I&apos;m Aniisa</h2>
          <p>
            I&apos;m a software engineer building mostly headless commerce
            platforms, developer tooling, interactive web experiences and the
            occasional side project for fun. I care about reliable delivery,
            clear developer experience, and interfaces that hold up for real
            users.
          </p>
          <p>
            At Haus Tech I&apos;m a full-stack developer working on
            TypeScript/React storefront libraries, WordPress commerce plugins,
            internal CLI tooling for AI-assisted development, and the
            documentation platform that ties our multi-repo ecosystem together.
            I&apos;ve owned projects end to end, from an Nx monorepo of Vendure
            plugins to a shadow-DOM Elementor widget suite backed by GraphQL.
          </p>
          <p>
            Before Haus I was the first in-house developer at Vogue Scandinavia,
            brought in to move frontend development in-house from an outsourced
            Stockholm dev team and build out the React/Next.js/Redux platform. I
            got my start at Capgemini through the Ignite Graduate Program, with
            most of that time spent at Telia on a DevOps team building internal
            order-management applications.
          </p>
          <p>
            Off the clock: friends, crocheting, cuddling my cat, documentaries,
            and true crime rabbit holes.
          </p>
          <p>
            Feel free to check out{" "}
            <button type="button" className={styles.resume} onClick={openCv}>
              my resume
            </button>{" "}
            or reach out below.
          </p>
          <p>Btw, it&apos;s my handwriting you&apos;ve been reading!</p>
        </div>
      </div>
    </section>
  );
}
