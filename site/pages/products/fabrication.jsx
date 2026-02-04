import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Fabrication products data - 34 products with names and images
const fabricationProducts = [
  { id: "fab1", name: "Sign Board Structures", image: "/assets/product-structural-steel.png", category: "Signage" },
  { id: "fab2", name: "Cantilever Structures", image: "/assets/product-custom-metal-enclosure.png", category: "Signage" },
  { id: "fab3", name: "Gantry Structures", image: "/assets/product-structural-steel.png", category: "Signage" },
  { id: "fab4", name: "VMS Structures", image: "/assets/product-custom-metal-enclosure.png", category: "Signage" },
  { id: "fab5", name: "ITMS Structures", image: "/assets/product-structural-steel.png", category: "Signage" },
  { id: "fab6", name: "Street Light Poles", image: "/assets/product-custom-metal-enclosure.png", category: "Poles" },
  { id: "fab7", name: "Solar Light Poles", image: "/assets/product-structural-steel.png", category: "Poles" },
  { id: "fab8", name: "High Mast", image: "/assets/product-custom-metal-enclosure.png", category: "Poles" },
  { id: "fab9", name: "Scaffolding Parts", image: "/assets/product-structural-steel.png", category: "Construction" },
  { id: "fab10", name: "Shuttering Materials", image: "/assets/product-custom-metal-enclosure.png", category: "Construction" },
  { id: "fab11", name: "Cup Lock", image: "/assets/product-structural-steel.png", category: "Construction" },
  { id: "fab12", name: "Ledger", image: "/assets/product-custom-metal-enclosure.png", category: "Construction" },
  { id: "fab13", name: "Base Jack", image: "/assets/product-structural-steel.png", category: "Construction" },
  { id: "fab14", name: "I-Girders", image: "/assets/product-custom-metal-enclosure.png", category: "Bridge" },
  { id: "fab15", name: "RE Panel Moulds", image: "/assets/product-structural-steel.png", category: "Bridge" },
  { id: "fab16", name: "Foot Over Bridges", image: "/assets/product-custom-metal-enclosure.png", category: "Bridge" },
  { id: "fab17", name: "Gabion Wire Mesh", image: "/assets/product-structural-steel.png", category: "Bridge" },
  { id: "fab18", name: "Bridge Bearings", image: "/assets/product-custom-metal-enclosure.png", category: "Bridge" },
  { id: "fab19", name: "Anchor Cones", image: "/assets/product-structural-steel.png", category: "Bridge" },
  { id: "fab20", name: "Open Web Bridge Girders", image: "/assets/product-custom-metal-enclosure.png", category: "Bridge" },
  { id: "fab21", name: "Modular Pontoon", image: "/assets/product-structural-steel.png", category: "Bridge" },
  { id: "fab22", name: "Expansion Joints", image: "/assets/product-custom-metal-enclosure.png", category: "Bridge" },
  { id: "fab23", name: "Pedestrian Guardrails", image: "/assets/product-structural-steel.png", category: "Safety" },
  { id: "fab24", name: "Noise Barriers", image: "/assets/product-custom-metal-enclosure.png", category: "Safety" },
  { id: "fab25", name: "Adjustable Prop Jack", image: "/assets/product-structural-steel.png", category: "Construction" },
  { id: "fab26", name: "Barricading Boards", image: "/assets/product-custom-metal-enclosure.png", category: "Safety" },
  { id: "fab27", name: "Heavy Duty Racks", image: "/assets/product-industrial-racking.png", category: "Storage" },
  { id: "fab28", name: "Slotted Angle Racks", image: "/assets/product-industrial-racking.png", category: "Storage" },
  { id: "fab29", name: "Camera Poles", image: "/assets/product-structural-steel.png", category: "Poles" },
  { id: "fab30", name: "Parking Signages", image: "/assets/product-custom-metal-enclosure.png", category: "Signage" },
  { id: "fab31", name: "Solar Panel Structures / Frames", image: "/assets/product-structural-steel.png", category: "Solar" },
  { id: "fab32", name: "Railway Structures", image: "/assets/product-custom-metal-enclosure.png", category: "Railway" },
  { id: "fab33", name: "GI Dustbins", image: "/assets/product-structural-steel.png", category: "Urban" },
  { id: "fab34", name: "Rickshaw", image: "/assets/product-custom-metal-enclosure.png", category: "Urban" },
];

