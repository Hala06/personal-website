import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Dazai from './components/Dazai.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio">
      {/* Starry Background */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* Custom Cursor */}
      <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />

      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Dazai />
        <Contact />
      </main>
    </div>
  );
}
