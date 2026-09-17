import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Tracks which section is currently being read.
 *
 * Every section is measured on each update rather than only the ones an
 * IntersectionObserver reports as changed — sections here are many screens
 * tall, so the entry that changes is usually the one *leaving*, which on its
 * own says nothing about what the reader has moved on to.
 */
export function useScrollSpy(sectionIds: readonly string[]) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // Callers pass an array literal, so depend on its contents, not its identity.
  const idKey = sectionIds.join(",");

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const ids = idKey.split(",").filter(Boolean);
    let frame = 0;

    const update = () => {
      frame = 0;

      const elements = ids
        .map((id) => document.getElementById(id))
        .filter((element): element is HTMLElement => element !== null);

      if (elements.length === 0) {
        return;
      }

      // Read just below the sticky header: the section crossing this line is
      // the one filling the screen.
      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const line = headerHeight + window.innerHeight * 0.25;

      let current: string | null = null;

      for (const element of elements) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= line && bottom > line) {
          current = element.id;
        }
      }

      // At the very bottom the last section can end above the line; it is still
      // what the reader is looking at.
      if (current === null) {
        const last = elements[elements.length - 1];
        if (last.getBoundingClientRect().bottom <= line) {
          current = last.id;
        }
      }

      setActiveSection(current);
    };

    const schedule = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [location.pathname, idKey]);

  return activeSection;
}
