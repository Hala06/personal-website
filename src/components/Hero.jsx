import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator.jsx';

export default function Hero() {
  const fullText = "Hala Alshareef";
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
      <div className="hero-background">
        <div className="grid-overlay"></div>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="glitch-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="glitch" data-text={displayedText}>
            {displayedText}
          </h1>
          <div className="glitch-overlay"></div>
        </motion.div>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="highlight">Computer Security Student</span> |{' '}
          <span className="highlight">Aspiring Developer & Designer</span>
        </motion.p>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <a href="#projects" className="cta-button">
            <motion.button
              className="button glow-effect"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(100, 255, 218, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <span className="glow-container">
                <span className="glow"></span>
              </span>
            </motion.button>
          </a>
        </motion.div>

        <motion.div 
          className="tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className="tech-tag">React</span>
          <span className="tech-tag">JavaScript</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Cybersecurity</span>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </section>
  );
}
