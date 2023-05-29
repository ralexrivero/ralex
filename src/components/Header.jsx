import React, { useState, useRef } from 'react';
import LogoNieve from '../img/logo_nieve.svg';


const Header = () => {

  return (
    <header className="header-main fixed-top-header">

      <img className="logo-header" src={LogoNieve} alt="ralex logo nieve" />

      <span id="burger" className="fa-bars material-symbols-rounded">
        menu
      </span>

      <nav className="nav-header" aria-label="Menu de navegación principal">
        <ul id="nav-header" className="nav-header-container" >
          <li><a className="nav-header-links active active-first" href="#" aria-current="page"><span className="material-symbols-rounded">home</span></a></li>
          <li><a className="nav-header-links" href="#"><span className="material-symbols-rounded">person</span>soy</a></li>
          <li><a className="nav-header-links" href="#"><span className="material-symbols-rounded">check_circle</span>auto análisis</a></li>
          <li><a className="nav-header-links" href="#"><span className="material-symbols-rounded">work</span>para que veas</a></li>
          <li><a className="nav-header-links" href="#"><span className="material-symbols-rounded">feed</span>según yo</a></li>
          <li><a className="nav-header-links" href="#"><span className="material-symbols-rounded">contact_page</span>(con)tacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
