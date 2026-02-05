import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function UnderConstruction() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thank you! We will get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: 'General Inquiry',
          message: '',
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>YNM Safety - Coming Soon</title>
        <meta name="description" content="YNM Safety - Website under construction. Contact us for inquiries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="preload" href="/assets/logo-navbar.jpg" as="image" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#74060D] via-[#8B0A10] to-[#5C0509] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C9A227]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side - Branding */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/assets/logo-navbar.jpg"
                alt="YNM Safety Logo"
                width={320}
                height={120}
                className="mx-auto lg:mx-0 drop-shadow-2xl"
                priority
              />
            </div>

            {/* Under Construction Badge */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[#C9A227]"></span>
              <span className="text-[#C9A227] text-sm font-semibold tracking-[0.3em] uppercase">
                Coming Soon
              </span>
              <span className="h-px w-8 bg-[#C9A227]"></span>
            </div>

            {/* Tagline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
              Something <span className="font-semibold text-[#C9A227]">Amazing</span>
              <br />is on the way
            </h1>

            <p className="text-white/70 text-lg max-w-md mx-auto lg:mx-0">
              We&apos;re working hard to bring you an exceptional experience. Stay tuned for updates!
            </p>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-white/80 text-sm">
              <a href="tel:+919676575770" className="flex items-center gap-2 hover:text-[#C9A227] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 96765 75770
              </a>
              <a href="mailto:sales@ynmsafety.com" className="flex items-center gap-2 hover:text-[#C9A227] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sales@ynmsafety.com
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white mb-1 text-center">Get in Touch</h2>
              <p className="text-white/60 text-sm mb-6 text-center">
                Have questions? We&apos;d love to hear from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Name <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message <span className="text-[#C9A227]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div
                    className={`p-3 rounded-xl text-sm ${
                      status.type === 'success'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#C9A227] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E5C158] text-[#74060D] font-bold rounded-xl shadow-lg shadow-[#C9A227]/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-12 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} YNM Safety. All rights reserved.</p>
          <p className="mt-1 text-xs text-white/30">Hyderabad, Telangana, India</p>
        </div>
      </div>
    </>
  );
}
