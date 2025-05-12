import { useState, useEffect } from 'react';

export default function useCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item, .timeline-item');
    
    const handleMouseEnter = () => setCursorVariant('hover');
    const handleMouseLeave = () => setCursorVariant('default');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add text hover effect for text elements
    const textElements = document.querySelectorAll('h1, h2, h3, p');
    
    const handleTextEnter = () => setCursorVariant('text');
    const handleTextLeave = () => setCursorVariant('default');

    textElements.forEach(element => {
      element.addEventListener('mouseenter', handleTextEnter);
      element.addEventListener('mouseleave', handleTextLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      textElements.forEach(element => {
        element.removeEventListener('mouseenter', handleTextEnter);
        element.removeEventListener('mouseleave', handleTextLeave);
      });
    };
  }, []);

  const cursorStyles = {
    default: {
      width: '20px',
      height: '20px',
      border: '2px solid var(--primary)',
      transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease'
    },
    hover: {
      width: '40px',
      height: '40px',
      backgroundColor: 'rgba(100, 255, 218, 0.2)',
      mixBlendMode: 'normal'
    },
    text: {
      width: '5px',
      height: '5px',
      backgroundColor: 'var(--primary)',
      mixBlendMode: 'difference'
    }
  };

  return {
    cursorPos,
    cursorStyle: cursorStyles[cursorVariant]
  };
}
