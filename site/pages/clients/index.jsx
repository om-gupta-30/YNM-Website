"use client";

import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

// Detailed client/partner data (18 brands we work with)
const clientsData = [
  { id: "1", name: "IndianOil", logo: "/assets/brand-logos/indiaoil%20png.jpg", industry: "Oil & Energy", location: "India", yearsOfPartnership: 5, relationship: "Trusted partner for industrial paints, protective coatings, and metal fabrication across their facilities. YNM supplies quality products that meet the demanding standards of India's largest oil major.", products: ["Industrial Paints", "Epoxy Coatings", "Metal Fabrication"], testimonial: "YNM has been a reliable supplier for our infrastructure and maintenance needs. Quality and timeliness are consistently delivered." },
  { id: "2", name: "Ramoji Film City", logo: "/assets/brand-logos/Ramoji%20Film%20City%20logo.png", industry: "Entertainment & Hospitality", location: "India", yearsOfPartnership: 4, relationship: "Long-term partner for decorative paints, structural steel, and facility infrastructure. Our products support the upkeep and expansion of one of the world's largest film production facilities.", products: ["Decorative Paints", "Structural Steel", "Metal Fabrication"], testimonial: "Quality materials and professional service. YNM understands the scale and standards our operations demand." },
  { id: "3", name: "Prestige Group", logo: "/assets/brand-logos/prestige%20logo.webp", industry: "Real Estate & Construction", location: "India", yearsOfPartnership: 6, relationship: "Strategic supplier for paints, metal work, and finishes across residential and commercial projects. We have supported numerous Prestige developments with premium products.", products: ["Industrial Paints", "Decorative Paints", "Gates & Railings"], testimonial: "A trusted partner for our projects. YNM's products enhance the quality and longevity of our constructions." },
  { id: "4", name: "Tech Mahindra", logo: "/assets/brand-logos/Tech%20Mahindra%20logo.jpg", industry: "IT & Technology", location: "India", yearsOfPartnership: 4, relationship: "Partner for campus and facility infrastructure including paints, metal fabrication, and furniture. We support their office and R&D facilities across India.", products: ["Decorative Paints", "School & Office Furniture", "Metal Fabrication"], testimonial: "Reliable supply and consistent quality. YNM has been a valued vendor for our facility needs." },
  { id: "5", name: "GMR", logo: "/assets/brand-logos/GMR-Group-Logo-Pngsource-RK4JM0FN.png", industry: "Infrastructure & Aviation", location: "India", yearsOfPartnership: 5, relationship: "Supplier of industrial paints, structural steel, and metal fabrication for airports and infrastructure projects. Our products meet the high standards required for critical infrastructure.", products: ["Industrial Paints", "Structural Steel", "Metal Fabrication"], testimonial: "Quality and compliance are paramount in our sector. YNM delivers on both counts." },
  { id: "6", name: "Tom Tailor", logo: "/assets/brand-logos/tom-tailor-sportswear%20logo.png", industry: "Retail & Fashion", location: "Global", yearsOfPartnership: 3, relationship: "International partner for store fit-outs, metal fixtures, and finishes. We support their retail presence with custom fabrication and quality coatings.", products: ["Metal Fabrication", "Decorative Paints", "Custom Fixtures"], testimonial: "YNM's custom solutions and export reliability have made them a dependable global partner." },
  { id: "7", name: "NCC Limited", logo: "/assets/brand-logos/ncc%20logo.png", industry: "Construction & Infrastructure", location: "India", yearsOfPartnership: 5, relationship: "Key supplier for construction materials including industrial paints, structural steel, and fabrications. We support NCC's diverse projects across the country.", products: ["Industrial Paints", "Structural Steel", "Epoxy Coatings"], testimonial: "Consistent quality and on-time delivery. YNM understands the demands of large-scale construction." },
  { id: "8", name: "NSL Group", logo: "/assets/brand-logos/NSL%20logo.png", industry: "Diversified Manufacturing", location: "India", yearsOfPartnership: 4, relationship: "Partner for paints, metal fabrication, and industrial solutions across the group's manufacturing and infrastructure units.", products: ["Industrial Paints", "Metal Fabrication", "Safety Solutions"], testimonial: "A responsive and quality-focused supplier. Our partnership has grown over the years." },
  { id: "9", name: "HCL", logo: "/assets/brand-logos/hcl%20logo.png", industry: "IT & Technology", location: "India", yearsOfPartnership: 4, relationship: "Supplier for campus infrastructure, furniture, and finishes. We support HCL's offices and facilities with durable, quality products.", products: ["Decorative Paints", "School & Office Furniture", "Metal Fabrication"], testimonial: "YNM's products and service have been instrumental in maintaining our facility standards." },
  { id: "10", name: "Alekhya Homes", logo: "/assets/brand-logos/alekhya-homes-2023-logo.png", industry: "Real Estate", location: "India", yearsOfPartnership: 3, relationship: "Partner for decorative paints, metal work, and finishes for residential projects. We help deliver quality homes with premium materials.", products: ["Decorative Paints", "Gates & Railings", "Wood Finishes"], testimonial: "Quality materials that our homebuyers appreciate. YNM is a trusted name in our supply chain." },
  { id: "11", name: "GVK EMRI", logo: "/assets/brand-logos/gvk-logo.png", industry: "Healthcare & Emergency Services", location: "India", yearsOfPartnership: 4, relationship: "Supplier for facility infrastructure, furniture, and finishes for emergency response and healthcare facilities. Our products support their critical operations.", products: ["Industrial Paints", "School & Office Furniture", "Metal Fabrication"], testimonial: "Reliable and quality-conscious. YNM has been a steady partner for our facility needs." },
  { id: "12", name: "NTPC", logo: "/assets/brand-logos/ntpc%20logo.png", industry: "Power & Energy", location: "India", yearsOfPartnership: 5, relationship: "Partner for industrial coatings, structural steel, and metal fabrication at power plants and installations. We meet the strict standards of the power sector.", products: ["Industrial Paints", "Structural Steel", "Epoxy Coatings"], testimonial: "Technical compliance and timely delivery. YNM understands our sector's requirements." },
  { id: "13", name: "Power Grid", logo: "/assets/brand-logos/POWERGRID%20logo.png", industry: "Power Transmission", location: "India", yearsOfPartnership: 5, relationship: "Supplier of industrial paints, structural components, and fabrications for substations and transmission infrastructure across India.", products: ["Industrial Paints", "Structural Steel", "Metal Fabrication"], testimonial: "A dependable partner for our extensive network. Quality and delivery have always been consistent." },
  { id: "14", name: "Hyundai Glovis", logo: "/assets/brand-logos/Hyundai_Glovis_logo.png", industry: "Logistics & Automotive", location: "Global", yearsOfPartnership: 3, relationship: "International partner for warehouse and facility solutions including paints, metal fabrication, and industrial products. We support their logistics operations.", products: ["Industrial Paints", "Metal Fabrication", "Structural Steel"], testimonial: "YNM's export capability and product quality make them a reliable global supplier." },
  { id: "15", name: "NPCI International", logo: "/assets/brand-logos/NPCI_logo.png", industry: "Finance & Payments", location: "India", yearsOfPartnership: 3, relationship: "Partner for office and facility infrastructure including furniture, paints, and finishes. We support their workspace and operational needs.", products: ["Decorative Paints", "Office Furniture", "Metal Fabrication"], testimonial: "Professional and quality-driven. YNM has been a valued partner for our facility requirements." },
  { id: "16", name: "BSCPL Infrastructure", logo: "/assets/brand-logos/bscpl-logo.png", industry: "Infrastructure & Construction", location: "India", yearsOfPartnership: 4, relationship: "Supplier for construction and infrastructure projects. We provide industrial paints, structural steel, and metal fabrication for their sites.", products: ["Industrial Paints", "Structural Steel", "Epoxy Coatings"], testimonial: "Timely delivery and robust products. YNM has supported our growth as a trusted vendor." },
  { id: "17", name: "AT&T", logo: "/assets/brand-logos/att-logo-transparent.png", industry: "Telecommunications", location: "Global", yearsOfPartnership: 3, relationship: "International partner for facility and infrastructure products. We supply paints, fabrication, and finishes for their global operations.", products: ["Industrial Paints", "Metal Fabrication", "Custom Solutions"], testimonial: "YNM's quality and export reliability align well with our global standards and expectations." },
  { id: "18", name: "Aparna Constructions", logo: "/assets/brand-logos/aparna%20constructions.png", industry: "Real Estate & Construction", location: "India", yearsOfPartnership: 5, relationship: "Long-term supplier for paints, metal work, and fabrications across residential and commercial projects. We are proud to be part of Aparna's quality-focused developments.", products: ["Decorative Paints", "Structural Steel", "Gates & Railings"], testimonial: "Consistent quality and a partnership approach. YNM has been integral to our project execution." },
];

