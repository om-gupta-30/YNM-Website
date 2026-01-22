"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function DirectorSection({ directorData: propDirectorData }) {
  const [directorData, setDirectorData] = useState(propDirectorData || null);

  useEffect(() => {
    if (propDirectorData) setDirectorData(propDirectorData);
  }, [propDirectorData]);

  // Don't render if no data
  if (!directorData) {
    return null;
  }

  const photoSrc = directorData.photo || "/directorphoto.png";

  return (
    <section id="our-director" className="director-section">
      {/* Neon Particles */}
      <div className="neon-particles">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="neon-particle" />
        ))}
      </div>

      {/* Header */}
      <div className="director-header">
        <span className="director-tag">Our Director</span>
        <h2>What Our Director Says</h2>
        <p>Hear from our Managing Director about our mission, values, and commitment to excellence</p>
        <div className="director-line" />
      </div>

      {/* Director Card */}
      <div className="director-card-wrapper">
        <div className="director-card">
          <div className="director-card-bg" />
          
          {/* Photo Section */}
          <div className="director-photo-section">
            <div className="director-photo-wrapper">
              <div className="director-photo-border" />
              <div className="director-photo">
                <Image
                  src={photoSrc}
                  alt={directorData.name}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 18%",
                  }}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
              <div className="director-photo-glow" />
            </div>
          </div>

          {/* Content Section */}
          <div className="director-content">
            <div className="director-quote-icon">&quot;</div>
            <p className="director-text">{directorData.quote}</p>
            
            <div className="director-info">
              <h4 className="director-name">{directorData.name}</h4>
              <p className="director-role">{directorData.role}</p>
              <span className="director-department">{directorData.department}</span>
            </div>
          </div>
          <div className="director-card-accent" />
        </div>
      </div>
    </section>
  );
}
