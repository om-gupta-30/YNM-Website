import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PhoneInput = dynamic(() => import("@/components/PhoneInput"), { ssr: false });

// Company details
const companyInfo = {
  name: "YNM Safety Pan Global Trade Pvt Ltd",
  tagline: "Manufacturing & Export Excellence Since 2013",
  email: "hr@ynmsafety.com",
  phone: "+91 96765 75770 / +91 88850 02183",
};

// Available positions
const openPositions = [
  {
    id: 1,
    title: "Production Manager",
    department: "Manufacturing",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Lead our production team and ensure quality manufacturing processes.",
  },
  {
    id: 2,
    title: "Quality Control Engineer",
    department: "Quality Assurance",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Maintain ISO standards and ensure product quality excellence.",
  },
  {
    id: 3,
    title: "Export Coordinator",
    department: "International Trade",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Manage export documentation and international logistics.",
  },
  {
    id: 4,
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Build client relationships and drive business growth.",
  },
  {
    id: 5,
    title: "Warehouse Supervisor",
    department: "Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Oversee warehouse operations, inventory management, and logistics coordination.",
  },
  {
    id: 6,
    title: "Accounts Executive",
    department: "Finance",
    location: "Hyderabad, India",
    type: "Full-time",
    description: "Handle financial records, invoicing, and support accounting operations.",
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (file) {
        // Clear previous errors
        setFileError(null);
        
        // Validate file type - must be PDF
        const isPDF = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
        
        if (!isPDF) {
          setFileError('Invalid file type. Only PDF files are allowed. Please select a PDF file.');
          e.target.value = '';
          setFormData({ ...formData, resume: null });
          return;
        }
        
        // Additional validation: Check if file extension is .pdf (double-check)
        const fileName = file.name.toLowerCase();
        if (!fileName.endsWith('.pdf')) {
          setFileError('Invalid file extension. Only .pdf files are allowed.');
          e.target.value = '';
          setFormData({ ...formData, resume: null });
          return;
        }
        
        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
          setFileError(`File size exceeds 5MB limit (${(file.size / 1024 / 1024).toFixed(2)} MB). Please upload a smaller PDF file.`);
          e.target.value = '';
          setFormData({ ...formData, resume: null });
          return;
        }
        
        // Check minimum file size (PDFs should be at least a few KB)
        if (file.size < 1024) {
          setFileError('File appears to be too small to be a valid PDF. Please check your file.');
          e.target.value = '';
          setFormData({ ...formData, resume: null });
          return;
        }
        
        // File is valid - store it
        setFileError(null);
        setFormData({ ...formData, resume: file });
      } else {
        // No file selected - clear resume
        setFormData({ ...formData, resume: null });
        setFileError(null);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const errs = {};

    if (!formData.name.trim()) errs.name = "Full name is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) errs.email = "Enter a valid email (must contain @).";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) errs.phone = "Phone number is required.";
    else if (phoneDigits.length < 10) errs.phone = "Enter a valid 10-digit phone number.";

    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) { setIsSubmitting(false); return; }

    // Validate resume file
    if (!formData.resume) {
      setError('Please upload your resume. Only PDF files are accepted.');
      setIsSubmitting(false);
      return;
    }

    // Double-check file type before submission
    const fileName = formData.resume.name.toLowerCase();
    const isValidPDF = formData.resume.type === 'application/pdf' && fileName.endsWith('.pdf');
    
    if (!isValidPDF) {
      setError('Invalid file type. Only PDF files are allowed. Please upload a PDF resume.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('coverLetter', formData.coverLetter);
      formDataToSend.append('resume', formData.resume);

      const response = await fetch('/api/careers/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }

      setSubmitted(true);
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        position: "", 
        experience: "", 
        resume: null, 
        coverLetter: "",
      });
      setFileError(null);
      
      setTimeout(() => {
        setSubmitted(false);
      }, 10000);

    } catch (err) {
      setError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Careers | YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Join YNM Safety. Explore career opportunities in manufacturing, quality control, export, and sales. Build your career with us." />
        <link rel="canonical" href="https://ynmsafety.com/careers" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ynmsafety.com/careers" />
        <meta property="og:title" content="Careers | YNM Safety Pan Global Trade Pvt Ltd" />
        <meta property="og:description" content="Join YNM Safety. Explore career opportunities in manufacturing, quality control, export, and sales. Build your career with us." />
        <meta property="og:image" content="https://ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | YNM Safety Pan Global Trade Pvt Ltd" />
        <meta name="twitter:description" content="Join YNM Safety. Explore career opportunities in manufacturing, quality control, export, and sales." />
        <meta name="twitter:image" content="https://ynmsafety.com/assets/logo-navbar.jpg" />
        
        {/* Schema Markup - JobPosting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Careers at YNM Safety",
              "description": "Explore career opportunities at YNM Safety Pan Global Trade Pvt Ltd",
              "url": "https://ynmsafety.com/careers",
              "mainEntity": {
                "@type": "ItemList",
                "name": "Open Positions",
                "itemListElement": [
                  {
                    "@type": "JobPosting",
                    "title": "Production Manager",
                    "employmentType": "FULL_TIME",
                    "hiringOrganization": {
                      "@type": "Organization",
                      "name": "YNM Safety Pan Global Trade Pvt Ltd"
                    },
                    "jobLocation": {
                      "@type": "Place",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Hyderabad",
                        "addressRegion": "Telangana",
                        "addressCountry": "IN"
                      }
                    }
                  }
                ]
              }
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
                  "item": "https://ynmsafety.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Careers",
                  "item": "https://ynmsafety.com/careers"
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="careers-page">
        {/* Hero Section */}
        <section className="careers-hero">
          <div className="careers-hero-bg" />
          <div className="careers-hero-overlay" />
          <div className="careers-hero-content">
            <span className="careers-tag">JOIN OUR TEAM</span>
            <h1>Careers at YNM</h1>
            <p>Be part of a growing team that&apos;s manufacturing excellence and exporting quality products worldwide</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="careers-main">
          <div className="careers-container">
            {/* Open Positions */}
            <div className="positions-section">
              <div className="section-header">
                <h2>Open Positions</h2>
                <p>Explore current job opportunities at YNM Safety</p>
              </div>

              <div className="coming-soon-container">
                <div className="coming-soon-icon">🚀</div>
                <h3>Coming Soon</h3>
                <p>We&apos;re currently reviewing our hiring needs. Check back soon for exciting opportunities!</p>
              </div>
            </div>

            {/* Application Form */}
            <div id="application-form" className="application-section">
              <div className="section-header">
                <h2>Submit Your Application</h2>
                <p>Fill out the form below to apply for a position or send us your resume for future opportunities</p>
              </div>

              {submitted ? (
                <div className="application-success">
                  <div className="success-icon">✓</div>
                  <h3>Application Submitted!</h3>
                  <p>Thank you for your interest. We&apos;ll review your application and get back to you soon.</p>
                  <button onClick={() => setSubmitted(false)} className="careers-btn">
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="application-form">
                  {error && (
                    <div className="application-error">
                      <span className="error-icon">⚠️</span>
                      <p>{error}</p>
                    </div>
                  )}
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span className="ynm-required">*</span></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={(e) => { handleChange(e); if (fieldErrors.name) setFieldErrors((p) => ({ ...p, name: "" })); }} required placeholder="John Doe" className={fieldErrors.name ? "ynm-input-error" : ""} />
                      {fieldErrors.name && <span className="ynm-field-error">{fieldErrors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="ynm-required">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={(e) => { handleChange(e); if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: "" })); }} required placeholder="john@example.com" className={fieldErrors.email ? "ynm-input-error" : ""} />
                      {fieldErrors.email && <span className="ynm-field-error">{fieldErrors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number <span className="ynm-required">*</span></label>
                      <PhoneInput id="phone" value={formData.phone} onChange={(val) => { setFormData((prev) => ({ ...prev, phone: val })); if (fieldErrors.phone) setFieldErrors((p) => ({ ...p, phone: "" })); }} required className={fieldErrors.phone ? "ynm-input-error" : ""} />
                      {fieldErrors.phone && <span className="ynm-field-error">{fieldErrors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="position">Position Applied For *</label>
                      <select
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a position</option>
                        <option value="General Application">General Application</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">Years of Experience *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="resume">Upload Resume/CV (PDF Only) *</label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleChange}
                      accept="application/pdf,.pdf"
                      required
                    />
                    <small>Only PDF files are allowed. Maximum file size: 5MB. Password-protected PDFs are not accepted.</small>
                    {fileError && (
                      <span className="file-error">⚠️ {fileError}</span>
                    )}
                    {formData.resume && !fileError && (
                      <span className="file-success">✓ {formData.resume.name} ({(formData.resume.size / 1024).toFixed(2)} KB)</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="coverLetter">Cover Letter</label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us why you'd be a great fit for this role..."
                    />
                  </div>

                  <button type="submit" className="careers-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="btn-spinner" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Why Join Us */}
            <div className="why-join-section">
              <h2>Why Join YNM Safety?</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">🏭</div>
                  <h3>Growth Opportunities</h3>
                  <p>Advance your career in a fast-growing manufacturing company</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🌍</div>
                  <h3>Global Exposure</h3>
                  <p>Work with international clients and expand your horizons</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">✓</div>
                  <h3>Quality Focus</h3>
                  <p>Be part of a team committed to excellence and ISO standards</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">🤝</div>
                  <h3>Team Culture</h3>
                  <p>Join a collaborative and supportive work environment</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .careers-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
        }

        /* Hero Section */
        .careers-hero {
          position: relative;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 100px;
          padding-bottom: 50px;
        }

        .careers-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 50%, #5a0509 100%);
        }

        .careers-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(201, 162, 77, 0.2), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(154, 27, 46, 0.15), transparent 50%);
        }

        .careers-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
        }

        .careers-tag {
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

        .careers-hero-content h1 {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .careers-hero-content p {
          font-size: 16px;
          color: #E6D3A3;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 500;
        }

        /* Main Content */
        .careers-main {
          padding: 80px 20px;
        }

        .careers-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-header h2 {
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 800;
          color: #74060D;
          margin: 0 0 12px;
        }

        .section-header p {
          font-size: 16px;
          color: #9A1B2E;
          margin: 0;
        }

        /* Coming Soon */
        .coming-soon-container {
          background: white;
          border-radius: 24px;
          padding: 80px 40px;
          text-align: center;
          border: 2px solid #E6D3A3;
          box-shadow: 0 10px 40px rgba(116, 6, 13, 0.1);
          margin-bottom: 80px;
        }

        .coming-soon-icon {
          font-size: 64px;
          margin-bottom: 24px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .coming-soon-container h3 {
          font-size: 32px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 16px;
        }

        .coming-soon-container p {
          font-size: 16px;
          color: #9A1B2E;
          margin: 0;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Positions Grid */
        .positions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }

        .position-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          border: 2px solid #E6D3A3;
          box-shadow: 0 10px 40px rgba(116, 6, 13, 0.1);
          transition: all 0.3s ease;
        }

        .position-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.2);
          border-color: #C9A24D;
        }

        .position-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 16px;
        }

        .position-header h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0;
        }

        .position-badge {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          padding: 4px 12px;
          background: #C9A24D;
          color: #74060D;
          border-radius: 12px;
        }

        .position-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .position-dept {
          font-size: 13px;
          color: #9A1B2E;
          font-weight: 600;
        }

        .position-location {
          font-size: 13px;
          color: #9A1B2E;
        }

        .position-desc {
          font-size: 14px;
          color: #5a4a4a;
          line-height: 1.6;
          margin: 0;
        }

        /* Application Form */
        .application-section {
          background: white;
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.1);
          border: 2px solid #E6D3A3;
          margin-bottom: 80px;
        }

        .application-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #74060D;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 18px;
          font-size: 15px;
          border: 2px solid #E6D3A3;
          border-radius: 12px;
          background: #F7F3EA;
          color: #74060D;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input[type="file"] {
          padding: 10px;
          cursor: pointer;
        }

        .form-group small {
          font-size: 12px;
          color: #9A1B2E;
          margin-top: 4px;
        }

        .file-error {
          display: block;
          font-size: 12px;
          color: #dc2626;
          margin-top: 4px;
          font-weight: 600;
        }

        .file-success {
          display: block;
          font-size: 12px;
          color: #16a34a;
          margin-top: 4px;
          font-weight: 600;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #C9A24D;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(201, 162, 77, 0.15);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .careers-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 32px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #F7F3EA;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          border: 2px solid #C9A24D;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .careers-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(116, 6, 13, 0.3);
        }

        .careers-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top-color: #F7F3EA;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .application-success {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #c9a227, #e8d48a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          color: #0d1321;
          margin: 0 auto 24px;
        }

        .application-success h3 {
          font-size: 24px;
          color: #74060D;
          margin: 0 0 12px;
        }

        .application-success p {
          color: #9A1B2E;
          margin: 0 0 24px;
        }

        .application-error {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          background: rgba(220, 38, 38, 0.1);
          border: 2px solid rgba(220, 38, 38, 0.3);
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .error-icon {
          font-size: 24px;
          flex-shrink: 0;
        }

        .application-error p {
          margin: 0;
          color: #dc2626;
          font-size: 14px;
        }

        /* Why Join Section */
        .why-join-section {
          margin-top: 80px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
          gap: 30px;
        }

        .benefit-card {
          background: white;
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          border: 2px solid #E6D3A3;
          box-shadow: 0 10px 40px rgba(116, 6, 13, 0.1);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          border-color: #C9A24D;
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.2);
        }

        .benefit-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .benefit-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .benefit-card p {
          font-size: 14px;
          color: #5a4a4a;
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .careers-hero {
            min-height: auto;
            padding-top: 80px;
            padding-bottom: 40px;
          }

          .careers-hero-content h1 {
            font-size: clamp(26px, 6vw, 36px);
          }

          .careers-hero-content p {
            font-size: 14px;
          }

          .careers-main {
            padding: 40px 16px;
          }

          .application-section {
            padding: 32px 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .positions-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
