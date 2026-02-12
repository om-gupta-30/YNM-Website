"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Gallery images
const galleryImages = [
  { id: 1, src: "/assets/gallery-manufacturing-facility.jpg", alt: "Manufacturing Facility", category: "facility" },
  { id: 2, src: "/assets/gallery-production-line.jpg", alt: "Production Line", category: "production" },
  { id: 3, src: "/assets/gallery-quality-control.jpg", alt: "Quality Control", category: "quality" },
  { id: 4, src: "/assets/gallery-warehouse.jpg", alt: "Warehouse", category: "facility" },
  { id: 5, src: "/assets/product-industrial-paint.png", alt: "Industrial Paints", category: "products" },
  { id: 6, src: "/assets/product-structural-steel.png", alt: "Metal Fabrication", category: "products" },
  { id: 7, src: "/assets/product-student-desk-chair.png", alt: "School Furniture", category: "products" },
  { id: 8, src: "/assets/product-laboratory-table.png", alt: "Laboratory Equipment", category: "products" },
];

// About section content
const aboutSectionContent = [
  {
    icon: "🏭",
    title: "Advanced Manufacturing",
    description: "We run modern factories that make road safety products. This includes road marking paints, crash barriers, road studs, and bitumen products. Our skilled team uses the latest machines to create durable products for highways and city roads."
  },
  {
    icon: "✅",
    title: "Quality Certified",
    description: "Quality comes first at YNM Safety. We hold ISO 9001:2015 certification. Every product we make goes through strict testing. This ensures our paints, barriers, and signs last long and perform well in all weather."
  },
  {
    icon: "🌍",
    title: "Global Export Network",
    description: "We export to 50+ countries across Asia, Africa, and the Middle East. Our team handles all shipping and paperwork. We ensure safe packing and on-time delivery for projects worldwide."
  },
  {
    icon: "🎨",
    title: "Custom Solutions",
    description: "Need something specific? We can help. We make custom crash barriers, signs, and other products to fit your project needs. Our team works with you to deliver the right solution on time."
  }
];

// Company timeline
const timeline = [
  {
    year: "2013",
    title: "Foundation",
    description: "YNM Safety started with a simple goal: make great road safety products. From day one, we focused on quality and building strong customer relationships."
  },
  {
    year: "2015",
    title: "ISO Certification",
    description: "We earned ISO 9001:2015 certification. This proved our commitment to quality. It also helped us meet global standards for all our products."
  },
  {
    year: "2018",
    title: "Global Expansion",
    description: "We grew our exports to 50+ countries. Clients in Asia, Africa, and the Middle East now use our products in their road projects."
  },
  {
    year: "2023",
    title: "10 Years of Excellence",
    description: "We celebrated 10 years in business. By then, we had completed 500+ projects and served over 1000 happy clients."
  },
  {
    year: "2026",
    title: "PAN India Expansion",
    description: "We are opening new factories across India. This lets us serve more customers faster and support bigger infrastructure projects."
  }
];

