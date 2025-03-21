import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="about">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        About Me
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        I’m Hala Alshareef, a first-year Computer Security student at York University. Passionate about coding, design,
        and creating innovative projects. Skilled in HTML, CSS, JavaScript, React, Python, and more. I enjoy solving
        complex problems and building user-friendly applications.
      </motion.p>
      <motion.a 
        href="/path-to-your-cv.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cv-link"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        View My CV
      </motion.a>
    </section>
  );
}
