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
    image: "/assets/ynm safety thermoplastic paints.png", 
    link: "/products?category=paints", 
    title: "Paints", 
    description: "Hot thermoplastic road marking paints for highways, expressways & urban road safety applications." 
  },
  { 
    id: "bitumen", 
    image: "/assets/Ynm safety bitumen manufactures.png", 
    link: "/products?category=bitumen", 
    title: "Bitumen", 
    description: "High-performance VG 40 paving grade bitumen for highways, expressways and heavy traffic roads." 
  },
  { 
    id: "crash-barriers", 
    image: "/assets/metal beam crash barrier ynm safety.png", 
    link: "/products?category=crash-barriers", 
    title: "Metal Beam Crash Barriers", 
    description: "High-strength W-beam crash barriers engineered for highways and expressways safety." 
  },
  { 
    id: "signages", 
    image: "/assets/Ynm safety signages.png", 
    link: "/products?category=signages", 
    title: "Signages", 
    description: "Retro-reflective gantry signages and cantilever signages for high visibility traffic guidance." 
  },
  { 
    id: "fabrication", 
    image: "/assets/railway-fab-2.png", 
    link: "/products/fabrication", 
    title: "Fabrication", 
    description: "Custom steel fabrication including solar structures, railway structures, and industrial products." 
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
        <Link href="/products" className="ps-tag">Products</Link>
        <h2>Manufacturers and Exporters of Premium Industrial Products</h2>
        <div className="ps-bar" />
      </div>

      {/* Products Grid - 5 product categories */}
      <div className="ps-products-grid-container">
        <div className="ps-products-grid">
          {productConfig.map((product, index) => (
            <div key={product.id} className="ps-product-card">
              <div className="ps-product-image">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
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
                    {getProductCount(product.id)} Types
                  </div>
                  <Link href={product.link} className="ps-product-cta">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
