import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/root.css'; 

const AboutHero = () => {
  // State for image swap animation
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 3000); // 3 seconds swap delay
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-hero">
      <style>{`
        .about-hero {
          width: 100%;
          min-height: 85vh;
          background-color: var(--bg-main);
          padding-top: 120px;
          padding-bottom: 80px;
          padding-left: 5%;
          padding-right: 5%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          overflow: hidden;
          font-family: var(--font-main);
        }

        .about-hero-container {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        /* LEFT CONTENT COLUMN */
        .hero-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-title {
          font-family: var(--font-main);
          font-size: clamp(2.3rem, 4.8vw, 4rem);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.15;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }

        .hero-description {
          font-family: var(--font-main);
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 36px;
          max-width: 520px;
        }

        .hero-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary-color);
          color: var(--text-light);
          padding: 16px 32px;
          border-radius: 100px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
          font-family: var(--font-main);
        }

        .hero-cta-btn:hover {
          background-color: var(--primary-hover);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 102, 255, 0.25);
        }

        .btn-arrow {
          font-size: 1.1rem;
        }

        /* RIGHT VISUAL STACK COLUMN WITH SWAP ANIMATION */
        .hero-visual-col {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-stack-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 480px;
        }

        .stack-img {
          position: absolute;
          object-fit: cover;
          border-radius: 24px;
          border: 4px solid var(--text-light);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* POSITIONS STATE 1 */
        .img-main-pos {
          top: 0;
          left: 0;
          width: 82%;
          height: 82%;
          box-shadow: var(--glass-shadow);
          transform: rotate(-3deg);
          z-index: 2;
        }

        .img-offset-pos {
          bottom: 0;
          right: 0;
          width: 65%;
          height: 75%;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
          transform: rotate(2deg);
          z-index: 1;
        }

        /* SWAPPED POSITIONS STATE 2 */
        .img-main-pos.swapped {
          top: 15%;
          left: 30%;
          width: 65%;
          height: 75%;
          z-index: 1;
          transform: rotate(-2deg);
        }

        .img-offset-pos.swapped {
          bottom: 12%;
          right: 25%;
          width: 82%;
          height: 82%;
          z-index: 2;
          transform: rotate(3deg);
        }

        /* Floating Badge Accent */
        .floating-accent-badge {
          position: absolute;
          bottom: 12%;
          left: -10px;
          width: 64px;
          height: 64px;
          background: var(--text-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
          z-index: 3;
          border: 1px solid var(--border-color);
        }

        .badge-inner {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--text-dark);
          color: var(--text-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          font-family: var(--font-main);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 992px) {
          .about-hero-container {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }

          .hero-text-col {
            align-items: center;
          }

          .hero-description {
            max-width: 100%;
          }

          .image-stack-wrapper {
            height: 380px;
            max-width: 380px;
          }
        }

        @media (max-width: 576px) {
          .about-hero {
            padding-top: 100px;
            padding-bottom: 50px;
          }

          .image-stack-wrapper {
            height: 320px;
          }

          .floating-accent-badge {
            left: 0;
            width: 52px;
            height: 52px;
          }

          .badge-inner {
            width: 36px;
            height: 36px;
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className="about-hero-container">
        {/* LEFT CONTENT (FADE DOWN / FADE UP ANIMATIONS) */}
        <div className="hero-text-col">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Crafting Digital Solutions That Scaled Beyond Expectation
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            From individual passion to an ambitious tech agency, we build modern, high-converting digital products tailored to elevate your business presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Link to='/team' style={{ textDecoration: 'none' }}>
              <button className="hero-cta-btn">
                Explore Our Team <span className="btn-arrow">→</span>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT STACKED IMAGES WITH SWAP + FADE-UP ANIMATION */}
        <motion.div 
          className="hero-visual-col"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="image-stack-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              className={`stack-img img-main-pos ${isSwapped ? 'swapped' : ''}`}
            />
            <img 
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" 
              alt="Coding & Design Workflow" 
              className={`stack-img img-offset-pos ${isSwapped ? 'swapped' : ''}`}
            />
            
            <div className="floating-accent-badge">
              <div className="badge-inner">CC</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;