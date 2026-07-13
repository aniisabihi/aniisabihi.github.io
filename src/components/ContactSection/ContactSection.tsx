import type { CSSProperties } from "react";
import { SECTION_IDS } from "../../config/site";
import ContactForm from "../ContactForm";
import landing from "../LandingSection/LandingSection.module.scss";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className={`${landing.section} ${styles.contact}`}
      aria-labelledby="contact-heading"
    >
      <div
        className={`${landing.inner} ${styles.inner} fade-rise`}
        style={{ "--animation-order": 1 } as CSSProperties}
      >
        <h2 id="contact-heading">Want to know more about me?</h2>
        <p className={styles.intro}>
          Send a message and I will get back to you as soon as I can.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
