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
        <title>Best Hot Thermoplastic Paint Manufacturers in Hyderabad India | YNM Safety - Premium Cold Plastic Paint & Metal Beam Crash Barrier Exporters Telangana</title>
        <meta 
          name="description" 
          content="YNM Safety - Best hot thermoplastic paint manufacturers in Hyderabad, Telangana, India. We manufacture premium cold plastic paint, thermoplastic road marking paint, metal beam crash barriers, W beam barriers & retro-reflective signages. ISO certified hot thermoplastic paint manufacturers in Hyderabad exporting road safety products to 50+ countries. Top quality road marking paint suppliers in Telangana. Get quote now!"
        />
        <meta 
          name="keywords" 
          content="best hot thermoplastic paint manufacturers in Hyderabad, hot thermoplastic paint manufacturers in India, hot thermoplastic paint manufacturers in Telangana, hot thermoplastic paint suppliers Hyderabad, YNM, YNM Safety, cold plastic paint manufacturers Hyderabad, cold plastic paint manufacturers in India, metal beam crash barrier manufacturers Hyderabad, metal beam crash barrier manufacturers India, road safety products Hyderabad, thermoplastic road marking paint Hyderabad, road marking paint manufacturers Telangana, highway safety products India, w beam crash barriers Hyderabad, thrie beam crash barriers, retro reflective signages Hyderabad, road signages manufacturers India, thermoplastic paint exporters Hyderabad, cold plastic paint exporters India, crash barrier manufacturers Telangana, road safety equipment Hyderabad"
        />
        <link rel="canonical" href="https://www.ynmsafety.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ynmsafety.com/" />
        <meta property="og:title" content="Best Hot Thermoplastic Paint Manufacturers in Hyderabad India | YNM Safety - Premium Cold Plastic Paint & Metal Beam Crash Barrier Telangana" />
        <meta property="og:description" content="YNM Safety - Best hot thermoplastic paint manufacturers in Hyderabad, Telangana, India. We manufacture premium cold plastic paint, thermoplastic road marking paint, metal beam crash barriers & road safety products. ISO certified, exporting to 50+ countries." />
        <meta property="og:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:site_name" content="YNM Safety Pan Global Trade Pvt Ltd" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Hot Thermoplastic Paint Manufacturers in Hyderabad India | YNM Safety - Premium Cold Plastic Paint & Metal Beam Crash Barrier Telangana" />
        <meta name="twitter:description" content="YNM Safety - Best hot thermoplastic paint manufacturers in Hyderabad, Telangana, India. Premium hot thermoplastic paint, cold plastic paint, metal beam crash barriers & road safety products. ISO certified, exporting to 50+ countries." />
        <meta name="twitter:image" content="https://www.ynmsafety.com/assets/logo-navbar.jpg" />
        
        {/* Schema Markup - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "YNM Safety Pan Global Trade Pvt Ltd",
              "alternateName": ["YNM Safety", "YNM", "Hot Thermoplastic Paint Manufacturers", "Cold Plastic Paint Manufacturers", "Metal Beam Crash Barrier Manufacturers"],
              "url": "https://www.ynmsafety.com",
              "logo": "https://www.ynmsafety.com/assets/logo-navbar.jpg",
              "description": "YNM Safety is the best hot thermoplastic paint manufacturer in Hyderabad, Telangana, India. We manufacture premium cold plastic paint, thermoplastic road marking paint, metal beam crash barriers, W beam crash barriers, and retro-reflective signages for road safety. ISO certified hot thermoplastic paint manufacturers in Hyderabad with exports to 50+ countries.",
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
                      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hot Thermoplastic Road Marking Paint", "description": "Premium thermoplastic road marking paint for highways"}},
                      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cold Plastic Paint", "description": "MMA cold plastic road marking paint for urban roads"}}
                    ]
                  },
                  {
                    "@type": "OfferCatalog",
                    "name": "Crash Barriers",
                    "itemListElement": [
                      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "W Beam Metal Crash Barrier", "description": "Highway safety W-beam crash barriers"}},
                      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Thrie Beam Crash Barrier", "description": "Heavy-duty thrie beam crash barriers"}}
                    ]
                  },
                  {
                    "@type": "OfferCatalog", 
                    "name": "Road Signages",
                    "itemListElement": [
                      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retro Reflective Signages", "description": "High-visibility retro-reflective road signages"}},
                      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cantilever Signages", "description": "Cantilever signages for highway guidance"}}
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
              "knowsAbout": ["Best Hot Thermoplastic Paint Manufacturers in Hyderabad", "Hot Thermoplastic Paint Manufacturers in India", "Hot Thermoplastic Paint Manufacturing Hyderabad", "Cold Plastic Paint Manufacturers Hyderabad", "Cold Plastic Paint Manufacturers in India", "Metal Beam Crash Barrier Manufacturers Hyderabad", "Metal Beam Crash Barriers Telangana", "Road Safety Products Hyderabad", "Road Safety Equipment India", "Thermoplastic Road Marking Paint Hyderabad", "W Beam Crash Barriers Manufacturers India", "Retro Reflective Signages Hyderabad", "Highway Safety Products Telangana", "Road Marking Paint Suppliers Hyderabad", "YNM Safety", "YNM"]
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
              "name": "YNM Safety - Hot Thermoplastic Paint Manufacturers India",
              "alternateName": "YNM Safety",
              "url": "https://www.ynmsafety.com",
              "description": "YNM Safety - Leading hot thermoplastic paint manufacturers in India. We manufacture cold plastic paint, metal beam crash barriers, road safety products and retro reflective signages.",
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
              "name": "Hot Thermoplastic Road Marking Paint by YNM Safety",
              "description": "YNM Safety manufactures premium hot thermoplastic road marking paint for highways, expressways, and city roads. Our hot thermoplastic paint offers high durability, retro-reflective glass beads, weather resistance, and excellent road safety performance. MoRTH and IRC compliant thermoplastic paint from leading manufacturers in India.",
              "image": "https://www.ynmsafety.com/assets/hot thermoplastci ynm safety.png",
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
                "url": "https://www.ynmsafety.com/products/hot-thermoplastic-road-marking-paint",
                "availability": "https://schema.org/InStock",
                "price": "85",
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
                  "name": "Who are the best hot thermoplastic paint manufacturers in India?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YNM Safety is one of the leading hot thermoplastic paint manufacturers in India, with ISO certification and exports to 50+ countries. We manufacture high-quality hot thermoplastic paint, cold plastic paint, and thermoplastic road marking paints compliant with MoRTH, IRC, and IS standards. YNM Safety provides road safety products including metal beam crash barriers to clients worldwide."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between hot thermoplastic paint and cold plastic paint?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hot thermoplastic paint requires heating to 180-200°C before application and offers longer durability with superior road safety performance. Cold plastic paint is applied at ambient temperature and is suitable for areas with lower traffic. YNM Safety, as leading hot thermoplastic paint manufacturers, manufactures both hot thermoplastic paint and cold plastic paint types for different road marking and highway safety requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What types of metal beam crash barriers does YNM Safety manufacture?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "YNM Safety, leading metal beam crash barrier manufacturers, manufactures W-Beam crash barriers, Thrie-Beam crash barriers, Double W-Beam crash barriers, and Roller Beam crash barriers. All our metal beam crash barrier products meet MORTH and international road safety standards. YNM manufactures complete road safety solutions including hot thermoplastic paint and cold plastic paint."
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
