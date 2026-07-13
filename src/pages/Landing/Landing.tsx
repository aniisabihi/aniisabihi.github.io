import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import ExperienceSection from "../../components/ExperienceSection";
import HeroSection from "../../components/HeroSection";
import PageMeta from "../../components/PageMeta";
import { SITE } from "../../config/site";
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
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
