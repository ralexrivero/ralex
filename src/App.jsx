import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import I from './components/I';
import Self from './components/Self';
import SoYouCanSee from './components/SoYouCanSee';
import AccordingToMe from './components/AccordingToMe';
import Contact from './components/Contact';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path ="/" element={<MainContent />} />
        <Route path="/soy" element={<I/>} />
        <Route path="/self-analysis" element={<Self />} />
        <Route path="/so-you-can-see" element={<SoYouCanSee />} />
        <Route path="/according-to-me" element={<AccordingToMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Sidebar /> */}
      <Footer />
    </div>
  )
}

export default App;
