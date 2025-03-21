import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator.jsx';

export default function Hero() {
  const fullText = "Hala Alshareef 👋";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 150);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero-content"
        animate={{ opacity: [0, 1], y: [50, 0] }}
        transition={{ duration: 1 }}
      >
        <h1>{displayedText}</h1>
        <p>Computer Security Student | Aspiring Developer & Designer</p>
        <a href="#projects">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            View My Work
          </motion.button>
        </a>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}
