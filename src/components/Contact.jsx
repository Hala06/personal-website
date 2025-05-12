import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact" className="contact">
      <motion.h2 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>

      <div className="contact-content">
        <div className="contact-text">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:Alshareefhala10@gmail.com">
              <i className="far fa-envelope"></i>
              Alshareefhala10@gmail.com
            </a>
            <a href="www.linkedin.com/in/006hala-alshareef" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              www.linkedin.com/in/006hala-alshareef
            </a>
            <a href="https://github.com/Hala06" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" name="name" required placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" id="email" name="email" required placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea id="message" name="message" required placeholder="Message"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
