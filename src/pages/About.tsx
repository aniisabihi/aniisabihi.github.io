import type { CSSProperties } from "react";
import { SITE } from "../config/site";
import ContactForm from "../components/ContactForm";
import PageMeta from "../components/PageMeta";

export default function About() {
  return (
    <section className="about-page">
      <PageMeta
        title="About"
        description="Learn more about Aniisa Bihi — software developer focused on frontend, UX, and visualization."
        path="/about"
      />
      <div className="about-page__inner">
        <div className="about-page__hero">
          <div
            className="about-page__photo"
            style={{ "--animation-order": 1 } as CSSProperties}
          >
            <img src="/img/aniisa_hi.PNG" alt="Aniisa Bihi" />
          </div>

          <div
            className="about-page__bio"
            style={{ "--animation-order": 2 } as CSSProperties}
          >
            <h1>I&apos;m Aniisa</h1>
            <p>
              I am a Software Developer intrigued by visual problem-solving and
              forming intuitive solutions. Through different engagements and
              work, I have obtained a broad set of skills for my interest in
              frontend development, UX, and information visualization.
            </p>
            <p>
              I enjoy putting time on details and visual attributes that elevate
              the user experience. My career objective is to develop advanced
              and modern digital products, focused on accessibility for all.
            </p>
            <p>
              Currently, I am mostly interested in information and scientific
              visualization, web and app development, and general frontend work.
              In my free time, I enjoy the company of friends, parlor games,
              food, self-care, documentaries, and true crime.
            </p>
            <p>
              Feel free to check out{" "}
              <a href={SITE.resumePath} target="_blank" rel="noreferrer">
                my resume
              </a>{" "}
              or reach out below.
            </p>
          </div>
        </div>

        <div
          className="about-page__contact"
          style={{ "--animation-order": 3 } as CSSProperties}
        >
          <h2>Want to know more about me?</h2>
          <p className="about-page__contact-intro">
            Send a message and I will get back to you as soon as I can.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
