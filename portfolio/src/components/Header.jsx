import React from 'react';

const Header = () => {
  return (
    <header className="header-main">
      <img className="logo-nav" src="../../public/logo.svg" alt="logo de Ronald Rivero" />
      <nav className="nav-main">
        <ul>
          <li className="nav-main-li" ><a href="#">Inicio</a></li>
          <li className="nav-main-li" ><a href="#">Sobre mí</a></li>
          <li className="nav-main-li" ><a href="#">Servicios</a></li>
          <li className="nav-main-li" ><a href="#">Portafolio</a></li>
          <li className="nav-main-li" ><a href="#">Testimonios</a></li>
          <li className="nav-main-li" ><a href="#">Blog</a></li>
          <li className="nav-main-li" ><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
