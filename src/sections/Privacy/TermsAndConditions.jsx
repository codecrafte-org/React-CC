import { useEffect } from 'react';
// Components import
import Navbar from '../../components/Navbar';
import AI from '../../components/AI';
import Feedback from '../../components/Feedback';

const TermsAndConditions = () => {
  // Page top scroll fix on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page-wrapper">
      <Navbar />

      <style>{`
        /* COLOR VARIABLES & BASE STYLING */
        :root {
          --primary: #0a4dd4;
          --black: #000000;
          --white: #ffffff;
          --text: #111111;
        }

        .terms-page-wrapper {
          min-height: 100vh;
          background: var(--white);
          color: var(--text);
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
        }

        /* HEADER SECTION */
        .terms-header {
          padding: 140px 8% 80px;
          background: var(--black);
          color: var(--white);
          text-align: center;
        }

        .terms-header h1.brand-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: -2px;
          color: var(--white);
        }

        .terms-header h2.page-subtitle {
          font-size: 1.5rem;
          margin-top: 10px;
          color: var(--white);
          opacity: 0.9;
        }

        .last-update {
          margin-top: 15px;
          font-size: 12px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 2px;
        }

        /* CONTENT CONTAINER */
        .terms-container {
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

        .terms-section {
          margin-bottom: 45px;
        }

        .terms-section h2 {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--black);
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .terms-section h2::before {
          content: '';
          width: 10px;
          height: 10px;
          background: var(--primary);
          border-radius: 50%;
          display: inline-block;
        }

        .terms-section p {
          font-size: 15px;
          color: #555555;
        }

        .terms-list {
          list-style: none;
          padding-left: 25px;
        }

        .terms-list li {
          position: relative;
          margin-bottom: 12px;
          font-size: 15px;
          color: #555555;
        }

        .terms-list li::before {
          content: '→';
          position: absolute;
          left: -25px;
          color: var(--primary);
          font-weight: 900;
        }

        /* TERMINATION BOX */
        .termination-box {
          background: #fff5f5;
          padding: 30px;
          border-left: 5px solid #ff4d4d;
          border-radius: 15px;
          margin-top: 20px;
        }

        .termination-box p {
          color: #444444;
        }

        /* CEO VERIFICATION */
        .verification-footer {
          margin-top: 80px;
          padding-top: 50px;
          border-top: 1px solid #eeeeee;
          text-align: center;
        }

        .ceo-badge {
          display: inline-block;
          padding: 10px 25px;
          background: var(--black);
          color: var(--white);
          border-radius: 50px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .terms-container {
            margin: -40px 5% 60px;
            padding: 40px 6%;
          }
        }
      `}</style>

      <header className="terms-header">
        <h1 className="brand-title">CodeCrafte</h1>
        <h2 className="page-subtitle">Terms & Conditions</h2>
        <p className="last-update">UPDATED: APRIL 06, 2026</p>
      </header>

      <main className="terms-container">
        <section className="terms-section">
          <h2>Project Scope</h2>
          <p>
            We are solely responsible for completing work explicitly outlined in the written project agreement. Any additional features or scope modifications requested mid-project will be categorized as "Extra Work" and billed separately.
          </p>
        </section>

        <section className="terms-section">
          <h2>Payment Policy</h2>
          <ul className="terms-list">
            <li>A 50% advance deposit is required prior to project kick-off.</li>
            <li>The remaining 50% balance must be settled before final project assets and source codes are handed over.</li>
            <li>Refunds are processed only if the completed work fails to meet the agreed specifications.</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>Revision Rules</h2>
          <p>
            We provide 2 complimentary rounds of revisions for every project. Subsequent modification requests beyond these rounds will incur additional service fees.
          </p>
        </section>

        <section className="terms-section">
          <h2>Termination & Cancellation</h2>
          <div className="termination-box">
            <p>
              <strong>24-Hour Notice:</strong> If you wish to halt or cancel a project, a 24-hour written notice is mandatory. Clients are required to settle payments for all work completed up to the point of cancellation.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>Intellectual Property Rights</h2>
          <p>
            CodeCrafte retains full ownership of all code, designs, and development assets until final payment is received in full. Upon full settlement, all intellectual property rights transfer to the client.
          </p>
        </section>

        <footer className="verification-footer">
          <div className="ceo-badge">VERIFIED BY CEO</div>
          <p style={{ marginTop: '20px', fontWeight: '800', fontStyle: 'italic' }}>
            CodeCrafte Operations Team
          </p>
          <p style={{ fontSize: '11px', color: '#aaaaaa', marginTop: '10px' }}>
            Security Verified Document ID: CC-2026-TNC
          </p>
        </footer>
      </main>

      <AI />
      <Feedback />
    </div>
  );
};

export default TermsAndConditions;