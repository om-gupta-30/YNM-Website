import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Flag from "@/components/Flag";

const roadSafetyProducts = [
  // Road Studs
  {
    id: "rsf-road-stud-twin-shank",
    name: "Road Stud - Twin Shank",
    images: ["/assets/roadsafety/twin-shank-road-stud-1.jpg", "/assets/roadsafety/twin-shank-road-stud-2.jpg", "/assets/roadsafety/twin-shank-road-stud-3.jpg"],
    category: "Road Studs",
    description: "High-visibility twin shank road studs for lane demarcation and road edge marking on highways and urban roads.",
    specs: ["Twin shank design", "High reflectivity", "Weather resistant", "IRC compliant"]
  },
  {
    id: "rsf-road-stud-abs",
    name: "Road Stud - ABS",
    images: ["/assets/roadsafety/abs-road-stud-1.jpg", "/assets/roadsafety/abs-road-stud-2.jpg", "/assets/roadsafety/abs-road-stud-3.jpg"],
    category: "Road Studs",
    description: "Durable ABS plastic road studs with excellent impact resistance for high-traffic roads and intersections.",
    specs: ["ABS body", "Impact resistant", "UV stabilized", "Cost effective"]
  },
  {
    id: "rsf-road-stud-aluminium",
    name: "Road Stud - Aluminium",
    images: ["/assets/roadsafety/aluminium-road-stud-1.jpg", "/assets/roadsafety/aluminium-road-stud-2.jpg", "/assets/roadsafety/aluminium-road-stud-3.jpg"],
    category: "Road Studs",
    description: "Premium aluminium road studs offering superior durability and long service life for expressways and highways.",
    specs: ["Aluminium body", "Long life", "Corrosion resistant", "Heavy duty"]
  },

  // Solar Studs
  {
    id: "rsf-solar-stud-twin-shank",
    name: "Solar Stud - Twin Shank",
    images: ["/assets/roadsafety/solar-stud-twin-shank-1.jpg", "/assets/roadsafety/solar-stud-twin-shank-2.jpg", "/assets/roadsafety/solar-stud-twin-shank-3.jpg"],
    category: "Solar Studs",
    description: "Solar-powered twin shank road studs with LED illumination for enhanced night-time visibility on highways.",
    specs: ["Solar powered", "LED illumination", "Twin shank mount", "Auto on/off"]
  },
  {
    id: "rsf-solar-stud-abs",
    name: "Solar Stud - ABS",
    images: ["/assets/roadsafety/solar-stud-abs-1.jpg", "/assets/roadsafety/solar-stud-abs-2.jpg", "/assets/roadsafety/solar-stud-abs-3.jpg"],
    category: "Solar Studs",
    description: "ABS body solar road studs with integrated solar panel and high-intensity LED for all-weather road marking.",
    specs: ["ABS construction", "Solar charged", "High intensity LED", "Waterproof"]
  },
  // Delineators
  {
    id: "rsf-irc-delineator",
    name: "IRC Delineator",
    images: ["/assets/roadsafety/irc-delineator-1.jpg", "/assets/roadsafety/irc-delineator-2.jpg", "/assets/roadsafety/irc-delineator-3.jpg"],
    category: "Delineators",
    description: "IRC-standard delineator posts for road edge marking, curves, and hazardous locations on national highways.",
    specs: ["IRC compliant", "Retro-reflective", "UV resistant", "NHAI approved"]
  },
  {
    id: "rsf-spring-post-750",
    name: "Spring Post (750 mm)",
    images: ["/assets/roadsafety/spring-post-750mm-1.jpg", "/assets/roadsafety/spring-post-750mm-2.jpg", "/assets/roadsafety/spring-post-750mm-3.jpg"],
    category: "Delineators",
    description: "Flexible 750mm spring post delineator that bounces back after vehicle impact for lane separation and median marking.",
    specs: ["750mm height", "Spring back", "High visibility", "Flexible design"]
  },
  {
    id: "rsf-spring-post-1000",
    name: "Spring Post (1000 mm)",
    images: ["/assets/roadsafety/spring-post-1000mm-1.jpg", "/assets/roadsafety/spring-post-1000mm-2.jpg", "/assets/roadsafety/spring-post-1000mm-3.jpg"],
    category: "Delineators",
    description: "Tall 1000mm spring post delineator for enhanced visibility at curves, medians, and construction zones.",
    specs: ["1000mm height", "Spring back", "Reflective strip", "Durable base"]
  },
  // Traffic Control
  {
    id: "rsf-solar-blinker",
    name: "Solar Blinker",
    images: ["/assets/roadsafety/solar-blinker-1.jpg", "/assets/roadsafety/solar-blinker-2.jpg", "/assets/roadsafety/solar-blinker-3.jpg"],
    category: "Traffic Control",
    description: "Solar-powered LED blinker lights for hazard warning, school zones, and accident-prone areas with automatic operation.",
    specs: ["Solar powered", "LED flash", "Auto on/off", "High visibility"]
  },
  {
    id: "rsf-traffic-cone-750",
    name: "Traffic Cone (750 mm)",
    images: ["/assets/roadsafety/traffic-cone-750mm-1.jpg", "/assets/roadsafety/traffic-cone-750mm-2.jpg", "/assets/roadsafety/traffic-cone-750mm-3.jpg"],
    category: "Traffic Control",
    description: "Standard 750mm traffic safety cone with reflective bands for road works, diversions, and temporary marking.",
    specs: ["750mm height", "Reflective bands", "PVC material", "Stackable"]
  },
  {
    id: "rsf-traffic-cone-1000",
    name: "Traffic Cone (1000 mm)",
    images: ["/assets/roadsafety/traffic-cone-1000mm-1.jpg", "/assets/roadsafety/traffic-cone-1000mm-2.jpg", "/assets/roadsafety/traffic-cone-1000mm-3.jpg"],
    category: "Traffic Control",
    description: "Tall 1000mm traffic cone for enhanced visibility at highway construction zones and special event traffic control.",
    specs: ["1000mm height", "High visibility", "Weighted base", "Reflective collar"]
  },
  {
    id: "rsf-antiglare-600",
    name: "Noise Barriers",
    images: ["/assets/roadsafety/antiglare-screen-600mm-1.jpg", "/assets/roadsafety/antiglare-screen-600mm-2.jpg", "/assets/roadsafety/antiglare-screen-600mm-3.jpg"],
    category: "Traffic Control",
    description: "600mm antiglare screens for highway medians to prevent headlight glare from oncoming vehicles at night.",
    specs: ["600mm height", "Glare reduction", "UV stabilized", "Easy mount"]
  },
  {
    id: "rsf-antiglare-900",
    name: "Antiglare Screen (600 mm and 900 mm)",
    images: ["/assets/roadsafety/antiglare-screen-900mm-1.jpg", "/assets/roadsafety/antiglare-screen-900mm-2.jpg", "/assets/roadsafety/antiglare-screen-900mm-3.jpg"],
    category: "Traffic Control",
    description: "900mm antiglare screens for elevated highway sections and express corridors to block headlight dazzle.",
    specs: ["900mm height", "Full glare block", "Wind resistant", "Low maintenance"]
  },
  {
    id: "rsf-water-barricade-2000",
    name: "Water Barricade (2000 mm)",
    images: ["/assets/roadsafety/water-barricade-2000mm-1.jpg", "/assets/roadsafety/water-barricade-2000mm-2.jpg", "/assets/roadsafety/water-barricade-2000mm-3.jpg"],
    category: "Traffic Control",
    description: "Large 2000mm water-filled road barricade for highway construction zones and high-speed traffic diversion.",
    specs: ["2000mm length", "Water filled", "Interlocking", "High visibility"]
  },
  {
    id: "rsf-water-barricade-1000",
    name: "Water Barricade (1000 mm)",
    images: ["/assets/roadsafety/water-barricade-1000mm-1.jpg", "/assets/roadsafety/water-barricade-1000mm-2.jpg", "/assets/roadsafety/water-barricade-1000mm-3.jpg"],
    category: "Traffic Control",
    description: "Compact 1000mm water-filled barricade for urban road works, parking lots, and pedestrian zone protection.",
    specs: ["1000mm length", "Portable", "Water filled", "Reflective strips"]
  },

  // Road Safety
  {
    id: "rsf-reflective-tapes",
    name: "Reflective Tapes",
    images: ["/assets/roadsafety/reflective-tapes-1.jpg", "/assets/roadsafety/reflective-tapes-2.jpg", "/assets/roadsafety/reflective-tapes-3.jpg"],
    category: "Road Safety",
    description: "High-intensity retro-reflective tapes for vehicle marking, road barriers, signages, and safety applications.",
    specs: ["High intensity", "Retro-reflective", "Weather proof", "Multiple colors"]
  },
  {
    id: "rsf-flexible-median-marker",
    name: "Flexible Median Marker",
    images: ["/assets/roadsafety/flexible-median-marker-1.jpg", "/assets/roadsafety/flexible-median-marker-2.jpg", "/assets/roadsafety/flexible-median-marker-3.jpg"],
    category: "Road Safety",
    description: "Flexible PU-based median markers for lane separation and median demarcation that withstand vehicle impact.",
    specs: ["Flexible PU", "Impact resistant", "Reflective panel", "Easy install"]
  },
  {
    id: "rsf-box-median-marker",
    name: "Box Type Median Marker",
    images: ["/assets/roadsafety/box-type-median-marker-1.jpg", "/assets/roadsafety/box-type-median-marker-2.jpg", "/assets/roadsafety/box-type-median-marker-3.jpg"],
    category: "Road Safety",
    description: "Rigid box-type median markers for permanent lane separation and highway median demarcation.",
    specs: ["Box profile", "High visibility", "Durable plastic", "Bolt-down mount"]
  },
  {
    id: "rsf-highway-speed-breaker",
    name: "Highway Speed Breaker",
    images: ["/assets/roadsafety/highway-speed-breaker-1.jpg", "/assets/roadsafety/highway-speed-breaker-2.jpg", "/assets/roadsafety/highway-speed-breaker-3.jpg"],
    category: "Road Safety",
    description: "Modular rubber speed breakers for highways, toll plazas, and residential areas to control vehicle speed.",
    specs: ["Modular design", "Rubber material", "Reflective strips", "Easy install"]
  },
];

