import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Pitching Ideas",
  "Pitch Development",
  "Creative Pitching",
  "Perfect Pitch",
  "Business Planning",
  "Business Development",
  "Presentations",
  "Ideas Development",
  "Business Ideas",
  "Group Presentations",
  "Teamwork",
  "Cash Handling",
  "Cashiering",
  "Organization Skills",
  "Time Management",
  "Group Work",
  "Java",
  "JavaScript",
  "C++",
  "HTML5",
  "CSS",
  "React.js",
  "Swift"
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        Skills
      </motion.h2>
      <motion.div
        className="skills-list"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </motion.div>
    </section>
  );
}

