import { useEffect, useState } from 'react';
import '../../styles/root.css';
import Img from '../../assets/hero.png';
const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Reload par scroll glitch (top fade ke scroll force) ko rokne ke liye
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const progress = Math.min(Math.max(currentScroll / 300, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        /* MAIN HERO SECTION */
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 140vh;
          background-color: var(--bg-main);
          padding-top: var(--hero-top-spacing, 100px);
          overflow: hidden;
          box-sizing: border-box;
        }

        /* REAL FRAMER-STYLE CONTINUOUS LIQUID WAVE (SVG ANIMATED) */
        .framer-wave-canvas {
          position: absolute;
          top: -5%;
          left: 0;
          width: 100%;
          height: 550px;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .fluid-wave-svg {
          width: 200%;
          height: 100%;
          opacity: 0.85;
          animation: waveTranslate 12s linear infinite;
        }

        .wave-path-1 {
          fill: url(#wave-gradient-1);
          animation: waveMorph1 8s ease-in-out infinite alternate;
        }

        .wave-path-2 {
          fill: url(#wave-gradient-2);
          opacity: 0.6;
          animation: waveMorph2 10s ease-in-out infinite alternate;
        }

        @keyframes waveTranslate {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes waveMorph1 {
          0% { d: path("M0,160 C320,300 420,40 740,180 C1060,320 1120,80 1440,200 C1760,320 1820,80 2160,200 L2160,0 L0,0 Z"); }
          100% { d: path("M0,200 C350,80 450,280 760,120 C1070,260 1150,100 1440,240 C1730,100 1850,260 2160,120 L2160,0 L0,0 Z"); }
        }

        @keyframes waveMorph2 {
          0% { d: path("M0,120 C280,240 400,100 680,220 C960,340 1100,120 1440,220 C1780,320 1800,120 2160,220 L2160,0 L0,0 Z"); }
          100% { d: path("M0,220 C340,100 480,260 780,140 C1080,200 1180,60 1440,160 C1700,260 1880,80 2160,160 L2160,0 L0,0 Z"); }
        }

        /* STICKY CONTAINER */
        .hero-sticky-container {
          position: sticky;
          top: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
          z-index: 2;
        }

        /* TEXT WRAPPER */
        .hero-text-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 820px;
          width: 100%;
          margin: 0 auto;
          will-change: transform, opacity;
          transition: opacity 0.12s linear, transform 0.12s linear;
        }

        /* AGENCY BADGE */
        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-color);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
          box-shadow: var(--glass-shadow);
          margin-bottom: 18px;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-green);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px var(--accent-green);
        }

        /* HEADLINE */
        .hero-headline {
          font-family: var(--font-main);
          font-size: clamp(2.6rem, 5.8vw, 4.8rem);
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .hero-headline-accent {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--primary-color);
        }

        .hero-subtext {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 640px;
          margin: 0 auto 24px auto;
          font-weight: 500;
        }

        /* MODERN HIGH-END AGENCY BUTTONS */
        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 12px;
          width: 100%;
        }

        .btn-agency-primary {
          position: relative;
          background: linear-gradient(135deg, var(--text-dark) 0%, #1e293b 100%);
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px -8px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }

        .btn-agency-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 35px -5px var(--primary-color);
          background: var(--primary-color);
        }

        .btn-agency-secondary {
          background: rgba(255, 255, 255, 0.6);
          color: var(--text-dark);
          border: 1px solid var(--border-color);
          padding: 14px 28px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-agency-secondary:hover {
          background: #ffffff;
          transform: translateY(-3px) scale(1.02);
          border-color: var(--text-dark);
        }

        /* SHOWCASE SECTION WITH BOTTOM GRADIENT BLUR FADE */
        .showcase-wrapper {
          width: 100%;
          max-width: 1120px;
          margin-top: -1px;
          will-change: transform, opacity;
          transition: opacity 0.12s linear, transform 0.12s linear;
        }

        .showcase-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .showcase-card img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px 14px 0 0;
          image-rendering: -webkit-optimize-contrast;
        }

        /* BOTTOM SMOOTH BLUR-FADE OVERLAY */
        .showcase-bottom-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 140px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--bg-main) 90%);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          pointer-events: none;
        }

        /* MOBILE RESPONSIVE (2 BUTTONS IN 1 LINE FIXED) */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 40px;
            min-height: 120vh;
          }
          .hero-cta-group {
            flex-direction: row; /* Mobile par bhi 1 line me rakha hai */
            gap: 10px;
          }
          .btn-agency-primary, .btn-agency-secondary {
            flex: 1;
            padding: 12px 16px;
            font-size: 0.85rem;
            text-align: center;
            white-space: nowrap;
          }
          .framer-wave-canvas {
            height: 380px;
          }
          .showcase-bottom-fade {
            height: 90px;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* FRAMER-GRADE ANIMATED WAVY GRADIENT CANVAS */}
        <div className="framer-wave-canvas">
          <svg className="fluid-wave-svg" viewBox="0 0 2160 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.35" />
                <stop offset="50%" stopColor="var(--secondary-color)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.3" />
                <stop offset="70%" stopColor="var(--primary-color)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path className="wave-path-2" d="M0,120 C280,240 400,100 680,220 C960,340 1100,120 1440,220 C1780,320 1800,120 2160,220 L2160,0 L0,0 Z" />
            <path className="wave-path-1" d="M0,160 C320,300 420,40 740,180 C1060,320 1120,80 1440,200 C1760,320 1820,80 2160,200 L2160,0 L0,0 Z" />
          </svg>
        </div>

        <div className="hero-sticky-container">
          {/* TEXT HEADLINE SECTION */}
          <div
            className="hero-text-wrapper"
            style={{
              opacity: Math.max(1 - scrollProgress * 2.5, 0),
              transform: `translateY(-${scrollProgress * 80}px)`,
              pointerEvents: scrollProgress > 0.35 ? 'none' : 'auto',
            }}
          >
            <div className="agency-badge">
              <span className="badge-dot"></span>
              <span>Accepting New Projects for 2026</span>
            </div>

            <h1 className="hero-headline">
              We craft <span className="hero-headline-accent">extraordinary</span> digital experiences.
            </h1>

            <p className="hero-subtext">
              We are a full-service creative agency building high-converting websites, web apps, and modern brand identities for industry leaders.
            </p>

            <div className="hero-cta-group">
              <button className="btn-agency-primary">Start a Project</button>
              <button className="btn-agency-secondary">Book a Call</button>
            </div>
          </div>

          {/* PORTFOLIO SHOWCASE WITH BLUR BOTTOM ENDING */}
          <div
            className="showcase-wrapper"
            style={{
              opacity: Math.min(scrollProgress * 2.2, 1),
              transform: `translateY(${Math.max(60 - scrollProgress * 100, 0)}px) scale(${0.97 + scrollProgress * 0.03})`,
            }}
          >
            <div className="showcase-card">
              <img
                src={Img}
                alt="Agency Portfolio Showcase"
              />
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;