const categories = ["All", ...new Set(roadSafetyProducts.map(p => p.category))];

export default function RoadSafetyFurnituresPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [imageIndices, setImageIndices] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices(prev => {
        const newIndices = { ...prev };
        roadSafetyProducts.forEach(product => {
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

  const getProductImage = (product) => {
    if (product.images && product.images.length > 0) {
      const index = imageIndices[product.id] || 0;
      return product.images[index];
    }
    return product.image || "/assets/product-structural-steel.png";
  };

  const filteredProducts = activeCategory === "All"
    ? roadSafetyProducts
    : roadSafetyProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Road Safety Furnitures | Road Studs, Solar Studs, Delineators, Traffic Cones | YNM Safety</title>
        <meta name="description" content="YNM Safety manufactures premium road safety furniture products: road studs, solar studs, delineators, spring posts, solar blinkers, reflective tapes, antiglare screens, median markers, speed breakers, traffic cones, water barricades. ISO certified manufacturer, exports to 50+ countries." />
        <meta name="keywords" content="road safety furniture, road studs manufacturers, solar road studs, ABS road studs, aluminium road studs, delineator posts, spring post delineator, IRC delineator, solar blinker, reflective tapes, antiglare screen, flexible median marker, highway speed breaker, traffic cones, water barricade, road safety products India, road safety equipment Hyderabad" />
        <link rel="canonical" href="https://ynmsafety.com/products/road-safety-furnitures" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ynmsafety.com/products/road-safety-furnitures" />
        <meta property="og:title" content="Road Safety Furnitures | Road Studs, Solar Studs, Delineators | YNM Safety" />
        <meta property="og:description" content="YNM Safety manufactures premium road safety furniture: road studs, solar studs, delineators, traffic cones, speed breakers, water barricades, and more." />
        <meta property="og:image" content="https://ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Road Safety Furnitures | Road Studs, Solar Studs, Delineators | YNM Safety" />
        <meta name="twitter:description" content="Premium road safety furniture: road studs, solar studs, delineators, traffic cones, speed breakers, water barricades." />
        <meta name="twitter:image" content="https://ynmsafety.com/assets/logo-navbar.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ynmsafety.com" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://ynmsafety.com/products" },
                { "@type": "ListItem", "position": 3, "name": "Road Safety Furnitures", "item": "https://ynmsafety.com/products/road-safety-furnitures" }
              ]
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "YNM Safety Road Safety Furniture Products",
              "description": "Complete range of road safety furniture including road studs, solar studs, delineators, traffic control equipment, and road safety accessories",
              "url": "https://ynmsafety.com/products/road-safety-furnitures",
              "numberOfItems": roadSafetyProducts.length,
              "itemListElement": roadSafetyProducts.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "name": p.name
              }))
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="rsf-page">
        {/* Hero Section */}
        <section className="rsf-hero">
          <div className="rsf-hero-bg" />
          <div className="rsf-hero-overlay" />

          <Link
            href="/products"
            className="rsf-back-link"
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

          <div className="rsf-hero-content">
            <span className="rsf-hero-tag">Road Safety Furnitures</span>
            <h1>Road Safety Furniture Products</h1>
            <p>Premium road studs, solar studs, delineators, traffic cones, and safety equipment for highways and urban roads</p>
            <div className="rsf-hero-stats">
              <div className="rsf-stat">
                <span className="rsf-stat-number">{roadSafetyProducts.length}</span>
                <span className="rsf-stat-label">Products</span>
              </div>
              <div className="rsf-stat">
                <span className="rsf-stat-number">ISO</span>
                <span className="rsf-stat-label">Certified</span>
              </div>
              <div className="rsf-stat">
                <span className="rsf-stat-number">50+</span>
                <span className="rsf-stat-label">Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="rsf-filter-section">
          <div className="rsf-filter-container">
            <div className="rsf-filter-tabs">
              {categories.map((cat) => {
                const count = cat === "All"
                  ? roadSafetyProducts.length
                  : roadSafetyProducts.filter(p => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    className={`rsf-filter-tab ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                    <span className="filter-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="rsf-products-section" aria-labelledby="rsf-products-heading">
          <div className="rsf-products-container">
            <h2 id="rsf-products-heading" className="sr-only">Road Safety Furniture Products</h2>
            <div className="rsf-products-grid">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`rsf-product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="rsf-product-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="rsf-product-image">
                    <Image
                      src={getProductImage(product)}
                      alt={`${product.name} - YNM Safety Road Safety Furniture | Road Safety Equipment India`}
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
                    <div className="rsf-product-overlay" />

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
                  <div className="rsf-product-content">
                    <span className="rsf-product-category">{product.category}</span>
                    <h3 className="rsf-product-name">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="rsf-divider">
          <div className="divider-line" />
          <span className="divider-text">Discover More</span>
          <div className="divider-line" />
        </div>

        {/* Why Choose YNM Section */}
        <section className="rsf-bento-section">
          <div className="rsf-bento-container">
            <div className="bento-header">
              <span className="bento-tag">Why Choose YNM</span>
              <h2>Road Safety Excellence</h2>
              <p>Trusted road safety furniture manufacturer with proven quality and reliability</p>
            </div>

            <div className="bento-grid">
              <div className="bento-card bento-large">
                <div className="bento-card-glow" />
                <div className="bento-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Safety-First Manufacturing</h3>
                <p>Every road safety product is manufactured to meet stringent IRC, MoRTH, and NHAI standards with rigorous quality testing at every stage.</p>
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

              <div className="bento-card bento-tall">
                <div className="bento-card-glow" />
                <div className="bento-icon-float">🛡️</div>
                <h3>Product Range</h3>
                <ul className="bento-list">
                  <li>Road Studs</li>
                  <li>Solar Studs</li>
                  <li>Delineators</li>
                  <li>Traffic Cones</li>
                  <li>Water Barricades</li>
                  <li>Speed Breakers</li>
                  <li>Reflective Tapes</li>
                </ul>
              </div>

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
                  <p>Exporting road safety products to 50+ countries across Asia, Europe, Middle East, Africa, and the Americas</p>
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

              <div className="bento-card bento-medium">
                <div className="bento-card-glow" />
                <h3>Capacity</h3>
                <div className="capacity-meter">
                  <div className="capacity-bar">
                    <div className="capacity-fill" style={{ width: '85%' }} />
                  </div>
                  <span>100000 MT+/Year</span>
                </div>
                <p>High-volume production with flexible batch sizes from prototypes to mass production runs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="rsf-industries-section">
          <div className="industries-container">
            <div className="industries-header">
              <span className="industries-tag">Applications</span>
              <h2>Where Our Products Are Used</h2>
              <p>Road safety furniture for diverse infrastructure applications</p>
            </div>

            <div className="industries-grid">
              <div className="industry-card">
                <div className="industry-icon">🛣️</div>
                <h4>Highways & Expressways</h4>
                <p>Road studs, delineators, speed breakers</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏙️</div>
                <h4>Urban Roads</h4>
                <p>Traffic cones, median markers, barricades</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🚧</div>
                <h4>Construction Zones</h4>
                <p>Water barricades, cones, blinkers</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🌉</div>
                <h4>Bridges & Tunnels</h4>
                <p>Reflective tapes, solar studs, delineators</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏗️</div>
                <h4>Toll Plazas</h4>
                <p>Speed breakers, solar studs, blinkers</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🚦</div>
                <h4>Intersections</h4>
                <p>Road studs, reflective markers, cones</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🅿️</div>
                <h4>Parking Areas</h4>
                <p>Speed breakers, delineators, barricades</p>
              </div>
              <div className="industry-card">
                <div className="industry-icon">🏫</div>
                <h4>School Zones</h4>
                <p>Solar blinkers, speed breakers, cones</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="rsf-comparison-section">
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
                <div className="comparison-feature">IRC / MoRTH Compliance</div>
                <div className="comparison-ynm"><span className="check">✓</span> Fully compliant</div>
                <div className="comparison-others"><span className="partial">~</span> Partial compliance</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Delivery Timeline</div>
                <div className="comparison-ynm"><span className="check">✓</span> 15-30 days</div>
                <div className="comparison-others"><span className="cross">✗</span> 45-60 days</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Product Testing</div>
                <div className="comparison-ynm"><span className="check">✓</span> In-house lab</div>
                <div className="comparison-others"><span className="cross">✗</span> Third-party only</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-feature">Global Shipping</div>
                <div className="comparison-ynm"><span className="check">✓</span> 50+ countries</div>
                <div className="comparison-others"><span className="cross">✗</span> Domestic only</div>
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
        <section className="rsf-faq-section">
          <div className="faq-container">
            <div className="faq-header">
              <span className="faq-tag">Got Questions?</span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="faq-grid">
              <div className="faq-item">
                <h4>What types of road studs do you manufacture?</h4>
                <p>We manufacture three types of road studs: Twin Shank, ABS, and Aluminium. We also offer solar-powered variants in five types including circular and square aluminium models.</p>
              </div>
              <div className="faq-item">
                <h4>Are your products IRC and MoRTH compliant?</h4>
                <p>Yes, all our road safety furniture products are manufactured as per IRC (Indian Roads Congress) and MoRTH (Ministry of Road Transport and Highways) specifications.</p>
              </div>
              <div className="faq-item">
                <h4>What is the minimum order quantity?</h4>
                <p>MOQ varies by product. Standard items like road studs start from 100 pieces. For large orders like water barricades, please contact us for specific quantities.</p>
              </div>
              <div className="faq-item">
                <h4>Do you provide installation support?</h4>
                <p>Yes, we offer installation guidance and on-site support for large orders. We also provide installation manuals and technical assistance.</p>
              </div>
              <div className="faq-item">
                <h4>What is the warranty on solar studs?</h4>
                <p>Our solar road studs come with a standard 2-year warranty covering LED and solar panel performance under normal usage conditions.</p>
              </div>
              <div className="faq-item">
                <h4>Do you export road safety furniture internationally?</h4>
                <p>Yes, we export to 50+ countries with proper documentation, quality certifications, and logistics support for sea and air freight.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="rsf-certifications-section">
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
                <p>Every road safety product undergoes rigorous quality testing including reflectivity testing, impact resistance, UV stability, and load testing before dispatch.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Animated Background Particles */}
      <div className="particles-container">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
        <div className="particle p5" />
      </div>

      <style jsx>{`
        .rsf-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f5efe9 0%, #e8e0d5 100%);
        }

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

        .particle.p1 { top: 20%; left: 10%; animation-delay: 0s; animation-duration: 25s; }
        .particle.p2 { top: 60%; left: 85%; width: 15px; height: 15px; animation-delay: 5s; animation-duration: 30s; }
        .particle.p3 { top: 40%; left: 50%; width: 8px; height: 8px; animation-delay: 2s; animation-duration: 22s; }
        .particle.p4 { top: 80%; left: 20%; width: 12px; height: 12px; animation-delay: 7s; animation-duration: 28s; }
        .particle.p5 { top: 10%; left: 70%; width: 6px; height: 6px; animation-delay: 3s; animation-duration: 18s; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          25% { transform: translate(100px, -100px) rotate(90deg); opacity: 0.6; }
          50% { transform: translate(-50px, 100px) rotate(180deg); opacity: 0.3; }
          75% { transform: translate(150px, 50px) rotate(270deg); opacity: 0.5; }
        }

        /* Hero */
        .rsf-hero {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 20px 60px;
          overflow: hidden;
        }

        .rsf-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #5a050a 50%, #74060D 100%);
          z-index: 0;
        }

        .rsf-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(201, 162, 77, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(201, 162, 77, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%);
          z-index: 1;
        }

        .rsf-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
        }

        .rsf-hero-tag {
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

        .rsf-hero h1 {
          font-size: 52px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px;
          line-height: 1.1;
          text-shadow: 0 2px 20px rgba(0,0,0,0.3);
        }

        .rsf-hero p {
          font-size: 18px;
          color: rgba(255,255,255,0.9);
          margin: 0 0 36px;
          line-height: 1.7;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .rsf-hero-stats {
          display: flex;
          justify-content: center;
          gap: 50px;
        }

        .rsf-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 24px;
          background: rgba(255,255,255,0.08);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .rsf-stat-number {
          font-size: 36px;
          font-weight: 800;
          color: #C9A24D;
          line-height: 1;
        }

        .rsf-stat-label {
          font-size: 12px;
          color: rgba(255,255,255,0.8);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 6px;
        }

        /* Filter */
        .rsf-filter-section {
          background: #fff;
          padding: 20px;
          position: sticky;
          top: 80px;
          z-index: 100;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .rsf-filter-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .rsf-filter-tabs {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 4px;
          -webkit-overflow-scrolling: touch;
        }

        .rsf-filter-tabs::-webkit-scrollbar { display: none; }

        .rsf-filter-tab {
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

        .rsf-filter-tab:hover {
          border-color: #C9A24D;
          color: #74060D;
        }

        .rsf-filter-tab.active {
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

        .rsf-filter-tab.active .filter-count {
          background: rgba(255,255,255,0.2);
        }

        /* Products Grid */
        .rsf-products-section {
          padding: 50px 20px 80px;
        }

        .rsf-products-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .rsf-products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .rsf-product-card {
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .rsf-product-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.18);
          border-color: #C9A24D;
        }

        .rsf-product-number {
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

        .rsf-product-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1/1;
          overflow: hidden;
          background: linear-gradient(135deg, #f5efe9 0%, #e8dfd4 100%);
        }

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
        }

        .carousel-dot.active {
          background: #C9A24D;
          transform: scale(1.2);
          box-shadow: 0 0 8px rgba(201, 162, 77, 0.6);
        }

        .rsf-product-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(116, 6, 13, 0.6) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .rsf-product-card:hover .rsf-product-overlay {
          opacity: 1;
        }

        .rsf-product-card:hover .rsf-product-image img {
          transform: scale(1.1);
        }

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

        .rsf-product-content {
          padding: 16px;
          background: linear-gradient(to bottom, #fff 0%, #faf8f5 100%);
        }

        .rsf-product-category {
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

        .rsf-product-name {
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

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        /* Divider */
        .rsf-divider {
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

        /* Bento Grid */
        .rsf-bento-section {
          background: linear-gradient(180deg, #f5efe9 0%, #fff 100%);
          padding: 60px 20px 80px;
        }

        .rsf-bento-container {
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

        .bento-card:hover .bento-card-glow { opacity: 1; }

        .bento-large {
          grid-column: span 2;
          grid-row: span 2;
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          color: #fff;
        }

        .bento-large h3 { font-size: 28px; font-weight: 700; margin: 20px 0 12px; color: #fff; }
        .bento-large p { font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.85); margin: 0 0 24px; }

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

        .bento-card-icon.small { width: 50px; height: 50px; border-radius: 14px; }

        .bento-stats-row {
          display: flex;
          gap: 30px;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .bento-stat-item { display: flex; flex-direction: column; }
        .bento-stat-item .stat-value { font-size: 32px; font-weight: 800; color: #C9A24D; }
        .bento-stat-item .stat-label { font-size: 13px; color: rgba(255,255,255,0.7); }

        .bento-tall { grid-row: span 2; }
        .bento-icon-float { font-size: 36px; margin-bottom: 16px; }
        .bento-tall h3 { font-size: 22px; font-weight: 700; color: #74060D; margin: 0 0 16px; }

        .bento-list { list-style: none; padding: 0; margin: 0; }
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
        .bento-list li:last-child { border-bottom: none; }
        .bento-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #C9A24D;
          border-radius: 50%;
        }

        .bento-small {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 140px;
        }

        .bento-small.accent { background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%); }
        .bento-number { font-size: 48px; font-weight: 800; color: #74060D; line-height: 1; }
        .bento-small.accent .bento-number { color: #74060D; }
        .bento-label { font-size: 14px; color: #6a5a5a; font-weight: 600; margin-top: 8px; }
        .bento-small.accent .bento-label { color: rgba(116, 6, 13, 0.8); }

        .bento-wide {
          grid-column: span 2;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .bento-wide-content { flex: 1; min-width: 200px; }
        .bento-wide h3 { font-size: 20px; font-weight: 700; color: #74060D; margin: 0 0 6px; }
        .bento-wide p { font-size: 14px; color: #6a5a5a; margin: 0; }
        .export-flags { font-size: 24px; letter-spacing: 8px; }

        .bento-medium h3 { font-size: 20px; font-weight: 700; color: #74060D; margin: 0 0 16px; }
        .capacity-meter { margin-bottom: 16px; }
        .capacity-bar { height: 8px; background: #e8e0d5; border-radius: 10px; overflow: hidden; margin-bottom: 8px; }
        .capacity-fill { height: 100%; background: linear-gradient(90deg, #74060D, #C9A24D); border-radius: 10px; transition: width 1s ease; }
        .capacity-meter span { font-size: 14px; font-weight: 700; color: #C9A24D; }
        .bento-medium p { font-size: 14px; color: #6a5a5a; margin: 0; line-height: 1.6; }

        /* Industries / Applications */
        .rsf-industries-section {
          background: linear-gradient(135deg, #74060D 0%, #5a050a 100%);
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .rsf-industries-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 10% 20%, rgba(201, 162, 77, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 90% 80%, rgba(201, 162, 77, 0.1) 0%, transparent 30%);
        }

        .industries-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .industries-tag {
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

        .industries-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px;
        }

        .industries-header p {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin: 0;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .industry-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .industry-card:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-5px);
          border-color: #C9A24D;
        }

        .industry-icon {
          font-size: 36px;
          margin-bottom: 12px;
        }

        .industry-card h4 {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px;
        }

        .industry-card p {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          margin: 0;
          line-height: 1.5;
        }

        /* Comparison */
        .rsf-comparison-section {
          background: #fff;
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
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(116, 6, 13, 0.1);
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 1px;
          background: #f0e8df;
        }

        .comparison-row.header {
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
        }

        .comparison-row.header > div {
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .comparison-row > div {
          background: #fff;
          padding: 18px 24px;
          font-size: 14px;
          color: #5a4a4a;
        }

        .comparison-feature { font-weight: 600; color: #74060D; }
        .comparison-ynm { font-weight: 500; }
        .comparison-others { font-weight: 500; color: #8a7a7a; }

        .check { color: #22c55e; font-weight: 700; margin-right: 8px; }
        .cross { color: #ef4444; font-weight: 700; margin-right: 8px; }
        .partial { color: #f59e0b; font-weight: 700; margin-right: 8px; }

        /* FAQ */
        .rsf-faq-section {
          background: linear-gradient(180deg, #f5efe9 0%, #e8e0d5 100%);
          padding: 80px 20px;
        }

        .faq-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .faq-tag {
          display: inline-block;
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          color: #74060D;
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
          color: #74060D;
          margin: 0;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .faq-item {
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 4px 20px rgba(116, 6, 13, 0.06);
          border: 1px solid rgba(201, 162, 77, 0.15);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #C9A24D;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(116, 6, 13, 0.1);
        }

        .faq-item h4 {
          font-size: 16px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 10px;
        }

        .faq-item p {
          font-size: 14px;
          color: #6a5a5a;
          margin: 0;
          line-height: 1.7;
        }

        /* Certifications */
        .rsf-certifications-section {
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
          gap: 20px;
          margin-bottom: 40px;
        }

        .certification-badge {
          background: linear-gradient(135deg, #f5efe9 0%, #fff 100%);
          border-radius: 20px;
          padding: 28px;
          text-align: center;
          border: 1px solid rgba(201, 162, 77, 0.2);
          transition: all 0.3s ease;
        }

        .certification-badge:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(116, 6, 13, 0.1);
          border-color: #C9A24D;
        }

        .badge-icon { font-size: 36px; margin-bottom: 12px; }
        .badge-content h4 { font-size: 16px; font-weight: 700; color: #74060D; margin: 0 0 4px; }
        .badge-content p { font-size: 13px; color: #6a5a5a; margin: 0; }

        .quality-promise {
          display: flex;
          align-items: center;
          gap: 24px;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          padding: 30px 40px;
          border-radius: 20px;
          color: #fff;
        }

        .promise-icon {
          width: 60px;
          height: 60px;
          min-width: 60px;
          background: rgba(201, 162, 77, 0.2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A24D;
        }

        .promise-content h4 { font-size: 18px; font-weight: 700; margin: 0 0 8px; }
        .promise-content p { font-size: 14px; color: rgba(255,255,255,0.85); margin: 0; line-height: 1.7; }

        /* Responsive */
        @media (max-width: 1200px) {
          .rsf-products-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
        }

        @media (max-width: 992px) {
          .rsf-hero h1 { font-size: 40px; }
          .rsf-products-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
          .rsf-hero-stats { gap: 24px; }
          .rsf-stat { padding: 12px 18px; }
          .rsf-stat-number { font-size: 28px; }
          .rsf-filter-section { top: 70px; }
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .bento-large { grid-column: span 2; grid-row: span 1; }
          .bento-tall { grid-row: span 1; }
          .bento-wide { grid-column: span 2; }
          .industries-grid { grid-template-columns: repeat(2, 1fr); }
          .certifications-grid { grid-template-columns: repeat(2, 1fr); }
          .comparison-header h2, .bento-header h2, .faq-header h2,
          .industries-header h2, .certifications-header h2 { font-size: 32px; }
        }

        @media (max-width: 768px) {
          .rsf-hero { min-height: 380px; padding: 100px 20px 50px; }
          .rsf-back-link { top: 100px !important; left: 20px !important; font-size: 12px !important; padding: 8px 16px !important; }
          .rsf-hero h1 { font-size: 32px; }
          .rsf-hero p { font-size: 16px; }
          .rsf-products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .rsf-product-name { font-size: 13px; min-height: 36px; }
          .rsf-hero-stats { flex-wrap: wrap; gap: 16px; }
          .rsf-stat { flex: 1; min-width: 100px; }
          .rsf-stat-number { font-size: 24px; }
          .rsf-stat-label { font-size: 10px; }
          .rsf-filter-tab { padding: 10px 18px; font-size: 13px; }
          .faq-grid { grid-template-columns: 1fr; }
          .comparison-row { grid-template-columns: 1.2fr 1fr 1fr; }
          .comparison-row > div { padding: 14px 16px; font-size: 13px; }
          .quality-promise { flex-direction: column; text-align: center; padding: 24px; }
        }

        @media (max-width: 480px) {
          .rsf-hero h1 { font-size: 26px; }
          .rsf-back-link { top: 100px !important; left: 16px !important; font-size: 11px !important; padding: 8px 14px !important; letter-spacing: 0.5px !important; }
          .rsf-products-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .rsf-product-card { border-radius: 14px; }
          .rsf-product-content { padding: 12px; }
          .rsf-product-name { font-size: 12px; min-height: 34px; }
          .rsf-product-category { font-size: 9px; padding: 3px 8px; }
          .bento-grid { grid-template-columns: 1fr; }
          .bento-large { grid-column: span 1; }
          .bento-wide { grid-column: span 1; }
          .industries-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .certifications-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .comparison-row { grid-template-columns: 1fr; gap: 0; }
          .comparison-row.header { display: none; }
          .comparison-row > div { padding: 12px 16px; }
          .comparison-feature { background: #f5efe9 !important; font-weight: 700; }
        }
      `}</style>
    </>
  );
}
