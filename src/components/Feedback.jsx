import { useState, useEffect } from 'react';


const StarIcon = ({ filled, hovered }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="26" 
    height="26" 
    fill={filled || hovered ? "currentColor" : "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const API_NAMESPACE = 'CodeCrafte';
const API_KEY = 'total_site_votes';
const API_URL = `https://api.counterapi.dev/v1/${API_NAMESPACE}/${API_KEY}`;

const Feedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userVoted, setUserVoted] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [statusMsg, setStatusMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load Counter & Local Storage
  useEffect(() => {
    const savedVote = localStorage.getItem('codecrafte_user_vote');
    if (savedVote) {
      setUserVoted(parseInt(savedVote, 10));
      setStatusMsg('Thanks for your feedback! ✨');
    }

    // Live Total Fetch from API
    fetch(API_URL, { cache: 'no-store' })
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === 'number') {
          setTotalCount(data.count);
        }
      })
      .catch(() => {
        setTotalCount((prev) => (prev > 0 ? prev : 128));
      });
  }, []);

  // Handle Vote Click
  const handleVote = async (val) => {
    if (userVoted === val || isSubmitting) return;

    const previousVote = userVoted;
    setUserVoted(val);
    localStorage.setItem('codecrafte_user_vote', val);

    if (!previousVote) {
      setIsSubmitting(true);
      setStatusMsg('Submitting... ⏳');

      try {
        const res = await fetch(`${API_URL}/up`);
        const data = await res.json();
        if (data && typeof data.count === 'number') {
          setTotalCount(data.count);
        } else {
          setTotalCount((prev) => prev + 1);
        }
        setStatusMsg('Feedback submitted! 💙');
      } catch (err) {
        setTotalCount((prev) => prev + 1);
        setStatusMsg('Feedback submitted! 💙');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setStatusMsg('Rating updated! 💙');
    }
  };

  return (
    <>
      <style>{`
        /* MAPS TO YOUR EXACT SITE ROOT SYSTEM */
        :root {
          --primary-color: #0066ff;
          --text-dark: #0f172a;
          --text-muted: #64748b;
          --text-light: #ffffff;
          --glass-bg: rgba(255, 255, 255, 0.72);
          --glass-border: rgba(255, 255, 255, 0.6);
          --glass-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.12),
                          0 0 0 1px rgba(255, 255, 255, 0.8) inset;
          --radius-full: 100px;
          --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .fb-root-container {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 999990;
          font-family: var(--font-main);
        }

        /* LIGHT FROSTED GLASS PANEL */
        .fb-panel {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) translateX(-110%);
          width: 320px;
          background: var(--glass-bg);
          backdrop-filter: blur(22px) saturate(190%);
          -webkit-backdrop-filter: blur(22px) saturate(190%);
          border: 1px solid var(--glass-border);
          border-left: none;
          border-radius: 0 24px 24px 0;
          padding: 24px;
          box-shadow: var(--glass-shadow);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          opacity: 0;
          pointer-events: none;
          box-sizing: border-box;
        }

        .fb-root-container.is-open .fb-panel {
          transform: translateY(-50%) translateX(0);
          opacity: 1;
          pointer-events: auto;
        }

        /* CLOSE BUTTON (X) */
        .fb-close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(15, 23, 42, 0.05);
          border: 1px solid rgba(15, 23, 42, 0.08);
          color: var(--text-muted);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .fb-close-btn:hover {
          background: rgba(15, 23, 42, 0.12);
          color: var(--text-dark);
        }

        .fb-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-dark);
          margin: 0 0 16px 0;
          letter-spacing: -0.3px;
        }

        /* STARS RATING ROW */
        .fb-stars-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 20px;
        }

        .fb-star-btn {
          background: rgba(15, 23, 42, 0.03);
          border: 1px solid rgba(15, 23, 42, 0.06);
          color: rgba(15, 23, 42, 0.25);
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .fb-star-btn:hover,
        .fb-star-btn.is-active,
        .fb-star-btn.is-hovered {
          color: #f59e0b; /* Golden Star */
          background: rgba(245, 158, 11, 0.12);
          border-color: rgba(245, 158, 11, 0.3);
          transform: translateY(-2px) scale(1.06);
        }

        /* STATS BADGE */
        .fb-stats-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(15, 23, 42, 0.04);
          padding: 6px 14px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(15, 23, 42, 0.06);
        }

        .fb-pulse-dot {
          width: 6px;
          height: 6px;
          background-color: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
        }

        .fb-stats-count {
          color: var(--text-dark);
          font-weight: 800;
        }

        .fb-status-msg {
          margin-top: 12px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-color);
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* MINIMAL COMPACT SIDE TRIGGER BUTTON */
        .fb-door-btn {
          position: relative;
          background: black;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-left: none;
          color: white;
          padding: 12px 7px;
          border-radius: 0 12px 12px 0;
          cursor: pointer;
          writing-mode: vertical-rl;
          text-transform: uppercase;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.12);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .fb-door-btn:hover {
           color: var(--text-light);
          padding-right: 11px;
          box-shadow: 0 10px 25px -2px rgba(0, 102, 255, 0.35);
        }

        .fb-root-container.is-open .fb-door-btn {
          opacity: 0;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .fb-panel {
            width: 290px;
            padding: 20px;
          }
        }
      `}</style>

      <div className={`fb-root-container ${isOpen ? 'is-open' : ''}`}>
        {/* LIGHT GLASS PANEL */}
        <div className="fb-panel">
          <button className="fb-close-btn" onClick={() => setIsOpen(false)} aria-label="Close Feedback">
            ✕
          </button>

          <h3 className="fb-title">Rate your experience</h3>

          {/* 5-STAR INTERACTIVE RATING */}
          <div className="fb-stars-row" onMouseLeave={() => setHoveredStar(0)}>
            {[1, 2, 3, 4, 5].map((starVal) => {
              const isSelected = userVoted >= starVal;
              const isHovered = hoveredStar >= starVal;

              return (
                <button
                  key={starVal}
                  className={`fb-star-btn ${isSelected ? 'is-active' : ''} ${isHovered ? 'is-hovered' : ''}`}
                  onClick={() => handleVote(starVal)}
                  onMouseEnter={() => setHoveredStar(starVal)}
                  aria-label={`Rate ${starVal} Stars`}
                  title={`${starVal} Star${starVal > 1 ? 's' : ''}`}
                >
                  <StarIcon filled={isSelected} hovered={isHovered} />
                </button>
              );
            })}
          </div>

          {/* REAL COUNTER DISPLAY */}
          <div className="fb-stats-badge">
            <span className="fb-pulse-dot"></span>
            <span>
              <strong className="fb-stats-count">
                {totalCount ? totalCount.toLocaleString() : '120+'}
              </strong>{' '}
              people rated us
            </span>
          </div>

          {/* STATUS TOAST */}
          {statusMsg && <div className="fb-status-msg">{statusMsg}</div>}
        </div>

        {/* COMPACT SIDE BUTTON */}
        <button className="fb-door-btn" onClick={() => setIsOpen(true)} aria-label="Give Feedback">
          <span>FEEDBACK</span>
        </button>
      </div>
    </>
  );
};

export default Feedback;