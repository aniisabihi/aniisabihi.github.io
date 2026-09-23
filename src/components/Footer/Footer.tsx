import type { MouseEvent } from "react";
import { SITE, SOCIAL_LINKS } from "../../config/site";
import styles from "./Footer.module.scss";

function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  // Keyboard focus follows the reader back up instead of staying in the footer.
  document.getElementById("main-content")?.focus({ preventScroll: true });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.links} aria-label="Contact and profiles">
          {SOCIAL_LINKS.map(({ label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.link}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {label}
                {external && (
                  <span className="visually-hidden"> (opens in new tab)</span>
                )}
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.copy}>
          &copy; {year} {SITE.name}
        </p>
        <a href="#main-content" className={styles.top} onClick={scrollToTop}>
          Back to top
          <i className="fa fa-arrow-up" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