// Get unique categories
const categories = ["All", ...new Set(fabricationProducts.map(p => p.category))];

export default function FabricationPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filteredProducts = activeCategory === "All" 
    ? fabricationProducts 
    : fabricationProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Fabrication Products - YNM Safety</title>
        <meta name="description" content="Custom steel and metal fabrication solutions by YNM Safety. From structural components to precision-engineered parts for all industrial needs." />
      </Head>

      <Navbar />

      <main className="fabrication-page">
        {/* Hero Section */}
        <section className="fabrication-hero">
          <div className="fabrication-hero-bg" />
          <div className="fabrication-hero-overlay" />
          <div className="fabrication-hero-content">
            <Link href="/products" className="fabrication-back-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Products
            </Link>
            <span className="fabrication-hero-tag">Fabrication</span>
            <h1>Our Fabrication Products</h1>
            <p>Custom steel and metal fabrication solutions for infrastructure, construction, and industrial applications</p>
            <div className="fabrication-hero-stats">
              <div className="fabrication-stat">
                <span className="fabrication-stat-number">34+</span>
                <span className="fabrication-stat-label">Products</span>
              </div>
              <div className="fabrication-stat">
                <span className="fabrication-stat-number">ISO</span>
                <span className="fabrication-stat-label">Certified</span>
              </div>
              <div className="fabrication-stat">
                <span className="fabrication-stat-number">40+</span>
                <span className="fabrication-stat-label">Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="fabrication-filter-section">
          <div className="fabrication-filter-container">
            <div className="fabrication-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`fabrication-filter-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  {cat === "All" && <span className="filter-count">{fabricationProducts.length}</span>}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="fabrication-products-section">
          <div className="fabrication-products-container">
            <div className="fabrication-products-grid">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={`fabrication-product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="fabrication-product-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="fabrication-product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="fabrication-product-overlay" />
                  </div>
                  <div className="fabrication-product-content">
                    <span className="fabrication-product-category">{product.category}</span>
                    <h3 className="fabrication-product-name">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="fabrication-cta-section">
          <div className="fabrication-cta-container">
            <div className="fabrication-cta-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h2>Need Custom Fabrication?</h2>
            <p>Contact us for bulk orders, custom specifications, or project-based requirements</p>
            <div className="fabrication-cta-buttons">
              <Link href="/get-quote" className="fabrication-cta-btn primary">
                Get a Quote
              </Link>
              <Link href="/contact" className="fabrication-cta-btn secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .fabrication-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f5efe9 0%, #e8e0d5 100%);
        }

        /* Hero Section */
        .fabrication-hero {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 20px 60px;
          overflow: hidden;
        }

        .fabrication-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #5a050a 50%, #74060D 100%);
          z-index: 0;
        }

        .fabrication-hero-overlay {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(201, 162, 77, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(201, 162, 77, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
        }

        .fabrication-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
        }

        .fabrication-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 20px;
          border-radius: 50px;
          margin-bottom: 24px;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .fabrication-back-link:hover {
          background: #C9A24D;
          color: #74060D;
          border-color: #C9A24D;
          transform: translateX(-4px);
        }

        .fabrication-hero-tag {
          display: inline-block;
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          color: #74060D;
          padding: 10px 28px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.4);
        }

        .fabrication-hero h1 {
          font-size: 52px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.1;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }

        .fabrication-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          margin: 0 0 36px;
          line-height: 1.7;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .fabrication-hero-stats {
          display: flex;
          justify-content: center;
          gap: 50px;
        }

        .fabrication-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 24px;
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .fabrication-stat-number {
          font-size: 36px;
          font-weight: 800;
          color: #C9A24D;
          line-height: 1;
        }

        .fabrication-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 6px;
        }

        /* Filter Section */
        .fabrication-filter-section {
          background: #fff;
          padding: 20px;
          position: sticky;
          top: 80px;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .fabrication-filter-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .fabrication-filter-tabs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 4px;
          -webkit-overflow-scrolling: touch;
        }

        .fabrication-filter-tabs::-webkit-scrollbar {
          display: none;
        }

        .fabrication-filter-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: 2px solid #e8e0d5;
          border-radius: 50px;
          background: transparent;
          color: #5a4a4a;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .fabrication-filter-tab:hover {
          border-color: #C9A24D;
          color: #74060D;
        }

        .fabrication-filter-tab.active {
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          border-color: #74060D;
          color: #fff;
        }

        .filter-count {
          background: rgba(201, 162, 77, 0.2);
          padding: 2px 8px;
          border-radius: 20px;
          font-size: 12px;
        }

        .fabrication-filter-tab.active .filter-count {
          background: rgba(255,255,255,0.2);
        }

        /* Products Section */
        .fabrication-products-section {
          padding: 50px 20px 80px;
        }

        .fabrication-products-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .fabrication-products-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }

        .fabrication-product-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 25px rgba(116, 6, 13, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fabrication-product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.18);
          border-color: #C9A24D;
        }

        .fabrication-product-number {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
          background: rgba(116, 6, 13, 0.9);
          color: #C9A24D;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .fabrication-product-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          overflow: hidden;
          background: linear-gradient(135deg, #f5efe9 0%, #e8dfd4 100%);
        }

        .fabrication-product-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(116, 6, 13, 0.6) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .fabrication-product-card:hover .fabrication-product-overlay {
          opacity: 1;
        }

        .fabrication-product-card:hover .fabrication-product-image img {
          transform: scale(1.1);
        }

        .fabrication-product-content {
          padding: 16px;
          background: linear-gradient(to bottom, #fff 0%, #faf8f5 100%);
        }

        .fabrication-product-category {
          display: inline-block;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #C9A24D;
          background: rgba(201, 162, 77, 0.15);
          padding: 4px 10px;
          border-radius: 20px;
          margin-bottom: 8px;
        }

        .fabrication-product-name {
          font-size: 14px;
          font-weight: 700;
          color: #74060D;
          text-align: left;
          margin: 0;
          line-height: 1.4;
          min-height: 40px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* CTA Section */
        .fabrication-cta-section {
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .fabrication-cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(201, 162, 77, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 50%, rgba(201, 162, 77, 0.15) 0%, transparent 40%);
        }

        .fabrication-cta-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .fabrication-cta-icon {
          width: 80px;
          height: 80px;
          background: rgba(201, 162, 77, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #C9A24D;
        }

        .fabrication-cta-container h2 {
          font-size: 40px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
        }

        .fabrication-cta-container p {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          margin: 0 0 36px;
          line-height: 1.7;
        }

        .fabrication-cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .fabrication-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 36px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .fabrication-cta-btn.primary {
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          color: #74060D;
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.4);
        }

        .fabrication-cta-btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(201, 162, 77, 0.5);
        }

        .fabrication-cta-btn.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255,255,255,0.4);
        }

        .fabrication-cta-btn.secondary:hover {
          border-color: #C9A24D;
          color: #C9A24D;
          background: rgba(201, 162, 77, 0.1);
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .fabrication-products-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 992px) {
          .fabrication-hero h1 {
            font-size: 40px;
          }

          .fabrication-products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }

          .fabrication-hero-stats {
            gap: 24px;
          }

          .fabrication-stat {
            padding: 12px 18px;
          }

          .fabrication-stat-number {
            font-size: 28px;
          }

          .fabrication-filter-section {
            top: 70px;
          }
        }

        @media (max-width: 768px) {
          .fabrication-hero {
            min-height: 380px;
            padding: 100px 20px 50px;
          }

          .fabrication-hero h1 {
            font-size: 32px;
          }

          .fabrication-hero p {
            font-size: 16px;
          }

          .fabrication-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .fabrication-product-name {
            font-size: 13px;
            min-height: 36px;
          }

          .fabrication-cta-container h2 {
            font-size: 28px;
          }

          .fabrication-hero-stats {
            flex-wrap: wrap;
            gap: 16px;
          }

          .fabrication-stat {
            flex: 1;
            min-width: 100px;
          }

          .fabrication-stat-number {
            font-size: 24px;
          }

          .fabrication-stat-label {
            font-size: 10px;
          }

          .fabrication-filter-tab {
            padding: 10px 18px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .fabrication-hero h1 {
            font-size: 26px;
          }

          .fabrication-back-link {
            font-size: 13px;
            padding: 8px 16px;
          }

          .fabrication-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .fabrication-product-card {
            border-radius: 14px;
          }

          .fabrication-product-content {
            padding: 12px;
          }

          .fabrication-product-name {
            font-size: 12px;
            min-height: 34px;
          }

          .fabrication-product-category {
            font-size: 9px;
            padding: 3px 8px;
          }

          .fabrication-cta-btn {
            padding: 14px 28px;
            font-size: 14px;
          }

          .fabrication-cta-container h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
