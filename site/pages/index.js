import Head from "next/head";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import BrandsSection from "@/components/BrandsSection";
import USPSection from "@/components/USPSection";
import DirectorSection from "@/components/DirectorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import directorData from "@/lib/directorData";

// Fallback data (used when database is not available)
const fallbackProductData = [
  {
    id: "paints",
    slug: "paints",
    title: "Industrial & Decorative Paints",
    shortTitle: "Paints",
    tagline: "Premium Quality",
    image: "/assets/gallery-manufacturing-facility.jpg",
    description: "Premium Quality Paints",
    subcategories: [
      {
        id: "industrial-paints",
        slug: "industrial-paints",
        title: "Industrial Paints",
        subtitle: "Heavy Duty Coatings",
        description: "High-performance industrial paints designed for machinery, equipment, and structural steel. Excellent corrosion resistance and durability for harsh environments.",
        image: "/assets/gallery-manufacturing-facility.jpg",
        specs: ["Epoxy & Polyurethane", "Anti-corrosive", "High gloss finish", "ISO certified"],
      },
      {
        id: "decorative-paints",
        slug: "decorative-paints",
        title: "Decorative Paints",
        subtitle: "Interior & Exterior",
        description: "Premium decorative paints for residential and commercial spaces. Wide range of colors with excellent coverage and washability.",
        image: "/assets/gallery-warehouse.jpg",
        specs: ["Eco-friendly", "Low VOC", "Weather resistant", "10+ year warranty"],
      },
      {
        id: "wood-coatings",
        slug: "wood-coatings",
        title: "Wood Coatings & Finishes",
        subtitle: "Protective & Aesthetic",
        description: "Specialized wood coatings including varnishes, lacquers, and wood stains for furniture and architectural woodwork.",
        image: "/assets/gallery-production-line.jpg",
        specs: ["UV resistant", "Scratch proof", "Natural finish", "Quick drying"],
      },
    ],
  },
  {
    id: "fabrications",
    slug: "fabrications",
    title: "Metal Fabrications",
    shortTitle: "Fabrications",
    tagline: "Precision Engineering",
    image: "/assets/gallery-warehouse.jpg",
    description: "Precision Metal Fabrications",
    subcategories: [
      {
        id: "structural-steel",
        slug: "structural-steel",
        title: "Structural Steel Works",
        subtitle: "Industrial & Commercial",
        description: "Custom structural steel fabrication for buildings, warehouses, and industrial facilities. Complete design to installation services.",
        image: "/assets/gallery-warehouse.jpg",
        specs: ["Hot rolled steel", "Welded & bolted", "Galvanized options", "Load certified"],
      },
      {
        id: "gates-railings",
        slug: "gates-railings",
        title: "Gates & Railings",
        subtitle: "Security & Aesthetics",
        description: "Premium quality gates, grills, and railings for residential, commercial, and industrial applications. Custom designs available.",
        image: "/assets/gallery-production-line.jpg",
        specs: ["MS & SS options", "Powder coated", "Custom designs", "Anti-rust treated"],
      },
      {
        id: "industrial-equipment",
        slug: "industrial-equipment",
        title: "Industrial Equipment",
        subtitle: "Custom Manufacturing",
        description: "Custom fabrication of industrial equipment including storage tanks, conveyors, platforms, and specialized machinery components.",
        image: "/assets/gallery-manufacturing-facility.jpg",
        specs: ["Heavy duty", "Precision cut", "Assembly ready", "Quality tested"],
      },
    ],
  },
  {
    id: "school-furniture",
    slug: "school-furniture",
    title: "School & Educational Furniture",
    shortTitle: "School Furniture",
    tagline: "Learning Spaces",
    image: "/assets/gallery-manufacturing-facility.jpg",
    description: "Quality Educational Furniture",
    subcategories: [
      {
        id: "student-furniture",
        slug: "student-furniture",
        title: "Student Desks & Chairs",
        subtitle: "Comfortable Learning",
        description: "Ergonomically designed student desks and chairs for all age groups. Durable construction with smooth edges for safety.",
        image: "/assets/gallery-production-line.jpg",
        specs: ["Ergonomic design", "Height adjustable", "Scratch resistant", "Easy maintenance"],
      },
      {
        id: "teacher-furniture",
        slug: "teacher-furniture",
        title: "Teacher Tables & Chairs",
        subtitle: "Professional Workspace",
        description: "Spacious teacher desks and comfortable chairs designed for classroom environment. Multiple storage options available.",
        image: "/assets/gallery-warehouse.jpg",
        specs: ["Spacious desktop", "Built-in storage", "Comfortable seating", "Professional finish"],
      },
      {
        id: "classroom-furniture",
        slug: "classroom-furniture",
        title: "Classroom Accessories",
        subtitle: "Complete Solutions",
        description: "Complete classroom furniture solutions including benches, storage cabinets, bookshelves, and display boards.",
        image: "/assets/gallery-warehouse.jpg",
        specs: ["Modular design", "Space efficient", "Durable materials", "Bulk pricing"],
      },
    ],
  },
];

