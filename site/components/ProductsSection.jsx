"use client";

import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/lib/productsCategoriesData";

// Helper function to get product count for a category
function getProductCount(categoryId) {
  const category = productsData.manufacturing.categories[categoryId];
  return category ? category.products.length : 0;
}

const productConfig = [
  { 
    id: "paints", 
    image: "/assets/product-industrial-paint.png", 
    link: "/products?category=paints", 
    title: "Paints", 
    description: "High-performance hot thermoplastic paint, cold plastic road marking paint, and water-based paint manufactured for highways, industrial floors, and infrastructure projects. As a trusted industrial paint manufacturer and exporter, we deliver durable, weather-resistant coatings with long service life." 
  },
  { 
    id: "road-safety-furniture", 
    image: "/assets/product-industrial-racking.png", 
    link: "/products?category=road-safety-furniture", 
    title: "Road Safety Furniture", 
    description: "Complete range of road safety furniture and equipment including guardrails, bollards, and traffic safety solutions designed for maximum durability. Manufactured to meet national and international standards for highways, urban roads, and infrastructure projects." 
  },
  { 
    id: "crash-barriers", 
    image: "/assets/product-structural-steel.png", 
    link: "/products?category=crash-barriers", 
    title: "Metal Beam Crash Barriers", 
    description: "High-strength metal beam crash barriers (MBCB) and W-beam crash barrier systems engineered for highways and expressways. We are a reliable crash barrier manufacturer and exporter, delivering impact-resistant solutions for enhanced road safety." 
  },
  { 
    id: "signages", 
    image: "/assets/product-exterior-weather-coat.png", 
    link: "/products?category=signages", 
    title: "Signages", 
    description: "Premium retro-reflective sign boards and traffic signages designed for high visibility and all-weather performance. Manufactured for roads, highways, and infrastructure projects to ensure safety compliance and long-term durability." 
  },
  { 
    id: "fabrication", 
    image: "/assets/product-custom-metal-enclosure.png", 
    link: "/products?category=fabrication", 
    title: "Fabrication", 
    description: "Custom metal fabrication works including structural steel components, precision-engineered parts, and industrial fabrication solutions. Manufactured in-house to support infrastructure, construction, and industrial applications." 
  },
  { 
    id: "school-furniture", 
    image: "/assets/product-student-desk-chair.png", 
    link: "/products?category=furniture", 
    title: "School Furniture", 
    description: "Ergonomic and durable school furniture including school tables, chairs, desks, and classroom solutions for educational institutions. As a trusted school furniture manufacturer and exporter, we support bulk and government supply requirements." 
  },
];

export default function ProductsSection() {
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
        <h2>Manufacturers and Exporters of Premium Industrial Products</h2>
        <div className="ps-bar" />
      </div>

      {/* Products Grid - 3 columns */}
      <div className="ps-products-grid-container">
        <div className="ps-products-grid">
          {productConfig.map((product, index) => (
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
                <p>{product.description}</p>
                <div className="ps-product-actions">
                  <div className="ps-product-count">
                    {getProductCount(product.id === "school-furniture" ? "furniture" : product.id)} Types Available
                  </div>
                  <Link href={product.link} className="ps-product-cta">
                    Explore
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
