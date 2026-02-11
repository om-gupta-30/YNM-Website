"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialsSection({ testimonialsData: propTestimonialsData }) {
  const [testimonialsData, setTestimonialsData] = useState(propTestimonialsData || []);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (propTestimonialsData) setTestimonialsData(propTestimonialsData);
  }, [propTestimonialsData]);

  // Don't render if loading or no data
  if (!testimonialsData || testimonialsData.length === 0) {
    return null;
  }

  // Double the testimonials for seamless loop
  const doubledTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      {/* Neon Particles */}
      <div className="neon-particles">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="neon-particle" />
        ))}
      </div>

      {/* Background Gradient */}
      <div className="testimonials-bg-gradient" />
      <div className="testimonials-bg-lines" />

      {/* Header */}
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <div className="testimonials-line" />
      </div>

      {/* Marquee Container - CSS Animation Based */}
      <div className="marquee-container">
        <div className="marquee-content">
          {doubledTestimonials.map((testimonial, idx) => {
            const cardKey = `testimonial-${testimonial.id}-${idx}`;
            const photoSrc = testimonial.photo || "/assets/gallery-production-line.jpg";
            const rotation = testimonial.rotation || 0;
              
            return (
              <div
                key={cardKey}
                className="testimonial-card-wrapper"
                style={{ 
                  "--card-rotation": `${rotation}deg`,
                }}
              >
                <div className="testimonial-card">
                  {/* Gold Glow Background */}
                  <div className="testimonial-glow" />

                  {/* Card Content */}
                  <div className="testimonial-card-inner">
                    {/* Photo */}
                    <div className="testimonial-photo">
                      <Image
                        src={photoSrc}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: "cover" }}
                        loading="lazy"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    </div>

                    {/* Rating */}
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" fill="#c9a227">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>

                    {/* Author */}
                    <div className="testimonial-author">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                      <p className="testimonial-company">{testimonial.company}</p>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
