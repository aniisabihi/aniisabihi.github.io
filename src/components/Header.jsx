import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onOpenSkills }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header
      className={`page-header${menuOpen ? " responsive" : ""}`}
      id='myHeader'
    >
      <nav className='justify-content-between'>
        <Link to='/' className='logo' onClick={() => setMenuOpen(false)}>
          <strong>ANIISA BIHI</strong>
        </Link>
        <div className='header-right'>
          <Link
            to='/'
            className={location.pathname === "/" ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            WORK
          </Link>
          <a
            href='#skills'
            className='skills'
            onClick={(event) => {
              event.preventDefault();
              onOpenSkills();
              setMenuOpen(false);
            }}
          >
            SKILLS
          </a>
          <Link
            to='/about'
            className={location.pathname === "/about" ? "active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <a href='/AniisaBihi_CV.pdf' target='_blank' rel='noreferrer'>
            RESUME
          </a>
          <a
            href='#menu'
            className='icon'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            <i className='fa fa-bars' />
          </a>
        </div>
      </nav>
    </header>
  );
}
