import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import emailjs from "@emailjs/browser";
import DP from "../../assets/DP.jpeg";
import "../../styles/root.css";

const Form = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  
  const [selectedService, setSelectedService] = useState("UI/UX Design");
  const [btnText, setBtnText] = useState("Submit");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "UI/UX Design",
    "Website",
    "Brand Identity",
    "Content Production",
    "Illustration",
    "Other / Customizable"
  ];

  // 3D SCROLL PERSPECTIVE TILT ANIMATION
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Flat & Elevate Transformations
  const rawRotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const rawY = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);

  // Physics Spring Smoothing (Prevents Lag on Mobile)
  const rotateX = useSpring(rawRotateX, { stiffness: 100, damping: 20 });
  const y = useSpring(rawY, { stiffness: 100, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 100, damping: 20 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 20 });

  // EMAILJS SUBMIT HANDLER (ROBUST RE-WRITTEN)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setBtnText("Sending...");

    // Sending via emailjs.sendForm using explicit e.target ref
    emailjs
      .sendForm(
        "service_ete2uen",
        "template_t4n5g19",
        e.target,
        "xzBpQi5U68rp562Lu"
        
      )
      .then(
        (result) => {
          console.log("Email Successfully Sent:", result.text);
          setBtnText("Submitted ✓");
          if (formRef.current) formRef.current.reset();
          setSelectedService("UI/UX Design");
          
          setTimeout(() => {
            setBtnText("Submit");
            setIsSubmitting(false);
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert(`Failed to send message: ${error.text || "Check EmailJS setup"}`);
          setBtnText("Submit");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <style>{`
        .exact-form-section {
          width: 100%;
          padding: 80px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--bg-main, #ffffff);
          box-sizing: border-box;
          perspective: 1200px; /* Essential for 3D Scroll Rotation */
          overflow: hidden;
        }

        .exact-card-container {
          width: 100%;
          max-width: 1100px;
          border-radius: var(--radius-lg, 24px);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.35);
          background: var(--bg-surface, #111115);
          transform-style: preserve-3d;
          font-family: var(--font-main, sans-serif);
        }

        /* LEFT PANEL */
        .exact-left-panel {
          background: linear-gradient(180deg, var(--primary-color, #0066ff) 0%, #ffffff 75%);
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #000000;
        }

        .exact-profile-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .exact-user-info {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exact-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .exact-user-desc {
          font-size: 0.92rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          line-height: 1.4;
          max-width: 220px;
        }

        .exact-action-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .exact-pill {
          background: #000000;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .exact-pill:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .exact-left-hero {
          margin-top: 60px;
        }

        .exact-hero-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin: 10px 0;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.1;
          color: #000000;
        }

        /* RIGHT PANEL */
        .exact-right-panel {
          background: var(--text-dark, #111115);
          padding: 44px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .exact-form-title {
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 500;
          color: #ffffff;
          margin: 0 0 24px 0;
          line-height: 1.25;
        }

        .exact-form-title span {
          display: block;
          font-weight: 700;
        }

        .exact-section-label {
          font-size: 0.8rem;
          color: #888888;
          margin-bottom: 12px;
          display: block;
        }

        .exact-chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
        }

        .exact-chip-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 100px;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .exact-chip-btn.active, .exact-chip-btn:hover {
          background: #ffffff;
          color: #111115;
          border-color: #ffffff;
        }

        .exact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .exact-input-group {
          display: flex;
          flex-direction: column;
        }

        .exact-input-group input,
        .exact-input-group textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 0;
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
          box-sizing: border-box;
          transition: border-color 0.2s ease;
        }

        .exact-input-group input::placeholder,
        .exact-input-group textarea::placeholder {
          color: #777777;
        }

        .exact-input-group input:focus,
        .exact-input-group textarea:focus {
          border-bottom-color: var(--primary-color, #0066ff);
        }

        .exact-submit-btn {
          margin-top: 10px;
          width: 100%;
          padding: 16px;
          background: var(--primary-color, #0066ff);
          color: #ffffff;
          border: none;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .exact-submit-btn:hover:not(:disabled) {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        .exact-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 900px) {
          .exact-card-container {
            grid-template-columns: 1fr;
          }

          .exact-left-panel {
            padding: 30px 24px;
            gap: 30px;
          }

          .exact-right-panel {
            padding: 30px 24px;
          }

          .exact-profile-header {
            flex-direction: column;
          }
        }
      `}</style>

      <section className="exact-form-section" ref={containerRef}>
        {/* ANIMATED 3D PERSPECTIVE WRAPPER */}
        <motion.div 
          className="exact-card-container"
          style={{
            rotateX,
            y,
            scale,
            opacity
          }}
        >
          {/* LEFT SIDE: CREATIVE CARD */}
          <div className="exact-left-panel">
            <div className="exact-profile-header">
              <div className="exact-user-info">
                <img
                  src={DP}
                  alt="OMAAN JALLANE"
                  className="exact-avatar"
                />
                <div className="exact-user-desc">
                  <strong>OMAAN JALLANE</strong> — Project Lead, can guide your project's initial steps.
                </div>
              </div>

              <div className="exact-action-pills">
                <a href="mailto:omaan@codecrafte.site" className="exact-pill">
                  omaan@codecrafte.site
                </a>
                <a href="tel:03059462051" className="exact-pill">
                  Send Message
                </a>
              </div>
            </div>

            <div className="exact-left-hero">
              <h2 className="exact-hero-title">
                Every project starts with a plan.
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM */}
          <div className="exact-right-panel">
            <h3 className="exact-form-title">
              What services <span>we can support you with?</span>
            </h3>

            <span className="exact-section-label">I'm interested in</span>
            <div className="exact-chips-grid">
              {services.map((service) => (
                <button
                  type="button"
                  key={service}
                  className={`exact-chip-btn ${selectedService === service ? "active" : ""}`}
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </button>
              ))}
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="exact-form">
              {/* HIDDEN FIELD FOR SELECTED SERVICE VALUE */}
              <input type="hidden" name="selected_service" value={selectedService} />

              <div className="exact-input-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="exact-input-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div className="exact-input-group">
                <input
                  type="tel"
                  name="user_mobile"
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="exact-input-group">
                <textarea
                  name="project_details"
                  rows="2"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button type="submit" className="exact-submit-btn" disabled={isSubmitting}>
                {btnText}
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Form;