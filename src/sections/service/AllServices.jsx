import React, { useState, useEffect, useRef, useMemo } from "react";

// --- PURE SVG ICONS FOR TECH METRICS & HOVER OVERLAYS ---
const TechOverlayIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const TeamIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

const LevelIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

// 21 SERVICES WITH CATEGORY TAGGING
const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    category: "Development",
    badge: "★ High Demand",
    desc: "Custom high-performance web applications built with cutting-edge MERN & Next.js architectures.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    time: "2-4 Wks",
    team: "3 Devs",
    level: "Enterprise",
    tags: ["React", "Node.js", "+5"],
    orderClass: "anim-left"
  },
  {
    id: 2,
    title: "App Development",
    category: "Development",
    badge: "⚡ Featured",
    desc: "Native and cross-platform mobile apps for iOS & Android with buttery-smooth interactions.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    time: "3-6 Wks",
    team: "4 Devs",
    level: "Pro Stack",
    tags: ["Flutter", "React Native", "+3"],
    orderClass: "anim-center"
  },
  {
    id: 3,
    title: "WordPress Architecture",
    category: "Development",
    badge: "✦ Rapid Launch",
    desc: "Headless & custom CMS solutions tailored for maximum page speed and effortless management.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    time: "1-2 Wks",
    team: "2 Devs",
    level: "Custom CMS",
    tags: ["PHP", "Elementor", "+4"],
    orderClass: "anim-right"
  },
  {
    id: 4,
    title: "Management Systems",
    category: "Software",
    badge: "★ Scalable",
    desc: "Robust internal software dashboards to automate business administration and reporting.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    time: "4-8 Wks",
    team: "5 Devs",
    level: "Fullsuite",
    tags: ["SQL", "Dashboard", "+6"],
    orderClass: "anim-left"
  },
  {
    id: 5,
    title: "CRM Development",
    category: "Software",
    badge: "⚡ Automation",
    desc: "Custom customer relationship platforms with pipeline management and instant analytics.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    time: "3-5 Wks",
    team: "3 Devs",
    level: "Advanced",
    tags: ["API", "Analytics", "+4"],
    orderClass: "anim-center"
  },
  {
    id: 6,
    title: "ERP Systems",
    category: "Software",
    badge: "✦ Heavy Duty",
    desc: "End-to-end operational software connecting inventory, supply chain, and financials.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    time: "6-12 Wks",
    team: "6 Devs",
    level: "Enterprise",
    tags: ["Postgres", "Python", "+8"],
    orderClass: "anim-right"
  },
  {
    id: 7,
    title: "POS Systems",
    category: "Software",
    badge: "★ Retail",
    desc: "Ultra-fast billing and checkout software optimized for hardware integration and touchscreens.",
    img: "https://velosiaims.com/wp-content/uploads/2022/09/pos-system-features-1024x550.jpeg",
    time: "2-4 Wks",
    team: "3 Devs",
    level: "Realtime",
    tags: ["Electron", "Stripe", "+3"],
    orderClass: "anim-left"
  },
  {
    id: 8,
    title: "Custom Software",
    category: "Software",
    badge: "⚡ Tailored",
    desc: "Bespoke digital architecture designed from scratch to solve unique business bottlenecks.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    time: "4-10 Wks",
    team: "4 Devs",
    level: "Bespoke",
    tags: ["Microservices", "Docker", "+5"],
    orderClass: "anim-center"
  },
  {
    id: 9,
    title: "Business Applications",
    category: "Software",
    badge: "✦ Workflow",
    desc: "Streamlined operational tools built to improve employee collaboration and daily tasks.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    time: "3-5 Wks",
    team: "3 Devs",
    level: "Mid-Market",
    tags: ["Vue", "Firebase", "+4"],
    orderClass: "anim-right"
  },
  {
    id: 10,
    title: "SaaS Application",
    category: "Development",
    badge: "★ Cloud First",
    desc: "Multi-tenant software products equipped with subscription billing, roles, and API access.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    time: "6-10 Wks",
    team: "5 Devs",
    level: "SaaS Stack",
    tags: ["Next.js", "AWS", "+6"],
    orderClass: "anim-left"
  },
  {
    id: 11,
    title: "Portfolio Websites",
    category: "Design",
    badge: "⚡ Showcase",
    desc: "High-converting interactive personal and agency showcases with 3D/isometric visual art.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    time: "1 Wk",
    team: "1 Dev",
    level: "Premium UI",
    tags: ["Three.js", "GSAP", "+2"],
    orderClass: "anim-center"
  },
  {
    id: 12,
    title: "UI / UX Design",
    category: "Design",
    badge: "✦ Pixel Perfect",
    desc: "Human-centric digital interface design with detailed design systems and interactive prototypes.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    time: "2-3 Wks",
    team: "2 Designers",
    level: "Figma Pro",
    tags: ["Figma", "Design System", "+4"],
    orderClass: "anim-right"
  },
  {
    id: 13,
    title: "DevOps Engineering",
    category: "Software",
    badge: "★ CI/CD",
    desc: "Automated cloud infrastructure, zero-downtime deployment pipelines, and server monitoring.",
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80",
    time: "1-3 Wks",
    team: "2 Engineers",
    level: "Cloud Scale",
    tags: ["Docker", "Kubernetes", "+5"],
    orderClass: "anim-left"
  },
  {
    id: 14,
    title: "Data Analytics & Insights",
    category: "Software",
    badge: "⚡ BI Dashboards",
    desc: "Transform raw data into strategic growth charts with custom machine learning pipelines.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    time: "2-4 Wks",
    team: "2 Data Sci",
    level: "AI Driven",
    tags: ["Python", "Tableau", "+3"],
    orderClass: "anim-center"
  },
  {
    id: 15,
    title: "Meta Ads & Paid Ads",
    category: "Marketing",
    badge: "✦ High ROI",
    desc: "Data-driven ad creatives and target funnel strategies engineered to maximize campaign ROI.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
    time: "Ongoing",
    team: "2 Marketers",
    level: "Growth Stack",
    tags: ["Meta Ads", "Analytics", "+4"],
    orderClass: "anim-right"
  },
  {
    id: 16,
    title: "E-Commerce Stores",
    category: "Development",
    badge: "★ Conversion",
    desc: "High-volume digital storefronts with rapid checkout, cart recovery, and inventory sync.",
    img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80",
    time: "2-4 Wks",
    team: "3 Devs",
    level: "Shopify / Custom",
    tags: ["Shopify", "Stripe", "+5"],
    orderClass: "anim-left"
  },
  {
    id: 17,
    title: "PPT Deck & Pitch Slides",
    category: "Design",
    badge: "⚡ Investor Ready",
    desc: "Executive-level pitch decks crafted to secure venture capital funding and major clients.",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    time: "3-5 Days",
    team: "1 Designer",
    level: "Executive",
    tags: ["Pitch Deck", "Vector", "+2"],
    orderClass: "anim-center"
  },
  {
    id: 18,
    title: "Social Media Marketing",
    category: "Marketing",
    badge: "✦ Engagement",
    desc: "Content calendars, brand voice curation, and organic community growth engines.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    time: "Monthly",
    team: "2 Creatives",
    level: "Full Organic",
    tags: ["Branding", "Content", "+3"],
    orderClass: "anim-right"
  },
  {
    id: 19,
    title: "AI Automation & Bots",
    category: "Software",
    badge: "★ Next-Gen",
    desc: "Autonomous AI agents and LLM integrations that handle customer inquiries and backend tasks.",
    img: "https://i0.wp.com/cdnbunny.ubergizmo.com/wp-content/uploads/2026/06/robot-using-laptop-e1780687581672.png",
    time: "2-4 Wks",
    team: "3 Engineers",
    level: "LLM Custom",
    tags: ["OpenAI", "LangChain", "+4"],
    orderClass: "anim-left"
  },
  {
    id: 20,
    title: "Video Editing & VFX",
    category: "Design",
    badge: "⚡ High Quality",
    desc: "Cinematic commercial reels, promotional edits, and dynamic visual effects for digital media.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
    time: "3-7 Days",
    team: "1 Editor",
    level: "4K Render",
    tags: ["Premiere", "After Effects", "+3"],
    orderClass: "anim-center"
  },
  {
    id: 21,
    title: "Graphic Design",
    category: "Design",
    badge: "✦ Brand Identity",
    desc: "Comprehensive visual branding, vector assets, logos, and marketing design collateral.",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    time: "1-2 Wks",
    team: "2 Designers",
    level: "Identity Pro",
    tags: ["Illustrator", "Photoshop", "+4"],
    orderClass: "anim-right"
  }
];

