import { useEffect, type RefObject } from "react";
import { useLocation } from "react-router-dom";

/**
 * Move focus to a page's heading after in-app navigation, so screen readers
 * announce the new page and Tab restarts from it. Skipped on the initial page
 * load (react-router's first location has the key "default"), where the
 * browser's own start — skip link, then header — is the right place to begin.
 */
export function useRouteFocus(ref: RefObject<HTMLElement | null>) {
  const { key } = useLocation();

  useEffect(() => {
    if (key !== "default") {
      ref.current?.focus({ preventScroll: true });
    }
  }, [key, ref]);
}
