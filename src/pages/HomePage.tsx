import Hero from '../components/Hero';
import ImpactMetrics from '../components/ImpactMetrics';
import AboutTeaser from '../components/AboutTeaser';
import ServicesSnapshot from '../components/ServicesSnapshot';
import QuoteHighlight from '../components/QuoteHighlight';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <AboutTeaser />
      <ServicesSnapshot />
      <QuoteHighlight />
      {/* Aquí podrían ir otros componentes específicos de la Home si los hubiera */}
    </>
  );
};

export default HomePage;