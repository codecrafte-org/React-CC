import { useEffect, useRef, useState } from 'react';
import '../../styles/root.css';

import TeamBannerImg from '../../assets/teambanner.webp'; 

const TeamHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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
        .tm-hero-section {
          position: relative;
          width: 100%;
          min-height: 520px;
          background: var(--bg-main, #ffffff);
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 100px 24px 60px 24px;
          box-sizing: border-box;
          overflow: hidden;
          font-family: var(--font-family, system-ui, -apple-system, sans-serif);
        }

        /* IMAGE WRAPPER WITH SEAMLESS BLENDING MASKS */
        .tm-bg-wrapper {
          position: absolute;
          inset: 0;
          margin-top: 80px;
          width: 100%;
          height: 80%;
          z-index: 1;
          pointer-events: none;
        }

        .tm-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          -webkit-mask-image: radial-gradient(ellipse at 50% 40%, black 40%, transparent 95%);
          mask-image: radial-gradient(ellipse at 50% 40%, black 40%, transparent 95%);
        }

        /* TOP OVERLAY */
        .tm-overlay-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, var(--bg-main, #ffffff), transparent);
          z-index: 2;
          pointer-events: none;
        }

        /* REDUCED SUBTLE SIDE SPRAY */
        .tm-overlay-sides {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, var(--bg-main, #ffffff) 0%, transparent 2%, transparent 94%, var(--bg-main, #ffffff) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* TEXT CONTENT AT THE CENTER BOTTOM */
        .tm-content-container {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 800px;
          width: 100%;
          margin: 0 auto;
        }

        /* BADGE */
        .tm-badge {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(241, 245, 249, 0.85);
          border: 1px solid var(--border-light, #e2e8f0);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-muted, #64748b);
          margin-bottom: 16px;
          backdrop-filter: blur(8px);
        }

        /* HEADING WITH GRADIENT FADE */
        .tm-main-heading {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-primary, #0f172a);
          margin: 0;
          text-transform: capitalize;
        }

        .tm-faded-text {
          display: block;
          margin-top: 4px;
          font-weight: 700;
          background: linear-gradient(180deg, var(--text-primary, #0f172a) 0%, var(--text-muted, rgba(100, 116, 139, 0.35)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* SCROLL FADE-UP ANIMATION */
        .tm-fade-element {
          opacity: 0;
          transform: translateY(35px);
          filter: blur(6px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.85s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tm-animate .tm-fade-element {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }

        /* STAGGERED DELAYS */
        .tm-animate .tm-delay-1 { transition-delay: 0.1s; }
        .tm-animate .tm-delay-2 { transition-delay: 0.25s; }

        /* MOBILE RESPONSIVE MODE (IMAGE REMOVED, CLEAN TEXT HERO) */
        @media (max-width: 768px) {
          .tm-hero-section {
            min-height: auto;
            padding: 70px 20px 40px 20px;
            align-items: center;
          }

          /* HIDE BG IMAGE & SPRAY OVERLAYS ON MOBILE */
          .tm-bg-wrapper,
          .tm-overlay-sides,
          .tm-overlay-top {
            display: none;
          }

          .tm-main-heading {
            font-size: 2.2rem;
            line-height: 1.25;
          }

          .tm-badge {
            font-size: 0.8rem;
            padding: 6px 16px;
            margin-bottom: 14px;
          }
        }
      `}</style>

      <section className="tm-hero-section" ref={sectionRef}>
        {/* Background Image (Desktop Only) */}
        <div className="tm-bg-wrapper">
          <img 
            src={TeamBannerImg} 
            alt="Trusted Leaders Team" 
            className="tm-bg-image"
          />
        </div>

        {/* Edge Fade Overlays */}
        <div className="tm-overlay-top" />
        <div className="tm-overlay-sides" />

        {/* Text Content */}
        <div className={`tm-content-container ${isVisible ? 'tm-animate' : ''}`}>
           

           
        </div>
      </section>
    </>
  );
};

export default TeamHero;