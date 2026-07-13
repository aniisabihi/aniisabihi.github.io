import type { CSSProperties } from "react";
import { SECTION_IDS } from "../../config/site";
import ContactForm from "../ContactForm";

export default function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="landing-section landing-section--contact"
      aria-labelledby="contact-heading"
    >
      <div
        className="landing-section__inner contact-section__inner fade-rise"
        style={{ "--animation-order": 1 } as CSSProperties}
      >
        <h2 id="contact-heading">Want to know more about me?</h2>
        <p className="contact-section__intro">
          Send a message and I will get back to you as soon as I can.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