export default function ClientsPage() {
  return (
    <>
      <Head>
        <title>Our Clients - YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Trusted by leading companies and institutions across India and globally. See our client portfolio and partnerships." />
      </Head>

      <Navbar />

      <main className="clients-page">
        {/* Hero Section */}
        <section className="clients-hero">
          <div className="clients-hero-bg" />
          <div className="clients-hero-overlay" />
          <div className="clients-hero-content">
            <span className="clients-tag">OUR CLIENTS</span>
            <h1>Our Valued Clients & Partners</h1>
            <p>Trusted by leading companies and institutions across India and globally. Building lasting relationships through quality and reliability.</p>
          </div>
        </section>

        {/* Clients Grid - Detailed Cards */}
        <section className="clients-grid-section">
          <div className="clients-container">
            {clientsData.map((client) => (
              <div key={client.id} className="client-card">
                <div className="client-card-header">
                  <div className="client-logo-wrapper">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={80}
                      className="client-logo"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="client-basic-info">
                    <h3>{client.name}</h3>
                    <p className="client-industry">{client.industry}</p>
                    <p className="client-location">📍 {client.location}</p>
                  </div>
                </div>

                <div className="client-card-body">
                  <div className="client-partnership-badge">
                    <span className="partnership-years">{client.yearsOfPartnership} Years</span>
                    <span className="partnership-label">Partnership</span>
                  </div>

                  <p className="client-relationship">{client.relationship}</p>

                  <div className="client-products">
                    <strong>Products Supplied:</strong>
                    <div className="products-tags">
                      {client.products.map((product, idx) => (
                        <span key={idx} className="product-tag">{product}</span>
                      ))}
                    </div>
                  </div>

                  <div className="client-testimonial">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                    <p>&quot;{client.testimonial}&quot;</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />

      <style jsx>{`
        .clients-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
          padding-top: 100px;
        }

        /* Hero Section */
        .clients-hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .clients-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 50%, #5a0509 100%);
        }

        .clients-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(201, 162, 77, 0.2), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(154, 27, 46, 0.15), transparent 50%);
        }

        .clients-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
        }

        .clients-tag {
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

        .clients-hero-content h1 {
          font-size: clamp(40px, 7vw, 64px);
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .clients-hero-content p {
          font-size: 18px;
          color: #E6D3A3;
          max-width: 700px;
          margin: 0 auto;
          font-weight: 500;
        }

        /* Clients Grid Section */
        .clients-grid-section {
          padding: 80px 20px;
        }

        .clients-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .client-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(116, 6, 13, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(201, 162, 77, 0.2);
        }

        .client-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.15);
        }

        .client-card-header {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #F7F3EA;
        }

        .client-logo-wrapper {
          flex-shrink: 0;
          width: 120px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F7F3EA;
          border-radius: 8px;
          padding: 10px;
        }

        .client-logo {
          max-width: 100%;
          max-height: 100%;
        }

        .client-basic-info {
          flex: 1;
        }

        .client-basic-info h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 6px;
        }

        .client-industry {
          font-size: 14px;
          color: #9A1B2E;
          font-weight: 600;
          margin: 0 0 4px;
        }

        .client-location {
          font-size: 13px;
          color: #666;
          margin: 0;
        }

        .client-card-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .client-partnership-badge {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          color: #F7F3EA;
          padding: 12px 20px;
          border-radius: 8px;
          width: fit-content;
        }

        .partnership-years {
          font-size: 24px;
          font-weight: 800;
          line-height: 1;
        }

        .partnership-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.9;
        }

        .client-relationship {
          font-size: 14px;
          color: #333;
          line-height: 1.6;
          margin: 0;
        }

        .client-products {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .client-products strong {
          font-size: 13px;
          color: #74060D;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .products-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .product-tag {
          font-size: 12px;
          padding: 4px 10px;
          background: #F7F3EA;
          color: #74060D;
          border-radius: 12px;
          font-weight: 500;
        }

        .client-testimonial {
          display: flex;
          gap: 10px;
          padding: 12px;
          background: #F7F3EA;
          border-radius: 8px;
          border-left: 3px solid #C9A24D;
        }

        .client-testimonial svg {
          flex-shrink: 0;
          color: #C9A24D;
        }

        .client-testimonial p {
          font-size: 13px;
          color: #555;
          font-style: italic;
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .clients-container {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .clients-hero {
            height: 40vh;
            min-height: 300px;
          }

          .clients-grid-section {
            padding: 60px 16px;
          }
        }
      `}</style>
    </>
  );
}
