"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BrandsSection({ brandsData: propBrandsData }) {
  const [brandsData, setBrandsData] = useState(propBrandsData || []);
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    if (propBrandsData) setBrandsData(propBrandsData);
  }, [propBrandsData]);

  // Split brands into 2 rows
  const { row1Brands, row2Brands } = useMemo(() => {
    const halfLength = Math.ceil(brandsData.length / 2);
    return {
      row1Brands: brandsData.slice(0, halfLength),
      row2Brands: brandsData.slice(halfLength),
    };
  }, [brandsData]);

  // Enable animation only when the section is in view
  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.15, rootMargin: "150px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!brandsData || brandsData.length === 0) {
    return (
      <section id="brands-section" className="brands" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: '#c9a227' }}>
          <div style={{ fontSize: '18px' }}>No brands available</div>
        </div>
      </section>
    );
  }

  // Create duplicate arrays for seamless infinite scroll (triple for smoother loop)
  const row1Items = [...row1Brands, ...row1Brands, ...row1Brands];
  const row2Items = [...row2Brands, ...row2Brands, ...row2Brands];

  const renderBrandTile = (brand, idx, rowIdx) => (
    <div
      key={`${brand.id}-${idx}`}
      className="brand-tile"
      onClick={() => setSelectedBrand(brand)}
      style={{ cursor: "pointer" }}
    >
      <div
        className="brand-tile-inner"
        style={{
          "--flip-delay": `${((idx + rowIdx * 5) % 9) * 0.8}s`,
          "--flip-cycle": `${8 + (idx % 4) * 1.2}s`,
        }}
      >
        {/* Front Face - Logo Only */}
        <div className="brand-tile-front">
          <div className="brand-tile-texture" />
          <div className="brand-logo-wrap">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={100}
              height={50}
              className="brand-logo"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="brand-tile-border" />
          <div className="brand-tile-shine" />
        </div>

        {/* Back Face - Brand Name */}
        <div className="brand-tile-back">
          <div className="brand-tile-texture dark" />
          <div className="brand-name-wrap">
            <span className="brand-name-text">{brand.name}</span>
          </div>
          <div className="brand-tile-vignette" />
          <div className="brand-tile-glow" />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="brands-section"
      className={`brands brands-marquee ${inView ? "brands-inview" : ""}`}
      ref={sectionRef}
    >
      {/* Neon Particles */}
      <div className="neon-particles">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="neon-particle" />
        ))}
      </div>

      {/* Background Texture */}
      <div className="brands-bg-texture" />
      
      {/* Section Header */}
      <div className="brands-header">
        <Link href="/clients" className="brands-tag">Our Clients</Link>
        <h2>Brands We Work With</h2>
        <div className="brands-header-bar" />
      </div>

      {/* Marquee Rows */}
      <div className="brands-marquee-container">
        {/* Row 1: Left to Right */}
        <div className="brands-marquee-row">
          <div className="brands-marquee-track brands-marquee-track-ltr">
            {row1Items.map((brand, idx) => renderBrandTile(brand, idx, 0))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="brands-marquee-row">
          <div className="brands-marquee-track brands-marquee-track-rtl">
            {row2Items.map((brand, idx) => renderBrandTile(brand, idx, 1))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays for smooth fade edges */}
      <div className="brands-marquee-fade brands-marquee-fade-left" />
      <div className="brands-marquee-fade brands-marquee-fade-right" />

      {/* Decorative Elements */}
      <div className="brands-corner-accent tl" />
      <div className="brands-corner-accent tr" />
      <div className="brands-corner-accent bl" />
      <div className="brands-corner-accent br" />

      {/* Brand Popup Modal */}
      {selectedBrand && (
        <div 
          className="brand-popup-overlay"
          onClick={() => setSelectedBrand(null)}
        >
          <div 
            className="brand-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="brand-popup-close"
              onClick={() => setSelectedBrand(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="brand-popup-content">
              <div className="brand-popup-logo">
                <Image
                  src={selectedBrand.logo}
                  alt={selectedBrand.name}
                  width={200}
                  height={100}
                  style={{ 
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto"
                  }}
                />
              </div>
              <h3 className="brand-popup-name">{selectedBrand.name}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
