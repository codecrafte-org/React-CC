import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Layers, 
  Terminal, 
  Cpu, 
  Boxes, 
  FileCode2, 
  Workflow, 
  Globe, 
  Palette, 
  Cloud 
} from 'lucide-react';

const TechArsenal = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const stackCategories = [
    { id: 'all', label: 'All Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database & Cloud' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const stackItems = [
    { name: 'React', category: 'frontend', icon: <Code2 size={26} />, desc: 'Frontend UI Library' },
     { name: 'Node.js', category: 'backend', icon: <Server size={26} />, desc: 'JS Runtime Engine' },
    { name: 'Express.js', category: 'backend', icon: <Layers size={26} />, desc: 'Backend Web Framework' },
    { name: 'MongoDB', category: 'database', icon: <Database size={26} />, desc: 'NoSQL Database' },
    { name: 'Mongo Atlas', category: 'database', icon: <Cloud size={26} />, desc: 'Cloud DB Platform' },
    { name: 'Postman', category: 'tools', icon: <Workflow size={26} />, desc: 'API Testing & Design' },
    { name: 'TypeScript', category: 'frontend', icon: <FileCode2 size={26} />, desc: 'Type-Safe JavaScript' },
    { name: 'JavaScript', category: 'frontend', icon: <Terminal size={26} />, desc: 'Core Language Engine' },
     { name: 'Docker', category: 'tools', icon: <Boxes size={26} />, desc: 'App Containerization' },
   ];

  const filteredItems = activeCategory === 'all' 
    ? stackItems 
    : stackItems.filter(item => item.category === activeCategory);

  return (
    <div className="ta-wrapper">
      <style>{`
        .ta-wrapper {
          --ta-bg-main: #ffffff;
          --ta-bg-card: #fafafa;
          --ta-border: #eaeaea;
          --ta-border-hover: #0070f3;
          --ta-text-primary: #111111;
          --ta-text-secondary: #666666;
          --ta-accent: #0070f3;
          --ta-accent-glow: rgba(0, 112, 243, 0.2);

          width: 100%;
          background: var(--ta-bg-main);
          color: var(--ta-text-primary);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
          padding: 90px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ta-wrapper * {
          box-sizing: border-box;
        }

        /* HEADER */
        .ta-header {
          text-align: center;
          max-width: 650px;
          margin-bottom: 40px;
        }

        .ta-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--ta-accent);
          letter-spacing: 4px;
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 12px;
        }

        .ta-header h2 {
          font-size: clamp(2rem, 5vw, 3.5rem);
  margin: 10px 0;
  text-transform: uppercase;
  color: var(--text-dark, #000000);
        }

        .ta-header h2 span {
          color: var(--ta-accent);
        }

        .ta-header p {
          color: var(--ta-text-secondary);
          font-size: 1rem;
          margin: 0;
        }

        /* CATEGORY FILTER TABS */
        .ta-tabs-container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 60px;
        }

        .ta-tab-btn {
          padding: 8px 20px;
          border-radius: 100px;
          border: 1px solid var(--ta-border);
          background: var(--ta-bg-card);
          color: var(--ta-text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ta-tab-btn:hover {
          border-color: var(--ta-accent);
          color: var(--ta-accent);
        }

        .ta-tab-btn.active {
          background: var(--ta-accent);
          border-color: var(--ta-accent);
          color: #ffffff;
          box-shadow: 0 4px 20px var(--ta-accent-glow);
        }

        /* MAC OS DOCK STYLING */
        .ta-dock-wrapper {
          width: 100%;
          max-width: 1050px;
          display: flex;
          justify-content: center;
        }

        .ta-dock {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 20px 32px;
          background: rgba(250, 250, 250, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--ta-border);
          border-radius: 36px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
          flex-wrap: wrap;
          justify-content: center;
        }

        /* DOCK ITEM */
        .ta-dock-item {
          position: relative;
          cursor: pointer;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .ta-icon-box {
          width: 64px;
          height: 64px;
          background: #ffffff;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--ta-border);
          color: var(--ta-text-primary);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* TOOLTIP POPUP */
        .ta-tooltip {
          position: absolute;
          top: -65px;
          left: 50%;
          transform: translateX(-50%) scale(0.85);
          background: #111111;
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 12px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          text-align: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          z-index: 10;
        }

        .ta-tooltip-title {
          font-size: 0.8rem;
          font-weight: 700;
          display: block;
        }

        .ta-tooltip-desc {
          font-size: 0.68rem;
          color: #a1a1aa;
          display: block;
          margin-top: 2px;
        }

        .ta-tooltip::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background: #111111;
        }

        /* DOCK HOVER EFFECTS */
        .ta-dock-item:hover {
          transform: translateY(-16px) scale(1.3);
          margin: 0 10px;
        }

        .ta-dock-item:hover .ta-icon-box {
          background: var(--ta-accent);
          border-color: var(--ta-accent);
          color: #ffffff;
          box-shadow: 0 12px 30px var(--ta-accent-glow);
        }

        .ta-dock-item:hover .ta-tooltip {
          opacity: 1;
          transform: translateX(-50%) scale(1);
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 850px) {
          .ta-dock {
            padding: 16px;
            gap: 12px;
            border-radius: 28px;
          }
          .ta-icon-box {
            width: 52px;
            height: 52px;
            border-radius: 16px;
          }
          .ta-dock-item:hover {
            transform: translateY(-8px) scale(1.15);
            margin: 0 2px;
          }
        }
      `}</style>

      {/* SECTION HEADER */}
      <section className="ta-header">
         <h2>Tools We <span>Weaponize</span></h2>
        <p>A battle-tested arsenal built for scale, performance, and modern web architectures.</p>
      </section>

      {/* FILTER TABS */}
      <div className="ta-tabs-container">
        {stackCategories.map((cat) => (
          <button
            key={cat.id}
            className={`ta-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* MAC OS DOCK */}
      <div className="ta-dock-wrapper">
        <div className="ta-dock">
          {filteredItems.map((item, index) => (
            <div key={index} className="ta-dock-item">
              <div className="ta-icon-box">
                {item.icon}
              </div>
              <div className="ta-tooltip">
                <span className="ta-tooltip-title">{item.name}</span>
                <span className="ta-tooltip-desc">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechArsenal;