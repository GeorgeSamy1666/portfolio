import React, { useEffect, useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

const sectionIds = ['hero', 'about', 'projects', 'skills', 'certificates', 'contact'];

function Navbar({ t, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [scrolled, setScrolled] = useState(false);
  const indicatorRef = useRef(null);
  const navMenuRef = useRef(null);

  const navLinks = [
    { href: '#hero', label: t?.nav?.home || 'Home', icon: 'fa-house' },
    { href: '#about', label: t?.nav?.about || 'About', icon: 'fa-user' },
    { href: '#projects', label: t?.nav?.projects || 'Projects', icon: 'fa-folder-open' },
    { href: '#skills', label: t?.nav?.skills || 'Skills', icon: 'fa-code' },
    { href: '#certificates', label: t?.nav?.certificates || 'Certificates', icon: 'fa-award' },
    { href: '#contact', label: t?.nav?.contact || 'Contact', icon: 'fa-paper-plane' },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observedSections = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0 }
    );

    const observeSections = () => {
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && !observedSections.has(section)) {
          observedSections.add(section);
          observer.observe(section);
        }
      });
    };

    observeSections();
    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('portfolio:lazy-section', observeSections);

    return () => {
      window.removeEventListener('portfolio:lazy-section', observeSections);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  // Move indicator pill to active link
  const updateIndicator = useCallback(() => {
    if (!navMenuRef.current || !indicatorRef.current) return;
    const activeLink = navMenuRef.current.querySelector(
      `a[href="${activeSection}"]`
    );
    if (!activeLink) {
      indicatorRef.current.style.opacity = '0';
      return;
    }
    const menuRect = navMenuRef.current.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    indicatorRef.current.style.width = `${linkRect.width}px`;
    indicatorRef.current.style.left = `${linkRect.left - menuRect.left}px`;
    indicatorRef.current.style.opacity = '1';
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator, { passive: true });
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  // Body scroll lock & Escape key
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const mobileOverlay =
    menuOpen &&
    createPortal(
      <button
        type="button"
        className="nav-overlay"
        onClick={closeMenu}
        aria-label="Close menu"
      />,
      document.body
    );

  return (
    <>
      {mobileOverlay}

      <nav
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${menuOpen ? 'navbar-menu-open' : ''}`}
      >
        <div className="nav-container">
          {/* Logo */}
          <a href="#hero" className="nav-logo" onClick={closeMenu}>
            GS<span className="logo-dot">.</span>
          </a>

          {/* Desktop nav pill */}
          <div className="nav-pill-wrapper" ref={navMenuRef}>
            <div className="nav-indicator" ref={indicatorRef} />
            <ul
              className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}
              id="site-navigation"
              aria-hidden={!menuOpen ? undefined : false}
            >
              <li className="nav-menu-header" aria-hidden="true">
                <span className="nav-menu-title">Menu</span>
              </li>

              {navLinks.map((link, index) => (
                <li key={link.href} style={{ '--nav-item-index': index }}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className={`nav-drawer-link ${activeSection === link.href ? 'nav-link-active' : ''}`}
                  >
                    <span className="nav-drawer-icon" aria-hidden="true">
                      <i className={`fas ${link.icon}`} />
                    </span>
                    <span className="nav-drawer-label">{link.label}</span>
                    <i
                      className="fas fa-chevron-right nav-drawer-arrow"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Controls */}
          <div className="nav-controls">
            <button
              type="button"
              onClick={toggleTheme}
              className="control-btn control-btn-theme mobile-theme-btn"
              aria-label="Toggle theme"
              id="theme-toggle-btn"
            >
              <i
                className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}
              />
              <span className="theme-btn-label">
                {theme === 'light' ? 'Dark' : 'Light'}
              </span>
            </button>

            <button
              className={`nav-toggle ${menuOpen ? 'nav-toggle-active' : ''}`}
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-navigation"
              type="button"
            >
              <span className="bar bar-1" />
              <span className="bar bar-2" />
              <span className="bar bar-3" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
