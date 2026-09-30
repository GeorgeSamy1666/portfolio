import React, { useRef } from 'react';

function Hero({ t }) {
  const profileRef = useRef(null);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-content hero-enter hero-enter-delay-1">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">{t.hero.name}</h1>
          <h2 className="hero-title">{t.hero.title}</h2>
          <p className="hero-uni">
           {t.hero.uni}
          </p>
          <div className="hero-roles">
            <span>{t.hero.role1}</span> <span className="highlight">{t.hero.role2}</span> <span>{t.hero.role3}</span>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="cta-button">
              <i className="fas fa-paper-plane"></i> {t.hero.contactButton || 'Contact Me'}
            </a>
            <a href="https://github.com/GeorgeSamy1666" target="_blank" rel="noopener noreferrer" className="cta-button cta-button-outline">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>

        <div ref={profileRef} className="hero-image-container hero-enter hero-enter-delay-2">
          <div className="hero-profile-lamp">
            <svg className="svg-hanging-lamp" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lightConeGradHero" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e11d48" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#be123c" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lampMetalGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e11d48" />
                  <stop offset="50%" stopColor="#9f1239" />
                  <stop offset="100%" stopColor="#1c1a26" />
                </linearGradient>
                <radialGradient id="bulbGlowHero" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#fda4af" />
                  <stop offset="100%" stopColor="#e11d48" />
                </radialGradient>
              </defs>
              <line x1="100" y1="0" x2="100" y2="100" stroke="#fda4af" strokeWidth="2.5" strokeDasharray="5 2" opacity="0.9" />
              <circle cx="100" cy="100" r="3.5" fill="#e11d48" />
              <rect x="93" y="104" width="14" height="10" rx="2" fill="#881337" stroke="#e11d48" strokeWidth="1" />
              <path d="M72,130 L128,130 L140,144 C140,144 100,150 60,144 Z" fill="url(#lampMetalGradHero)" stroke="#e11d48" strokeWidth="1.5" />
              <circle cx="100" cy="145" r="9" fill="url(#bulbGlowHero)" />
              <circle cx="100" cy="145" r="14" fill="#e11d48" opacity="0.35" className="bulb-pulse" />
              <polygon points="60,145 140,145 185,310 15,310" fill="url(#lightConeGradHero)" />
            </svg>
          </div>

          <div className="hud-orbit hud-orbit-1"></div>
          <div className="hud-orbit hud-orbit-2"></div>
          <img
            src="george-optimized.jpg"
            alt="George Sami"
            className="hero-image"
            width={320}
            height={320}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="scroll-indicator">
        <button
          type="button"
          className="scroll-button hero-enter hero-enter-delay-3"
          onClick={scrollToNext}
          aria-label="Scroll to next section"
        >
          <div className="scroll-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-down">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;
