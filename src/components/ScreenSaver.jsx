import { useState, useEffect, useRef } from 'react';

const IDLE_TIMEOUT_MS = 5 * 60 * 1000; // 5 Minutes Idle Timeout

const ScreenSaver = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(new Date());

  const idleTimerRef = useRef(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  // 1. IDLE TIMER LISTENER
  useEffect(() => {
    const resetTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      if (isActiveRef.current) {
        setIsActive(false);
      }

      idleTimerRef.current = setTimeout(() => {
        setIsActive(true);
      }, IDLE_TIMEOUT_MS);
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart', 'wheel'];
    events.forEach((evt) => window.addEventListener(evt, resetTimer, { passive: true }));

    resetTimer();

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      events.forEach((evt) => window.removeEventListener(evt, resetTimer));
    };
  }, []);

  // 2. LIVE CLOCK
  useEffect(() => {
    if (!isActive) return;
    const clockInterval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(clockInterval);
  }, [isActive]);

  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const dayName = days[time.getDay()];
  const monthName = months[time.getMonth()];
  const dateNum = String(time.getDate()).padStart(2, '0');
  const year = time.getFullYear();

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <>
      <style>{`
        /* FULLSCREEN GLASS OVERLAY WITH ULTRA BACKGROUND BLUR */
        .glass-ss-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          /* Background transparent frost + heavy blur effect */
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.5s ease;
          font-family: var(--font-family, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif);
          user-select: none;
          box-sizing: border-box;
          overflow: hidden;
        }

        .glass-ss-overlay.active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        /* VISIONOS GLASS CONTAINER */
        .glass-ss-dashboard {
          width: 100%;
          max-width: 900px;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 36px;
          padding: 32px;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          display: flex;
          flex-direction: column;
          gap: 20px;
          box-sizing: border-box;
        }

        /* HEADER ROW */
        .glass-ss-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .glass-ss-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0f172a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }

        .glass-ss-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }

        /* MAIN GRID LAYOUT */
        .glass-ss-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 16px;
          width: 100%;
        }

        /* INNER GLASS CARDS */
        .glass-ss-card {
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 24px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
          box-sizing: border-box;
        }

        .glass-ss-clock-card {
          align-items: flex-start;
        }

        .glass-ss-time {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          color: #0f172a;
          font-variant-numeric: tabular-nums;
          margin: 0;
        }

        .glass-ss-seconds {
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 600;
          color: #64748b;
          margin-left: 6px;
        }

        .glass-ss-date-card {
          gap: 6px;
        }

        .glass-ss-day {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .glass-ss-subdate {
          font-size: 0.95rem;
          font-weight: 600;
          color: #64748b;
        }

        /* FOOTER TICKER BANNER */
        .glass-ss-footer-card {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 100px;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          font-weight: 600;
          color: #334155;
        }

        /* MOBILE RESPONSIVE (Strictly Fits in Screen) */
        @media (max-width: 768px) {
          .glass-ss-overlay {
            padding: 16px;
          }

          .glass-ss-dashboard {
            padding: 20px;
            border-radius: 28px;
            gap: 12px;
          }

          .glass-ss-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .glass-ss-card {
            padding: 20px;
            border-radius: 20px;
          }

          .glass-ss-time {
            font-size: 3rem;
          }

          .glass-ss-seconds {
            font-size: 1.2rem;
          }

          .glass-ss-day {
            font-size: 1.1rem;
          }

          .glass-ss-subdate {
            font-size: 0.85rem;
          }

          .glass-ss-footer-card {
            padding: 10px 16px;
            font-size: 0.72rem;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>

      <div className={`glass-ss-overlay ${isActive ? 'active' : ''}`}>
        <div className="glass-ss-dashboard">
          {/* HEADER */}
          <div className="glass-ss-header">
            <div className="glass-ss-pill">
              <span className="glass-ss-dot"></span>
              <span>CODECRAFTE</span>
            </div>
            <div className="glass-ss-pill">
              <span>SYSTEM IDLE</span>
            </div>
          </div>

          {/* MAIN GLASS CARDS DATA GRID */}
          <div className="glass-ss-grid">
            {/* TIME CARD */}
            <div className="glass-ss-card glass-ss-clock-card">
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <h1 className="glass-ss-time">{hours}:{minutes}</h1>
                <span className="glass-ss-seconds">{seconds}</span>
              </div>
            </div>

            {/* DATE CARD */}
            <div className="glass-ss-card glass-ss-date-card">
              <div className="glass-ss-day">{dayName}</div>
              <div className="glass-ss-subdate">{dateNum} {monthName}, {year}</div>
            </div>
          </div>

          {/* FOOTER GLASS PILL */}
          <div className="glass-ss-footer-card">
            <span>✨ System paused</span>
            <span>Move cursor or tap anywhere to resume</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenSaver;