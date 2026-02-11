import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Honeybadger } from "@honeybadger-io/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyWork from "./components/Mywork";
import Certificate from "./components/Certificate";
import Internship from "./components/Internship";
import Education from "./components/Education";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Honeybadger Test Notification (Only in dev/production check)
  useEffect(() => {
    if (import.meta.env.DEV) {
      Honeybadger.notify("Testing Honeybadger in Development!");
      console.log("Honeybadger test notification sent.");
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-poppins relative">

        {/* Navbar */}
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        <main className="container mx-auto px-4 md:px-8 lg:px-16 overflow-hidden relative">
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Education />
                  <About />
                  <MyWork />
                  <Contact />
                </>
              }
            />

            <Route path="/projects" element={<Projects />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mywork" element={<MyWork />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
