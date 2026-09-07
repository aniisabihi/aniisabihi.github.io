import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import ExperienceSection from "../../components/ExperienceSection";
import FeaturedSection from "../../components/FeaturedSection";
import HeroSection from "../../components/HeroSection";
import PageMeta from "../../components/PageMeta";
import landing from "../../components/LandingSection/LandingSection.module.scss";
import { SECTION_IDS, SITE } from "../../config/site";
import { useHashScroll } from "../../hooks/useHashScroll";
import styles from "./Landing.module.scss";

export default function Landing() {
  useHashScroll();

  return (
    <div className={styles.page}>
      <PageMeta
        title={SITE.name}
        description={SITE.defaultDescription}
        path="/"
      />
      <HeroSection />
      <AboutSection />
      <section
        id={SECTION_IDS.work}
        className={landing.section}
        aria-label="Work"
      >
        <FeaturedSection />
        <ExperienceSection />
      </section>
      <ContactSection />
    </div>
  );
}
