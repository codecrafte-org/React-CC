import { useState, useEffect } from 'react';

const AI = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // 5 seconds baad initial tooltip auto-hide ho jayega
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    // Dynamic Botpress Script Loading
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/04/25/18/20260425181340-E2P8GJEL.js';
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      clearTimeout(timer);
      if (document.body.contains(script1)) document.body.removeChild(script1);
      if (document.body.contains(script2)) document.body.removeChild(script2);
    };
  }, []);

  // Botpress Chat Window Trigger
  const handleOpenChat = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: 'toggle' });
    } else if (window.botpress) {
      window.botpress.open();
    } else {
      const bpBtn = document.getElementById('bp-toggle-chat');
      if (bpBtn) bpBtn.click();
    }
  };

  return (
    <>
      <style>{`
        /* DOCK CONTAINER */
        .side-action-dock {
          position: fixed;
          bottom: 32px;
          right: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          z-index: 99999;
          font-family: var(--font-main, system-ui, -apple-system, sans-serif);
        }

        .dock-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        /* ELEGANT TOOLTIP (NO NEON GLOW) */
        .dock-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0f172a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #f8fafc;
          padding: 7px 13px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: -0.2px;
          white-space: nowrap;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          opacity: 0;
          pointer-events: none;
          transform: translateX(8px);
          transition: all 0.25s ease;
        }

        .dock-tooltip::after {
          content: "";
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 5px 0 5px 5px;
          border-style: solid;
          border-color: transparent transparent transparent #0f172a;
        }

        .dock-item:hover .dock-tooltip,
        .dock-tooltip.auto-show {
          opacity: 1;
          transform: translateX(0);
        }

        .tooltip-status-dot {
          width: 6px;
          height: 6px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
        }

        /* CLEAN STATIC BUTTON BASE */
        .dock-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          outline: none;
          text-decoration: none;
          position: relative;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        .dock-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.18);
        }

        .dock-btn:active {
          transform: translateY(0);
        }

        /* AI BUTTON - STATIC MATCHING WEBSITE DARK THEME */
        .ai-dock-btn {
          background: #0f172a;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .ai-dock-btn:hover {
          background: #1e293b;
          border-color: rgba(255, 255, 255, 0.25);
        }

        .ai-icon {
          width: 22px;
          height: 22px;
          transition: transform 0.25s ease;
        }

        .ai-dock-btn:hover .ai-icon {
          transform: scale(1.08);
        }

        /* WHATSAPP BUTTON - CLEAN SOLID DESIGN */
        .whatsapp-dock-btn {
          background: #0f172a;
          color: #25D366;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .whatsapp-dock-btn:hover {
          background: #1e293b;
          border-color: rgba(37, 211, 102, 0.4);
        }

        .whatsapp-icon {
          width: 23px;
          height: 23px;
          transition: transform 0.25s ease;
        }

        .whatsapp-dock-btn:hover .whatsapp-icon {
          transform: scale(1.08);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .side-action-dock {
            bottom: 20px;
            right: 18px;
            gap: 12px;
          }

          .dock-btn {
            width: 46px;
            height: 46px;
          }

          .ai-icon, .whatsapp-icon {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>

      <div className="side-action-dock">
        {/* AI Assistant Button */}
        <div className="dock-item">
          <div className={`dock-tooltip ${showTooltip ? 'auto-show' : ''}`}>
            <span className="tooltip-status-dot"></span>
            <span>Ask AI Assistant ✨</span>
          </div>
          <button
            id="bp-toggle-chat"
            onClick={handleOpenChat}
            className="dock-btn ai-dock-btn"
            aria-label="Ask AI Assistant"
          >
            <svg
              className="ai-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L14.5 8.5L21 11L14.5 13.5L12 20L9.5 13.5L3 11L9.5 8.5L12 2Z"
                fill="currentColor"
              />
              <path
                d="M19 16L20.25 19.25L23.5 20.5L20.25 21.75L19 25L17.75 21.75L14.5 20.5L17.75 19.25L19 16Z"
                fill="currentColor"
                opacity="0.75"
              />
            </svg>
          </button>
        </div>

        {/* WhatsApp Direct Chat Button */}
        <div className="dock-item">
          <div className="dock-tooltip">
            <span>Chat on WhatsApp 💬</span>
          </div>
          <a
            href="https://wa.me/923059462051"
            target="_blank"
            rel="noopener noreferrer"
            className="dock-btn whatsapp-dock-btn"
            aria-label="Contact us on WhatsApp"
          >
            <svg
              className="whatsapp-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.012 2C6.486 2 2 6.479 2 12.006c0 1.91.535 3.694 1.464 5.22L2 22l4.904-1.422a9.98 9.98 0 005.108 1.432c5.526 0 10.012-4.479 10.012-10.004C22.024 6.479 17.538 2 12.012 2zm.006 18.337a8.307 8.307 0 01-4.24-1.164l-.304-.18-3.153.914.928-3.07-.197-.315A8.303 8.303 0 013.67 12.006c0-4.6 3.743-8.343 8.348-8.343 4.603 0 8.346 3.743 8.346 8.343 0 4.602-3.743 8.331-8.346 8.331zm4.577-6.25c-.251-.126-1.488-.734-1.718-.818-.23-.084-.398-.126-.566.126-.168.252-.65.818-.797.986-.147.168-.294.189-.545.063-.251-.126-1.062-.391-2.022-1.247-.747-.666-1.252-1.489-1.399-1.741-.147-.252-.016-.388.11-.513.112-.113.251-.294.377-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.566-1.365-.776-1.868-.204-.492-.413-.424-.566-.432l-.483-.008c-.168 0-.441.063-.672.315-.23.252-.881.861-.881 2.099 0 1.238.902 2.435 1.028 2.603.126.168 1.776 2.712 4.302 3.803.601.26 1.07.415 1.436.531.603.191 1.152.164 1.586.099.484-.072 1.488-.609 1.698-1.197.21-.588.21-1.092.147-1.197-.063-.105-.231-.168-.482-.294z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default AI;