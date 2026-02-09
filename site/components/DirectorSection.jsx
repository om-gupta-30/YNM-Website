"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DirectorSection({ directorData: propDirectorData }) {
  const [directorData, setDirectorData] = useState(propDirectorData || null);

  useEffect(() => {
    if (propDirectorData) setDirectorData(propDirectorData);
  }, [propDirectorData]);

  // Don't render if no data
  if (!directorData) {
    return null;
  }

  const photoSrc = directorData.photo || "/assets/team/directorphoto.png";

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
        <Link href="/our-team" className="director-tag">Our Director</Link>
        <h2>What Our Director Says</h2>
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
                  sizes="(max-width: 768px) 80vw, 400px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    transform: "scale(1.1)",
                  }}
                  loading="lazy"
                  onError={(e) => { 
                    console.error("Image failed to load:", photoSrc);
                    e.target.style.display = "none"; 
                  }}
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
              <p className="director-name">{directorData.name}</p>
              <p className="director-role">{directorData.role}</p>
            </div>
          </div>
          <div className="director-card-accent" />
        </div>
      </div>
    </section>
  );
}
