import React from "react";
import { Link } from "react-router-dom";
import "../../styles/root.css";

// SVG Icons
const TechOverlayIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TeamIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const LevelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Featured Top Services Data
const TOP_SERVICES_ROW_1 = [
  {
    id: 1,
    title: "Web Development",
    badge: "★ High Demand",
    desc: "Custom high-performance web applications built with cutting-edge MERN & Next.js architectures.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    time: "2-4 Wks",
    team: "3 Devs",
    level: "Enterprise",
    tags: ["React", "Node.js", "+5"],
    link: "/services/web"
  },
  {
    id: 2,
    title: "App Development",
    badge: "⚡ Featured",
    desc: "Native and cross-platform mobile apps for iOS & Android with buttery-smooth interactions.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    time: "3-6 Wks",
    team: "4 Devs",
    level: "Pro Stack",
    tags: ["Flutter", "React Native", "+3"],
    link: "/services/app"
  },
  {
    id: 3,
    title: "UI / UX Design",
    badge: "✦ Pixel Perfect",
    desc: "Human-centric digital interface design with detailed design systems and interactive prototypes.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    time: "2-3 Wks",
    team: "2 Designers",
    level: "Figma Pro",
    tags: ["Figma", "Design System", "+4"],
    link: "/services/uiux"
  },
  {
    id: 4,
    title: "AI Automation & Bots",
    badge: "★ Next-Gen",
    desc: "Autonomous AI agents and LLM integrations that handle customer inquiries and backend tasks.",
    img: "https://i0.wp.com/cdnbunny.ubergizmo.com/wp-content/uploads/2026/06/robot-using-laptop-e1780687581672.png",
    time: "2-4 Wks",
    team: "3 Engineers",
    level: "LLM Custom",
    tags: ["OpenAI", "LangChain", "+4"],
    link: "/services/ai"
  }
];

const TOP_SERVICES_ROW_2 = [
  {
    id: 5,
    title: "E-Commerce Stores",
    badge: "★ Conversion",
    desc: "High-volume digital storefronts with rapid checkout, cart recovery, and inventory sync.",
    img: "https://www.arzaan.pk/cdn/shop/articles/online-shopping-in-Pakistan.jpg?v=1633035087",
    time: "2-4 Wks",
    team: "3 Devs",
    level: "Shopify / Custom",
    tags: ["Shopify", "Stripe", "+5"],
    link: "/services/ecom"
  },
  {
    id: 6,
    title: "Management Systems",
    badge: "★ Scalable",
    desc: "Robust internal software dashboards to automate business administration and reporting.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    time: "4-8 Wks",
    team: "5 Devs",
    level: "Fullsuite",
    tags: ["SQL", "Dashboard", "+6"],
    link: "/services/pms"
  },
  {
    id: 7,
    title: "SaaS Application",
    badge: "★ Cloud First",
    desc: "Multi-tenant software products equipped with subscription billing, roles, and API access.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    time: "6-10 Wks",
    team: "5 Devs",
    level: "SaaS Stack",
    tags: ["Next.js", "AWS", "+6"],
    link: "/services/csd"
  },
  {
    id: 8,
    title: "DevOps Engineering",
    badge: "★ CI/CD",
    desc: "Automated cloud infrastructure, zero-downtime deployment pipelines, and server monitoring.",
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    time: "1-3 Wks",
    team: "2 Engineers",
    level: "Cloud Scale",
    tags: ["Docker", "Kubernetes", "+5"],
    link: "/contact"
  }
];