const fallbackServicesData = [
  {
    id: 1,
    label: "SERVICE 01",
    title: "Paint Manufacturing",
    subtitle: "State-of-the-art production facility",
    description: "Our advanced manufacturing facility produces a comprehensive range of industrial, decorative, and specialty paints. We use cutting-edge technology and premium raw materials to ensure consistent quality and performance.",
    bullets: ["Automated batch processing", "Quality control at every stage", "Custom color matching services"],
    image: "/assets/gallery-manufacturing-facility.jpg",
  },
  {
    id: 2,
    label: "SERVICE 02",
    title: "Metal Fabrication Services",
    subtitle: "Precision engineering for every project",
    description: "Complete metal fabrication services from design to delivery. Our skilled craftsmen and modern equipment deliver high-quality structural steel, gates, railings, and custom industrial equipment.",
    bullets: ["CNC cutting & bending", "Expert welding & assembly", "Surface treatment & finishing"],
    image: "/assets/gallery-manufacturing-facility.jpg",
  },
  {
    id: 3,
    label: "SERVICE 03",
    title: "School Furniture Solutions",
    subtitle: "Complete educational furniture provider",
    description: "End-to-end school furniture solutions from design consultation to bulk manufacturing. We specialize in ergonomic, durable furniture that creates better learning environments for students and teachers.",
    bullets: ["Custom design consultation", "Bulk order manufacturing", "Installation & after-sales support"],
    image: "/assets/gallery-production-line.jpg",
  },
  {
    id: 4,
    label: "SERVICE 04",
    title: "Global Export Services",
    subtitle: "Reliable international shipping",
    description: "We export our premium quality products to markets across Asia, Africa, and the Middle East. Our experienced export team handles all documentation, logistics, and customs clearance for hassle-free delivery.",
    bullets: ["International quality certifications", "Competitive FOB & CIF pricing", "Reliable shipping partnerships"],
    image: "/assets/gallery-warehouse.jpg",
  },
];

const fallbackBrandsData = [
  { id: "1", name: "IndianOil", logo: "/assets/brand-logos/indiaoil%20png.jpg" },
  { id: "2", name: "Ramoji Film City", logo: "/assets/brand-logos/Ramoji%20Film%20City%20logo.png" },
  { id: "3", name: "Prestige Group", logo: "/assets/brand-logos/prestige%20logo.webp" },
  { id: "4", name: "Tech Mahindra", logo: "/assets/brand-logos/Tech%20Mahindra%20logo.jpg" },
  { id: "5", name: "GMR", logo: "/assets/brand-logos/GMR-Group-Logo-Pngsource-RK4JM0FN.png" },
  { id: "6", name: "Tom Tailor", logo: "/assets/brand-logos/tom-tailor-sportswear%20logo.png" },
  { id: "7", name: "NCC Limited", logo: "/assets/brand-logos/ncc%20logo.png" },
  { id: "8", name: "NSL Group", logo: "/assets/brand-logos/NSL%20logo.png" },
  { id: "9", name: "HCL", logo: "/assets/brand-logos/hcl%20logo.png" },
  { id: "10", name: "Alekhya Homes", logo: "/assets/brand-logos/alekhya-homes-2023-logo.png" },
  { id: "11", name: "GVK EMRI", logo: "/assets/brand-logos/gvk-logo.png" },
  { id: "12", name: "NTPC", logo: "/assets/brand-logos/ntpc%20logo.png" },
  { id: "13", name: "Power Grid", logo: "/assets/brand-logos/POWERGRID%20logo.png" },
  { id: "14", name: "Hyundai Glovis", logo: "/assets/brand-logos/Hyundai_Glovis_logo.png" },
  { id: "15", name: "NPCI International", logo: "/assets/brand-logos/NPCI_logo.png" },
  { id: "16", name: "BSCPL Infrastructure", logo: "/assets/brand-logos/bscpl-logo.png" },
  { id: "17", name: "AT&T", logo: "/assets/brand-logos/att-logo-transparent.png" },
  { id: "18", name: "Aparna Constructions", logo: "/assets/brand-logos/aparna%20constructions.png" },
];

const fallbackTestimonialsData = [
  {
    id: 1,
    name: "Neha Singh",
    company: "State Education Board",
    role: "Infrastructure Coordinator",
    rating: 5,
    text: "We partnered with YNM Safety for school furniture manufacturing and bulk exports, and the quality was excellent. Their ability to deliver durable desks and chairs on time makes them a trusted school furniture manufacturer for government institutions.",
    photo: "/assets/testimonials/testimonial-1.png",
    rotation: 1.5,
  },
  {
    id: 2,
    name: "Amit Verma",
    company: "National Highways Infra Ltd.",
    role: "Procurement Head",
    rating: 4,
    text: "YNM Safety is a reliable manufacturer and exporter of hot thermoplastic road marking material and cold plastic paint for large highway projects. Their metal beam crash barriers and W beam crash barrier systems consistently meet international safety and durability standards.",
    photo: "/assets/testimonials/testimonial-2.png",
    rotation: -1.5,
  },
  {
    id: 3,
    name: "Karthik Rao",
    company: "Gulf Traders LLC, UAE",
    role: "Import Director",
    rating: 4,
    text: "YNM Safety is an excellent export partner for road safety products, including cold plastic paint, metal beam crash barriers, and W beam crash barrier systems. Competitive pricing and consistent export timelines make them ideal for Middle East markets.",
    photo: "/assets/testimonials/testimonial-3.png",
    rotation: 1.2,
  },
  {
    id: 4,
    name: "Deepika Joshi",
    company: "African Trade Corp, Nigeria",
    role: "Sourcing Head",
    rating: 4,
    text: "YNM Safety is a dependable exporter of hot thermoplastic road marking paint and retro reflective sign boards for African infrastructure projects. Their manufacturing quality and export packaging meet international compliance requirements.",
    photo: "/assets/testimonials/testimonial-4.jpeg",
    rotation: -1.2,
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    company: "RoadSafe Engineers",
    role: "Highway Safety Consultant",
    rating: 5,
    text: "The hot thermoplastic road marking materials from YNM Safety offer excellent adhesion and long service life. Their retro reflective signages and crash barrier systems significantly improve highway safety compliance.",
    photo: "/assets/testimonials/testimonial-5.jpeg",
    rotation: 1.5,
  },
  {
    id: 6,
    name: "Pooja Mehta",
    company: "EduSpace Furniture Pvt. Ltd.",
    role: "Purchase Manager",
    rating: 5,
    text: "As a school furniture manufacturer and exporter, YNM Safety provides strong, ergonomic desks and chairs for institutional use. Their large-scale manufacturing supports bulk orders without compromising quality.",
    photo: "/assets/testimonials/testimonial-6.jpeg",
    rotation: -1.2,
  },
  {
    id: 7,
    name: "Rahul Deshpande",
    company: "Urban Infra Solutions",
    role: "Design Director",
    rating: 4,
    text: "YNM Safety supplies premium retro reflective signages and road safety products with superior night visibility. Their expertise as a hot thermoplastic road marking manufacturer adds strong value to urban infrastructure projects.",
    photo: "/assets/testimonials/testimonial-7.jpeg",
    rotation: 1.3,
  },
];

export default function Home({ productData, brandsData, testimonialsData, heroData, navLinks, uspData, footerData }) {
  return (
    <>
      <Head>
        <title>Hot Thermoplastic Paint Manufacturers | YNM Safety</title>
        <meta 
          name="description" 
          content="YNM Safety - Leading hot thermoplastic paint manufacturers. We manufacture cold plastic paints, road marking paints, retro-reflective signages, and metal beam crash barriers. ISO certified, exports to 50+ countries. Get quote now!"
        />
        <meta 
          name="keywords" 
          content="hot thermoplastic paint manufacturers, cold plastic paints, cold plastic paint manufacturers, metal beam crash barriers, metal beam crash barrier manufacturers, road signages, retro reflective signages, thermoplastic road marking paint, road marking paint manufacturers, highway safety products, w beam crash barriers, thrie beam crash barriers, road safety signages manufacturers, YNM Safety"
        />
        <link rel="canonical" href="https://www.ynmsafety.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ynmsafety.com/" />
        <meta property="og:title" content="Hot Thermoplastic Paint Manufacturers | YNM Safety" />
        <meta property="og:description" content="YNM Safety - Leading hot thermoplastic paint manufacturers. We manufacture cold plastic paints, road marking paints, retro-reflective signages, and metal beam crash barriers. ISO certified, exports to 50+ countries." />
        <meta property="og:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hot Thermoplastic Paint Manufacturers | YNM Safety" />
        <meta name="twitter:description" content="YNM Safety - Leading hot thermoplastic paint manufacturers. We manufacture cold plastic paints, road marking paints, retro-reflective signages, and metal beam crash barriers." />
        <meta name="twitter:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        
        {/* Schema Markup - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YNM Safety Pan Global Trade Pvt Ltd",
              "alternateName": ["YNM Safety", "Hot Thermoplastic Paint Manufacturers"],
              "url": "https://www.ynmsafety.com",
              "logo": "https://www.ynmsafety.com/assets/logo-navbar.jpg",
              "description": "YNM Safety is a leading hot thermoplastic paint manufacturer. We manufacture cold plastic paints, road marking paints, metal beam crash barriers, and retro-reflective signages for road safety. ISO certified with exports to 50+ countries.",
              "foundingDate": "2010",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "minValue": 50,
                "maxValue": 200
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9100009638",
                  "contactType": "sales",
                  "areaServed": ["IN", "AE", "NG", "KE", "ZA", "GH", "TZ", "UG"],
                  "availableLanguage": ["English", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9100009638",
                  "contactType": "customer service",
                  "areaServed": "Worldwide"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sy No 74, Kothur Village, Shabad Mandal",
                "addressLocality": "Rangareddy",
                "addressRegion": "Telangana",
                "postalCode": "509217",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ynmsafety",
                "https://www.facebook.com/ynmsafety"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Road Safety Products",
                "itemListElement": [
                  {
                    "@type": "OfferCatalog",
                    "name": "Thermoplastic Paints",
                    "itemListElement": [
                      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Hot Thermoplastic Road Marking Paint"}},
                      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Cold Plastic Paint"}}
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Crash Barriers",
                    "itemListElement": [
                      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "W Beam Metal Crash Barrier"}},
                      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Thrie Beam Crash Barrier"}}
                    ]
                  },
                  {
                    "@type": "OfferCatalog", 
                    "name": "Road Signages",
                    "itemListElement": [
                      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Retro Reflective Signages"}},
                      {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Cantilever Signages"}}
                    ]
                  }
                ]
              }
            })
          }}
        />
        
        {/* Schema Markup - LocalBusiness/Manufacturer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Manufacturer"],
              "@id": "https://www.ynmsafety.com/#business",
              "name": "YNM Safety Pan Global Trade Pvt Ltd",
              "image": "https://www.ynmsafety.com/assets/logo-navbar.jpg",
              "url": "https://www.ynmsafety.com",
              "telephone": "+91-9100009638",
              "priceRange": "$$",
              "description": "Hot thermoplastic paint manufacturers. We manufacture cold plastic paints, metal beam crash barriers, and road safety signages.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sy No 74, Kothur Village, Shabad Mandal",
                "addressLocality": "Rangareddy",
                "addressRegion": "Telangana",
                "postalCode": "509217",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.0385,
                "longitude": 78.0824
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": ["India", "Middle East", "Africa", "Southeast Asia"],
              "knowsAbout": ["Hot Thermoplastic Paint Manufacturing", "Cold Plastic Paint Production", "Metal Beam Crash Barriers", "Road Safety Signages", "Highway Safety Products"]
            })
          }}
        />
        
        {/* Schema Markup - WebSite with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "YNM Safety - Hot Thermoplastic Paint Manufacturers",
              "alternateName": "YNM Safety",
              "url": "https://www.ynmsafety.com",
              "description": "Leading hot thermoplastic paint manufacturers. Cold plastic paints, metal beam crash barriers, and road signages.",
              "publisher": {
                "@type": "Organization",
                "name": "YNM Safety Pan Global Trade Pvt Ltd"
              }
            })
          }}
        />
        
        {/* Schema Markup - Product (Hot Thermoplastic Paint) for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Hot Thermoplastic Road Marking Paint",
              "description": "Premium hot thermoplastic road marking paint for highways, expressways, and city roads. High durability, retro-reflective glass beads, weather resistant. MoRTH and IRC compliant.",
              "brand": {
                "@type": "Brand",
                "name": "YNM Safety"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "YNM Safety Pan Global Trade Pvt Ltd"
              },
              "category": "Road Marking Paint",
              "material": "Thermoplastic resin with glass beads",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR",
                "priceValidUntil": "2027-12-31",
                "seller": {
                  "@type": "Organization",
                  "name": "YNM Safety Pan Global Trade Pvt Ltd"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "89",
                "bestRating": "5"
              }
            })
          }}
        />
        
        {/* Schema Markup - FAQPage for Featured Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who are the best hot thermoplastic paint manufacturers?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YNM Safety is one of the leading hot thermoplastic paint manufacturers, with ISO certification and exports to 50+ countries. We manufacture high-quality thermoplastic road marking paints compliant with MoRTH, IRC, and IS standards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between hot thermoplastic paint and cold plastic paint?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hot thermoplastic paint requires heating to 180-200°C before application and offers longer durability. Cold plastic paint is applied at ambient temperature and is suitable for areas with lower traffic. YNM Safety manufactures both types for different road marking requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of metal beam crash barriers does YNM Safety manufacture?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YNM Safety manufactures W-Beam crash barriers, Thrie-Beam crash barriers, Double W-Beam crash barriers, and Roller Beam crash barriers. All our metal beam crash barriers meet MORTH and international safety standards."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What road signages does YNM Safety provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YNM Safety manufactures retro-reflective signages, gantry signages, cantilever signages, and various traffic signboards. Our signages comply with IRC guidelines and are used on highways, expressways, and city roads across India and internationally."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Preload LCP image for faster rendering - WebP for better performance */}
        <link rel="preload" as="image" href="/assets/hero-image.webp" type="image/webp" fetchPriority="high" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://flagcdn.com" />
      </Head>
      <Hero heroData={heroData} navLinks={navLinks} />
      <USPSection uspData={uspData} />
      <ProductsSection productData={productData} />
      <BrandsSection brandsData={brandsData} />
      <DirectorSection directorData={directorData} />
      <TestimonialsSection testimonialsData={testimonialsData} />
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const productData = fallbackProductData;
  const brandsData = fallbackBrandsData;
  const testimonialsData = fallbackTestimonialsData;
  const heroData = null;
  const navLinks = null;
  const uspData = null;
  const footerData = null;

  return {
    props: {
      productData,
      brandsData,
      testimonialsData,
      heroData,
      navLinks,
      uspData,
      footerData,
    },
  };
}
