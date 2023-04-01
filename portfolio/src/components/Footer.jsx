import React from 'react';
import logo from '../img/logo.svg';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="copy-footer">
        <img className="logo-brand-signature" src={ logo } alt="Ronald logo" />
        <small className="brand-signature">&copy; ralex 2023</small>
      </div>

      <ul className="social-footer">
        <li><a href="#" target="_blank"><i className="bi bi-linkedin"></i></a></li>
        <li><a href="#" target="_blank"><i className="bi bi-github"></i></a></li>
        <li><a href="#" target="_blank"><i className="bi bi-twitter"></i></a></li>
        <li><a href="#" target="_blank"><i className="bi bi-medium"></i></a></li>
      </ul>

    <nav>
      <ul>
        <li><a ></a></li>
      </ul>
    </nav>
    </footer>
  )
}

export default Footer;
