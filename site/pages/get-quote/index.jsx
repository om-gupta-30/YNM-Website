import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Product categories for the dropdown
const productCategories = [
  { 
    name: "Road Safety Products",
    products: [
      "W Beam Crash Barrier",
      "Thrie Beam Crash Barrier",
      "Guard Rails",
      "End Terminals",
      "Road Studs & Delineators",
      "Signage & Markers"
    ]
  },
  {
    name: "Industrial Paints",
    products: [
      "Industrial Enamel Paint",
      "Exterior Weather Coat",
      "Epoxy Floor Coating",
      "Wood Finish Lacquer",
      "Anti-Corrosive Paint",
      "Heat Resistant Paint"
    ]
  },
  {
    name: "Metal Fabrication",
    products: [
      "Structural Steel Fabrication",
      "Industrial Racking Systems",
      "Custom Metal Enclosures",
      "Storage Solutions",
      "Metal Frameworks"
    ]
  },
  {
    name: "School & Office Furniture",
    products: [
      "Student Desks & Chairs",
      "Laboratory Tables",
      "Library Shelving",
      "Office Workstations",
      "Storage Cabinets"
    ]
  }
];

// Quantity units
const quantityUnits = [
  "Meters",
  "Kilometers",
  "Pieces",
  "Sets",
  "Liters",
  "Tons",
  "Square Meters",
  "Square Feet"
];

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    
    // Product Details
    productCategory: "",
    product: "",
    quantity: "",
    quantityUnit: "Meters",
    
    // Project Details
    projectName: "",
    projectLocation: "",
    deliveryTimeline: "",
    
    // Additional Info
    specifications: "",
    message: "",
    
    // Preferences
    needInstallation: false,
    needSiteVisit: false,
    urgentRequirement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [availableProducts, setAvailableProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "productCategory") {
      const category = productCategories.find(cat => cat.name === value);
      setAvailableProducts(category ? category.products : []);
      setFormData({ 
        ...formData, 
        [name]: value,
        product: "" // Reset product when category changes
      });
    } else {
      setFormData({ 
        ...formData, 
        [name]: type === "checkbox" ? checked : value 
      });
    }
    
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: `Quote Request: ${formData.product || formData.productCategory}`,
          message: `
QUOTE REQUEST DETAILS
=====================

CONTACT INFORMATION
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Designation: ${formData.designation}

PRODUCT REQUIREMENTS
--------------------
Category: ${formData.productCategory}
Product: ${formData.product}
Quantity: ${formData.quantity} ${formData.quantityUnit}

PROJECT DETAILS
---------------
Project Name: ${formData.projectName || "Not specified"}
Project Location: ${formData.projectLocation || "Not specified"}
Delivery Timeline: ${formData.deliveryTimeline || "Not specified"}

ADDITIONAL SERVICES
-------------------
Installation Support: ${formData.needInstallation ? "Yes" : "No"}
Site Visit Required: ${formData.needSiteVisit ? "Yes" : "No"}
Urgent Requirement: ${formData.urgentRequirement ? "Yes" : "No"}

SPECIFICATIONS & NOTES
----------------------
${formData.specifications || "None"}

ADDITIONAL MESSAGE
------------------
${formData.message || "None"}
          `.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request');
      }

      setSubmitted(true);
      setFormData({
        name: "", email: "", phone: "", company: "", designation: "",
        productCategory: "", product: "", quantity: "", quantityUnit: "Meters",
        projectName: "", projectLocation: "", deliveryTimeline: "",
        specifications: "", message: "",
        needInstallation: false, needSiteVisit: false, urgentRequirement: false
      });
      setAvailableProducts([]);

    } catch (err) {
      console.error('Quote submission error:', err);
      setError(err.message || 'Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Get a Quote | YNM Mega Industries Pvt Ltd</title>
        <meta name="description" content="Request a quote for W Beam Crash Barriers, Industrial Paints, Metal Fabrication, and School Furniture from YNM Mega Industries." />
      </Head>

      <Navbar />

      <main className="quote-page">
        {/* Hero Section */}
        <section className="quote-hero">
          <div className="quote-hero-bg" />
          <div className="quote-hero-content">
            <div className="hero-badge">
              <span className="badge-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </span>
              Request a Quote
            </div>
            <h1>Get Your Custom Quote</h1>
            <p>Fill out the form below and our team will provide you with a detailed quotation within 24 hours.</p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="quote-form-section">
          <div className="quote-container">
            {/* Left Side - Benefits */}
            <div className="quote-benefits">
              <h2>Why Choose YNM?</h2>
              
              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h3>Quick Response</h3>
                  <p>Get your customized quote within 24 hours of submission</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h3>Best Prices</h3>
                  <p>Competitive factory-direct pricing with no middlemen</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h3>Pan-India Delivery</h3>
                  <p>Nationwide delivery with installation support available</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="benefit-content">
                  <h3>Quality Assured</h3>
                  <p>ISO certified products meeting international standards</p>
                </div>
              </div>

              <div className="quote-contact-info">
                <h3>Need Immediate Assistance?</h3>
                <p>Our sales team is ready to help you</p>
                <a href="tel:+919676575770" className="contact-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  +91 96765 75770
                </a>
                <a href="mailto:sales@ynmsafety.com" className="contact-email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  sales@ynmsafety.com
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="quote-form-wrapper">
              {submitted ? (
                <div className="quote-success">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h2>Quote Request Submitted!</h2>
                  <p>Thank you for your interest. Our sales team will review your requirements and get back to you within 24 hours with a detailed quotation.</p>
                  <div className="success-actions">
                    <button onClick={() => setSubmitted(false)} className="btn-new-quote">
                      Submit Another Quote
                    </button>
                    <Link href="/products" className="btn-browse-products">
                      Browse Products
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quote-form">
                  <h2>Quote Request Form</h2>
                  <p className="form-subtitle">Fields marked with <span className="required">*</span> are required</p>

                  {error && (
                    <div className="form-error">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      {error}
                    </div>
                  )}

                  {/* Contact Information */}
                  <div className="form-section">
                    <h3 className="section-title">
                      <span className="section-number">1</span>
                      Contact Information
                    </h3>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="name">Full Name <span className="required">*</span></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email Address <span className="required">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="company">Company Name <span className="required">*</span></label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          required
                        />
                      </div>

                      <div className="form-group full-width">
                        <label htmlFor="designation">Designation</label>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          placeholder="e.g., Project Manager, Procurement Head"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Requirements */}
                  <div className="form-section">
                    <h3 className="section-title">
                      <span className="section-number">2</span>
                      Product Requirements
                    </h3>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="productCategory">Product Category <span className="required">*</span></label>
                        <select
                          id="productCategory"
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((category) => (
                            <option key={category.name} value={category.name}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="product">Specific Product <span className="required">*</span></label>
                        <select
                          id="product"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          required
                          disabled={!formData.productCategory}
                        >
                          <option value="">
                            {formData.productCategory ? "Select a product" : "Select category first"}
                          </option>
                          {availableProducts.map((product) => (
                            <option key={product} value={product}>
                              {product}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group quantity-group">
                        <label htmlFor="quantity">Required Quantity <span className="required">*</span></label>
                        <div className="quantity-input-wrapper">
                          <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g., 5000"
                            min="1"
                            required
                          />
                          <select
                            name="quantityUnit"
                            value={formData.quantityUnit}
                            onChange={handleChange}
                            className="unit-select"
                          >
                            {quantityUnits.map((unit) => (
                              <option key={unit} value={unit}>{unit}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="form-section">
                    <h3 className="section-title">
                      <span className="section-number">3</span>
                      Project Details
                    </h3>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="projectName">Project Name</label>
                        <input
                          type="text"
                          id="projectName"
                          name="projectName"
                          value={formData.projectName}
                          onChange={handleChange}
                          placeholder="e.g., NH-44 Highway Expansion"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="projectLocation">Project Location</label>
                        <input
                          type="text"
                          id="projectLocation"
                          name="projectLocation"
                          value={formData.projectLocation}
                          onChange={handleChange}
                          placeholder="City, State"
                        />
                      </div>

                      <div className="form-group full-width">
                        <label htmlFor="deliveryTimeline">Expected Delivery Timeline</label>
                        <select
                          id="deliveryTimeline"
                          name="deliveryTimeline"
                          value={formData.deliveryTimeline}
                          onChange={handleChange}
                        >
                          <option value="">Select timeline</option>
                          <option value="Immediate (Within 1 week)">Immediate (Within 1 week)</option>
                          <option value="Within 2 weeks">Within 2 weeks</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="form-section">
                    <h3 className="section-title">
                      <span className="section-number">4</span>
                      Additional Services
                    </h3>
                    
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="needInstallation"
                          checked={formData.needInstallation}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">
                          <strong>Installation Support Required</strong>
                          <small>Our team will handle professional installation</small>
                        </span>
                      </label>

                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="needSiteVisit"
                          checked={formData.needSiteVisit}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">
                          <strong>Site Visit Required</strong>
                          <small>Request a site assessment before quotation</small>
                        </span>
                      </label>

                      <label className="checkbox-label urgent">
                        <input
                          type="checkbox"
                          name="urgentRequirement"
                          checked={formData.urgentRequirement}
                          onChange={handleChange}
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">
                          <strong>Urgent Requirement</strong>
                          <small>Priority processing for time-sensitive projects</small>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Specifications & Notes */}
                  <div className="form-section">
                    <h3 className="section-title">
                      <span className="section-number">5</span>
                      Specifications & Notes
                    </h3>
                    
                    <div className="form-group full-width">
                      <label htmlFor="specifications">Technical Specifications</label>
                      <textarea
                        id="specifications"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        placeholder="Enter any specific technical requirements, dimensions, coating specifications, etc."
                        rows={3}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="message">Additional Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Any other information you'd like us to know..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="form-actions">
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                          </svg>
                          Submit Quote Request
                        </>
                      )}
                    </button>
                    <p className="form-disclaimer">
                      By submitting this form, you agree to our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Service</Link>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .quote-page {
          min-height: 100vh;
          background: #FDFBF7;
        }

        /* Hero Section */
        .quote-hero {
          position: relative;
          padding: 140px 20px 60px;
          text-align: center;
          overflow: hidden;
        }

        .quote-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 50%, #74060D 100%);
        }

        .quote-hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24D' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .quote-hero-content {
          position: relative;
          z-index: 1;
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(201, 162, 77, 0.2);
          border: 1px solid rgba(201, 162, 77, 0.4);
          border-radius: 50px;
          color: #C9A24D;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .badge-icon {
          display: flex;
          align-items: center;
        }

        .quote-hero h1 {
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .quote-hero p {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          line-height: 1.6;
        }

        /* Form Section */
        .quote-form-section {
          padding: 60px 20px 100px;
        }

        .quote-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 40px;
          align-items: start;
        }

        /* Benefits Sidebar */
        .quote-benefits {
          position: sticky;
          top: 100px;
        }

        .quote-benefits h2 {
          font-size: 24px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 24px;
        }

        .benefit-card {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(201, 162, 77, 0.2);
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          border-color: #C9A24D;
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.15);
        }

        .benefit-icon {
          width: 48px;
          height: 48px;
          min-width: 48px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.1), rgba(201, 162, 77, 0.1));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefit-icon svg {
          width: 24px;
          height: 24px;
          stroke: #74060D;
        }

        .benefit-content h3 {
          font-size: 16px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 4px;
        }

        .benefit-content p {
          font-size: 13px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        .quote-contact-info {
          margin-top: 32px;
          padding: 24px;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          border-radius: 16px;
          color: white;
        }

        .quote-contact-info h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .quote-contact-info > p {
          font-size: 14px;
          opacity: 0.8;
          margin: 0 0 20px;
        }

        .contact-phone,
        .contact-email {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          margin-bottom: 10px;
          transition: all 0.3s ease;
        }

        .contact-phone:hover,
        .contact-email:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .contact-phone svg,
        .contact-email svg {
          width: 20px;
          height: 20px;
        }

        /* Form Wrapper */
        .quote-form-wrapper {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 4px 30px rgba(116, 6, 13, 0.08);
          border: 1px solid rgba(201, 162, 77, 0.2);
        }

        .quote-form h2 {
          font-size: 28px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 8px;
        }

        .form-subtitle {
          font-size: 14px;
          color: #666;
          margin: 0 0 32px;
        }

        .required {
          color: #E53E3E;
        }

        .form-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #FED7D7;
          border: 1px solid #FC8181;
          border-radius: 8px;
          color: #C53030;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .form-error svg {
          width: 20px;
          height: 20px;
          min-width: 20px;
        }

        /* Form Sections */
        .form-section {
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(201, 162, 77, 0.15);
        }

        .form-section:last-of-type {
          border-bottom: none;
          margin-bottom: 24px;
          padding-bottom: 0;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 18px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 20px;
        }

        .section-number {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          color: #74060D;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
        }

        /* Form Grid */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 16px;
          border: 2px solid #E6D3A3;
          border-radius: 10px;
          font-size: 15px;
          color: #333;
          background: #FDFBF7;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #C9A24D;
          background: white;
          box-shadow: 0 0 0 4px rgba(201, 162, 77, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #999;
        }

        .form-group select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2374060D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 18px;
          padding-right: 44px;
        }

        .form-group select:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        /* Quantity Input */
        .quantity-group {
          grid-column: 1 / -1;
        }

        .quantity-input-wrapper {
          display: flex;
          gap: 12px;
        }

        .quantity-input-wrapper input {
          flex: 1;
        }

        .unit-select {
          width: 140px;
          min-width: 140px;
        }

        /* Checkbox Group */
        .checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          background: #FDFBF7;
          border: 2px solid #E6D3A3;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .checkbox-label:hover {
          border-color: #C9A24D;
        }

        .checkbox-label.urgent {
          border-color: #FC8181;
          background: #FFF5F5;
        }

        .checkbox-label input {
          display: none;
        }

        .checkbox-custom {
          width: 24px;
          height: 24px;
          min-width: 24px;
          border: 2px solid #C9A24D;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          margin-top: 2px;
        }

        .checkbox-label input:checked + .checkbox-custom {
          background: #C9A24D;
        }

        .checkbox-label input:checked + .checkbox-custom::after {
          content: '';
          width: 8px;
          height: 12px;
          border: solid white;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg) translateY(-1px);
        }

        .checkbox-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .checkbox-text strong {
          font-size: 15px;
          color: #333;
        }

        .checkbox-text small {
          font-size: 13px;
          color: #666;
        }

        /* Form Actions */
        .form-actions {
          text-align: center;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 48px;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          color: white;
          font-size: 16px;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 280px;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-btn svg {
          width: 20px;
          height: 20px;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .form-disclaimer {
          font-size: 13px;
          color: #666;
          margin: 20px 0 0;
        }

        .form-disclaimer a {
          color: #74060D;
          text-decoration: underline;
        }

        /* Success State */
        .quote-success {
          text-align: center;
          padding: 40px 20px;
        }

        .quote-success .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #48BB78, #38A169);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .quote-success .success-icon svg {
          width: 40px;
          height: 40px;
          stroke: white;
        }

        .quote-success h2 {
          font-size: 28px;
          color: #74060D;
          margin: 0 0 16px;
        }

        .quote-success p {
          font-size: 16px;
          color: #666;
          max-width: 450px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .success-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-new-quote,
        .btn-browse-products {
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-new-quote {
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          color: white;
          border: none;
        }

        .btn-new-quote:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(116, 6, 13, 0.3);
        }

        .btn-browse-products {
          background: white;
          color: #74060D;
          border: 2px solid #74060D;
        }

        .btn-browse-products:hover {
          background: #74060D;
          color: white;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .quote-container {
            grid-template-columns: 1fr;
          }

          .quote-benefits {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .quote-benefits h2 {
            grid-column: 1 / -1;
          }

          .quote-contact-info {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .quote-hero h1 {
            font-size: 32px;
          }

          .quote-hero p {
            font-size: 16px;
          }

          .quote-form-wrapper {
            padding: 24px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .quantity-input-wrapper {
            flex-direction: column;
          }

          .unit-select {
            width: 100%;
          }

          .quote-benefits {
            grid-template-columns: 1fr;
          }

          .submit-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .quote-hero {
            padding: 120px 16px 40px;
          }

          .quote-form-section {
            padding: 40px 16px 80px;
          }

          .quote-form h2 {
            font-size: 22px;
          }

          .section-title {
            font-size: 16px;
          }

          .success-actions {
            flex-direction: column;
          }

          .btn-new-quote,
          .btn-browse-products {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
