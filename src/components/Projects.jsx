import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        Projects
      </motion.h2>
      <div className="project-grid">
        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>Memory Card Game</h3>
          <p>Interactive game built with JavaScript, HTML, and CSS.</p>
          <a href="https://github.com/Hala06/card-game" target="_blank" rel="noopener noreferrer">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              View on GitHub
            </motion.button>
          </a>
        </motion.div>
        {/* Additional project cards can be added here */}
      </div>
    </section>
  );
}
