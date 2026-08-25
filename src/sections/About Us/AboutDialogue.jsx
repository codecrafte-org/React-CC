import '../../styles/root.css';

const AboutDialogue = () => {
  // Sample agency showcase items with varying aspect ratios
  const galleryItems = [
    {
      id: 1,
      title: "Clean UI Systems",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      size: "small"
    },
    {
      id: 2,
      title: "Interactive Web Apps",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      size: "large"
    },
    {
      id: 3,
      title: "Design Systems",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
      size: "small"
    },
    {
      id: 4,
      title: "Mobile Architecture",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      size: "large"
    }
  ];

  return (
    <section className="about-dialogue">
      <style>{`
        .about-dialogue {
          width: 100%;
          padding: 100px 5%;
          background: var(--bg-main);
          box-sizing: border-box;
          position: relative;
        }

        .dialogue-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
        }

        /* TOP CENTERED HEADER */
        .dialogue-header {
          text-align: center;
          max-width: 650px;
        }

        .dialogue-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          color: var(--text-dark);
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }

        .dialogue-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--secondary-color);
          margin-bottom: 16px;
        }

        .dialogue-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* STAGGERED HORIZONTAL SHOWCASE GRID */
        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          align-items: center; /* Creates the staggered height effect */
        }

        .showcase-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--border-color);
          box-shadow: var(--glass-shadow);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* CHOTA / BADA SIZE VARIATION */
        .showcase-card.small {
          height: 240px;
        }

        .showcase-card.large {
          height: 330px;
        }

        .showcase-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .showcase-card:hover .showcase-img {
          transform: scale(1.06);
        }

        .card-caption-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 60%);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .showcase-card:hover .card-caption-overlay {
          opacity: 1;
        }

        .caption-text {
          color: #ffffff;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
        }

        /* RESPONSIVE DESIGN: 2x2 GRID FOR MOBILE */
        @media (max-width: 900px) {
          .about-dialogue {
            padding: 60px 5%;
          }

          .showcase-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .showcase-card.small,
          .showcase-card.large {
            height: 220px; /* Equalized clean heights for mobile grids */
          }
        }

        @media (max-width: 480px) {
          .showcase-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dialogue-container">
        {/* HEADER */}
        <div className="dialogue-header">
          <h2 className="dialogue-title">The Dialogue</h2>
          <p className="dialogue-subtitle">What do we sound like?</p>
          <p className="dialogue-desc">
            Visual, emotional, and experience-driven engineering built to resonate with modern audiences.
          </p>
        </div>

        {/* STAGGERED IMAGE SHOWCASE */}
        <div className="showcase-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className={`showcase-card ${item.size}`}>
              <img src={item.image} alt={item.title} className="showcase-img" />
              <div className="card-caption-overlay">
                <span className="caption-text">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDialogue;