import { useCallback, type MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/** Router state marking a hash change the app already scrolled for. */
export type SectionNavState = { sectionScrolled?: boolean } | null;

function scrollBehavior(): ScrollBehavior {
  // An explicit `behavior` in JS overrides the CSS reduced-motion reset, so
  // honour the preference here too.
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

/**
 * Scroll a landing section into view and hand it keyboard focus, so the next
 * Tab continues from the section rather than from the nav control that was
 * pressed. Sections carry tabIndex={-1} to accept that focus.
 */
export function revealSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) {
    return;
  }

  element.scrollIntoView({ behavior: scrollBehavior(), block: "start" });
  element.focus({ preventScroll: true });
}

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = useCallback(
    (sectionId: string) => {
      if (location.pathname === "/") {
        revealSection(sectionId);
        // Keep the URL in step so reload, share and Back return here. The
        // state flag tells useHashScroll not to scroll a second time.
        navigate(
          { pathname: "/", hash: sectionId },
          { replace: true, state: { sectionScrolled: true } },
        );
        return;
      }

      navigate({ pathname: "/", hash: sectionId });
    },
    [location.pathname, navigate],
  );

  /** Click handler for an `<a href="/#id">`: modified clicks keep native behaviour. */
  const sectionLinkHandler = useCallback(
    (sectionId: string, onNavigate?: () => void) =>
      (event: MouseEvent<HTMLAnchorElement>) => {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();
        goToSection(sectionId);
        onNavigate?.();
      },
    [goToSection],
  );

  return { goToSection, sectionLinkHandler };
}
