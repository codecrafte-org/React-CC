import { useRef } from "react";
 
const SparklesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ch-card-icon">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ch-card-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const ContactHero = () => {
  return (
    <>
      <style>{`
        /* Local Component CSS - Using Your Existing Root Vars */
        .ch-hero-wrapper {
          position: relative;
          width: calc(100% - 40px);
          max-width: 1200px;
          min-height: 75vh;
          margin: 40px auto;
          background: var(--glass-bg, rgba(255, 255, 255, 0.4));
          backdrop-filter: blur(30px) saturate(170%);
          -webkit-backdrop-filter: blur(30px) saturate(170%);
          border-radius: var(--radius-lg, 32px);
          border: 1px solid var(--border-subtle, rgba(0, 0, 0, 0.05));
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          padding: 60px 20px;
        }

        .ch-bg-watermark {
          position: absolute;
          font-size: 13vw;
          font-weight: 900;
          color: rgba(0, 0, 0, 0.03);
          letter-spacing: 10px;
          pointer-events: none;
          user-select: none;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          text-transform: uppercase;
          z-index: 1;
        }

        .ch-main-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 580px;
          width: 100%;
        }

        .ch-spots-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-subtle, rgba(0, 0, 0, 0.08));
          padding: 6px 16px;
          border-radius: var(--radius-full, 100px);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary, #000000);
          box-shadow: var(--shadow-subtle, 0 4px 15px rgba(0, 0, 0, 0.02));
          margin-bottom: 24px;
        }

        .ch-spots-badge::before {
          content: '';
          width: 8px;
          height: 8px;
          background: var(--color-success, #00a859);
          border-radius: 50%;
        }

        .ch-main-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          color: var(--text-primary, #000000);
          line-height: 1.15;
          letter-spacing: -1.5px;
          margin-bottom: 20px;
        }

        .ch-sub-text {
          font-size: 15px;
          color: var(--text-body, #444444);
          line-height: 1.6;
          max-width: 460px;
          margin: 0 auto 32px auto;
        }

        .ch-cta-button {
          display: inline-block;
          background: var(--color-secondary, #111111);
          color: var(--text-white, #ffffff);
          text-decoration: none;
          padding: 14px 38px;
          border-radius: var(--radius-full, 100px);
          font-size: 15px;
          font-weight: 600;
          box-shadow: var(--shadow-btn, 0 12px 30px rgba(0, 0, 0, 0.12));
          transition: var(--transition-fast, all 0.3s ease);
        }

        .ch-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover, 0 18px 40px rgba(0, 0, 0, 0.2));
          background: var(--color-primary, #000000);
        }

        .ch-floating-card {
          position: absolute;
          background: var(--glass-card, rgba(255, 255, 255, 0.9));
          border: 1px solid var(--border-subtle, rgba(0, 0, 0, 0.05));
          padding: 20px;
          border-radius: 18px;
          max-width: 240px;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.03);
          z-index: 5;
          text-align: left;
        }

        .ch-card-left { left: 5%; top: 20%; transform: rotate(-3deg); }
        .ch-card-right { right: 5%; bottom: 20%; transform: rotate(3deg); }

        .ch-card-icon {
          color: var(--color-accent, #0070f3);
          margin-bottom: 8px;
        }

        .ch-card-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-secondary, #111111);
          margin-bottom: 4px;
        }

        .ch-card-desc {
          font-size: 12px;
          color: var(--text-muted, #666666);
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .ch-floating-card { position: static; transform: none; max-width: 100%; margin-top: 15px; }
          .ch-hero-wrapper { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="ch-hero-wrapper">
        <div className="ch-bg-watermark">CONNECT</div>

        <div className="ch-floating-card ch-card-left">
          <SparklesIcon />
          <h4 className="ch-card-title">100% Custom Architecture</h4>
          <p className="ch-card-desc">
            No templates used. Built completely from scratch matching your exact brand aesthetics.
          </p>
        </div>

        <div className="ch-main-content">
          <div className="ch-spots-badge">Booking Active</div>
          <h2 className="ch-main-heading">
            Have a Project?<br />Let's Work Together
          </h2>
          <p className="ch-sub-text">
            Catch up for a friendly chat about your startup vision, product ideas, or design requirements. Let's create something premium!
          </p>
          <a href="tel:03059462051" className="ch-cta-button">
            Book a Strategy Call
          </a>
        </div>

        <div className="ch-floating-card ch-card-right">
          <ZapIcon />
          <h4 className="ch-card-title">Buttery Smooth Scaling</h4>
          <p className="ch-card-desc">
            Optimized pixel-perfect layouts responding flawlessly across all viewport sizes.
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactHero;


