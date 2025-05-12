import React from 'react';
import { motion } from 'framer-motion';

export default function PageTransition() {
  return (
    <div className="page-transition">
      <motion.div
        className="transition-layer"
        initial={{ scaleY: 1 }}
        animate={{ 
          scaleY: 0,
          transition: {
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1]
          }
        }}
        exit={{ 
          scaleY: 1,
          transition: {
            duration: 0.8,
            ease: [0.645, 0.045, 0.355, 1]
          }
        }}
      >
        <div className="transition-content">
          <svg className="transition-logo" width="50" height="50" viewBox="0 0 100 100">
            <motion.path
              d="M50 5 L95 95 L5 95 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                transition: { duration: 1, ease: "easeInOut" }
              }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
