import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MobileMenuProps {
  onClose: () => void;
  navItems: Array<{ label: string; href: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose, navItems }) => {
  // Referencia para enfocar el botón de cierre cuando se abre el menú
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock scroll cuando el menú está abierto y enfocar el botón de cierre
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Enfocar el botón de cierre para mejorar la accesibilidad
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Manejar la tecla Escape para cerrar el menú
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  // Variantes de animación
  const containerVariants = {
    hidden: {
      x: "-100%",
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Overlay que permite cerrar el menú al hacer clic fuera */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        className="fixed inset-0 z-50 bg-[#0E0E0F] text-white flex flex-col px-6 py-8 overflow-y-auto max-w-xs w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        {/* Botón de cierre */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-border-gray hover:bg-lime-neon hover:text-background text-white transition-colors focus:outline-none focus:ring-2 focus:ring-lime-neon focus:ring-offset-2 focus:ring-offset-[#0E0E0F]"
          aria-label="Cerrar menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Logo */}
        <motion.div
          className="mt-4 flex items-center gap-2"
          variants={itemVariants}
        >
          <img src="/logo.svg" alt="Ralex Logo" className="w-8 h-8" />
          <span className="font-gilroy font-bold text-xl text-text-primary" id="menu-title">Ralex.</span>
        </motion.div>

        {/* Navegación */}
        <nav className="mt-16 flex flex-col gap-6">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="text-2xl font-gilroy font-medium text-white hover:text-lime-neon transition-colors focus:outline-none focus:text-lime-neon"
              variants={itemVariants}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Pie del menú */}
        <motion.div
          className="mt-auto pt-10"
          variants={itemVariants}
        >
          <hr className="border-border-gray mb-6" />
          <div className="flex flex-col gap-4">
            <a
              href="mailto:ralexrivero@gmail.com"
              className="text-lime-neon hover:underline focus:outline-none focus:underline"
            >
              ralexrivero@gmail.com
            </a>
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Ralex. Todos los derechos reservados.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileMenu;