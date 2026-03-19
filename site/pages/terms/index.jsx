import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content: "By accessing or using the YNM Safety website (ynmsafety.com), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.",
  },
  {
    title: "Use of Website",
    content: "You may use our website for lawful purposes only. You must not use it in any way that violates applicable laws, infringes intellectual property rights, or disrupts the website or its services. You are responsible for the accuracy of information you provide.",
  },
  {
    title: "Products and Services",
    content: "Product information, specifications, and pricing on our website are subject to change without notice. Quotations and orders are subject to our acceptance and prevailing terms at the time of order. We reserve the right to limit quantities or discontinue products.",
  },
  {
    title: "Intellectual Property",
    content: "All content on this website—including text, images, logos, and design—is the property of YNM Safety Pan Global Trade Pvt Ltd or its licensors. You may not reproduce, distribute, or use our content without prior written permission.",
  },
  {
    title: "Disclaimer",
    content: "Our website and content are provided \"as is\" without warranties of any kind. We do not warrant that the website will be uninterrupted, error-free, or free of viruses. We are not liable for any indirect, incidental, or consequential damages arising from your use of the website.",
  },
  {
    title: "Limitation of Liability",
    content: "To the fullest extent permitted by law, YNM Safety shall not be liable for any damages arising from your use of our website or reliance on its content. Our total liability shall not exceed the amount you paid to us, if any, in the twelve months preceding the claim.",
  },
  {
    title: "Links to Third Parties",
    content: "Our website may contain links to third-party sites. We are not responsible for the content or practices of external websites. Your use of linked sites is at your own risk.",
  },
  {
    title: "Governing Law",
    content: "These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.",
  },
  {
    title: "Changes",
    content: "We may update these Terms from time to time. Continued use of the website after changes constitutes acceptance. We encourage you to review this page periodically.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | YNM Safety Pan Global Trade Pvt Ltd</title>
        <meta name="description" content="Terms and Conditions for using the YNM Safety website and services." />
        <link rel="canonical" href="https://ynmsafety.com/terms" />
      </Head>

      <Navbar />
      <main className="legal-page">
        <div className="responsive-container section-padding">
          <Link href="/" className="legal-back-link">
            ← Back to Home
          </Link>
          <h1 className="legal-title">Terms & Conditions</h1>
          <p className="legal-updated">Last updated: March 2025</p>
          <p className="legal-intro">
            Welcome to YNM Safety Pan Global Trade Pvt Ltd. These Terms and Conditions govern your use of our website and services. Please read them carefully.
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
            For questions about these Terms, contact us at{" "}
            <a href="mailto:sales@ynmsafety.com" className="legal-link">sales@ynmsafety.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
