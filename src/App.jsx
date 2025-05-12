import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import './styles/sections.css';
import './App.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle section changes
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="portfolio">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen progress={100} />}
      </AnimatePresence>

      <Header currentSection={currentSection} />

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
          y: isLoading ? 20 : 0
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>
    </div>
  );
}
