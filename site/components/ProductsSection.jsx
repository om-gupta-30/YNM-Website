"use client";

import Image from "next/image";
import Link from "next/link";

const productConfig = [
  { id: "paints", image: "/assets/product-industrial-paint.png", link: "/products?type=manufacturing&category=paints", titleKey: "paintsTitle", descKey: "paintsDesc" },
  { id: "fabrication", image: "/assets/product-structural-steel.png", link: "/products?type=manufacturing&category=fabrication", titleKey: "fabricationTitle", descKey: "fabricationDesc" },
  { id: "furniture", image: "/assets/product-student-desk-chair.png", link: "/products?type=manufacturing&category=furniture", titleKey: "furnitureTitle", descKey: "furnitureDesc" },
  { id: "safety", image: "/assets/product-laboratory-table.png", link: "/products?type=manufacturing&category=safety", titleKey: "safetyTitle", descKey: "safetyDesc" },
];

export default function ProductsSection() {
  const allProducts = productConfig.map(({ id, image, link, titleKey, descKey }) => ({
    id,
    image,
    link,
    title: titleKey === "paintsTitle" ? "Premium Paints" :
           titleKey === "fabricationTitle" ? "Metal Fabrication" :
           titleKey === "furnitureTitle" ? "School Furniture" :
           titleKey === "safetyTitle" ? "Safety Equipment" : id,
    shortDesc: descKey === "paintsDesc" ? "High-quality industrial and decorative paints for every surface. Durable, vibrant, and eco-friendly formulations." :
               descKey === "fabricationDesc" ? "Custom steel and metal fabrication solutions. From structural components to precision-engineered parts." :
               descKey === "furnitureDesc" ? "Ergonomic and durable furniture for educational institutions. Desks, chairs, and complete classroom solutions." :
               descKey === "safetyDesc" ? "Premium safety gear and equipment for industrial use. Helmets, gloves, protective wear and more." : "",
  }));
  return (
    <section id="products-section" className="ps">
      {/* Neon Particles */}
      <div className="neon-particles">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="neon-particle" />
        ))}
      </div>

      {/* Header */}
      <div className="ps-header">
        <Link href="/products" className="ps-tag">Our Products</Link>
        <h2>Manufacturing Excellence, Global Reach</h2>
        <div className="ps-bar" />
      </div>

      {/* Side by Side Categories Container */}
      <div className="ps-categories-row">
        {/* Left Column */}
        <div className="ps-category-section">
          <div className="ps-grid-vertical">
            {allProducts.slice(0, 2).map((product, index) => (
              <div key={product.id} className="ps-product-card">
                <div className="ps-product-image">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="ps-product-overlay" />
                </div>
                <div className="ps-product-content">
                  <span className="ps-product-num">0{index + 1}</span>
                  <h3>{product.title}</h3>
                  <p>{product.shortDesc}</p>
                  <Link href={product.link} className="ps-product-cta">
                    Explore
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="ps-category-section">
          <div className="ps-grid-vertical">
            {allProducts.slice(2, 4).map((product, index) => (
              <div key={product.id} className="ps-product-card">
                <div className="ps-product-image">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="ps-product-overlay" />
                </div>
                <div className="ps-product-content">
                  <span className="ps-product-num">0{index + 3}</span>
                  <h3>{product.title}</h3>
                  <p>{product.shortDesc}</p>
                  <Link href={product.link} className="ps-product-cta">
                    Explore
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
