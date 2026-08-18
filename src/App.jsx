import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Story from './pages/Story';
import Contact from './pages/Contact';
import Services from './pages/service';

// Global Widgets
import AI from './components/AI';
import Feedback from './components/Feedback';
import ScreenSaver from './components/ScreenSaver';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
       <AI />
      <Feedback />
      <ScreenSaver />
      <Navbar />

      {/* Pages Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;