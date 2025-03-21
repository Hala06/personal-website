import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    company: "Dollarama L.P.",
    title: "Sales Associate and Cashier",
    location: "Mississauga, Ontario, Canada (On-site)",
    description: `• Streamlined store operations by removing damaged, out-of-code, discontinued, and non-set items.
• Conducted quality inspections of merchandise and arranged products to enhance visual appeal.
• Monitored inventory levels and ensured product displays were fully stocked.
• Provided exceptional customer service and processed transactions with high accuracy.
• Demonstrated flexibility by working varied schedules and additional shifts.`,
    duration: "Oct 2022 - Jan 2023 (4 mos)"
  },
  {
    company: "Career Education Council",
    title: "Co-op Student",
    location: "Ontario, Canada (Hybrid)",
    description: `• Collaborated with mentors and industry professionals on innovative business and tech solutions.
• Conducted market research and contributed to business development.
• Coded and prototyped solutions using Swift.
• Pitched ideas to industry experts, refining communication skills.
• Worked in a team environment to deliver projects on time.`,
    duration: "Sep 2023 - Jan 2024 (5 mos)"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        Work Experience
      </motion.h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <h3>{item.company}</h3>
            <h4>{item.title}</h4>
            {item.location && <p className="location">{item.location}</p>}
            <p>{item.description}</p>
            <span className="duration">{item.duration}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

