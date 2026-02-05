"use client";

import { memo } from "react";
import Link from "next/link";

function USPSection({ uspData: propUspData }) {
  const uspData = propUspData || null;

  const benefitsData = uspData && Array.isArray(uspData) && uspData.length > 0
    ? uspData.map((benefit) => ({
        id: benefit.id?.toString() || `usp-${benefit.id}`,
        title: benefit.title,
        icon: benefit.icon || "",
        description: benefit.description,
      }))
    : [{
        id: "manufacturing", title: "Advanced Manufacturing", icon: "🏭",
        description: "YNM Safety is a leading manufacturer of hot thermoplastic road marking paints, cold plastic paints, and water-based paints, supported by advanced metal fabrication facilities. Our manufacturing capabilities also include retro reflective signages, crash barriers, and engineered infrastructure products for highway and urban road projects."
      }, { id: "certified", title: "Quality Certified", icon: "✓", description: "All products at YNM Safety are manufactured under strict quality standards to ensure durability, visibility, and safety performance. As a trusted road safety products manufacturer, we deliver ISO-compliant paints, signages, and crash barrier systems designed for long-term infrastructure use." },
      { id: "export", title: "Global Export Network", icon: "🌍", description: "YNM Safety is a reliable global exporter of road marking paints, metal beam crash barriers, and road safety solutions. We supply W beam crash barriers, double W beam, thrie beam, roller crash barriers, and signages to clients across international markets." },
      { id: "customization", title: "Custom Solutions", icon: "🎨", description: "We provide customized manufacturing solutions including bespoke paint formulations, custom metal fabrication, gantry and cantilever structures, and informative signage systems. YNM Safety supports infrastructure projects with flexible production, technical expertise, and end-to-end road safety manufacturing solutions." }];

  return (
    <section id="why-choose-ynm">
      {/* Neon Particles */}
      <div className="neon-particles">
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
        <div className="neon-particle" />
      </div>

      {/* Decorative elements */}
      <div className="why-deco why-deco-1"></div>
      <div className="why-deco why-deco-2"></div>
      
      <div className="why-header">
        <Link href="/about" className="why-tag">About Us</Link>
        <h2>Why Choose Us</h2>
        <div className="why-bar"></div>
      </div>

      <div className="why-showcase">
        {benefitsData.map((benefit, index) => (
          <div 
            key={benefit.id} 
            className="why-showcase-item"
            data-index={index}
          >
            <div className="why-showcase-bg"></div>
            <div className="why-showcase-content">
              <div className="why-showcase-number">0{index + 1}</div>
              <div className="why-showcase-icon">{benefit.icon}</div>
              <div className="why-showcase-text">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
            <div className="why-showcase-overlay"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(USPSection);
