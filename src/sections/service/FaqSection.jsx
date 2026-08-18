import { useState } from "react";

// --- MINIMAL LINE-ART SVG ICONS ---
const SmileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const SupportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ChevronIcon = ({ isOpen }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// 10 REAL-WORLD CLIENT QUESTIONS CATEGORIZED
const FAQ_DATA = [
  {
    id: 1,
    category: "General",
    icon: <ClockIcon />,
    question: "How long does it take to complete a project?",
    answer: "Most custom websites and landing pages take 1 to 3 weeks. Complex web applications, SaaS platforms, or ERP systems usually take 4 to 8 weeks depending on features."
  },
  {
    id: 2,
    category: "General",
    icon: <SmileIcon />,
    question: "How do we get started with a new project?",
    answer: "Simple! First, we have a quick 15-minute call to understand your needs. Then we send a clear proposal with timeline & budget. Once approved, design work starts immediately."
  },
  {
    id: 3,
    category: "General",
    icon: <SupportIcon />,
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, all our projects include 30 days of free technical support after launch. We also offer monthly maintenance plans to keep your software updated and secure."
  },
  {
    id: 4,
    category: "Pricing",
    icon: <CardIcon />,
    question: "How does project billing work?",
    answer: "We follow a milestone-based structure: 50% upfront to initiate design & setup, and 50% upon final project completion and your complete approval."
  },
  {
    id: 5,
    category: "Pricing",
    icon: <CardIcon />,
    question: "Are there any hidden charges or extra fees?",
    answer: "No hidden costs at all. Everything including server setup, UI design, and development is clearly detailed in your proposal before work begins."
  },
  {
    id: 6,
    category: "Pricing",
    icon: <CardIcon />,
    question: "Can I upgrade or add features later after launching?",
    answer: "Absolutely! Our code architecture is built modularly, making it effortless to add new pages, tools, or integrations whenever your business grows."
  },
  {
    id: 7,
    category: "Process",
    icon: <CodeIcon />,
    question: "Will I be able to update content on my website myself?",
    answer: "Yes! We build simple dashboard controls or custom CMS setups so you can update text, images, products, and blog posts without coding knowledge."
  },
  {
    id: 8,
    category: "Process",
    icon: <CodeIcon />,
    question: "What if I don't like the initial UI/UX design?",
    answer: "We don't code until you approve the Figma UI designs. We offer unlimited design revisions during the prototyping phase to ensure you love the look."
  },
  {
    id: 9,
    category: "Technical",
    icon: <CodeIcon />,
    question: "Which technologies do you use for development?",
    answer: "We use modern stack standards: React, Next.js, Tailwind CSS, Node.js, Python, PostgreSQL, and AWS to ensure lightning-fast speeds and high security."
  },
  {
    id: 10,
    category: "Technical",
    icon: <CodeIcon />,
    question: "Will my app or website be mobile responsive?",
    answer: "100% mobile responsive! We design for smartphone screens first, ensuring smooth layout adaptation across mobile, tablet, and desktop displays."
  }
];

const CATEGORIES = ["All", "General", "Pricing", "Process", "Technical"];

const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openId, setOpenId] = useState(1); // First item open by default like design

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs =
    activeTab === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeTab);

  return (
    <>
      <style>{`
        /* FAQ ROOT STRUCTURE USING CUSTOM VARS */
        .faq-section {
          width: 100%;
          padding: 90px 6%;
          background: var(--bg-main, #ffffff);
          color: var(--text-primary, #101828);
          font-family: var(--font-family, sans-serif);
          box-sizing: border-box;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        /* HEADER SECTION */
        .faq-header {
          text-align: center;
          margin-bottom: 36px;
        }

        .faq-title {
           font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 10px 0;
  text-transform: uppercase;
  color: var(--text-dark, #000000);
        }

        .faq-subtitle {
          font-size: 1rem;
          color: var(--text-muted, #667085);
          margin: 0;
          line-height: 1.5;
        }

        .faq-contact-link {
          color: var(--text-primary, #101828);
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }

        /* CATEGORY FILTER PILLS */
        .faq-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .faq-tab-btn {
          padding: 8px 18px;
          border-radius: var(--radius-full, 100px);
          font-size: 0.88rem;
          font-weight: 600;
          border: 1px solid var(--border-light, #eaecf0);
          background: transparent;
          color: var(--text-muted, #667085);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .faq-tab-btn:hover {
          border-color: var(--text-primary, #101828);
          color: var(--text-primary, #101828);
        }

        .faq-tab-btn.active {
          background: var(--text-primary, #101828);
          color: #ffffff;
          border-color: var(--text-primary, #101828);
        }

        /* LIST & ACCORDION ITEMS */
        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid var(--border-light, #eaecf0);
          padding: 22px 0;
          transition: background 0.2s ease;
        }

        .faq-item:first-child {
          border-top: 1px solid var(--border-light, #eaecf0);
        }

        .faq-question-btn {
          width: 100%;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          padding: 0;
          gap: 16px;
        }

        .faq-q-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .faq-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid var(--border-light, #eaecf0);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted, #667085);
          background: var(--bg-surface, #f9fafb);
          flex-shrink: 0;
        }

        .faq-question-text {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-primary, #101828);
          margin: 0;
          line-height: 1.4;
        }

        .faq-chevron {
          color: var(--text-muted, #98a2b3);
          flex-shrink: 0;
        }

        /* ANSWER DROPDOWN */
        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), padding 0.35s ease;
        }

        .faq-answer-wrapper.open {
          max-height: 250px;
          padding-top: 12px;
          padding-left: 56px; /* ALIGNS WITH QUESTION TEXT AFTER ICON */
        }

        .faq-answer-text {
          font-size: 0.94rem;
          color: var(--text-muted, #475467);
          line-height: 1.6;
          margin: 0;
        }

        /* MOBILE ADAPTATION */
        @media (max-width: 640px) {
          .faq-section {
            padding: 50px 4%;
          }

          .faq-title {
            font-size: 1.65rem;
          }

          .faq-tabs {
            gap: 6px;
            margin-bottom: 32px;
          }

          .faq-tab-btn {
            padding: 6px 14px;
            font-size: 0.8rem;
          }

          .faq-icon-box {
            width: 34px;
            height: 34px;
          }

          .faq-question-text {
            font-size: 0.92rem;
          }

          .faq-answer-wrapper.open {
            padding-left: 0; /* FULL WIDTH ON SMALL SCREENS */
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-container">
          {/* HEADER */}
          <div className="faq-header">
            <h2 className="faq-title">Frequently asked questions</h2>
            <p className="faq-subtitle">
              Everything you need to know about our service process & pricing.{" "}
              <span className="faq-contact-link">Chat to our team</span>
            </p>
          </div>

          {/* CATEGORY TABS */}
          <div className="faq-tabs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`faq-tab-btn ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ ACCORDION LIST */}
          <div className="faq-list">
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="faq-item">
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <div className="faq-q-left">
                      <div className="faq-icon-box">{faq.icon}</div>
                      <h3 className="faq-question-text">{faq.question}</h3>
                    </div>
                    <div className="faq-chevron">
                      <ChevronIcon isOpen={isOpen} />
                    </div>
                  </button>

                  <div className={`faq-answer-wrapper ${isOpen ? "open" : ""}`}>
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;