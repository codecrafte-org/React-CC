import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/root.css'; // Global root variables stylesheet
import Logo from '../assets/fav-ion.webp';

// Logo Image Component (Replace src with your actual logo asset path)
const CodeCrafteLogo = () => (
  <img 
    src={Logo} 
    alt="CodeCrafte Logo" 
    style={{ width: '38px', height: '38px', objectFit: 'contain' }} 
  />
);

// Clean Inline SVGs for Certification Partners
const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  </svg>
);

const AdobeLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
    <path d="M13.966 5.8 23 21h-4.385l-3.328-5.992H9.86l3.056-5.208L13.966 5.8zM1 3h22v2.333H1V3zm0 2.8L10.034 21H5.65L1 12.833V5.8z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const SendIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const TiktokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 2.484 6.338 6.338 0 0 0 .886 8.38 6.338 6.338 0 0 0 8.017-.506 6.32 6.32 0 0 0 1.956-4.562V8.752a8.212 8.212 0 0 0 4.77 1.523V6.83a4.76 4.76 0 0 1-1.000-.144z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

 
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Subscribed successfully!');
      setEmail('');
    }
  };

  return (
    <>
      <style>{`
        .ft-wrapper {
          background: var(--bg-surface, #ffffff);
          border-top: 1px solid var(--border-color, rgba(15, 23, 42, 0.08));
          padding: 64px 80px 32px 80px;
          font-family: var(--font-main, 'Plus Jakarta Sans', sans-serif);
          color: var(--text-dark, #0f172a);
          box-sizing: border-box;
          min-height: 85vh; /* Screen depth cover */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ft-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        /* TOP CTA STRIP TO INCREASE DEPTH */
        .ft-top-banner {
          background: linear-gradient(135deg, var(--primary-color, #0066ff), #0040b3);
          border-radius: var(--radius-lg, 16px);
          padding: 24px 32px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 48px;
          gap: 20px;
        }

        .ft-banner-text h3 {
          margin: 0 0 4px 0;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .ft-banner-text p {
          margin: 0;
          font-size: 0.88rem;
          opacity: 0.9;
        }

        .ft-banner-btn {
          background: #ffffff;
          color: var(--primary-color, #0066ff);
          padding: 10px 20px;
          border-radius: var(--radius-full, 100px);
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .ft-banner-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        /* 5-COLUMN PERFECT BALANCED GRID */
        .ft-main-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 0.8fr 1fr 1.1fr;
          gap: 36px;
          align-items: start;
          margin-bottom: 48px;
        }

        /* BRAND SECTION */
        .ft-brand-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ft-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .ft-logo-text {
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.5px;
          color: var(--text-dark, #0f172a);
        }

        .ft-description {
          font-size: 0.88rem;
          color: var(--text-muted, #64748b);
          line-height: 1.6;
          margin: 0;
        }

        /* IMPROVED MODERN RATING CARD */
        .ft-rating-card {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 12px 16px;
          background: var(--bg-main, #f8fafc);
          border-radius: 12px;
          width: fit-content;
        }

        .ft-rating-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ft-stars {
          display: flex;
          gap: 3px;
          align-items: center;
        }

        .ft-rating-score {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--text-dark, #0f172a);
        }

        .ft-rating-subtext {
          font-size: 0.75rem;
          color: var(--text-muted, #64748b);
          font-weight: 500;
        }

        /* PARTNERS (NO BORDERS) */
        .ft-cert-box {
          margin-top: 4px;
        }

        .ft-cert-heading {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted, #64748b);
          margin-bottom: 10px;
          letter-spacing: 0.6px;
        }

        .ft-cert-flex {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ft-cert-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 23, 42, 0.04);
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dark, #0f172a);
        }

        /* COLUMN TITLES & LINKS */
        .ft-col-title {
          font-size: 0.95rem;
          font-weight: 700;
          margin: 0 0 16px 0;
          color: var(--text-dark, #0f172a);
        }

        .ft-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ft-link-item {
          font-size: 0.88rem;
          color: var(--text-muted, #64748b);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ft-link-item:hover {
          color: var(--primary-color, #0066ff);
        }

        /* REACH US DETAILS & MAP */
        .ft-contact-item {
          font-size: 0.88rem;
          color: var(--text-muted, #64748b);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .ft-contact-icon {
          color: var(--primary-color, #0066ff);
          display: flex;
          flex-shrink: 0;
        }

        .ft-map-container {
          width: 100%;
          height: 110px;
          border-radius: var(--radius-md, 12px);
          overflow: hidden;
          border: 1px solid var(--border-color, rgba(15, 23, 42, 0.08));
          margin-top: 10px;
        }

        /* NEWSLETTER CARD */
        .ft-action-box {
          background: var(--text-dark, #0f172a);
          color: #ffffff;
          border-radius: var(--radius-lg, 16px);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ft-box-tag {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full, 100px);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .ft-box-heading {
          font-size: 1.05rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.35;
          color: #ffffff;
        }

        .ft-email-form {
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: var(--radius-full, 100px);
          padding: 3px 3px 3px 12px;
        }

        .ft-email-input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.82rem;
          color: #0f172a;
          width: 100%;
        }

        .ft-email-btn {
          background: var(--primary-color, #0066ff);
          color: #ffffff;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .ft-email-btn:hover {
          background: var(--primary-hover, #0052cc);
        }

        .ft-social-group {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .ft-social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .ft-social-icon:hover {
          background: var(--primary-color, #0066ff);
        }

        /* EXTRA TECH TAGS STRIP FOR DEPTH */
        .ft-tech-strip {
          border-top: 1px solid var(--border-color, rgba(15, 23, 42, 0.08));
          padding: 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ft-tech-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dark, #0f172a);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .ft-tech-badges {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ft-tech-badge {
          background: var(--bg-main, #f8fafc);
          color: var(--text-muted, #64748b);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* BOTTOM BAR */
        .ft-bottom-bar {
          border-top: 1px solid var(--border-color, rgba(15, 23, 42, 0.08));
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-muted, #64748b);
        }

        .ft-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-main, #f8fafc);
          border: 1px solid var(--border-color, rgba(15, 23, 42, 0.08));
          color: var(--text-dark, #0f172a);
          padding: 6px 14px;
          border-radius: var(--radius-full, 100px);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ft-top-btn:hover {
          background: var(--text-dark, #0f172a);
          color: #ffffff;
        }

        /* RESPONSIVE & MOBILE FIXES */
        @media (max-width: 1024px) {
          .ft-wrapper { padding: 48px 32px 24px 32px; }
          .ft-main-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .ft-top-banner { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 640px) {
          .ft-wrapper { padding: 32px 16px 20px 16px; min-height: auto; }
          .ft-top-banner { padding: 20px; text-align: left; }
          .ft-banner-btn { width: 100%; text-align: center; box-sizing: border-box; }
          
          .ft-main-grid { 
            grid-template-columns: 1fr; 
            gap: 28px; 
          }

          .ft-rating-card { width: 100%; box-sizing: border-box; }
          .ft-cert-flex { flex-wrap: wrap; }
          .ft-cert-badge { flex: 1; justify-content: center; }

          .ft-tech-strip { flex-direction: column; align-items: flex-start; }
          
          .ft-bottom-bar { 
            flex-direction: column-reverse; 
            gap: 16px; 
            align-items: flex-start; 
          }

          .ft-bottom-bar > div {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 12px !important;
            width: 100%;
          }

          .ft-top-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <footer className="ft-wrapper">
        <div className="ft-container">
          
          {/* TOP BANNER FOR EXTENDED HEIGHT & ENGAGEMENT */}
           

          <div className="ft-main-grid">
            
            {/* 1. BRAND -> DESCRIPTION -> MODERN RATING -> CERTIFIED */}
            <div className="ft-brand-col">
              <Link to="/" className="ft-logo">
                <CodeCrafteLogo />
                <span className="ft-logo-text">CODECRAFTE</span>
              </Link>

              <p className="ft-description">
                Crafting robust web & mobile engineering solutions with dynamic architectures and modern digital experiences.
              </p>

              {/* CLEAN MODERN RATING CARD */}
              <div className="ft-rating-card">
                <div className="ft-rating-header">
                  <span className="ft-rating-score">4.9 / 5.0</span>
                  <div className="ft-stars">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                </div>
                <span className="ft-rating-subtext">Based on 600+ verified client reviews</span>
              </div>

              {/* CERTIFIED PARTNERS (NO BORDER) */}
              <div className="ft-cert-box">
                <div className="ft-cert-heading">Official Partners</div>
                <div className="ft-cert-flex">
                  <div className="ft-cert-badge">
                    <GoogleLogo />
                    <span>Google</span>
                  </div>
                  <div className="ft-cert-badge">
                    <AdobeLogo />
                    <span>Adobe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. SERVICES LINKS */}
            <div>
              <h4 className="ft-col-title">Services</h4>
              <ul className="ft-link-list">
                <li><Link to="/services#web-development" className="ft-link-item">Web Development</Link></li>
                <li><Link to="/services#mobile-apps" className="ft-link-item">Mobile App Dev</Link></li>
                <li><Link to="/services#ui-ux" className="ft-link-item">UI/UX Design</Link></li>
                <li><Link to="/services#cloud" className="ft-link-item">Cloud & DevOps</Link></li>
                <li><Link to="/services#ai" className="ft-link-item">AI Solutions</Link></li>
                <li><Link to="/services#cybersecurity" className="ft-link-item">Cybersecurity</Link></li>
              </ul>
            </div>

            {/* 3. LEGAL & COMPANY */}
            <div>
              <h4 className="ft-col-title">Company & Legal</h4>
              <ul className="ft-link-list">
                <li><Link to="/about" className="ft-link-item">About Us</Link></li>
                <li><Link to="/careers" className="ft-link-item">Careers</Link></li>
                <li><Link to="/terms" className="ft-link-item">Term & Condition</Link></li>
                <li><Link to="/privacy" className="ft-link-item">Privacy Policy</Link></li>
                <li><Link to="/refund" className="ft-link-item">Refund Policy</Link></li>
                <li><Link to="/contract" className="ft-link-item">Contract</Link></li>
              </ul>
            </div>

            {/* 4. REACH US & MAP */}
            <div>
              <h4 className="ft-col-title">Reach Us</h4>
              
              <div className="ft-contact-item">
                <span className="ft-contact-icon"><MailIcon /></span>
                <span>hello@codecrafte.site</span>
              </div>

              <div className="ft-contact-item">
                <span className="ft-contact-icon"><PhoneIcon /></span>
                <span>+92 3059462051</span>
              </div>

              <div className="ft-contact-item">
                <span className="ft-contact-icon"><MapPinIcon /></span>
                <span>Lahore, Punjab</span>
              </div>

              <div className="ft-contact-item">
                <span className="ft-contact-icon"><ClockIcon /></span>
                <span>Mon - Fri: 9:00 - 18:00 PKT</span>
              </div>

              <div className="ft-map-container">
                <iframe
                  title="CodeCrafte Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13735.61765053272!2d73.2644265!3d29.9950785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914f7762692257f%3A0x867332219b168972!2slahore%2C%20Punjab!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9)' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* 5. NEWSLETTER CARD */}
            <div className="ft-action-box">
              <span className="ft-box-tag">Newsletter</span>
              <h3 className="ft-box-heading">Stay connected with CodeCrafte</h3>

              <form onSubmit={handleSubscribe} className="ft-email-form">
                <input 
                  type="email" 
                  placeholder="Email address..." 
                  className="ft-email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="ft-email-btn" aria-label="Submit">
                  <SendIcon />
                </button>
              </form>

               <div className="ft-social-group">
  <a href="https://www.linkedin.com/in/c-crafte-3941b43b3" target="_blank" rel="noreferrer" className="ft-social-icon" aria-label="LinkedIn">
    <LinkedinIcon />
  </a>
  <a href="https://www.instagram.com/codecrafte.pk/" target="_blank" rel="noreferrer" className="ft-social-icon" aria-label="Instagram">
    <InstagramIcon />
  </a>
  <a href="https://www.tiktok.com/@codecrafte.pk" target="_blank" rel="noreferrer" className="ft-social-icon" aria-label="TikTok">
    <TiktokIcon />
  </a>
  <a href="https://web.facebook.com/people/Code-Crafte/61581311813987/" target="_blank" rel="noreferrer" className="ft-social-icon" aria-label="Facebook">
    <FacebookIcon />
  </a>
</div>
            </div>

          </div>

          {/* TECH STACK STRIP */}
           

          {/* BOTTOM BAR */}
          <div className="ft-bottom-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button onClick={scrollToTop} className="ft-top-btn">
                <ArrowUpIcon />
                <span>Go to top</span>
              </button>
              <span>© 2026 CodeCrafte. All rights reserved.</span>
            </div>

            <span>Language: English (US)</span>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;