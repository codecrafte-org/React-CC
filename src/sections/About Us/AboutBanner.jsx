import { motion } from 'framer-motion';
import '../../styles/root.css';
import { Link } from 'react-router-dom';
const AboutBanner = () => {
  return (
    <section className="about-banner-wrapper">
      <style>{`
        /* MARGIN & SPACING FROM OTHER SECTIONS */
        .about-banner-wrapper {
          width: 100%;
          padding: 60px 5%;
          background: var(--bg-main);
          box-sizing: border-box;
        }

        .banner-card {
          position: relative;
          max-width: 1200px;
          height: 480px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border-color);
        }

        /* FULL BACKGROUND IMAGE */
        .banner-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }

        /* 10% DARK OVERLAY FOR TEXT READABILITY */
        .banner-dark-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.10); /* 10% Black Overlay */
          z-index: 2;
          backdrop-filter: blur(2px); /* Subtle depth effect */
        }

        /* CONTENT CENTERED INSIDE IMAGE ONLY */
        .banner-inner-content {
          position: relative;
          z-index: 3;
          text-align: center;
          max-width: 750px;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .banner-heading {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
        }

        .banner-subtext {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 600px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* ACTION BUTTON */
        .banner-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary-color);
          color: #ffffff;
          padding: 16px 36px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 25px rgba(0, 102, 255, 0.3);
          text-decoration: none;
        }

        .banner-btn:hover {
          background-color: var(--primary-hover);
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(0, 102, 255, 0.4);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .about-banner-wrapper {
            padding: 40px 4%;
          }

          .banner-card {
            height: 400px;
            border-radius: 20px;
          }

          .banner-btn {
            padding: 14px 28px;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="banner-card">
        {/* BACKGROUND IMAGE */}
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
          alt="CodeCrafte Banner" 
          className="banner-bg-img"
        />

        {/* 10% DARK OVERLAY */}
        <div className="banner-dark-overlay"></div>

        {/* CONTENT INSIDE THE IMAGE */}
        <div className="banner-inner-content">
          {/* HEADING (FADE DOWN ANIMATION) */}
          <motion.h2 
            className="banner-heading"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Ready to Build Digital Experiences That Scale?
          </motion.h2>

          {/* SUBTEXT (FADE UP ANIMATION) */}
          <motion.p 
            className="banner-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Join hands with our team to bring high-performance web solutions and modern engineering to your vision.
          </motion.p>

          {/* BUTTON (FADE UP ANIMATION) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
           <Link to='/contact'>
            <button className="banner-btn">
              Start Your Project <span>→</span>
            </button>
           </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;