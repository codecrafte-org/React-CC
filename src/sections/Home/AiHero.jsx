import { useEffect, useRef } from 'react';
import '../../styles/root.css';
import '../../styles/AiHero.css';

const BOTPRESS_URL = "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/04/25/18/20260425181341-XNV4JR7G.json";

const suggestions = [
  "How much does a website cost?",
  "What services do you offer?",
  "I need more customers"
];

const AiHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal-text, .reveal-fade');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="ai-hero-section" ref={sectionRef}>
      
      {/* Blurred Background Logo */}
      <img src="/images/logo1.webp" alt="AI Background" className="ai-bg-logo" />

      <div className="ai-content">
        
        {/* Main Heading */}
        <h2 className="ai-animate-load ai-heading">
          How can I assist you today? <br />
          <span className="ai-text-gradient"> to Grow Your Business</span> ✨
        </h2>

       
        {/* AI Search Bar */}
        <a 
          href={BOTPRESS_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ai-search-bar reveal-fade"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="search-icon"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="search-placeholder">Ask AI "How to get more clients?"...</span>
          <div className="search-btn-inner">Search</div>
        </a>

        {/* Suggestion Chips */}
        <div className="ai-suggestions reveal-fade">
          {suggestions.map((question, index) => (
            <a 
              key={index} 
              href={BOTPRESS_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ai-chip"
            >
              {question}
            </a>
          ))}
        </div>

        {/* Gradient Action Button */}
        <a 
          href={BOTPRESS_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="ai-gradient-btn reveal-fade"
        >
          Open Full AI Chat 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>

      </div>
    </section>
  );
};

export default AiHero;