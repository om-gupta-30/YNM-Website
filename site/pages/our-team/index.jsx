import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import directorData from "@/lib/directorData";

export default function OurDirectorPage() {
  return (
    <>
      <Head>
        <title>Our Director - YNM Mega Industries Pvt Ltd</title>
        <meta name="description" content="Meet Rishuu N Jaiin, Managing Director of YNM Mega Industries - leading manufacturer and exporter with a vision for excellence and global expansion." />
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
                <h2>{directorData.name}</h2>
                <p className="director-profile-role">{directorData.role}</p>
                <p className="director-profile-department">{directorData.department}</p>
              </div>
            </div>

            <div className="director-about-section">
              <h3>About</h3>
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
        {directorData.ventures && directorData.ventures.length > 0 && (
          <section className="director-ventures-section">
            <div className="director-section-container">
              <h2>Ventures & Business Interests</h2>
              <p className="section-subtitle">
                Leading multiple successful ventures across manufacturing, exports, infrastructure, and innovation
              </p>
              <div className="ventures-grid">
                {directorData.ventures.map((venture) => (
                  <div key={venture.id} className="venture-card">
                    {venture.logo && (
                      <div className="venture-logo">
                        <Image
                          src={venture.logo}
                          alt={venture.name}
                          width={60}
                          height={60}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    )}
                    <h3>{venture.name}</h3>
                    <p className="venture-role">{venture.role}</p>
                    <p className="venture-year">{venture.year}</p>
                    <p className="venture-description">{venture.description}</p>
                    {venture.achievements && venture.achievements.length > 0 && (
                      <div className="venture-achievements">
                        {venture.achievements.map((achievement, idx) => (
                          <span key={idx} className="achievement-badge">{achievement}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Achievements & Awards Section */}
        {directorData.achievements && directorData.achievements.length > 0 && (
          <section className="director-achievements-section">
            <div className="director-section-container">
              <h2>Achievements & Recognition</h2>
              <p className="section-subtitle">
                Recognized for excellence in leadership, innovation, and business growth
              </p>
              <div className="achievements-grid">
                {directorData.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-card">
                    <div className="achievement-icon">🏆</div>
                    <div className="achievement-year">{achievement.year}</div>
                    <h3>{achievement.title}</h3>
                    <p className="achievement-org">{achievement.organization}</p>
                    <p className="achievement-desc">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Milestones Timeline Section */}
        {directorData.milestones && directorData.milestones.length > 0 && (
          <section className="director-milestones-section">
            <div className="director-section-container">
              <h2>Career Milestones</h2>
              <p className="section-subtitle">
                Key moments in the journey of building successful ventures
              </p>
              <div className="milestones-timeline">
                {directorData.milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`milestone-item ${index % 2 === 0 ? 'milestone-top' : 'milestone-bottom'}`}
                    data-year={milestone.year}
                  >
                    <div className="milestone-content">
                      <h3>{milestone.title}</h3>
                      <p>{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
        }

        .our-director-hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 40%, rgba(201, 162, 77, 0.2), transparent 60%),
                      radial-gradient(circle at 70% 60%, rgba(154, 27, 46, 0.15), transparent 50%);
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

        .director-profile-info h2 {
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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .achievement-card {
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

        /* Milestones Timeline Section */
        .director-milestones-section {
          padding: 80px 20px;
          background: linear-gradient(180deg, rgba(116, 6, 13, 0.05) 0%, transparent 100%);
          overflow: hidden;
        }

        .director-milestones-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #74060D;
          text-align: center;
          margin: 0 0 20px;
        }

        .milestones-timeline {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          padding: 120px 40px 80px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 15px;
          align-items: center;
        }

        .milestones-timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 40px;
          right: 40px;
          height: 4px;
          background: linear-gradient(90deg, #74060D, #C9A24D, #74060D);
          transform: translateY(-50%);
          z-index: 1;
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(116, 6, 13, 0.2);
        }

        .milestone-item {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .milestone-item.milestone-top {
          align-items: flex-end;
          padding-bottom: 80px;
        }

        .milestone-item.milestone-bottom {
          align-items: flex-start;
          padding-top: 80px;
        }

        .milestone-item::before {
          content: '';
          position: absolute;
          left: 50%;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #74060D, #9A1B2E);
          border: 4px solid #C9A24D;
          border-radius: 50%;
          transform: translateX(-50%);
          z-index: 3;
          box-shadow: 0 4px 15px rgba(116, 6, 13, 0.4), 0 0 0 6px rgba(116, 6, 13, 0.05);
          transition: all 0.4s ease;
        }

        .milestone-item.milestone-top::before {
          bottom: 60px;
        }

        .milestone-item.milestone-bottom::before {
          top: 60px;
        }

        .milestone-item:hover::before {
          transform: translateX(-50%) scale(1.4);
          box-shadow: 0 6px 20px rgba(116, 6, 13, 0.5), 0 0 0 8px rgba(201, 162, 77, 0.2);
          background: linear-gradient(135deg, #9A1B2E, #C9A24D);
        }

        .milestone-item::after {
          content: attr(data-year);
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 16px;
          font-weight: 800;
          color: #74060D;
          background: linear-gradient(135deg, #F7F3EA, white);
          padding: 6px 14px;
          border-radius: 20px;
          border: 2px solid #C9A24D;
          white-space: nowrap;
          z-index: 4;
          box-shadow: 0 4px 12px rgba(116, 6, 13, 0.25);
          transition: all 0.4s ease;
        }

        .milestone-item.milestone-top::after {
          bottom: 95px;
        }

        .milestone-item.milestone-bottom::after {
          top: 95px;
        }

        .milestone-item:hover::after {
          transform: translateX(-50%) scale(1.1);
          box-shadow: 0 6px 16px rgba(116, 6, 13, 0.35);
          background: linear-gradient(135deg, #C9A24D, #E6D3A3);
          color: #74060D;
        }

        .milestone-content {
          background: white;
          padding: 30px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(116, 6, 13, 0.12);
          border: 2px solid #E6D3A3;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          max-width: 280px;
          position: relative;
          overflow: hidden;
        }

        .milestone-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #74060D, #C9A24D);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .milestone-content::after {
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border-left: 14px solid transparent;
          border-right: 14px solid transparent;
        }

        .milestone-top .milestone-content::after {
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          border-top: 14px solid white;
          filter: drop-shadow(0 2px 4px rgba(116, 6, 13, 0.1));
        }

        .milestone-bottom .milestone-content::after {
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          border-bottom: 14px solid white;
          filter: drop-shadow(0 -2px 4px rgba(116, 6, 13, 0.1));
        }

        .milestone-year {
          font-size: 22px;
          font-weight: 800;
          color: #C9A24D;
          text-align: center;
          margin-bottom: 12px;
          display: block;
        }

        .milestone-item:hover .milestone-content {
          transform: translateY(-5px);
          border-color: #C9A24D;
          box-shadow: 0 20px 50px rgba(116, 6, 13, 0.2);
        }

        .milestone-item:hover .milestone-content::before {
          transform: scaleX(1);
        }

        .milestone-content h3 {
          font-size: 20px;
          font-weight: 700;
          color: #74060D;
          margin: 0 0 12px;
          line-height: 1.3;
        }

        .milestone-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #1a2744;
          margin: 0;
        }

        /* Leadership Philosophy Section */
        .director-philosophy-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
        }

        .director-philosophy-section h2 {
          font-size: 36px;
          font-weight: 800;
          color: #F7F3EA;
          text-align: center;
          margin: 0 0 40px;
        }

        .philosophy-content {
          max-width: 900px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 50px;
          border-radius: 24px;
          border: 2px solid rgba(201, 162, 77, 0.3);
          text-align: center;
          position: relative;
        }

        .philosophy-icon {
          font-size: 64px;
          margin-bottom: 24px;
        }

        .philosophy-content p {
          font-size: 20px;
          line-height: 1.9;
          color: #E6D3A3;
          margin: 0;
          font-style: italic;
        }

        /* Quote Section */
        .director-quote-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #74060D 0%, #9A1B2E 100%);
        }

        .director-quote-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }

        .director-quote-icon {
          font-size: 120px;
          font-family: serif;
          color: rgba(201, 162, 77, 0.3);
          line-height: 1;
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
        }

        .director-quote-text {
          font-size: 24px;
          line-height: 1.8;
          color: #F7F3EA;
          font-style: italic;
          margin: 0 0 30px;
          position: relative;
          z-index: 1;
        }

        .director-quote-author {
          font-size: 18px;
          color: #C9A24D;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 1200px) {
          .milestones-timeline {
            grid-template-columns: repeat(3, 1fr);
            padding: 100px 30px 70px;
            gap: 30px;
          }
        }

        @media (max-width: 968px) {
          .milestones-timeline {
            grid-template-columns: repeat(2, 1fr);
            padding: 80px 20px 60px;
            gap: 20px;
          }

          .milestones-timeline::before {
            left: 20px;
            right: 20px;
          }

          .milestone-item.milestone-top {
            padding-bottom: 60px;
          }

          .milestone-item.milestone-bottom {
            padding-top: 60px;
          }

          .milestone-item.milestone-top::before {
            bottom: 50px;
          }

          .milestone-item.milestone-bottom::before {
            top: 50px;
          }

          .milestone-content {
            max-width: 100%;
            padding: 25px;
          }

          .milestone-year {
            font-size: 20px;
          }

          .milestone-content h3 {
            font-size: 18px;
          }

          .milestone-content p {
            font-size: 13px;
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

          .director-profile-info h2 {
            font-size: 28px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ventures-grid,
          .achievements-grid,
          .education-grid {
            grid-template-columns: 1fr;
          }

          .milestones-timeline {
            grid-template-columns: 1fr;
            padding: 60px 15px 40px;
            gap: 30px;
          }

          .milestones-timeline::before {
            left: 15px;
            right: 15px;
            height: 3px;
          }

          .milestone-item.milestone-top,
          .milestone-item.milestone-bottom {
            padding-top: 50px;
            padding-bottom: 50px;
            align-items: center;
          }

          .milestone-item.milestone-top::before,
          .milestone-item.milestone-bottom::before,
          .milestone-item::after {
            display: none;
          }

          .milestone-content {
            max-width: 100%;
            padding: 20px;
            border-radius: 16px;
          }

          .milestone-content::after {
            display: none;
          }

          .milestone-year {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .milestone-content h3 {
            font-size: 16px;
            margin-bottom: 8px;
          }

          .milestone-content p {
            font-size: 12px;
            line-height: 1.5;
          }

          .director-quote-text {
            font-size: 20px;
          }

          .director-quote-icon {
            font-size: 80px;
            top: -20px;
          }

          .philosophy-content {
            padding: 30px 20px;
          }

          .philosophy-content p {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