const CATEGORIES = ["All", "Development", "Software", "Design", "Marketing"];

const AllServices = () => {
  const cardsRef = useRef([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // DYNAMIC REAL-TIME FILTER LOGIC
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        selectedCategory === "All" || service.category === selectedCategory;

      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        service.title.toLowerCase().includes(query) ||
        service.desc.toLowerCase().includes(query) ||
        service.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  // INTERSECTION OBSERVER FOR STAGGERED FADE-UP ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("as-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredServices]);

  return (
    <>
      <style>{`
        .as-wrapper {
          width: 100%;
          padding: 80px 6%;
          background: var(--bg-main, #fcfcfd);
          font-family: var(--font-family, sans-serif);
          box-sizing: border-box;
        }

        .as-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        /* RIGHT ALIGNED TOOLBAR CONTAINER */
        .as-toolbar-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        /* LIVE SEARCH BAR */
        .as-search-box {
          position: relative;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--border-light, #eaeaea);
          border-radius: 100px;
          padding: 8px 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          width: 260px;
        }

        .as-search-box:focus-within {
          border-color: #000000;
          box-shadow: 0 6px 20px rgba(0,0,0,0.06);
        }

        .as-search-icon {
          color: #888888;
          margin-right: 10px;
          display: flex;
          align-items: center;
        }

        .as-search-input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.88rem;
          color: #000000;
          width: 100%;
        }

        /* CATEGORY PILLS */
        .as-category-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .as-category-bar::-webkit-scrollbar {
          display: none;
        }

        .as-cat-btn {
          background: #ffffff;
          border: 1px solid var(--border-light, #eaeaea);
          color: #555555;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 100px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .as-cat-btn:hover {
          border-color: #000000;
          color: #000000;
        }

        .as-cat-btn.active {
          background: #000000;
          color: #ffffff;
          border-color: #000000;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        /* 3/3 LAPTOP GRID, 2/2 MOBILE GRID */
        .as-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        /* CARD MAIN STRUCTURE WITH SMOOTH FADE TRANSITIONS */
        .as-card {
          background: var(--bg-surface, #ffffff);
          border: 1px solid var(--border-light, #eaeaea);
          border-radius: var(--radius-lg, 24px);
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--shadow-subtle, 0 8px 30px rgba(0,0,0,0.03));
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease;
        }

        .as-card:hover {
          border-color: var(--text-primary, #000000);
          transform: translateY(-6px) !important;
        }

        /* STAGGERED ANIMATION VISIBILITY */
        .as-card.as-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* TOP BANNER IMAGE CONTAINER */
        .as-img-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .as-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, filter 0.5s ease;
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

        /* CARD TEXT CONTENT */
        .as-content {
          padding: 0 8px 12px 8px;
        }

        .as-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary, #000000);
          margin: 0 0 10px 0;
          letter-spacing: -0.4px;
        }

        .as-desc {
          font-size: 0.9rem;
          color: var(--text-muted, #666666);
          line-height: 1.5;
          margin: 0 0 20px 0;
        }

        /* METRICS ROW */
        .as-metrics-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-top: 1px solid var(--border-light, #f0f0f0);
          border-bottom: 1px solid var(--border-light, #f0f0f0);
          margin-bottom: 18px;
          font-size: 0.8rem;
          color: var(--text-primary, #000000);
          font-weight: 600;
        }

        .as-metric-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .as-divider {
          width: 1px;
          height: 16px;
          background: var(--border-light, #e0e0e0);
        }

        /* TAG PILLS ROW */
        .as-tags-row {
          display: flex;
          gap: 8px;
          margin-bottom: 22px;
        }

        .as-pill {
          background: rgba(0, 0, 0, 0.04);
          color: var(--text-primary, #000000);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 100px;
        }

        /* BOTTOM CTA BUTTON */
        .as-btn-action {
          width: 100%;
          height: 48px;
          background: var(--text-primary, #000000);
          color: #ffffff;
          border: none;
          border-radius: var(--radius-full, 100px);
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .as-btn-action:hover {
          background: #222222;
          transform: scale(1.01);
        }

        /* NO RESULT CUSTOM CARD */
        .as-custom-fallback {
          grid-column: 1 / -1;
          background: #ffffff;
          border: 2px dashed #e0e0e0;
          border-radius: 24px;
          padding: 50px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.4s ease-in-out;
        }

        .as-custom-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #000000;
          margin: 0 0 10px 0;
        }

        .as-custom-desc {
          font-size: 0.95rem;
          color: #666666;
          max-width: 500px;
          margin: 0 0 24px 0;
          line-height: 1.5;
        }

        .as-custom-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          color: #ffffff;
          padding: 14px 32px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.3s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .as-custom-btn:hover {
          background: #222222;
          transform: translateY(-2px);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* MOBILE RESPONSIVE (STRICTLY 2/2 GRID) */
        @media (max-width: 768px) {
          .as-wrapper {
            padding: 40px 3%;
          }

          .as-toolbar-row {
            justify-content: flex-start;
            flex-direction: column-reverse;
            align-items: stretch;
          }

          .as-search-box {
            width: 100%;
            box-sizing: border-box;
          }

          .as-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .as-card {
            padding: 10px;
            border-radius: 16px;
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
            font-size: 0.98rem;
            margin-bottom: 6px;
          }

          .as-desc {
            font-size: 0.78rem;
            line-height: 1.3;
            margin-bottom: 12px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .as-metrics-row {
            padding: 8px 0;
            font-size: 0.68rem;
            margin-bottom: 12px;
          }

          .as-pill {
            font-size: 0.68rem;
            padding: 3px 8px;
          }

          .as-btn-action {
            height: 38px;
            font-size: 0.78rem;
          }
        }
      `}</style>

      <section className="as-wrapper">
        <div className="as-container">
          {/* RIGHT-ALIGNED TOOLBAR: LIVE SEARCH + CATEGORY PILLS */}
          <div className="as-toolbar-row">
            {/* SEARCH INPUT */}
            <div className="as-search-box">
              <span className="as-search-icon">
                <SearchIcon />
              </span>
              <input
                type="text"
                className="as-search-input"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* CATEGORY BAR */}
            <div className="as-category-bar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`as-cat-btn ${
                    selectedCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* SERVICES GRID OR CUSTOM FALLBACK */}
          <div className="as-grid">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => (
                <div
                  key={service.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="as-card"
                >
                  <div>
                    {/* TOP IMAGE WITH HOVER OVERLAY & ICON */}
                    <div className="as-img-wrapper">
                      <span className="as-card-badge">{service.badge}</span>
                      <img
                        src={service.img}
                        alt={service.title}
                        className="as-img"
                      />
                      <div className="as-img-overlay">
                        <TechOverlayIcon />
                      </div>
                    </div>

                    {/* TITLE & DESCRIPTION */}
                    <div className="as-content">
                      <h3 className="as-title">{service.title}</h3>
                      <p className="as-desc">{service.desc}</p>

                      {/* METRICS ROW (TIME | TEAM | LEVEL) */}
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

                      {/* TECH TAG PILLS */}
                      <div className="as-tags-row">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="as-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM BUTTON */}
                  <button className="as-btn-action">Start Project</button>
                </div>
              ))
            ) : (
              /* CUSTOM SERVICE REQUEST FALLBACK */
              <div className="as-custom-fallback">
                <h3 className="as-custom-title">
                  Looking for a Custom Solution?
                </h3>
                <p className="as-custom-desc">
                  We didn't find exact matches for "<strong>{searchTerm}</strong>". However, we engineer custom software & bespoke digital services tailored to your exact requirements.
                </p>
                <a href="#contact" className="as-custom-btn">
                  Request Custom Service →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllServices;