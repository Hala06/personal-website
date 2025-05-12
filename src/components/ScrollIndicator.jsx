import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { delay: 2 }
      }}
    >
      <div className="scroll-text">Scroll Down</div>
      <motion.div 
        className="scroll-line"
        initial={{ height: 0 }}
        animate={{ 
          height: [0, 40, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="scroll-dot"
          animate={{
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <motion.div 
        className="scroll-arrows"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="arrow">↓</span>
        <span className="arrow" style={{ opacity: 0.5 }}>↓</span>
        <span className="arrow" style={{ opacity: 0.2 }}>↓</span>
      </motion.div>
    </motion.div>
  );
}
