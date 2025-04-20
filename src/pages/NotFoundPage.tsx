import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Componente para animación de código en consola
const ConsoleCode: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('');
  const codeLines = [
    '> Buscando página...',
    '> ERROR 404: Página no encontrada',
    '> Analizando sistema de archivos...',
    '> Intentando recuperar datos...',
    '> No se pudo recuperar la ruta solicitada',
    '> Ejecutando diagnóstico...',
    '> Sugerencia: Regresar a una ruta conocida',
    '> Iniciando protocolo de retorno a Home...'
  ];

  useEffect(() => {
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let timeout: number;

    const typeText = () => {
      if (currentLineIndex < codeLines.length) {
        const currentLine = codeLines[currentLineIndex];

        if (currentCharIndex <= currentLine.length) {
          setDisplayText(prev =>
            prev.split('\n').slice(0, currentLineIndex).join('\n') +
            (currentLineIndex > 0 ? '\n' : '') +
            currentLine.substring(0, currentCharIndex)
          );

          currentCharIndex++;

          // Velocidad aleatoria para efecto más realista de escritura
          const speed = Math.random() * 50 + 10;
          timeout = setTimeout(typeText, speed);
        } else {
          currentLineIndex++;
          currentCharIndex = 0;

          // Pausa entre líneas
          timeout = setTimeout(typeText, 500);
        }
      }
    };

    timeout = setTimeout(typeText, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="font-mono text-lime-neon text-sm sm:text-base bg-background/90 p-4 rounded-lg border border-lime-neon/50 h-[200px] overflow-hidden whitespace-pre-wrap">
      {displayText}
      <span className="animate-pulse">▌</span>
    </div>
  );
};

// Componente de decoración para píxeles flotantes
const FloatingPixels: React.FC = () => {
  const pixels = Array(20).fill(0).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pixels.map(pixel => (
        <motion.div
          key={pixel.id}
          className="absolute bg-lime-neon/30 rounded-sm"
          style={{
            width: pixel.size,
            height: pixel.size,
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0, 0.8, 0.2, 0]
          }}
          transition={{
            duration: pixel.duration,
            repeat: Infinity,
            delay: pixel.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Componente para la línea de tiempo con destino erróneo
const WrongDestination: React.FC = () => {
  const destinations = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Sobre Mí' },
    { path: '/services', label: 'Servicios' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contacto' }
  ];

  return (
    <div className="mt-12">
      <h3 className="font-gilroy font-medium text-xl text-text-primary mb-4">¿A dónde querías ir?</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              to={dest.path}
              className="block p-4 bg-dark-panel border border-border-gray rounded-lg text-center hover:border-lime-neon hover:text-lime-neon transition-colors"
            >
              {dest.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Componente glitch para el número 404
const GlitchText: React.FC = () => {
  return (
    <div className="relative inline-block">
      <h1 className="font-gilroy font-bold text-8xl md:text-9xl text-lime-neon relative z-10 tracking-tighter">
        404
      </h1>
      <motion.div
        className="absolute -inset-1 font-gilroy font-bold text-8xl md:text-9xl text-ralex-blue opacity-70 tracking-tighter"
        animate={{
          x: [0, -4, 5, -5, 4, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        404
      </motion.div>
      <motion.div
        className="absolute -inset-1 font-gilroy font-bold text-8xl md:text-9xl text-red-500 opacity-70 tracking-tighter"
        animate={{
          x: [0, 5, -5, 4, -4, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.1
        }}
      >
        404
      </motion.div>
    </div>
  );
};

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let timeout: number;

    timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center relative">
      <FloatingPixels />

      <div className="container-main relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-6">
            <GlitchText />

            <motion.p
              className="text-xl sm:text-2xl text-text-secondary mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Has entrado en el espacio digital desconocido
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ConsoleCode />
          </motion.div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-text-secondary mb-6">
              La página que buscas se ha movido a otra dimensión o nunca existió.
            </p>

            <Link
              to="/"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Regresar al inicio
            </Link>
          </motion.div>

          <WrongDestination />

          <motion.div
            className="mt-16 p-6 bg-dark-panel border border-border-gray rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <h3 className="font-gilroy font-medium text-xl text-lime-neon mb-2">¿Encontraste un error?</h3>
            <p className="text-text-secondary mb-4">
              Si crees que esto es un problema en mi sitio web, no dudes en reportarlo.
            </p>
            <Link
              to="/contact"
              className="text-lime-neon hover:underline inline-flex items-center gap-1"
            >
              Informar problema
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;