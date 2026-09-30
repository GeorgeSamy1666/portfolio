import React from 'react';

function Contact({ t }) {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title scroll-reveal">{t.contact.title}</h2>
      <p className="scroll-reveal scroll-delay-1 contact-subtitle">{t.contact.text}</p>
      
      <div className="contact-links scroll-reveal scroll-delay-2">
        <a href="mailto:georgesamy1748@gmail.com" className="contact-link email-link" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/GeorgeSamy1666" target="_blank" rel="noopener noreferrer" className="contact-link github-link" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/george-sami1666/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin-link" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.facebook.com/share/14bh5JKH1vV/" target="_blank" rel="noopener noreferrer" className="contact-link facebook-link" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;