const ServiceCard = ({ service }) => (
  <div className="as-card">
    <div>
      <div className="as-img-wrapper">
        <span className="as-card-badge">{service.badge}</span>
        <img src={service.img} alt={service.title} className="as-img" />
        <div className="as-img-overlay">
          <TechOverlayIcon />
        </div>
      </div>

      <div className="as-content">
        <h3 className="as-title">{service.title}</h3>
        <p className="as-desc">{service.desc}</p>

        <div className="as-metrics-row">
          <div className="as-metric-item">
            <ClockIcon />
            <span>{service.time}</span>
          </div>
          <div className="as-divider" />
          <div className="as-metric-item">
            <TeamIcon />
            <span>{service.team}</span>
          </div>
          <div className="as-divider" />
          <div className="as-metric-item">
            <LevelIcon />
            <span>{service.level}</span>
          </div>
        </div>

        <div className="as-tags-row">
          {service.tags.map((tag, i) => (
            <span key={i} className="as-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <Link to={service.link || "/services"} className="as-btn-action">
      Start Project
    </Link>
  </div>
);

const Services = () => {
  return (
    <>
      <style>{`
        .home-services-section {
          width: 100%;
          padding: 80px 0;
          background: var(--bg-main, #fcfcfd);
          font-family: var(--font-family, sans-serif);
          overflow: hidden;
          box-sizing: border-box;
        }

        .services-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px auto;
          padding: 0 20px;
        }

        .cc-service-tag {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--text-muted, #666666);
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .services-intro h2 {
           font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 10px 0;
  text-transform: uppercase;
  color: var(--text-dark, #000000);
        }

        .services-subhead {
          font-size: 1rem;
          color: var(--text-muted, #666666);
          line-height: 1.6;
        }

        /* MARQUEE CONTAINER WITH SIDE BLUR FADE EFFECTS */
        .marquee-wrapper {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15%;
          max-width: 200px;
          z-index: 10;
          pointer-events: none;
        }

        .marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--bg-main, #fcfcfd) 0%, transparent 100%);
        }

        .marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--bg-main, #fcfcfd) 0%, transparent 100%);
        }

        .marquee-row {
          display: flex;
          width: 100%;
          overflow: hidden;
          user-select: none;
        }

        .marquee-track {
          display: flex;
          gap: 24px;
          flex-shrink: 0;
          will-change: transform;
        }

        .marquee-track-left {
          animation: marqueeScrollLeft 35s linear infinite;
        }

        .marquee-track-right {
          animation: marqueeScrollRight 35s linear infinite;
        }

        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }

        @keyframes marqueeScrollRight {
          0% { transform: translateX(calc(-50% - 12px)); }
          100% { transform: translateX(0); }
        }

        /* CARD STYLING */
        .as-card {
          width: 360px;
           flex-shrink: 0;
          background: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-light, #eaeaea);
          border-radius: var(--radius-lg, 24px);
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-subtle, 0 8px 30px rgba(0,0,0,0.03));
          transition: border-color 0.3s ease, transform 0.3s ease;
          box-sizing: border-box;
        }

        .as-card:hover {
          border-color: var(--text-primary, #000000);
          transform: translateY(-6px);
        }

        .as-img-wrapper {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .as-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .as-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .as-card:hover .as-img {
          transform: scale(1.08);
        }

        .as-card:hover .as-img-overlay {
          opacity: 1;
        }

        .as-card-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
          background: rgba(255, 255, 255, 0.95);
          color: #000000;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: var(--radius-full, 100px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .as-content {
          padding: 0 4px 12px 4px;
        }

        .as-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary, #000000);
          margin: 0 0 8px 0;
          letter-spacing: -0.4px;
        }

        .as-desc {
          font-size: 0.85rem;
          color: var(--text-muted, #666666);
          line-height: 1.5;
          margin: 0 0 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .as-metrics-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-top: 1px solid var(--border-light, #f0f0f0);
          border-bottom: 1px solid var(--border-light, #f0f0f0);
          margin-bottom: 14px;
          font-size: 0.78rem;
          color: var(--text-primary, #000000);
          font-weight: 600;
        }

        .as-metric-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .as-divider {
          width: 1px;
          height: 14px;
          background: var(--border-light, #e0e0e0);
        }

        .as-tags-row {
          display: flex;
          gap: 6px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .as-pill {
          background: rgba(0, 0, 0, 0.04);
          color: var(--text-primary, #000000);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .as-btn-action {
          width: 100%;
          height: 44px;
          background: var(--text-primary, #000000);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-full, 100px);
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .as-btn-action:hover {
          background: #222222;
          transform: scale(1.01);
        }

        /* BOTTOM CTA CONTAINER */
        .services-footer-cta {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }

        .show-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          background: var(--text-primary, #000000);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 700;
          border-radius: var(--radius-full, 100px);
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .show-all-btn:hover {
          background: #222222;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        /* MOBILE RESPONSIVE TUNING */
        @media (max-width: 768px) {
          .home-services-section {
            padding: 50px 0;
          }

          .services-intro {
            margin-bottom: 30px;
          }

          .services-intro h2 {
            font-size: 1.8rem;
          }

          .marquee-wrapper::before,
          .marquee-wrapper::after {
            width: 8%;
          }

          .as-card {
            width: 270px;
            padding: 12px;
            border-radius: 18px;
          }

          .as-img-wrapper {
            height: 130px;
            margin-bottom: 12px;
          }

          .as-card-badge {
            font-size: 0.65rem;
            padding: 4px 8px;
            top: 8px;
            left: 8px;
          }

          .as-title {
            font-size: 1rem;
            margin-bottom: 4px;
          }

          .as-desc {
            font-size: 0.78rem;
            margin-bottom: 12px;
          }

          .as-metrics-row {
            padding: 8px 0;
            font-size: 0.68rem;
            margin-bottom: 10px;
          }

          .as-pill {
            font-size: 0.68rem;
            padding: 3px 8px;
          }

          .as-btn-action {
            height: 38px;
            font-size: 0.78rem;
          }

          .show-all-btn {
            padding: 14px 28px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      <section className="home-services-section">
        {/* Intro Header */}
        <div className="services-intro">
          <span className="cc-service-tag">EXPERT CAPABILITIES</span>
          <h2>What We Do Best</h2>
          <p className="services-subhead">
            Tailored digital solutions built with cutting-edge engineering and modern design.
          </p>
        </div>

        {/* Continuous Dual-Row Marquee */}
        <div className="marquee-wrapper">
          {/* Row 1: Left to Right */}
          <div className="marquee-row">
            <div className="marquee-track marquee-track-left">
              {[...TOP_SERVICES_ROW_1, ...TOP_SERVICES_ROW_1].map((service, index) => (
                <ServiceCard key={`r1-${service.id}-${index}`} service={service} />
              ))}
            </div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="marquee-row">
            <div className="marquee-track marquee-track-right">
              {[...TOP_SERVICES_ROW_2, ...TOP_SERVICES_ROW_2].map((service, index) => (
                <ServiceCard key={`r2-${service.id}-${index}`} service={service} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="services-footer-cta">
          <Link to="/services" className="show-all-btn">
            Show All Services →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;