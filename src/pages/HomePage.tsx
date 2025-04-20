import { useEffect } from 'react';
import Hero from '../components/Hero';
import ImpactMetrics from '../components/ImpactMetrics';
import AboutTeaser from '../components/AboutTeaser';
import ServicesSnapshot from '../components/ServicesSnapshot';
import QuoteHighlight from '../components/QuoteHighlight';
import { FeatureGuard } from '../components/FeatureGuard';
import { useFeatures } from '../context/FeaturesContext';

const HomePage = () => {
  const { isEnabled } = useFeatures();

  // Agregar log para depuración
  useEffect(() => {
    console.log('HomePage montado');
    console.log('Estado de las características:', {
      hero: isEnabled('home_hero'),
      metrics: isEnabled('home_metrics'),
      about: isEnabled('home_about'),
      services: isEnabled('home_services'),
      quote: isEnabled('home_quote')
    });
  }, [isEnabled]);

  return (
    <main className="flex-grow">
      <FeatureGuard feature="home_hero">
        <Hero />
      </FeatureGuard>

      <FeatureGuard feature="home_metrics">
        <ImpactMetrics />
      </FeatureGuard>

      <FeatureGuard feature="home_about">
        <AboutTeaser />
      </FeatureGuard>

      <FeatureGuard feature="home_services">
        <ServicesSnapshot />
      </FeatureGuard>

      <FeatureGuard feature="home_quote">
        <QuoteHighlight />
      </FeatureGuard>
    </main>
  );
};

export default HomePage;