import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_SECTIONS, SECTION_IDS, SITE } from "../config/site";
import { useUi } from "../context/UiContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useSectionNav } from "../hooks/useSectionNav";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { goToSection } = useSectionNav();
  const { openCv } = useUi();
  const activeSection = useScrollSpy([
    SECTION_IDS.about,
    SECTION_IDS.work,
    SECTION_IDS.contact,
  ]);

  const closeMenu = () => setMenuOpen(false);

  const handleSectionClick = (sectionId: string) => {
    goToSection(sectionId);
    closeMenu();
  };

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav}${menuOpen ? ` ${styles.open}` : ""}`}
        aria-label="Main navigation"
      >
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <strong>{SITE.displayName}</strong>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-nav-links"
          aria-label="Toggle navigation menu"
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </button>

        <div id="site-nav-links" className={styles.links}>
          {NAV_SECTIONS.map(({ label, sectionId }) => (
            <button
              key={sectionId}
              type="button"
              className={
                activeSection === sectionId
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
              onClick={() => handleSectionClick(sectionId)}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            className={styles.link}
            onClick={() => {
              openCv();
              closeMenu();
            }}
          >
            RESUME
          </button>
        </div>
      </nav>
    </header>
  );
}
