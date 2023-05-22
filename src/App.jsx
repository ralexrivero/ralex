import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Sidebar />
      <Footer />
    </div>
  )
}

export default App;
