import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  // Create references for each section
  const sections = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    services: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a particular section
  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  // Use IntersectionObserver to track section visibility and update active navbar item
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this value to control when a section is considered in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    Object.keys(sections).forEach((key) => {
      if (sections[key].current) {
        observer.observe(sections[key].current);
      }
    });

    // Cleanup the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <div className="App">
      {/* Header with Sticky Navbar */}
      <header className="navbar">
        <nav>
          <ul>
            <li className="portfolio">Portfolio</li>
            <li onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</li>
            <li onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</li>
            <li onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</li>
            <li onClick={() => scrollToSection('services')} className={activeSection === 'services' ? 'active' : ''}>Services</li>
            <li onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</li>
            <li onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <div id="home" ref={sections.home}><Home /></div>
      <div id="about" ref={sections.about}><About /></div>
      <div id="skills" ref={sections.skills}><Skills /></div>
      <div id="services" ref={sections.services}><Services /></div>
      <div id="projects" ref={sections.projects}><Projects /></div>
      <div id="contact" ref={sections.contact}><Contact /></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;