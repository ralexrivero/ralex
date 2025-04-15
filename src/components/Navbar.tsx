import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-lg' : 'py-6'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-50">
            <img src="/logo.svg" alt="Ralex Logo" className="w-8 h-8" />
            <span className={`font-gilroy font-bold text-xl transition-colors duration-300 ${
              isMobileMenuOpen ? 'text-lime-neon' : 'text-text-primary'
            }`}>Ralex.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="navbar-item relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-neon group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full relative z-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lime-neon focus:ring-offset-2 focus:ring-offset-background"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu como componente separado */}
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu onClose={closeMobileMenu} navItems={navItems} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;