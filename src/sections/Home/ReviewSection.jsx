import { useState, useEffect, useRef } from 'react';
import '../../styles/root.css';

const REVIEWS = [
  {
    id: 1,
    name: "Adrian Foster",
    role: "Product Manager at TechFlow",
    comment: "CodeCrafte delivered our web application well ahead of schedule The UI animations and mobile responsiveness are absolutely world class.",
    rating: 5,
    initials: "RF",
    bgAccent: "#3b82f6"
  },
  {
    id: 2,
    name: "Usama Javed",
    role: "Founder, Mini Trendz",
    comment: "Working with CodeCrafte was an incredible experience and their attention to design details and clean CSS architecture elevated our brand",
    rating: 5,
    initials: "SJ",
    bgAccent: "#ec4899"
  },
  {
    id: 3,
    name: "Abdullah Khan",
    role: "CTO, Zylowalls",
    comment: "The performance and smoothness of the React components provided exceeded our expectations. Highly recommended for complex SaaS applications.",
    rating: 5,
    initials: "MC",
    bgAccent: "#10b981"
  },
  {
    id: 4,
    name: "Hassan Mehmood",
    role: "Founder, HM Aesthetics",
    comment: "Working with this company has been a game-changer for us. Their innovative solutions and dedicated support have significantly boosted our productivity and efficiency. We couldn't be happier with the results",
    rating: 5,
    initials: "AM",
    bgAccent: "#8b5cf6"
  }
];

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [reviewsList, setReviewsList] = useState(REVIEWS);
  
  const timerRef = useRef(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviewsList.length);
    }, 2000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, [reviewsList.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviewsList.length);
    startTimer();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);
    startTimer();
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !newName.trim()) return;

    const initials = newName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

    const newEntry = {
      id: Date.now(),
      name: newName,
      role: "Verified Client",
      comment: newComment,
      rating: 5,
      initials: initials || "U",
      bgAccent: "#6366f1"
    };

    setReviewsList([newEntry, ...reviewsList]);
    setActiveIndex(0);
    setNewComment("");
    setNewName("");
    setIsModalOpen(false);
    startTimer();
  };

  return (
    <>
      <style>{`
        /* UNIQUE NAMESPACED CSS (PREVENTS OVERLAPPING WITH PRICING SECTION) */
        .rf-reviews-section {
          position: relative;
          width: 100%;
          padding: 100px 24px;
          background: var(--bg-main, #ffffff);
          font-family: var(--font-family, system-ui, -apple-system, sans-serif);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* HEADER */
        .rf-reviews-header {
          text-align: center;
          margin-bottom: 48px;
          z-index: 2;
        }

        .rf-reviews-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(15, 23, 42, 0.05);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary, #0f172a);
          margin-bottom: 12px;
          letter-spacing: -0.2px;
        }

        .rf-reviews-title {
           font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 10px 0;
  text-transform: uppercase;
  color: var(--text-dark, #000000);
        }

        .rf-reviews-subtitle {
          font-size: 1rem;
          color: var(--text-muted, #64748b);
          margin: 0;
        }

        /* 3D CAROUSEL CONTAINER */
        .rf-carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 1000px;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          margin-bottom: 30px;
        }

        /* CAROUSEL CARDS */
        .rf-carousel-card {
          position: absolute;
          width: 380px;
          padding: 32px;
          background: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-light, #e2e8f0);
          border-radius: 24px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.08);
          box-sizing: border-box;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, filter 0.6s ease;
          cursor: pointer;
          user-select: none;
        }

        /* 3D TRANSFORMATIONS FOR COVERFLOW EFFECT */
        .rf-carousel-card.rf-active {
          transform: translateX(0) translateZ(0) rotateY(0deg);
          opacity: 1;
          filter: blur(0px);
          z-index: 10;
        }

        .rf-carousel-card.rf-prev {
          transform: translateX(-65%) translateZ(-140px) rotateY(25deg);
          opacity: 0.45;
          filter: blur(2px);
          z-index: 5;
        }

        .rf-carousel-card.rf-next {
          transform: translateX(65%) translateZ(-140px) rotateY(-25deg);
          opacity: 0.45;
          filter: blur(2px);
          z-index: 5;
        }

        .rf-carousel-card.rf-hidden {
          transform: translateX(0) translateZ(-300px) rotateY(0deg);
          opacity: 0;
          pointer-events: none;
          z-index: 1;
        }

        /* CARD CONTENT */
        .rf-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .rf-avatar-dp {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.15);
        }

        .rf-user-info h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary, #0f172a);
        }

        .rf-user-info p {
          margin: 2px 0 0 0;
          font-size: 0.85rem;
          color: var(--text-muted, #64748b);
        }

        .rf-card-rating {
          color: #f59e0b;
          font-size: 0.9rem;
          margin-bottom: 14px;
        }

        .rf-card-comment {
          font-size: 0.98rem;
          color: var(--text-primary, #334155);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* NAVIGATION ARROWS */
        .rf-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-light, #e2e8f0);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .rf-nav-arrow:hover {
          transform: translateY(-50%) scale(1.1);
          background: #f8fafc;
        }

        .rf-nav-arrow.rf-left { left: 20px; }
        .rf-nav-arrow.rf-right { right: 20px; }

        /* THUMBNAILS NAV */
        .rf-thumbnails-row {
          display: flex;
          gap: 12px;
          z-index: 10;
          margin-bottom: 32px;
        }

        .rf-thumb-avatar {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          opacity: 0.5;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }

        .rf-thumb-avatar.rf-active {
          opacity: 1;
          transform: scale(1.1);
          box-shadow: 0 0 0 3px var(--bg-main, #ffffff), 0 0 0 5px var(--text-primary, #0f172a);
        }

        /* BOTTOM BUTTON */
        .rf-leave-comment-btn {
          padding: 12px 28px;
          background: var(--text-primary, #0f172a);
          color: #ffffff;
          border: none;
          border-radius: 30px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
          z-index: 10;
        }

        .rf-leave-comment-btn:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        /* MODAL POPUP */
        .rf-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 20px;
        }

        .rf-modal-box {
          background: #ffffff;
          width: 100%;
          max-width: 450px;
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .rf-modal-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 20px 0;
        }

        .rf-form-group {
          margin-bottom: 16px;
          text-align: left;
        }

        .rf-form-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          margin-bottom: 6px;
        }

        .rf-form-group input, .rf-form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          font-size: 0.95rem;
          box-sizing: border-box;
          outline: none;
          font-family: inherit;
        }

        .rf-form-group input:focus, .rf-form-group textarea:focus {
          border-color: #0f172a;
        }

        .rf-modal-actions {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 24px;
        }

        .rf-cancel-btn {
          padding: 10px 18px;
          background: #f1f5f9;
          color: #475569;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        .rf-submit-btn {
          padding: 10px 20px;
          background: #0f172a;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .rf-carousel-wrapper {
            height: 340px;
          }

          .rf-carousel-card {
            width: 300px;
            padding: 24px;
          }

          .rf-carousel-card.rf-prev {
            transform: translateX(-40%) translateZ(-120px) rotateY(15deg);
          }

          .rf-carousel-card.rf-next {
            transform: translateX(40%) translateZ(-120px) rotateY(-15deg);
          }

          .rf-nav-arrow {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <section className="rf-reviews-section">
        {/* Header */}
        <div className="rf-reviews-header">
           <h2 className="rf-reviews-title">What Leaders Say About Us</h2>
          <p className="rf-reviews-subtitle">Real experiences from partners we've collaborated with.</p>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div 
          className="rf-carousel-wrapper"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          {/* Left Arrow */}
          <button className="rf-nav-arrow rf-left" onClick={handlePrev} aria-label="Previous Review">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards */}
          {reviewsList.map((review, index) => {
            let positionClass = "rf-hidden";
            if (index === activeIndex) {
              positionClass = "rf-active";
            } else if (index === (activeIndex - 1 + reviewsList.length) % reviewsList.length) {
              positionClass = "rf-prev";
            } else if (index === (activeIndex + 1) % reviewsList.length) {
              positionClass = "rf-next";
            }

            return (
              <div 
                key={review.id} 
                className={`rf-carousel-card ${positionClass}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="rf-card-header">
                  <div className="rf-avatar-dp" style={{ backgroundColor: review.bgAccent }}>
                    {review.initials}
                  </div>
                  <div className="rf-user-info">
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                  </div>
                </div>
                <div className="rf-card-rating">{"★".repeat(review.rating)}</div>
                <p className="rf-card-comment">"{review.comment}"</p>
              </div>
            );
          })}

          {/* Right Arrow */}
          <button className="rf-nav-arrow rf-right" onClick={handleNext} aria-label="Next Review">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Thumbnails Row */}
        <div className="rf-thumbnails-row">
          {reviewsList.map((review, index) => (
            <div
              key={review.id}
              className={`rf-thumb-avatar ${index === activeIndex ? 'rf-active' : ''}`}
              style={{ backgroundColor: review.bgAccent }}
              onClick={() => {
                setActiveIndex(index);
                startTimer();
              }}
            >
              {review.initials}
            </div>
          ))}
        </div>

        {/* Leave a Comment Button at Bottom */}
        <button className="rf-leave-comment-btn" onClick={() => setIsModalOpen(true)}>
          + Leave a Comment
        </button>

        {/* Leave a Comment Modal */}
        {isModalOpen && (
          <div className="rf-modal-overlay">
            <div className="rf-modal-box">
              <h3 className="rf-modal-title">Leave a Comment</h3>
              <form onSubmit={handleAddComment}>
                <div className="rf-form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Alex Rivera" 
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                  />
                </div>
                <div className="rf-form-group">
                  <label>Your Feedback</label>
                  <textarea 
                    rows="4" 
                    placeholder="Share your experience working with CodeCrafte..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="rf-modal-actions">
                  <button type="button" className="rf-cancel-btn" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="rf-submit-btn">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ReviewSection;