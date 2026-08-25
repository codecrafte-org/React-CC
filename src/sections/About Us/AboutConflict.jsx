import '../../styles/root.css';

const AboutConflict = () => {
  return (
    <section className="about-impact">
      <style>{`
        .about-impact {
          width: 100%;
          padding: 100px 5%;
          background: var(--bg-main);
          box-sizing: border-box;
          position: relative;
        }

        .impact-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        /* LEFT TEXT CONTENT */
        .impact-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .impact-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
        }

        .impact-subtitle {
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--secondary-color);
          margin-bottom: 24px;
          line-height: 1.4;
        }

        .impact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 0;
          margin: 0;
        }

        .impact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .bullet-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-color);
          margin-top: 10px;
          flex-shrink: 0;
        }

        /* RIGHT MEDIA CONTAINER (EXACT IMAGE LOOK) */
        .impact-media-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: var(--glass-shadow);
          border: 1px solid var(--border-color);
        }

        .impact-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .impact-media-wrapper:hover .impact-media-img {
          transform: scale(1.03);
        }

        /* OVERLAY SHADOW FOR TEXT READABILITY */
        .media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.5) 0%, 
            rgba(0, 0, 0, 0.1) 40%, 
            rgba(0, 0, 0, 0.6) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          box-sizing: border-box;
        }

        /* TOP OVERLAY TEXT */
        .media-tag-text {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          max-width: 260px;
          line-height: 1.3;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* BOTTOM PLAY BUTTON */
        .play-button-container {
          align-self: flex-end;
        }

        .play-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-dark);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease, background 0.3s ease;
        }

        .play-btn:hover {
          transform: scale(1.1);
          background: #ffffff;
        }

        .play-icon {
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 14px solid var(--text-dark);
          margin-left: 3px;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 900px) {
          .about-impact {
            padding: 60px 5%;
          }

          .impact-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .impact-media-wrapper {
            height: 300px;
          }

          .media-overlay {
            padding: 24px;
          }
        }
      `}</style>

      <div className="impact-container">
        {/* LEFT TEXT CONTENT */}
        <div className="impact-content">
          <h2 className="impact-title">The Sequel</h2>
          <p className="impact-subtitle">What impact are we building?</p>

          <ul className="impact-list">
            <li className="impact-item">
              <span className="bullet-dot"></span>
              <span>Every digital build contributes to a scalable, future-proof ecosystem.</span>
            </li>
            <li className="impact-item">
              <span className="bullet-dot"></span>
              <span>Empowering modern brands with clean code and high-converting user experience.</span>
            </li>
          </ul>
        </div>

        {/* RIGHT MEDIA CONTAINER */}
        <div className="impact-media-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
            alt="Engineering digital impact" 
            className="impact-media-img"
          />
          <div className="media-overlay">
            <div className="media-tag-text">
              Performance-first, future-friendly code
            </div>

            <div className="play-button-container">
              <button className="play-btn" aria-label="Play Video">
                <div className="play-icon"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConflict;