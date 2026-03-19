import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: "We collect information you provide directly (name, email, phone, company, messages) when you contact us, request a quote, apply for careers, or submit partnership inquiries. We also collect usage data such as IP address, browser type, and pages visited to improve our website.",
  },
  {
    title: "How We Use Your Information",
    content: "We use your information to respond to inquiries, process quote requests, manage applications, and communicate about our products and services. We may use aggregated, anonymized data for analytics and website improvement.",
  },
  {
    title: "Information Sharing",
    content: "We do not sell, trade, or rent your personal information. We may share information with service providers who assist our operations (e.g., hosting, analytics) under strict confidentiality. We may disclose information if required by law.",
  },
  {
    title: "Data Security",
    content: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction. However, no internet transmission is completely secure.",
  },
  {
    title: "Cookies and Tracking",
    content: "We use cookies and similar technologies for analytics, functionality, and to improve user experience. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Your Rights",
    content: "You may request access to, correction of, or deletion of your personal data. You may opt out of marketing communications. Contact us at sales@ynmsafety.com for any privacy-related requests.",
  },
  {
    title: "Retention",
    content: "We retain your information for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.",
  },
  {
    title: "Updates",
    content: "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date. We encourage you to review this policy periodically.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Privacy Policy of YNM Safety - How we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://ynmsafety.com/privacy-policy" />
      </Head>

      <Navbar />
      <main className="legal-page">
        <div className="responsive-container section-padding">
          <Link href="/" className="legal-back-link">
            ← Back to Home
          </Link>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-updated">Last updated: March 2025</p>
          <p className="legal-intro">
            YNM Safety Pan Global Trade Pvt Ltd (&quot;YNM Safety&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This policy describes how we collect, use, and safeguard your information when you use our website or services.
          </p>
          <div className="legal-sections">
            {sections.map((section, i) => (
              <section key={i} className="legal-section">
                <h2 className="legal-section-title">{section.title}</h2>
                <p className="legal-section-content">{section.content}</p>
              </section>
            ))}
          </div>
          <p className="legal-contact">
            For questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:sales@ynmsafety.com" className="legal-link">sales@ynmsafety.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
