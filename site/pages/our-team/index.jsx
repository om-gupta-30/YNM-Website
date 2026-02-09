import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import directorData from "@/lib/directorData";

export default function OurDirectorPage() {
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    purpose: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAppointmentChange = (e) => {
    setAppointmentForm({ ...appointmentForm, [e.target.name]: e.target.value });
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setAppointmentForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      purpose: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
    
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <>
      <Head>
        <title>Our Director - YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Meet Rishuu Jaiin, Managing Director of YNM Safety - leading manufacturer and exporter with a vision for excellence and global expansion." />
      </Head>

      <Navbar />

      <main className="our-director-page">
        {/* Hero Section */}
        <section className="our-director-hero">
          <div className="our-director-hero-bg" />
          <div className="our-director-hero-overlay" />
          <div className="our-director-hero-content">
            <span className="our-director-tag">OUR DIRECTOR</span>
            <h1>Meet Our Director</h1>
            <p>Visionary leadership driving manufacturing excellence and global expansion</p>
          </div>
        </section>

        {/* Director Profile Section */}
        <section className="director-profile-section">
          <div className="director-profile-container">
            <div className="director-profile-card">
              <div className="director-profile-photo">
                <Image
                  src={directorData.photo2 || directorData.photo}
                  alt={directorData.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 18%" }}
                />
              </div>
              <div className="director-profile-info">
                <p className="director-profile-name">{directorData.name}</p>
                <p className="director-profile-role">{directorData.role}</p>
                <p className="director-profile-department">{directorData.department}</p>
              </div>
            </div>

            <div className="director-about-section">
              <h2>About</h2>
              <p>{directorData.about}</p>
            </div>
          </div>
        </section>

        {/* Key Statistics Section */}
        {directorData.keyStatistics && (
          <section className="director-stats-section">
            <div className="director-stats-container">
              <h2>Leadership Impact</h2>
              <div className="stats-grid">
                {Object.entries(directorData.keyStatistics).map(([key, value]) => (
                  <div key={key} className="stat-card">
                    <div className="stat-value">{value}</div>
                    <div className="stat-label">
                      {key === "yearsExperience" ? "Years Experience" :
                       key === "companiesLed" ? "Companies Led" :
                       key === "countriesReached" ? "Countries Reached" :
                       key === "projectsDelivered" ? "Projects Delivered" :
                       key === "teamSize" ? "Team Members" :
                       key === "annualRevenue" ? "Annual Revenue" : key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {directorData.education && directorData.education.length > 0 && (
          <section className="director-education-section">
            <div className="director-section-container">
              <h2>Education & Background</h2>
              <div className="education-grid">
                {directorData.education.map((edu, index) => (
                  <div key={index} className="education-card">
                    <div className="education-icon">🎓</div>
                    <h3>{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-year">{edu.year}</p>
                    {edu.specialization && (
                      <p className="education-specialization">{edu.specialization}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ventures Section */}
        <section className="director-ventures-section">
          <div className="director-section-container">
            <h2>Ventures & Business Interests</h2>
            <p className="section-subtitle">
              Leading successful ventures in manufacturing and exports
            </p>
            <div className="ventures-grid">
              {/* YNM Safety - Main Venture */}
              <div className="venture-card">
                <div className="venture-logo">
                  <Image
                    src="/assets/logo-navbar.jpg"
                    alt="YNM Safety"
                    width={60}
                    height={60}
                    style={{ objectFit: "contain", borderRadius: 8 }}
                  />
                </div>
                <h3>YNM Safety Pan Global Trade Pvt Ltd</h3>
                <p className="venture-role">Founder & Managing Director</p>
                <p className="venture-year">2013 - Present</p>
                <p className="venture-description">Leading manufacturer and exporter of road safety products, hot thermoplastic paints, metal beam crash barriers, signages, and infrastructure solutions. Serving clients across 50+ countries worldwide.</p>
                <div className="venture-achievements">
                  <span className="achievement-badge">50+ Export Countries</span>
                  <span className="achievement-badge">500+ Projects</span>
                  <span className="achievement-badge">ISO 9001:2015</span>
                </div>
              </div>
              
              {/* Coming Soon Card */}
              <div className="venture-card coming-soon-card">
                <div className="coming-soon-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3>More Ventures Coming Soon</h3>
                <p className="venture-description">Additional business interests and ventures will be announced shortly. Stay tuned for exciting updates!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Awards Section - Coming Soon */}
        <section className="director-achievements-section">
          <div className="director-section-container">
            <h2>Achievements & Recognition</h2>
            <p className="section-subtitle">
              Recognized for excellence in leadership, innovation, and business growth
            </p>
            <div className="section-coming-soon">
              <div className="coming-soon-icon-large">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="7"/>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                </svg>
              </div>
              <h3>Coming Soon</h3>
              <p>Awards, certifications, and recognition details will be updated shortly.</p>
            </div>
          </div>
        </section>

        {/* Member Of Section - Coming Soon */}
        <section className="director-memberof-section">
          <div className="director-section-container">
            <h2>Member Of</h2>
            <p className="section-subtitle">
              Professional associations and organizations contributing to industry growth
            </p>
            <div className="section-coming-soon">
              <div className="coming-soon-icon-large">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Coming Soon</h3>
              <p>Professional memberships and association details will be updated shortly.</p>
            </div>
          </div>
        </section>

        {/* Milestones Timeline Section - Coming Soon */}
        <section className="director-milestones-section">
          <div className="director-section-container">
            <h2>Career Milestones</h2>
            <p className="section-subtitle" style={{ color: '#E6D3A3' }}>
              Key moments in the journey of leadership and growth
            </p>
            <div className="section-coming-soon" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <div className="coming-soon-icon-large" style={{ background: 'rgba(201, 162, 77, 0.3)' }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="1.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
              <h3 style={{ color: '#F7F3EA' }}>Coming Soon</h3>
              <p style={{ color: '#E6D3A3' }}>Career milestones and journey highlights will be updated shortly.</p>
            </div>
          </div>
        </section>

        {/* Leadership Philosophy Section */}
        {directorData.leadershipPhilosophy && (
          <section className="director-philosophy-section">
            <div className="director-section-container">
              <h2>Leadership Philosophy</h2>
              <div className="philosophy-content">
                <div className="philosophy-icon">💡</div>
                <p>{directorData.leadershipPhilosophy}</p>
              </div>
            </div>
          </section>
        )}

        {/* Book Appointment Section */}
        <section className="director-appointment-section">
          <div className="appointment-container">
            <div className="appointment-info">
              <span className="appointment-tag">MEET THE DIRECTOR</span>
              <h2>Book an Appointment</h2>
              <p>Schedule a personal meeting with Rishuu Jaiin to discuss business opportunities, partnerships, or strategic collaborations.</p>
              
              <div className="appointment-benefits">
                <div className="benefit-item">
                  <span className="benefit-icon">📅</span>
                  <div>
                    <h3>Flexible Scheduling</h3>
                    <p>Choose a time that works best for you</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">💼</span>
                  <div>
                    <h3>Business Discussions</h3>
                    <p>Explore partnerships and collaborations</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">🤝</span>
                  <div>
                    <h3>Personal Attention</h3>
                    <p>One-on-one meeting with leadership</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="appointment-form-wrapper">
              {submitted ? (
                <div className="appointment-success">
                  <div className="success-icon">✓</div>
                  <h3>Appointment Request Sent!</h3>
                  <p>Thank you for your interest. Our team will contact you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleAppointmentSubmit} className="appointment-form">
                  <h3>Request an Appointment</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="apt-name">Full Name *</label>
                      <input
                        type="text"
                        id="apt-name"
                        name="name"
                        value={appointmentForm.name}
                        onChange={handleAppointmentChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="apt-email">Email *</label>
                      <input
                        type="email"
                        id="apt-email"
                        name="email"
                        value={appointmentForm.email}
                        onChange={handleAppointmentChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="apt-phone">Phone *</label>
                      <input
                        type="tel"
                        id="apt-phone"
                        name="phone"
                        value={appointmentForm.phone}
                        onChange={handleAppointmentChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="apt-company">Company Name</label>
                      <input
                        type="text"
                        id="apt-company"
                        name="company"
                        value={appointmentForm.company}
                        onChange={handleAppointmentChange}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="apt-purpose">Purpose of Meeting *</label>
                    <select
                      id="apt-purpose"
                      name="purpose"
                      value={appointmentForm.purpose}
                      onChange={handleAppointmentChange}
                      required
                    >
                      <option value="">Select purpose</option>
                      <option value="Business Partnership">Business Partnership</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Export Collaboration">Export Collaboration</option>
                      <option value="Investment Discussion">Investment Discussion</option>
                      <option value="General Meeting">General Meeting</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="apt-date">Preferred Date *</label>
                      <input
                        type="date"
                        id="apt-date"
                        name="preferredDate"
                        value={appointmentForm.preferredDate}
                        onChange={handleAppointmentChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="apt-time">Preferred Time *</label>
                      <select
                        id="apt-time"
                        name="preferredTime"
                        value={appointmentForm.preferredTime}
                        onChange={handleAppointmentChange}
                        required
                      >
                        <option value="">Select time</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="apt-message">Additional Message</label>
                    <textarea
                      id="apt-message"
                      name="message"
                      value={appointmentForm.message}
                      onChange={handleAppointmentChange}
                      rows={4}
                      placeholder="Tell us more about what you'd like to discuss..."
                    />
                  </div>

                  <button type="submit" className="appointment-submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <span className="btn-spinner" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Request Appointment
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="director-quote-section">
          <div className="director-quote-container">
            <div className="director-quote-icon">&quot;</div>
            <p className="director-quote-text">{directorData.quote}</p>
            <p className="director-quote-author">— {directorData.name}</p>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .our-director-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
          padding-top: 100px;
        }

        /* Hero Section */
        .our-director-hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .our-director-hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 50%, #5a0509 100%);
          pointer-events: none;
        }

        .our-director-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(201, 162, 77, 0.2), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(154, 27, 46, 0.15), transparent 50%);
          pointer-events: none;
        }

        .our-director-hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
        }

        .our-director-tag {
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

        .our-director-hero-content h1 {
          font-size: clamp(40px, 7vw, 64px);
          font-weight: 800;
          color: #F7F3EA;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .our-director-hero-content p {
          font-size: 18px;
          color: #E6D3A3;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 500;
        }

        /* Section Container */
        .director-section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-subtitle {
          font-size: 18px;
          color: #5a4a4a;
          text-align: center;
          margin: 0 0 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Director Profile Section */
        .director-profile-section {
          padding: 80px 20px;
        }

        .director-profile-container {
          max-width: 1200px;
          margin: 0 auto;
          background: white;
          border-radius: 24px;
          padding: 60px;
          box-shadow: 0 12px 40px rgba(116, 6, 13, 0.15);
        }

        .director-profile-card {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 2px solid rgba(116, 6, 13, 0.1);
        }

        .director-profile-photo {
          position: relative;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #C9A24D;
          box-shadow: 0 8px 24px rgba(201, 162, 77, 0.3);
          flex-shrink: 0;
        }

        .director-profile-info h2,
        .director-profile-info .director-profile-name {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 8px;
        }

        .director-profile-role {
          font-size: 20px;
          color: #9A1B2E;
          margin: 0 0 8px;
          font-weight: 600;
        }

        .director-profile-department {
          display: inline-block;
          font-size: 12px;
          color: #74060D;
          background: #C9A24D;
          padding: 6px 16px;
          border-radius: 20px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .director-about-section h3 {
          font-size: 28px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 20px;
        }

        .director-about-section p {
          font-size: 16px;
          line-height: 1.8;
          color: #1a2744;
          margin: 0;
        }

        /* Key Statistics Section */
        .director-stats-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
        }

        .director-stats-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .director-stats-container h2 {
          font-size: 36px;
          font-weight: 800;
          color: #F7F3EA;
          text-align: center;
          margin: 0 0 50px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 30px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          border: 2px solid rgba(201, 162, 77, 0.3);
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          border-color: #C9A24D;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 800;
          color: #C9A24D;
          margin-bottom: 12px;
        }

        .stat-label {
          font-size: 14px;
          color: #E6D3A3;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Education Section */
        .director-education-section {
          padding: 80px 20px;
          background: white;
        }

        .director-education-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 50px;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .education-card {
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 20px;
          padding: 40px;
          text-align: center;
          border: 2px solid #E6D3A3;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(116, 6, 13, 0.15);
          border-color: #C9A24D;
        }

        .education-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .education-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .education-institution {
          font-size: 16px;
          color: #9A1B2E;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .education-year {
          font-size: 14px;
          color: #C9A24D;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .education-specialization {
          font-size: 14px;
          color: #5a4a4a;
          margin: 0;
          font-style: italic;
        }

        /* Ventures Section */
        .director-ventures-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, rgba(116, 6, 13, 0.05) 0%, transparent 100%);
        }

        .director-ventures-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 20px;
        }

        .ventures-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .venture-card {
          background: white;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.1);
          transition: all 0.4s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .venture-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #74060D, #C9A24D, #74060D);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .venture-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
          border-color: #C9A24D;
        }

        .venture-card:hover::before {
          transform: scaleX(1);
        }

        .venture-logo {
          width: 60px;
          height: 60px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201, 162, 77, 0.1);
          border-radius: 12px;
          padding: 10px;
        }

        .venture-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
        }

        .venture-role {
          font-size: 16px;
          color: #C9A24D;
          font-weight: 600;
          margin: 0 0 8px;
        }

        .venture-year {
          font-size: 14px;
          color: #9A1B2E;
          margin: 0 0 16px;
          font-weight: 500;
        }

        .venture-description {
          font-size: 15px;
          line-height: 1.7;
          color: #1a2744;
          margin: 0 0 20px;
        }

        .venture-achievements {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #E6D3A3;
        }

        .achievement-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: #74060D;
          background: rgba(201, 162, 77, 0.15);
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid rgba(201, 162, 77, 0.3);
        }

        .coming-soon-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 2px dashed #C9A24D;
          background: linear-gradient(135deg, #F7F3EA 0%, #fff 100%);
        }

        .coming-soon-card .coming-soon-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          color: #74060D;
        }

        .coming-soon-card h3 {
          color: #74060D;
          text-align: center;
        }

        .coming-soon-card .venture-description {
          text-align: center;
          color: #666;
        }

        .section-coming-soon {
          background: linear-gradient(135deg, #F7F3EA 0%, #fff 100%);
          border: 2px dashed #C9A24D;
          border-radius: 20px;
          padding: 60px 40px;
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
        }

        .coming-soon-icon-large {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #74060D;
        }

        .section-coming-soon h3 {
          font-size: 28px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 12px;
        }

        .section-coming-soon p {
          font-size: 16px;
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        /* Achievements Section */
        .director-achievements-section {
          padding: 80px 20px;
          background: white;
        }

        .director-achievements-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 20px;
        }

        .achievements-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .achievement-card {
          flex: 0 1 280px;
          max-width: 320px;
          background: linear-gradient(135deg, rgba(116, 6, 13, 0.05), rgba(201, 162, 77, 0.05));
          border-radius: 20px;
          padding: 35px;
          text-align: center;
          border: 2px solid #E6D3A3;
          transition: all 0.4s ease;
          position: relative;
        }

        .achievement-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
          border-color: #C9A24D;
        }

        .achievement-icon {
          font-size: 56px;
          margin-bottom: 16px;
        }

        .achievement-year {
          font-size: 18px;
          font-weight: 700;
          color: #C9A24D;
          margin-bottom: 12px;
        }

        .achievement-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 10px;
        }

        .achievement-org {
          font-size: 14px;
          color: #9A1B2E;
          font-weight: 600;
          margin: 0 0 12px;
        }

        .achievement-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #5a4a4a;
          margin: 0;
        }

        /* Member Of Section */
        .director-memberof-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, #F7F3EA 0%, rgba(201, 162, 77, 0.1) 100%);
        }

        .director-memberof-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 20px;
        }

        .memberof-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .memberof-card {
          background: white;
          border-radius: 20px;
          padding: 35px;
          text-align: center;
          border: 2px solid #E6D3A3;
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.08);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .memberof-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #C9A24D, #74060D, #C9A24D);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .memberof-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.15);
          border-color: #C9A24D;
        }

        .memberof-card:hover::before {
          transform: scaleX(1);
        }

        .memberof-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }

        .memberof-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
          line-height: 1.4;
        }

        .memberof-role {
          display: inline-block;
          font-size: 13px;
          color: #F7F3EA;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          padding: 6px 18px;
          border-radius: 20px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 16px;
        }

        .memberof-description {
          font-size: 15px;
          line-height: 1.7;
          color: #5a4a4a;
          margin: 0;
        }

        /* Milestones Timeline Section */
        .director-milestones-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
          position: relative;
        }

        .director-milestones-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #F7F3EA;
          text-align: center;
          margin: 0 0 20px;
        }

        .milestones-timeline {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 25px;
          padding-top: 30px;
        }

        .milestone-item {
          flex: 0 1 340px;
          max-width: 380px;
        }

        .milestone-content {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
        }

        .milestone-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 6px;
          height: 100%;
          background: linear-gradient(180deg, #C9A24D, #74060D);
        }

        .milestone-item:hover .milestone-content {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .milestone-year {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 15px;
        }

        .milestone-content h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .milestone-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #5a4a4a;
          margin: 0;
        }

        /* Book Appointment Section */
        .director-appointment-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #F7F3EA 0%, #E6D3A3 50%, #F7F3EA 100%);
          position: relative;
        }

        .appointment-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .appointment-info {
          padding: 40px 0;
        }

        .appointment-tag {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #74060D;
          background: #C9A24D;
          padding: 8px 20px;
          border-radius: 30px;
          margin-bottom: 20px;
        }

        .appointment-info h2 {
          font-size: 42px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 20px;
          line-height: 1.2;
        }

        .appointment-info > p {
          font-size: 16px;
          line-height: 1.8;
          color: #5a4a4a;
          margin: 0 0 40px;
        }

        .appointment-benefits {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .benefit-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .benefit-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .benefit-item h4 {
          font-size: 18px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 4px;
        }

        .benefit-item p {
          font-size: 14px;
          color: #5a4a4a;
          margin: 0;
        }

        .appointment-form-wrapper {
          background: white;
          border-radius: 24px;
          padding: 50px;
          box-shadow: 0 25px 80px rgba(116, 6, 13, 0.15);
          border: 3px solid #C9A24D;
        }

        .appointment-form h3 {
          font-size: 28px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 30px;
          text-align: center;
        }

        .appointment-form .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .appointment-form .form-group {
          margin-bottom: 20px;
        }

        .appointment-form label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #74060D;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .appointment-form input,
        .appointment-form select,
        .appointment-form textarea {
          width: 100%;
          padding: 14px 18px;
          font-size: 15px;
          border: 2px solid #E6D3A3;
          border-radius: 12px;
          background: #F7F3EA;
          color: #74060D;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .appointment-form input:focus,
        .appointment-form select:focus,
        .appointment-form textarea:focus {
          outline: none;
          border-color: #C9A24D;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(201, 162, 77, 0.15);
        }

        .appointment-form textarea {
          resize: vertical;
          min-height: 100px;
        }

        .appointment-submit-btn {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 32px;
          font-size: 15px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #F7F3EA;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          border: 3px solid #C9A24D;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .appointment-submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(116, 6, 13, 0.4);
        }

        .appointment-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .appointment-submit-btn .btn-spinner {
          width: 20px;
          height: 20px;
          border: 3px solid transparent;
          border-top-color: #F7F3EA;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .appointment-success {
          text-align: center;
          padding: 60px 30px;
        }

        .appointment-success .success-icon {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          color: #74060D;
          margin: 0 auto 30px;
          box-shadow: 0 10px 40px rgba(201, 162, 77, 0.4);
        }

        .appointment-success h3 {
          font-size: 28px;
          font-weight: 800;
          color: #74060D;
          margin: 0 0 16px;
        }

        .appointment-success p {
          font-size: 16px;
          color: #5a4a4a;
          line-height: 1.7;
          margin: 0;
        }

        /* Leadership Philosophy Section */
        .director-philosophy-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, #F7F3EA 0%, #E6D3A3 100%);
          position: relative;
          overflow: hidden;
        }

        .director-philosophy-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #74060D, #C9A24D, #74060D);
        }

        .director-philosophy-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 50px;
        }

        .philosophy-content {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 60px;
          border-radius: 24px;
          border: 3px solid #C9A24D;
          text-align: center;
          position: relative;
          box-shadow: 0 20px 60px rgba(116, 6, 13, 0.15);
        }

        .philosophy-content::before {
          content: '';
          position: absolute;
          top: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 6px;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          border-radius: 0 0 10px 10px;
        }

        .philosophy-icon {
          font-size: 72px;
          margin-bottom: 30px;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .philosophy-content p {
          font-size: 20px;
          line-height: 1.9;
          color: #5a4a4a;
          margin: 0;
          font-style: italic;
        }

        /* Quote Section */
        .director-quote-section {
          padding: 100px 20px;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
          position: relative;
          overflow: hidden;
        }

        .director-quote-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 30%, rgba(201, 162, 77, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(201, 162, 77, 0.08) 0%, transparent 40%);
          pointer-events: none;
        }

        .director-quote-container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
          background: rgba(255, 255, 255, 0.03);
          padding: 60px 50px;
          border-radius: 24px;
          border: 2px solid rgba(201, 162, 77, 0.2);
          backdrop-filter: blur(10px);
        }

        .director-quote-icon {
          font-size: 100px;
          font-family: Georgia, serif;
          color: #C9A24D;
          line-height: 1;
          display: block;
          margin-bottom: 30px;
          opacity: 0.8;
        }

        .director-quote-text {
          font-size: 22px;
          line-height: 1.9;
          color: #F7F3EA;
          font-style: italic;
          margin: 0 0 40px;
          position: relative;
        }

        .director-quote-author {
          font-size: 20px;
          color: #C9A24D;
          font-weight: 700;
          margin: 0;
          display: inline-block;
          padding: 12px 30px;
          background: rgba(201, 162, 77, 0.1);
          border: 2px solid rgba(201, 162, 77, 0.3);
          border-radius: 30px;
        }

        @media (max-width: 968px) {
          .milestones-timeline {
            gap: 20px;
          }

          .milestone-item {
            flex: 0 1 100%;
            max-width: 100%;
          }

          .memberof-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .appointment-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .appointment-info {
            text-align: center;
            padding: 0;
          }

          .appointment-benefits {
            align-items: center;
          }

          .benefit-item {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
        }

        @media (max-width: 768px) {
          .our-director-hero {
            height: 40vh;
            min-height: 300px;
          }

          .director-profile-container {
            padding: 40px 30px;
          }

          .director-profile-card {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }

          .director-profile-photo {
            width: 180px;
            height: 180px;
          }

          .director-profile-info h2,
          .director-profile-info .director-profile-name {
            font-size: 28px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ventures-grid,
          .education-grid,
          .memberof-grid {
            grid-template-columns: 1fr;
          }

          .achievements-grid {
            flex-direction: column;
            align-items: center;
          }

          .achievement-card {
            flex: 0 1 auto;
            max-width: 100%;
            width: 100%;
          }

          .milestone-content {
            padding: 25px;
          }

          .milestone-content h3 {
            font-size: 18px;
          }

          .milestone-content p {
            font-size: 13px;
          }

          .director-quote-text {
            font-size: 20px;
          }

          .director-quote-icon {
            font-size: 80px;
            top: -20px;
          }

          .philosophy-content {
            padding: 40px 25px;
          }

          .philosophy-content p {
            font-size: 16px;
          }

          .director-quote-container {
            padding: 40px 25px;
          }

          .director-quote-text {
            font-size: 18px;
          }

          .director-quote-icon {
            font-size: 60px;
          }

          .appointment-form-wrapper {
            padding: 30px 20px;
          }

          .appointment-info h2 {
            font-size: 32px;
          }

          .appointment-form h3 {
            font-size: 22px;
          }

          .appointment-form .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </>
  );
}
