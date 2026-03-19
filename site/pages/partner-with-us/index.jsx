"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackFormStart, trackAdsConversion } from "@/lib/gtag";

const partnerTypes = [
  {
    title: "Authorized Distributor",
    desc: "Represent our full product range in your region with exclusive territory rights and dedicated support.",
    perks: ["Exclusive Territory", "Marketing Support", "Competitive Margins"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Referral Agent",
    desc: "Leverage your network to connect us with potential clients and earn attractive referral commissions.",
    perks: ["Recurring Commissions", "No Inventory Risk", "Flexible Engagement"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Application Partner",
    desc: "Contractors and applicators who use our products on-site. Get priority pricing and technical training.",
    perks: ["Priority Pricing", "Technical Training", "Project Support"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Commission Agent",
    desc: "Earn commissions by facilitating deals between us and buyers. Ideal for industry professionals with strong connections.",
    perks: ["Deal-Based Earnings", "Industry Network", "Transparent Tracking"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const whyPartner = [
  { stat: "10+", label: "Years", desc: "Proven track record in manufacturing and exports" },
  { stat: "ISO", label: "Certified", desc: "Quality management systems you can trust" },
  { stat: "PAN", label: "India", desc: "Nationwide presence with growing distribution" },
  { stat: "3", label: "Verticals", desc: "Diversified product portfolio across segments" },
];

const processSteps = [
  { num: "01", title: "Apply", desc: "Submit your interest through the form below" },
  { num: "02", title: "Review", desc: "Our team evaluates alignment and potential" },
  { num: "03", title: "Discussion", desc: "We connect for a detailed conversation" },
  { num: "04", title: "Onboard", desc: "Formalize terms and begin the partnership" },
];

const faqs = [
  {
    q: "What regions are you looking for partners in?",
    a: "We are expanding across India and select international markets. We welcome applications from all regions, though priority is given to underserved territories with high demand potential.",
  },
  {
    q: "Do I need prior industry experience?",
    a: "While industry experience is preferred, it is not mandatory for all partner types. Referral agents and commission agents can come from adjacent industries. Application partners should have relevant on-ground experience.",
  },
  {
    q: "What is the investment required?",
    a: "Investment requirements vary by partner type. Referral and commission agents require no upfront investment. Distributors may need to maintain reasonable inventory levels, which we discuss on a case-by-case basis.",
  },
  {
    q: "How are commissions structured?",
    a: "Commission structures are competitive and transparent. Details are shared during the discussion phase based on the partnership type and scope of engagement.",
  },
];

const orbitalNodes = [
  {
    id: 0,
    title: "Distributor",
    desc: "Exclusive territory rights, full product access, marketing support, and competitive margins for regional growth.",
    iconPath: "M2 7h20v14H2zM8 7V3h8v4",
  },
  {
    id: 1,
    title: "Referral",
    desc: "Earn recurring commissions by connecting us with clients. No inventory risk — just your network and our products.",
    iconPath: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    id: 2,
    title: "Applicator",
    desc: "Priority pricing and technical training for contractors who apply our products. On-site project support included.",
    iconPath: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  },
  {
    id: 3,
    title: "Agent",
    desc: "Facilitate deals and earn transparent, deal-based commissions. Ideal for industry professionals with strong connections.",
    iconPath: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  },
];

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", partnerType: "", region: "", message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  const [orbitAngle, setOrbitAngle] = useState(0);
  const [activeNode, setActiveNode] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const orbitContainerRef = useRef(null);
  const formStartFired = useRef(false);

  const handleFormFocus = () => {
    if (!formStartFired.current) {
      formStartFired.current = true;
      trackFormStart("partner_with_us");
    }
  };

  useEffect(() => {
    if (!autoRotate) return;
    const timer = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.35) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, [autoRotate]);

  const getNodePos = useCallback((index) => {
    const angle = ((index / 4) * 360 + orbitAngle) % 360;
    const rad = (angle * Math.PI) / 180;
    const radius = 148;
    return {
      x: radius * Math.cos(rad),
      y: radius * Math.sin(rad),
      angle,
      scale: 0.75 + 0.25 * ((1 + Math.sin(rad)) / 2),
      opacity: 0.5 + 0.5 * ((1 + Math.sin(rad)) / 2),
    };
  }, [orbitAngle]);

  const handleNodeClick = useCallback((id) => {
    if (activeNode === id) {
      setActiveNode(null);
      setAutoRotate(true);
    } else {
      setActiveNode(id);
      setAutoRotate(false);
      const targetAngle = (id / 4) * 360;
      setOrbitAngle(270 - targetAngle);
    }
  }, [activeNode]);

  const handleOrbitBgClick = useCallback((e) => {
    if (e.target === orbitContainerRef.current) {
      setActiveNode(null);
      setAutoRotate(true);
    }
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    const errs = {};

    if (!formData.name.trim()) errs.name = "Name is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) errs.email = "Enter a valid email.";
    if (!formData.phone.trim()) errs.phone = "Phone number is required.";
    if (!formData.partnerType) errs.partnerType = "Please select a partner type.";

    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) { setIsSubmitting(false); return; }

    try {
      const response = await fetch("/api/partner-with-us/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        trackAdsConversion("partner_with_us");
        setSubmitted(true);
        setFormData({ name: "", company: "", email: "", phone: "", partnerType: "", region: "", message: "" });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Partner With Us | YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Become a channel partner with YNM Safety. We work with distributors, referral agents, application partners, and commission agents across India and beyond." />
        <link rel="canonical" href="https://ynmsafety.com/partner-with-us" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ynmsafety.com/partner-with-us" />
        <meta property="og:title" content="Partner With Us | YNM Safety Pan Global Trade Pvt Ltd" />
        <meta property="og:description" content="Become a channel partner with YNM Safety. Distributors, referral agents, application partners, and commission agents." />
        <meta property="og:image" content="https://ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partner With Us | YNM Safety Pan Global Trade Pvt Ltd" />
        <meta name="twitter:description" content="Become a channel partner with YNM Safety." />
        <meta name="twitter:image" content="https://ynmsafety.com/assets/logo-navbar.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://ynmsafety.com" },
                { "@type": "ListItem", position: 2, name: "Partner With Us", item: "https://ynmsafety.com/partner-with-us" },
              ],
            }),
          }}
        />
      </Head>

      <Navbar />

      <main className="pw-page">
        {/* Hero */}
        <section className="pw-hero">
          <div className="pw-hero-pattern" />
          <div className="pw-hero-gradient" />
          <div className="pw-hero-content">
            <div className="pw-hero-text">
              <div className="pw-hero-badge">
                <div className="pw-badge-dot" />
                <span>Channel Partnerships</span>
              </div>
              <h1>Grow With a <span>Trusted Partner</span></h1>
              <p>We work with select distributors, agents, and partners who share our commitment to quality. If you have the reach and we have the products — let&apos;s build something together.</p>
              <div className="pw-hero-actions">
                <a href="#apply" className="pw-btn-primary">
                  <span>Apply Now</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#models" className="pw-btn-ghost">Explore Models</a>
              </div>
            </div>
            <div className="pw-hero-visual">
              <div className="pw-orbit-wrapper" ref={orbitContainerRef} onClick={handleOrbitBgClick}>
                {/* Orbit track rings */}
                <div className="pw-orbit-track" />
                <div className="pw-orbit-track-2" />
                <div className="pw-orbit-track-3" />

                {/* Central hub */}
                <div className="pw-core">
                  <div className="pw-core-ping" />
                  <div className="pw-core-ping pw-core-ping-2" />
                  <div className="pw-core-inner">
                    <span>YNM</span>
                    <small>Network</small>
                  </div>
                </div>

                {/* SVG connection lines */}
                <svg className="pw-orbit-svg" viewBox="0 0 400 400">
                  <defs>
                    <radialGradient id="orbGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C9A24D" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#C9A24D" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="200" cy="200" r="160" fill="url(#orbGlow)" />
                  {orbitalNodes.map((node) => {
                    const pos = getNodePos(node.id);
                    const isActive = activeNode === node.id;
                    return (
                      <line
                        key={`line-${node.id}`}
                        x1="200" y1="200"
                        x2={200 + pos.x} y2={200 + pos.y}
                        stroke="#C9A24D"
                        strokeWidth={isActive ? "2" : "1"}
                        strokeOpacity={isActive ? "0.7" : "0.2"}
                        strokeDasharray={isActive ? "none" : "4 4"}
                        style={{ transition: "all 0.7s ease" }}
                      />
                    );
                  })}
                </svg>

                {/* Orbital nodes */}
                {orbitalNodes.map((node) => {
                  const pos = getNodePos(node.id);
                  const isActive = activeNode === node.id;
                  return (
                    <div
                      key={node.id}
                      className={`pw-orb-node ${isActive ? "pw-orb-active" : ""}`}
                      style={{
                        transform: `translate(${pos.x}px, ${pos.y}px) scale(${isActive ? 1.3 : pos.scale})`,
                        opacity: isActive ? 1 : pos.opacity,
                        zIndex: isActive ? 200 : Math.round(100 + 50 * pos.scale),
                      }}
                      onClick={(e) => { e.stopPropagation(); handleNodeClick(node.id); }}
                    >
                      {/* Node glow */}
                      <div className={`pw-orb-glow ${isActive ? "pw-orb-glow-active" : ""}`} />
                      {/* Node circle */}
                      <div className={`pw-orb-circle ${isActive ? "pw-orb-circle-active" : ""}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d={node.iconPath} />
                        </svg>
                      </div>
                      {/* Node label */}
                      <div className={`pw-orb-label ${isActive ? "pw-orb-label-active" : ""}`}>
                        {node.title}
                      </div>
                      {/* Expanded card */}
                      {isActive && (
                        <div className="pw-orb-card">
                          <div className="pw-orb-card-stem" />
                          <div className="pw-orb-card-badge">Partner Model</div>
                          <h4>{node.title}</h4>
                          <p>{node.desc}</p>
                          <a href="#apply" className="pw-orb-card-cta" onClick={(e) => e.stopPropagation()}>
                            Apply Now
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Floating particles */}
                <div className="pw-particle-field">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="pw-fp" style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                      animationDelay: `${i * 0.6}s`,
                      animationDuration: `${3 + Math.random() * 3}s`,
                    }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner Strip */}
        <section className="pw-stats">
          {whyPartner.map((item, i) => (
            <div key={i} className="pw-stat-item">
              <div className="pw-stat-value">{item.stat}</div>
              <div className="pw-stat-label">{item.label}</div>
              <div className="pw-stat-desc">{item.desc}</div>
            </div>
          ))}
        </section>

        {/* Value Proposition */}
        <section className="pw-value">
          <div className="pw-value-container">
            <div className="pw-value-content">
              <span className="pw-section-label">Why Partner With Us</span>
              <h2>A Partnership Built on Strength</h2>
              <div className="pw-value-divider" />
              <p>YNM Safety has spent over a decade building a reputation for quality products and reliable delivery. Our partners benefit from an established brand, diverse product portfolio, and a company that genuinely invests in their success.</p>
              <p>We don&apos;t just onboard partners — we equip them with training, marketing materials, and ongoing support to ensure mutual growth.</p>
            </div>
            <div className="pw-value-card">
              <div className="pw-value-card-inner">
                <div className="pw-value-quote">&ldquo;</div>
                <blockquote>The right partner amplifies your strength. We look for alignment in values, not just volume.</blockquote>
                <div className="pw-value-footer">
                  <div className="pw-value-line" />
                  <span>Our Partnership Philosophy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="pw-models" id="models">
          <div className="pw-models-container">
            <div className="pw-section-header">
              <span className="pw-section-label center">Partnership Models</span>
              <h2>Ways to Work With Us</h2>
              <p>Choose the model that fits your strengths and market presence</p>
            </div>
            <div className="pw-models-grid">
              {partnerTypes.map((type, i) => (
                <div key={i} className="pw-model-card">
                  <div className="pw-model-icon">{type.icon}</div>
                  <h3>{type.title}</h3>
                  <p>{type.desc}</p>
                  <div className="pw-model-perks">
                    {type.perks.map((p, j) => (
                      <span key={j}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="pw-model-border" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pw-process">
          <div className="pw-process-container">
            <div className="pw-section-header light">
              <span className="pw-section-label center light">How It Works</span>
              <h2>Partnership Journey</h2>
              <p>A straightforward path from application to onboarding</p>
            </div>
            <div className="pw-process-track">
              <div className="pw-process-line" />
              {processSteps.map((step, i) => (
                <div key={i} className="pw-process-step">
                  <div className="pw-step-marker"><span>{step.num}</span></div>
                  <div className="pw-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pw-faq">
          <div className="pw-faq-container">
            <div className="pw-section-header">
              <span className="pw-section-label center">Common Questions</span>
              <h2>Frequently Asked</h2>
            </div>
            <div className="pw-faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`pw-faq-item ${activeFaq === i ? "active" : ""}`}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <div className="pw-faq-question">
                    <span className="pw-faq-num">0{i + 1}</span>
                    <span className="pw-faq-text">{faq.q}</span>
                    <div className="pw-faq-toggle">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {activeFaq === i ? (
                          <line x1="5" y1="12" x2="19" y2="12" />
                        ) : (
                          <>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                  <div className="pw-faq-answer"><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="pw-apply" id="apply">
          <div className="pw-apply-container">
            <div className="pw-apply-info">
              <span className="pw-section-label light">Get Started</span>
              <h2>Apply to Partner With Us</h2>
              <p>Share some details about yourself and your business. There&apos;s no obligation — we&apos;ll review your application and reach out if there&apos;s a fit.</p>

              <div className="pw-apply-points">
                <div className="pw-point">
                  <div className="pw-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="pw-point-text">
                    <strong>Quick Review</strong>
                    <span>Applications reviewed within 3-5 business days</span>
                  </div>
                </div>
                <div className="pw-point">
                  <div className="pw-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <div className="pw-point-text">
                    <strong>Confidential</strong>
                    <span>Your details are treated with full discretion</span>
                  </div>
                </div>
                <div className="pw-point">
                  <div className="pw-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className="pw-point-text">
                    <strong>No Obligation</strong>
                    <span>Applying does not commit you to anything</span>
                  </div>
                </div>
              </div>

              <div className="pw-email-card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:partners@ynmsafety.com">partners@ynmsafety.com</a>
              </div>
            </div>

            <div className="pw-apply-form-box">
              {submitted ? (
                <div className="pw-success">
                  <div className="pw-success-check">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3>Application Received</h3>
                  <p>Thank you for your interest. Our team will review your application and reach out soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="pw-form">
                  {error && (
                    <div style={{ padding: "12px 16px", marginBottom: "20px", backgroundColor: "#fee", border: "1px solid #fcc", borderRadius: "8px", color: "#c33", fontSize: "14px" }}>
                      {error}
                    </div>
                  )}
                  <div className="pw-form-header">
                    <h3>Partnership Application</h3>
                    <p>Fill in your details to express interest</p>
                  </div>
                  <div className="pw-form-grid">
                    <div className="pw-field">
                      <label>Full Name <span>*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={(e) => { handleChange(e); if (fieldErrors.name) setFieldErrors((p) => ({ ...p, name: "" })); }} placeholder="Your full name" className={fieldErrors.name ? "ynm-input-error" : ""} />
                      {fieldErrors.name && <span className="ynm-field-error">{fieldErrors.name}</span>}
                    </div>
                    <div className="pw-field">
                      <label>Company / Firm</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="If applicable" />
                    </div>
                  </div>
                  <div className="pw-form-grid">
                    <div className="pw-field">
                      <label>Email <span>*</span></label>
                      <input type="email" name="email" value={formData.email} onChange={(e) => { handleChange(e); if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: "" })); }} placeholder="Business email" className={fieldErrors.email ? "ynm-input-error" : ""} />
                      {fieldErrors.email && <span className="ynm-field-error">{fieldErrors.email}</span>}
                    </div>
                    <div className="pw-field">
                      <label>Phone <span>*</span></label>
                      <input type="tel" name="phone" value={formData.phone} onChange={(e) => { handleChange(e); if (fieldErrors.phone) setFieldErrors((p) => ({ ...p, phone: "" })); }} placeholder="+91 XXXXX XXXXX" className={fieldErrors.phone ? "ynm-input-error" : ""} />
                      {fieldErrors.phone && <span className="ynm-field-error">{fieldErrors.phone}</span>}
                    </div>
                  </div>
                  <div className="pw-form-grid">
                    <div className="pw-field">
                      <label>Partner Type <span>*</span></label>
                      <select name="partnerType" value={formData.partnerType} onChange={(e) => { handleChange(e); if (fieldErrors.partnerType) setFieldErrors((p) => ({ ...p, partnerType: "" })); }} className={fieldErrors.partnerType ? "ynm-input-error" : ""}>
                        <option value="">Select a type</option>
                        <option value="Authorized Distributor">Authorized Distributor</option>
                        <option value="Referral Agent">Referral Agent</option>
                        <option value="Application Partner">Application Partner</option>
                        <option value="Commission Agent">Commission Agent</option>
                      </select>
                      {fieldErrors.partnerType && <span className="ynm-field-error">{fieldErrors.partnerType}</span>}
                    </div>
                    <div className="pw-field">
                      <label>Region / City</label>
                      <input type="text" name="region" value={formData.region} onChange={handleChange} placeholder="Your operating region" />
                    </div>
                  </div>
                  <div className="pw-field">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your experience and interest..." />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="pw-submit">
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
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
        .pw-page { min-height: 100vh; background: #FDFBF7; }

        /* Hero */
        .pw-hero {
          position: relative;
          min-height: auto;
          display: flex;
          align-items: center;
          padding: 140px 5% 80px;
          overflow: hidden;
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
        }
        .pw-hero-pattern {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(201,162,77,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,162,77,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .pw-hero-gradient {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(201,162,77,0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(154,27,46,0.2) 0%, transparent 50%);
          pointer-events: none;
        }
        .pw-hero-content {
          position: relative; z-index: 2;
          max-width: 1300px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1.2fr 1fr;
          gap: 60px; align-items: center;
        }
        .pw-hero-badge {
          display: inline-flex; align-items: center; gap: 12px; margin-bottom: 24px;
        }
        .pw-badge-dot { width: 8px; height: 8px; background: #C9A24D; border-radius: 2px; }
        .pw-hero-badge span {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.25em; color: #C9A24D;
        }
        .pw-hero h1 {
          font-size: clamp(36px, 5vw, 56px); font-weight: 800; color: #fff;
          line-height: 1.15; margin: 0 0 20px; letter-spacing: -0.02em;
        }
        .pw-hero h1 span { color: #C9A24D; }
        .pw-hero-text p {
          font-size: 16px; color: rgba(255,255,255,0.7); line-height: 1.7;
          margin: 0 0 32px; max-width: 480px;
        }
        .pw-hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .pw-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; font-size: 14px; font-weight: 700;
          color: #74060D; background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 4px; text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 20px rgba(201,162,77,0.3);
        }
        .pw-btn-primary:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(201,162,77,0.5);
        }
        .pw-btn-ghost {
          display: inline-flex; align-items: center;
          padding: 14px 28px; font-size: 14px; font-weight: 600;
          color: rgba(255,255,255,0.9); background: transparent;
          border: 1px solid rgba(201,162,77,0.4); border-radius: 4px;
          text-decoration: none; transition: all 0.3s ease;
        }
        .pw-btn-ghost:hover { border-color: #C9A24D; color: #C9A24D; background: rgba(201,162,77,0.1); }

        /* Orbital Visual */
        .pw-hero-visual { display: flex; justify-content: center; align-items: center; }
        .pw-orbit-wrapper {
          position: relative; width: 400px; height: 400px;
          display: flex; align-items: center; justify-content: center;
        }

        /* Orbit track rings */
        .pw-orbit-track {
          position: absolute; width: 296px; height: 296px; border-radius: 50%;
          border: 1px solid rgba(201,162,77,0.2);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
        }
        .pw-orbit-track-2 {
          position: absolute; width: 220px; height: 220px; border-radius: 50%;
          border: 1px dashed rgba(201,162,77,0.12);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          animation: pw-spin-slow 30s linear infinite;
        }
        .pw-orbit-track-3 {
          position: absolute; width: 360px; height: 360px; border-radius: 50%;
          border: 1px dotted rgba(201,162,77,0.08);
          top: 50%; left: 50%; transform: translate(-50%,-50%);
          animation: pw-spin-slow 50s linear infinite reverse;
        }
        @keyframes pw-spin-slow { to { transform: translate(-50%,-50%) rotate(360deg); } }

        /* Central core */
        .pw-core {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          z-index: 10; width: 72px; height: 72px;
        }
        .pw-core-inner {
          position: relative; width: 100%; height: 100%; border-radius: 50%;
          background: linear-gradient(135deg, #5A0409, #3D0206);
          border: 2px solid #C9A24D;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          box-shadow:
            0 0 40px rgba(201,162,77,0.35),
            0 0 80px rgba(116,6,13,0.25),
            inset 0 0 20px rgba(201,162,77,0.08);
          z-index: 3;
        }
        .pw-core-inner span { font-size: 20px; font-weight: 900; color: #C9A24D; line-height: 1; }
        .pw-core-inner small {
          font-size: 7px; font-weight: 700; color: rgba(255,255,255,0.7);
          text-transform: uppercase; letter-spacing: 0.12em; margin-top: 2px;
        }
        .pw-core-ping {
          position: absolute; inset: -8px; border-radius: 50%;
          border: 2px solid rgba(201,162,77,0.4);
          animation: pw-ping 2s cubic-bezier(0,0,0.2,1) infinite;
        }
        .pw-core-ping-2 { animation-delay: 0.6s; }
        @keyframes pw-ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        /* SVG overlay for lines */
        .pw-orbit-svg {
          position: absolute; inset: 0; width: 100%; height: 100%;
          pointer-events: none; z-index: 5;
        }

        /* Orbital nodes */
        .pw-orb-node {
          position: absolute; top: 50%; left: 50%;
          margin-top: -24px; margin-left: -24px;
          cursor: pointer; transition: transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease;
          z-index: 50;
        }
        .pw-orb-glow {
          position: absolute; top: 50%; left: 50%;
          width: 60px; height: 60px;
          transform: translate(-50%,-50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,162,77,0.15) 0%, transparent 70%);
          transition: all 0.5s ease;
          pointer-events: none;
        }
        .pw-orb-glow-active {
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(201,162,77,0.3) 0%, rgba(201,162,77,0.05) 50%, transparent 70%);
          animation: pw-glow-pulse 2s ease-in-out infinite;
        }
        @keyframes pw-glow-pulse {
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.8; }
          50% { transform: translate(-50%,-50%) scale(1.3); opacity: 1; }
        }

        .pw-orb-circle {
          position: relative; width: 48px; height: 48px; border-radius: 50%;
          background: rgba(26,22,20,0.9);
          border: 2px solid rgba(201,162,77,0.4);
          display: flex; align-items: center; justify-content: center;
          color: #C9A24D; backdrop-filter: blur(8px);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        .pw-orb-node:hover .pw-orb-circle {
          border-color: #C9A24D;
          box-shadow: 0 4px 30px rgba(201,162,77,0.3);
        }
        .pw-orb-circle-active {
          background: #C9A24D; color: #3D0206;
          border-color: #E6D3A3;
          box-shadow: 0 0 30px rgba(201,162,77,0.5), 0 4px 20px rgba(0,0,0,0.3);
        }

        .pw-orb-label {
          position: absolute; top: 54px; left: 50%; transform: translateX(-50%);
          white-space: nowrap;
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(255,255,255,0.5);
          transition: all 0.4s ease;
          pointer-events: none;
        }
        .pw-orb-label-active { color: #C9A24D; transform: translateX(-50%) scale(1.1); }

        /* Expanded card */
        .pw-orb-card {
          position: absolute; top: 80px; left: 50%; transform: translateX(-50%);
          width: 240px;
          background: rgba(15,13,12,0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(201,162,77,0.3);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(201,162,77,0.08);
          animation: pw-card-in 0.4s cubic-bezier(0.16,1,0.3,1);
          z-index: 300;
        }
        @keyframes pw-card-in {
          from { opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
        .pw-orb-card-stem {
          position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
          width: 1px; height: 10px; background: rgba(201,162,77,0.4);
        }
        .pw-orb-card-badge {
          font-size: 9px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.15em; color: #C9A24D;
          padding: 4px 10px; border-radius: 20px;
          background: rgba(201,162,77,0.12); border: 1px solid rgba(201,162,77,0.2);
          display: inline-block; margin-bottom: 12px;
        }
        .pw-orb-card h4 {
          font-size: 16px; font-weight: 800; color: #fff; margin: 0 0 8px;
        }
        .pw-orb-card p {
          font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.6; margin: 0 0 16px;
        }
        .pw-orb-card-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 700; color: #C9A24D;
          text-decoration: none; padding: 8px 14px;
          border: 1px solid rgba(201,162,77,0.3); border-radius: 6px;
          transition: all 0.3s ease; background: rgba(201,162,77,0.08);
        }
        .pw-orb-card-cta:hover {
          background: rgba(201,162,77,0.2); border-color: #C9A24D;
        }

        /* Floating particles */
        .pw-particle-field { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
        .pw-fp {
          position: absolute; width: 3px; height: 3px; border-radius: 50%;
          background: #C9A24D; opacity: 0;
          animation: pw-twinkle 4s ease-in-out infinite;
        }
        @keyframes pw-twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        /* Stats Strip */
        .pw-stats {
          display: grid; grid-template-columns: repeat(4, 1fr);
          background: #1A1614; border-top: 1px solid rgba(201,162,77,0.3);
        }
        .pw-stat-item {
          padding: 36px 24px; text-align: center;
          border-right: 1px solid rgba(201,162,77,0.1);
          transition: background 0.3s ease;
        }
        .pw-stat-item:last-child { border-right: none; }
        .pw-stat-item:hover { background: rgba(201,162,77,0.05); }
        .pw-stat-value { font-size: 36px; font-weight: 900; color: #C9A24D; line-height: 1; }
        .pw-stat-label {
          font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.9);
          text-transform: uppercase; letter-spacing: 0.1em; margin-top: 4px;
        }
        .pw-stat-desc {
          font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 8px; line-height: 1.5;
        }

        /* Section Styles */
        .pw-section-label {
          display: inline-block; font-size: 11px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.25em; color: #74060D; margin-bottom: 16px;
        }
        .pw-section-label.center { display: block; text-align: center; }
        .pw-section-label.light { color: #C9A24D; }
        .pw-section-header { text-align: center; margin-bottom: 60px; }
        .pw-section-header h2 {
          font-size: clamp(32px, 4vw, 48px); font-weight: 800;
          color: #1A1614; margin: 0 0 12px; letter-spacing: -0.02em;
        }
        .pw-section-header.light h2 { color: #fff; }
        .pw-section-header p { font-size: 16px; color: #666; margin: 0; }
        .pw-section-header.light p { color: rgba(255,255,255,0.6); }

        /* Value Proposition */
        .pw-value { padding: 120px 5%; background: #fff; }
        .pw-value-container {
          max-width: 1300px; margin: 0 auto;
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: center;
        }
        .pw-value-content h2 {
          font-size: clamp(32px, 4vw, 48px); font-weight: 800;
          color: #1A1614; margin: 0 0 20px; letter-spacing: -0.02em;
        }
        .pw-value-divider { width: 60px; height: 3px; background: linear-gradient(90deg, #C9A24D, #E6D3A3); margin-bottom: 28px; }
        .pw-value-content p { font-size: 16px; line-height: 1.9; color: #555; margin: 0 0 20px; }
        .pw-value-card {
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          border-radius: 8px; padding: 3px;
        }
        .pw-value-card-inner {
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          border-radius: 6px; padding: 50px 40px; position: relative;
          border: 1px solid rgba(201,162,77,0.3);
        }
        .pw-value-quote { font-size: 80px; font-weight: 800; color: rgba(201,162,77,0.2); line-height: 0.5; margin-bottom: 20px; }
        .pw-value-card blockquote {
          font-size: 22px; font-weight: 600; color: #fff; line-height: 1.5; margin: 0; font-style: italic;
        }
        .pw-value-footer { margin-top: 32px; display: flex; align-items: center; gap: 16px; }
        .pw-value-line { width: 40px; height: 2px; background: #C9A24D; }
        .pw-value-footer span {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: #C9A24D;
        }

        /* Models */
        .pw-models { padding: 120px 5%; background: linear-gradient(180deg, #F8F5F0 0%, #FDFBF7 100%); }
        .pw-models-container { max-width: 1300px; margin: 0 auto; }
        .pw-models-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .pw-model-card {
          background: #fff; border-radius: 8px; padding: 36px 28px;
          position: relative; border: 1px solid #E8E4DC;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1); overflow: hidden;
        }
        .pw-model-card:hover {
          border-color: #C9A24D; transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(116,6,13,0.12);
        }
        .pw-model-icon {
          width: 56px; height: 56px;
          background: linear-gradient(135deg, rgba(201,162,77,0.1), rgba(201,162,77,0.05));
          border: 1px solid rgba(201,162,77,0.3); border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #74060D; margin-bottom: 20px;
        }
        .pw-model-card h3 { font-size: 18px; font-weight: 700; color: #74060D; margin: 0 0 12px; }
        .pw-model-card p { font-size: 14px; color: #666; line-height: 1.7; margin: 0 0 20px; }
        .pw-model-perks { display: flex; flex-direction: column; gap: 10px; }
        .pw-model-perks span {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; font-weight: 600; color: #444;
        }
        .pw-model-perks svg { color: #C9A24D; flex-shrink: 0; }
        .pw-model-border {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease;
        }
        .pw-model-card:hover .pw-model-border { transform: scaleX(1); }

        /* Process */
        .pw-process {
          padding: 120px 5%;
          background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
        }
        .pw-process-container { max-width: 1000px; margin: 0 auto; }
        .pw-process-track {
          position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;
        }
        .pw-process-line {
          position: absolute; top: 35px; left: 10%; right: 10%; height: 2px;
          background: linear-gradient(90deg, rgba(201,162,77,0.6), rgba(255,255,255,0.2), rgba(201,162,77,0.6));
        }
        .pw-process-step { text-align: center; position: relative; }
        .pw-step-marker {
          width: 70px; height: 70px;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border: 3px solid #C9A24D; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 24px; position: relative; z-index: 2;
        }
        .pw-step-marker span { font-size: 18px; font-weight: 800; color: #C9A24D; }
        .pw-step-content h4 { font-size: 16px; font-weight: 700; color: #fff; margin: 0 0 8px; }
        .pw-step-content p { font-size: 14px; color: rgba(255,255,255,0.6); margin: 0; line-height: 1.5; }

        /* FAQ */
        .pw-faq { padding: 120px 5%; background: #fff; }
        .pw-faq-container { max-width: 800px; margin: 0 auto; }
        .pw-faq-list { display: flex; flex-direction: column; gap: 12px; }
        .pw-faq-item {
          background: #FDFBF7; border: 1px solid #E8E4DC; border-radius: 8px;
          overflow: hidden; cursor: pointer; transition: all 0.3s ease;
        }
        .pw-faq-item:hover { border-color: rgba(201,162,77,0.5); }
        .pw-faq-item.active { border-color: #C9A24D; background: #fff; }
        .pw-faq-question { display: flex; align-items: center; gap: 20px; padding: 24px 28px; }
        .pw-faq-num { font-size: 12px; font-weight: 700; color: #C9A24D; opacity: 0.6; }
        .pw-faq-text { flex: 1; font-size: 15px; font-weight: 600; color: #1A1614; }
        .pw-faq-toggle {
          width: 32px; height: 32px; background: rgba(201,162,77,0.15);
          border-radius: 6px; display: flex; align-items: center; justify-content: center;
          color: #74060D; flex-shrink: 0;
        }
        .pw-faq-answer { max-height: 0; overflow: hidden; transition: all 0.3s ease; }
        .pw-faq-item.active .pw-faq-answer { max-height: 200px; }
        .pw-faq-answer p { padding: 0 28px 24px 60px; font-size: 14px; color: #666; line-height: 1.7; margin: 0; }

        /* Apply Section */
        .pw-apply { padding: 120px 5%; background: linear-gradient(180deg, #1A1614 0%, #0F0D0C 100%); overflow: hidden; }
        .pw-apply-container {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.1fr; gap: 80px; align-items: start;
        }
        .pw-apply-info h2 {
          font-size: clamp(32px, 4vw, 44px); font-weight: 800;
          color: #fff; margin: 0 0 20px; letter-spacing: -0.02em;
        }
        .pw-apply-info > p { font-size: 16px; color: rgba(255,255,255,0.65); line-height: 1.8; margin: 0 0 40px; }
        .pw-apply-points { display: flex; flex-direction: column; gap: 24px; margin-bottom: 40px; }
        .pw-point { display: flex; gap: 18px; align-items: flex-start; }
        .pw-point-icon {
          width: 44px; height: 44px;
          background: rgba(201,162,77,0.1); border: 1px solid rgba(201,162,77,0.25);
          border-radius: 8px; display: flex; align-items: center; justify-content: center;
          color: #C9A24D; flex-shrink: 0;
        }
        .pw-point-text strong { display: block; font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .pw-point-text span { font-size: 13px; color: rgba(255,255,255,0.5); }
        .pw-email-card {
          display: flex; align-items: center; gap: 16px; padding: 24px;
          background: rgba(201,162,77,0.08); border: 1px solid rgba(201,162,77,0.2);
          border-radius: 8px; overflow: hidden;
        }
        .pw-email-card svg { color: #C9A24D; }
        .pw-email-card a {
          font-size: 18px; font-weight: 700; color: #C9A24D;
          text-decoration: none; transition: color 0.3s ease;
        }
        .pw-email-card a:hover { color: #E6D3A3; }

        /* Form */
        .pw-apply-form-box {
          background: #fff; border-radius: 12px; padding: 40px;
          border: 1px solid rgba(201,162,77,0.2);
          box-shadow: 0 32px 64px rgba(0,0,0,0.3); max-width: 100%; overflow: hidden;
        }
        .pw-form-header { margin-bottom: 28px; padding-bottom: 20px; border-bottom: 1px solid #E8E4DC; }
        .pw-form-header h3 { font-size: 22px; font-weight: 800; color: #1A1614; margin: 0 0 6px; }
        .pw-form-header p { font-size: 14px; color: #666; margin: 0; }
        .pw-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .pw-field { margin-bottom: 16px; }
        .pw-field label {
          display: block; font-size: 12px; font-weight: 700; color: #1A1614;
          text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;
        }
        .pw-field label span { color: #74060D; }
        .pw-field input,
        .pw-field select,
        .pw-field textarea {
          width: 100%; padding: 14px 16px; font-size: 14px;
          border: 1px solid #E0DCD4; border-radius: 6px;
          background: #FDFBF7; color: #1A1614; transition: all 0.3s ease;
          font-family: inherit; box-sizing: border-box;
        }
        .pw-field input::placeholder,
        .pw-field textarea::placeholder { color: #999; }
        .pw-field input:focus,
        .pw-field select:focus,
        .pw-field textarea:focus {
          outline: none; border-color: #C9A24D; background: #fff;
          box-shadow: 0 0 0 3px rgba(201,162,77,0.1);
        }
        .pw-submit {
          width: 100%; padding: 18px 28px; font-size: 14px; font-weight: 700;
          color: #fff; background: linear-gradient(135deg, #74060D 0%, #5A0409 100%);
          border: none; border-radius: 6px; cursor: pointer; transition: all 0.3s ease;
          display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 8px;
        }
        .pw-submit:hover:not(:disabled) {
          transform: translateY(-2px); box-shadow: 0 12px 24px rgba(116,6,13,0.3);
        }
        .pw-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .pw-success { text-align: center; padding: 48px 20px; }
        .pw-success-check {
          width: 72px; height: 72px;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          margin: 0 auto 24px; color: #74060D;
        }
        .pw-success h3 { font-size: 26px; font-weight: 800; color: #1A1614; margin: 0 0 10px; }
        .pw-success p { font-size: 15px; color: #666; margin: 0; }

        /* Responsive */
        @media (max-width: 1100px) {
          .pw-hero-content { grid-template-columns: 1fr; gap: 20px; text-align: center; }
          .pw-hero-text { display: flex; flex-direction: column; align-items: center; }
          .pw-hero-text p { max-width: 600px; }
          .pw-orbit-wrapper { transform: scale(0.85); }
          .pw-models-grid { grid-template-columns: repeat(2, 1fr); }
          .pw-value-container { grid-template-columns: 1fr; gap: 50px; }
          .pw-apply-container { grid-template-columns: 1fr; gap: 50px; }
        }

        @media (max-width: 900px) {
          .pw-stats { grid-template-columns: repeat(2, 1fr); }
          .pw-stat-item { border-bottom: 1px solid rgba(201,162,77,0.1); }
          .pw-process-track { grid-template-columns: repeat(2, 1fr); }
          .pw-process-line { display: none; }
        }

        @media (max-width: 640px) {
          .pw-hero { padding: 120px 16px 60px; }
          .pw-orbit-wrapper { width: 400px; height: 400px; transform: scale(0.78); transform-origin: center; }
          .pw-orbit-track { width: 240px; height: 240px; }
          .pw-orbit-track-2 { width: 180px; height: 180px; }
          .pw-orbit-track-3 { width: 290px; height: 290px; }
          .pw-core { width: 60px; height: 60px; }
          .pw-core-inner span { font-size: 16px; }
          .pw-orb-circle { width: 40px; height: 40px; }
          .pw-orb-circle svg { width: 16px; height: 16px; }
          .pw-orb-label { font-size: 9px; top: 46px; }
          .pw-orb-card { width: 210px; padding: 16px; top: 68px; }
          .pw-orb-card h4 { font-size: 14px; }
          .pw-orb-card p { font-size: 12px; }
          .pw-stats { grid-template-columns: 1fr 1fr; }
          .pw-stat-value { font-size: 28px; }
          .pw-value { padding: 80px 16px; }
          .pw-value-card-inner { padding: 36px 24px; }
          .pw-value-card blockquote { font-size: 18px; }
          .pw-models { padding: 80px 16px; }
          .pw-models-grid { grid-template-columns: 1fr; }
          .pw-process { padding: 80px 16px; }
          .pw-process-track { grid-template-columns: 1fr; }
          .pw-faq { padding: 80px 16px; }
          .pw-faq-question { padding: 18px 16px; gap: 12px; }
          .pw-faq-answer p { padding: 0 16px 20px 40px; }
          .pw-apply { padding: 80px 16px; }
          .pw-apply-form-box { padding: 24px 18px; }
          .pw-form-grid { grid-template-columns: 1fr; }
          .pw-email-card { padding: 16px; }
          .pw-email-card a { font-size: 15px; word-break: break-all; }
        }
      `}</style>
    </>
  );
}
