import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function SectionProgress() {
  const [activeSection, setActiveSection] = useState(null);
  const [sectionProgress, setSectionProgress] = useState(0);
  const { scrollY } = useScroll();
  
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const callback = (latest) => {
      // Find current section
      const sections = document.querySelectorAll('section');
      let current = null;
      let progress = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (latest >= sectionTop && latest <= sectionBottom) {
          current = section.id;
          // Calculate progress through current section
          progress = (latest - sectionTop) / (rect.height - window.innerHeight);
          progress = Math.min(Math.max(progress, 0), 1);
        }
      });

      setActiveSection(current);
      setSectionProgress(progress);
      scaleX.set(progress);
    };

    scrollY.on("change", callback);
    return () => scrollY.clearListeners && scrollY.clearListeners();
  }, [scrollY, scaleX]);

  return (
    <>
      <div className="section-progress">
        <motion.div 
          className="section-progress-bar"
          style={{ scaleX }}
        />
      </div>
      <div className="section-indicator">
        {activeSection && (
          <motion.div 
            className="section-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <span className="section-number">
              {`0${getProjectNumber(activeSection)}.`}
            </span>
            {formatSectionName(activeSection)}
          </motion.div>
        )}
      </div>
    </>
  );
}

function getProjectNumber(sectionId) {
  const sections = ['hero', 'about', 'timeline', 'projects', 'skills', 'contact'];
  return sections.indexOf(sectionId) + 1;
}

function formatSectionName(sectionId) {
  return sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}
