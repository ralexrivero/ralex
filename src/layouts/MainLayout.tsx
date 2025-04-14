import { ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <main>
        {children}
      </main>
      {/* Aquí iría el Footer en una implementación completa */}
    </div>
  );
};

export default MainLayout;