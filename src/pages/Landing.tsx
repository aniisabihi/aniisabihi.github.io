import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
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
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
