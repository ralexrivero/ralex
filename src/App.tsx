import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import AboutTeaser from './components/AboutTeaser';
import ServicesSnapshot from './components/ServicesSnapshot';
import QuoteHighlight from './components/QuoteHighlight';

function App() {
  return (
    <MainLayout>
      <Hero />
      <ImpactMetrics />
      <AboutTeaser />
      <ServicesSnapshot />
      <QuoteHighlight />
      {/* Aquí irían más secciones como Projects Carousel, Blog Preview y CTA Banner */}
    </MainLayout>
  );
}

export default App;
