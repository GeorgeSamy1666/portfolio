function Skills({ t }) {
  const skillsData = [
    { name: "C++ & C#", icon: "fas fa-code", color: "#f43f5e" },
    { name: "OOP & Data Structures", icon: "fas fa-code", color: "#fb7185" },
    { name: "HTML5 & Semantic Web", icon: "fab fa-html5", color: "#e11d48" },
    { name: "CSS3 & Tailwind CSS", icon: "fab fa-css3-alt", color: "#be123c" },
    { name: "JavaScript (ES6+)", icon: "fab fa-js-square", color: "#f43f5e" },
    { name: "React.js", icon: "fab fa-react", color: "#fb7185" },
    { name: "SQL & Database Management", icon: "fas fa-database", color: "#9f1239" },
    { name: "Git & GitHub Versioning", icon: "fab fa-git-alt", color: "#9f1239" },
    { name: "Responsive UI & Animations", icon: "fas fa-mobile-alt", color: "#e11d48" },
    { name: "Bootstrap & UI Libraries", icon: "fab fa-bootstrap", color: "#be123c" },
    { name: "Freelancing", icon: "fas fa-handshake", color: "#f43f5e" },
    { name: "Problem Solving & Algorithms", icon: "fas fa-brain", color: "#fb7185" },
  ];

  return (
    <section id="skills" className="section-skills">
      <h2 id="skills-title" className="section-title scroll-reveal">{t?.skills?.title || "My Skills"}</h2>

      <div className="skills-container" role="region" aria-labelledby="skills-title">
        <div className="skills-track">
          {[false, true].map((isDuplicate) => (
            <div className="skills-group" key={isDuplicate ? "duplicate" : "original"} aria-hidden={isDuplicate}>
              {skillsData.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  style={{
                    '--skill-index': index,
                    '--skill-color': skill.color,
                  }}
                >
                  <div className="skill-icon-wrapper">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;