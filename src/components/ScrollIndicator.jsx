import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="scroll-indicator"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span>&darr;</span>
    </motion.div>
  );
}
