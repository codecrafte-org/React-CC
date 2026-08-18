import { useEffect, useRef } from 'react';

const StoryValidation = () => {
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const ghostRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 850 && triggerRef.current && contentRef.current && ghostRef.current) {
        const trigger = triggerRef.current;
        const content = contentRef.current;
        const ghost = ghostRef.current;

        const scrollPos = window.pageYOffset;
        const offsetTop = trigger.offsetTop;
        const triggerHeight = trigger.offsetHeight;

        if (scrollPos >= offsetTop && scrollPos <= offsetTop + triggerHeight - window.innerHeight) {
          const progress = (scrollPos - offsetTop) / (triggerHeight - window.innerHeight);

          // Move Content Horizontally
          const moveX = progress * (content.offsetWidth - window.innerWidth);
          content.style.transform = `translateX(-${moveX}px)`;

          // Parallax effect for Ghost Text
          ghost.style.transform = `translateX(${moveX * 0.2}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="story-validation" id="horizontal-trigger" ref={triggerRef}>
      <style>{`
        /* STORY VALIDATION SECTION */
        .story-validation {
          height: 350vh; /* Length of scroll */
          background: var(--bg-main, #ffffff);
          position: relative;
          box-sizing: border-box;
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .ghost-container {
          position: absolute;
          width: 100%;
          text-align: center;
          z-index: 1;
          pointer-events: none;
        }

        #ghost-text {
          font-size: 20vw;
          font-weight: 900;
          color: var(--ghost-text-color, rgba(0, 0, 0, 0.04));
          letter-spacing: -10px;
          white-space: nowrap;
          transition: transform 0.1s ease-out;
        }

        .horizontal-scroll {
          display: flex;
          width: 300vw;
          z-index: 2;
          will-change: transform;
        }

        .val-slide {
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 10%;
          box-sizing: border-box;
        }

        .val-card {
          background: var(--bg-card, #ffffff);
          padding: 60px;
          border-radius: 40px;
          border: 1.5px solid var(--accent, #0070f3);
          max-width: 600px;
          box-shadow: var(--card-shadow, 0 40px 100px rgba(0, 0, 0, 0.03));
        }

        .step-tag {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted, #999999);
          letter-spacing: 4px;
          display: block;
          margin-bottom: 10px;
        }

        .val-card h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1;
          color: var(--text-primary, #111111);
          margin: 0;
        }

        .val-card h2 span {
          color: var(--accent, #0070f3);
        }

        .val-card p {
          font-size: 1.1rem;
          color: var(--text-secondary, #555555);
          margin-top: 20px;
          line-height: 1.7;
        }

        /* --- MOBILE RESPONSIVE --- */
        @media (max-width: 850px) {
          .story-validation { 
            height: auto !important; 
          }
          
          .sticky-wrapper { 
            position: relative !important; 
            height: auto !important; 
            overflow: visible;
          }

          .horizontal-scroll { 
            flex-direction: column !important; 
            width: 100% !important; 
            transform: none !important;
          }

          .val-slide { 
            width: 100% !important; 
            height: auto !important; 
            padding: 50px 20px !important;
          }

          .val-card { 
            padding: 30px; 
            border-radius: 25px; 
            width: 100%;
          }

          #ghost-text { 
            font-size: 25vw; 
            transform: none !important;
          }

          .ghost-container { 
            top: 50px; 
          }
        }
      `}</style>

      <div className="sticky-wrapper">
        <div className="ghost-container">
          <h2 id="ghost-text" ref={ghostRef}>
            VALIDATION
          </h2>
        </div>

        <div className="horizontal-scroll" id="scroll-content" ref={contentRef}>
          <div className="val-slide">
            <div className="val-card">
              <span className="step-tag">05 // EUROPE</span>
              <h2>
                The Portugal <br />
                <span>Breakthrough.</span>
              </h2>
              <p>
                When the first client from Portugal signed, it wasn't just a contract. It was the moment CodeCrafte went global. We proved that quality code transcends borders.
              </p>
            </div>
          </div>

          <div className="val-slide">
            <div className="val-card">
              <span className="step-tag">LOCAL GIANTS</span>
              <h2>
                Madni <br />
                <span>Steels.</span>
              </h2>
              <p>
                Digitizing an industrial empire. We built a system that turned heavy steel operations into a seamless digital workflow.
              </p>
            </div>
          </div>

          <div className="val-slide">
            <div className="val-card">
              <span className="step-tag">HEALTH TECH</span>
              <h2>
                Rehab <br />
                <span>Centers.</span>
              </h2>
              <p>
                Building platforms for international healthcare. Technology that doesn't just work, but helps save lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryValidation;