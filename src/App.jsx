import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Sections/Home.jsx';
import Skills from './Sections/Skills.jsx';
import Portfolios from './Sections/Portfolios.jsx';
import Contact from './Sections/Contact.jsx';
import Resume from './Sections/Resume.jsx';
import 'aos/dist/aos.css';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-100">
        <Navbar />
        <main className="py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolios />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