export default function AboutPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["all", "facility", "production", "quality", "products"];
  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <Head>
        <title>About Us - YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="YNM Safety Pan Global Trade Pvt Ltd is a trusted manufacturer and exporter of high-quality road safety and infrastructure products, delivering reliable solutions for highways, urban roads, and industrial projects worldwide." />
        <link rel="canonical" href="https://www.ynmsafety.com/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ynmsafety.com/about" />
        <meta property="og:title" content="About Us - YNM Safety Pan Global Trade Pvt Ltd" />
        <meta property="og:description" content="YNM Safety Pan Global Trade Pvt Ltd is a trusted manufacturer and exporter of high-quality road safety and infrastructure products, delivering reliable solutions for highways, urban roads, and industrial projects worldwide." />
        <meta property="og:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - YNM Safety Pan Global Trade Pvt Ltd" />
        <meta name="twitter:description" content="YNM Safety Pan Global Trade Pvt Ltd is a trusted manufacturer and exporter of high-quality road safety and infrastructure products." />
        <meta name="twitter:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        
        {/* Schema Markup - AboutPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About YNM Safety",
              "description": "YNM Safety Pan Global Trade Pvt Ltd is a trusted manufacturer and exporter of high-quality road safety and infrastructure products.",
              "url": "https://www.ynmsafety.com/about",
              "mainEntity": {
                "@type": "Organization",
                "name": "YNM Safety Pan Global Trade Pvt Ltd",
                "foundingDate": "2013",
                "numberOfEmployees": {
                  "@type": "QuantitativeValue",
                  "minValue": 50,
                  "maxValue": 200
                },
                "areaServed": ["India", "Middle East", "Africa", "Asia"]
              }
            })
          }}
        />
        
        {/* Schema Markup - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.ynmsafety.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "https://www.ynmsafety.com/about"
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-bg" />
          <div className="about-hero-overlay" />
          <div className="about-hero-content">
            <span className="about-tag">ABOUT US</span>
            <h1>Road Safety & Infrastructure Excellence</h1>
            <p>Trusted manufacturer and exporter delivering reliable solutions for highways, urban roads, and industrial projects worldwide</p>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="about-story">
          <div className="about-story-container">
            <div className="about-story-content">
              <h2>About YNM Safety</h2>
              <div className="story-divider" />
              <p>
                YNM Safety Pan Global Trade Pvt Ltd is a trusted manufacturer and exporter of high-quality road safety and infrastructure products, delivering reliable solutions for highways, urban roads, and industrial projects worldwide. Since our inception, we have focused on engineering products that enhance road safety, durability, and long-term performance.
              </p>
              <p>
                We specialize in the manufacturing of hot thermoplastic paints, cold plastic paints, and advanced road marking solutions designed to meet international standards. Our product portfolio also includes road studs, bitumen products, retro reflective signages, and signages, ensuring maximum visibility and safety across all traffic conditions.
              </p>
              <p>
                As experienced metal beam crash barrier manufacturers, we produce a complete range of W beam crash barriers, double W beam crash barriers, and metal beam crash barriers using precision fabrication and strict quality control. Our in-house capabilities extend to fabrications, road safety furniture, and road safety furniture, supporting infrastructure projects with consistent quality and timely delivery.
              </p>
              <p>
                With modern manufacturing facilities, skilled professionals, and a strong commitment to innovation, YNM Safety serves government bodies, contractors, and private developers across multiple countries. Our focus on quality, compliance, and customer satisfaction has positioned us as a reliable partner in the global road safety and traffic management industry.
              </p>
            </div>
            <div className="about-story-image">
              <Image
                src="/assets/aboutus.png"
                alt="YNM Safety Manufacturing Facility - Road Safety Products"
                width={600}
                height={500}
                style={{ objectFit: "cover", borderRadius: "16px" }}
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="about-timeline">
          <div className="timeline-container">
            <h2>Our Journey</h2>
            <div className="story-divider" />
            <div className="timeline-grid">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section (USP) */}
        <section className="about-values">
          <div className="values-container">
            <h2>Why Choose YNM Safety</h2>
            <div className="story-divider" />
            <div className="values-grid">
              {aboutSectionContent.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - Coming Soon */}
        <section className="about-gallery">
          <div className="gallery-container">
            <h2>Our Gallery</h2>
            <div className="story-divider" />
            <p className="gallery-subtitle">Take a look at our facilities, production processes, and products</p>
            
            {/* Coming Soon Placeholder */}
            <div className="gallery-coming-soon">
              <div className="gallery-coming-soon-icon">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h3>Gallery Coming Soon</h3>
              <p>We&apos;re preparing an amazing collection of photos showcasing our manufacturing facilities, production processes, and product range. Stay tuned!</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="about-stats-container">
            <div className="about-stat">
              <div className="about-stat-value">10+</div>
              <div className="about-stat-label">Years Experience</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-value">500+</div>
              <div className="about-stat-label">Projects Delivered</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-value">50+</div>
              <div className="about-stat-label">Export Countries</div>
            </div>
            <div className="about-stat">
              <div className="about-stat-value">1000+</div>
              <div className="about-stat-label">Happy Clients</div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="about-mission">
          <div className="mission-container">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver premium quality road safety products and infrastructure solutions that exceed customer expectations, 
                while maintaining the highest standards of quality, innovation, and reliability in every product we manufacture. 
                We are committed to enhancing road safety across highways, urban roads, and industrial projects worldwide.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become a globally recognized leader in road safety and infrastructure manufacturing, known for product excellence, 
                innovation, and reliability. We aim to expand our presence across continents while supporting large-scale infrastructure 
                development and contributing to safer roads for communities worldwide.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "90vh" }}
            />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .about-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
          padding-top: 100px;
        }

        /* Hero Section */
        .about-hero {
          position: relative;
          height: 60vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .about-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 50%, #5a0509 100%);
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(201, 162, 77, 0.2), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(154, 27, 46, 0.15), transparent 50%);
        }

        .about-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
        }

        .about-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #74060D;
          background: #C9A24D;
          border: 2px solid #E6D3A3;
          padding: 8px 20px;
          border-radius: 30px;
          margin-bottom: 20px;
        }

        .about-hero-content h1 {
          font-size: clamp(40px, 7vw, 72px);
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .about-hero-content p {
          font-size: 20px;
          color: #E6D3A3;
          max-width: 700px;
          margin: 0 auto;
          font-weight: 500;
        }

        /* Story Section */
        .about-story {
          padding: 100px 20px;
          background: #FFFFFF;
        }

        .about-story-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-story-content h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 20px;
        }

        .story-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #C9A24D 0%, #E6D3A3 100%);
          margin: 0 0 30px;
          border-radius: 2px;
        }

        .about-story-content p {
          font-size: 16px;
          line-height: 1.8;
          color: #5a4a4a;
          margin: 0 0 20px;
        }

        .about-story-image {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.2);
        }

        /* Timeline Section */
        .about-timeline {
          padding: 100px 20px;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
        }

        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .timeline-container h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 20px;
        }

        .timeline-container .story-divider {
          margin: 0 auto 60px;
        }

        .timeline-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .timeline-item {
          flex: 0 1 280px;
          max-width: 300px;
          background: #FFFFFF;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(116, 6, 13, 0.1);
          border-left: 4px solid #C9A24D;
          transition: transform 0.3s ease;
        }

        .timeline-item:hover {
          transform: translateY(-5px);
        }

        .timeline-year {
          font-size: 32px;
          font-weight: 900;
          color: #C9A24D;
          margin-bottom: 12px;
        }

        .timeline-content h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 10px;
        }

        .timeline-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        /* Values Section */
        .about-values {
          padding: 100px 20px;
          background: #FFFFFF;
        }

        .values-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .values-container h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 20px;
        }

        .values-container .story-divider {
          margin: 0 auto 60px;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .value-card {
          background: linear-gradient(135deg, #F7F3EA 0%, #E6D3A3 100%);
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
          border: 2px solid rgba(201, 162, 77, 0.3);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(116, 6, 13, 0.15);
        }

        .value-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .value-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .value-card p {
          font-size: 14px;
          line-height: 1.7;
          color: #5a4a4a;
          margin: 0;
          text-align: left;
        }

        /* Gallery Section */
        .about-gallery {
          padding: 100px 20px;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
        }

        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .gallery-container h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 20px;
        }

        .gallery-container .story-divider {
          margin: 0 auto 20px;
        }

        .gallery-subtitle {
          text-align: center;
          font-size: 16px;
          color: #9A1B2E;
          margin: 0 0 40px;
        }

        .gallery-coming-soon {
          background: linear-gradient(135deg, #FFFFFF 0%, #F7F3EA 100%);
          border: 2px dashed #C9A24D;
          border-radius: 20px;
          padding: 80px 40px;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .gallery-coming-soon-icon {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          animation: pulse 2s ease-in-out infinite;
        }

        .gallery-coming-soon-icon svg {
          color: #74060D;
        }

        .gallery-coming-soon h3 {
          font-size: 32px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 16px;
        }

        .gallery-coming-soon p {
          font-size: 16px;
          line-height: 1.7;
          color: #5a4a4a;
          margin: 0;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 10px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #74060D;
          background: #FFFFFF;
          border: 2px solid #E6D3A3;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background: #F7F3EA;
          border-color: #C9A24D;
        }

        .filter-btn.active {
          background: #C9A24D;
          color: #74060D;
          border-color: #C9A24D;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .gallery-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4/3;
          box-shadow: 0 10px 30px rgba(116, 6, 13, 0.15);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.05);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(116, 6, 13, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay svg {
          color: #FFFFFF;
        }

        /* Stats Section */
        .about-stats {
          padding: 80px 20px;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
        }

        .about-stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .about-stat {
          text-align: center;
          background: rgba(247, 243, 234, 0.1);
          border: 2px solid rgba(201, 162, 77, 0.3);
          border-radius: 20px;
          padding: 40px 20px;
          backdrop-filter: blur(10px);
        }

        .about-stat-value {
          font-size: 48px;
          font-weight: 900;
          color: #C9A24D;
          margin-bottom: 12px;
        }

        .about-stat-label {
          font-size: 14px;
          font-weight: 600;
          color: #E6D3A3;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Mission Section */
        .about-mission {
          padding: 100px 20px;
          background: #FFFFFF;
        }

        .mission-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
        }

        .mission-card {
          background: linear-gradient(135deg, #F7F3EA 0%, #E6D3A3 100%);
          border-radius: 20px;
          padding: 50px 40px;
          text-align: center;
          border: 2px solid rgba(201, 162, 77, 0.3);
        }

        .mission-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .mission-card h3 {
          font-size: 28px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 20px;
        }

        .mission-card p {
          font-size: 16px;
          line-height: 1.8;
          color: #5a4a4a;
          margin: 0;
        }

        /* Image Modal */
        .image-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
        }

        .image-modal {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .modal-close {
          position: absolute;
          top: -50px;
          right: 0;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #FFFFFF;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .modal-caption {
          color: #FFFFFF;
          font-size: 16px;
          margin-top: 20px;
          text-align: center;
        }

        @media (max-width: 968px) {
          .about-story-container {
            grid-template-columns: 1fr;
          }

          .mission-container {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }

        @media (max-width: 600px) {
          .about-hero {
            height: 50vh;
            min-height: 400px;
          }

          .about-story,
          .about-timeline,
          .about-values,
          .about-gallery,
          .about-mission {
            padding: 60px 16px;
          }

          .about-story-content h2,
          .timeline-container h2,
          .values-container h2,
          .gallery-container h2 {
            font-size: 32px;
          }

          .timeline-grid {
            flex-direction: column;
            align-items: center;
          }

          .timeline-item {
            flex: 0 1 auto;
            max-width: 100%;
            width: 100%;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .mission-container {
            grid-template-columns: 1fr;
          }

          .mission-card {
            padding: 40px 24px;
          }
        }
      `}</style>
    </>
  );
}
