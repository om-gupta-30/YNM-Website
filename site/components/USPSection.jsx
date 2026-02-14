"use client";

import { memo, useState, useEffect } from "react";
import Link from "next/link";

function USPSection({ uspData: propUspData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const uspData = propUspData || null;

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const benefitsData = uspData && Array.isArray(uspData) && uspData.length > 0
    ? uspData.map((benefit) => ({
        id: benefit.id?.toString() || `usp-${benefit.id}`,
        title: benefit.title,
        icon: benefit.icon || "",
        description: benefit.description,
      }))
    : [
        {
          id: "manufacturing",
          title: "Hot Thermoplastic Paint Manufacturers",
          icon: "🏭",
          description: "YNM Safety is a leading hot thermoplastic paint manufacturer producing premium cold plastic paint, road marking paints, and metal beam crash barriers. Our advanced manufacturing facility ensures ISO-certified road safety products built for durability and compliance."
        },
        {
          id: "certified",
          title: "ISO Certified Road Safety Products",
          icon: "✅",
          description: "As trusted hot thermoplastic paint manufacturers, YNM Safety maintains strict quality standards. Every cold plastic paint, metal beam crash barrier, and road safety product is ISO certified and thoroughly tested for highway safety compliance."
        },
        {
          id: "export",
          title: "Global Export Network - 50+ Countries",
          icon: "🌍",
          description: "YNM exports hot thermoplastic paint, cold plastic paint, and metal beam crash barriers to 50+ countries. Our experienced export team delivers road safety products worldwide with reliable shipping and on-time delivery."
        },
        {
          id: "customization",
          title: "Custom Road Safety Solutions",
          icon: "🎨",
          description: "YNM Safety provides customized hot thermoplastic paint, cold plastic paint formulations, and metal beam crash barrier solutions. We manufacture tailored road safety products to meet your specific project requirements and safety standards."
        }
      ];

  return (
    <section id="why-choose-ynm" className="usp-section-new">
      {/* Background Elements */}
      <div className="usp-bg-pattern" />
      <div className="usp-bg-glow" />
      
      <div className="usp-container">
        {/* Header */}
        <div className="usp-header">
          <Link 
            href="/about" 
            className="usp-tag"
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#74060D',
              background: '#C9A24D',
              padding: '8px 20px',
              borderRadius: '30px',
              border: '2px solid #C9A24D',
              textDecoration: 'none',
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#E6D3A3';
              e.target.style.borderColor = '#E6D3A3';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#C9A24D';
              e.target.style.borderColor = '#C9A24D';
              e.target.style.transform = 'translateY(0)';
            }}
          >About Us</Link>
          <h2>Why Choose Us</h2>
          <p className="usp-subtitle">Four pillars that define our commitment to excellence</p>
        </div>

        {/* Main Content - Interactive Cards */}
        <div className="usp-content">
          {/* Left - Navigation Pills */}
          <div className="usp-nav">
            {benefitsData.map((benefit, index) => (
              <button
                key={benefit.id}
                className={`usp-nav-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="usp-nav-number">0{index + 1}</span>
                <span className="usp-nav-icon">{benefit.icon}</span>
                <span className="usp-nav-title">{benefit.title}</span>
                <span className="usp-nav-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            ))}
          </div>

          {/* Right - Content Display */}
          <div className="usp-display">
            <div className="usp-display-card">
              <div className="usp-display-header">
                <div className="usp-display-icon">{benefitsData[activeIndex].icon}</div>
                <div className="usp-display-number">0{activeIndex + 1}</div>
              </div>
              <h3 className="usp-display-title">{benefitsData[activeIndex].title}</h3>
              <p className="usp-display-desc">{benefitsData[activeIndex].description}</p>
              <div className="usp-display-decoration">
                <div className="usp-deco-line" />
                <div className="usp-deco-dot" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards - Horizontal Scroll */}
        <div className="usp-mobile-cards">
          {benefitsData.map((benefit, index) => (
            <div key={benefit.id} className="usp-mobile-card">
              <div className="usp-mobile-top">
                <span className="usp-mobile-number">0{index + 1}</span>
                <span className="usp-mobile-icon">{benefit.icon}</span>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .usp-section-new {
          position: relative;
          width: 100%;
          padding: 100px 5%;
          background: linear-gradient(180deg, #74060D 0%, #5A0409 100%);
          overflow: hidden;
        }

        .usp-bg-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(201, 162, 77, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 162, 77, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .usp-bg-glow {
          position: absolute;
          top: 20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(201, 162, 77, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .usp-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .usp-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .usp-tag {
          display: inline-block !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.3em !important;
          color: #74060D !important;
          background: #C9A24D !important;
          padding: 8px 20px !important;
          border-radius: 30px !important;
          border: 2px solid #C9A24D !important;
          text-decoration: none !important;
          margin-bottom: 20px !important;
          transition: all 0.3s ease !important;
        }

        .usp-tag:hover {
          background: #E6D3A3 !important;
          color: #74060D !important;
          border-color: #E6D3A3 !important;
          transform: translateY(-2px) !important;
        }

        .usp-header h2 {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .usp-subtitle {
          font-size: 16px;
          color: rgba(230, 211, 163, 0.8);
          margin: 0;
        }

        /* Main Content Layout */
        .usp-content {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 40px;
          align-items: stretch;
        }

        /* Navigation Pills */
        .usp-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .usp-nav-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(201, 162, 77, 0.15);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
        }

        .usp-nav-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(201, 162, 77, 0.3);
          transform: translateX(8px);
        }

        .usp-nav-item.active {
          background: linear-gradient(135deg, rgba(201, 162, 77, 0.15) 0%, rgba(201, 162, 77, 0.05) 100%);
          border-color: #C9A24D;
          box-shadow: 0 8px 32px rgba(201, 162, 77, 0.2);
        }

        .usp-nav-number {
          font-size: 14px;
          font-weight: 800;
          color: rgba(201, 162, 77, 0.4);
          min-width: 28px;
          transition: color 0.3s ease;
        }

        .usp-nav-item.active .usp-nav-number {
          color: #C9A24D;
        }

        .usp-nav-icon {
          font-size: 24px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201, 162, 77, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .usp-nav-item.active .usp-nav-icon {
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          box-shadow: 0 4px 15px rgba(201, 162, 77, 0.4);
        }

        .usp-nav-title {
          flex: 1;
          font-size: 16px;
          font-weight: 600;
          color: rgba(247, 243, 234, 0.7);
          transition: color 0.3s ease;
        }

        .usp-nav-item.active .usp-nav-title {
          color: #F7F3EA;
        }

        .usp-nav-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: #C9A24D;
        }

        .usp-nav-item.active .usp-nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* Display Card */
        .usp-display {
          display: flex;
          align-items: stretch;
        }

        .usp-display-card {
          flex: 1;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 248, 244, 0.98) 100%);
          border-radius: 24px;
          padding: 50px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
        }

        .usp-display-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .usp-display-icon {
          font-size: 48px;
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          border-radius: 20px;
          box-shadow: 0 12px 30px rgba(116, 6, 13, 0.3);
        }

        .usp-display-number {
          font-size: 100px;
          font-weight: 900;
          color: rgba(201, 162, 77, 0.1);
          line-height: 1;
          font-family: 'Arial', sans-serif;
        }

        .usp-display-title {
          font-size: 32px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .usp-display-desc {
          font-size: 17px;
          line-height: 1.8;
          color: #5a4a4a;
          margin: 0;
        }

        .usp-display-decoration {
          position: absolute;
          bottom: 40px;
          right: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .usp-deco-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #C9A24D, transparent);
          border-radius: 2px;
        }

        .usp-deco-dot {
          width: 10px;
          height: 10px;
          background: #C9A24D;
          border-radius: 50%;
        }

        /* Mobile Cards - Hidden on Desktop */
        .usp-mobile-cards {
          display: none;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .usp-content {
            grid-template-columns: 350px 1fr;
            gap: 30px;
          }

          .usp-display-card {
            padding: 40px;
          }

          .usp-display-number {
            font-size: 80px;
          }

          .usp-display-title {
            font-size: 28px;
          }
        }

        @media (max-width: 900px) {
          .usp-section-new {
            padding: 80px 5%;
          }

          /* Hide desktop layout, show mobile cards */
          .usp-content {
            display: none;
          }

          .usp-mobile-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .usp-mobile-card {
            background: rgba(255, 255, 255, 0.98);
            border-radius: 16px;
            padding: 28px 24px;
            position: relative;
            overflow: hidden;
          }

          .usp-mobile-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #C9A24D, #E6D3A3);
          }

          .usp-mobile-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
          }

          .usp-mobile-number {
            font-size: 36px;
            font-weight: 900;
            color: rgba(201, 162, 77, 0.15);
            line-height: 1;
          }

          .usp-mobile-icon {
            font-size: 28px;
            width: 52px;
            height: 52px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #74060D, #9A1B2E);
            border-radius: 12px;
          }

          .usp-mobile-card h3 {
            font-size: 18px;
            font-weight: 700;
            color: #74060D;
            margin: 0 0 12px;
          }

          .usp-mobile-card p {
            font-size: 14px;
            line-height: 1.6;
            color: #5a4a4a;
            margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }

        @media (max-width: 600px) {
          .usp-section-new {
            padding: 60px 20px;
          }

          .usp-header {
            margin-bottom: 40px;
          }

          .usp-mobile-cards {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .usp-mobile-card {
            padding: 24px 20px;
          }

          .usp-mobile-card h3 {
            font-size: 17px;
          }

          .usp-mobile-card p {
            font-size: 13px;
            -webkit-line-clamp: 3;
          }
        }
      `}</style>
    </section>
  );
}

export default memo(USPSection);
