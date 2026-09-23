import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { revealSection, type SectionNavState } from "./useSectionNav";

export function useHashScroll() {
  const location = useLocation();
  const alreadyScrolled = Boolean(
    (location.state as SectionNavState)?.sectionScrolled,
  );

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash || alreadyScrolled) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const frame = window.requestAnimationFrame(() => {
      revealSection(sectionId);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, alreadyScrolled]);
}
