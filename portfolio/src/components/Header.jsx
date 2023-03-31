import React, { useState, useRef } from 'react';


const Header = () => {

  const [menuOpen, SetMenuOpen] = useState(false);
  const navHeaderRef = useRef(null);

  const handleBurgerClick = () => {
    SetMenuOpen(!menuOpen);
  };

  const handleNavHeaderClick = () => {
    SetMenuOpen(false);
  };

  return (
    <header className="header-main">
      <img className="logo-nav" src="../../public/logo.svg" alt="logo de Ronald Rivero" />
      <span id="burger" className={`fa-bars material-symbols-rounded ${menuOpen ? 'fa-bars-clicked' : ''}`} onClick={handleBurgerClick} >menu</span>
      <h1 className="brand-name">Ronald Alexander</h1>
      <nav className="nav-header">
        <ul id="nav-header" className={`nav-header-container ${menuOpen ? 'show' : ''}`} ref={navHeaderRef} onClick={handleNavHeaderClick}>
          <li><a className="nav-header-links active" href="#"><span class="material-symbols-rounded">home</span>Inicio</a></li>
          <li><a className="nav-header-links" href="#"><span class="material-symbols-rounded">person</span>Sobre mí</a></li>
          <li><a className="nav-header-links" href="#"><span class="material-symbols-rounded">check_circle</span>Servicios</a></li>
          <li><a className="nav-header-links" href="#"><span class="material-symbols-rounded">work</span>Portafolio</a></li>
          <li><a className="nav-header-links" href="#"><span class="material-symbols-rounded">format_quote</span>Testimonios</a></li>
          <li><a className="nav-header-links" href="#"><span class="material-symbols-rounded">feed</span>Blog</a></li>
          <li><a className="nav-header-links" href="#"><span class="material-symbols-rounded">contact_page</span>Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
