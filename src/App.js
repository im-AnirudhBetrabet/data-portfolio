import './App.css';
import Hero from './hero/Hero';
import Navbar from './navbar/navbar';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './skills/Skills';
import Projects from './projects/projects';
import Contact from './contact/Contact';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true
    });
  }, []);
  
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
