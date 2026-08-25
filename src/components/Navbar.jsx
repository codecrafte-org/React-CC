import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/fav-ion.webp';

// Minimal Call Icon
const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/story', label: 'Story' },
    { path: '/contact', label: 'Contact' }
  ];

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <style>{`
        :root {
          --primary-color: #0066ff;
          --primary-hover: #0052cc;
          --text-dark: #0f172a;
          --text-muted: #475569;
          --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* HEADER WRAPPER */
        .nb-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 16px 0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nb-header.scrolled {
          padding: 0;
        }

        .nb-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nb-header.scrolled .nb-container {
          max-width: 100%;
          padding: 0;
        }

        /* LIQUID GLOSSY GLASS DOCK (TRANSLUCENT & BLURRED) */
        .nb-dock {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 64px;
          padding: 0 12px 0 24px;
          border-radius: 100px;
          
          /* Semi-transparent Glass Tint */
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(20px) saturate(190%);
          -webkit-backdrop-filter: blur(20px) saturate(190%);
          
          /* Glossy Glass Highlights & Borders */
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 
            inset 0 1px 2px rgba(255, 255, 255, 0.8),
            inset 0 -1px 2px rgba(0, 0, 0, 0.05),
            0 15px 35px -10px rgba(15, 23, 42, 0.12);
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        /* Glossy Reflection Curve (Matches Image Glass Highlight) */
        .nb-dock::before {
          content: '';
          position: absolute;
          top: 0;
          left: 3%;
          width: 25%;
          height: 45%;
           border-radius: 100px 100px 50px 50px;
          pointer-events: none;
        }

        /* SCROLLED DOCK */
        .nb-header.scrolled .nb-dock {
          border-radius: 0;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(25px) saturate(200%);
          -webkit-backdrop-filter: blur(25px) saturate(200%);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          padding: 0 32px;
          height: 68px;
        }

        /* LOGO (BLACK TEXT) */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          z-index: 2;
        }

        .nb-logo-img {
          height: 32px;
          width: auto;
          object-fit: contain;
        }

        .nb-logo-text {
          font-family: var(--font-main);
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.5px;
          color: #0f172a; /* Black Color */
        }

        /* CENTERED NAV LINKS */
        .nb-nav-wrapper {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(15, 23, 42, 0.06);
          padding: 4px;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav-link {
          padding: 8px 20px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #0f172a;
          background: rgba(255, 255, 255, 0.6);
        }

        .nav-link.active {
          color: #ffffff !important;
          background: #0f172a !important;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
        }

        /* BOOK A CALL BUTTON */
        .nb-actions {
          display: flex;
          align-items: center;
          z-index: 2;
        }

        .btn-book-call {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          text-decoration: none;
          border-radius: 100px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.25);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-book-call:hover {
          transform: translateY(-1px) scale(1.02);
          background: linear-gradient(135deg, #0066ff 0%, #004ecc 100%);
          box-shadow: 0 8px 22px rgba(0, 102, 255, 0.35);
        }

        /* MOBILE MENU TOGGLE */
        .nb-mobile-trigger {
          display: none;
          background: rgba(15, 23, 42, 0.08);
          border: 1px solid rgba(15, 23, 42, 0.1);
          cursor: pointer;
          padding: 10px;
          border-radius: 50%;
        }

        .nb-burger-dots {
          display: grid;
          grid-template-columns: repeat(2, 5px);
          gap: 3px;
        }

        .nb-burger-dot {
          width: 5px;
          height: 5px;
          background: #0f172a;
          border-radius: 50%;
        }

        .nb-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.35);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .nb-overlay.visible {
          opacity: 1;
          visibility: visible;
        }

        .nb-mobile-sheet {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%) translateY(120%);
          width: calc(100% - 32px);
          max-width: 420px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 28px;
          padding: 20px;
          z-index: 2000;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nb-mobile-sheet.open {
          transform: translateX(-50%) translateY(0);
        }

        .mobile-link {
          color: #475569;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 12px 16px;
          border-radius: 16px;
        }

        .mobile-link.active, .mobile-link:hover {
          color: #0f172a;
          background: rgba(15, 23, 42, 0.05);
        }

        .mobile-action-wrapper {
          margin-top: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .mobile-btn-call {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 13px;
          border-radius: 100px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          background: #0f172a;
          text-decoration: none;
          box-sizing: border-box;
        }

        @media (max-width: 968px) {
          .nb-nav-wrapper, .nb-actions { display: none; }
          .nb-mobile-trigger { display: block; }
        }
      `}</style>

      {/* MOBILE OVERLAY */}
      <div 
        className={`nb-overlay ${isMobileMenuOpen ? 'visible' : ''}`}
        onClick={closeMenu}
      />

      <header className={`nb-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nb-container">
          <div className="nb-dock">
            {/* LOGO */}
            <Link to="/" className="nb-logo" onClick={closeMenu}>
              <img 
                src={Logo} 
                alt="CodeCrafte" 
                className="nb-logo-img" 
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
              <span className="nb-logo-text">CODECRAFTE</span>
            </Link>

            {/* CENTERED NAV LINKS */}
            <nav className="nb-nav-wrapper">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* BOOK A CALL ACTION */}
            <div className="nb-actions">
              <Link to="/contact" className="btn-book-call">
                <PhoneIcon />
                <span>Book a Call</span>
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="nb-mobile-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="nb-burger-dots">
                <div className="nb-burger-dot" />
                <div className="nb-burger-dot" />
                <div className="nb-burger-dot" />
                <div className="nb-burger-dot" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SHEET MENU */}
      <div className={`nb-mobile-sheet ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`mobile-link ${location.pathname === item.path ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <div className="mobile-action-wrapper">
          <Link to="/contact" className="mobile-btn-call" onClick={closeMenu}>
            <PhoneIcon />
            <span>Book a Call</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;