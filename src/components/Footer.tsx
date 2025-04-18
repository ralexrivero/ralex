import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/ralexrivero',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronald-rivero/',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ralex_uy',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

const navLinks = [
  { name: 'Inicio', url: '/' },
  { name: 'Servicios', url: '/services' },
  { name: 'Proyectos', url: '/projects' },
  { name: 'Blog', url: '/blog' },
  { name: 'Acerca de', url: '/about' },
  { name: 'Contacto', url: '/contact' },
];

const renderSocialIcon = (item: any) => {
  if (typeof item === 'function') {
    return item({ className: 'h-6 w-6' });
  }

  // Buscar el icono correspondiente en socialLinks
  const socialLink = socialLinks.find(link => link.name === item);
  if (socialLink && socialLink.icon) {
    return socialLink.icon({ className: 'h-6 w-6' });
  }

  return null;
};

const Footer = () => {
  return (
    <footer className="bg-dark-panel pt-16 pb-8">
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
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-border-gray text-text-secondary hover:text-lime-neon hover:border-lime-neon transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  {renderSocialIcon(link.name)}
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
