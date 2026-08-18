import { useEffect, useRef } from 'react';
import '../../styles/pricing.css';

const Pricing = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const toastRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    const toast = toastRef.current;
    if (!track || !section) return;

    const cards = track.querySelectorAll('.card');
    if (!cards.length) return;

    let rotation = 0;
    const angleStep = 360 / cards.length;
    let radius = window.innerWidth < 768 ? 220 : 450;

    // Initial 3D Position
    cards.forEach((card, i) => {
      const angle = i * angleStep;
      card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });

    const rotateP = (val) => {
      rotation += val;
      track.style.transform = `rotateY(${rotation}deg)`;
    };

    // Prev / Next Buttons
    const btnNext = section.querySelector('#pricing-next');
    const btnPrev = section.querySelector('#pricing-prev');

    const handleNext = () => rotateP(-angleStep);
    const handlePrev = () => rotateP(angleStep);

    btnNext?.addEventListener('click', handleNext);
    btnPrev?.addEventListener('click', handlePrev);

    // Toast Notification
    let toastTimeout;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && toast) {
          toast.classList.add('show');
          toastTimeout = setTimeout(() => toast.classList.remove('show'), 4000);
          observer.unobserve(section);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(section);

    // Mouse Wheel Rotation
    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        rotateP(e.deltaY * -0.05);
      }
    };

    // Touch Dragging
    let startX = 0;
    const handleTouchStart = (e) => (startX = e.touches[0].pageX);
    const handleTouchMove = (e) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        let diff = (startX - e.touches[0].pageX) * 0.2;
        rotateP(-diff);
        startX = e.touches[0].pageX;
      }
    };

    // Slow Continuous Drift
    let animId;
    const autoDrift = () => {
      rotateP(0.1);
      animId = requestAnimationFrame(autoDrift);
    };
    autoDrift();

    // Event Listeners
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Cleanup when component unmounts
    return () => {
      btnNext?.removeEventListener('click', handleNext);
      btnPrev?.removeEventListener('click', handlePrev);
      observer.disconnect();
      clearTimeout(toastTimeout);
      cancelAnimationFrame(animId);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="pricing-3d-section" id="pricing-trigger" ref={sectionRef}>
      {/* Header */}
      <div className="pricing-header">
        <span className="mini-tag">OUR PLANS</span>
        <h2>Premium Services</h2>
        <p>Precision-crafted digital solutions for your brand</p>
      </div>

      {/* Scroll Toast */}
      <div className="scroll-toast" id="scroll-toast" ref={toastRef}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4.1 12 6 10 4.1"/><path d="m5.1 8 1.9 2-1.9 2"/><path d="m18.9 8-1.9 2 1.9 2"/><path d="M12 2v10"/><path d="M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 22v-2"/></svg>
        <span>Scroll, Drag or Use Buttons</span>
      </div>

      {/* Carousel Controls */}
      <div className="carousel-nav">
        <button className="nav-btn prev" id="pricing-prev" aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="nav-btn next" id="pricing-next" aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
      </div>

      {/* 3D Track */}
      <div className="carousel-wrapper">
        <div className="track" ref={trackRef}>
          
          {/* Card 1 */}
          <div className="card dark">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              <span className="type">WEB_APP</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">Starts</span>
                <span className="amt">10,000</span>
              </div>
              <h3>Single Page App</h3>
            </div>
            <div className="card-bottom">High-performance SPA with React/Next.js.</div>
          </div>

          {/* Card 2 */}
          <div className="card light">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 12.5"/><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L3.18 17.5"/></svg>
              <span className="type">META ADS</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">Monthly</span>
                <span className="amt">15,000</span>
              </div>
              <h3>Campaign Mgmt</h3>
            </div>
            <div className="card-bottom">Targeted ads to scale your ROAS.</div>
          </div>

          {/* Card 3 */}
          <div className="card dark">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
              <span className="type">SMM</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">Package</span>
                <span className="amt">20,000</span>
              </div>
              <h3>Social Media</h3>
            </div>
            <div className="card-bottom">Full content strategy & growth.</div>
          </div>

          {/* Card 4 */}
          <div className="card light">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
              <span className="type">PPT SLIDES</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">Per Deck</span>
                <span className="amt">5,000</span>
              </div>
              <h3>Pitch Decks</h3>
            </div>
            <div className="card-bottom">Investor-ready professional designs.</div>
          </div>

          {/* Card 5 */}
          <div className="card dark">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <span className="type">SEO</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">Rank</span>
                <span className="amt">25,000</span>
              </div>
              <h3>Search Engine</h3>
            </div>
            <div className="card-bottom">Top-tier keyword ranking solutions.</div>
          </div>

          {/* Card 6 */}
          <div className="card light">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <span className="type">CRM</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">Setup</span>
                <span className="amt">30,000</span>
              </div>
              <h3>Customer Relation</h3>
            </div>
            <div className="card-bottom">Lead tracking & sales automation.</div>
          </div>

          {/* Card 7 */}
          <div className="card dark">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              <span className="type">PMS</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">License</span>
                <span className="amt">35,000</span>
              </div>
              <h3>Project Mgmt</h3>
            </div>
            <div className="card-bottom">Workflows to manage large teams.</div>
          </div>

          {/* Card 8 */}
          <div className="card light">
            <div className="card-top">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <span className="type">E-COM WEBs</span>
            </div>
            <div className="card-mid">
              <div className="price-box">
                <span className="type">Full Web</span>
                <span className="amt">40,000</span>
              </div>
              <h3>E-com Stores</h3>
            </div>
            <div className="card-bottom">Shopify or Custom Multi-vendor.</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;