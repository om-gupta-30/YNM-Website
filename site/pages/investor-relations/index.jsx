"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const milestones = [
  { year: "2013", title: "Foundation", desc: "Company established in Hyderabad" },
  { year: "2015", title: "First Export", desc: "International market entry" },
  { year: "2018", title: "ISO Certified", desc: "Quality management systems" },
  { year: "2021", title: "Expansion", desc: "New manufacturing facility" },
  { year: "2024", title: "PAN India", desc: "Nationwide distribution" },
  { year: "2025", title: "Contracting", desc: "Major contracting ventures" },
  { year: "2026", title: "PAN India Mfg", desc: "Nationwide manufacturing operations" },
];

const investmentThesis = [
  { 
    title: "Proven Track Record", 
    desc: "Over a decade of consistent growth with established client relationships across domestic and international markets.",
    stat: "10+",
    statLabel: "Years"
  },
  { 
    title: "Export Infrastructure", 
    desc: "Established supply chain and documentation for seamless international trade across multiple continents.",
    stat: "Multi",
    statLabel: "Continent"
  },
  { 
    title: "Scalable Operations", 
    desc: "Modern facilities with significant capacity for expansion to meet growing demand.",
    stat: "3x",
    statLabel: "Capacity"
  },
  { 
    title: "Diversified Portfolio", 
    desc: "Multiple product categories reducing dependency on single market or segment.",
    stat: "3",
    statLabel: "Verticals"
  },
];

const fundAllocation = [
  { title: "Capacity Expansion", percent: 40, color: "#74060D" },
  { title: "Technology Upgrade", percent: 25, color: "#9A1B2E" },
  { title: "Market Development", percent: 20, color: "#C9A24D" },
  { title: "Working Capital", percent: 15, color: "#E6D3A3" },
];

const faqs = [
  { 
    q: "What type of investment are you open to?", 
    a: "We're open to equity investment, strategic partnerships, and joint ventures based on alignment of vision and long-term value creation." 
  },
  { 
    q: "Are you actively raising funds?", 
    a: "We're selectively open to conversations with investors who share our long-term vision for quality-driven growth." 
  },
  { 
    q: "What information can you share?", 
    a: "After initial discussions and appropriate NDAs, we can share detailed financials, business plans, and growth projections." 
  },
  { 
    q: "What is the minimum investment threshold?", 
    a: "We evaluate partnerships based on strategic fit rather than minimum amounts. Every conversation is tailored to mutual goals." 
  },
];

const companyStats = [
  { value: "10+", label: "Years", sublabel: "Manufacturing" },
  { value: "ISO", label: "9001:2015", sublabel: "Certified" },
  { value: "3", label: "Product", sublabel: "Verticals" },
  { value: "Global", label: "Export", sublabel: "Ready" },
];

