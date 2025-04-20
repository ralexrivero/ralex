import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { FeaturesProvider } from './context/FeaturesContext'
import App from './App'
import './index.css'
import './i18n/i18n'

// Importar configuración de i18n antes de renderizar la aplicación

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ThemeProvider>
          <FeaturesProvider>
            <App />
          </FeaturesProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
