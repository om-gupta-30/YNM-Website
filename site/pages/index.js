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
    name: "Amit Verma",
    company: "National Highways Infra Ltd.",
    role: "Procurement Head",
    rating: 4,
    text: "YNM Safety is a reliable manufacturer and exporter of hot thermoplastic road marking material and cold plastic paint for large highway projects. Their metal beam crash barriers and W beam crash barrier systems consistently meet international safety and durability standards.",
    photo: "/assets/team-member-01.png",
    rotation: 1.5,
  },
  {
    id: 2,
    name: "Neha Singh",
    company: "State Education Board",
    role: "Infrastructure Coordinator",
    rating: 5,
    text: "We partnered with YNM Safety for school furniture manufacturing and bulk exports, and the quality was excellent. Their ability to deliver durable desks and chairs on time makes them a trusted school furniture manufacturer for government institutions.",
    photo: "/assets/team-member-02.png",
    rotation: -1.5,
  },
  {
    id: 3,
    name: "Rahul Deshpande",
    company: "Urban Infra Solutions",
    role: "Design Director",
    rating: 4,
    text: "YNM Safety supplies premium retro reflective signages and road safety products with superior night visibility. Their expertise as a hot thermoplastic road marking manufacturer adds strong value to urban infrastructure projects.",
    photo: "/assets/team-member-03.png",
    rotation: 1.2,
  },
  {
    id: 4,
    name: "Karthik Rao",
    company: "Gulf Traders LLC, UAE",
    role: "Import Director",
    rating: 4,
    text: "YNM Safety is an excellent export partner for road safety products, including cold plastic paint, metal beam crash barriers, and W beam crash barrier systems. Competitive pricing and consistent export timelines make them ideal for Middle East markets.",
    photo: "/assets/team-member-04.png",
    rotation: -1.2,
  },
  {
    id: 5,
    name: "Deepika Joshi",
    company: "African Trade Corp, Nigeria",
    role: "Sourcing Head",
    rating: 4,
    text: "YNM Safety is a dependable exporter of hot thermoplastic road marking paint and retro reflective sign boards for African infrastructure projects. Their manufacturing quality and export packaging meet international compliance requirements.",
    photo: "/assets/team-member-06.png",
    rotation: 1.5,
  },
  {
    id: 6,
    name: "Suresh Iyer",
    company: "Smart City Development Authority",
    role: "Project Manager",
    rating: 5,
    text: "We used cold plastic road marking paint and reflective signages from YNM Safety across multiple smart city zones. Their strength as a complete road safety products manufacturer helped ensure smooth project execution.",
    photo: "/assets/team-member-07.png",
    rotation: -1.2,
  },
  {
    id: 7,
    name: "Mohammed Faisal",
    company: "Middle East Infra Projects",
    role: "Operations Head",
    rating: 4,
    text: "YNM Safety delivers high-quality metal beam crash barriers and W beam crash barrier manufacturing solutions for expressway developments. Their export-ready production and engineering standards are highly reliable.",
    photo: "/assets/team-member-05.png",
    rotation: 1.3,
  },
  {
    id: 8,
    name: "Pooja Mehta",
    company: "EduSpace Furniture Pvt. Ltd.",
    role: "Purchase Manager",
    rating: 5,
    text: "As a school furniture manufacturer and exporter, YNM Safety provides strong, ergonomic desks and chairs for institutional use. Their large-scale manufacturing supports bulk orders without compromising quality.",
    photo: "/assets/team-member-08.png",
    rotation: -1.5,
  },
  {
    id: 9,
    name: "Vikram Malhotra",
    company: "RoadSafe Engineers",
    role: "Highway Safety Consultant",
    rating: 5,
    text: "The hot thermoplastic road marking materials from YNM Safety offer excellent adhesion and long service life. Their retro reflective signages and crash barrier systems significantly improve highway safety compliance.",
    photo: "/assets/team-member-09.png",
    rotation: 1.2,
  },
  {
    id: 10,
    name: "Anil Kumar Reddy",
    company: "State Road Development Corporation",
    role: "Chief Engineer",
    rating: 4,
    text: "YNM Safety is a trusted manufacturer and exporter of road safety products, from cold plastic paint to metal beam crash barriers. Their technical expertise and quality control standards support large-scale infrastructure projects.",
    photo: "/assets/team-member-10.png",
    rotation: -1.3,
  },
];

export default function Home({ productData, brandsData, testimonialsData, heroData, navLinks, uspData, footerData }) {
  return (
    <>
      <Head>
        <title>YNM Safety Pan Global Trade Pvt Ltd | Manufacturing & Export</title>
        <meta 
          name="description" 
          content="YNM Safety Pan Global Trade Pvt Ltd - Leading manufacturer and exporter of premium paints, metal fabrications, and school furniture. Quality products for global markets."
        />
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
