import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyWork from './components/MyWork';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="font-poppins">
        {/* Navbar should be outside Routes so it appears on all pages */}
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <main className="container mx-auto px-4 md:px-8 lg:px-16 overflow-hidden">
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <About />
              <MyWork />
              <Contact />
            </>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mywork" element={<MyWork />} />
          </Routes>
        </main>

        {/* Footer should also be outside Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
