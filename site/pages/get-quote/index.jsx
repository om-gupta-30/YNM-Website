import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { trackFormStart, trackAdsConversion } from "@/lib/gtag";

const PhoneInput = dynamic(() => import("@/components/PhoneInput"), { ssr: false });
const PlacesAutocomplete = dynamic(() => import("@/components/PlacesAutocomplete"), { ssr: false });

const PRODUCT_OPTIONS = [
  { group: "Paints", items: [
    "Hot Thermoplastic Road Marking Paint",
    "Cold Plastic Paints",
    "Waterborne Airfield Marking Paints",
    "Oil Kerb Base Paint",
    "Water Kerb Base Paint",
    "Enamel Paint",
    "Red Oxide Paint",
    "Profile Marking Paint",
    "Bitumen VG 40",
    "Bitumen VG 30",
  ]},
  { group: "Crash Barriers & Safety", items: [
    "W Beam Crash Barrier",
    "Thrie Beam Crash Barrier",
    "Double W Beam Crash Barriers",
    "Roller Beam Crash Barriers",
    "Attenuator",
  ]},
  { group: "Signage", items: [
    "Retro Reflective Gantry Signage",
    "Cantilever Signage",
    "Mandatory Sign Board (Octagonal)",
    "Mandatory Sign Board (Circular)",
    "Cautionary Sign Boards",
    "Informatory Sign Board",
    "Place Identification Boards",
    "Advance Direction Boards",
    "Toll Boards & Facia",
    "Canopy",
  ]},
  { group: "Fabrication & Structures", items: [
    "Solar Panel Structures / Frames",
    "Railway Structures",
    "GI Dustbins",
    "E-Rickshaw",
    "Camera Poles",
    "Cantilever Structures",
    "Parking Signages",
    "Gantry Structures",
    "Slotted Angle Racks",
    "ITMS Structures",
    "High Mast",
    "Street Light Poles",
    "Solar Light Poles",
    "VMS Structures",
    "Sign Board Structures",
    "I-Girders",
    "Foot Over Bridges",
    "Noise Barriers",
    "Pedestrian Guardrails",
    "Bridge Bearings",
    "Open Web Bridge Girders",
    "Gabion Wire Mesh",
  ]},
  { group: "Other", items: [
    "Other / Custom Requirement",
  ]},
];

