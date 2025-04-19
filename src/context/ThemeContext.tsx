import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

// Crear el contexto con un valor inicial undefined para forzar el uso del Provider
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Estado para el tema, inicializado según localStorage o preferencia del sistema
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Intentar leer desde localStorage
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme) {
        return storedTheme;
      }
    } catch (error) {
      console.error("Error reading theme from localStorage", error);
    }

    // 2. Si no hay en localStorage, usar preferencia del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // 3. Default a 'light'
    return 'light';
  });

  // Efecto para aplicar la clase al HTML y guardar en localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);

    // Guardar en localStorage
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error("Error saving theme to localStorage", error);
    }
  }, [theme]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};