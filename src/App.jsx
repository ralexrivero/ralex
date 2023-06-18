import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Me from './components/Me';
import Self from './components/Self';
import SoYouCanSee from './components/SoYouCanSee';
import AccordingToMe from './components/AccordingToMe';
import Contact from './components/Contact';
import Courses from './components/Courses';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path ="/" element={<MainContent />} />
          <Route path="/me" element={<Me/>} />
          <Route path="/self-analysis" element={<Self />} />
          <Route path="/so-you-can-see" element={<SoYouCanSee />} />
          <Route path="/according-to-me" element={<AccordingToMe />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
