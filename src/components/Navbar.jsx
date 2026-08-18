import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/fav-ion.webp';

// Custom Minimal Icons
const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
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
          --text-muted: #64748b;
          --text-light: #ffffff;
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

        /* WHEN SCROLLED: Header attaches seamlessly to the top */
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

        /* GLASSMORPHISM DOCK */
        .nb-dock {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 64px;
          padding: 0 12px 0 24px;
          border-radius: 100px;
          
          /* FROSTED GLASS BACKGROUND WITH BLUR */
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.07);
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* SCROLLED DOCK: Border becomes 0, edge-to-edge top bar with continuous blur */
        .nb-header.scrolled .nb-dock {
          border-radius: 0;
          border: none;
          border-bottom: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(25px) saturate(200%);
          -webkit-backdrop-filter: blur(25px) saturate(200%);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
          padding: 0 32px;
          height: 68px;
        }

        /* LOGO */
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
          color: var(--text-dark);
        }

        /* CENTERED NAV LINKS */
        .nb-nav-wrapper {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 4px;
          background: rgba(15, 23, 42, 0.04);
          padding: 4px;
          border-radius: 100px;
          border: 1px solid rgba(15, 23, 42, 0.03);
        }

        .nav-link {
          padding: 8px 20px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-muted);
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--text-dark);
          background: rgba(255, 255, 255, 0.8);
        }

        .nav-link.active {
          color: var(--text-light) !important;
          background: var(--text-dark) !important;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.18);
        }

        /* AUTH BUTTONS */
        .nb-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }

        .btn-login {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-dark);
          text-decoration: none;
          border-radius: 100px;
          transition: all 0.25s ease;
        }

        .btn-login:hover {
          background: rgba(15, 23, 42, 0.05);
          color: var(--primary-color);
        }

        .btn-signup {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 20px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-light);
          background: linear-gradient(135deg, var(--primary-color) 0%, #004ecc 100%);
          text-decoration: none;
          border-radius: 100px;
          box-shadow: 0 6px 18px -2px rgba(0, 102, 255, 0.38);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-signup:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 8px 22px -2px rgba(0, 102, 255, 0.48);
        }

        /* MOBILE MENU TOGGLE */
        .nb-mobile-trigger {
          display: none;
          background: rgba(15, 23, 42, 0.04);
          border: 1px solid rgba(15, 23, 42, 0.05);
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
          background: var(--text-dark);
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
          background: rgba(255, 255, 255, 0.92);
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
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 12px 16px;
          border-radius: 16px;
        }

        .mobile-link.active, .mobile-link:hover {
          color: var(--text-dark);
          background: rgba(15, 23, 42, 0.05);
        }

        .mobile-auth-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
          padding-top: 14px;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .mobile-auth-btn {
          text-align: center;
          padding: 12px;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
        }

        .m-login {
          color: var(--text-dark);
          background: rgba(15, 23, 42, 0.05);
        }

        .m-signup {
          color: var(--text-light);
          background: var(--primary-color);
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

            {/* AUTH ACTIONS */}
            <div className="nb-actions">
              <Link to="/login" className="btn-login">
                <UserIcon /> Log In
              </Link>
              <Link to="/signup" className="btn-signup">
                <span>Sign Up</span>
                <ArrowUpRight />
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
        <div className="mobile-auth-grid">
          <Link to="/login" className="mobile-auth-btn m-login" onClick={closeMenu}>
            Log In
          </Link>
          <Link to="/signup" className="mobile-auth-btn m-signup" onClick={closeMenu}>
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;