import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);
}
