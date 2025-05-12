import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = {
  "Frontend": [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "SASS", level: 80 }
  ],
  "Backend": [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 65 },
    { name: "Python", level: 70 },
    { name: "PHP", level: 60 }
  ],
  "Tools": [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Docker", level: 65 },
    { name: "Jest", level: 75 },
    { name: "Webpack", level: 70 },
    { name: "Linux", level: 75 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="section-title"
      >
        <span className="title-number">05.</span> Skills
      </motion.h2>

      {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
        <motion.div
          key={category}
          className="skill-category"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
        >
          <h3>{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
