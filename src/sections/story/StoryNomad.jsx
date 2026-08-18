 import { useEffect, useRef, useState } from 'react';

const StoryNomad = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`story-nomad ${isActive ? 'active' : ''}`}
    >
      <style>{`
        /* STORY NOMAD SECTION */
        .story-nomad {
          padding: 120px 5%;
          background: var(--bg-secondary, #fafafa);
          min-height: 80vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          box-sizing: border-box;
        }

        .nomad-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
        }

        .nomad-text { 
          position: relative; 
          z-index: 2; 
        }
        
        .step-tag { 
          font-size: 11px; 
          font-weight: 700; 
          color: var(--text-muted, #999999); 
          letter-spacing: 4px; 
          display: block;
        }

        .nomad-title { 
          font-size: 4rem; 
          font-weight: 800; 
          margin: 20px 0; 
          line-height: 1; 
          color: var(--text-primary, #111111);
        }

        .nomad-title span { 
          color: var(--accent, #0070f3); 
        }

        .nomad-p { 
          color: var(--text-secondary, #555555); 
          line-height: 1.8; 
          margin-bottom: 20px; 
          font-size: 1.1rem; 
        }

        .nomad-p strong {
          color: var(--text-primary, #111111);
        }

        /* Map Visual */
        .nomad-visual {
          position: relative;
          padding: 40px;
          background: var(--bg-card, #ffffff);
          border-radius: 40px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.03);
          border: 1px solid var(--border-color, rgba(0, 0, 0, 0.04));
        }

        .connection-map { 
          width: 100%; 
          overflow: visible; 
        }
        
        .dot { 
          fill: var(--accent, #0070f3); 
          filter: drop-shadow(0 0 8px rgba(0, 112, 243, 0.5)); 
        }

        .dot.pk { 
          fill: var(--text-primary, #000000); 
          r: 8; 
        }

        .path-line {
          fill: none;
          stroke: var(--accent, #0070f3);
          stroke-width: 2;
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          transition: stroke-dashoffset 2s ease-in-out;
          opacity: 0.4;
        }

        /* Animation Trigger on Scroll */
        .story-nomad.active .path-line {
          stroke-dashoffset: 0;
        }

        .location-labels { 
          position: relative; 
        }

        .label { 
          position: absolute; 
          font-size: 0.7rem; 
          font-weight: 800; 
          text-transform: uppercase; 
          color: var(--text-muted, #aaaaaa); 
        }

        .l-eg { top: -170px; left: 15%; }
        .l-pk { top: -110px; left: 50%; color: var(--text-primary, #000000); }
        .l-in { top: -140px; left: 80%; }

        /* Mobile Responsiveness */
        @media (max-width: 900px) {
          .story-nomad {
            padding: 80px 5%;
          }

          .nomad-container { 
            grid-template-columns: 1fr; 
            gap: 50px; 
            text-align: center; 
          }

          .nomad-title { 
            font-size: 2.8rem; 
          }

          .l-eg, .l-pk, .l-in { 
            top: -130px; 
          }
        }
      `}</style>

      <div className="nomad-container">
        <div className="nomad-text">
          <span className="step-tag">02 // THE JOURNEY</span>
          <h2 className="nomad-title">
            Beyond <span>Borders.</span>
          </h2>
          <p className="nomad-p">
            Before the agency, came the exposure. From the tech hubs of{' '}
            <strong>Turkey</strong> to the rising digital landscape of{' '}
            <strong>Saudia</strong>, I spent my early years as an intern, absorbing
            global standards and cross-cultural workflows.
          </p>
          <p className="nomad-p">
            This wasn't just about learning to code; it was about learning how the
            world builds.
          </p>
        </div>

        <div className="nomad-visual">
          <svg viewBox="0 0 500 300" className="connection-map">
            <circle cx="250" cy="200" r="6" className="dot pk" />
            <circle cx="100" cy="150" r="4" className="dot eg" />
            <circle cx="400" cy="180" r="4" className="dot in" />
            <path d="M250,200 Q150,100 100,150" className="path-line line-1" />
            <path d="M250,200 Q325,150 400,180" className="path-line line-2" />
          </svg>

          <div className="location-labels">
            <span className="label l-eg">Turkey</span>
            <span className="label l-pk">Pakistan</span>
            <span className="label l-in">Saudia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryNomad;