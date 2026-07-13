import PageMeta from "../components/PageMeta";
import { SITE } from "../config/site";
import { useHashScroll } from "../hooks/useHashScroll";

export default function Landing() {
  useHashScroll();

  return (
    <div className="landing-page">
      <PageMeta
        title={SITE.name}
        description={SITE.defaultDescription}
        path="/"
      />
      <section id="hero" className="landing-section landing-section--hero">
        <div className="landing-section__inner">
          <p className="landing-placeholder">Hero</p>
        </div>
      </section>
      <section id="about" className="landing-section landing-section--about">
        <div className="landing-section__inner">
          <p className="landing-placeholder">About</p>
        </div>
      </section>
      <section id="work" className="landing-section landing-section--work">
        <div className="landing-section__inner">
          <p className="landing-placeholder">Experiences</p>
        </div>
      </section>
      <section id="contact" className="landing-section landing-section--contact">
        <div className="landing-section__inner">
          <p className="landing-placeholder">Contact</p>
        </div>
      </section>
    </div>
  );
}
