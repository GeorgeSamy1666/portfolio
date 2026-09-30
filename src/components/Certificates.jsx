import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function Certificates({ t }) {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Web Designer",
      issuer: "NTI - National Telecommunication Institute",
      partner: "ITIDA",
      date: "12 June to 06 August 2026",
      image: "certificate.jpg",
      skills: ["HTML5", "CSS3","JavaScript","Bootstrap", "Freelancing", "Web Design"],
      description: "Summer training course in Web Design, certified by NTI and ITIDA.",
    },
  ];

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  useEffect(() => {
    if (!selectedCert) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedCert]);

  return (
    <>
      <section id="certificates" className="section certificates-section">
      <h2 className="section-title scroll-reveal">
        {t?.certificates?.title || "Certificates"}
      </h2>
      <p className="scroll-reveal scroll-delay-1 certificates-subtitle">
        {t?.certificates?.subtitle || "Professional certifications and training programs I've completed."}
      </p>

      <div className="certificates-grid reveal-group">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="certificate-card scroll-reveal scroll-delay-1"
            onClick={() => openModal(cert)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openModal(cert);
              }
            }}
            role="button"
            tabIndex={0}
            aria-haspopup="dialog"
            aria-label={`View ${cert.title} certificate`}
          >
            {/* Glowing border accent */}
            <div className="cert-glow-border"></div>

            {/* Certificate image */}
            <div className="cert-image-wrapper">
              <img
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="cert-image"
                loading="lazy"
              />
              <div className="cert-image-overlay">
                <i className="fas fa-search-plus"></i>
                <span>Open certificate</span>
              </div>
            </div>

            {/* Certificate info */}
            <div className="cert-info">
              <p className="cert-card-eyebrow">
                <i className="fas fa-award"></i>
                Professional credential
              </p>
              <div className="cert-header">
                <div className="cert-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">
                    <i className="fas fa-building"></i> {cert.issuer}
                  </p>
                </div>
              </div>

              {cert.partner && (
                <p className="cert-partner">
                  <i className="fas fa-handshake"></i> Partner: {cert.partner}
                </p>
              )}

              <p className="cert-date">
                <i className="fas fa-calendar-alt"></i> {cert.date}
              </p>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-skills">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="cert-skill-tag">{skill}</span>
                ))}
              </div>

              <div className="cert-card-action" aria-hidden="true">
                <span>View certificate</span>
                <i className="fas fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      </section>

      {selectedCert && createPortal(
        <div className="cert-modal-overlay" onClick={closeModal}>
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`cert-modal-title-${selectedCert.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="cert-modal-close" onClick={closeModal} aria-label="Close certificate preview">
              <i className="fas fa-times"></i>
            </button>
            <div className="cert-modal-media">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Certificate`}
                className="cert-modal-image"
              />
            </div>
            <div className="cert-modal-info">
              <h3 id={`cert-modal-title-${selectedCert.id}`}>{selectedCert.title}</h3>
              <p>{selectedCert.issuer}</p>
              {selectedCert.partner && <p className="cert-modal-partner">In partnership with {selectedCert.partner}</p>}
              <p className="cert-modal-date">{selectedCert.date}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Certificates;
