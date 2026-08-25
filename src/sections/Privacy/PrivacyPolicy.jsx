import { useEffect } from 'react';
// Imports exactly as requested
import Navbar from '../../components/Navbar';
import AI from '../../components/AI';
import Feedback from '../../components/Feedback';

const PrivacyPolicy = () => {
  // Page top scroll fix on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navbar />

      <style>{`
        /* CLEAN LIGHT THEME */
        .policy-page-wrapper {
          min-height: 100vh;
          background: #ffffff;
          color: #111111;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
        }

        /* HEADER */
        .policy-header {
          padding: 140px 8% 80px;
          background: #000000;
          color: #ffffff;
          text-align: center;
        }

        .policy-header h1.brand-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: -2px;
          color: #ffffff;
        }

        .policy-header h2.page-subtitle {
          font-size: 1.8rem;
          margin-top: 10px;
          opacity: 0.9;
          color: #ffffff;
        }

        .last-update {
          margin-top: 15px;
          font-size: 12px;
          font-weight: 600;
          color: #0a4dd4;
          letter-spacing: 2px;
        }

        /* CONTENT CONTAINER */
        .policy-container {
          max-width: 900px;
          width: 90%;
          margin: -50px auto 100px;
          background: #ffffff;
          padding: 60px 8%;
          border-radius: 40px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
          border: 1px solid #eeeeee;
          flex: 1;
        }

        .policy-section {
          margin-bottom: 45px;
        }

        .policy-section h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: #000000;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .policy-section h2::before {
          content: '';
          width: 12px;
          height: 3px;
          background: #0a4dd4;
          display: inline-block;
        }

        .policy-card {
          background: #f8faff;
          padding: 25px;
          border-radius: 20px;
          border: 1px solid rgba(10, 77, 212, 0.05);
        }

        .policy-card p {
          font-size: 15px;
          color: #555555;
          line-height: 1.6;
        }

        /* TRUST FOOTER */
        .trust-footer {
          margin-top: 80px;
          padding: 40px;
          border-radius: 30px;
          background: #000000;
          color: #ffffff;
          text-align: center;
        }

        .verified-text {
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
          color: #0a4dd4;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: block;
        }

        .ceo-sign {
          font-size: 22px;
          font-weight: 800;
          font-style: italic;
          font-family: serif;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .policy-container {
            margin: -40px 5% 60px;
            padding: 40px 6%;
          }
        }
      `}</style>

      <header className="policy-header">
        <h1 className="brand-title">CodeCrafte</h1>
        <h2 className="page-subtitle">Privacy Policy</h2>
        <p className="last-update">VALID FROM: APRIL 06, 2026</p>
      </header>

      <main className="policy-container">
        <section className="policy-section">
          <h2>Data Collection</h2>
          <div className="policy-card">
            <p>
              We only collect essential information required to initiate and manage your project (such as Name, Email, and Phone Number). We do not engage in unauthorized tracking or background data harvesting.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>Zero Sharing Policy</h2>
          <div className="policy-card">
            <p>
              Your data is entirely secure with us. We never sell, trade, or share your personal details or project specifications with third parties or marketing agencies.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>Project Confidentiality</h2>
          <div className="policy-card">
            <p>
              Your business concepts, source code, and architectural design remain 100% confidential. Access to your project files is strictly limited to authorized team members.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>Security Standards</h2>
          <div className="policy-card">
            <p>
              We utilize industry-standard encryption protocols and secure communication channels to ensure all interactions and data transfers remain fully protected.
            </p>
          </div>
        </section>

        <div className="trust-footer">
          <span className="verified-text">Data Privacy Guaranteed</span>
          <div className="ceo-sign">CodeCrafte Operations</div>
          <p style={{ fontSize: '12px', marginTop: '15px', opacity: 0.5 }}>
            © 2026 All Rights Reserved. Verified by CEO.
          </p>
        </div>
      </main>

      <AI />
      <Feedback />
    </div>
  );
};

export default PrivacyPolicy;