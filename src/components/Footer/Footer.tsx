import { SITE, SOCIAL_LINKS } from "../../config/site";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          {SOCIAL_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className={styles.link}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </div>
        <p className={styles.copy}>
          &copy; {SITE.displayName} {year}
        </p>
      </div>
    </footer>
  );
}
