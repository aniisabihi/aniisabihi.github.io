import { SITE, SOCIAL_LINKS } from "../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__links">
          {SOCIAL_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              className="site-footer__link"
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {label}
            </a>
          ))}
        </div>
        <p className="site-footer__copy">
          &copy; {SITE.displayName} {year}
        </p>
      </div>
    </footer>
  );
}
