"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Flag from "@/components/Flag";

const collaborationAreas = [
  {
    title: "Manufacturing Partnerships",
    description: "Joint ventures for shared production capabilities, technology exchange, and co-manufacturing agreements.",
    features: ["Technology Transfer", "Shared R&D", "Quality Systems"]
  },
  {
    title: "Distribution Networks",
    description: "Strategic alliances for expanding market reach through exclusive distributorship and logistics partnerships.",
    features: ["Market Access", "Local Expertise", "Supply Chain"]
  },
  {
    title: "Research & Development",
    description: "Innovation initiatives for joint product development, testing partnerships, and knowledge exchange.",
    features: ["Product Innovation", "Testing Labs", "IP Sharing"]
  },
  {
    title: "Quality & Compliance",
    description: "International standards implementation, certification support, and audit partnerships.",
    features: ["ISO Standards", "Certifications", "Audit Support"]
  }
];

const globalRegions = [
  { 
    name: "Middle East", 
    code: "ae",
    countries: [
      { name: "UAE", code: "ae" },
      { name: "Saudi Arabia", code: "sa" },
      { name: "Qatar", code: "qa" },
      { name: "Oman", code: "om" },
      { name: "Kuwait", code: "kw" }
    ]
  },
  { 
    name: "Africa", 
    code: "ke",
    countries: [
      { name: "Kenya", code: "ke" },
      { name: "Nigeria", code: "ng" },
      { name: "South Africa", code: "za" },
      { name: "Egypt", code: "eg" },
      { name: "Tanzania", code: "tz" }
    ]
  },
  { 
    name: "Southeast Asia", 
    code: "sg",
    countries: [
      { name: "Singapore", code: "sg" },
      { name: "Malaysia", code: "my" },
      { name: "Indonesia", code: "id" },
      { name: "Thailand", code: "th" },
      { name: "Vietnam", code: "vn" }
    ]
  },
  { 
    name: "Europe", 
    code: "eu",
    countries: [
      { name: "Germany", code: "de" },
      { name: "UK", code: "gb" },
      { name: "Netherlands", code: "nl" },
      { name: "France", code: "fr" },
      { name: "Italy", code: "it" }
    ]
  },
];

const partnershipSteps = [
  { num: "01", title: "Initial Contact", desc: "Share your interest and business profile" },
  { num: "02", title: "Discovery", desc: "Explore mutual goals and alignment" },
  { num: "03", title: "Evaluation", desc: "Due diligence and strategic assessment" },
  { num: "04", title: "Partnership", desc: "Formalize terms and begin collaboration" },
];

const capabilities = [
  { label: "ISO 9001:2015 Certified" },
  { label: "10+ Years Manufacturing" },
  { label: "Export Ready Documentation" },
  { label: "Scalable Production Capacity" },
];

