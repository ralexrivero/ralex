import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoNieve from '../img/logo_nieve.svg';
import LogoNegro from '../img/logo_negro.svg';
import Themes from './Themes';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [theme, setTheme] = useState('dark');

  const [t, i18n] = useTranslation('global');

  return (
    <header className="header-main fixed-top-header">
      <Link to="/">
        <img
          className="logo-header"
          src={theme === 'dark' ? LogoNieve : LogoNegro}
          alt={t('mainHeader.logoTitle')}
          title={t('mainHeader.logoAlt')}
          onClick={menuOpen ? toggleMenu : undefined}
        />
      </Link>
      <span
        id="burger"
        className={`fa-bars material-symbols-rounded ${menuOpen ? 'fa-bars-clicked' : ''}`}
        onClick={toggleMenu}
        title={t('mainHeader.burguerTitle')}
        aria-label={(t('mainHeader.burguerAria'))}
      >
        menu
      </span>

      <nav className={`nav-header ${menuOpen ? 'nav-header-open' : ''}`} aria-label={t('mainHeader.navitationAria')}>
        <ul className="nav-header-container">
          <li>
            <Link to="/" className="nav-header-links" onClick={toggleMenu}>
              <span className="material-symbols-rounded">home</span>
              {t('mainHeader.menu.home')}
            </Link>
          </li>
          <li>
            <Link to="/me" className="nav-header-links" onClick={toggleMenu}>
              <span className="material-symbols-rounded">person</span>
              {t('mainHeader.menu.i')}
            </Link>
          </li>
          <li>
            <Link to="/self-analysis" className="nav-header-links" onClick={toggleMenu}>
              <span className="material-symbols-rounded">check_circle</span>
              {t('mainHeader.menu.selfAnalysis')}
            </Link>
          </li>
          <li>
            <Link to="/so-you-can-see" className="nav-header-links" onClick={toggleMenu}>
              <span className="material-symbols-rounded">work</span>
              {t('mainHeader.menu.soYouCanSee')}
            </Link>
          </li>
          <li>
            <Link to="/according-to-me" className="nav-header-links" onClick={toggleMenu}>
              <span className="material-symbols-rounded">feed</span>
              {t('mainHeader.menu.accordingToMe')}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-header-links" onClick={toggleMenu}>
              <span className="material-symbols-rounded">contact_page</span>
              {t('mainHeader.menu.contact')}
            </Link>
          </li>
          <li>
            <Themes theme={theme} setTheme={setTheme} toggleMenu={toggleMenu} />
          </li>
          <li>
            <div className="lang">
              <i
                className="lang-main-btn bi bi-translate"
                title={t('mainHeader.lang.iconTitle')}
                aria-label={t('mainHeader.lang.iconAria')}
              ></i>
              <div className="lang-group">
                <button
                  className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage('en');
                    toggleMenu();
                  }}
                  title={t('mainHeader.lang.enTitle')}
                  aria-label={t('mainHeader.lang.enAria')}
                >
                  en
                </button>
                <button
                  className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage('es');
                    toggleMenu();
                  }}
                  title={t('mainHeader.lang.esTitle')}
                  aria-label={t('mainHeader.lang.esAria')}
                >
                  es
                </button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
