import { useEffect } from 'react';
// Components import (Paths match your folder structure)
import Navbar from '../../components/Navbar';
import AI from '../../components/AI';
import Feedback from '../../components/Feedback';

const RefundPolicy = () => {
  // Page top scroll fix on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page-wrapper">
      <Navbar />

      <style>{`
        /* COLOR VARIABLES & BASE STYLING */
        :root {
          --primary: #0a4dd4;
          --danger: #e11d48;
          --black: #000000;
          --white: #ffffff;
          --text: #111111;
        }

        .policy-page-wrapper {
          min-height: 100vh;
          background: var(--white);
          color: var(--text);
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }

        /* HEADER SECTION */
        .policy-header {
          padding: 140px 8% 80px;
          background: var(--black);
          color: var(--white);
          text-align: center;
        }

        .policy-header h1.brand-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: -2px;
          color: var(--white);
        }

        .policy-header h2.page-subtitle {
          font-size: 1.8rem;
          margin-top: 10px;
          opacity: 0.9;
          color: var(--white);
        }

        .sub-tag {
          color: var(--primary);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 4px;
          display: block;
          margin-bottom: 10px;
        }

        /* CONTENT CONTAINER */
        .policy-container {
          max-width: 900px;
          width: 90%;
          margin: -50px auto 100px;
          background: var(--white);
          padding: 60px 8%;
          border-radius: 40px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
          border: 1px solid #eeeeee;
          flex: 1;
        }

        .policy-section {
          margin-bottom: 40px;
        }

        .refund-card {
          background: #f8faff;
          padding: 30px;
          border-radius: 24px;
          border-left: 5px solid var(--primary);
          margin-bottom: 20px;
        }

        .refund-card.warning {
          border-left-color: var(--danger);
          background: #fff5f5;
        }

        .refund-card strong {
          color: var(--black);
          display: block;
          margin-bottom: 8px;
          font-size: 17px;
          font-weight: 800;
        }

        .refund-card p {
          font-size: 15px;
          color: #555555;
          font-weight: 500;
        }

        /* FOOTER BADGE */
        .footer-badge {
          margin-top: 60px;
          padding: 30px;
          border-radius: 20px;
          background: #f1f5ff;
          text-align: center;
        }

        .footer-badge p {
          font-size: 13px;
          font-weight: 700;
          color: var(--primary);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .policy-container {
            margin: -40px 5% 60px;
            padding: 40px 6%;
          }
        }
      `}</style>

      <header className="policy-header">
        <span className="sub-tag">TRANSPARENCY</span>
        <h1 className="brand-title">CodeCrafte</h1>
        <h2 className="page-subtitle">Refund Policy</h2>
      </header>

      <main className="policy-container">
        <section className="policy-section">
          <div className="refund-card">
            <strong>Project Kick-off (Advance Payment)</strong>
            <p>
              The 50% advance payment required to initiate the project is non-refundable. This deposit secures our development team's time and reserves dedicated infrastructure resources.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <div className="refund-card warning">
            <strong>Cancellation Policy</strong>
            <p>
              If a project is canceled mid-way by the client, previously paid fees will not be refunded. Additionally, the client will be billed for any extra work or milestone completed beyond the initial deposit.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <div className="refund-card">
            <strong>Exceptional Cases</strong>
            <p>
              Refunds are issued exclusively if CodeCrafte fails completely to deliver the agreed project scope and no reasonable resolution or alternative can be reached.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <div className="refund-card">
            <strong>Post-Handover Terms</strong>
            <p>
              Once final project assets, completed files, or source code repositories are handed over to the client, no refund requests will be accepted under any circumstances.
            </p>
          </div>
        </section>

        <div className="footer-badge">
          <p>VERIFIED & APPROVED BY CODECRAFTE MANAGEMENT</p>
          <p style={{ color: '#888888', fontSize: '11px', marginTop: '5px' }}>
            Last Revised: April 06, 2026
          </p>
        </div>
      </main>

      <AI />
      <Feedback />
    </div>
  );
};

export default RefundPolicy;