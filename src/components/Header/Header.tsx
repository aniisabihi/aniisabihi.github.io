import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_SECTIONS, SECTION_IDS, SITE } from "../../config/site";
import { useUi } from "../../context/UiContext";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useSectionNav } from "../../hooks/useSectionNav";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  const { sectionLinkHandler } = useSectionNav();
  const { openCv } = useUi();
  const activeSection = useScrollSpy([
    SECTION_IDS.about,
    SECTION_IDS.work,
    SECTION_IDS.contact,
  ]);

  const closeMenu = () => setMenuOpen(false);

  // Route changes (a detail page link, the logo) always leave the menu shut.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // An open dropdown closes on Escape or on a tap anywhere outside it, and
  // Escape returns focus to the toggle so keyboard users are not stranded.
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // Tabbing out of the dropdown closes it too; otherwise the next focused
    // element can sit hidden underneath it (WCAG 2.4.11).
    const nav = navRef.current;
    const handleFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget as Node | null;
      if (next && !nav?.contains(next)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("pointerdown", handlePointerDown);
    nav?.addEventListener("focusout", handleFocusOut);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("pointerdown", handlePointerDown);
      nav?.removeEventListener("focusout", handleFocusOut);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav
        ref={navRef}
        className={`${styles.nav}${menuOpen ? ` ${styles.open}` : ""}`}
        aria-label="Main"
      >
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          {SITE.name}
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
        >
          <i
            className={`fa ${menuOpen ? "fa-times" : "fa-bars"}`}
            aria-hidden="true"
          />
          <span className="visually-hidden">Menu</span>
        </button>

        <ul id="site-nav-links" className={styles.links}>
          {NAV_SECTIONS.map(({ label, sectionId }) => {
            const isActive = activeSection === sectionId;

            return (
              <li key={sectionId}>
                <a
                  href={`/#${sectionId}`}
                  className={
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  aria-current={isActive ? "true" : undefined}
                  onClick={sectionLinkHandler(sectionId, closeMenu)}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className={`${styles.link} ${styles.resume}`}
              aria-haspopup="dialog"
              onClick={() => {
                // Inside the mobile dropdown this button disappears once the
                // menu closes, so hand focus back to the toggle instead.
                openCv(menuOpen ? toggleRef.current : null);
                closeMenu();
              }}
            >
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