const URGENCY_OPTIONS = [
  "Immediate (within 1 week)",
  "Short-term (1-4 weeks)",
  "Medium-term (1-3 months)",
  "Long-term / Planning phase",
  "Not sure yet",
];

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    country: "",
    city: "",
    product: "",
    quantity: "",
    unit: "Kg",
    deliveryLocation: "",
    urgency: "",
    projectName: "",
    specifications: "",
    message: "",
  });
  const [countryCode, setCountryCode] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formStartFired = useRef(false);

  const handleFormFocus = () => {
    if (!formStartFired.current) {
      formStartFired.current = true;
      trackFormStart("get_quote");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleFileChange = (e) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (!file) { setPdfFile(null); return; }

    if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
      setFileError("Only PDF files are allowed.");
      setPdfFile(null);
      e.target.value = "";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size must be under 5 MB.");
      setPdfFile(null);
      e.target.value = "";
      return;
    }
    setPdfFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const errs = {};

    if (!formData.name.trim()) errs.name = "Full name is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) errs.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) errs.email = "Enter a valid email (must contain @).";

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) errs.phone = "Phone number is required.";
    else if (phoneDigits.length < 10) errs.phone = "Enter a valid 10-digit phone number.";

    if (!formData.product) errs.product = "Select a product.";

    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) {
      setError("Please fix the highlighted errors.");
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, val]) => fd.append(key, val));
      if (pdfFile) fd.append("specification", pdfFile);

      const res = await fetch("/api/quote/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      trackAdsConversion("get_quote");
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", company: "", designation: "", country: "", city: "", product: "", quantity: "", unit: "Kg", deliveryLocation: "", urgency: "", projectName: "", specifications: "", message: "" });
      setPdfFile(null);
    } catch (err) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Get a Quote | YNM Safety - Road Marking Paints, Crash Barriers, Signage Manufacturers</title>
        <meta name="description" content="Request a quote from YNM Safety for hot thermoplastic paints, cold plastic paints, crash barriers, road signages, fabrication products. Quick response within 24 hours." />
        <link rel="canonical" href="https://ynmsafety.com/get-quote" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ynmsafety.com/get-quote" />
        <meta property="og:title" content="Get a Quote | YNM Safety" />
        <meta property="og:description" content="Request a quote for road marking paints, crash barriers, signages and fabrication products. We respond within 24 hours." />
        <meta property="og:image" content="https://ynmsafety.com/assets/logo-navbar.jpg" />
      </Head>

      <Navbar />

      <main className="gq-page">
        <section className="gq-hero">
          <div className="gq-hero-inner">
            <h1>GET A QUOTE</h1>
            <p>Tell us what you need and our sales team will get back to you with competitive pricing within 24 hours</p>
          </div>
        </section>

        <section className="gq-content">
          <div className="gq-container">
            {submitted ? (
              <div className="gq-success-page">
                <div className="gq-success-icon-page">
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <circle cx="36" cy="36" r="36" fill="#C9A24D" opacity="0.15" />
                    <circle cx="36" cy="36" r="26" fill="#C9A24D" opacity="0.25" />
                    <path d="M24 36l8 8L48 28" stroke="#C9A24D" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2>Quote Request Submitted!</h2>
                <p>Thank you for your interest. Our sales team will review your requirements and respond within <strong>24 hours</strong>.</p>
                <p className="gq-success-contact">You can also reach us directly at <a href="mailto:sales@ynmsafety.com">sales@ynmsafety.com</a> or <a href="tel:+919676575770">+91 96765 75770</a></p>
                <button className="gq-submit-btn" onClick={() => setSubmitted(false)}>Submit Another Request</button>
              </div>
            ) : (
              <form className="gq-page-form" onSubmit={handleSubmit} onFocus={handleFormFocus}>

                {/* --- Section 1: Contact Details --- */}
                <div className="gq-section">
                  <div className="gq-section-header">
                    <span className="gq-section-num">1</span>
                    <div>
                      <h2>Contact Details</h2>
                      <p>How can we reach you?</p>
                    </div>
                  </div>
                  <div className="gq-grid-2">
                    <div className="gq-input-group">
                      <label htmlFor="gq-name">Full Name <span className="gq-req">*</span></label>
                      <input id="gq-name" name="name" type="text" placeholder="Your full name" value={formData.name} onChange={(e) => { handleChange(e); if (fieldErrors.name) setFieldErrors((p) => ({ ...p, name: "" })); }} required className={fieldErrors.name ? "ynm-input-error" : ""} />
                      {fieldErrors.name && <span className="ynm-field-error">{fieldErrors.name}</span>}
                    </div>
                    <div className="gq-input-group">
                      <label htmlFor="gq-email">Email Address <span className="gq-req">*</span></label>
                      <input id="gq-email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => { handleChange(e); if (fieldErrors.email) setFieldErrors((p) => ({ ...p, email: "" })); }} required className={fieldErrors.email ? "ynm-input-error" : ""} />
                      {fieldErrors.email && <span className="ynm-field-error">{fieldErrors.email}</span>}
                    </div>
                  </div>
                  <div className="gq-grid-2">
                    <div className="gq-input-group">
                      <label htmlFor="gq-phone">Phone Number <span className="gq-req">*</span></label>
                      <PhoneInput id="gq-phone" value={formData.phone} onChange={(val) => { setFormData((prev) => ({ ...prev, phone: val })); if (fieldErrors.phone) setFieldErrors((p) => ({ ...p, phone: "" })); }} required className={fieldErrors.phone ? "ynm-input-error" : ""} />
                      {fieldErrors.phone && <span className="ynm-field-error">{fieldErrors.phone}</span>}
                    </div>
                    <div className="gq-input-group">
                      <label htmlFor="gq-designation">Designation / Role</label>
                      <input id="gq-designation" name="designation" type="text" placeholder="e.g. Procurement Manager" value={formData.designation} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="gq-grid-3">
                    <div className="gq-input-group">
                      <label htmlFor="gq-company">Company / Organization</label>
                      <input id="gq-company" name="company" type="text" placeholder="Company name" value={formData.company} onChange={handleChange} />
                    </div>
                    <div className="gq-input-group">
                      <label htmlFor="gq-country">Country</label>
                      <PlacesAutocomplete id="gq-country" type="country" value={formData.country} onChange={(val, code) => { setFormData((prev) => ({ ...prev, country: val })); if (code) setCountryCode(code); }} placeholder="Start typing country..." />
                    </div>
                    <div className="gq-input-group">
                      <label htmlFor="gq-city">City</label>
                      <PlacesAutocomplete id="gq-city" type="city" value={formData.city} onChange={(val) => setFormData((prev) => ({ ...prev, city: val }))} countryCode={countryCode} placeholder="Start typing city..." />
                    </div>
                  </div>
                </div>

                {/* --- Section 2: Product & Requirement --- */}
                <div className="gq-section">
                  <div className="gq-section-header">
                    <span className="gq-section-num">2</span>
                    <div>
                      <h2>Product & Requirement</h2>
                      <p>What are you looking for?</p>
                    </div>
                  </div>
                  <div className="gq-input-group">
                    <label htmlFor="gq-product">Product of Interest <span className="gq-req">*</span></label>
                    <select id="gq-product" name="product" value={formData.product} onChange={handleChange} required>
                      <option value="">-- Select a product --</option>
                      {PRODUCT_OPTIONS.map((group) => (
                        <optgroup key={group.group} label={group.group}>
                          {group.items.map((item) => (
                            <option key={item} value={item}>{item}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  <div className="gq-grid-3">
                    <div className="gq-input-group">
                      <label htmlFor="gq-quantity">Quantity / Volume</label>
                      <input id="gq-quantity" name="quantity" type="text" placeholder="e.g. 500" value={formData.quantity} onChange={handleChange} />
                    </div>
                    <div className="gq-input-group">
                      <label htmlFor="gq-unit">Unit</label>
                      <select id="gq-unit" name="unit" value={formData.unit} onChange={handleChange}>
                        <option value="Kg">Kg</option>
                        <option value="Metric Ton">Metric Ton</option>
                        <option value="Pieces">Pieces</option>
                        <option value="Meters">Meters</option>
                        <option value="Sets">Sets</option>
                        <option value="Sq. Meters">Sq. Meters</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="gq-input-group">
                      <label htmlFor="gq-urgency">Timeline / Urgency</label>
                      <select id="gq-urgency" name="urgency" value={formData.urgency} onChange={handleChange}>
                        <option value="">-- Select --</option>
                        {URGENCY_OPTIONS.map((u) => <option key={u} value={u}>{u}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="gq-grid-2">
                    <div className="gq-input-group">
                      <label htmlFor="gq-projectName">Project Name (if any)</label>
                      <input id="gq-projectName" name="projectName" type="text" placeholder="e.g. NH-44 Highway Project" value={formData.projectName} onChange={handleChange} />
                    </div>
                    <div className="gq-input-group">
                      <label htmlFor="gq-deliveryLocation">Delivery Location</label>
                      <input id="gq-deliveryLocation" name="deliveryLocation" type="text" placeholder="e.g. Mumbai Port, FOB Hyderabad" value={formData.deliveryLocation} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                {/* --- Section 3: Specifications & Details --- */}
                <div className="gq-section">
                  <div className="gq-section-header">
                    <span className="gq-section-num">3</span>
                    <div>
                      <h2>Specifications & Details</h2>
                      <p>Help us understand your exact requirements</p>
                    </div>
                  </div>
                  <div className="gq-input-group">
                    <label htmlFor="gq-specifications">Technical Specifications / Standards Required</label>
                    <textarea id="gq-specifications" name="specifications" rows="3" placeholder="e.g. MoRTH compliant, IS 164, 2mm thickness, white & yellow colors, retro-reflective glass beads 30%..." value={formData.specifications} onChange={handleChange} />
                  </div>
                  <div className="gq-input-group">
                    <label htmlFor="gq-message">Additional Notes / Message</label>
                    <textarea id="gq-message" name="message" rows="3" placeholder="Any other details — pricing preference (FOB/CIF), packaging requirements, testing certificates needed, etc." value={formData.message} onChange={handleChange} />
                  </div>
                  <div className="gq-input-group">
                    <label htmlFor="gq-pdf">Attach Specification Document (optional)</label>
                    <div className="gq-file-upload">
                      <input id="gq-pdf" type="file" accept=".pdf,application/pdf" onChange={handleFileChange} />
                      <div className="gq-file-info">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        <span>{pdfFile ? pdfFile.name : "Choose a PDF file"}</span>
                      </div>
                    </div>
                    <small className="gq-file-hint">PDF only, max 5 MB, no password-protected files</small>
                    {fileError && <div className="gq-field-error">{fileError}</div>}
                  </div>
                </div>

                {/* --- Submit --- */}
                <div className="gq-section gq-section-submit">
                  {error && (
                    <div className="gq-error-msg">
                      <span>⚠️</span>
                      <p>{error}</p>
                    </div>
                  )}

                  <button type="submit" className="gq-submit-btn" disabled={submitting}>
                    {submitting ? <span className="gq-btn-spinner" /> : "SUBMIT QUOTE REQUEST"}
                  </button>
                  <p className="gq-disclaimer">By submitting, you agree to be contacted by YNM Safety regarding your enquiry. We typically respond within 24 hours on business days.</p>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .gq-page { padding-top: 80px; background: #f9f7f2; min-height: 100vh; }

        .gq-hero { background: linear-gradient(135deg, #74060D 0%, #5a0509 60%, #3d0306 100%); padding: 60px 24px 50px; text-align: center; position: relative; overflow: hidden; }
        .gq-hero::before { content: ""; position: absolute; top: -50%; left: -20%; width: 140%; height: 200%; background: radial-gradient(ellipse at 30% 50%, rgba(201,162,77,0.12) 0%, transparent 60%); pointer-events: none; }
        .gq-hero-inner { max-width: 700px; margin: 0 auto; position: relative; z-index: 1; }
        .gq-hero h1 { margin: 0; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; letter-spacing: 0.1em; color: #C9A24D; }
        .gq-hero p { margin: 12px 0 0; font-size: clamp(0.9rem, 1.5vw, 1.05rem); color: rgba(255,255,255,0.8); line-height: 1.6; }

        .gq-content { padding: 40px 24px 60px; }
        .gq-container { max-width: 800px; margin: 0 auto; }

        .gq-page-form { display: flex; flex-direction: column; gap: 0; }

        .gq-section { background: #fff; border-radius: 14px; padding: 28px 32px; margin-bottom: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid rgba(201,162,77,0.15); }

        .gq-section-header { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 2px solid rgba(201,162,77,0.2); }
        .gq-section-num { flex-shrink: 0; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #C9A24D, #E6D3A3); color: #74060D; font-weight: 800; font-size: 0.95rem; border-radius: 50%; }
        .gq-section-header h2 { margin: 0; font-size: 1.15rem; font-weight: 700; color: #74060D; }
        .gq-section-header p { margin: 2px 0 0; font-size: 0.82rem; color: #888; }

        .gq-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .gq-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

        .gq-input-group { margin-bottom: 16px; }
        .gq-input-group label { display: block; margin-bottom: 5px; font-size: 0.8rem; font-weight: 600; color: #444; }
        .gq-req { color: #C9A24D; }

        .gq-input-group input,
        .gq-input-group select,
        .gq-input-group textarea { width: 100%; padding: 11px 14px; font-size: 0.88rem; color: #333; background: #f9f7f2; border: 1.5px solid #e0dbd0; border-radius: 8px; outline: none; transition: border-color 0.2s, box-shadow 0.2s; font-family: inherit; }
        .gq-input-group input:focus,
        .gq-input-group select:focus,
        .gq-input-group textarea:focus { border-color: #C9A24D; box-shadow: 0 0 0 3px rgba(201,162,77,0.12); }
        .gq-input-group input::placeholder,
        .gq-input-group textarea::placeholder { color: #bbb; }
        .gq-input-group select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; }
        .gq-input-group textarea { resize: vertical; min-height: 70px; }

        .gq-file-upload { position: relative; }
        .gq-file-upload input[type="file"] { position: absolute; inset: 0; opacity: 0; cursor: pointer; z-index: 2; }
        .gq-file-info { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border: 2px dashed #d5cfbe; border-radius: 8px; background: #fdfcf9; color: #888; font-size: 0.85rem; transition: border-color 0.2s; }
        .gq-file-upload:hover .gq-file-info { border-color: #C9A24D; color: #74060D; }
        .gq-file-hint { display: block; margin-top: 5px; font-size: 0.75rem; color: #aaa; }
        .gq-field-error { margin-top: 5px; font-size: 0.78rem; color: #c0392b; }

        .gq-section-submit { text-align: center; background: #fff; border-radius: 14px; padding: 28px 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); border: 1px solid rgba(201,162,77,0.15); }

        .gq-error-msg { display: flex; align-items: flex-start; gap: 10px; padding: 12px 16px; margin-bottom: 16px; background: #fdf0ef; border: 1px solid #f5c6cb; border-radius: 8px; text-align: left; }
        .gq-error-msg p { margin: 0; font-size: 0.85rem; color: #c0392b; }

        .gq-submit-btn { display: inline-flex; align-items: center; justify-content: center; padding: 15px 48px; font-size: 0.95rem; font-weight: 700; letter-spacing: 0.1em; color: #fff; background: linear-gradient(135deg, #74060D 0%, #9a0a14 100%); border: none; border-radius: 10px; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 16px rgba(116,6,13,0.3); min-height: 52px; }
        .gq-submit-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(116,6,13,0.4); }
        .gq-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

        .gq-btn-spinner { display: inline-block; width: 22px; height: 22px; border: 2.5px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: gqSpin 0.7s linear infinite; }
        @keyframes gqSpin { to { transform: rotate(360deg); } }

        .gq-disclaimer { margin: 14px 0 0; font-size: 0.75rem; color: #aaa; line-height: 1.5; }

        /* Success */
        .gq-success-page { text-align: center; background: #fff; border-radius: 14px; padding: 60px 32px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .gq-success-icon-page { margin-bottom: 20px; }
        .gq-success-page h2 { margin: 0; font-size: 1.5rem; color: #74060D; font-weight: 700; }
        .gq-success-page p { margin: 10px 0; font-size: 0.95rem; color: #555; line-height: 1.6; }
        .gq-success-contact { margin-top: 16px !important; }
        .gq-success-contact a { color: #74060D; font-weight: 600; text-decoration: none; }
        .gq-success-contact a:hover { text-decoration: underline; }
        .gq-success-page .gq-submit-btn { margin-top: 24px; }

        @media (max-width: 768px) {
          .gq-grid-2, .gq-grid-3 { grid-template-columns: 1fr; gap: 0; }
          .gq-section { padding: 22px 18px; }
          .gq-hero { padding: 45px 18px 35px; }
          .gq-content { padding: 24px 14px 40px; }
          .gq-submit-btn { width: 100%; }
        }

        @media (max-width: 480px) {
          .gq-hero h1 { font-size: 1.5rem; }
          .gq-section-header { gap: 12px; }
          .gq-section-num { width: 30px; height: 30px; font-size: 0.85rem; }
        }
      `}</style>
    </>
  );
}
