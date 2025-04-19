import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';

type Language = 'es' | 'en';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  changeLanguage: (lang: Language) => void;
}

// Crear contexto con valor inicial undefined para forzar el uso del Provider
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

/**
 * Proveedor de contexto de idioma para la aplicación
 * - Almacena el idioma actual en estado y localStorage
 * - Proporciona funciones para cambiar el idioma
 * - Implementa detección inicial de idioma preferido del usuario
 *
 * Esta arquitectura es escalable y permitirá:
 * 1. Integrar con API o gestores de contenido para traducciones
 * 2. Añadir nuevos idiomas fácilmente sin afectar la lógica
 * 3. Permitir personalización por usuario cuando se integre con backend
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Se usa useTranslation para acceder a la instancia de i18n
  const { i18n } = useTranslation();

  // Estado para el idioma, inicializado con el valor de i18n o localStorage
  const [language, setLanguage] = useState<Language>(() => {
    // 1. Intentar leer desde localStorage
    try {
      const storedLanguage = localStorage.getItem('language') as Language | null;
      if (storedLanguage && (storedLanguage === 'es' || storedLanguage === 'en')) {
        return storedLanguage;
      }
    } catch (error) {
      console.error("Error reading language from localStorage", error);
    }

    // 2. Usar el idioma actual de i18n que puede venir del detector de idioma
    const currentLanguage = i18n.language;
    if (currentLanguage && (currentLanguage === 'es' || currentLanguage === 'en')) {
      return currentLanguage as Language;
    }

    // 3. Default a 'es'
    return 'es';
  });

  // Efecto para sincronizar el idioma con i18n y localStorage
  useEffect(() => {
    i18n.changeLanguage(language);

    // Guardar en localStorage
    try {
      localStorage.setItem('language', language);
    } catch (error) {
      console.error("Error saving language to localStorage", error);
    }
  }, [language, i18n]);

  // Función para alternar entre idiomas
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
  };

  // Función para cambiar a un idioma específico
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto de idioma
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};