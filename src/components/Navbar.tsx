import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Sobre mí', href: '/about' },
    { label: 'Servicios', href: '/services' },
    { label: 'Proyectos', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contact' },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `relative text-sm font-medium transition-colors duration-200 hover:text-text-primary/80 ${isActive ? 'text-text-primary' : 'text-text-secondary'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border-gray/60 shadow-md'
          : 'bg-transparent border-b border-transparent'
          }`}
      >
        <nav className="container-main h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold font-gilroy text-text-primary">
            Ralex.
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className={navLinkClasses} end>HOME</NavLink>
            <NavLink to="/about" className={navLinkClasses}>SOBRE MÍ</NavLink>
            <NavLink to="/services" className={navLinkClasses}>SERVICIOS</NavLink>
            <NavLink to="/projects" className={navLinkClasses}>PROYECTOS</NavLink>
            <NavLink to="/blog" className={navLinkClasses}>BLOG</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>CONTACTO</NavLink>

            <button
              onClick={toggleTheme}
              aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
              className="p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-dark-panel/40 transition-colors duration-200"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
              className="p-2 mr-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-dark-panel/40 transition-colors duration-200"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              aria-label="Abrir menú"
              className="text-text-primary p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu onClose={closeMobileMenu} navItems={navItems} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;