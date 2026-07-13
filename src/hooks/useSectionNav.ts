import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = useCallback(
    (sectionId: string) => {
      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      navigate({ pathname: "/", hash: sectionId });
    },
    [location.pathname, navigate],
  );

  return { goToSection };
}
