import  { useEffect, useState } from 'react';
 
const StoryHero = () => {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    // Skeleton hide timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Load Particles.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particle-canvas', {
          particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: '#000000' },
            shape: { type: 'circle' },
            opacity: { value: 0.2, random: true },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#0070f3',
              opacity: 0.15,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'none',
              random: true,
              out_mode: 'out',
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'push' },
            },
            modes: {
              grab: { distance: 250, line_linked: { opacity: 0.4 } },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="story-hero-container">
      {/* INLINE COMPONENT STYLES */}
      <style>{`
        /* STORY SKELETON OVERLAY */
        #story-skeleton-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background-color: var(--bg-main, #ffffff);
          z-index: 99999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.5s ease-out, visibility 0.5s;
          overflow: hidden;
        }

        #story-skeleton-overlay.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        /* SHIMMER ANIMATION */
        @keyframes shimmerWaveStory {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .ss-shimmer {
          background: #f0f2f5;
          background-image: linear-gradient(to right, #f0f2f5 0%, #ffffff 20%, #f0f2f5 40%, #f0f2f5 100%);
          background-repeat: no-repeat;
          background-size: 1000px 100%;
          animation: shimmerWaveStory 1.8s infinite linear forwards;
          border-radius: 6px;
        }

        /* BACKGROUND NODES SKELETON */
        .ss-nodes-container {
          position: absolute;
          width: 100%; height: 100%;
          top: 0; left: 0;
          z-index: -1;
          pointer-events: none;
        }
        .ss-node { position: absolute; width: 60px; height: 60px; border-radius: 50%; opacity: 0.3; }
        .ss-n1 { top: 15%; left: 10%; }
        .ss-n2 { bottom: 30%; left: 15%; }
        .ss-n3 { top: 20%; right: 15%; }
        .ss-n4 { bottom: 40%; right: 10%; }

        /* CENTER CONTENT SKELETON */
        .ss-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 800px;
          padding: 0 20px;
          margin-top: -60px;
        }

        .ss-small-tag { width: 120px; height: 12px; margin-bottom: 30px; border-radius: 20px; }

        .ss-heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 15px;
          margin-bottom: 40px;
        }
        .ss-h1 { width: 65%; height: 70px; border-radius: 12px; }
        .ss-h2 { width: 45%; height: 80px; border-radius: 12px; }

        .ss-para {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 12px;
        }
        .ss-p1 { width: 85%; height: 14px; }
        .ss-p2 { width: 90%; height: 14px; }
        .ss-p3 { width: 60%; height: 14px; }

        /* BOTTOM NAV SKELETON */
        .ss-bottom-nav {
          position: fixed;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          padding: 15px 40px;
          border-radius: 50px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          display: flex;
          gap: 40px;
          border: 1px solid rgba(0,0,0,0.03);
        }

        .ss-nav-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .ss-nav-icon { width: 24px; height: 24px; border-radius: 5px; }
        .ss-nav-text { width: 40px; height: 8px; border-radius: 4px; }

        /* STORY HERO SECTION */
        .story-hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: var(--bg-main, #ffffff);
          color: var(--text, #111111);
          overflow: hidden;
        }

        .story-hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        #particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          animation: fadeInUp 1s ease forwards;
        }

        .pre-title {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 4px;
          color: var(--accent, #0070f3);
          text-transform: uppercase;
          margin-bottom: 15px;
          display: inline-block;
        }

        .main-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 25px;
          color: var(--text, #111111);
        }

        .main-title span {
          color: var(--accent, #0070f3);
        }

        .sub-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary, #666666);
          max-width: 650px;
          margin: 0 auto;
        }

        /* BOTTOM NAVIGATION (App Style) */
        .bottom-nav {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 480px;
          height: 75px;
          background: var(--nav-bg, rgba(255, 255, 255, 0.85));
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          border: 1px solid var(--border-color, rgba(0, 0, 0, 0.08));
          border-radius: 20px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: var(--text, #111111);
          font-size: 0.65rem;
          font-weight: 600;
          position: relative;
          width: 60px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .nav-icon-wrapper {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-bottom: 2px;
        }

        .nav-item:hover {
          color: var(--accent, #0070f3);
        }

        .nav-item:hover .nav-icon-wrapper {
          background: #000000;
          color: #ffffff;
          transform: translateY(-25px) scale(1.2);
          box-shadow: 0 10px 20px rgba(17, 17, 17, 0.3);
        }

        .nav-item span {
          transition: opacity 0.3s, transform 0.3s;
        }

        .nav-item:hover span {
          transform: translateY(5px);
          opacity: 0;
        }

        .profile-nav .nav-icon-wrapper {
          background: rgba(0, 0, 0, 0.05);
        }

        .nav-item.active {
          color: var(--accent, #0070f3);
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .main-title { font-size: 2.4rem; }
          .sub-text { font-size: 0.95rem; }
          .ss-h1 { width: 85%; height: 45px; }
          .ss-h2 { width: 65%; height: 50px; }
          .ss-p1 { width: 95%; }
          .ss-p2 { width: 90%; }
          .ss-p3 { width: 75%; }
          .ss-node { display: none; }
          .ss-bottom-nav {
            width: 90%;
            padding: 15px 20px;
            gap: 15px;
            justify-content: space-between;
            bottom: 20px;
          }
          .bottom-nav {
            width: 100%;
            justify-content: space-around;
            bottom: 0;
            padding: 8px 5px;
            border-radius: 20px 20px 0 0;
          }
        }
      `}</style>

      {/* SKELETON OVERLAY */}
      <div id="story-skeleton-overlay" className={!loading ? 'hidden' : ''}>
        <div className="ss-nodes-container">
          <div className="ss-node ss-n1 ss-shimmer"></div>
          <div className="ss-node ss-n2 ss-shimmer"></div>
          <div className="ss-node ss-n3 ss-shimmer"></div>
          <div className="ss-node ss-n4 ss-shimmer"></div>
        </div>

        <main className="ss-content">
          <div className="ss-small-tag ss-shimmer"></div>
          <div className="ss-heading">
            <div className="ss-h-line ss-h1 ss-shimmer"></div>
            <div className="ss-h-line ss-h2 ss-shimmer"></div>
          </div>
          <div className="ss-para">
            <div className="ss-p-line ss-p1 ss-shimmer"></div>
            <div className="ss-p-line ss-p2 ss-shimmer"></div>
            <div className="ss-p-line ss-p3 ss-shimmer"></div>
          </div>
        </main>

        <div className="ss-bottom-nav">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="ss-nav-item">
              <div className="ss-nav-icon ss-shimmer"></div>
              <div className="ss-nav-text ss-shimmer"></div>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN HERO CONTENT */}
      <section className="story-hero">
        <div id="particle-canvas"></div>

        <div className="hero-content">
          <span className="pre-title">THE GENESIS</span>
          <h1 className="main-title">
            It Started with a <br />
            <span>"What If?"</span>
          </h1>
          <p className="sub-text">
            University was just the background noise. The real frequency was digital. In 2024, CodeCrafte was born—not in a lab, but in a mind obsessed with the future.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default StoryHero;