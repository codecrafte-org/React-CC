import { useState, useEffect } from 'react';
// Components import (paths adapt according to folder structure)
import Navbar from '../../components/Navbar';
 import AI from '../../components/AI';
import Feedback from '../../components/Feedback';

const ServiceAgreement = () => {
  // Page load hotay hi top par scroll karwane ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Form states tracking
  const [formData, setFormData] = useState({
    agreementNo: '',
    date: new Date().toISOString().split('T')[0],
    projectType: 'Custom Development',
    clientName: '',
    projectName: '',
    deliveryDays: '30',
    totalCost: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('contract-paper');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `CodeCrafte_Agreement_${formData.agreementNo || 'Draft'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (window.html2pdf) {
      window.html2pdf().set(opt).from(element).save();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => {
        window.html2pdf().set(opt).from(element).save();
      };
      document.body.appendChild(script);
    }
  };

  return (
    <div className="agreement-page-wrapper">
      <Navbar />

      <style>{`
        /* PAGE BASE STYLING */
        .agreement-page-wrapper {
          min-height: 100vh;
          background: var(--bg-main, #0b0f17);
          color: var(--text-main, #f8fafc);
          padding-top: 120px;
          padding-bottom: 80px;
          display: flex;
          flex-direction: column;
        }

        .agreement-container {
          max-width: 920px;
          margin: 0 auto;
          width: 100%;
          padding: 0 20px;
          flex: 1;
        }

        /* HEADER CONTROL BAR */
        .controls-bar {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border, rgba(255, 255, 255, 0.12));
          border-radius: 16px;
          padding: 18px 28px;
          margin-bottom: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .controls-title {
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .controls-title::before {
          content: "";
          display: inline-block;
          width: 8px;
          height: 8px;
          background: var(--primary, #6366f1);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--primary, #6366f1);
        }

        .btn-group {
          display: flex;
          gap: 12px;
        }

        .theme-btn {
          padding: 10px 22px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-transform: uppercase;
          font-size: 11px;
          letter-spacing: 1px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .btn-print {
          background: rgba(255, 255, 255, 0.05);
          color: #f8fafc;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .btn-print:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .btn-download {
          background: var(--primary, #6366f1);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }

        .btn-download:hover {
          opacity: 0.95;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.45);
        }

        /* CONTRACT DOCUMENT CONTAINER */
        .contract-paper {
          background: #ffffff;
          color: #0f172a;
          width: 100%;
          max-width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          padding: 24mm 20mm;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          position: relative;
          border-top: 12px solid var(--primary, #6366f1);
          border-radius: 6px;
          overflow: hidden;
        }

        /* HEADER LOGO & TITLE */
        .header-logo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 18px;
          margin-bottom: 30px;
        }

        .logo-text {
          font-weight: 900;
          font-size: 26px;
          letter-spacing: -1px;
          color: #0f172a;
        }

        .logo-accent {
          color: var(--primary, #6366f1);
        }

        .contract-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px;
          font-style: italic;
          color: #1e293b;
          font-weight: 700;
        }

        /* META INFORMATION */
        .meta-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 35px;
          font-size: 13px;
          line-height: 2;
          background: #f8fafc;
          padding: 16px 20px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        /* SECTION STYLING */
        .section {
          margin-bottom: 24px;
        }

        .section h3 {
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--primary, #6366f1);
          margin-bottom: 10px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 6px;
          letter-spacing: 1px;
        }

        .section p, .section li {
          font-size: 13.5px;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 8px;
        }

        .field-input {
          border: none;
          border-bottom: 2px dashed #cbd5e1;
          padding: 2px 8px;
          font-weight: 700;
          color: var(--primary, #6366f1);
          background: transparent;
          outline: none;
          font-size: 13.5px;
          transition: border-color 0.2s ease;
        }

        .field-input:focus {
          border-bottom-color: var(--primary, #6366f1);
          background: rgba(99, 102, 241, 0.03);
        }

        /* SIGNATURE SECTION */
        .signature-section {
          margin-top: 70px;
          display: flex;
          justify-content: space-between;
        }

        .sig-box {
          width: 42%;
          text-align: center;
        }

        .sig-line {
          border-top: 2px solid #0f172a;
          margin-bottom: 10px;
          padding-top: 10px;
        }

        .sig-label {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
        }

        /* STAMP SEAL */
        .stamp {
          position: absolute;
          bottom: 130px;
          right: 70px;
          width: 130px;
          height: 130px;
          border: 3px double var(--primary, #6366f1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 10px;
          font-weight: 900;
          color: var(--primary, #6366f1);
          opacity: 0.18;
          transform: rotate(-12deg);
          pointer-events: none;
        }

        /* PRINT MEDIA STYLING */
        @media print {
          .controls-bar, nav, footer, .side-action-dock, .feedback-btn {
            display: none !important;
          }
          body, .agreement-page-wrapper {
            padding: 0 !important;
            background: #ffffff !important;
          }
          .contract-paper {
            box-shadow: none !important;
            margin: 0 !important;
            border: none !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 10mm !important;
          }
          .field-input {
            border-bottom: none !important;
          }
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 850px) {
          .agreement-page-wrapper {
            padding-top: 90px;
          }
          .contract-paper {
            padding: 25px 20px;
            min-height: auto;
          }
          .controls-bar {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
          .meta-info {
            flex-direction: column;
            gap: 12px;
          }
          .meta-info > div:last-child {
            text-align: left !important;
          }
        }
      `}</style>

      <div className="agreement-container">
        {/* Controls Bar */}
        <div className="controls-bar">
          <div className="controls-title">Official Agreement Editor</div>
          <div className="btn-group">
            <button className="theme-btn btn-print" onClick={handlePrint}>
              Print Document
            </button>
            <button className="theme-btn btn-download" onClick={handleDownloadPDF}>
              Download as PDF
            </button>
          </div>
        </div>

        {/* Contract Sheet */}
        <div className="contract-paper" id="contract-paper">
          <div className="stamp">
            CODECRAFTE<br />OFFICIAL SEAL<br />2026
          </div>

          <div className="header-logo">
            <div className="logo-text">
              CODECRAFTE<span className="logo-accent">.</span>
            </div>
            <div className="contract-title">Service Agreement</div>
          </div>

          <div className="meta-info">
            <div>
              <strong>Agreement No:</strong>{' '}
              <input
                type="text"
                name="agreementNo"
                className="field-input"
                placeholder="CC-2026- [ --- ]"
                value={formData.agreementNo}
                onChange={handleInputChange}
              />
              <br />
              <strong>Date:</strong>{' '}
              <input
                type="date"
                name="date"
                className="field-input"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              <strong>Project Type:</strong>{' '}
              <input
                type="text"
                name="projectType"
                className="field-input"
                value={formData.projectType}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="section">
            <h3>1. The Parties</h3>
            <p>
              This agreement is made between <strong>CodeCrafte Operations</strong> (the "Agency") and{' '}
              <input
                type="text"
                name="clientName"
                className="field-input"
                style={{ width: '240px' }}
                placeholder="Client Full Name / Company"
                value={formData.clientName}
                onChange={handleInputChange}
              />{' '}
              (the "Client").
            </p>
          </div>

          <div className="section">
            <h3>2. Project Scope</h3>
            <p>The Agency agrees to provide the following services as discussed:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>
                Complete Development of{' '}
                <input
                  type="text"
                  name="projectName"
                  className="field-input"
                  style={{ width: '220px' }}
                  placeholder="Project Name"
                  value={formData.projectName}
                  onChange={handleInputChange}
                />
                .
              </li>
              <li>
                Delivery within{' '}
                <input
                  type="text"
                  name="deliveryDays"
                  className="field-input"
                  style={{ width: '50px', textAlign: 'center' }}
                  value={formData.deliveryDays}
                  onChange={handleInputChange}
                />{' '}
                business days.
              </li>
              <li>Revisions as per the selected package (2 Rounds included).</li>
            </ul>
          </div>

          <div className="section">
            <h3>3. Payment Terms</h3>
            <p>
              The total project cost is{' '}
              <strong>
                PKR{' '}
                <input
                  type="text"
                  name="totalCost"
                  className="field-input"
                  style={{ width: '120px' }}
                  placeholder="0.00"
                  value={formData.totalCost}
                  onChange={handleInputChange}
                />
              </strong>
              .
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li>
                <strong>Advance:</strong> 50% (Non-refundable) to initiate the work.
              </li>
              <li>
                <strong>Final:</strong> 50% upon project completion and before final handover.
              </li>
            </ul>
          </div>

          <div className="section">
            <h3>4. Termination & Notice</h3>
            <p>
              Either party may terminate this agreement with a <strong>24-hour written notice</strong>. In case of
              termination, the client is liable to pay for the work completed up to that point.
            </p>
          </div>

          <div className="section">
            <h3>5. Confidentiality</h3>
            <p>
              Agency agrees to keep all client data, business logic, and project details strictly confidential and will
              not share them with third parties.
            </p>
          </div>

          <div className="signature-section">
            <div className="sig-box">
              <div style={{ marginBottom: '10px' }}>
                <h4 style={{ color: '#475569', letterSpacing: '1.5px', fontWeight: '800' }}>CODECRAFTE</h4>
              </div>
              <div className="sig-line"></div>
              <div className="sig-label">
                Authorized Signature
                <br />
                (CodeCrafte)
              </div>
            </div>

            <div className="sig-box">
              <div style={{ height: '40px' }}></div>
              <div className="sig-line"></div>
              <div className="sig-label">
                Client Signature
                <br />
                (Acceptance of Terms)
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '50px',
              fontSize: '10px',
              color: '#94a3b8',
              textAlign: 'center',
              borderTop: '1px solid #f1f5f9',
              paddingTop: '20px'
            }}
          >
            This is a legally binding document. By signing, both parties agree to the terms mentioned above.
            <br />
            CodeCrafte | 2026 | www.codecrafte.org
          </div>
        </div>
      </div>

      {/* Dynamic Action Floating Elements */}
      <AI />
      <Feedback />

     </div>
  );
};

export default ServiceAgreement;