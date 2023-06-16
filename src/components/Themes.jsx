import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Themes = ({ theme, setTheme, toggleMenu }) => {
  const [t, i18n] = useTranslation('global');

  const toggleLightMode = () => {
    setTheme('light');
  }

  const toggleDarkMode = () => {
    setTheme('dark');
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', theme === 'dark');
    body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  return (
    <div className="switch-mode-box">
    <button className={`light-mode-btn ${theme === 'light' ? 'active' : ''}`} onClick={() => {toggleLightMode(); toggleMenu();}} title={t("mainHeader.theme.lightTitle")}>
      <span className="nav-icon material-symbols-rounded material-symbols-outlined">light_mode</span>
    </button>
    <button className={`dark-mode-btn ${theme === 'dark' ? 'active' : ''}`} onClick={() => {toggleDarkMode(); toggleMenu();}}>
      <span className="nav-icon material-symbols-rounded material-symbols-outlined">dark_mode</span>
    </button>
  </div>
  )
}

export default Themes;
