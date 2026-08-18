import { useEffect, useRef, useState } from 'react';
import '../../styles/root.css';

// Image imports
import HMlogo from '../../assets/HM-logo.svg';
import MiniTrendz from '../../assets/mini-trendz.webp';
import Zylowalls from '../../assets/zylo.png';

const CLIENTS = [
  {
    id: 1,
    name: "HM Aesthetics",
    logo: HMlogo,
  },
  {
    id: 2,
    name: "Mini Trendz",
    logo: MiniTrendz,
  },
  {
    id: 3,
    name: "Zylowalls",
    logo: Zylowalls,
  }
];

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // 20% section visible hone par trigger hoga
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
        .cert-trusted-section {
          position: relative;
          width: 100%;
          padding: 120px 24px;
          background: var(--bg-main, #ffffff);
          font-family: var(--font-family, system-ui, -apple-system, sans-serif);
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* TOP & BOTTOM SUBTLE BLENDING FADES */
        .cert-trusted-fade-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to bottom, var(--bg-main, #ffffff), transparent);
          pointer-events: none;
          z-index: 2;
        }

        .cert-trusted-fade-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, var(--bg-main, #ffffff), transparent);
          pointer-events: none;
          z-index: 2;
        }

        .cert-trusted-inner {
          position: relative;
          z-index: 3;
          max-width: 1050px;
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }

        /* HEADINGS */
        .cert-trusted-main-title {
           font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 10px 0;
  text-transform: uppercase;
  color: var(--text-dark, #000000);
        }

        .cert-trusted-sub-title {
          font-size: 1.05rem;
          color: var(--text-muted, #64748b);
          margin: 0 0 56px 0;
          font-weight: 400;
          line-height: 1.5;
        }

        /* LOGOS ROW */
        .cert-trusted-brands-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        /* INCREASED LOGO CONTAINER SIZES */
        .cert-brand-logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 120px;          /* Barha kar 90px kar diya */
          width: 240px;          /* Width fixed clear kar di */
          max-width: 100%;
          padding: 8px;
          box-sizing: border-box;
        }

        .cert-brand-logo-img {
          max-height: 100%;
          max-width: 100%;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%) opacity(0.65);
          transition: filter 0.35s ease, transform 0.35s ease, opacity 0.35s ease;
        }

        .cert-brand-logo-wrapper:hover .cert-brand-logo-img {
          filter: grayscale(0%) opacity(1);
          transform: translateY(-4px) scale(1.06);
        }

        .cert-trusted-line {
          width: 70px;
          height: 2px;
          background: var(--border-light, #e2e8f0);
          margin: 0 auto 40px auto;
          border-radius: 2px;
        }

        .cert-rating-stars {
          color: #f59e0b;
          font-size: 1.25rem;
          letter-spacing: 4px;
          margin-bottom: 20px;
        }

        .cert-testimonial-content {
          font-size: 1.05rem;
          color: var(--text-muted, #334155);
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto 20px auto;
          font-weight: 400;
          font-style: italic;
        }

        .cert-author-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary, #0f172a);
          letter-spacing: 0.5px;
          margin: 0;
        }

        /* --- FADE UP ANIMATIONS WITH INTERSECTION OBSERVER --- */
        .cert-fade-item {
          opacity: 0;
          transform: translateY(35px);
          filter: blur(4px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cert-animate .cert-fade-item {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0px);
        }

        /* STAGGERED DELAYS */
        .cert-animate .cert-delay-1 { transition-delay: 0.1s; }
        .cert-animate .cert-delay-2 { transition-delay: 0.25s; }
        .cert-animate .cert-delay-3 { transition-delay: 0.4s; }
        .cert-animate .cert-delay-4 { transition-delay: 0.55s; }

        /* MOBILE RESPONSIVE TUNING */
        @media (max-width: 768px) {
          .cert-trusted-section {
            padding: 80px 20px;
          }

          .cert-trusted-main-title {
            font-size: 1.75rem;
          }

          .cert-trusted-sub-title {
            font-size: 0.95rem;
            margin-bottom: 40px;
          }

          .cert-trusted-brands-row {
            gap: 28px;
            margin-bottom: 40px;
          }

          .cert-brand-logo-wrapper {
            height: 65px;
            width: 160px;
          }

          .cert-testimonial-content {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <section className="cert-trusted-section" ref={sectionRef}>
        <div className="cert-trusted-fade-top" />
        <div className="cert-trusted-fade-bottom" />

        <div className={`cert-trusted-inner ${isVisible ? 'cert-animate' : ''}`}>
          
          {/* Header */}
          <div className="cert-fade-item cert-delay-1">
            <h2 className="cert-trusted-main-title">Trusted by Industry Leaders</h2>
            <p className="cert-trusted-sub-title">
              Our solutions are trusted by some of the most respected companies in the industry.
            </p>
          </div>

          {/* Image Logos Row */}
          <div className="cert-trusted-brands-row cert-fade-item cert-delay-2">
            {CLIENTS.map((client) => (
              <div key={client.id} className="cert-brand-logo-wrapper">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="cert-brand-logo-img"
                />
              </div>
            ))}
          </div>

          {/* Divider Line */}
          <div className="cert-trusted-line cert-fade-item cert-delay-3" />

          {/* Stars & Review */}
          <div className="cert-fade-item cert-delay-4">
            <div className="cert-rating-stars">★★★★★</div>
            <p className="cert-testimonial-content">
              "Working with this company has been a game-changer for us. Their innovative solutions and dedicated support have significantly boosted our productivity and efficiency. We couldn't be happier with the results."
            </p>
            <p className="cert-author-title">HASSAN MAHMOOD, CEO of HM Aesthetics</p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Certificates;