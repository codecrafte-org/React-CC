import { useState, useEffect } from "react";

// Pure SVG Icons
const StarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ServiceHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Simulate Page/Data Loading State for Skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, );

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 45;
      const moveY = (clientY - window.innerHeight / 2) / 45;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        /* EXACT USER DESIGN SYSTEM ROOT VARIABLES */
        :root {
          /* Brand Colors */
          --primary-color: #0066ff;
          --primary-hover: #0052cc;
          --secondary-color: #7c3aed;
          
          /* Accent Colors */
          --accent-green: #eeeeeebf;
          --accent-green-bg: rgba(16, 185, 129, 0.12);
          --accent-star: #f59e0b;
          
          /* Text Colors */
          --text-dark: #0f172a;
          --text-muted: #64748b;
          --text-light: #faf9f9;
          
          /* Backgrounds & Glassmorphism */
          --bg-main: #f8fafc;
          --bg-surface: #ffffff;
          --bg-skeleton: #e2e8f0;
          --glass-bg: rgba(255, 255, 255, 0.75);
          --border-color: rgba(15, 23, 42, 0.08);
          --glass-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.05);

          /* Typography & Radius */
          --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-serif: 'Playfair Display', Georgia, serif;
          --radius-full: 100px;
        }

        /* PERFECT FULL-SCREEN CENTER CONTAINER */
        .sh-container {
          width: 100%;
          min-height: 100vh;
          background: var(--bg-main);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 8%;
          box-sizing: border-box;
          font-family: var(--font-main);
          overflow: hidden;
          position: relative;
        }

        .sh-content-grid {
          width: 100%;
          max-width: 1140px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }

        /* ENHANCED SMOOTH FADE-IN ANIMATION WITH STAGGER */
        .sh-fade-in {
          opacity: 0;
          animation: smoothFadeUp 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .sh-fade-delay-1 {
          animation-delay: 0.1s;
        }

        .sh-fade-delay-2 {
          animation-delay: 0.25s;
        }

        .sh-fade-delay-3 {
          animation-delay: 0.4s;
        }

        .sh-fade-delay-4 {
          animation-delay: 0.3s;
        }

        @keyframes smoothFadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* SKELETON LOADING ANIMATIONS */
        .sh-skeleton {
          background: linear-gradient(
            90deg,
            var(--bg-skeleton) 25%,
            #f1f5f9 50%,
            var(--bg-skeleton) 75%
          );
          background-size: 200% 100%;
          animation: skeletonShimmer 1.5s infinite;
          border-radius: 8px;
        }

        @keyframes skeletonShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .sk-title-1 { width: 90%; height: 48px; margin-bottom: 12px; }
        .sk-title-2 { width: 70%; height: 48px; margin-bottom: 24px; }
        .sk-desc-1 { width: 100%; height: 18px; margin-bottom: 8px; }
        .sk-desc-2 { width: 80%; height: 18px; margin-bottom: 32px; }
        .sk-button { width: 260px; height: 42px; border-radius: var(--radius-full); }
        .sk-cube { width: 220px; height: 220px; border-radius: 36px; margin: 0 auto; }

        /* REAL CONTENT STYLING */
        .sh-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        .sh-main-title {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin: 0 0 24px 0;
        }

        .sh-description {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 480px;
          margin: 0 0 36px 0;
        }

        .sh-rating-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border: 1.5px solid var(--border-color);
          border-radius: var(--radius-full);
          background: var(--glass-bg);
          backdrop-filter: blur(8px);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dark);
          box-shadow: var(--glass-shadow);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sh-rating-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
        }

        .sh-star-icon {
          color: var(--accent-star);
        }

        /* 3D ISOMETRIC STACK AREA */
        .sh-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sh-isometric-wrapper {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .sh-stack-container {
          position: relative;
          width: 220px;
          height: 220px;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
        }

        .sh-stack-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 36px;
        }

        .sh-layer-bottom {
          background: rgba(15, 23, 42, 0.04);
          transform: translateZ(-35px);
        }

        .sh-layer-middle {
          background: rgba(15, 23, 42, 0.08);
          transform: translateZ(-18px);
        }

        .sh-layer-top {
          background: var(--text-dark);
          transform: translateZ(0px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: -15px 15px 30px rgba(0, 0, 0, 0.15);
        }

        .sh-center-badge {
          width: 70px;
          height: 70px;
          background: var(--accent-green);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotateZ(45deg);
        }

        .sh-sparkle-star {
          width: 22px;
          height: 22px;
          background: var(--text-light);
          clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);
        }

        /* RESPONSIVE STYLING */
        @media (max-width: 968px) {
          .sh-container {
            min-height: 100vh;
            padding: 80px 5%;
          }
          .sh-content-grid { 
            grid-template-columns: 1fr; 
            gap: 40px; 
            text-align: center; 
          }
          .sh-left { 
            align-items: center; 
            text-align: center; 
          }
          .sh-isometric-wrapper { 
            width: 260px; 
            height: 260px; 
          }
          .sh-stack-container { 
            width: 180px; 
            height: 180px; 
          }
        }
      `}</style>

      <section className="sh-container">
        <div className="sh-content-grid">
          {isLoading ? (
            /* SKELETON LOADING STATE */
            <>
              <div className="sh-left">
                <div className="sh-skeleton sk-title-1"></div>
                <div className="sh-skeleton sk-title-2"></div>
                <div className="sh-skeleton sk-desc-1"></div>
                <div className="sh-skeleton sk-desc-2"></div>
                <div className="sh-skeleton sk-button"></div>
              </div>
              <div className="sh-right">
                <div className="sh-skeleton sk-cube"></div>
              </div>
            </>
          ) : (
            /* REAL CONTENT WITH SMOOTH STAGGERED FADE-IN */
            <>
              <div className="sh-left">
                <h1 className="sh-main-title sh-fade-in sh-fade-delay-1">
                  Pick a plan that's <br /> right for you
                </h1>

                <p className="sh-description sh-fade-in sh-fade-delay-2">
                  Pricing plans for businesses at all stages of growth. Codecrafte
                  has a plan that can fit your exact technical requirements.
                </p>

                <div className="sh-rating-badge sh-fade-in sh-fade-delay-3">
                  <span className="sh-star-icon">
                    <StarIcon />
                  </span>
                  <span>Rated 4.97/5 from over 600 reviews.</span>
                </div>
              </div>

              <div className="sh-right sh-fade-in sh-fade-delay-4">
                <div className="sh-isometric-wrapper">
                  <div
                    className="sh-stack-container"
                    style={{
                      transform: `rotateX(${60 + mousePos.y}deg) rotateZ(${-45 + mousePos.x}deg)`
                    }}
                  >
                    <div className="sh-stack-layer sh-layer-bottom"></div>
                    <div className="sh-stack-layer sh-layer-middle"></div>
                    <div className="sh-stack-layer sh-layer-top">
                      <div className="sh-center-badge">
                        <div className="sh-sparkle-star"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceHero;