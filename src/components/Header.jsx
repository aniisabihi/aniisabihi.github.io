import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, SITE } from "../config/site.js";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='site-header'>
      <nav className={`site-header__nav${menuOpen ? " is-open" : ""}`}>
        <Link to='/' className='site-header__logo' onClick={closeMenu}>
          <strong>{SITE.name}</strong>
        </Link>

        <button
          type='button'
          className='site-header__toggle'
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label='Toggle navigation menu'
        >
          <i className='fa fa-bars' aria-hidden='true' />
        </button>

        <div className='site-header__links'>
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "site-header__link is-active" : "site-header__link"
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={SITE.resumePath}
            target='_blank'
            rel='noreferrer'
            className='site-header__link'
            onClick={closeMenu}
          >
            RESUME
          </a>
        </div>
      </nav>
    </header>
  );
}
