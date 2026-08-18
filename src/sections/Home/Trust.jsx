import { useEffect, useRef, useState } from 'react';
import '../../styles/root.css';

const STATS_DATA = [
  {
    id: 1,
    number: "20+",
    title: "Partners",
    description: "We collaborate with global tech partners, agency leaders, and ambitious startups to build scalable digital products."
  },
  {
    id: 2,
    number: "35+",
    title: "Projects",
    description: "High-performance web applications, mobile platforms, and enterprise solutions engineered and delivered on schedule."
  },
  {
    id: 3,
    number: "3",
    title: "Countries",
    description: "Empowering businesses across 3 countries with continuous deployment, modern UI/UX, and reliable technical operations."
  }
];

const Trust = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Isse visible check update hoga taake enter aur leave dono scenarios trigger ho sakein
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 } // 25% section viewport par aane par trigger hoga
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* SECTION BASE */
        .tr-impact-stats-section {
          position: relative;
          width: 100%;
          padding: 160px 24px;
          background: var(--bg-main, #ffffff);
          color: var(--text-primary, #0f172a);
          font-family: var(--font-family, system-ui, -apple-system, sans-serif);
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* SMOKE / VIGNETTE FADED BACKGROUND IMAGE */
        .tr-impact-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .tr-impact-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.12;
          filter: grayscale(100%) contrast(110%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 25%, transparent 75%);
          mask-image: radial-gradient(ellipse at center, black 25%, transparent 75%);
        }

        /* TOP & BOTTOM GRADIENT FADES */
        .tr-impact-fade-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 110px;
          background: linear-gradient(to bottom, var(--bg-main, #ffffff), transparent);
          z-index: 2;
          pointer-events: none;
        }

        .tr-impact-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 110px;
          background: linear-gradient(to top, var(--bg-main, #ffffff), transparent);
          z-index: 2;
          pointer-events: none;
        }

        /* MAIN CONTAINER */
        .tr-impact-container {
          position: relative;
          z-index: 3;
          max-width: 1080px;
          width: 100%;
          margin: 0 auto;
        }

        /* STATS GRID */
        .tr-impact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          align-items: start;
        }

        /* INITIAL STATE FOR FADE UP ANIMATION */
        .tr-impact-card {
          display: flex;
          flex-direction: column;
          text-align: left;
          opacity: 0;
          transform: translateY(40px);
          filter: blur(6px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* TRIGGERED STATE (WHEN IN VIEWPORT) */
        .tr-animate .tr-impact-card {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }

        /* STAGGERED DELAYS FOR CARDS */
        .tr-animate .tr-impact-card:nth-child(1) { transition-delay: 0.15s; }
        .tr-animate .tr-impact-card:nth-child(2) { transition-delay: 0.30s; }
        .tr-animate .tr-impact-card:nth-child(3) { transition-delay: 0.45s; }

        .tr-impact-number {
          font-size: 4.2rem;
          font-weight: 800;
          color: var(--text-primary, #0f172a);
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 24px;
        }

        .tr-impact-divider {
          width: 100%;
          height: 1px;
          background: var(--border-light, #e2e8f0);
          margin-bottom: 20px;
        }

        .tr-impact-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary, #0f172a);
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
        }

        .tr-impact-description {
          font-size: 0.95rem;
          color: var(--text-muted, #475569);
          line-height: 1.6;
          margin: 0;
          font-weight: 400;
        }

        /* RESPONSIVE LAYOUT */
        @media (max-width: 900px) {
          .tr-impact-grid {
            gap: 32px;
          }

          .tr-impact-number {
            font-size: 3.4rem;
          }
        }

        @media (max-width: 768px) {
          .tr-impact-stats-section {
            padding: 80px 20px;
          }

          .tr-impact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .tr-impact-card {
            text-align: center;
            align-items: center;
          }

          .tr-impact-number {
            font-size: 3.6rem;
            margin-bottom: 16px;
          }

          .tr-impact-divider {
            width: 90px;
          }
        }
      `}</style>

      <section className="tr-impact-stats-section" ref={sectionRef}>
        {/* Background Texture with Smoke Fade Effects */}
        <div className="tr-impact-bg-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" 
            alt="Background Texture" 
            className="tr-impact-bg-image"
          />
        </div>
        <div className="tr-impact-fade-top" />
        <div className="tr-impact-fade-bottom" />

        <div className="tr-impact-container">
          <div className={`tr-impact-grid ${isVisible ? 'tr-animate' : ''}`}>
            {STATS_DATA.map((stat) => (
              <div key={stat.id} className="tr-impact-card">
                <div className="tr-impact-number">{stat.number}</div>
                <div className="tr-impact-divider" />
                <h3 className="tr-impact-title">{stat.title}</h3>
                <p className="tr-impact-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust;