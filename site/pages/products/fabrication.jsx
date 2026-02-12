import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Flag from "@/components/Flag";

// Fabrication products data - 4 products with photos available
const fabricationProducts = [
  { 
    id: "fab1", 
    name: "Solar Panel Structures / Frames", 
    images: ["/assets/solar-fab-2.png", "/assets/solar-fab.png"], 
    category: "Solar",
    description: "Ground and rooftop mounting structures for solar PV installations.",
    specs: ["Fixed/Tracking", "Aluminum/GI steel", "Wind certified", "Quick mount"]
  },
  { 
    id: "fab2", 
    name: "Railway Structures", 
    images: ["/assets/railway-fab.png", "/assets/railway-fab-2.png", "/assets/railway-fab-3.png"], 
    category: "Railway",
    description: "Platform shelters, canopies, and railway infrastructure fabrication.",
    specs: ["RDSO approved", "Long span roofs", "Integrated drainage", "Fire resistant"]
  },
  { 
    id: "fab3", 
    name: "GI Dustbins", 
    image: "/assets/dustbin-fab.png", 
    category: "Urban",
    description: "Galvanized iron dustbins for public spaces and municipal use.",
    specs: ["Corrosion proof", "Multiple sizes", "Lid options", "Easy emptying"]
  },
  { 
    id: "fab4", 
    name: "Rickshaw", 
    image: "/assets/rickshaw-fab.png", 
    category: "Urban",
    description: "E-rickshaw and cycle rickshaw body fabrication and frames.",
    specs: ["Lightweight design", "Rust protected", "Custom branding", "Durable finish"]
  },
];

// Flag to show coming soon message
const showComingSoon = true;

// Get unique categories
const categories = ["All", ...new Set(fabricationProducts.map(p => p.category))];

export default function FabricationPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [imageIndices, setImageIndices] = useState({});

  // Auto-rotate carousel images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prev => {
        const newIndices = { ...prev };
        fabricationProducts.forEach(product => {
          if (product.images && product.images.length > 1) {
            const currentIndex = prev[product.id] || 0;
            newIndices[product.id] = (currentIndex + 1) % product.images.length;
          }
        });
        return newIndices;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Helper function to get current image for a product
  const getProductImage = (product) => {
    if (product.images && product.images.length > 0) {
      const index = imageIndices[product.id] || 0;
      return product.images[index];
    }
    return product.image || "/assets/product-structural-steel.png";
  };

  const filteredProducts = activeCategory === "All" 
    ? fabricationProducts 
    : fabricationProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Fabrication Products - YNM Safety</title>
        <meta name="description" content="Custom steel and metal fabrication solutions by YNM Safety. From structural components to precision-engineered parts for all industrial needs." />
        <link rel="canonical" href="https://www.ynmsafety.com/products/fabrication" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ynmsafety.com/products/fabrication" />
        <meta property="og:title" content="Fabrication Products - YNM Safety" />
        <meta property="og:description" content="Custom steel and metal fabrication solutions by YNM Safety. From structural components to precision-engineered parts for all industrial needs." />
        <meta property="og:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fabrication Products - YNM Safety" />
        <meta name="twitter:description" content="Custom steel and metal fabrication solutions by YNM Safety." />
        <meta name="twitter:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        
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
                  "name": "Products",
                  "item": "https://www.ynmsafety.com/products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Fabrication",
                  "item": "https://www.ynmsafety.com/products/fabrication"
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="fabrication-page">
        {/* Hero Section */}
        <section className="fabrication-hero">
          <div className="fabrication-hero-bg" />
          <div className="fabrication-hero-overlay" />
          
          {/* Back Button - Positioned Top Left */}
          <Link 
            href="/products" 
            className="fabrication-back-link"
            style={{
              position: 'absolute',
              top: '120px',
              left: '40px',
              background: 'linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%)',
              color: '#0F0D0C',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 4px 20px rgba(201, 162, 77, 0.4)',
              zIndex: 100
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F0D0C" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          
          <div className="fabrication-hero-content">
            <span className="fabrication-hero-tag">Fabrication</span>
            <h1>Our Fabrication Products</h1>
            <p>Custom steel and metal fabrication solutions for infrastructure, construction, and industrial applications</p>
            <div className="fabrication-hero-stats">
              <div className="fabrication-stat">
                <span className="fabrication-stat-number">4+</span>
                <span className="fabrication-stat-label">Products</span>
              </div>
              <div className="fabrication-stat">
                <span className="fabrication-stat-number">ISO</span>
                <span className="fabrication-stat-label">Certified</span>
              </div>
              <div className="fabrication-stat">
                <span className="fabrication-stat-number">50+</span>
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
        <section className="fabrication-products-section" aria-labelledby="fabrication-products-heading">
          <div className="fabrication-products-container">
            <h2 id="fabrication-products-heading" className="sr-only">Our Fabrication Products</h2>
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
                      src={getProductImage(product)}
                      alt={`${product.name} - YNM Safety Fabrication | Custom Steel Metal Fabrication India`}
                      fill
                      style={{ objectFit: "cover", transition: "opacity 0.5s ease" }}
                    />
                    {product.images && product.images.length > 1 && (
                      <div className="carousel-indicators">
                        {product.images.map((_, idx) => (
                          <span 
                            key={idx} 
                            className={`carousel-dot ${(imageIndices[product.id] || 0) === idx ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    )}
                    <div className="fabrication-product-overlay" />
                    
                    {/* Hover Details Popup */}
                    <div className={`product-hover-details ${hoveredProduct === product.id ? 'visible' : ''}`}>
                      <div className="hover-details-content">
                        <p className="hover-description">{product.description}</p>
                        <div className="hover-specs">
                          {product.specs && product.specs.map((spec, idx) => (
                            <span key={idx} className="hover-spec-tag">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fabrication-product-content">
                    <span className="fabrication-product-category">{product.category}</span>
                    <h3 className="fabrication-product-name">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Coming Soon Message */}
            {showComingSoon && (
              <div className="coming-soon-banner">
                <div className="coming-soon-content">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>More Products Coming Soon</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* DETAILS SECTION - Unique Bento Grid Design */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        
        {/* Section Divider */}
        <div className="fabrication-divider">
          <div className="divider-line" />
          <span className="divider-text">Discover More</span>
          <div className="divider-line" />
        </div>

        {/* Bento Grid Expertise Section */}
        <section className="fabrication-bento-section">
          <div className="fabrication-bento-container">
            <div className="bento-header">
              <span className="bento-tag">Why Choose YNM</span>
              <h2>World-Class Fabrication Excellence</h2>
              <p>Delivering precision-engineered solutions with unmatched quality and expertise</p>
            </div>
            
            <div className="bento-grid">
              {/* Large Feature Card */}
              <div className="bento-card bento-large">
                <div className="bento-card-glow" />
                <div className="bento-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>Advanced Manufacturing</h3>
                <p>State-of-the-art CNC machinery, laser cutting, and robotic welding systems for precision fabrication at scale.</p>
                <div className="bento-stats-row">
                  <div className="bento-stat-item">
                    <span className="stat-value">50,000+</span>
                    <span className="stat-label">Sq.ft Facility</span>
                  </div>
                  <div className="bento-stat-item">
                    <span className="stat-value">100+</span>
                    <span className="stat-label">Machines</span>
                  </div>
                </div>
              </div>

              {/* Tall Card */}
              <div className="bento-card bento-tall">
                <div className="bento-card-glow" />
                <div className="bento-icon-float">⚙️</div>
                <h3>Materials</h3>
                <ul className="bento-list">
                  <li>Mild Steel</li>
                  <li>Stainless Steel</li>
                  <li>Galvanized Steel</li>
                  <li>Aluminum</li>
                  <li>Copper Alloys</li>
                  <li>Custom Alloys</li>
                  <li>Cast Iron</li>
                </ul>
              </div>

              {/* Small Cards Row */}
              <div className="bento-card bento-small">
                <div className="bento-card-glow" />
                <span className="bento-number">25+</span>
                <span className="bento-label">Years Experience</span>
              </div>

              <div className="bento-card bento-small accent">
                <div className="bento-card-glow" />
                <span className="bento-number">500+</span>
                <span className="bento-label">Projects Delivered</span>
              </div>

              {/* Wide Card */}
              <div className="bento-card bento-wide">
                <div className="bento-card-glow" />
                <div className="bento-card-icon small">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="bento-wide-content">
                  <h3>Global Export Network</h3>
                  <p>Exporting to 40+ countries across Asia, Europe, Middle East, Africa, and the Americas</p>
                </div>
                <div className="export-flags">
                  <Flag country="in" size={24} />
                  <Flag country="ae" size={24} />
                  <Flag country="sa" size={24} />
                  <Flag country="gb" size={24} />
                  <Flag country="us" size={24} />
                  <Flag country="au" size={24} />
                  <Flag country="za" size={24} />
                  <Flag country="sg" size={24} />
                </div>
              </div>

              {/* Medium Card */}
              <div className="bento-card bento-medium">
                <div className="bento-card-glow" />
                <h3>Capacity</h3>
                <div className="capacity-meter">
                  <div className="capacity-bar">
                    <div className="capacity-fill" style={{ width: '85%' }} />
                  </div>
                  <span>100000 MT+/Year</span>
                </div>
                <p>High-volume production capability with flexible batch sizes from prototypes to mass production</p>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process Timeline */}
        <section className="fabrication-process-section">
          <div className="process-container">
            <div className="process-header">
              <span className="process-tag">Our Process</span>
              <h2>From Concept to Creation</h2>
              <p>A streamlined 6-step process ensuring quality at every stage</p>
            </div>
            
            <div className="process-timeline">
              <div className="process-line" />
              
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <div className="step-icon">📋</div>
                  <h4>Requirement Analysis</h4>
                  <p>Understanding specifications, drawings, and project requirements</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <div className="step-icon">✏️</div>
                  <h4>Design & Engineering</h4>
                  <p>CAD/CAM design with structural analysis and optimization</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <div className="step-icon">🔩</div>
                  <h4>Material Procurement</h4>
                  <p>Sourcing certified raw materials with mill test certificates</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <div className="step-icon">⚡</div>
                  <h4>Fabrication</h4>
                  <p>Precision cutting, bending, welding, and assembly operations</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">05</div>
                <div className="step-content">
                  <div className="step-icon">🎨</div>
                  <h4>Surface Treatment</h4>
                  <p>Galvanizing, powder coating, or custom finishing as required</p>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">06</div>
                <div className="step-content">
                  <div className="step-icon">✅</div>
                  <h4>Quality & Dispatch</h4>
                  <p>Final inspection, testing, and safe packaging for delivery</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served - Hexagon Grid */}
        <section className="fabrication-industries-section">
          <div className="industries-container">
            <div className="industries-header">
              <span className="industries-tag">Industries Served</span>
              <h2>Trusted Across Sectors</h2>
              <p>Providing fabrication solutions for diverse industrial applications</p>
            </div>
            
            <div className="industries-grid">
              <div className="industry-card">
                <div className="industry-icon">🏗️</div>
                <h4>Infrastructure</h4>
                <p>Highways, bridges, metro projects</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏭</div>
                <h4>Industrial</h4>
                <p>Factories, warehouses, plants</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🚦</div>
                <h4>Traffic Systems</h4>
                <p>Signages, poles, barriers</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🚂</div>
                <h4>Railways</h4>
                <p>Stations, platforms, structures</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">☀️</div>
                <h4>Solar Energy</h4>
                <p>Panel frames, mounting systems</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏙️</div>
                <h4>Urban Development</h4>
                <p>Smart city infrastructure</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🌉</div>
                <h4>Construction</h4>
                <p>Scaffolding, shuttering, props</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🛡️</div>
                <h4>Safety Systems</h4>
                <p>Guardrails, barriers, fencing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Capabilities - Animated Cards */}
        <section className="fabrication-capabilities-section">
          <div className="capabilities-container">
            <div className="capabilities-content">
              <div className="capabilities-left">
                <span className="capabilities-tag">Technical Capabilities</span>
                <h2>Engineering Excellence</h2>
                <p>Our advanced manufacturing capabilities enable us to handle complex fabrication requirements with precision and efficiency.</p>
                
                <div className="capability-highlights">
                  <div className="capability-item">
                    <div className="capability-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span>Laser Cutting up to 25mm thickness</span>
                  </div>
                  <div className="capability-item">
                    <div className="capability-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span>CNC Bending up to 12m length</span>
                  </div>
                  <div className="capability-item">
                    <div className="capability-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span>MIG/TIG/Robotic Welding</span>
                  </div>
                  <div className="capability-item">
                    <div className="capability-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span>Hot Dip Galvanizing</span>
                  </div>
                  <div className="capability-item">
                    <div className="capability-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span>Powder Coating & Painting</span>
                  </div>
                </div>
              </div>

              <div className="capabilities-right">
                <div className="specs-grid">
                  <div className="spec-card">
                    <div className="spec-value">±0.5mm</div>
                    <div className="spec-label">Cutting Tolerance</div>
                  </div>
                  <div className="spec-card">
                    <div className="spec-value">12m</div>
                    <div className="spec-label">Max Length</div>
                  </div>
                  <div className="spec-card">
                    <div className="spec-value">25mm</div>
                    <div className="spec-label">Max Thickness</div>
                  </div>
                  <div className="spec-card">
                    <div className="spec-value">25T</div>
                    <div className="spec-label">Crane Capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="fabrication-video-section">
          <div className="video-section-container">
            <div className="video-content">
              <span className="video-tag">See It In Action</span>
              <h2>Our Manufacturing Excellence</h2>
              <p>Take a virtual tour of our state-of-the-art fabrication facility and witness precision engineering in action.</p>
              <div className="video-features">
                <div className="video-feature">
                  <span className="feature-icon">🏭</span>
                  <span>50,000 sq.ft Facility</span>
                </div>
                <div className="video-feature">
                  <span className="feature-icon">⚡</span>
                  <span>CNC & Laser Technology</span>
                </div>
                <div className="video-feature">
                  <span className="feature-icon">👷</span>
                  <span>200+ Skilled Workers</span>
                </div>
              </div>
              <button className="video-play-btn" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
                Coming Soon
              </button>
            </div>
            <div className="video-preview">
              <div className="video-coming-soon">
                <div className="coming-soon-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
                <h3>Video Coming Soon</h3>
                <p>We&apos;re working on an amazing factory tour video for you</p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Stats Counter Section */}
        <section className="fabrication-stats-section">
          <div className="stats-section-container">
            <div className="stats-bg-pattern" />
            <div className="stats-content">
              <div className="stat-counter-card">
                <div className="counter-icon">📦</div>
                <div className="counter-value">15,000+</div>
                <div className="counter-label">Products Delivered</div>
                <div className="counter-bar">
                  <div className="counter-bar-fill" style={{ width: '92%' }} />
                </div>
              </div>
              <div className="stat-counter-card highlight">
                <div className="counter-icon">🌍</div>
                <div className="counter-value">50+</div>
                <div className="counter-label">Countries Served</div>
                <div className="counter-bar">
                  <div className="counter-bar-fill" style={{ width: '85%' }} />
                </div>
              </div>
              <div className="stat-counter-card">
                <div className="counter-icon">⭐</div>
                <div className="counter-value">98%</div>
                <div className="counter-label">Client Satisfaction</div>
                <div className="counter-bar">
                  <div className="counter-bar-fill" style={{ width: '98%' }} />
                </div>
              </div>
              <div className="stat-counter-card">
                <div className="counter-icon">🔄</div>
                <div className="counter-value">85%</div>
                <div className="counter-label">Repeat Customers</div>
                <div className="counter-bar">
                  <div className="counter-bar-fill" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="fabrication-testimonials-section">
          <div className="testimonials-container">
            <div className="testimonials-header">
              <span className="testimonials-tag">Client Stories</span>
              <h2>What Our Clients Say</h2>
              <p>Trusted by leading infrastructure companies worldwide</p>
            </div>
            
            <div className="testimonials-grid">
              <div className="testimonial-card featured">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">YNM&apos;s fabrication quality exceeded our expectations. Their sign board structures for our highway project were delivered on time and met all international standards. Highly recommended!</p>
                <div className="testimonial-author">
                  <div className="author-avatar">RK</div>
                  <div className="author-info">
                    <h4>Rajesh Kumar</h4>
                    <span>Project Manager, NHAI</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">We&apos;ve been sourcing scaffolding materials from YNM for 5 years. Consistent quality, competitive pricing, and excellent after-sales support.</p>
                <div className="testimonial-author">
                  <div className="author-avatar">AS</div>
                  <div className="author-info">
                    <h4>Ahmed Sharif</h4>
                    <span>Procurement Head, Dubai Constructions</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">The solar panel mounting structures were perfectly engineered. Installation was seamless and the galvanizing quality is top-notch.</p>
                <div className="testimonial-author">
                  <div className="author-avatar">PS</div>
                  <div className="author-info">
                    <h4>Priya Sharma</h4>
                    <span>CEO, GreenTech Solar</span>
                  </div>
                </div>
                <div className="testimonial-rating">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Comparison Table Section */}
        <section className="fabrication-comparison-section">
          <div className="comparison-container">
            <div className="comparison-header">
              <span className="comparison-tag">Why YNM?</span>
              <h2>The YNM Advantage</h2>
              <p>See how we compare against industry standards</p>
            </div>
            
            <div className="comparison-table">
              <div className="comparison-row header">
                <div className="comparison-feature">Feature</div>
                <div className="comparison-ynm">YNM Safety</div>
                <div className="comparison-others">Others</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Quality Certification</div>
                <div className="comparison-ynm"><span className="check">✓</span> ISO 9001, 14001, 45001</div>
                <div className="comparison-others"><span className="partial">~</span> Basic certification</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Delivery Timeline</div>
                <div className="comparison-ynm"><span className="check">✓</span> 15-30 days</div>
                <div className="comparison-others"><span className="cross">✗</span> 45-60 days</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Custom Fabrication</div>
                <div className="comparison-ynm"><span className="check">✓</span> Full customization</div>
                <div className="comparison-others"><span className="partial">~</span> Limited options</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Global Shipping</div>
                <div className="comparison-ynm"><span className="check">✓</span> 40+ countries</div>
                <div className="comparison-others"><span className="cross">✗</span> Domestic only</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Material Testing</div>
                <div className="comparison-ynm"><span className="check">✓</span> In-house lab</div>
                <div className="comparison-others"><span className="cross">✗</span> Third-party</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Post-sale Support</div>
                <div className="comparison-ynm"><span className="check">✓</span> 24/7 dedicated</div>
                <div className="comparison-others"><span className="partial">~</span> Limited hours</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="fabrication-faq-section">
          <div className="faq-container">
            <div className="faq-header">
              <span className="faq-tag">Got Questions?</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            
            <div className="faq-grid">
              <div className="faq-item">
                <h4>What is the minimum order quantity?</h4>
                <p>MOQ varies by product type. For standard items, MOQ starts from 10 pieces. For custom fabrication, please contact us for specific requirements.</p>
              </div>
              <div className="faq-item">
                <h4>What materials do you work with?</h4>
                <p>We work with mild steel, stainless steel (304, 316), galvanized steel, aluminum, and various alloys based on project requirements.</p>
              </div>
              <div className="faq-item">
                <h4>Do you provide installation services?</h4>
                <p>Yes, we offer turnkey solutions including design, fabrication, delivery, and installation with our experienced team.</p>
              </div>
              <div className="faq-item">
                <h4>What is your typical lead time?</h4>
                <p>Standard products: 15-20 days. Custom fabrication: 25-45 days depending on complexity and quantity.</p>
              </div>
              <div className="faq-item">
                <h4>Do you export internationally?</h4>
                <p>Yes, we export to 40+ countries with proper documentation, packaging, and logistics support for sea/air freight.</p>
              </div>
              <div className="faq-item">
                <h4>What quality certifications do you have?</h4>
                <p>We are ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified. Products are tested as per IS/BS/ASTM standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="fabrication-certifications-section">
          <div className="certifications-container">
            <div className="certifications-header">
              <span className="certifications-tag">Quality Assurance</span>
              <h2>Certified Excellence</h2>
            </div>
            
            <div className="certifications-grid">
              <div className="certification-badge">
                <div className="badge-icon">🏆</div>
                <div className="badge-content">
                  <h4>ISO 9001:2015</h4>
                  <p>Quality Management System</p>
                </div>
              </div>
              <div className="certification-badge">
                <div className="badge-icon">🌿</div>
                <div className="badge-content">
                  <h4>ISO 14001:2015</h4>
                  <p>Environmental Management</p>
                </div>
              </div>
              <div className="certification-badge">
                <div className="badge-icon">⚠️</div>
                <div className="badge-content">
                  <h4>ISO 45001:2018</h4>
                  <p>Occupational Health & Safety</p>
                </div>
              </div>
              <div className="certification-badge">
                <div className="badge-icon">🔬</div>
                <div className="badge-content">
                  <h4>CE Certified</h4>
                  <p>European Conformity</p>
                </div>
              </div>
            </div>

            <div className="quality-promise">
              <div className="promise-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="promise-content">
                <h4>Our Quality Promise</h4>
                <p>Every product undergoes rigorous quality checks including dimensional inspection, weld testing, load testing, and surface finish verification before dispatch.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Contact Button */}
      <div className="floating-contact">
        <Link href="/get-quote" className="floating-btn pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>Get Quote</span>
        </Link>
      </div>

      {/* Animated Background Particles */}
      <div className="particles-container">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
        <div className="particle p5" />
      </div>

      <style jsx>{`
        .fabrication-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f5efe9 0%, #e8e0d5 100%);
        }

        /* Floating Contact Button */
        .floating-contact {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
        }

        .floating-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #fff;
          padding: 16px 24px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 40px rgba(116, 6, 13, 0.4);
          transition: all 0.3s ease;
        }

        .floating-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 50px rgba(116, 6, 13, 0.5);
        }

        .floating-btn.pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 10px 40px rgba(116, 6, 13, 0.4); }
          50% { box-shadow: 0 10px 40px rgba(116, 6, 13, 0.6), 0 0 0 10px rgba(116, 6, 13, 0.1); }
          100% { box-shadow: 0 10px 40px rgba(116, 6, 13, 0.4); }
        }

        /* Animated Particles */
        .particles-container {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(201, 162, 77, 0.3);
          border-radius: 50%;
          animation: float 20s infinite;
        }

        .particle.p1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          animation-duration: 25s;
        }

        .particle.p2 {
          top: 60%;
          left: 85%;
          width: 15px;
          height: 15px;
          animation-delay: 5s;
          animation-duration: 30s;
        }

        .particle.p3 {
          top: 40%;
          left: 50%;
          width: 8px;
          height: 8px;
          animation-delay: 2s;
          animation-duration: 22s;
        }

        .particle.p4 {
          top: 80%;
          left: 20%;
          width: 12px;
          height: 12px;
          animation-delay: 7s;
          animation-duration: 28s;
        }

        .particle.p5 {
          top: 10%;
          left: 70%;
          width: 6px;
          height: 6px;
          animation-delay: 3s;
          animation-duration: 18s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(100px, -100px) rotate(90deg);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50px, 100px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translate(150px, 50px) rotate(270deg);
            opacity: 0.5;
          }
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
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          color: #0F0D0C;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 50px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.4);
          transition: all 0.3s ease;
        }

        .fabrication-back-link:hover {
          background: linear-gradient(135deg, #D4AF37 0%, #E6D3A3 100%);
          box-shadow: 0 6px 25px rgba(201, 162, 77, 0.6);
          transform: translateX(-4px);
        }

        .fabrication-back-link svg {
          stroke: #0F0D0C;
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
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* Coming Soon Banner */
        .coming-soon-banner {
          margin-top: 40px;
          padding: 30px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05) 0%, rgba(201, 162, 77, 0.1) 100%);
          border: 2px dashed rgba(201, 162, 77, 0.4);
          border-radius: 16px;
          text-align: center;
        }

        .coming-soon-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #74060D;
          font-size: 20px;
          font-weight: 600;
        }

        .coming-soon-content svg {
          color: #C9A24D;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
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

        /* Carousel Indicators */
        .carousel-indicators {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .carousel-dot.active {
          background: #C9A24D;
          transform: scale(1.2);
          box-shadow: 0 0 8px rgba(201, 162, 77, 0.6);
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

        /* Product Hover Details Popup */
        .product-hover-details {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(180deg, rgba(116, 6, 13, 0.95) 0%, rgba(90, 5, 10, 0.98) 100%);
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 10;
          backdrop-filter: blur(10px);
        }

        .product-hover-details.visible {
          max-height: 300px;
          padding: 16px;
        }

        .hover-details-content {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease 0.1s;
        }

        .product-hover-details.visible .hover-details-content {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-description {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0 0 12px;
        }

        .hover-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }

        .hover-spec-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(201, 162, 77, 0.2);
          color: #C9A24D;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 20px;
          border: 1px solid rgba(201, 162, 77, 0.3);
        }

        .hover-spec-tag svg {
          color: #4ade80;
        }

        .hover-cta {
          display: flex;
          justify-content: flex-end;
        }

        .hover-enquire {
          font-size: 12px;
          font-weight: 700;
          color: #C9A24D;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hover-enquire:hover {
          color: #fff;
          letter-spacing: 1px;
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

        /* Responsive */
        @media (max-width: 1200px) {
          .fabrication-products-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .coming-soon-banner {
            margin-top: 30px;
            padding: 24px;
          }

          .coming-soon-content {
            font-size: 18px;
          }
        }

        @media (max-width: 992px) {
          .fabrication-hero h1 {
            font-size: 40px;
          }

          .fabrication-products-grid {
            grid-template-columns: repeat(2, 1fr);
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

          .fabrication-back-link {
            top: 100px !important;
            left: 20px !important;
            font-size: 12px !important;
            padding: 8px 16px !important;
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

          .coming-soon-banner {
            margin-top: 24px;
            padding: 20px;
          }

          .coming-soon-content {
            font-size: 16px;
            flex-direction: column;
            gap: 8px;
          }

          .fabrication-product-name {
            font-size: 13px;
            min-height: 36px;
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
            top: 100px !important;
            left: 16px !important;
            font-size: 11px !important;
            padding: 8px 14px !important;
            letter-spacing: 0.5px !important;
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
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* DETAILS SECTION STYLES */
        /* ═══════════════════════════════════════════════════════════════ */

        /* Section Divider */
        .fabrication-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 60px 20px 40px;
          background: linear-gradient(180deg, #e8e0d5 0%, #f5efe9 100%);
        }

        .divider-line {
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9A24D, transparent);
        }

        .divider-text {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #74060D;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* BENTO GRID SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-bento-section {
          background: linear-gradient(180deg, #f5efe9 0%, #fff 100%);
          padding: 60px 20px 80px;
        }

        .fabrication-bento-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .bento-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .bento-tag {
          display: inline-block;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #fff;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .bento-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 12px;
        }

        .bento-header p {
          font-size: 18px;
          color: #6a5a5a;
          margin: 0;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(3, auto);
          gap: 20px;
        }

        .bento-card {
          position: relative;
          background: #fff;
          border-radius: 24px;
          padding: 28px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(116, 6, 13, 0.06);
          border: 1px solid rgba(201, 162, 77, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.12);
          border-color: #C9A24D;
        }

        .bento-card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(201, 162, 77, 0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .bento-card:hover .bento-card-glow {
          opacity: 1;
        }

        /* Bento Large Card */
        .bento-large {
          grid-column: span 2;
          grid-row: span 2;
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          color: #fff;
        }

        .bento-large h3 {
          font-size: 28px;
          font-weight: 700;
          margin: 20px 0 12px;
          color: #fff;
        }

        .bento-large p {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255,255,255,0.85);
          margin: 0 0 24px;
        }

        .bento-card-icon {
          width: 70px;
          height: 70px;
          background: rgba(201, 162, 77, 0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A24D;
        }

        .bento-card-icon.small {
          width: 50px;
          height: 50px;
          border-radius: 14px;
        }

        .bento-stats-row {
          display: flex;
          gap: 30px;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .bento-stat-item {
          display: flex;
          flex-direction: column;
        }

        .bento-stat-item .stat-value {
          font-size: 32px;
          font-weight: 800;
          color: #C9A24D;
        }

        .bento-stat-item .stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }

        /* Bento Tall Card */
        .bento-tall {
          grid-row: span 2;
        }

        .bento-icon-float {
          font-size: 36px;
          margin-bottom: 16px;
        }

        .bento-tall h3 {
          font-size: 22px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 16px;
        }

        .bento-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .bento-list li {
          padding: 10px 0;
          border-bottom: 1px solid rgba(201, 162, 77, 0.15);
          color: #5a4a4a;
          font-size: 14px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bento-list li:last-child {
          border-bottom: none;
        }

        .bento-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #C9A24D;
          border-radius: 50%;
        }

        /* Bento Small Cards */
        .bento-small {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 140px;
        }

        .bento-small.accent {
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
        }

        .bento-number {
          font-size: 48px;
          font-weight: 800;
          color: #74060D;
          line-height: 1;
        }

        .bento-small.accent .bento-number {
          color: #74060D;
        }

        .bento-label {
          font-size: 14px;
          color: #6a5a5a;
          font-weight: 600;
          margin-top: 8px;
        }

        .bento-small.accent .bento-label {
          color: rgba(116, 6, 13, 0.8);
        }

        /* Bento Wide Card */
        .bento-wide {
          grid-column: span 2;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .bento-wide-content {
          flex: 1;
          min-width: 200px;
        }

        .bento-wide h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 6px;
        }

        .bento-wide p {
          font-size: 14px;
          color: #6a5a5a;
          margin: 0;
        }

        .export-flags {
          font-size: 24px;
          letter-spacing: 8px;
        }

        /* Bento Medium Card */
        .bento-medium h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 16px;
        }

        .capacity-meter {
          margin-bottom: 16px;
        }

        .capacity-bar {
          height: 8px;
          background: #e8e0d5;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 8px;
        }

        .capacity-fill {
          height: 100%;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          border-radius: 10px;
          transition: width 1s ease;
        }

        .capacity-meter span {
          font-size: 14px;
          font-weight: 700;
          color: #C9A24D;
        }

        .bento-medium p {
          font-size: 14px;
          color: #6a5a5a;
          margin: 0;
          line-height: 1.6;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* MANUFACTURING PROCESS SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-process-section {
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .fabrication-process-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 20%, rgba(201, 162, 77, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(201, 162, 77, 0.1) 0%, transparent 30%);
        }

        .process-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .process-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .process-tag {
          display: inline-block;
          background: rgba(201, 162, 77, 0.2);
          color: #C9A24D;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .process-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
        }

        .process-header p {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }

        .process-timeline {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          position: relative;
        }

        .process-line {
          position: absolute;
          top: 60px;
          left: 8%;
          right: 8%;
          height: 3px;
          background: linear-gradient(90deg, rgba(201, 162, 77, 0.3), #C9A24D, rgba(201, 162, 77, 0.3));
          z-index: 0;
        }

        .process-step {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #74060D;
          margin: 0 auto 20px;
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.4);
          position: relative;
        }

        .step-number::after {
          content: '';
          position: absolute;
          inset: -5px;
          border: 2px solid rgba(201, 162, 77, 0.3);
          border-radius: 50%;
        }

        .step-content {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 24px 16px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .step-content:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-5px);
          border-color: rgba(201, 162, 77, 0.3);
        }

        .step-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .step-content h4 {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
        }

        .step-content p {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          margin: 0;
          line-height: 1.5;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* INDUSTRIES SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-industries-section {
          background: #fff;
          padding: 80px 20px;
        }

        .industries-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .industries-tag {
          display: inline-block;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #fff;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .industries-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 12px;
        }

        .industries-header p {
          font-size: 18px;
          color: #6a5a5a;
          margin: 0;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .industry-card {
          background: linear-gradient(135deg, #f9f6f2 0%, #fff 100%);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          border: 2px solid transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .industry-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.12);
        }

        .industry-card:hover::before {
          transform: scaleX(1);
        }

        .industry-icon {
          font-size: 48px;
          margin-bottom: 16px;
          display: block;
        }

        .industry-card h4 {
          font-size: 18px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 8px;
        }

        .industry-card p {
          font-size: 14px;
          color: #6a5a5a;
          margin: 0;
          line-height: 1.5;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* CAPABILITIES SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-capabilities-section {
          background: linear-gradient(180deg, #f5efe9 0%, #e8e0d5 100%);
          padding: 80px 20px;
        }

        .capabilities-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .capabilities-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .capabilities-tag {
          display: inline-block;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #fff;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .capabilities-left h2 {
          font-size: 38px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 16px;
        }

        .capabilities-left > p {
          font-size: 16px;
          color: #6a5a5a;
          line-height: 1.7;
          margin: 0 0 30px;
        }

        .capability-highlights {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .capability-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 20px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 15px rgba(116, 6, 13, 0.06);
          transition: all 0.3s ease;
        }

        .capability-item:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.1);
        }

        .capability-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.1) 0%, rgba(201, 162, 77, 0.1) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #74060D;
          flex-shrink: 0;
        }

        .capability-item span {
          font-size: 15px;
          font-weight: 600;
          color: #4a3a3a;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .spec-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          box-shadow: 0 4px 30px rgba(116, 6, 13, 0.08);
          border: 2px solid transparent;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .spec-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.02) 0%, rgba(201, 162, 77, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .spec-card:hover {
          border-color: #C9A24D;
          transform: translateY(-5px);
        }

        .spec-card:hover::before {
          opacity: 1;
        }

        .spec-value {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          line-height: 1;
          margin-bottom: 8px;
          position: relative;
        }

        .spec-label {
          font-size: 14px;
          color: #6a5a5a;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* CERTIFICATIONS SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-certifications-section {
          background: #fff;
          padding: 80px 20px;
        }

        .certifications-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .certifications-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .certifications-tag {
          display: inline-block;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #fff;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .certifications-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          margin: 0;
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 50px;
        }

        .certification-badge {
          background: linear-gradient(135deg, #f9f6f2 0%, #fff 100%);
          border-radius: 20px;
          padding: 28px 20px;
          text-align: center;
          border: 2px solid rgba(201, 162, 77, 0.2);
          transition: all 0.4s ease;
        }

        .certification-badge:hover {
          transform: translateY(-5px);
          border-color: #C9A24D;
          box-shadow: 0 15px 40px rgba(116, 6, 13, 0.1);
        }

        .badge-icon {
          font-size: 42px;
          margin-bottom: 16px;
        }

        .badge-content h4 {
          font-size: 16px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 6px;
        }

        .badge-content p {
          font-size: 13px;
          color: #6a5a5a;
          margin: 0;
        }

        .quality-promise {
          display: flex;
          align-items: center;
          gap: 24px;
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          border-radius: 24px;
          padding: 32px 40px;
        }

        .promise-icon {
          width: 70px;
          height: 70px;
          background: rgba(201, 162, 77, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A24D;
          flex-shrink: 0;
        }

        .promise-content h4 {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
        }

        .promise-content p {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          margin: 0;
          line-height: 1.7;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* VIDEO SHOWCASE SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-video-section {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .fabrication-video-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(201, 162, 77, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(116, 6, 13, 0.15) 0%, transparent 40%);
        }

        .video-section-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .video-tag {
          display: inline-block;
          background: rgba(201, 162, 77, 0.2);
          color: #C9A24D;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .video-content h2 {
          font-size: 42px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
        }

        .video-content > p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0 0 30px;
        }

        .video-features {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 30px;
        }

        .video-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-feature .feature-icon {
          font-size: 20px;
        }

        .video-feature span:last-child {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
        }

        .video-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          color: #1a1a2e;
          font-size: 16px;
          font-weight: 700;
          padding: 16px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.4);
        }

        .video-play-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(201, 162, 77, 0.5);
        }

        .video-preview {
          position: relative;
        }

        .video-coming-soon {
          background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.9) 100%);
          border: 2px dashed rgba(201, 162, 77, 0.4);
          border-radius: 24px;
          aspect-ratio: 16/10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .coming-soon-icon {
          width: 100px;
          height: 100px;
          background: rgba(201, 162, 77, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: #C9A24D;
          animation: pulse-video 2s ease-in-out infinite;
        }

        .coming-soon-icon svg {
          margin-left: 8px;
        }

        @keyframes pulse-video {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        .video-coming-soon h3 {
          color: #C9A24D;
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 12px;
        }

        .video-coming-soon p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
          margin: 0;
        }

        .video-thumbnail {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 16/10;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .video-thumbnail:hover .video-overlay {
          background: rgba(0, 0, 0, 0.3);
        }

        .play-button-large {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #74060D;
          transition: all 0.3s ease;
          box-shadow: 0 4px 30px rgba(201, 162, 77, 0.5);
        }

        .play-button-large svg {
          margin-left: 5px;
        }

        .video-thumbnail:hover .play-button-large {
          transform: scale(1.1);
        }

        .video-duration {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* LIVE STATS COUNTER SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-stats-section {
          background: #fff;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        .stats-bg-pattern {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(90deg, transparent 49.5%, rgba(201, 162, 77, 0.05) 49.5%, rgba(201, 162, 77, 0.05) 50.5%, transparent 50.5%),
            linear-gradient(0deg, transparent 49.5%, rgba(201, 162, 77, 0.05) 49.5%, rgba(201, 162, 77, 0.05) 50.5%, transparent 50.5%);
          background-size: 60px 60px;
        }

        .stats-section-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .stats-content {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .stat-counter-card {
          background: linear-gradient(135deg, #f9f6f2 0%, #fff 100%);
          border-radius: 24px;
          padding: 32px 24px;
          text-align: center;
          border: 2px solid rgba(201, 162, 77, 0.15);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-counter-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .stat-counter-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.12);
        }

        .stat-counter-card:hover::before {
          transform: scaleX(1);
        }

        .stat-counter-card.highlight {
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          border-color: #74060D;
        }

        .stat-counter-card.highlight .counter-icon,
        .stat-counter-card.highlight .counter-value,
        .stat-counter-card.highlight .counter-label {
          color: #fff;
        }

        .stat-counter-card.highlight .counter-value {
          color: #C9A24D;
        }

        .counter-icon {
          font-size: 36px;
          margin-bottom: 12px;
        }

        .counter-value {
          font-size: 48px;
          font-weight: 800;
          color: #74060D;
          line-height: 1;
          margin-bottom: 8px;
        }

        .counter-label {
          font-size: 14px;
          font-weight: 600;
          color: #6a5a5a;
          margin-bottom: 16px;
        }

        .counter-bar {
          height: 6px;
          background: rgba(116, 6, 13, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .stat-counter-card.highlight .counter-bar {
          background: rgba(255, 255, 255, 0.2);
        }

        .counter-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          border-radius: 10px;
          animation: fillBar 2s ease forwards;
        }

        @keyframes fillBar {
          from { width: 0; }
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* TESTIMONIALS SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-testimonials-section {
          background: linear-gradient(180deg, #f5efe9 0%, #fff 100%);
          padding: 80px 20px;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonials-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .testimonials-tag {
          display: inline-block;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #fff;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .testimonials-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 12px;
        }

        .testimonials-header p {
          font-size: 18px;
          color: #6a5a5a;
          margin: 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          gap: 24px;
        }

        .testimonial-card {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 30px rgba(116, 6, 13, 0.06);
          border: 2px solid transparent;
          transition: all 0.4s ease;
          position: relative;
        }

        .testimonial-card:hover {
          border-color: #C9A24D;
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.12);
        }

        .testimonial-card.featured {
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          grid-row: span 1;
        }

        .testimonial-card.featured .testimonial-quote,
        .testimonial-card.featured .testimonial-text,
        .testimonial-card.featured .author-info h4 {
          color: #fff;
        }

        .testimonial-card.featured .author-info span {
          color: rgba(255, 255, 255, 0.7);
        }

        .testimonial-quote {
          font-size: 72px;
          font-weight: 800;
          color: #C9A24D;
          line-height: 0.5;
          margin-bottom: 16px;
          opacity: 0.5;
        }

        .testimonial-text {
          font-size: 15px;
          color: #4a3a3a;
          line-height: 1.8;
          margin: 0 0 24px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 800;
          color: #74060D;
        }

        .author-info h4 {
          font-size: 16px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 4px;
        }

        .author-info span {
          font-size: 13px;
          color: #6a5a5a;
        }

        .testimonial-rating {
          font-size: 16px;
          letter-spacing: 2px;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* CLIENT LOGOS MARQUEE */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-clients-section {
          background: #74060D;
          padding: 40px 0;
          overflow: hidden;
        }

        .clients-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .clients-container h3 {
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0 0 24px;
        }

        .clients-marquee {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 60px;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .client-logo {
          flex-shrink: 0;
          font-size: 18px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.4);
          padding: 10px 30px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .client-logo:hover {
          color: #C9A24D;
          border-color: #C9A24D;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* COMPARISON TABLE SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-comparison-section {
          background: linear-gradient(180deg, #fff 0%, #f5efe9 100%);
          padding: 80px 20px;
        }

        .comparison-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .comparison-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .comparison-tag {
          display: inline-block;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #fff;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .comparison-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 12px;
        }

        .comparison-header p {
          font-size: 18px;
          color: #6a5a5a;
          margin: 0;
        }

        .comparison-table {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 50px rgba(116, 6, 13, 0.1);
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          border-bottom: 1px solid rgba(201, 162, 77, 0.15);
        }

        .comparison-row:last-child {
          border-bottom: none;
        }

        .comparison-row.header {
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
        }

        .comparison-row.header > div {
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .comparison-row.header .comparison-ynm {
          color: #C9A24D;
        }

        .comparison-row > div {
          padding: 18px 24px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .comparison-feature {
          font-weight: 600;
          color: #4a3a3a;
          background: rgba(245, 239, 233, 0.5);
        }

        .comparison-ynm {
          color: #2d5a27;
          font-weight: 500;
        }

        .comparison-others {
          color: #6a5a5a;
          font-weight: 500;
        }

        .comparison-row .check {
          color: #22c55e;
          font-weight: 800;
          font-size: 16px;
        }

        .comparison-row .cross {
          color: #ef4444;
          font-weight: 800;
          font-size: 16px;
        }

        .comparison-row .partial {
          color: #f59e0b;
          font-weight: 800;
          font-size: 16px;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* FAQ SECTION */
        /* ═══════════════════════════════════════════════════════════════ */
        .fabrication-faq-section {
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          padding: 80px 20px;
          position: relative;
        }

        .fabrication-faq-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 90%, rgba(201, 162, 77, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 90% 10%, rgba(201, 162, 77, 0.1) 0%, transparent 30%);
        }

        .faq-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .faq-tag {
          display: inline-block;
          background: rgba(201, 162, 77, 0.2);
          color: #C9A24D;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .faq-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #fff;
          margin: 0;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(201, 162, 77, 0.3);
          transform: translateY(-3px);
        }

        .faq-item h4 {
          font-size: 16px;
          font-weight: 700;
          color: #C9A24D;
          margin: 0 0 12px;
        }

        .faq-item p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0;
        }

        /* ═══════════════════════════════════════════════════════════════ */
        /* DETAILS SECTION RESPONSIVE STYLES */
        /* ═══════════════════════════════════════════════════════════════ */
        @media (max-width: 1200px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .bento-large {
            grid-column: span 2;
            grid-row: span 1;
          }

          .bento-tall {
            grid-row: span 1;
          }

          .bento-wide {
            grid-column: span 2;
          }
        }

        @media (max-width: 992px) {
          .bento-header h2,
          .process-header h2,
          .industries-header h2,
          .capabilities-left h2,
          .certifications-header h2 {
            font-size: 32px;
          }

          .process-timeline {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .process-line {
            display: none;
          }

          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .capabilities-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .certifications-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }

          .bento-large,
          .bento-wide {
            grid-column: span 1;
          }

          .bento-large h3 {
            font-size: 24px;
          }

          .bento-stats-row {
            flex-wrap: wrap;
          }

          .process-timeline {
            grid-template-columns: repeat(2, 1fr);
          }

          .step-content h4 {
            font-size: 14px;
          }

          .step-content p {
            font-size: 12px;
          }

          .quality-promise {
            flex-direction: column;
            text-align: center;
            padding: 28px;
          }

          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .spec-value {
            font-size: 32px;
          }
        }

        @media (max-width: 480px) {
          .fabrication-divider {
            padding: 40px 20px 30px;
          }

          .divider-line {
            width: 50px;
          }

          .divider-text {
            font-size: 12px;
            letter-spacing: 2px;
          }

          .bento-header h2,
          .process-header h2,
          .industries-header h2,
          .capabilities-left h2,
          .certifications-header h2 {
            font-size: 26px;
          }

          .bento-header p,
          .process-header p,
          .industries-header p {
            font-size: 15px;
          }

          .bento-card {
            padding: 20px;
            border-radius: 18px;
          }

          .bento-number {
            font-size: 36px;
          }

          .process-timeline {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .step-number {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }

          .industries-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .industry-card {
            padding: 24px 20px;
          }

          .industry-icon {
            font-size: 36px;
          }

          .capability-item {
            padding: 14px 16px;
          }

          .capability-item span {
            font-size: 13px;
          }

          .spec-card {
            padding: 24px 16px;
          }

          .spec-value {
            font-size: 28px;
          }

          .certifications-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .certification-badge {
            padding: 24px 16px;
          }

          .quality-promise {
            padding: 24px 20px;
          }

          .promise-icon {
            width: 60px;
            height: 60px;
          }

          .promise-content h4 {
            font-size: 18px;
          }

          .promise-content p {
            font-size: 14px;
          }

          /* Video Section Responsive */
          .video-section-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .video-content h2 {
            font-size: 26px;
          }

          .video-features {
            flex-direction: column;
            gap: 12px;
          }

          .video-feature {
            padding: 10px 16px;
          }

          .play-button-large {
            width: 60px;
            height: 60px;
          }

          /* Stats Section Responsive */
          .stats-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .stat-counter-card {
            padding: 24px 16px;
          }

          .counter-value {
            font-size: 36px;
          }

          /* Testimonials Responsive */
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .testimonial-card {
            padding: 24px;
          }

          .testimonials-header h2 {
            font-size: 26px;
          }

          /* Comparison Table Responsive */
          .comparison-row {
            grid-template-columns: 1fr;
          }

          .comparison-row > div {
            padding: 14px 20px;
            border-bottom: 1px solid rgba(201, 162, 77, 0.1);
          }

          .comparison-row > div:last-child {
            border-bottom: none;
          }

          .comparison-row.header {
            display: none;
          }

          .comparison-feature {
            font-weight: 700;
            color: #74060D;
          }

          .comparison-ynm::before {
            content: 'YNM: ';
            color: #74060D;
            font-weight: 700;
          }

          .comparison-others::before {
            content: 'Others: ';
            color: #6a5a5a;
            font-weight: 600;
          }

          .comparison-header h2 {
            font-size: 26px;
          }

          /* FAQ Responsive */
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .faq-item {
            padding: 20px;
          }

          .faq-header h2 {
            font-size: 26px;
          }

          /* Hover Details Responsive */
          .product-hover-details.visible {
            padding: 12px;
          }

          .hover-description {
            font-size: 11px;
          }

          .hover-spec-tag {
            font-size: 9px;
            padding: 3px 6px;
          }

          /* Floating Button Responsive */
          .floating-contact {
            bottom: 20px;
            right: 20px;
          }

          .floating-btn {
            padding: 14px 20px;
            font-size: 14px;
          }

          .floating-btn span {
            display: none;
          }

          .floating-btn {
            padding: 14px;
            border-radius: 50%;
          }

          /* Hide particles on mobile */
          .particles-container {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .video-section-container {
            gap: 30px;
          }

          .video-content h2 {
            font-size: 28px;
          }

          .stats-content {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 992px) {
          .video-section-container {
            grid-template-columns: 1fr;
          }

          .stats-content {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonial-card.featured {
            grid-column: span 2;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