export default function InvestorRelationsPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: "", organization: "", email: "", investorType: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
        <title>Investor Relations | YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Explore investment opportunities with YNM Safety. Selectively open to partnerships aligned with our vision." />
      </Head>

      <Navbar />

      <main className="ir-page">
        {/* Hero */}
        <section className="ir-hero">
          <div className="ir-hero-bg" />
          <div className="ir-hero-lines">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="ir-line" style={{ left: `${20 + i * 15}%` }} />
            ))}
          </div>
          <div className="ir-hero-content">
            <div className="ir-hero-main">
              <div className="ir-hero-label">
                <div className="ir-label-dot" />
                <span>Investor Relations</span>
              </div>
              <h1>Building Value,<br />Creating <span>Opportunity</span></h1>
              <p>We&apos;re selectively open to investment partnerships with those who share our vision for quality-driven, sustainable growth.</p>
              <div className="ir-hero-cta">
                <a href="#connect" className="ir-btn-primary">
                  Start a Dialogue
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#thesis" className="ir-btn-outline">Investment Thesis</a>
              </div>
            </div>
            <div className="ir-hero-visual">
              <div className="ir-visual-container">
                {/* Animated Growth Chart */}
                <div className="ir-chart-wrapper">
                  <svg className="ir-chart" viewBox="0 0 300 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="lineGradIR" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#74060D" />
                        <stop offset="100%" stopColor="#C9A24D" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(201,162,77,0.1)" strokeWidth="1" />
                    <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(201,162,77,0.1)" strokeWidth="1" />
                    <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(201,162,77,0.1)" strokeWidth="1" />
                    {/* Area fill */}
                    <path className="ir-chart-area" d="M0,180 L30,160 L60,155 L90,140 L120,120 L150,100 L180,80 L210,60 L240,45 L270,35 L300,20 L300,200 L0,200 Z" fill="url(#chartGrad)" />
                    {/* Main line */}
                    <path className="ir-chart-line" d="M0,180 L30,160 L60,155 L90,140 L120,120 L150,100 L180,80 L210,60 L240,45 L270,35 L300,20" fill="none" stroke="url(#lineGradIR)" strokeWidth="3" strokeLinecap="round" />
                    {/* Data points */}
                    <circle className="ir-chart-dot ir-dot-1" cx="60" cy="155" r="4" fill="#C9A24D" />
                    <circle className="ir-chart-dot ir-dot-2" cx="120" cy="120" r="4" fill="#C9A24D" />
                    <circle className="ir-chart-dot ir-dot-3" cx="180" cy="80" r="5" fill="#C9A24D" />
                    <circle className="ir-chart-dot ir-dot-4" cx="240" cy="45" r="4" fill="#C9A24D" />
                    <circle className="ir-chart-dot ir-dot-5" cx="300" cy="20" r="6" fill="#C9A24D" />
                  </svg>
                  {/* Year labels */}
                  <div className="ir-chart-years">
                    <span>2013</span>
                    <span>2018</span>
                    <span>2022</span>
                    <span>2026</span>
                  </div>
                </div>
                {/* Floating stat badges */}
                <div className="ir-floating-stats">
                  <div className="ir-float-badge ir-float-1">
                    <div className="ir-float-value">10+</div>
                    <div className="ir-float-label">Years</div>
                    <div className="ir-float-ring" />
                  </div>
                  <div className="ir-float-badge ir-float-2">
                    <div className="ir-float-value">Global</div>
                    <div className="ir-float-label">Vision</div>
                    <div className="ir-float-ring" />
                  </div>
                  <div className="ir-float-badge ir-float-3">
                    <div className="ir-float-value">3x</div>
                    <div className="ir-float-label">Growth</div>
                    <div className="ir-float-ring" />
                  </div>
                </div>
                {/* Pulse indicator */}
                <div className="ir-pulse-indicator">
                  <div className="ir-pulse-dot" />
                  <div className="ir-pulse-ring" />
                  <span>Active Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Banner */}
        <section className="ir-philosophy">
          <div className="ir-phil-content">
            <div className="ir-phil-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <div className="ir-phil-text">
              <h2>Our Philosophy on Investment</h2>
              <p>We believe the best investments are partnerships. We&apos;re not seeking capital for capital&apos;s sake – we&apos;re looking for partners who bring strategic value, industry expertise, and shared commitment to building something meaningful.</p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="ir-journey">
          <div className="ir-journey-container">
            <div className="ir-section-header">
              <span className="ir-section-tag">Our Journey</span>
              <h2>A Decade of Growth</h2>
              <p>Key milestones that have shaped our evolution</p>
            </div>
            <div className="ir-timeline">
              <div className="ir-timeline-track" />
              {milestones.map((m, i) => (
                <div key={i} className="ir-timeline-item">
                  <div className="ir-timeline-marker">
                    <span>{m.year}</span>
                  </div>
                  <div className="ir-timeline-content">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Thesis */}
        <section className="ir-thesis" id="thesis">
          <div className="ir-thesis-container">
            <div className="ir-section-header light">
              <span className="ir-section-tag light">Why YNM Safety</span>
              <h2>Investment Thesis</h2>
              <p>The strategic foundation for sustainable returns</p>
            </div>
            <div className="ir-thesis-grid">
              {investmentThesis.map((item, i) => (
                <div key={i} className="ir-thesis-card">
                  <div className="ir-thesis-stat">
                    <span className="ir-thesis-num">{item.stat}</span>
                    <span className="ir-thesis-label">{item.statLabel}</span>
                  </div>
                  <div className="ir-thesis-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  <div className="ir-thesis-index">0{i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fund Allocation */}
        <section className="ir-funds">
          <div className="ir-funds-container">
            <div className="ir-funds-split">
              <div className="ir-funds-info">
                <span className="ir-section-tag">Capital Deployment</span>
                <h2>Where Investment<br />Would Go</h2>
                <p>A clear vision for how capital would be deployed to accelerate growth, expand capabilities, and create long-term value.</p>
                <div className="ir-funds-note">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  <span>Detailed business plans available after initial discussions and NDA.</span>
                </div>
              </div>
              <div className="ir-funds-chart">
                <div className="ir-chart-visual">
                  <div className="ir-donut">
                    <svg viewBox="0 0 36 36" className="ir-donut-svg">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2a2320" strokeWidth="3"/>
                      {fundAllocation.map((item, i) => {
                        const prevPercent = fundAllocation.slice(0, i).reduce((a, b) => a + b.percent, 0);
                        const dashArray = `${item.percent} ${100 - item.percent}`;
                        const dashOffset = 25 - prevPercent;
                        return (
                          <circle
                            key={i}
                            cx="18"
                            cy="18"
                            r="15.9"
                            fill="none"
                            stroke={item.color}
                            strokeWidth="3"
                            strokeDasharray={dashArray}
                            strokeDashoffset={dashOffset}
                            className="ir-donut-segment"
                          />
                        );
                      })}
                    </svg>
                    <div className="ir-donut-center">
                      <span>100%</span>
                      <small>Allocated</small>
                    </div>
                  </div>
                </div>
                <div className="ir-chart-legend">
                  {fundAllocation.map((item, i) => (
                    <div key={i} className="ir-legend-item">
                      <div className="ir-legend-color" style={{ background: item.color }} />
                      <div className="ir-legend-info">
                        <span className="ir-legend-title">{item.title}</span>
                        <span className="ir-legend-percent">{item.percent}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ir-faq">
          <div className="ir-faq-container">
            <div className="ir-section-header light">
              <span className="ir-section-tag light">Common Questions</span>
              <h2>Frequently Asked</h2>
            </div>
            <div className="ir-faq-list">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`ir-faq-item ${activeFaq === i ? 'active' : ''}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="ir-faq-question">
                    <span className="ir-faq-num">0{i + 1}</span>
                    <span className="ir-faq-text">{faq.q}</span>
                    <div className="ir-faq-toggle">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {activeFaq === i ? (
                          <line x1="5" y1="12" x2="19" y2="12"/>
                        ) : (
                          <>
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                  <div className="ir-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect */}
        <section className="ir-connect" id="connect">
          <div className="ir-connect-container">
            <div className="ir-connect-info">
              <span className="ir-section-tag light">Get in Touch</span>
              <h2>Start a Conversation</h2>
              <p>Interested in learning more? We welcome conversations with potential partners. No commitments, just an open discussion about possibilities.</p>
              
              <div className="ir-connect-points">
                <div className="ir-point">
                  <div className="ir-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div className="ir-point-text">
                    <strong>Confidential</strong>
                    <span>All discussions treated with discretion</span>
                  </div>
                </div>
                <div className="ir-point">
                  <div className="ir-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="ir-point-text">
                    <strong>Responsive</strong>
                    <span>We reply within 2-3 business days</span>
                  </div>
                </div>
                <div className="ir-point">
                  <div className="ir-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div className="ir-point-text">
                    <strong>Direct Access</strong>
                    <span>Speak directly with leadership</span>
                  </div>
                </div>
              </div>

              <div className="ir-email-card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:invest@ynmsafety.com">invest@ynmsafety.com</a>
              </div>
            </div>

            <div className="ir-connect-form-box">
              {submitted ? (
                <div className="ir-success">
                  <div className="ir-success-check">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Thank You</h3>
                  <p>We&apos;ve received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="ir-form">
                  <div className="ir-form-header">
                    <h3>Express Interest</h3>
                    <p>Share your details for a confidential discussion</p>
                  </div>
                  <div className="ir-form-grid">
                    <div className="ir-field">
                      <label>Your Name <span>*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full name" />
                    </div>
                    <div className="ir-field">
                      <label>Organization</label>
                      <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Company or fund name" />
                    </div>
                  </div>
                  <div className="ir-field">
                    <label>Email <span>*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Business email" />
                  </div>
                  <div className="ir-field">
                    <label>Investor Type</label>
                    <select name="investorType" value={formData.investorType} onChange={handleChange}>
                      <option value="">Select (optional)</option>
                      <option value="Individual">Individual Investor</option>
                      <option value="Angel">Angel Investor</option>
                      <option value="VC">Venture Capital</option>
                      <option value="PE">Private Equity</option>
                      <option value="Strategic">Strategic Investor</option>
                      <option value="Family Office">Family Office</option>
                    </select>
                  </div>
                  <div className="ir-field">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your interest..." />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="ir-submit">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .ir-page {
          min-height: 100vh;
          background: #FDFBF7;
        }

        /* Hero */
        .ir-hero {
          position: relative;
          min-height: auto;
          display: flex;
          align-items: center;
          padding: 140px 5% 80px;
          overflow: hidden;
          background: #0F0D0C;
        }

        .ir-hero-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 50% 80% at 70% 50%, rgba(116, 6, 13, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 30% 30%, rgba(201, 162, 77, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .ir-hero-lines {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .ir-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent 0%, rgba(201, 162, 77, 0.1) 30%, rgba(201, 162, 77, 0.1) 70%, transparent 100%);
        }

        .ir-hero-content {
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

        .ir-hero-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .ir-label-dot {
          width: 8px;
          height: 8px;
          background: #C9A24D;
          border-radius: 2px;
        }

        .ir-hero-label span {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #C9A24D;
        }

        .ir-hero h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          color: #fff;
          line-height: 1.15;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .ir-hero h1 span {
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ir-hero-main > p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          margin: 0 0 28px;
          max-width: 460px;
        }

        .ir-hero-cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .ir-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 700;
          color: #0F0D0C;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(201, 162, 77, 0.3);
        }

        .ir-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(201, 162, 77, 0.5);
        }

        .ir-btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          background: transparent;
          border: 1px solid rgba(201, 162, 77, 0.3);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .ir-btn-outline:hover {
          border-color: #C9A24D;
          color: #C9A24D;
        }

        /* Animated Visual */
        .ir-hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .ir-visual-container {
          position: relative;
          width: 360px;
          height: 280px;
        }

        .ir-chart-wrapper {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 280px;
          height: 160px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(201, 162, 77, 0.2);
          border-radius: 12px;
          padding: 20px;
          backdrop-filter: blur(10px);
        }

        .ir-chart {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .ir-chart-area {
          opacity: 0;
          animation: ir-fade-in 1s ease-out 0.5s forwards;
        }

        .ir-chart-line {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: ir-draw-line 2s ease-out 0.3s forwards;
        }

        @keyframes ir-draw-line {
          to { stroke-dashoffset: 0; }
        }

        @keyframes ir-fade-in {
          to { opacity: 1; }
        }

        .ir-chart-dot {
          opacity: 0;
          animation: ir-dot-pop 0.3s ease-out forwards;
        }

        .ir-dot-1 { animation-delay: 0.8s; }
        .ir-dot-2 { animation-delay: 1.2s; }
        .ir-dot-3 { animation-delay: 1.6s; }
        .ir-dot-4 { animation-delay: 2s; }
        .ir-dot-5 { animation-delay: 2.3s; }

        @keyframes ir-dot-pop {
          0% { opacity: 0; transform: scale(0); }
          50% { transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        .ir-chart-years {
          display: flex;
          justify-content: space-between;
          padding: 8px 5px 0;
          font-size: 10px;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 600;
        }

        /* Floating stat badges */
        .ir-floating-stats {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .ir-float-badge {
          position: absolute;
          text-align: center;
          animation: ir-float 3s ease-in-out infinite;
        }

        .ir-float-value {
          font-size: 20px;
          font-weight: 900;
          color: #C9A24D;
          line-height: 1;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .ir-float-label {
          font-size: 9px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ir-float-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 50px;
          border: 2px solid rgba(201, 162, 77, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ir-ring-pulse 2s ease-out infinite;
        }

        @keyframes ir-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes ir-ring-pulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
        }

        .ir-float-1 {
          top: 0;
          left: 15%;
          animation-delay: 0s;
        }

        .ir-float-2 {
          top: 10px;
          right: 10%;
          animation-delay: 0.5s;
        }

        .ir-float-3 {
          top: 45%;
          right: 0;
          animation-delay: 1s;
        }

        /* Pulse indicator */
        .ir-pulse-indicator {
          position: absolute;
          bottom: 0;
          left: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ir-pulse-dot {
          width: 8px;
          height: 8px;
          background: #22C55E;
          border-radius: 50%;
          position: relative;
        }

        .ir-pulse-ring {
          position: absolute;
          top: 50%;
          left: 4px;
          width: 8px;
          height: 8px;
          border: 2px solid #22C55E;
          border-radius: 50%;
          transform: translateY(-50%);
          animation: ir-green-pulse 1.5s ease-out infinite;
        }

        @keyframes ir-green-pulse {
          0% { transform: translateY(-50%) scale(1); opacity: 1; }
          100% { transform: translateY(-50%) scale(2.5); opacity: 0; }
        }

        .ir-pulse-indicator span {
          font-size: 10px;
          font-weight: 700;
          color: #22C55E;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Section Styles */
        .ir-section-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #74060D;
          margin-bottom: 16px;
        }

        .ir-section-tag.light {
          color: #C9A24D;
        }

        .ir-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .ir-section-header h2 {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800;
          color: #1A1614;
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }

        .ir-section-header.light h2 {
          color: #fff;
        }

        .ir-section-header p {
          font-size: 16px;
          color: #666;
          margin: 0;
        }

        .ir-section-header.light p {
          color: rgba(255, 255, 255, 0.6);
        }

        /* Philosophy */
        .ir-philosophy {
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          padding: 48px 5%;
          border-top: 1px solid rgba(201, 162, 77, 0.3);
        }

        .ir-phil-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 32px;
          align-items: flex-start;
        }

        .ir-phil-icon {
          width: 56px;
          height: 56px;
          background: rgba(201, 162, 77, 0.15);
          border: 1px solid rgba(201, 162, 77, 0.3);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A24D;
          flex-shrink: 0;
        }

        .ir-phil-text h3 {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
        }

        .ir-phil-text p {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0;
        }

        /* Journey */
        .ir-journey {
          padding: 120px 5%;
          background: #fff;
        }

        .ir-journey-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .ir-timeline {
          position: relative;
          display: flex;
          justify-content: space-between;
        }

        .ir-timeline-track {
          position: absolute;
          top: 24px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, #E6D3A3, #74060D, #E6D3A3);
        }

        .ir-timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .ir-timeline-marker {
          width: 50px;
          height: 50px;
          background: #fff;
          border: 3px solid #C9A24D;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(201, 162, 77, 0.2);
        }

        .ir-timeline-marker span {
          font-size: 12px;
          font-weight: 800;
          color: #74060D;
        }

        .ir-timeline-content {
          text-align: center;
        }

        .ir-timeline-content h4 {
          font-size: 15px;
          font-weight: 700;
          color: #1A1614;
          margin: 0 0 6px;
        }

        .ir-timeline-content p {
          font-size: 13px;
          color: #666;
          margin: 0;
        }

        /* Thesis */
        .ir-thesis {
          padding: 120px 5%;
          background: linear-gradient(135deg, #1A1614 0%, #0F0D0C 100%);
        }

        .ir-thesis-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .ir-thesis-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .ir-thesis-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(201, 162, 77, 0.15);
          border-radius: 12px;
          padding: 36px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 28px;
          position: relative;
          transition: all 0.4s ease;
        }

        .ir-thesis-card:hover {
          border-color: rgba(201, 162, 77, 0.4);
          background: rgba(255, 255, 255, 0.04);
        }

        .ir-thesis-stat {
          text-align: center;
        }

        .ir-thesis-num {
          display: block;
          font-size: 40px;
          font-weight: 800;
          color: #C9A24D;
          line-height: 1;
        }

        .ir-thesis-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ir-thesis-body h3 {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px;
        }

        .ir-thesis-body p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          margin: 0;
        }

        .ir-thesis-index {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 48px;
          font-weight: 900;
          color: rgba(201, 162, 77, 0.08);
        }

        /* Funds */
        .ir-funds {
          padding: 120px 5%;
          background: #FDFBF7;
        }

        .ir-funds-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .ir-funds-split {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .ir-funds-info h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #1A1614;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .ir-funds-info > p {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
          margin: 0 0 32px;
        }

        .ir-funds-note {
          display: flex;
          gap: 14px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(201, 162, 77, 0.08) 0%, rgba(201, 162, 77, 0.03) 100%);
          border: 1px solid rgba(201, 162, 77, 0.2);
          border-radius: 8px;
          align-items: flex-start;
        }

        .ir-funds-note svg {
          color: #C9A24D;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ir-funds-note span {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        .ir-funds-chart {
          display: flex;
          gap: 40px;
          align-items: center;
        }

        .ir-chart-visual {
          flex-shrink: 0;
        }

        .ir-donut {
          position: relative;
          width: 180px;
          height: 180px;
        }

        .ir-donut-svg {
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }

        .ir-donut-segment {
          transition: stroke-dasharray 1s ease;
        }

        .ir-donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .ir-donut-center span {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: #1A1614;
        }

        .ir-donut-center small {
          font-size: 11px;
          font-weight: 600;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .ir-chart-legend {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ir-legend-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ir-legend-color {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          flex-shrink: 0;
        }

        .ir-legend-info {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          flex: 1;
        }

        .ir-legend-title {
          font-size: 14px;
          font-weight: 600;
          color: #1A1614;
        }

        .ir-legend-percent {
          font-size: 14px;
          font-weight: 700;
          color: #74060D;
        }

        /* FAQ */
        .ir-faq {
          padding: 120px 5%;
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
        }

        .ir-faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .ir-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ir-faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(201, 162, 77, 0.15);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ir-faq-item:hover {
          border-color: rgba(201, 162, 77, 0.3);
        }

        .ir-faq-item.active {
          border-color: rgba(201, 162, 77, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }

        .ir-faq-question {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
        }

        .ir-faq-num {
          font-size: 12px;
          font-weight: 700;
          color: #C9A24D;
          opacity: 0.6;
        }

        .ir-faq-text {
          flex: 1;
          font-size: 15px;
          font-weight: 600;
          color: #fff;
        }

        .ir-faq-toggle {
          width: 32px;
          height: 32px;
          background: rgba(201, 162, 77, 0.2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A24D;
          flex-shrink: 0;
        }

        .ir-faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .ir-faq-item.active .ir-faq-answer {
          max-height: 200px;
        }

        .ir-faq-answer p {
          padding: 0 28px 24px 60px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin: 0;
        }

        /* Connect */
        .ir-connect {
          padding: 120px 5%;
          background: linear-gradient(180deg, #1A1614 0%, #0F0D0C 100%);
        }

        .ir-connect-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 80px;
          align-items: start;
        }

        .ir-connect-info h2 {
          font-size: clamp(32px, 4vw, 44px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 20px;
          letter-spacing: -0.02em;
        }

        .ir-connect-info > p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.8;
          margin: 0 0 40px;
        }

        .ir-connect-points {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .ir-point {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .ir-point-icon {
          width: 44px;
          height: 44px;
          background: rgba(201, 162, 77, 0.1);
          border: 1px solid rgba(201, 162, 77, 0.25);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A24D;
          flex-shrink: 0;
        }

        .ir-point-text strong {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .ir-point-text span {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        .ir-email-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: rgba(201, 162, 77, 0.08);
          border: 1px solid rgba(201, 162, 77, 0.2);
          border-radius: 8px;
        }

        .ir-email-card svg {
          color: #C9A24D;
        }

        .ir-email-card a {
          font-size: 18px;
          font-weight: 700;
          color: #C9A24D;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .ir-email-card a:hover {
          color: #E6D3A3;
        }

        .ir-connect-form-box {
          background: #fff;
          border-radius: 12px;
          padding: 40px;
          border: 1px solid rgba(201, 162, 77, 0.2);
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.3);
        }

        .ir-form-header {
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid #E8E4DC;
        }

        .ir-form-header h3 {
          font-size: 22px;
          font-weight: 800;
          color: #1A1614;
          margin: 0 0 6px;
        }

        .ir-form-header p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        .ir-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .ir-field {
          margin-bottom: 16px;
        }

        .ir-field label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: #1A1614;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .ir-field label span {
          color: #74060D;
        }

        .ir-field input,
        .ir-field select,
        .ir-field textarea {
          width: 100%;
          padding: 14px 16px;
          font-size: 14px;
          border: 1px solid #E0DCD4;
          border-radius: 6px;
          background: #FDFBF7;
          color: #1A1614;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .ir-field input::placeholder,
        .ir-field textarea::placeholder {
          color: #999;
        }

        .ir-field input:focus,
        .ir-field select:focus,
        .ir-field textarea:focus {
          outline: none;
          border-color: #C9A24D;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(201, 162, 77, 0.1);
        }

        .ir-submit {
          width: 100%;
          padding: 18px 28px;
          font-size: 14px;
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
          gap: 10px;
          margin-top: 8px;
        }

        .ir-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(116, 6, 13, 0.3);
        }

        .ir-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .ir-success {
          text-align: center;
          padding: 48px 20px;
        }

        .ir-success-check {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #74060D;
        }

        .ir-success h3 {
          font-size: 26px;
          font-weight: 800;
          color: #1A1614;
          margin: 0 0 10px;
        }

        .ir-success p {
          font-size: 15px;
          color: #666;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .ir-hero-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .ir-funds-split {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .ir-funds-chart {
            justify-content: center;
          }
          .ir-connect-container {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }

        @media (max-width: 900px) {
          .ir-thesis-grid {
            grid-template-columns: 1fr;
          }
          .ir-timeline {
            flex-direction: column;
            gap: 24px;
            align-items: flex-start;
          }
          .ir-timeline-track {
            display: none;
          }
          .ir-timeline-item {
            flex-direction: row;
            gap: 20px;
          }
          .ir-timeline-content {
            text-align: left;
          }
        }

        @media (max-width: 640px) {
          .ir-hero {
            padding: 120px 20px 80px;
          }
          .ir-visual-container {
            width: 300px;
            height: 240px;
          }
          .ir-chart-wrapper {
            width: 240px;
            height: 140px;
            padding: 16px;
          }
          .ir-float-value {
            font-size: 16px;
          }
          .ir-float-badge.ir-float-3 {
            display: none;
          }
          .ir-phil-content {
            flex-direction: column;
            text-align: center;
          }
          .ir-form-grid {
            grid-template-columns: 1fr;
          }
          .ir-connect-form-box {
            padding: 28px 24px;
          }
          .ir-funds-chart {
            flex-direction: column;
            gap: 32px;
          }
        }
      `}</style>
    </>
  );
}
