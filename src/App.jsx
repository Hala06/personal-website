import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import './App.css';

export default function Portfolio() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="portfolio">
            <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
            <section className="hero">
                <motion.div className="hero-content" animate={{ opacity: [0, 1], y: [50, 0] }} transition={{ duration: 1 }}>
                    <h1>Hala Alshareef 👋</h1>
                    <p>Computer Security Student | Aspiring Developer & Designer</p>
                    <button>View My Work</button>
                </motion.div>
                <Canvas className="canvas">
                    <ambientLight intensity={0.5} />
                    <OrbitControls />
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#64ffda" />
                    </mesh>
                </Canvas>
            </section>
            <section className="about">
                <h2>About Me</h2>
                <p>
                    I’m Hala Alshareef, a first-year Computer Security student at York University. Passionate about coding, design, and creating innovative projects. Skilled in HTML, CSS, JavaScript, React, and Python.
                </p>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <div className="project-grid">
                    <div className="project-card">
                        <h3>Memory Card Game</h3>
                        <p>Interactive game built with JavaScript, HTML, and CSS.</p>
                        <button>View on GitHub</button>
                    </div>
                    <div className="project-card">
                        <h3>Leap Year Checker</h3>
                        <p>Simple function to determine leap years.</p>
                        <button>View on GitHub</button>
                    </div>
                </div>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <div className="skills-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>React</span>
                    <span>Python</span>
                </div>
            </section>
            <section className="contact">
                <h2>Contact Me</h2>
                <p>Feel free to reach out at <a href="mailto:art.in_my.eyes@example.com">art.in_my.eyes@example.com</a></p>
            </section>
        </div>
    );
}