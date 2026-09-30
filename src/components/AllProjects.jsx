import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

function AllProjects({ t, theme, toggleTheme }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.all-projects-navbar');
      if (navbar) {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 24);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useScrollReveal([]);

  const allProjectsData = [

         {
      title: "Cook-X Restaurant",
      description: "Nti Project for Cook-X Restaurant, showcasing a responsive and interactive web design with a team work.",
      tech: "HTML5, CSS3, JavaScript ,bootstrap",
      img: "cookxx-optimized.jpg",
      demo: "https://cook-x-nti.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
       {
      title: "Class of 2026",
      description: "Educational portal and resource app tailored for secondary school students.",
      tech: "HTML, CSS, JS, Firebase",
      img: "classof2026-optimized.jpg",
      demo: "https://gclassof2026.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
       {
      title: "Amazon E-Commerce (Static)",
      description: "Responsive e-commerce frontend mockup built with HTML5 and CSS3.",
      tech: "HTML5, CSS3",
      img: "amazon-optimized.jpg",
      demo: "https://amazon1748.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
      {
      title: "Cook-X Restaurant",
      description: "Frontend website for gourmet restaurant featuring detailed menu and modern design.",
      tech: "HTML5, CSS3, JavaScript",
      img: "cookx-optimized.jpg",
      demo: "https://cook-x.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
       {
      title: "New Year 2026 Celebration",
      description: "Festive celebration web experience built with interactive JS animations.",
      tech: "HTML5, CSS3, JavaScript",
      img: "newyear-optimized.jpg",
      demo: "https://new-year2026-five.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
    {    
      title: "CodeZone V2 - Advanced Learning",
      description: "Upgraded educational web application with enhanced user experience and features.",
      tech: "HTML, CSS, JavaScript",
      img: "codezone.png",
      demo: "https://codezonev2.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
    {
      title: "Amazon E-Commerce (React)",
      description: "Full-fledged dynamic React e-commerce application with cart management and sleek layout.",
      tech: "React.js, JavaScript, CSS3",
      img: "commerse-optimized.jpg",
      demo: "https://amazon1666.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
 
    {
      title: "Task Management Application",
      description: "Productivity application built in React for organizing tasks efficiently.",
      tech: "React.js, CSS3",
      img: "doit.png",
      demo: "https://todoliist1666.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
         {
      title: "CodeZone V1 - Education Platform",
      description: "Interactive responsive frontend educational platform with modern UI components.",
      tech: "HTML, CSS, JavaScript",
      img: "image-optimized.jpg",
      demo: "https://codezonev1.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
    {
      title: "Nike Shoe Store",
      description: "Sleek and interactive online footwear showcase store interface built with React.",
      tech: "React.js, CSS3",
      img: "shose-optimized.jpg",
      demo: "https://nike-react-two.vercel.app/",
      code: "https://github.com/GeorgeSamy1666",
    },
  ];

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="all-projects-page" data-theme={theme}>
      {/* Fixed & Fully Styled All Projects Navbar */}
      <nav className="all-projects-navbar">
        <div className="nav-container">
          <button className="control-btn back-btn" onClick={handleBackToHome}>
            <i className="fas fa-arrow-left"></i>
            <span>{t?.projects?.back || "Back to Home"}</span>
          </button>

          <a href="/" className="nav-logo" onClick={(e) => { e.preventDefault(); handleBackToHome(); }}>
            GS<span className="logo-dot">.</span>
          </a>

          <div className="nav-controls">
            <button
              type="button"
              onClick={toggleTheme}
              className="control-btn control-btn-theme mobile-theme-btn"
              aria-label="Toggle theme"
            >
              <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
              <span className="theme-btn-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
      </nav>

      <section className="page-wrapper all-projects-section">
        <div className="section-header">
          <h1 className="section-title scroll-reveal">
            {t?.projects?.allProjectsTitle || "All Projects"}
          </h1>
          <p className="page-subtitle scroll-reveal scroll-delay-1">
            {t?.projects?.allProjectsSubtitle ||
              "Explore all my web development projects and live applications"}
          </p>
        </div>

        <div className="all-projects-grid">
          {allProjectsData.map((project, index) => (
            <div className={`project-card scroll-reveal scroll-delay-${Math.min(index + 1, 6)}`} key={index}>
              <div className="project-img-wrapper">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tech">{project.tech}</span>
                <div className="project-links">
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href={project.code}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllProjects;
