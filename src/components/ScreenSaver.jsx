import { useState, useEffect, useRef } from 'react';

// ⚠️ Testing ke liye 3 seconds hai. Production mein 5 * 60 * 1000 kar lena.
const IDLE_TIMEOUT_MS = 5 * 60 * 1000; 

// AESTHETIC MONOCHROME B&W PALETTES
const MONOCHROME_PALETTES = [
  { bg: '#000000', text: '#FFFFFF', accent: '#262626', border: '#FFFFFF' }, // Pitch Black & White
  { bg: '#FFFFFF', text: '#000000', accent: '#E5E5E5', border: '#000000' }, // Pure Inverted Light
  { bg: '#09090B', text: '#FAFAFA', accent: '#18181B', border: '#3F3F46' }, // Dark Slate & Zinc
  { bg: '#171717', text: '#F5F5F5', accent: '#262626', border: '#737373' }, // Matte Charcoal
];

const ScreenSaver = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(new Date());
  const [paletteIdx, setPaletteIdx] = useState(0);

  const idleTimerRef = useRef(null);
  const isActiveRef = useRef(false);

  // Sync ref for smooth event handling
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  // 1. OPTIMIZED IDLE TIMER (NO FREEZE / NO LAG)
  useEffect(() => {
    const resetTimer = () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      // Sirf tab state change karo jab screensaver active ho (Performance fix)
      if (isActiveRef.current) {
        setIsActive(false);
      }

      idleTimerRef.current = setTimeout(() => {
        setIsActive(true);
      }, IDLE_TIMEOUT_MS);
    };

    const events = ['mousemove', 'keydown', 'scroll', 'click', 'touchstart', 'wheel'];
    events.forEach((evt) => window.addEventListener(evt, resetTimer, { passive: true }));

    resetTimer(); // Initial call

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      events.forEach((evt) => window.removeEventListener(evt, resetTimer));
    };
  }, []);

  // 2. LIVE CLOCK & MONOCHROME PALETTE SWITCH
  useEffect(() => {
    if (!isActive) return;

    const clockInterval = setInterval(() => setTime(new Date()), 1000);
    const paletteInterval = setInterval(() => {
      setPaletteIdx((prev) => (prev + 1) % MONOCHROME_PALETTES.length);
    }, 3000);

    return () => {
      clearInterval(clockInterval);
      clearInterval(paletteInterval);
    };
  }, [isActive]);

  const theme = MONOCHROME_PALETTES[paletteIdx];

  // Date Formatting
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

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
        .bw-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999999;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease, background-color 0.6s ease, color 0.6s ease;
          font-family: 'Space Mono', 'Courier New', monospace;
          user-select: none;
          box-sizing: border-box;
          overflow: hidden;
        }

        .bw-overlay.active {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

        /* AESTHETIC MONOCHROME BOXES */
        .bw-box {
          border: 2px solid var(--bw-border);
          box-shadow: 4px 4px 0px var(--bw-border);
          background: var(--bw-bg);
          padding: 14px 24px;
          transition: all 0.6s ease;
        }

        .bw-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .bw-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .bw-main-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: auto 0;
        }

        /* GIANT AESTHETIC TYPOGRAPHY */
        .bw-giant-day {
          font-size: clamp(3.5rem, 13vw, 12rem);
          font-weight: 900;
          line-height: 0.8;
          letter-spacing: -6px;
          text-transform: uppercase;
          margin: 0;
          word-break: break-all;
        }

        .bw-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 20px;
        }

        .bw-time {
          font-size: clamp(2rem, 5.5vw, 5rem);
          font-weight: 900;
          letter-spacing: -2px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bw-accent);
        }

        .bw-date-block {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: clamp(0.9rem, 1.8vw, 1.6rem);
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 1.4;
        }

        /* MINIMAL FOOTER TICKER */
        .bw-ticker {
          overflow: hidden;
          white-space: nowrap;
          border-top: 2px solid var(--bw-border);
          padding-top: 12px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 4px;
        }

        .bw-ticker-track {
          display: inline-block;
          animation: bwMarquee 16s linear infinite;
        }

        @keyframes bwMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .bw-overlay { padding: 16px; }
          .bw-grid { grid-template-columns: 1fr; gap: 12px; }
          .bw-giant-day { letter-spacing: -2px; }
        }
      `}</style>

      <div
        className={`bw-overlay ${isActive ? 'active' : ''}`}
        style={{
          backgroundColor: theme.bg,
          color: theme.text,
          '--bw-bg': theme.bg,
          '--bw-text': theme.text,
          '--bw-accent': theme.accent,
          '--bw-border': theme.border,
        }}
      >
        {/* HEADER BAR */}
        <div className="bw-header">
          <div className="bw-box bw-tag">
            IDLE_MODE // CODECRAFTE
          </div>
          <div className="bw-box bw-tag">
            THEME_0{paletteIdx + 1}
          </div>
        </div>

        {/* MAIN B&W DISPLAY */}
        <div className="bw-main-content">
          <h1 className="bw-giant-day">{dayName}</h1>

          <div className="bw-grid">
            <div className="bw-box bw-time">
              {hours}:{minutes}:{seconds}
            </div>
            <div className="bw-box bw-date-block">
              <div>DATE: {dateNum} {monthName}</div>
              <div style={{ opacity: 0.6 }}>YEAR: {year}</div>
            </div>
          </div>
        </div>

        {/* FOOTER MARQUEE */}
        <div className="bw-ticker">
          <div className="bw-ticker-track">
            [ PRESS ANY KEY OR MOVE CURSOR TO RESUME ] — CODECRAFTE AESTHETIC SCREENSAVER — [ PRESS ANY KEY OR MOVE CURSOR TO RESUME ] — CODECRAFTE AESTHETIC SCREENSAVER —
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenSaver;