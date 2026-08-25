import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Team from './pages/Team';
import Story from './pages/Story';
import Contact from './pages/Contact';
import Services from './pages/service';
import ServiceDetail from './pages/ServiceDetail'; 

//Privay
import Contract from '../src/sections/Privacy/ServiceAgreement.jsx'
import Privacy from '../src/sections/Privacy/PrivacyPolicy.jsx'
import Refund from '../src/sections/Privacy/RefundPolicy.jsx'
import Terms from '../src/sections/Privacy/TermsAndConditions.jsx'

// Global Widgets
import AI from './components/AI';
import Feedback from './components/Feedback';
import ScreenSaver from './components/ScreenSaver';
import Footer from './components/Footer';
import Scrollstop from './components/ScrollToTop.jsx'


function App() {
  return (
    <Router basename="/React-CC">
      <AI />
      <Feedback />
      <ScreenSaver />
      <Navbar />
      <Scrollstop/>

      {/* Pages Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />

        {/* 2. Dynamic Route for Individual Service Details */}
        <Route path="/services/:id" element={<ServiceDetail />} />
        
        {/* Privacy */}
        <Route path="/contract" element={<Contract />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;