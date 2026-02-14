import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllProducts as getEnhancedProducts } from "@/lib/productsData";
import { productsData, getAllProducts as getAllProductsFromCategories } from "@/lib/productsCategoriesData";

// Re-export for backward compatibility
export { productsData };

// Helper function to get all products with their IDs for routing
export function getAllProducts() {
  return getAllProductsFromCategories();
}

// Helper function to get product by ID or slug
export function getProductById(id) {
  const allProducts = getAllProducts();
  // Try to find by slug first, then by id
  return allProducts.find((p) => p.slug === id || p.id === id);
}

// Get all products (enhanced + legacy)
export function getAllProductsCombined() {
  const enhanced = getEnhancedProducts();
  const legacy = getAllProducts();
  // Merge and deduplicate by ID
  const combined = [...enhanced];
  legacy.forEach(legacyProduct => {
    if (!combined.find(p => p.id === legacyProduct.id)) {
      combined.push(legacyProduct);
    }
  });
  return combined;
}

export default function ProductsPage() {
  const router = useRouter();
  const { category } = router.query;
  const [activeCategory, setActiveCategory] = useState(category || "all");

  // Handle both query params (legacy) and hash navigation (SEO-friendly)
  useEffect(() => {
    if (category) {
      setActiveCategory(category);
    }
    // Handle hash-based navigation
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.slice(1); // Remove #
      if (hash) {
        setActiveCategory(hash);
        // Scroll to products section smoothly
        setTimeout(() => {
          const productsSection = document.querySelector('.products-grid');
          if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [category]);

  const handleCategoryChange = (categoryKey) => {
    // Redirect to dedicated fabrication page
    if (categoryKey === "fabrication") {
      router.push('/products/fabrication');
      return;
    }
    
    setActiveCategory(categoryKey);
    if (categoryKey === "all") {
      router.push('/products', undefined, { shallow: true });
    } else {
      // Use hash instead of query params for SEO
      router.push(`/products#${categoryKey}`, undefined, { shallow: true });
    }
  };

  const handleProductClick = (product) => {
    // Use slug if available, otherwise fall back to id
    const route = product.slug ? `/products/${product.slug}` : `/products/${product.id}`;
    router.push(route);
  };

  // Get all categories
  const categories = Object.entries(productsData.manufacturing.categories);
  
  // Get all products
  const allProducts = getAllProducts();
  
  // Filter products by category
  const filteredProducts = activeCategory === "all" 
    ? allProducts 
    : categories.find(([key]) => key === activeCategory)?.[1]?.products || [];

  return (
    <>
      <Head>
        <title>Our Products - YNM Safety</title>
        <meta name="description" content="Explore our range of premium paints, metal fabrication, and school furniture products." />
        <link rel="canonical" href="https://www.ynmsafety.com/products" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ynmsafety.com/products" />
        <meta property="og:title" content="Our Products - YNM Safety" />
        <meta property="og:description" content="Explore our range of premium paints, metal fabrication, road safety products, and school furniture." />
        <meta property="og:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Products - YNM Safety" />
        <meta name="twitter:description" content="Explore our range of premium paints, metal fabrication, road safety products, and school furniture." />
        <meta name="twitter:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        
        {/* Schema Markup - ItemList for Products */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "YNM Safety Products",
              "description": "Complete range of road safety and infrastructure products",
              "url": "https://www.ynmsafety.com/products",
              "numberOfItems": 10,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Hot Thermoplastic Road Marking Paint",
                  "url": "https://www.ynmsafety.com/products/hot-thermoplastic-road-marking-paint-manufacturers"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "W Beam Crash Barriers",
                  "url": "https://www.ynmsafety.com/products/w-beam-crash-barrier-manufacturers"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Retro Reflective Signages",
                  "url": "https://www.ynmsafety.com/products/retro-reflective-gantry-signage-manufacturers"
                }
              ]
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
                  "name": "Products",
                  "item": "https://www.ynmsafety.com/products"
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="products-page">
        {/* Hero Section */}
        <section className="products-hero">
          <div className="products-hero-bg" />
          <div className="products-hero-overlay" />
          <div className="products-hero-content">
            <span className="products-hero-tag">Our Products</span>
            <h1>Quality Products for Every Need</h1>
            <p>Explore our comprehensive range of premium paints, metal fabrication, and road safety products</p>
            <p className="products-coming-soon">More products coming soon...</p>
          </div>
        </section>

        {/* Category Filter Tabs */}
        <section className="products-categories-section">
          <div className="products-categories-container">
            <button
              className={`category-tab ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => handleCategoryChange("all")}
            >
              <span className="tab-icon">🌟</span>
              <span>All Products</span>
              <span className="tab-count">({allProducts.length})</span>
            </button>
            {categories.map(([categoryKey, category]) => (
              <button
                key={categoryKey}
                className={`category-tab ${activeCategory === categoryKey ? "active" : ""}`}
                onClick={() => handleCategoryChange(categoryKey)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span>{category.title}</span>
                <span className="tab-count">({category.products.length})</span>
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="products-grid-section">
          <div className="products-grid-container">
            {activeCategory === "all" ? (
              <>
                {/* Show all products in a single grid */}
                <div className="products-grid">
                  {/* All products from non-fabrication categories */}
                  {categories.filter(([categoryKey]) => categoryKey !== "fabrication").flatMap(([categoryKey, category]) =>
                    category.products.map((product) => (
                      <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleProductClick(product)}
                      >
                        <div className="product-card-image">
                          <Image
                            src={product.image}
                            alt={`${product.name} - YNM Safety | Hot Thermoplastic Paint Manufacturers India`}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <div className="product-card-overlay" />
                          <div className="product-card-badge">{category.title}</div>
                        </div>
                        <div className="product-card-content">
                          <h3>{product.name}</h3>
                          <p>{product.desc}</p>
                          <div className="product-card-specs">
                            {product.specs.slice(0, 2).map((spec, i) => (
                              <span key={i} className="spec-tag">{spec}</span>
                            ))}
                          </div>
                          <div className="product-card-footer">
                            <span className="product-card-cta">
                              View Details
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  
                  {/* Fabrication card linking to dedicated page */}
                  <div className="product-card fabrication-card" onClick={() => router.push('/products/fabrication')}>
                    <div className="product-card-image" style={{ background: 'linear-gradient(135deg, #74060D 0%, #9A1B2E 100%)' }}>
                      <div className="fabrication-card-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="1.5">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <div className="product-card-badge">Fabrication</div>
                    </div>
                    <div className="product-card-content">
                      <h3>Fabrication Products</h3>
                      <p>Solar Panel Structures, Railway Structures, GI Dustbins, Rickshaw & more coming soon...</p>
                      <div className="product-card-specs">
                        <span className="spec-tag">4+ Products</span>
                        <span className="spec-tag">Custom Solutions</span>
                      </div>
                      <div className="product-card-footer">
                        <span className="product-card-cta">
                          View All
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Show filtered products
              <div className="products-grid">
                {filteredProducts.map((product) => {
                  const category = categories.find(([_, cat]) => 
                    cat.products.some(p => p.id === product.id)
                  )?.[1];
                  
                  return (
                    <div
                      key={product.id}
                      className="product-card"
                      onClick={() => handleProductClick(product)}
                    >
                      <div className="product-card-image">
                        <Image
                          src={product.image}
                          alt={`${product.name} - YNM Safety Road Safety Products Manufacturer India`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                        <div className="product-card-overlay" />
                        <div className="product-card-badge">{category?.title}</div>
                      </div>
                      <div className="product-card-content">
                        <h3>{product.name}</h3>
                        <p>{product.desc}</p>
                        <div className="product-card-specs">
                          {product.specs.slice(0, 2).map((spec, i) => (
                            <span key={i} className="spec-tag">{spec}</span>
                          ))}
                        </div>
                        <div className="product-card-footer">
                          <span className="product-card-cta">
                            View Details
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

      </main>

      <Footer />

      <style jsx>{`
        .products-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
        }

        /* Hero Section */
        .products-hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .products-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 50%, #5a0509 100%);
        }

        .products-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(201, 162, 77, 0.2) 0%, transparent 70%);
        }

        .products-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
        }

        .products-hero-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #74060D;
          padding: 8px 20px;
          background: #C9A24D;
          border: 2px solid #E6D3A3;
          border-radius: 30px;
          margin-bottom: 20px;
        }

        .products-hero-content h1 {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 16px;
        }

        .products-hero-content p {
          font-size: 16px;
          color: #E6D3A3;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 500;
        }

        .products-coming-soon {
          margin-top: 12px !important;
          font-size: 14px !important;
          color: #C9A24D !important;
          font-style: italic;
          opacity: 0.9;
        }

        /* Category Tabs Section */
        .products-categories-section {
          padding: 40px 20px;
          background: white;
          border-bottom: 2px solid #E6D3A3;
          position: sticky;
          top: 100px;
          z-index: 10;
          box-shadow: 0 4px 20px rgba(116, 6, 13, 0.05);
        }

        .products-categories-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .category-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          color: #9A1B2E;
          background: #F7F3EA;
          border: 2px solid #E6D3A3;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .category-tab:hover {
          background: #E6D3A3;
          border-color: #C9A24D;
          transform: translateY(-2px);
        }

        .category-tab.active {
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          color: #F7F3EA;
          border-color: #C9A24D;
          box-shadow: 0 8px 25px rgba(116, 6, 13, 0.3);
        }

        .tab-icon {
          font-size: 20px;
        }

        .tab-count {
          font-size: 12px;
          opacity: 0.8;
          font-weight: 500;
        }

        /* Products Grid Section */
        .products-grid-section {
          padding: 60px 20px;
        }

        .products-grid-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .category-group {
          margin-bottom: 80px;
        }

        .category-group:last-child {
          margin-bottom: 0;
        }

        .category-group-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 3px solid #C9A24D;
        }

        .category-group-icon {
          font-size: 48px;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.1), rgba(201, 162, 77, 0.1));
          border-radius: 20px;
          border: 2px solid #C9A24D;
        }

        .category-group-header h2 {
          font-size: 32px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 8px;
        }

        .category-group-header p {
          font-size: 16px;
          color: #5a4a4a;
          margin: 0;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.1);
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: #C9A24D;
          box-shadow: 0 25px 60px rgba(116, 6, 13, 0.25), 0 0 40px rgba(201, 162, 77, 0.15);
        }

        .product-card-image {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .fabrication-card-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: rgba(201, 162, 77, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fabrication-card .product-card-image {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .product-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(116, 6, 13, 0.4) 100%);
          transition: opacity 0.3s ease;
        }

        .product-card:hover .product-card-overlay {
          opacity: 0.6;
        }

        .product-card-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(201, 162, 77, 0.95);
          color: #74060D;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          backdrop-filter: blur(10px);
          z-index: 2;
        }

        .product-card-content {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .product-card-content h3 {
          font-size: 22px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
          line-height: 1.3;
        }

        .product-card-content > p {
          font-size: 14px;
          color: #5a4a4a;
          line-height: 1.6;
          margin: 0 0 16px;
          flex-grow: 1;
        }

        .product-card-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .spec-tag {
          font-size: 11px;
          font-weight: 600;
          color: #9A1B2E;
          background: rgba(201, 162, 77, 0.15);
          padding: 4px 12px;
          border-radius: 12px;
          border: 1px solid rgba(201, 162, 77, 0.3);
        }

        .product-card-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #E6D3A3;
        }

        .product-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9A1B2E;
          transition: all 0.3s ease;
        }

        .product-card:hover .product-card-cta {
          color: #C9A24D;
          gap: 12px;
        }

        /* Fabrication Link Card */
        .fabrication-link-card {
          background: linear-gradient(145deg, #ffffff 0%, #f8f5f0 100%);
          border-radius: 20px;
          padding: 40px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.1);
          border: 2px solid rgba(201, 162, 77, 0.2);
          text-align: center;
        }

        .fabrication-link-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
        }

        .fabrication-link-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .fabrication-link-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(201, 162, 77, 0.15) 0%, rgba(116, 6, 13, 0.1) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #74060D;
        }

        .fabrication-link-content h3 {
          font-size: 28px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .fabrication-link-content p {
          font-size: 16px;
          color: #5a4a4a;
          margin: 0 0 24px;
          line-height: 1.6;
        }

        .fabrication-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #fff;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .fabrication-link-card:hover .fabrication-link-btn {
          background: linear-gradient(135deg, #C9A24D 0%, #D4AF37 100%);
          color: #74060D;
          gap: 14px;
        }

        /* Laptop responsive breakpoints */
        @media (max-width: 1440px) and (min-width: 1200px) {
          .products-main {
            padding: 50px 35px;
          }
          
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 28px;
          }
        }
        
        @media (max-width: 1200px) and (min-width: 968px) {
          .products-main {
            padding: 45px 30px;
          }
          
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
          }
          
          .category-tab {
            padding: 14px 24px;
            font-size: 15px;
          }
        }

        @media (max-width: 968px) {
          .products-categories-section {
            top: 80px;
          }

          .category-tab {
            padding: 12px 20px;
            font-size: 14px;
          }

          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
          }

          .category-group-header {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .category-group-icon {
            width: 60px;
            height: 60px;
            font-size: 36px;
          }
        }

        @media (max-width: 768px) {
          .products-hero {
            height: 40vh;
            min-height: 300px;
          }

          .products-categories-container {
            flex-direction: column;
            align-items: stretch;
          }

          .category-tab {
            width: 100%;
            justify-content: center;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .category-group-header h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
}
