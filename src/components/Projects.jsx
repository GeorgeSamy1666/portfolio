import React from 'react';
import { useNavigate } from 'react-router-dom';

function Projects({ t }) {
  const navigate = useNavigate();

  const projectsData = [
   
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

  const handleViewAllProjects = () => {
    navigate('/all-projects');
  };

  return (
    <section id="projects" className="section-projects">
      <h2 className="section-title scroll-reveal">{t?.projects?.title || "My Projects"}</h2>
      
      <div className="projects-carousel" role="region" aria-label={t?.projects?.title || "My Projects"}>
        <div className="projects-track">
          {[false, true].map((isDuplicate) => (
            <div className="projects-group" key={isDuplicate ? "duplicate" : "original"} aria-hidden={isDuplicate} inert={isDuplicate}>
              {projectsData.map((project) => (
                <div className="project-card" key={project.title}>
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
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        {t?.projects?.demo || "Live Demo"} <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a href={project.code || "https://github.com/GeorgeSamy1666"} target="_blank" rel="noopener noreferrer" className="project-link">
                        {t?.projects?.code || "Code"} <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="view-all-projects-container scroll-reveal scroll-delay-4">
        <button 
          className="cta-button view-all-projects-btn"
          onClick={handleViewAllProjects}
        >
          <span className="view-all-projects-btn-label">
            {t?.projects?.viewAll || "View All Projects"}
          </span>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Projects;