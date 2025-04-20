import React, { createContext, useContext } from 'react';

// Define las secciones que pueden ser habilitadas/deshabilitadas
export type Feature =
  | 'about'
  | 'services'
  | 'projects'
  | 'blog'
  | 'contact'
  // Secciones del Home
  | 'home_hero'
  | 'home_metrics'
  | 'home_about'
  | 'home_services'
  | 'home_quote'
  | 'home_projects';

interface FeaturesContextProps {
  isEnabled: (feature: Feature) => boolean;
}

const FeaturesContext = createContext<FeaturesContextProps | undefined>(undefined);

// Configura aquí qué características están habilitadas
const ENABLED_FEATURES: Feature[] = [
  // Secciones del Home - todas habilitadas
  'home_hero',     // Hero section
  'home_metrics',  // Métricas de impacto
  'home_about',    // Sección "sobre mí" en el home
  'home_services', // Sección de servicios en el home
  'home_quote',    // Sección de cita destacada
  'home_projects', // Sección de proyectos en el home

  // Páginas completas (deshabilitadas por defecto)
  // 'about',
  // 'services',
  // 'projects',
  // 'blog',
  // 'contact',
];

interface FeaturesProviderProps {
  children: React.ReactNode;
}

export const FeaturesProvider: React.FC<FeaturesProviderProps> = ({ children }) => {
  const isEnabled = (feature: Feature): boolean => {
    return ENABLED_FEATURES.includes(feature);
  };

  return (
    <FeaturesContext.Provider value={{ isEnabled }}>
      {children}
    </FeaturesContext.Provider>
  );
};

export const useFeatures = (): FeaturesContextProps => {
  const context = useContext(FeaturesContext);
  if (context === undefined) {
    throw new Error('useFeatures must be used within a FeaturesProvider');
  }
  return context;
};