export default function ForeignCollaborationsPage() {
  const [formData, setFormData] = useState({
    companyName: "", country: "", contactName: "", email: "", collaborationType: "", message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeRegion, setActiveRegion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegion((prev) => (prev + 1) % globalRegions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Global Partnerships | YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Explore partnership opportunities with YNM Safety. Open to international collaborations in manufacturing, distribution, and technology." />
      </Head>

      <Navbar />

      <main className="fc-page">
        {/* Hero */}
        <section className="fc-hero">
          <div className="fc-hero-pattern" />
          <div className="fc-hero-gradient" />
          <div className="fc-hero-content">
            <div className="fc-hero-text">
              <div className="fc-hero-badge">
                <span className="fc-badge-line" />
                <span>Global Partnerships</span>
                <span className="fc-badge-line" />
              </div>
              <h1>Expanding Horizons <span>Together</span></h1>
              <p>We believe great partnerships transcend borders. As we grow, we seek like-minded businesses worldwide to create mutual value.</p>
              <div className="fc-hero-actions">
                <a href="#inquiry" className="fc-btn-primary">
                  <span>Start a Conversation</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#regions" className="fc-btn-ghost">Explore Regions</a>
              </div>
            </div>
            <div className="fc-hero-visual">
              <div className="fc-globe-container">
                {/* Animated Globe */}
                <div className="fc-globe">
                  <div className="fc-globe-sphere">
                    <div className="fc-globe-grid" />
                  </div>
                  {/* Orbiting rings */}
                  <div className="fc-orbit fc-orbit-1">
                    <div className="fc-orbit-dot" />
                  </div>
                  <div className="fc-orbit fc-orbit-2">
                    <div className="fc-orbit-dot" />
                  </div>
                  <div className="fc-orbit fc-orbit-3">
                    <div className="fc-orbit-dot" />
                  </div>
                </div>
                {/* Floating location markers */}
                <div className="fc-markers">
                  <div className="fc-marker fc-marker-1">
                    <span>🇦🇪</span>
                    <div className="fc-marker-pulse" />
                  </div>
                  <div className="fc-marker fc-marker-2">
                    <span>🇸🇬</span>
                    <div className="fc-marker-pulse" />
                  </div>
                  <div className="fc-marker fc-marker-3">
                    <span>🇩🇪</span>
                    <div className="fc-marker-pulse" />
                  </div>
                  <div className="fc-marker fc-marker-4">
                    <span>🇰🇪</span>
                    <div className="fc-marker-pulse" />
                  </div>
                </div>
                {/* Connection lines */}
                <svg className="fc-connections" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C9A24D" stopOpacity="0" />
                      <stop offset="50%" stopColor="#C9A24D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path className="fc-connection-line fc-line-1" d="M150,150 Q80,80 50,120" fill="none" stroke="url(#lineGrad)" strokeWidth="2" />
                  <path className="fc-connection-line fc-line-2" d="M150,150 Q220,70 250,100" fill="none" stroke="url(#lineGrad)" strokeWidth="2" />
                  <path className="fc-connection-line fc-line-3" d="M150,150 Q200,220 240,200" fill="none" stroke="url(#lineGrad)" strokeWidth="2" />
                  <path className="fc-connection-line fc-line-4" d="M150,150 Q70,200 60,180" fill="none" stroke="url(#lineGrad)" strokeWidth="2" />
                </svg>
                {/* Center badge */}
                <div className="fc-globe-center">
                  <span>Global</span>
                  <small>Expansion</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Strip */}
        <section className="fc-capabilities">
          {capabilities.map((cap, i) => (
            <div key={i} className="fc-cap-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{cap.label}</span>
            </div>
          ))}
        </section>

        {/* Philosophy */}
        <section className="fc-philosophy">
          <div className="fc-phil-container">
            <div className="fc-phil-grid">
              <div className="fc-phil-content">
                <span className="fc-section-label">Our Philosophy</span>
                <h2>Partnership Over Transaction</h2>
                <div className="fc-phil-divider" />
                <p>At YNM Safety, we don&apos;t just seek business deals – we build relationships. The best partnerships are those where both parties grow, learn, and succeed together.</p>
                <p>Whether you&apos;re a distributor looking to expand your portfolio, a manufacturer seeking collaboration, or an organization interested in our capabilities – we approach every conversation with openness and a long-term perspective.</p>
              </div>
              <div className="fc-phil-card">
                <div className="fc-phil-card-inner">
                  <div className="fc-phil-quote-mark">&ldquo;</div>
                  <blockquote>The best partnerships are built on shared values, not just shared interests.</blockquote>
                  <div className="fc-phil-card-footer">
                    <div className="fc-phil-line" />
                    <span>Our Guiding Principle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Areas */}
        <section className="fc-areas">
          <div className="fc-areas-container">
            <div className="fc-section-header">
              <span className="fc-section-label center">Collaboration Models</span>
              <h2>Ways We Can Work Together</h2>
              <p>Flexible partnership structures designed for mutual growth</p>
            </div>
            <div className="fc-areas-grid">
              {collaborationAreas.map((area, i) => (
                <div key={i} className="fc-area-card">
                  <div className="fc-area-number">0{i + 1}</div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="fc-area-features">
                    {area.features.map((f, j) => (
                      <span key={j}>{f}</span>
                    ))}
                  </div>
                  <div className="fc-area-border" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="fc-regions" id="regions">
          <div className="fc-regions-container">
            <div className="fc-section-header light">
              <span className="fc-section-label center light">Target Markets</span>
              <h2>Regions of Interest</h2>
              <p>Markets where we see exciting potential for collaboration</p>
            </div>
            <div className="fc-regions-showcase">
              <div className="fc-regions-tabs">
                {globalRegions.map((region, i) => (
                  <button
                    key={i}
                    className={`fc-region-tab ${activeRegion === i ? 'active' : ''}`}
                    onClick={() => setActiveRegion(i)}
                  >
                    <span className="fc-tab-indicator" />
                    <span className="fc-tab-flag"><Flag country={region.code} size={20} /></span>
                    <span className="fc-tab-name">{region.name}</span>
                  </button>
                ))}
              </div>
              <div className="fc-region-content">
                <div className="fc-region-details">
                  <div className="fc-region-title">
                    <span className="fc-region-flag"><Flag country={globalRegions[activeRegion].code} size={40} /></span>
                    <h3>{globalRegions[activeRegion].name}</h3>
                  </div>
                  <div className="fc-countries-grid">
                    {globalRegions[activeRegion].countries.map((country, j) => (
                      <div key={j} className="fc-country-item">
                        <span className="fc-country-flag"><Flag country={country.code} size={22} /></span>
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="fc-region-visual">
                  <div className="fc-region-circle">
                    <span>{globalRegions[activeRegion].countries.length}</span>
                    <small>Countries</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="fc-process">
          <div className="fc-process-container">
            <div className="fc-section-header">
              <span className="fc-section-label center">How It Works</span>
              <h2>Partnership Journey</h2>
              <p>A transparent and straightforward path to collaboration</p>
            </div>
            <div className="fc-process-track">
              <div className="fc-process-line" />
              {partnershipSteps.map((step, i) => (
                <div key={i} className="fc-process-step">
                  <div className="fc-step-marker">
                    <span>{step.num}</span>
                  </div>
                  <div className="fc-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="fc-inquiry" id="inquiry">
          <div className="fc-inquiry-container">
            <div className="fc-inquiry-content">
              <span className="fc-section-label light">Get Started</span>
              <h2>Let&apos;s Explore Possibilities</h2>
              <p>Interested in exploring a partnership? Share some details about your organization – there&apos;s no obligation, just an open conversation.</p>
              
              <div className="fc-inquiry-features">
                <div className="fc-feature">
                  <div className="fc-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="fc-feature-text">
                    <strong>Quick Response</strong>
                    <span>We respond within 2-3 business days</span>
                  </div>
                </div>
                <div className="fc-feature">
                  <div className="fc-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div className="fc-feature-text">
                    <strong>Confidential</strong>
                    <span>All inquiries treated with discretion</span>
                  </div>
                </div>
              </div>

              <div className="fc-email-direct">
                <span>Or reach us directly:</span>
                <a href="mailto:partnerships@ynmsafety.com">partnerships@ynmsafety.com</a>
              </div>
            </div>

            <div className="fc-inquiry-form-wrapper">
              {submitted ? (
                <div className="fc-success">
                  <div className="fc-success-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Thank You!</h3>
                  <p>We&apos;ve received your inquiry and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="fc-form">
                  <div className="fc-form-grid">
                    <div className="fc-field">
                      <label>Company Name <span>*</span></label>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Your company name" />
                    </div>
                    <div className="fc-field">
                      <label>Country <span>*</span></label>
                      <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder="Country of operation" />
                    </div>
                    <div className="fc-field">
                      <label>Contact Person <span>*</span></label>
                      <input type="text" name="contactName" value={formData.contactName} onChange={handleChange} required placeholder="Full name" />
                    </div>
                    <div className="fc-field">
                      <label>Email <span>*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Business email" />
                    </div>
                  </div>
                  <div className="fc-field">
                    <label>Type of Collaboration</label>
                    <select name="collaborationType" value={formData.collaborationType} onChange={handleChange}>
                      <option value="">Select an option</option>
                      <option value="Manufacturing">Manufacturing Partnership</option>
                      <option value="Distribution">Distribution Partnership</option>
                      <option value="Technology">Technology Exchange</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="fc-field">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your interest..." />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="fc-submit-btn">
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .fc-page {
          min-height: 100vh;
          background: #FDFBF7;
        }

        /* Hero */
        .fc-hero {
          position: relative;
          min-height: auto;
          display: flex;
          align-items: center;
          padding: 140px 5% 80px;
          overflow: hidden;
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
        }

        .fc-hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(201, 162, 77, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 162, 77, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .fc-hero-gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(201, 162, 77, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(154, 27, 46, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        .fc-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .fc-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .fc-badge-line {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #C9A24D);
        }

        .fc-badge-line:last-child {
          background: linear-gradient(90deg, #C9A24D, transparent);
        }

        .fc-hero-badge span:not(.fc-badge-line) {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #C9A24D;
        }

        .fc-hero h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .fc-hero h1 span {
          color: #C9A24D;
        }

        .fc-hero-text p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin: 0 0 32px;
          max-width: 480px;
        }

        .fc-hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .fc-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          color: #74060D;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.3);
        }

        .fc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(201, 162, 77, 0.5);
        }

        .fc-btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          background: transparent;
          border: 1px solid rgba(201, 162, 77, 0.4);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .fc-btn-ghost:hover {
          border-color: #C9A24D;
          color: #C9A24D;
          background: rgba(201, 162, 77, 0.1);
        }

        /* Globe Visual */
        .fc-hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .fc-globe-container {
          position: relative;
          width: 320px;
          height: 320px;
        }

        .fc-globe {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fc-globe-sphere {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.6) 0%, rgba(90, 4, 9, 0.8) 100%);
          border: 2px solid rgba(201, 162, 77, 0.4);
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 0 60px rgba(201, 162, 77, 0.2),
            inset 0 0 40px rgba(0, 0, 0, 0.3);
        }

        .fc-globe-grid {
          position: absolute;
          inset: -50%;
          background: 
            repeating-linear-gradient(0deg, transparent, transparent 14px, rgba(201, 162, 77, 0.15) 14px, rgba(201, 162, 77, 0.15) 15px),
            repeating-linear-gradient(90deg, transparent, transparent 14px, rgba(201, 162, 77, 0.15) 14px, rgba(201, 162, 77, 0.15) 15px);
          animation: fc-grid-rotate 30s linear infinite;
          border-radius: 50%;
        }

        @keyframes fc-grid-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Orbiting rings */
        .fc-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px solid rgba(201, 162, 77, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .fc-orbit-1 {
          width: 220px;
          height: 220px;
          animation: fc-orbit-spin 12s linear infinite;
        }

        .fc-orbit-2 {
          width: 270px;
          height: 270px;
          animation: fc-orbit-spin 18s linear infinite reverse;
          border-style: dashed;
        }

        .fc-orbit-3 {
          width: 310px;
          height: 310px;
          animation: fc-orbit-spin 25s linear infinite;
          border-color: rgba(201, 162, 77, 0.15);
        }

        @keyframes fc-orbit-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .fc-orbit-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: 10px;
          height: 10px;
          background: #C9A24D;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(201, 162, 77, 0.8);
        }

        /* Floating markers */
        .fc-markers {
          position: absolute;
          inset: 0;
        }

        .fc-marker {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fc-marker-float 3s ease-in-out infinite;
        }

        .fc-marker span {
          font-size: 28px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
          z-index: 2;
        }

        .fc-marker-pulse {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(201, 162, 77, 0.3);
          animation: fc-pulse 2s ease-out infinite;
        }

        @keyframes fc-pulse {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes fc-marker-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .fc-marker-1 { top: 15%; left: 10%; animation-delay: 0s; }
        .fc-marker-2 { top: 20%; right: 5%; animation-delay: 0.5s; }
        .fc-marker-3 { bottom: 25%; right: 10%; animation-delay: 1s; }
        .fc-marker-4 { bottom: 15%; left: 15%; animation-delay: 1.5s; }

        /* Connection lines */
        .fc-connections {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .fc-connection-line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: fc-draw-line 3s ease-in-out infinite;
        }

        .fc-line-1 { animation-delay: 0s; }
        .fc-line-2 { animation-delay: 0.75s; }
        .fc-line-3 { animation-delay: 1.5s; }
        .fc-line-4 { animation-delay: 2.25s; }

        @keyframes fc-draw-line {
          0%, 100% { stroke-dashoffset: 100; opacity: 0; }
          50% { stroke-dashoffset: 0; opacity: 1; }
        }

        /* Center badge */
        .fc-globe-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 5;
        }

        .fc-globe-center span {
          display: block;
          font-size: 24px;
          font-weight: 900;
          color: #C9A24D;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          line-height: 1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .fc-globe-center small {
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.8);
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        /* Capabilities */
        .fc-capabilities {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          padding: 28px 5%;
          background: #1A1614;
          border-top: 1px solid rgba(201, 162, 77, 0.3);
        }

        .fc-cap-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.02em;
        }

        .fc-cap-item svg {
          color: #C9A24D;
        }

        /* Section Styles */
        .fc-section-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #74060D;
          margin-bottom: 16px;
        }

        .fc-section-label.center {
          display: block;
          text-align: center;
        }

        .fc-section-label.light {
          color: #C9A24D;
        }

        .fc-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .fc-section-header.light h2 {
          color: #fff;
        }

        .fc-section-header.light p {
          color: rgba(255, 255, 255, 0.7);
        }

        .fc-section-header h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #1A1614;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .fc-section-header p {
          font-size: 16px;
          color: #666;
          margin: 0;
        }

        /* Philosophy */
        .fc-philosophy {
          padding: 120px 5%;
          background: #fff;
        }

        .fc-phil-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .fc-phil-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .fc-phil-content h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #1A1614;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .fc-phil-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #C9A24D, #E6D3A3);
          margin-bottom: 28px;
        }

        .fc-phil-content p {
          font-size: 16px;
          line-height: 1.9;
          color: #555;
          margin: 0 0 20px;
        }

        .fc-phil-card {
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          border-radius: 8px;
          padding: 3px;
        }

        .fc-phil-card-inner {
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          border-radius: 6px;
          padding: 50px 40px;
          position: relative;
          border: 1px solid rgba(201, 162, 77, 0.3);
        }

        .fc-phil-quote-mark {
          font-size: 80px;
          font-weight: 800;
          color: rgba(201, 162, 77, 0.2);
          line-height: 0.5;
          margin-bottom: 20px;
        }

        .fc-phil-card blockquote {
          font-size: 22px;
          font-weight: 600;
          color: #fff;
          line-height: 1.5;
          margin: 0;
          font-style: italic;
        }

        .fc-phil-card-footer {
          margin-top: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .fc-phil-line {
          width: 40px;
          height: 2px;
          background: #C9A24D;
        }

        .fc-phil-card-footer span {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #C9A24D;
        }

        /* Areas */
        .fc-areas {
          padding: 120px 5%;
          background: linear-gradient(180deg, #F8F5F0 0%, #FDFBF7 100%);
        }

        .fc-areas-container {
          max-width: 1300px;
          margin: 0 auto;
        }

        .fc-areas-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .fc-area-card {
          background: #fff;
          border-radius: 8px;
          padding: 36px 28px;
          position: relative;
          border: 1px solid #E8E4DC;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .fc-area-card:hover {
          border-color: #C9A24D;
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(116, 6, 13, 0.12);
        }

        .fc-area-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .fc-area-card:hover .fc-area-border {
          transform: scaleX(1);
        }

        .fc-area-number {
          font-size: 48px;
          font-weight: 900;
          color: rgba(201, 162, 77, 0.15);
          line-height: 1;
          margin-bottom: 16px;
        }

        .fc-area-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .fc-area-card p {
          font-size: 14px;
          color: #666;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .fc-area-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .fc-area-features span {
          font-size: 11px;
          font-weight: 600;
          padding: 6px 12px;
          background: rgba(201, 162, 77, 0.1);
          color: #74060D;
          border-radius: 4px;
        }

        /* Regions */
        .fc-regions {
          padding: 120px 5%;
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
        }

        .fc-regions-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .fc-regions-showcase {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(201, 162, 77, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }

        .fc-regions-tabs {
          display: flex;
          border-bottom: 1px solid rgba(201, 162, 77, 0.2);
        }

        .fc-region-tab {
          flex: 1;
          padding: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }

        .fc-tab-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #C9A24D;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .fc-region-tab.active .fc-tab-indicator {
          transform: scaleX(1);
        }

        .fc-tab-flag {
          font-size: 20px;
          margin-right: 10px;
        }

        .fc-tab-name {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.3s ease;
        }

        .fc-region-tab.active .fc-tab-name,
        .fc-region-tab:hover .fc-tab-name {
          color: #C9A24D;
        }

        .fc-region-content {
          padding: 50px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 60px;
          align-items: center;
        }

        .fc-region-title {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .fc-region-flag {
          font-size: 48px;
          line-height: 1;
        }

        .fc-region-details h3 {
          font-size: 32px;
          font-weight: 800;
          color: #fff;
          margin: 0;
        }

        .fc-countries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .fc-country-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          background: rgba(201, 162, 77, 0.1);
          border: 1px solid rgba(201, 162, 77, 0.2);
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .fc-country-item:hover {
          background: rgba(201, 162, 77, 0.15);
          border-color: rgba(201, 162, 77, 0.4);
          transform: translateY(-2px);
        }

        .fc-country-flag {
          font-size: 22px;
          line-height: 1;
        }

        .fc-country-dot {
          width: 8px;
          height: 8px;
          background: #C9A24D;
          border-radius: 50%;
        }

        .fc-country-item span:last-child {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
        }

        .fc-region-visual {
          display: flex;
          justify-content: center;
        }

        .fc-region-circle {
          width: 140px;
          height: 140px;
          background: linear-gradient(135deg, rgba(201, 162, 77, 0.2), rgba(201, 162, 77, 0.05));
          border: 2px solid rgba(201, 162, 77, 0.4);
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .fc-region-circle span {
          font-size: 48px;
          font-weight: 800;
          color: #C9A24D;
          line-height: 1;
        }

        .fc-region-circle small {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 8px;
        }

        /* Process */
        .fc-process {
          padding: 120px 5%;
          background: #fff;
        }

        .fc-process-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .fc-process-track {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .fc-process-line {
          position: absolute;
          top: 35px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, #C9A24D, #74060D, #C9A24D);
        }

        .fc-process-step {
          text-align: center;
          position: relative;
        }

        .fc-step-marker {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          border: 3px solid #C9A24D;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          position: relative;
          z-index: 2;
        }

        .fc-step-marker span {
          font-size: 18px;
          font-weight: 800;
          color: #fff;
        }

        .fc-step-content h4 {
          font-size: 16px;
          font-weight: 700;
          color: #1A1614;
          margin: 0 0 8px;
        }

        .fc-step-content p {
          font-size: 14px;
          color: #666;
          margin: 0;
          line-height: 1.5;
        }

        /* Inquiry */
        .fc-inquiry {
          padding: 120px 5%;
          background: linear-gradient(180deg, #1A1614 0%, #0D0B0A 100%);
        }

        .fc-inquiry-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
        }

        .fc-inquiry-content h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .fc-inquiry-content > p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin: 0 0 40px;
        }

        .fc-inquiry-features {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .fc-feature {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .fc-feature-icon {
          width: 48px;
          height: 48px;
          background: rgba(201, 162, 77, 0.1);
          border: 1px solid rgba(201, 162, 77, 0.3);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fc-feature-icon svg {
          color: #C9A24D;
        }

        .fc-feature-text strong {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .fc-feature-text span {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .fc-email-direct {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 24px;
          background: rgba(201, 162, 77, 0.08);
          border: 1px solid rgba(201, 162, 77, 0.2);
          border-radius: 8px;
        }

        .fc-email-direct span {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .fc-email-direct a {
          font-size: 18px;
          font-weight: 700;
          color: #C9A24D;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .fc-email-direct a:hover {
          color: #E6D3A3;
        }

        .fc-inquiry-form-wrapper {
          background: #fff;
          border-radius: 12px;
          padding: 48px 40px;
          border: 1px solid rgba(201, 162, 77, 0.3);
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
        }

        .fc-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .fc-field {
          margin-bottom: 20px;
        }

        .fc-field label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #1A1614;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 10px;
        }

        .fc-field label span {
          color: #74060D;
        }

        .fc-field input,
        .fc-field select,
        .fc-field textarea {
          width: 100%;
          padding: 16px 18px;
          font-size: 15px;
          border: 1px solid #E0DCD4;
          border-radius: 6px;
          background: #FDFBF7;
          color: #1A1614;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .fc-field input::placeholder,
        .fc-field textarea::placeholder {
          color: #999;
        }

        .fc-field input:focus,
        .fc-field select:focus,
        .fc-field textarea:focus {
          outline: none;
          border-color: #C9A24D;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(201, 162, 77, 0.1);
        }

        .fc-submit-btn {
          width: 100%;
          padding: 20px 32px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
        }

        .fc-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(116, 6, 13, 0.3);
        }

        .fc-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .fc-success {
          text-align: center;
          padding: 60px 20px;
        }

        .fc-success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
        }

        .fc-success-icon svg {
          color: #74060D;
        }

        .fc-success h3 {
          font-size: 28px;
          font-weight: 800;
          color: #1A1614;
          margin: 0 0 12px;
        }

        .fc-success p {
          font-size: 16px;
          color: #666;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .fc-hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .fc-hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .fc-hero-text p {
            max-width: 600px;
          }
          .fc-hero-stats {
            max-width: 340px;
          }
          .fc-areas-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .fc-phil-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .fc-inquiry-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .fc-countries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fc-region-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .fc-process-track {
            grid-template-columns: repeat(2, 1fr);
          }
          .fc-process-line {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .fc-hero {
            padding: 120px 20px 60px;
          }
          .fc-hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .fc-stat-card {
            padding: 20px 16px;
          }
          .fc-stat-value {
            font-size: 26px;
          }
          .fc-stat-label {
            font-size: 10px;
          }
          .fc-capabilities {
            gap: 16px;
            padding: 20px 16px;
          }
          .fc-cap-item {
            font-size: 11px;
          }
          .fc-areas-grid {
            grid-template-columns: 1fr;
          }
          .fc-regions-tabs {
            flex-wrap: wrap;
          }
          .fc-region-tab {
            flex: 1 1 50%;
          }
          .fc-region-content {
            padding: 30px 20px;
          }
          .fc-countries-grid {
            grid-template-columns: 1fr;
          }
          .fc-process-track {
            grid-template-columns: 1fr;
          }
          .fc-form-grid {
            grid-template-columns: 1fr;
          }
          .fc-inquiry-form-wrapper {
            padding: 32px 24px;
          }
        }
      `}</style>
    </>
  );
}
