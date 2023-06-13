import React, { useState } from 'react';
import LogoNieve from '../img/logo_nieve.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="header-main fixed-top-header">

      <Link to="/">
        <img
          className="logo-header"
          src={LogoNieve}
          alt="ralex logo nieve"
          onClick={menuOpen ? toggleMenu : undefined}
        />
      </Link>
      <span
        id="burger"
        className={`fa-bars material-symbols-rounded ${menuOpen ? 'fa-bars-clicked' : undefined}`}
        onClick={toggleMenu}
        >
        menu
      </span>

      <nav className={`nav-header ${menuOpen ? 'nav-header-open' : undefined}`} aria-label="Menu de navegación principal">
        <ul className={`nav-header-container`}>
          <li>
            <Link to="/" className="nav-header-links" onClick={toggleMenu}><span className="material-symbols-rounded">home</span></Link>
          </li>
          <li>
            <Link to="/soy" className="nav-header-links" onClick={toggleMenu}><span className="material-symbols-rounded">person</span>Soy</Link>
          </li>
          <li>
            <Link to="/self-analysis" className="nav-header-links" onClick={toggleMenu}><span className="material-symbols-rounded">check_circle</span>auto análisis</Link>
          </li>
          <li>
            <Link to="/so-you-can-see" className="nav-header-links" onClick={toggleMenu}><span className="material-symbols-rounded">work</span>para que veas</Link></li>
          <li>
            <Link to="/according-to-me" className="nav-header-links" onClick={toggleMenu}><span className="material-symbols-rounded">feed</span>según yo</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-header-links" onClick={toggleMenu}><span className="material-symbols-rounded">contact_page</span>(con)tacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;


{/*           <div className="theme">
            <i className="theme-btn bi bi-brightness-high"></i>
            <i className="theme-btn bi bi-moon"></i>
          </div>
          <i className="lang-main-btn bi bi-translate"></i>
          <div className="lang-group">
            <button className="lang-btn lang-btn-active">en</button>
            <button className="lang-btn">es</button>
          </div> */}
