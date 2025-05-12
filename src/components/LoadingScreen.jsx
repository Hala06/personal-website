import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ progress }) {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.5, delay: 0.2 }
      }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="logo-text">H</span>
          <div className="logo-glow"></div>
        </motion.div>
        
        <motion.div 
          className="loading-bar-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="loading-bar">
            <motion.div 
              className="loading-progress"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.span 
            className="loading-percentage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
        
        <motion.div 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-line">Building Something</span>
          <span className="text-line">Cool</span>
          <span className="blink">_</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
