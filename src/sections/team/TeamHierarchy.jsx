import { useState, useEffect, useRef } from 'react';

// AAPKE TEAM MEMBERS KA DATA (Local images replace kar lein)
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Omaan Jallane",
    role: "CEO / Founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    linkedin: "https://www.linkedin.com/in/omaan-jallane-45b4a331a/"
  },
  {
    id: 2,
    name: "Ashir Muneer",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    linkedin: "https://linkedin.com/"
  },
  {
    id: 3,
    name: "Hassan Mehmood",
    role: "Growth Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    linkedin: "https://www.linkedin.com/in/hassan-mahmood-jallani-933521322/"
  },
  {
    id: 4,
    name: "Moueen Din",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
    linkedin: "https://www.linkedin.com/in/moueen-togarvi-1b717a37b/"
  },
  {
    id: 5,
    name: "Hamid Iqbal",
    role: "Web Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    linkedin: "https://www.linkedin.com/in/hamid-iqbal313500/"
  },
  {
    id: 6,
    name: "Ezn Fatima",
    role: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    linkedin: "https://www.linkedin.com/in/ezn-fatima-389884379/"
  },
  {
    id: 7,
    name: "Manan Aslam",
    role: "Paid Ads & AI Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
    linkedin: "https://www.linkedin.com/in/itsmananaslam/"
  }
];

const TeamHierarchy = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Mid element centered by default
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // AUTO-PLAY LOGIC (Khud ba khud chalne k liye)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TEAM_MEMBERS.length);
    }, 3000); // Har 3 sec baad slide transform hogi

    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  // Curved Perspective 3D Transforms calculate karne ki logic
  const getCardStyle = (index) => {
    const total = TEAM_MEMBERS.length;
    let offset = index - activeIndex;

    // Cyclic infinite wrapping calculate karne k liye
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);
    
    // BEND / ARC STYLING MATHS
    const rotateY = offset * -18; // Curve angle
    const translateX = offset * 230; // Horizontal spacing
    const translateZ = -absOffset * 110; // Arc depth
    const scale = Math.max(1 - absOffset * 0.08, 0.75);
    const opacity = absOffset > 3 ? 0 : 1 - absOffset * 0.15;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex: 100 - absOffset,
      opacity: opacity,
      pointerEvents: absOffset > 3 ? 'none' : 'auto'
    };
  };

  return (
    <>
      <style>{`
        .curved-team-section {
          position: relative;
          width: 100%;
          min-height: 650px;
           display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          overflow: hidden;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* HEADER TEXT */
        .curved-header {
          text-align: center;
          max-width: 750px;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .curved-title {
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 700;
          color: #111111;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .curved-subtitle {
          font-size: 1.05rem;
          color: #666666;
          margin: 0 0 28px 0;
        }

        .curved-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          background: #0d0d0d;
          color: #ffffff;
          border-radius: 100px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: transform 0.25s ease;
        }

        .curved-cta-btn:hover {
          transform: translateY(-2px);
        }

        /* 3D STAGE FOR BEND / ARC CURVE */
        .curved-stage {
          position: relative;
          width: 100%;
          height: 420px;
          perspective: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* TEAM CARD CONTAINER */
        .curved-card {
          position: absolute;
          width: 260px;
          height: 380px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
          background: #ffffff;
        }

        .curved-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* CARD OVERLAY FOR NAME & LINKEDIN */
        .curved-card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 16px 16px 16px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          color: #ffffff;
        }

        .curved-info {
          text-align: left;
        }

        .curved-name {
          font-size: 1rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }

        .curved-role {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 4px 0 0 0;
        }

        /* LINKEDIN ICON */
        .curved-linkedin-icon {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: background 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }

        .curved-linkedin-icon:hover {
          background: #0077b5;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .curved-team-section { min-height: 550px; }
          .curved-card { width: 210px; height: 310px; }
          .curved-stage { height: 340px; }
        }
      `}</style>

      <section className="curved-team-section">
        {/* Top Header */}
        <div className="curved-header">
          <h2 className="curved-title">
            Streamline Your Team, <br /> Supercharge Your Workflow
          </h2>
          
           
        </div>

        {/* 3D Bend/Curved Stage */}
        <div 
          className="curved-stage"
          onMouseEnter={() => setIsPaused(true)}  // Pause auto-play on hover
          onMouseLeave={() => setIsPaused(false)}
        >
          {TEAM_MEMBERS.map((member, index) => {
            const style = getCardStyle(index);
            return (
              <div
                key={member.id}
                className="curved-card"
                style={style}
                onClick={() => handleCardClick(index)}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="curved-card-img" 
                />
                
                {/* Details Overlay */}
                <div className="curved-card-overlay">
                  <div className="curved-info">
                    <h4 className="curved-name">{member.name}</h4>
                    <p className="curved-role">{member.role}</p>
                  </div>

                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="curved-linkedin-icon"
                    onClick={(e) => e.stopPropagation()} // Click on icon won't trigger card center change
                  >
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.49 1.49 0 0 0-1.5 1.5 1.49 1.49 0 0 0 1.5 1.5 1.49 1.49 0 0 0 1.5-1.5 1.49 1.49 0 0 0-1.5-1.5Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default TeamHierarchy;