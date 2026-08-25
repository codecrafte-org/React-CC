import { useEffect, useRef, useState } from 'react';
import '../../styles/root.css';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // SectionJab 30% visible hoga tab trigger hoga
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .cc-cta-section {
          position: relative;
          width: 100%;
          padding: 80px 24px;
          background: var(--bg-main, #ffffff);
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          overflow: hidden;
          font-family: var(--font-family, system-ui, -apple-system, sans-serif);
        }

        .cc-cta-banner {
          position: relative;
          max-width: 1100px;
          width: 100%;
          background: var(--bg-surface, #0f172a);
          border-radius: 20px;
          padding: 60px 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          box-sizing: border-box;
          border: 1px solid var(--border-light, rgba(255, 255, 255, 0.1));
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
        }

        /* BANNER INNER EDGE FADE */
        .cc-cta-banner::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            var(--bg-surface, #0f172a) 0%, 
            transparent 35%, 
            transparent 65%, 
            var(--bg-surface, #0f172a) 100%
          );
          pointer-events: none;
          z-index: 2;
          opacity: 0.85;
        }

        .cc-cta-content {
          position: relative;
          z-index: 3;
          max-width: 480px;
        }

        .cc-cta-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary, #ffffff);
          line-height: 1.2;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }

        .cc-cta-subtext {
          font-size: 1rem;
          color: #c3d4ee;
          line-height: 1.6;
          margin: 0;
          font-weight: 400;
        }

        .cc-cta-action-wrapper {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .cc-burst-container {
          position: absolute;
          width: 420px;
          height: 320px;
          pointer-events: none;
          z-index: 1;
        }

        /* INITIAL HIDDEN STATE FOR BURST BARS */
        .cc-burst-bar {
          position: absolute;
          background: var(--accent-color, #3b82f6);
          border-radius: 6px;
          opacity: 0;
          filter: blur(8px) drop-shadow(0 0 12px rgba(59, 130, 246, 0.4));
          transform: scale(0.6) translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* SPECIFIC POSITIONS & ROTATIONS */
        .cc-bar-1 { width: 140px; height: 22px; top: 20%; left: -20px; --rot: -12deg; }
        .cc-bar-2 { width: 160px; height: 26px; top: 48%; left: -40px; --rot: 4deg; }
        .cc-bar-3 { width: 130px; height: 20px; bottom: 18%; left: -10px; --rot: 18deg; }
        .cc-bar-4 { width: 110px; height: 24px; top: 10%; left: 30%; --rot: -45deg; }
        .cc-bar-5 { width: 120px; height: 22px; top: 8%; right: 10%; --rot: -70deg; }
        .cc-bar-6 { width: 100px; height: 20px; right: -20px; top: 35%; --rot: 35deg; }
        .cc-bar-7 { width: 130px; height: 24px; bottom: 12%; right: 20%; --rot: -25deg; }
        .cc-bar-8 { width: 90px; height: 18px; bottom: 8%; left: 40%; --rot: 65deg; }

        /* TRIGGERED STATE (0.5s INITIAL DELAY + STAGGERED ANIMATION) */
        .cc-animate .cc-burst-bar {
          opacity: 0.85;
          filter: blur(0px) drop-shadow(0 0 12px rgba(59, 130, 246, 0.3));
          transform: scale(1) rotate(var(--rot));
        }

        /* STAGGER DELAYS FOR EACH BAR (AFTER 0.5s IN VIEW) */
        .cc-animate .cc-bar-1 { transition-delay: 0.50s; }
        .cc-animate .cc-bar-2 { transition-delay: 0.58s; }
        .cc-animate .cc-bar-3 { transition-delay: 0.66s; }
        .cc-animate .cc-bar-4 { transition-delay: 0.74s; }
        .cc-animate .cc-bar-5 { transition-delay: 0.82s; }
        .cc-animate .cc-bar-6 { transition-delay: 0.90s; }
        .cc-animate .cc-bar-7 { transition-delay: 0.98s; }
        .cc-animate .cc-bar-8 { transition-delay: 1.06s; }

        /* BUTTON IN CENTER OF BURST */
        .cc-cta-btn {
          position: relative;
          z-index: 4;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 36px;
          background: #ffffff;
          color: #0f172a;
          border-radius: 100px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }

        .cc-cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
          background: #f8fafc;
        }

        @media (max-width: 900px) {
          .cc-cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 50px 24px;
            gap: 40px;
          }

          .cc-cta-content { max-width: 100%; }
          .cc-cta-heading { font-size: 2rem; }

          .cc-burst-container {
            width: 300px;
            height: 200px;
          }

          .cc-cta-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <section className="cc-cta-section" ref={sectionRef}>
        <div className="cc-cta-banner">
          
          {/* Left Text Content */}
          <div className="cc-cta-content">
            <h2 className="cc-cta-heading">Like what you see?</h2>
            <p className="cc-cta-subtext">
              Have a project in mind or need custom web solutions? Let's build something scalable together.
            </p>
          </div>

          {/* Right Action + Geometric Burst Overlay */}
          <div className="cc-cta-action-wrapper">
            
            {/* Burst Divs with Auto-scroll Fade & Stagger Delay */}
            <div className={`cc-burst-container ${isVisible ? 'cc-animate' : ''}`}>
              <div className="cc-burst-bar cc-bar-1"></div>
              <div className="cc-burst-bar cc-bar-2"></div>
              <div className="cc-burst-bar cc-bar-3"></div>
              <div className="cc-burst-bar cc-bar-4"></div>
              <div className="cc-burst-bar cc-bar-5"></div>
              <div className="cc-burst-bar cc-bar-6"></div>
              <div className="cc-burst-bar cc-bar-7"></div>
              <div className="cc-burst-bar cc-bar-8"></div>
            </div>

            {/* Main Action Button */}
            <a 
              href="https://wa.me/923286658507" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cc-cta-btn"
            >
              <span>Get Started Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

          </div>

        </div>
      </section>
    </>
  );
};

export default CTA;