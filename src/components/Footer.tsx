import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/username', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/username', icon: 'twitter' },
];

const navLinks = [
  { name: 'Inicio', url: '/' },
  { name: 'Servicios', url: '/services' },
  { name: 'Proyectos', url: '/projects' },
  { name: 'Blog', url: '/blog' },
  { name: 'Acerca de', url: '/about' },
  { name: 'Contacto', url: '/contact' },
];

const renderSocialIcon = (icon: string) => {
  switch (icon) {
    case 'github':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C19.1375 20.1625 22 16.4125 22 12C22 6.475 17.525 2 12 2Z" fill="currentColor"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4622 5.3929C21.6283 5.75705 20.7424 5.99983 19.8286 6.11C20.7662 5.53392 21.4795 4.64079 21.8178 3.59286C20.9348 4.10936 19.9646 4.4771 18.9514 4.6843C18.1386 3.79768 17.0075 3.25 15.7692 3.25C13.3926 3.25 11.4731 5.21221 11.4731 7.64107C11.4731 7.99848 11.5112 8.34661 11.5862 8.68045C7.96428 8.49442 4.7259 6.74107 2.52478 4.10286C2.12961 4.77138 1.90535 5.5485 1.90535 6.37192C1.90535 7.93884 2.7058 9.31842 3.93105 10.1229C3.19961 10.099 2.48579 9.89777 1.85625 9.57321V9.63036C1.85625 11.7418 3.32625 13.4908 5.31172 13.9166C4.91021 14.0215 4.49397 14.0746 4.06426 14.0746C3.75969 14.0746 3.46554 14.0486 3.17784 13.9965C3.77538 15.7172 5.37817 17.0002 7.2642 17.0354C5.78214 18.232 3.9292 18.9354 1.9209 18.9354C1.5498 18.9354 1.18196 18.9137 0.818848 18.8704C2.72622 20.1362 5.01756 20.85 7.46597 20.85C15.7576 20.85 20.2677 14.1505 20.2677 8.34035C20.2677 8.1457 20.2621 7.95213 20.2538 7.76C21.1477 7.10706 21.9266 6.30276 22.5 5.39469L22.4622 5.3929Z" fill="currentColor"/>
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  return (
    <footer className="bg-dark-panel border-t border-border-gray pt-16 pb-8">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Ralex Logo" className="w-8 h-8" />
              <span className="font-gilroy font-bold text-xl text-text-primary">Ralex.</span>
            </div>
            <p className="text-text-secondary mb-6">
              Desarrollador full-stack enfocado en crear soluciones de código abierto
              que impulsen el conocimiento compartido y la innovación tecnológica.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border-gray text-text-secondary hover:text-lime-neon hover:border-lime-neon transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="font-gilroy font-bold text-lg text-white mb-4">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="font-standerd text-text-secondary hover:text-lime-neon transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y newsletter */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="font-gilroy font-bold text-lg text-white mb-4">Contacto</h4>
            <p className="text-text-secondary mb-4">
              ¿Tienes un proyecto en mente? Contáctame para discutir cómo podemos colaborar.
            </p>
            <a
              href="mailto:ralexrivero@gmail.com"
              className="text-lime-neon hover:underline mb-6 inline-block"
            >
              ralexrivero@gmail.com
            </a>

            <div className="mt-6">
              <h4 className="font-gilroy font-bold text-lg text-white mb-4">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="bg-background border border-border-gray text-text-primary rounded px-4 py-2 flex-grow focus:outline-none focus:border-lime-neon"
                />
                <button
                  type="submit"
                  className="btn-primary py-2"
                >
                  Suscribir
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Borde y copyright */}
        <div className="border-t border-border-gray pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ralex. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-text-secondary text-sm hover:text-lime-neon transition-colors">
                Política de Privacidad
              </a>
              <a href="/terms" className="text-text-secondary text-sm hover:text-lime-neon transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
