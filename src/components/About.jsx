import React from 'react';

function About({ t }) {
  return (
    <section id="about" className="section about">
      <h2 className="section-title scroll-reveal">{t.about.title}</h2>
      
      <div className="about-content scroll-reveal scroll-delay-1">
        <p>{t.about.text}</p>
        
        <div className="about-stats-grid reveal-group">
          <div className="stat-card scroll-reveal scroll-delay-1">
            <i className="fas fa-university stat-icon"></i>
            <div className="stat-info">
              <h4>Minia University</h4>
              <p>CS Student - Year 3</p>
            </div>
          </div>
          <div className="stat-card scroll-reveal scroll-delay-2">
            <i className="fas fa-code stat-icon"></i>
            <div className="stat-info">
              <h4>Frontend Tech</h4>
              <p>React.js, ES6+, Tailwind, CSS3</p>
            </div>
          </div>
          <div className="stat-card scroll-reveal scroll-delay-3">
            <i className="fas fa-layer-group stat-icon"></i>
            <div className="stat-info">
              <h4>20+ Projects</h4>
              <p>Live Web Applications & Apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;