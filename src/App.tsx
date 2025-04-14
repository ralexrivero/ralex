import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';

function App() {
  return (
    <MainLayout>
      <Hero />
      <TrustStrip />
      {/* Aquí irían más secciones en una implementación completa */}
    </MainLayout>
  );
}

export default App;
