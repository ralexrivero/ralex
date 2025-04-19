import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importamos los archivos de traducción directamente como objetos
// en lugar de como importaciones de archivos JSON, ya que esto puede causar problemas
// en algunas configuraciones de Vite/TypeScript
const esTranslation = {
  "common": {
    "languageName": "Español",
    "languageSelector": "Seleccionar idioma"
  },
  "navbar": {
    "home": "HOME",
    "about": "SOBRE MÍ",
    "services": "SERVICIOS",
    "projects": "PROYECTOS",
    "blog": "BLOG",
    "contact": "CONTACTO",
    "themeSwitcher": "Cambiar a tema {{theme}}"
  },
  "hero": {
    "title": "Código abierto.<br/>Impacto real.",
    "subtitle": "desarrollador full‑stack que convierte retos complejos en software libre, y comparte cada línea de aprendizaje.",
    "callButton": "Reserva una llamada de 15 min",
    "exploreButton": "Explora mis proyectos"
  },
  "contactForm": {
    "title": "¿Hablamos sobre tu proyecto?",
    "description": "Tanto si tienes un proyecto concreto en mente como si solo quieres consultarme algo técnico o discutir posibilidades de colaboración, estaré encantado de charlar contigo.",
    "email": "Email",
    "videoCall": "Video llamada",
    "videoCallDesc": "Agenda una llamada de 30 minutos para discutir tu proyecto.",
    "bookDate": "Reservar una fecha",
    "socialNetworks": "Redes sociales",
    "name": "Nombre",
    "subject": "Asunto",
    "message": "Mensaje",
    "send": "Enviar mensaje",
    "responseTime": "Generalmente respondo dentro de las 24 horas hábiles."
  },
  "footer": {
    "copyright": "© {{year}} Ralex. Todos los derechos reservados."
  },
  "pageHeaders": {
    "contactTitle": "Contacto",
    "contactSubtitle": "¿Tienes un proyecto en mente o una consulta técnica? Estoy aquí para ayudarte a materializarlo",
    "projectsTitle": "Proyectos",
    "projectsSubtitle": "Del concepto a la producción. Soluciones técnicas construidas con enfoque en escalabilidad, rendimiento e impacto tangible"
  },
  "contactCTA": {
    "title": "Trabajemos juntos",
    "subtitle": "El primer paso para crear algo increíble es simplemente comenzar una conversación. ¿Qué te gustaría construir?",
    "buttonText": "Agendar una llamada"
  }
};

const enTranslation = {
  "common": {
    "languageName": "English",
    "languageSelector": "Select language"
  },
  "navbar": {
    "home": "HOME",
    "about": "ABOUT ME",
    "services": "SERVICES",
    "projects": "PROJECTS",
    "blog": "BLOG",
    "contact": "CONTACT",
    "themeSwitcher": "Switch to {{theme}} theme"
  },
  "hero": {
    "title": "Open source.<br/>Real impact.",
    "subtitle": "full-stack developer who turns complex challenges into free software, and shares every line of learning.",
    "callButton": "Book a 15-min call",
    "exploreButton": "Explore my projects"
  },
  "contactForm": {
    "title": "Shall we talk about your project?",
    "description": "Whether you have a specific project in mind or just want to ask me something technical or discuss collaboration possibilities, I'll be happy to chat with you.",
    "email": "Email",
    "videoCall": "Video call",
    "videoCallDesc": "Schedule a 30-minute call to discuss your project.",
    "bookDate": "Book a date",
    "socialNetworks": "Social Networks",
    "name": "Name",
    "subject": "Subject",
    "message": "Message",
    "send": "Send message",
    "responseTime": "I usually respond within 24 business hours."
  },
  "footer": {
    "copyright": "© {{year}} Ralex. All rights reserved."
  },
  "pageHeaders": {
    "contactTitle": "Contact",
    "contactSubtitle": "Do you have a project in mind or a technical query? I'm here to help you materialize it",
    "projectsTitle": "Projects",
    "projectsSubtitle": "From concept to production. Technical solutions built with a focus on scalability, performance and tangible impact"
  },
  "contactCTA": {
    "title": "Let's work together",
    "subtitle": "The first step to creating something amazing is simply starting a conversation. What would you like to build?",
    "buttonText": "Schedule a call"
  }
};

/**
 * Configuración de i18next para la aplicación
 * - Se utiliza un detector de idiomas del navegador para detectar el idioma preferido
 * - Se configura para usar el formato de archivos JSON
 * - Se definen dos idiomas: español (por defecto) e inglés
 * - Se configura para que el idioma de fallback sea español
 *
 * Esta implementación es escalable y permitirá:
 * 1. Añadir más idiomas fácilmente
 * 2. Cargar traducciones de manera dinámica desde un backend (API REST, MongoDB, etc.)
 * 3. Separar las traducciones por módulos o componentes si fuera necesario
 */
i18n
  // Detector de idioma del navegador
  .use(LanguageDetector)
  // Integración con React
  .use(initReactI18next)
  // Inicialización con opciones
  .init({
    resources: {
      es: {
        translation: esTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    }
  });

export default i18n;