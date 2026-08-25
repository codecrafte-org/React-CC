import { useEffect, useState } from 'react';
import '../../styles/root.css';
import Img from '../../assets/hero.png';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
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
          padding-top: 130px;
          overflow: hidden;
          box-sizing: border-box;
        }

        /* FRAMER-STYLE LIQUID WAVE SVG */
        .framer-wave-canvas {
          position: absolute;
          top: -5%;
          left: 0;
          width: 100%;
          height: 550px;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
          animation: heroFadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
          top: 0px;
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

        /* TEXT WRAPPER WITH ENTRANCE FADE */
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

        .agency-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--glass-bg, rgba(255, 255, 255, 0.7));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--border-color, rgba(0, 0, 0, 0.1));
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dark, #0f172a);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
          margin-bottom: 20px;
          
          /* Entrance Animation */
          opacity: 0;
          animation: heroFadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }

        .badge-dot {
          width: 7px;
          height: 7px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px #10b981;
        }

        .hero-headline {
          font-family: var(--font-main);
          font-size: clamp(2.6rem, 5.8vw, 4.8rem);
          font-weight: 800;
          color: var(--text-dark, #0f172a);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;

          /* Entrance Animation */
          opacity: 0;
          animation: heroFadeSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
        }

        .hero-headline-accent {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          color: var(--primary-color, #0066ff);
        }

        .hero-subtext {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          color: var(--text-muted, #64748b);
          line-height: 1.6;
          max-width: 640px;
          margin: 0 auto 32px auto;
          font-weight: 500;

          /* Entrance Animation */
          opacity: 0;
          animation: heroFadeSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;

          /* Entrance Animation */
          opacity: 0;
          animation: heroFadeSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s forwards;
        }

        .btn-agency-primary {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: #ffffff;
          padding: 14px 30px;
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
          box-shadow: 0 15px 35px -5px var(--primary-color, #0066ff);
          background: var(--primary-color, #0066ff);
        }

        .btn-agency-secondary {
          background: rgba(255, 255, 255, 0.7);
          color: var(--text-dark, #0f172a);
          border: 1px solid rgba(0, 0, 0, 0.12);
          padding: 14px 30px;
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
          border-color: #0f172a;
        }

        /* SHOWCASE SECTION WITH ADVANCED IMAGE OVERLAY & FADE */
        .showcase-wrapper {
          width: 100%;
          max-width: 1120px;
          margin-top: 10px;
          will-change: transform, opacity;
        }

        .showcase-card {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 24px 24px 0 0;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        }

        /* BOTTOM FADE GRADIENT OVERLAY FOR CLEAN BLENDING */
        .showcase-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 35%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, var(--bg-main, #ffffff) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .showcase-card img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px 20px 0 0;
          object-fit: cover;
          image-rendering: -webkit-optimize-contrast;
        }

        /* ENTRANCE KEYFRAMES */
        @keyframes heroFadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* MOBILE FIXES: IMAGE JUGAR & ZERO GAP FIX */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 95px;
            min-height: 110vh;
          }

          .hero-sticky-container {
            padding: 0 12px;
          }

          .hero-subtext {
            margin-bottom: 20px;
          }

          .hero-cta-group {
            flex-direction: row;
            gap: 10px;
          }

          .btn-agency-primary, .btn-agency-secondary {
            flex: 1;
            padding: 12px 14px;
            font-size: 0.85rem;
            text-align: center;
            white-space: nowrap;
          }

          /* MOBILE IMAGE JUGAR: Badi kardi, Side se Bleed ho kar Clean Dikhegi */
          .showcase-wrapper {
            width: 118%;
            max-width: none;
            margin-left: -9%;
            margin-right: -9%;
            margin-top: 5px;
          }

          .showcase-card {
            border-radius: 16px 16px 0 0;
          }

          .showcase-card img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            object-position: top center;
            border-radius: 16px 16px 0 0;
          }

          .showcase-card::after {
            height: 45%;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* ANIMATED WAVY GRADIENT CANVAS */}
        <div className="framer-wave-canvas">
          <svg className="fluid-wave-svg" viewBox="0 0 2160 400" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary-color, #0066ff)" stopOpacity="0.35" />
                <stop offset="50%" stopColor="var(--secondary-color, #a855f7)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="70%" stopColor="var(--primary-color, #0066ff)" stopOpacity="0.15" />
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
              <span>Available</span>
            </div>

            <h1 className="hero-headline">
              We craft <span className="hero-headline-accent">extraordinary</span> digital experiences.
            </h1>

            <p className="hero-subtext">
              We are a full-service creative agency building high-converting websites, web apps, and modern brand identities for industry leaders.
            </p>

            <div className="hero-cta-group">
              <Link to='/contact'><button className="btn-agency-primary">Start a Project</button></Link>
              <a href="tel:03059462051"><button className="btn-agency-secondary">Book a Call</button></a>
            </div>
          </div>

          {/* PORTFOLIO SHOWCASE */}
          <div
            className="showcase-wrapper"
            style={{
              opacity: scrollProgress > 0.05 ? Math.min(scrollProgress * 2.5, 1) : 0,
              transform: `translateY(${Math.max(80 - scrollProgress * 120, 0)}px) scale(${0.96 + scrollProgress * 0.04})`,
              transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              pointerEvents: scrollProgress > 0.1 ? 'auto' : 'none',
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