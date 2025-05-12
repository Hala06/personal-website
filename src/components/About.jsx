import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="about">
      <motion.h2 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        About
      </motion.h2>

      <motion.div 
        className="about-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Hello! I'm a passionate software developer with expertise in creating modern web applications.
          My journey in tech began during my university years, and since then, I've been constantly
          expanding my knowledge and skills in software development.
        </p>
        <p>
          I specialize in building scalable web applications using modern technologies like React,
          Node.js, and various cloud platforms. My approach combines technical expertise with a
          strong focus on user experience and clean code principles.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source
          projects, or sharing knowledge with the developer community through blog posts and mentoring.
        </p>

        <motion.a
          href="/path-to-cv.pdf"
          className="cv-link"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
