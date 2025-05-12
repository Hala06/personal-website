import React, { useEffect, useRef } from 'react';

export default function StarCursor() {
  const cursorRef = useRef(null);
  const starsRef = useRef([]);
  const maxStars = 20;

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cursorRef.current) return;
      
      // Create new star
      const star = document.createElement('div');
      star.className = 'cursor-star';
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      document.body.appendChild(star);
      starsRef.current.push(star);

      // Remove old stars if too many
      if (starsRef.current.length > maxStars) {
        document.body.removeChild(starsRef.current[0]);
        starsRef.current.shift();
      }

      // Animate star
      requestAnimationFrame(() => {
        star.style.transform = 'scale(0)';
        star.style.opacity = '0';
      });

      // Remove star after animation
      setTimeout(() => {
        if (document.body.contains(star)) {
          document.body.removeChild(star);
          starsRef.current = starsRef.current.filter(s => s !== star);
        }
      }, 1000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      starsRef.current.forEach(star => {
        if (document.body.contains(star)) {
          document.body.removeChild(star);
        }
      });
      starsRef.current = [];
    };
  }, []);

  return (
    <div ref={cursorRef} className="star-cursor-container" />
  );
}
