// All products organized under Manufacturing (all products are manufactured and exported)
export const productsData = {
  manufacturing: {
    title: "What We Manufacture",
    description: "Premium quality products manufactured in-house with strict quality control. All our products are exported to 15+ countries worldwide.",
    icon: "🏭",
    categories: {
      paints: {
        title: "Paints",
        description: "High-quality industrial and decorative paints for every surface. Durable, vibrant, and eco-friendly formulations for long-lasting protection.",
        icon: "🎨",
        products: [
          {
            id: "p1",
            name: "Hot Thermoplastic Paint",
            desc: "Premium hot thermoplastic road marking paint for highways and roads. Excellent durability and retro-reflective properties.",
            image: "/assets/product-industrial-paint.png",
            specs: ["High durability", "Retro-reflective", "Weather resistant", "Long service life"]
          },
          {
            id: "p2",
            name: "Cold Plastic Paint",
            desc: "High-performance cold plastic road marking paint. Easy application with superior adhesion and visibility.",
            image: "/assets/product-exterior-weather-coat.png",
            specs: ["Easy application", "Superior adhesion", "High visibility", "Durable finish"]
          },
          {
            id: "p3",
            name: "Water Base Paint",
            desc: "Eco-friendly water-based paint for road markings and traffic applications. Low VOC and environmentally safe.",
            image: "/assets/product-epoxy-floor-coating.png",
            specs: ["Eco-friendly", "Low VOC", "Water-based", "Environmentally safe"]
          }
        ]
      },
      "road-safety-furniture": {
        title: "Road Safety Furniture",
        description: "Essential road safety equipment including guardrails, bollards, and traffic barriers designed for maximum durability and safety compliance.",
        icon: "🛣️",
        products: []
      },
      "crash-barriers": {
        title: "Metal Beam Crash Barriers",
        description: "High-strength metal beam crash barriers and W-beam guardrails for highways and expressways. Engineered for maximum impact resistance.",
        icon: "🛡️",
        products: [
          {
            id: "cb1",
            name: "W Beam",
            desc: "Standard W-beam crash barriers for highways and expressways. Maximum impact resistance and safety compliance.",
            image: "/assets/product-structural-steel.png",
            specs: ["W-beam profile", "Galvanized finish", "IS 14687 certified", "High tensile strength"]
          },
          {
            id: "cb2",
            name: "Thrie Beam",
            desc: "Heavy-duty thrie-beam guardrails for high-speed highways and bridges. Enhanced strength and durability.",
            image: "/assets/product-structural-steel.png",
            specs: ["Thrie-beam profile", "Extra strength", "Bridge applications", "Long span capability"]
          },
          {
            id: "cb3",
            name: "Double W Beam",
            desc: "Double W-beam crash barrier system for maximum protection on high-risk road sections.",
            image: "/assets/product-structural-steel.png",
            specs: ["Double W-beam design", "Maximum protection", "Heavy-duty construction", "IS certified"]
          },
          {
            id: "cb4",
            name: "Roller Crash Barrier",
            desc: "Advanced roller crash barrier system with energy-absorbing rollers for enhanced safety.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Energy absorbing", "Roller system", "Enhanced safety", "Easy installation"]
          },
          {
            id: "cb5",
            name: "Attenuator",
            desc: "Crash attenuator systems for terminal end treatments and impact absorption.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Impact absorption", "Terminal treatment", "Safety compliance", "Durable design"]
          }
        ]
      },
      signages: {
        title: "Signages",
        description: "Retro-reflective sign boards and traffic signages for roads and highways. High visibility and weather-resistant for optimal safety.",
        icon: "🚦",
        products: [
          {
            id: "sg1",
            name: "Gantry",
            desc: "Overhead gantry signages for highways and expressways. High-visibility overhead traffic guidance systems.",
            image: "/assets/product-exterior-weather-coat.png",
            specs: ["Overhead installation", "High visibility", "Weather resistant", "Durable construction"]
          },
          {
            id: "sg2",
            name: "Cantilever",
            desc: "Cantilever signages mounted on single support posts. Ideal for road sides and median installations.",
            image: "/assets/product-exterior-weather-coat.png",
            specs: ["Single post support", "IRR 2000 compliant", "Multiple sizes", "Easy installation"]
          },
          {
            id: "sg3",
            name: "Canopy",
            desc: "Canopy signages for covered areas and overhead installations. Weather-protected signage solutions.",
            image: "/assets/product-exterior-weather-coat.png",
            specs: ["Weather protected", "High visibility", "Custom sizes", "Long service life"]
          },
          {
            id: "sg4",
            name: "Informatory Signages",
            desc: "Informatory signages providing directions, distances, and important information to road users.",
            image: "/assets/product-exterior-weather-coat.png",
            specs: ["Informational", "Retro-reflective", "Weatherproof", "IS certified"]
          }
        ]
      },
      fabrication: {
        title: "Fabrication",
        description: "Custom steel and metal fabrication solutions. From structural components to precision-engineered parts for all industrial needs.",
        icon: "⚙️",
        products: []
      },
      furniture: {
        title: "School Furniture",
        description: "Ergonomic and durable furniture for educational institutions. Desks, chairs, and complete classroom solutions built to last.",
        icon: "🪑",
        products: []
      }
    }
  }
};

// Helper function to get all products with their IDs for routing
export function getAllProducts() {
  const allProducts = [];
  Object.values(productsData.manufacturing.categories).forEach((category) => {
    category.products.forEach((product) => {
      allProducts.push(product);
    });
  });
  return allProducts;
}

// Helper function to get product by ID
export function getProductById(id) {
  const allProducts = getAllProducts();
  return allProducts.find((p) => p.id === id);
}
