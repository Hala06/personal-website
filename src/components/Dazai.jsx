import React from 'react';
import { motion } from 'framer-motion';

export default function Dazai() {
  return (
    <section className="dazai-section">
      <motion.img 
        src="/DazaiC.png" 
        alt="Dazai" 
        className="dazai-image"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
    </section>
  );
}
