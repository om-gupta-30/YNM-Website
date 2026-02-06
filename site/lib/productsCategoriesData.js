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
            slug: "hot-thermoplastic-road-marking-paint-manufactures",
            name: "Hot Thermoplastic Road Marking Paint",
            shortDesc: "High-performance thermoplastic road marking paint manufactures for highways, expressways & urban road safety.",
            desc: "Premium hot thermoplastic road marking paint for highways and roads. Excellent durability and retro-reflective properties.",
            image: "/assets/hot thermoplastci ynm safety.png",
            heroImage: "/assets/hot thermoplastci ynm safety.png",
            specs: ["High durability", "Retro-reflective", "Weather resistant", "Long service life"],
            
            // SEO Meta Information
            meta: {
              title: "Hot Thermoplastic Road Marking Paint Manufactures | YNM Safety",
              description: "Hot thermoplastic road marking paint manufactures offering durable and high-visibility solutions. YNM Safety manufactures thermoplastic paint for highways, expressways & city roads.",
              slug: "/hot-thermoplastic-road-marking-paint-manufactures"
            },
            
            // Product Overview
            overview: "YNM Safety is among the reliable hot thermoplastic road marking paint manufactures, delivering premium-quality thermoplastic paints designed for long-lasting and high-visibility road markings. We manufacture thermoplastic road marking paints widely used on highways, expressways, city roads, junctions, pedestrian crossings, and parking areas.\n\nOur hot thermoplastic paints are produced using high-grade resins, pigments, fillers, and reflective glass beads. YNM Safety manufactures thermoplastic road marking paint that ensures excellent adhesion, fast setting, and superior night-time reflectivity.\n\nAs one of the trusted thermoplastic paint manufactures, YNM Safety follows strict quality control systems and manufactures products compliant with MoRTH, IRC, and IS standards for infrastructure and road safety projects.",
            detailedDescription: "YNM Safety is among the reliable hot thermoplastic road marking paint manufactures, delivering premium-quality thermoplastic paints designed for long-lasting and high-visibility road markings. We manufacture thermoplastic road marking paints widely used on highways, expressways, city roads, junctions, pedestrian crossings, and parking areas.\n\nOur hot thermoplastic paints are produced using high-grade resins, pigments, fillers, and reflective glass beads. YNM Safety manufactures thermoplastic road marking paint that ensures excellent adhesion, fast setting, and superior night-time reflectivity.\n\nAs one of the trusted thermoplastic paint manufactures, YNM Safety follows strict quality control systems and manufactures products compliant with MoRTH, IRC, and IS standards for infrastructure and road safety projects.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "Hot Thermoplastic Road Marking Paint" },
              { label: "Application Method", value: "Hot-applied" },
              { label: "Softening Point", value: "≥ 102°C" },
              { label: "Glass Beads Content", value: "20–30%" },
              { label: "Available Colors", value: "White / Yellow" },
              { label: "Drying Time", value: "2–5 minutes" },
              { label: "Application Surface", value: "Asphalt & Concrete" },
              { label: "Compliance", value: "MoRTH, IRC, IS Standards" }
            ],
            
            // Detailed Specifications for spec table
            detailedSpecs: [
              {
                label: "Country of Origin",
                value: "India",
                icon: "location"
              },
              {
                label: "Manufacturing Location",
                value: "Hyderabad",
                icon: "location"
              },
              {
                label: "Packing Type",
                value: "25 kg bag / export-standard packing",
                icon: "package"
              },
              {
                label: "Shelf Life",
                value: "12 months",
                icon: "warranty"
              },
              {
                label: "Quality Standards",
                value: "IS 164, MoRTH 803, BS 3262, AASHTO M249, ISO 9001:2015",
                icon: "standard"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "Project based only",
                icon: "package"
              },
              {
                label: "HS Code",
                value: "32089090",
                icon: "standard"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: Hot Thermoplastic Road Marking Paint",
                "Application Method: Hot-applied",
                "Softening Point: ≥ 102°C",
                "Glass Beads Content: 20–30%",
                "Available Colors: White / Yellow",
                "Drying Time: 2–5 minutes",
                "Application Surface: Asphalt & Concrete",
                "Compliance: MoRTH, IRC, IS Standards",
                "HS Code: 32089090"
              ],
              keyFeatures: [
                "High-visibility thermoplastic road marking paint",
                "Fast-setting hot applied formulation",
                "Strong adhesion on asphalt & concrete",
                "Reflective glass beads for night safety",
                "Weather and traffic resistant performance",
                "Long-lasting & low maintenance solution"
              ],
              advantages: [
                "Improves road visibility and lane discipline",
                "Enhances night-time and wet-weather driving safety",
                "Cost-effective road marking solution",
                "Trusted thermoplastic paint manufactures – YNM Safety",
                "Suitable for bulk supply and export requirements",
                "Manufactures as per government road safety standards"
              ]
            },
            
            features: [
              "High-visibility thermoplastic road marking paint",
              "Fast-setting hot applied formulation",
              "Strong adhesion on asphalt & concrete",
              "Reflective glass beads for night safety",
              "Weather and traffic resistant performance",
              "Long-lasting & low maintenance solution"
            ],
            
            advantages: [
              "Improves road visibility and lane discipline",
              "Enhances night-time and wet-weather driving safety",
              "Cost-effective road marking solution",
              "Trusted thermoplastic paint manufactures – YNM Safety",
              "Suitable for bulk supply and export requirements",
              "Manufactures as per government road safety standards"
            ],
            
            // Application Areas with images and hover effects
            applicationAreas: [
              {
                id: "app1",
                title: "Highways & Expressways",
                description: "YNM Hot Thermoplastic Paints deliver durable and high-visibility road markings for highways and expressways.",
                image: "/assets/ynm safety hot thermoplastic highway and expressways marking paints.png",
                details: "YNM Safety is a trusted name among hot thermoplastic paints manufactures for long-lasting highway road markings. YNM thermoplastic paints provide excellent adhesion, skid resistance, and night-time visibility under heavy traffic."
              },
              {
                id: "app2",
                title: "City Roads & Streets",
                description: "YNM thermoplastic paints ensure clear and long-lasting markings for city roads and streets.",
                image: "/assets/YNM Safety hot thermoplastic street and city roads marking paints.jpeg",
                details: "YNM Safety manufactures high-quality YNM hot thermoplastic paints for urban road applications. These thermoplastic paints improve lane discipline, traffic flow, and visibility in busy city environments."
              },
              {
                id: "app3",
                title: "Pedestrian Crossings",
                description: "YNM hot thermoplastic paints enhance visibility and safety at pedestrian crossings.",
                image: "/assets/ynm safety hot thermoplastic pedestian crossings marking paints.jpeg",
                details: "YNM Safety, one of the leading hot thermoplastic paints manufactures, supplies durable road marking solutions for pedestrian crossings. YNM thermoplastic paints offer reflective and anti-skid surfaces for safer pedestrian movement."
              },
              {
                id: "app4",
                title: "Parking Areas",
                description: "YNM thermoplastic paints provide durable and organized parking area markings.",
                image: "/assets/ynm safety hot thermoplastic parking areas marking .jpeg",
                details: "YNM hot thermoplastic paints are widely used for parking bay lines, arrows, and symbols. Manufactured by YNM Safety, these thermoplastic paints resist abrasion and maintain long-term visibility."
              },
              {
                id: "app5",
                title: "Industrial Roads & Runways",
                description: "YNM thermoplastic paints deliver heavy-duty performance for industrial roads and runways.",
                image: "/assets/ynm safety hot thermoplastic runway marking paints.jpeg",
                details: "YNM Safety is among the reliable hot thermoplastic paints manufactures for industrial and runway applications. YNM hot thermoplastic paints offer superior durability, chemical resistance, and performance under heavy vehicle loads."
              },
              {
                id: "app6",
                title: "Zebra Crossings & Junctions",
                description: "YNM thermoplastic paints ensure bold and highly visible markings at junctions and zebra crossings.",
                image: "/assets/ynm safety hot thermoplastic zebra crossing & junctions marking paints.jpeg",
                details: "YNM Safety manufactures YNM hot thermoplastic paints designed for critical traffic control areas. These thermoplastic paints improve road safety with thick, reflective markings and long service life."
              }
            ],
            
            applications: [
              {
                title: "Highways & Expressways",
                short: "YNM Hot Thermoplastic Paints deliver durable and high-visibility road markings for highways and expressways.",
                hover: "YNM Safety is a trusted name among hot thermoplastic paints manufactures for long-lasting highway road markings. YNM thermoplastic paints provide excellent adhesion, skid resistance, and night-time visibility under heavy traffic.",
                image: "/assets/ynm safety hot thermoplastic highway and expressways marking paints.png"
              },
              {
                title: "City Roads & Streets",
                short: "YNM thermoplastic paints ensure clear and long-lasting markings for city roads and streets.",
                hover: "YNM Safety manufactures high-quality YNM hot thermoplastic paints for urban road applications. These thermoplastic paints improve lane discipline, traffic flow, and visibility in busy city environments.",
                image: "/assets/YNM Safety hot thermoplastic street and city roads marking paints.jpeg"
              },
              {
                title: "Pedestrian Crossings",
                short: "YNM hot thermoplastic paints enhance visibility and safety at pedestrian crossings.",
                hover: "YNM Safety, one of the leading hot thermoplastic paints manufactures, supplies durable road marking solutions for pedestrian crossings. YNM thermoplastic paints offer reflective and anti-skid surfaces for safer pedestrian movement.",
                image: "/assets/ynm safety hot thermoplastic pedestian crossings marking paints.jpeg"
              },
              {
                title: "Parking Areas",
                short: "YNM thermoplastic paints provide durable and organized parking area markings.",
                hover: "YNM hot thermoplastic paints are widely used for parking bay lines, arrows, and symbols. Manufactured by YNM Safety, these thermoplastic paints resist abrasion and maintain long-term visibility.",
                image: "/assets/ynm safety hot thermoplastic parking areas marking .jpeg"
              },
              {
                title: "Industrial Roads & Runways",
                short: "YNM thermoplastic paints deliver heavy-duty performance for industrial roads and runways.",
                hover: "YNM Safety is among the reliable hot thermoplastic paints manufactures for industrial and runway applications. YNM hot thermoplastic paints offer superior durability, chemical resistance, and performance under heavy vehicle loads.",
                image: "/assets/ynm safety hot thermoplastic runway marking paints.jpeg"
              },
              {
                title: "Zebra Crossings & Junctions",
                short: "YNM thermoplastic paints ensure bold and highly visible markings at junctions and zebra crossings.",
                hover: "YNM Safety manufactures YNM hot thermoplastic paints designed for critical traffic control areas. These thermoplastic paints improve road safety with thick, reflective markings and long service life.",
                image: "/assets/ynm safety hot thermoplastic zebra crossing & junctions marking paints.jpeg"
              }
            ],
            
            // Customer Success Stories / Projects
            projects: [
              {
                id: "proj1",
                title: "Navayuga Udupi Toll way Pvt. Ltd",
                client: "Navayuga Udupi Toll way Pvt. Ltd",
                location: "Udupi, Karnataka",
                description: "Supplied hot thermoplastic road marking paint for highway road marking project. Our thermoplastic paints provided excellent durability and visibility for this major infrastructure project.",
                quantity: "45,000 sq mtrs",
                year: "2024",
                highlight: "100%",
                highlightLabel: "On-Time Delivery",
                logo: "/assets/ynm safety manufactures of gantry signages.png"
              },
              {
                id: "proj2",
                title: "GVPR Engineers Ltd",
                client: "GVPR Engineers Ltd",
                location: "Hyderabad, Telangana",
                description: "Delivered hot thermoplastic paint for road marking applications. YNM Safety's thermoplastic paints ensured long-lasting and high-visibility markings for urban road infrastructure.",
                quantity: "20,000 sq mtrs",
                year: "2024",
                highlight: "Premium",
                highlightLabel: "Quality Grade",
                logo: "/assets/gvp.jpg"
              },
              {
                id: "proj3",
                title: "GMR Highway Ltd",
                client: "GMR Highway Ltd",
                location: "Hyderabad, Telangana",
                description: "Supplied premium hot thermoplastic road marking paint for highway project. The paint provided superior adhesion, fast setting, and excellent night-time reflectivity.",
                quantity: "69,903 sq mtrs",
                year: "2024",
                highlight: "Zero",
                highlightLabel: "Defects",
                logo: "/assets/gmr logoo.jpg"
              }
            ],
            
            // Market Growth Information
            marketGrowth: {
              title: "Hot Thermoplastic Road Marking Paint Market Growth | YNM Safety",
              description: "The hot thermoplastic road marking paint market is expanding due to growing investments in road infrastructure and traffic safety management. Contractors increasingly prefer thermoplastic paints for their durability and reflectivity.\n\nYNM Safety manufactures thermoplastic road marking paints that support long-term performance and modern road safety requirements across various traffic environments.",
              cagr: "5-7%",
              growthFactors: [
                "Durability and Resistance",
                "Eco-Friendly and Sustainability",
                "Industrial and Automotive Applications",
                "Cost-Effectiveness",
                "Advances in Coating Technologies",
                "Increased Demand for Road Marking"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$1.2B",
                projectedMarketSize: "$1.8B",
                currentYear: "2024",
                projectedYear: "2030",
                highwayKmGlobal: "65M+",
                annualInstallations: "50,000+",
                roadsafetySpending: "$180B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "Asia Pacific", value: 38, color: "#74060D" },
                { region: "North America", value: 22, color: "#9A1B2E" },
                { region: "Europe", value: 20, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 12, color: "#D4A853" },
                { region: "Latin America", value: 8, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2021", value: 0.9 },
                { year: "2022", value: 1.0 },
                { year: "2023", value: 1.1 },
                { year: "2024", value: 1.2 },
                { year: "2025", value: 1.35 },
                { year: "2026", value: 1.5 }
              ]
            },
            
            // Global Availability - Structured by Region
            globalAvailability: {
              regions: [
                {
                  name: "North America",
                  countries: ["United States", "Canada", "Mexico"]
                },
                {
                  name: "Europe",
                  countries: ["Germany", "United Kingdom", "France", "Italy", "Spain", "Netherlands", "Sweden", "Poland", "Russia", "Belgium"]
                },
                {
                  name: "Asia-Pacific",
                  countries: ["China", "India", "Japan", "South Korea", "Australia", "Singapore", "Thailand", "Indonesia", "Malaysia", "Vietnam"]
                },
                {
                  name: "Latin America",
                  countries: ["Brazil", "Argentina", "Chile", "Colombia", "Peru"]
                },
                {
                  name: "Middle East",
                  countries: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Egypt"]
                },
                {
                  name: "Africa",
                  countries: ["South Africa", "Nigeria", "Kenya", "Egypt", "Algeria", "Ghana", "Tanzania"]
                }
              ]
            },
            
            // Manufacturing Process - 9 Steps
            manufacturingProcessIntro: "YNM Safety manufactures hot thermoplastic paints through a controlled, quality-driven process to ensure excellent durability, adhesion, reflectivity, and compliance with road safety standards.",
            manufacturingProcess: [
              {
                step: "01",
                title: "Raw Material Procurement & Inspection",
                description: "High-quality raw materials such as thermoplastic resin, pigments, fillers, glass beads, and additives are sourced from certified suppliers. Each batch is inspected and tested to meet required quality and performance standards."
              },
              {
                step: "02",
                title: "Weighing & Batch Formulation",
                description: "All raw materials are accurately weighed as per approved formulation to ensure consistent quality. Proper formulation is critical for durability, flow properties, and reflectivity of YNM hot thermoplastic paints."
              },
              {
                step: "03",
                title: "High-Temperature Mixing",
                description: "The measured materials are fed into high-temperature mixers where they are uniformly blended. Controlled heating ensures proper melting and bonding of resins, pigments, and fillers."
              },
              {
                step: "04",
                title: "Homogeneous Compound Preparation",
                description: "The molten mixture is processed until a uniform and lump-free compound is achieved. This step ensures smooth application, consistent color, and strong adhesion to road surfaces."
              },
              {
                step: "05",
                title: "Cooling & Solidification",
                description: "The hot thermoplastic compound is cooled under controlled conditions to solidify into stable material. Proper cooling prevents cracks, segregation, and quality variations."
              },
              {
                step: "06",
                title: "Crushing & Granulation",
                description: "The solidified material is crushed and granulated into uniform-sized thermoplastic paint granules. This form allows easy melting during on-site road marking application."
              },
              {
                step: "07",
                title: "Quality Testing & Inspection",
                description: "YNM Safety conducts rigorous quality tests including softening point, flow resistance, color stability, glass bead content, and adhesion performance to ensure compliance with standards."
              },
              {
                step: "08",
                title: "Packaging & Labeling",
                description: "Approved thermoplastic paint granules are packed in moisture-resistant bags with proper labeling. Packaging includes product name, batch number, manufacturing date, and application guidelines."
              },
              {
                step: "09",
                title: "Storage & Dispatch",
                description: "Finished products are stored in a clean and dry warehouse before dispatch. YNM thermoplastic paints are dispatched with proper documentation to ensure safe delivery to customers."
              }
            ],
            
            // Pricing Information
            pricing: {
              basePriceINR: 80,
              currency: "INR",
              unit: "per kg",
              displayPrice: "₹80 per kg",
              packageSizes: [
                { size: "25 kg bag", priceINR: 80, moq: 500 },
                { size: "500 kg", priceINR: 78, moq: 500 },
                { size: "1000 kg", priceINR: 75, moq: 1000 }
              ],
              bulkDiscounts: [
                { minQuantity: 1000, discount: 3 },
                { minQuantity: 5000, discount: 5 },
                { minQuantity: 10000, discount: 8 },
                { minQuantity: 25000, discount: 10 }
              ]
            },
            
            // Statistics
            statistics: {
              annualCapacity: "96,000 MT",
              productionSpeed: "8,000 MT",
              qualityStandards: "ISO 9001:2015",
              exportCountries: "40+"
            },
            
            // Quality Certificates
            certificates: [
              {
                id: "iso-9001",
                title: "ISO 9001:2015",
                description: "Quality Management System Certification",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "shield"
              },
              {
                id: "is-164",
                title: "IS 164",
                description: "Indian Standard for Road Marking Materials",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "check"
              },
              {
                id: "morth-803",
                title: "MoRTH 803",
                description: "Ministry of Road Transport & Highways Specifications",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "check"
              },
              {
                id: "bs-3262",
                title: "BS 3262",
                description: "British Standard for Thermoplastic Road Marking Materials",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "layers"
              }
            ],
            
            // Gallery Images
            gallery: [
              "/assets/hot thermoplastci ynm safety.png",
              "/assets/ynm safety hot themoplastic paints manufacture.png",
              "/assets/ynm safety hot thermo plastic paints manufactures.png",
              "/assets/ynm safety thermoplastic paints.png",
              "/assets/Bag Design Mockup.jpg"
            ]
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
      bitumen: {
        title: "Bitumen",
        description: "High-performance paving grade bitumen for highways, expressways, and heavy traffic roads. Premium quality bitumen compliant with IS and ASTM standards.",
        icon: "🛢️",
        products: [
          {
            id: "bit1",
            slug: "bitumen-vg-40-manufacturers",
            name: "Bitumen VG 40",
            shortDesc: "High-viscosity paving grade bitumen manufacturers for heavy traffic roads, highways & expressways.",
            desc: "Premium paving grade bitumen VG 40 designed for high-temperature regions and heavy traffic load conditions.",
            image: "/assets/Ynm safety bitumen manufactures.png",
            heroImage: "/assets/Ynm safety bitumen manufactures.png",
            specs: ["VG 40 Grade", "IS 73 Compliant", "ASTM Standards", "High Viscosity", "Heavy Traffic Roads"],
            
            // SEO Meta Information
            meta: {
              title: "Bitumen VG 40 Manufacturers & Suppliers | YNM Safety",
              description: "Bitumen VG 40 manufacturers delivering high-performance paving grade bitumen for highways, expressways, and heavy traffic roads. YNM Safety supplies VG 40 bitumen compliant with ASTM & IS standards.",
              slug: "/bitumen-vg-40-manufacturers"
            },
            
            // Product Overview
            overview: "YNM Safety is one of the trusted Bitumen VG 40 manufacturers and suppliers, offering premium paving grade bitumen designed for high-temperature regions and heavy traffic load conditions. Bitumen VG 40 is widely used in the construction of national highways, expressways, airport runways, industrial roads, and high-stress pavements.\n\nOur VG 40 bitumen is manufactured and supplied with strict quality control to ensure superior viscosity, rutting resistance, and long service life. YNM Safety supplies bitumen VG 40 that delivers excellent performance in extreme climatic conditions and heavy axle loads.\n\nAs an experienced bitumen manufacturer and exporter, YNM Safety ensures compliance with IS 73, ASTM, and international standards, making our VG 40 bitumen suitable for both domestic and global infrastructure projects.",
            detailedDescription: "YNM Safety is one of the trusted Bitumen VG 40 manufacturers and suppliers, offering premium paving grade bitumen designed for high-temperature regions and heavy traffic load conditions. Bitumen VG 40 is widely used in the construction of national highways, expressways, airport runways, industrial roads, and high-stress pavements.\n\nOur VG 40 bitumen is manufactured and supplied with strict quality control to ensure superior viscosity, rutting resistance, and long service life. YNM Safety supplies bitumen VG 40 that delivers excellent performance in extreme climatic conditions and heavy axle loads.\n\nAs an experienced bitumen manufacturer and exporter, YNM Safety ensures compliance with IS 73, ASTM, and international standards, making our VG 40 bitumen suitable for both domestic and global infrastructure projects.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "Paving Grade Bitumen" },
              { label: "Grade", value: "VG 40" },
              { label: "Penetration", value: "40–60" },
              { label: "Softening Point", value: "≥ 60°C" },
              { label: "Flash Point", value: "≥ 220°C" },
              { label: "Viscosity @ 60°C", value: "≥ 3200 Poise" },
              { label: "Ductility @ 27°C", value: "≥ 25 cm" },
              { label: "Compliance", value: "IS 73, ASTM" }
            ],
            
            // Detailed Specifications for spec table
            detailedSpecs: [
              {
                label: "Country of Origin",
                value: "Imported Countries",
                icon: "location"
              },
              {
                label: "Manufacturing Location",
                value: "All Over India",
                icon: "location"
              },
              {
                label: "Quality Standards",
                value: "1. IS 73\n2. ASTM",
                icon: "standard"
              },
              {
                label: "Packing Options",
                value: "Bulk, Bitumen Drums",
                icon: "package"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "Project Based",
                icon: "package"
              },
              {
                label: "HSN Code",
                value: "27132000",
                icon: "standard"
              },
              {
                label: "Packing Type",
                value: "Steel Drums / Bulk Tankers",
                icon: "package"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: Paving Grade Bitumen",
                "Grade: VG 40",
                "Penetration: 40–60",
                "Softening Point: ≥ 60°C",
                "Flash Point: ≥ 220°C",
                "Viscosity @ 60°C: ≥ 3200 Poise",
                "Ductility @ 27°C: ≥ 25 cm",
                "Application: Heavy traffic roads",
                "Compliance: IS 73, ASTM",
                "HSN Code: 27132000"
              ],
              keyFeatures: [
                "High viscosity for heavy traffic conditions",
                "Excellent resistance to rutting and deformation",
                "Superior performance in high-temperature regions",
                "Consistent quality and reliable supply",
                "Complies with MoRTH & IS standards"
              ],
              advantages: [
                "Enhances pavement durability",
                "Reduces maintenance frequency",
                "Improves road lifespan",
                "Ideal for expressways & industrial roads",
                "Trusted Bitumen VG 40 Manufacturer – YNM Safety"
              ]
            },
            
            features: [
              "High viscosity for heavy traffic conditions",
              "Excellent resistance to rutting and deformation",
              "Superior performance in high-temperature regions",
              "Consistent quality and reliable supply",
              "Complies with MoRTH & IS standards"
            ],
            
            advantages: [
              "Enhances pavement durability",
              "Reduces maintenance frequency",
              "Improves road lifespan",
              "Ideal for expressways & industrial roads",
              "Trusted Bitumen VG 40 Manufacturer – YNM Safety"
            ],
            
            // Application Areas with images and hover effects
            applicationAreas: [
              {
                id: "app1",
                title: "National Highways & Expressways",
                description: "Bitumen VG 40 is widely used for national highways and expressways due to its high load-bearing capacity and durability.",
                image: "/assets/YNM Safety National Highways & Expressways.png",
                details: "VG 40 bitumen is specially designed for high-traffic highways exposed to heavy axle loads and varying climatic conditions. It provides excellent resistance to rutting, deformation, and moisture damage. This makes it ideal for long-life highway pavements and expressway construction."
              },
              {
                id: "app2",
                title: "Heavy-Traffic Corridors & Freight Routes",
                description: "Bitumen VG 40 is ideal for heavy-traffic corridors and freight routes carrying continuous commercial vehicle movement.",
                image: "/assets/YNM saftey Heavy-traffic corridors & freight routes.png",
                details: "VG 40 bitumen offers superior stiffness and stability required for roads with high truck and container traffic. It minimizes cracking and permanent deformation under repetitive loads. This ensures longer pavement life and reduced maintenance costs on freight corridors."
              },
              {
                id: "app3",
                title: "Toll Plazas & Intersections",
                description: "Bitumen VG 40 is preferred for toll plazas and intersections where roads face extreme braking and turning stress.",
                image: "/assets/YNM Safety Toll Plazas & Intersections.png",
                details: "High-stress zones demand a bitumen grade with excellent resistance to shear forces and surface wear. VG 40 bitumen maintains structural integrity under frequent stop-and-go traffic conditions. It helps prevent rutting, shoving, and surface failures at critical junctions."
              },
              {
                id: "app4",
                title: "Industrial Roads & Corridors",
                description: "Bitumen VG 40 is extensively used in industrial roads designed for heavy machinery and loaded vehicles.",
                image: "/assets/YNM safety Industrial roads & Corridors.png",
                details: "Industrial corridors require pavements that can withstand heavy axle loads and slow-moving traffic. VG 40 bitumen provides strong binding and high temperature stability. It ensures reliable performance in industrial zones and manufacturing hubs."
              },
              {
                id: "app5",
                title: "Port Roads & Container Yards",
                description: "Bitumen VG 40 is suitable for port roads and container yards handling constant heavy container movement.",
                image: "/assets/YNM Safety Port roads & Container yards.png",
                details: "Port infrastructure demands high-performance bitumen capable of resisting deformation under extreme loads. VG 40 bitumen delivers excellent strength and durability for container terminals. It supports long-term pavement performance in coastal and high-load environments."
              },
              {
                id: "app6",
                title: "Airport Runways, Taxiways & Aprons",
                description: "Bitumen VG 40 is used in airport runways, taxiways, and aprons requiring high structural strength.",
                image: "/assets/YNM safety Airport runways , taxiways & aprons.png",
                details: "Airport pavements are subjected to very high static and dynamic loads from aircraft operations. VG 40 bitumen offers superior stability, adhesion, and temperature resistance. It ensures safe, durable, and long-lasting airside pavement performance."
              }
            ],
            
            applications: [
              {
                title: "National Highways & Expressways",
                short: "Bitumen VG 40 is widely used for national highways and expressways due to its high load-bearing capacity and durability.",
                hover: "VG 40 bitumen is specially designed for high-traffic highways exposed to heavy axle loads and varying climatic conditions. It provides excellent resistance to rutting, deformation, and moisture damage. This makes it ideal for long-life highway pavements and expressway construction.",
                image: "/assets/YNM Safety National Highways & Expressways.png"
              },
              {
                title: "Heavy-Traffic Corridors & Freight Routes",
                short: "Bitumen VG 40 is ideal for heavy-traffic corridors and freight routes carrying continuous commercial vehicle movement.",
                hover: "VG 40 bitumen offers superior stiffness and stability required for roads with high truck and container traffic. It minimizes cracking and permanent deformation under repetitive loads. This ensures longer pavement life and reduced maintenance costs on freight corridors.",
                image: "/assets/YNM saftey Heavy-traffic corridors & freight routes.png"
              },
              {
                title: "Toll Plazas & Intersections",
                short: "Bitumen VG 40 is preferred for toll plazas and intersections where roads face extreme braking and turning stress.",
                hover: "High-stress zones demand a bitumen grade with excellent resistance to shear forces and surface wear. VG 40 bitumen maintains structural integrity under frequent stop-and-go traffic conditions. It helps prevent rutting, shoving, and surface failures at critical junctions.",
                image: "/assets/YNM Safety Toll Plazas & Intersections.png"
              },
              {
                title: "Industrial Roads & Corridors",
                short: "Bitumen VG 40 is extensively used in industrial roads designed for heavy machinery and loaded vehicles.",
                hover: "Industrial corridors require pavements that can withstand heavy axle loads and slow-moving traffic. VG 40 bitumen provides strong binding and high temperature stability. It ensures reliable performance in industrial zones and manufacturing hubs.",
                image: "/assets/YNM safety Industrial roads & Corridors.png"
              },
              {
                title: "Port Roads & Container Yards",
                short: "Bitumen VG 40 is suitable for port roads and container yards handling constant heavy container movement.",
                hover: "Port infrastructure demands high-performance bitumen capable of resisting deformation under extreme loads. VG 40 bitumen delivers excellent strength and durability for container terminals. It supports long-term pavement performance in coastal and high-load environments.",
                image: "/assets/YNM Safety Port roads & Container yards.png"
              },
              {
                title: "Airport Runways, Taxiways & Aprons",
                short: "Bitumen VG 40 is used in airport runways, taxiways, and aprons requiring high structural strength.",
                hover: "Airport pavements are subjected to very high static and dynamic loads from aircraft operations. VG 40 bitumen offers superior stability, adhesion, and temperature resistance. It ensures safe, durable, and long-lasting airside pavement performance.",
                image: "/assets/YNM safety Airport runways , taxiways & aprons.png"
              }
            ],
            
            // Customer Success Stories / Projects
            projects: [
              {
                id: "proj1",
                title: "GMR Pochanpalli Expressways Limited",
                client: "GMR Pochanpalli Expressways Limited",
                location: "Telangana",
                description: "Supplied premium Bitumen VG 40 for expressway construction project. Our high-quality bitumen provided excellent durability and performance for this major infrastructure project.",
                quantity: "2 tons",
                year: "2024",
                highlight: "100%",
                highlightLabel: "Quality Compliance",
                logo: "/assets/grm.jpg"
              }
            ],
            
            // Market Growth Information
            marketGrowth: {
              title: "Bitumen VG 40 Market Growth | YNM Safety",
              description: "The global bitumen market is valued at approximately USD 80–90 billion and is projected to grow at a 4–6% CAGR through 2030. Growth is driven by large-scale highway development, airport expansion, urban road projects, and increased government infrastructure investments.",
              cagr: "4-6%",
              growthFactors: [
                "Rapid expansion of highways, expressways, and national road corridors",
                "Increasing heavy commercial vehicle and freight traffic",
                "Demand for high-viscosity bitumen suitable for high-temperature regions",
                "Government investment in long-lasting and low-maintenance road infrastructure",
                "Preference for VG 40 in heavy axle load and industrial road applications",
                "Growth of airport, port, and logistics infrastructure projects"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$85B",
                projectedMarketSize: "$120B",
                currentYear: "2024",
                projectedYear: "2030",
                highwayKmGlobal: "65M+",
                annualInstallations: "50,000+",
                roadsafetySpending: "$180B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "Asia Pacific", value: 40, color: "#74060D" },
                { region: "North America", value: 20, color: "#9A1B2E" },
                { region: "Europe", value: 18, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 14, color: "#D4A853" },
                { region: "Latin America", value: 8, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2021", value: 72 },
                { year: "2022", value: 76 },
                { year: "2023", value: 80 },
                { year: "2024", value: 85 },
                { year: "2025", value: 95 },
                { year: "2026", value: 105 }
              ]
            },
            
            // Global Availability - Structured by Region
            globalAvailability: {
              regions: [
                {
                  name: "North America",
                  countries: ["United States", "Canada", "Mexico"]
                },
                {
                  name: "Europe",
                  countries: ["Germany", "France", "United Kingdom", "Italy", "Spain"]
                },
                {
                  name: "Asia-Pacific",
                  countries: ["India", "China", "Japan", "South Korea", "Indonesia"]
                },
                {
                  name: "Middle East & Africa",
                  countries: ["United Arab Emirates (UAE)", "Saudi Arabia", "South Africa", "Nigeria", "Egypt"]
                },
                {
                  name: "South America",
                  countries: ["Brazil", "Argentina", "Chile", "Ecuador", "Venezuela"]
                }
              ]
            },
            
            // Manufacturing Process - 10 Steps
            importingProcessIntro: "YNM Safety imports and supplies premium Bitumen VG 40 from trusted international refineries through a controlled, quality-driven process to ensure excellent viscosity, durability, and compliance with IS 73 and ASTM standards.",
            importingProcess: [
              {
                step: "01",
                title: "Supplier Identification & Evaluation",
                description: "YNM Safety identifies and evaluates certified international bitumen suppliers and refineries with proven track records. We conduct thorough assessments of supplier credentials, production capabilities, quality certifications, and compliance with international standards to ensure reliable sourcing."
              },
              {
                step: "02",
                title: "Quality Specification Agreement",
                description: "Detailed technical specifications for Bitumen VG 40 are agreed upon with the supplier, including viscosity requirements, penetration values, softening point, ductility, flash point, and other parameters as per IS 73 and ASTM standards. Product samples are evaluated and tested before placing bulk orders."
              },
              {
                step: "03",
                title: "Purchase Order & Documentation",
                description: "Once specifications are confirmed, purchase orders are placed with complete documentation including product specifications, quantity requirements, delivery timelines, and quality certificates. All import documentation, including Letter of Credit (LC), commercial invoices, and shipping instructions are prepared."
              },
              {
                step: "04",
                title: "Pre-Shipment Inspection & Testing",
                description: "Before shipment, independent third-party inspection agencies conduct pre-shipment quality testing at the supplier's facility. Comprehensive laboratory tests verify that the Bitumen VG 40 meets all agreed specifications and international quality standards."
              },
              {
                step: "05",
                title: "International Shipping & Logistics",
                description: "Bitumen VG 40 is loaded into specialized heated bulk tankers or steel drums for maritime transportation. YNM Safety coordinates with international freight forwarders and shipping lines to ensure safe transit, proper temperature maintenance, and timely delivery to Indian ports."
              },
              {
                step: "06",
                title: "Customs Clearance & Import Compliance",
                description: "Upon arrival at Indian ports, YNM Safety handles all customs clearance procedures, including submission of Bills of Lading, commercial invoices, packing lists, test certificates, and payment of applicable customs duties. All regulatory and import compliance requirements are strictly followed."
              },
              {
                step: "07",
                title: "Port Receipt & Quality Re-Testing",
                description: "After customs clearance, the imported Bitumen VG 40 undergoes re-testing at YNM Safety's quality control laboratories. Parameters such as viscosity, penetration, softening point, ductility, and flash point are verified to ensure the product maintains its quality during transportation."
              },
              {
                step: "08",
                title: "Storage in Temperature-Controlled Facilities",
                description: "Approved bitumen is transferred to YNM Safety's insulated, temperature-controlled storage tanks located across India. Continuous heating systems maintain optimal flow characteristics and prevent solidification. Storage facilities are strategically located for efficient pan-India distribution."
              },
              {
                step: "09",
                title: "Quality Certification & Documentation",
                description: "Each batch of imported Bitumen VG 40 is issued with comprehensive quality certificates, test reports, and batch traceability documents. All certifications comply with IS 73, ASTM standards, and MoRTH specifications, providing complete assurance to customers."
              },
              {
                step: "10",
                title: "Domestic Distribution & Project Supply",
                description: "YNM Safety supplies Bitumen VG 40 across India through heated tankers, steel drums, or bulk deliveries based on project requirements. Timely delivery, technical support, and consistent quality make YNM Safety a trusted partner for highway projects, expressways, airport runways, and heavy-traffic road construction."
              }
            ],
            
            // Pricing Information
            pricing: {
              basePriceINR: 51,
              currency: "INR",
              unit: "per kg",
              displayPrice: "₹51 per kg (Market Linked)",
              packageSizes: [
                { size: "Bulk Tanker", priceINR: 51, moq: 1000 },
                { size: "Steel Drums", priceINR: 53, moq: 500 }
              ],
              bulkDiscounts: [
                { minQuantity: 5000, discount: 2 },
                { minQuantity: 10000, discount: 4 },
                { minQuantity: 25000, discount: 6 }
              ]
            },
            
            // Statistics
            statistics: {
              annualCapacity: "60,000 MT",
              productionSpeed: "5,000 MT",
              qualityStandards: "IS 73, ASTM",
              exportCountries: "20+"
            },
            
            // Quality Certificates
            certificates: [
              {
                id: "is-73",
                title: "IS 73",
                description: "Indian Standard for Paving Bitumen Specification",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "check"
              },
              {
                id: "astm",
                title: "ASTM",
                description: "American Society for Testing and Materials Standards",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "layers"
              }
            ],
            
            // Gallery Images
            gallery: [
              "/assets/Ynm safety bitumen manufactures.png",
              "/assets/YNM Safety National Highways & Expressways.png",
              "/assets/YNM saftey Heavy-traffic corridors & freight routes.png",
              "/assets/YNM Safety Toll Plazas & Intersections.png",
              "/assets/YNM safety Industrial roads & Corridors.png",
              "/assets/YNM Safety Port roads & Container yards.png",
              "/assets/YNM safety Airport runways , taxiways & aprons.png"
            ]
          }
        ]
      },
      "crash-barriers": {
        title: "Metal Beam Crash Barriers",
        description: "High-strength metal beam crash barriers and W-beam guardrails for highways and expressways. Engineered for maximum impact resistance.",
        icon: "🛡️",
        products: [
          {
            id: "cb1",
            slug: "w-beam-crash-barrier-manufacturers",
            name: "W Beam Crash Barrier",
            shortDesc: "High-performance metal beam crash barriers engineered for highways, expressways & critical road safety applications.",
            desc: "High-performance metal beam crash barriers engineered for highways, expressways & critical road safety applications.",
            image: "/assets/metal beam crash barrier ynm safety.png",
            heroImage: "/assets/metal beam crash barrier for highway ynm safety.png",
            specs: ["W-beam profile", "Hot-dip galvanized", "IS 5986 certified", "MoRTH compliant", "High tensile strength", "2.7mm/3.0mm thickness"],
            overview: "YNM Safety is a trusted W beam crash barrier manufacturer delivering high-quality metal beam crash barriers designed to provide maximum roadside safety and impact resistance. Our W beam crash barriers are widely installed on highways, expressways, bridges, medians, and sharp curves to prevent vehicles from veering off the roadway and to minimize collision severity. Manufactured using premium-grade galvanized steel, YNM Safety's metal beam crash barriers comply with national and international road safety standards. The unique W-profile absorbs and dissipates kinetic energy during impact, reducing vehicle damage and safeguarding passengers. As one of the leading W beam crash barrier manufacturers in India, we ensure consistent quality, long service life, and corrosion resistance even in harsh weather conditions. Our metal beam crash barrier manufacturing process follows strict quality control norms, making YNM Safety a preferred choice for government projects, infrastructure developers, and EPC contractors seeking reliable and cost-effective road safety solutions.",
            detailedDescription: "YNM Safety is a trusted W beam crash barrier manufacturer delivering high-quality metal beam crash barriers designed to provide maximum roadside safety and impact resistance. Our W beam crash barriers are widely installed on highways, expressways, bridges, medians, and sharp curves to prevent vehicles from veering off the roadway and to minimize collision severity. Manufactured using premium-grade galvanized steel, YNM Safety's metal beam crash barriers comply with national and international road safety standards. The unique W-profile absorbs and dissipates kinetic energy during impact, reducing vehicle damage and safeguarding passengers. As one of the leading W beam crash barrier manufacturers in India, we ensure consistent quality, long service life, and corrosion resistance even in harsh weather conditions. Our metal beam crash barrier manufacturing process follows strict quality control norms, making YNM Safety a preferred choice for government projects, infrastructure developers, and EPC contractors seeking reliable and cost-effective road safety solutions.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "W Beam Crash Barrier" },
              { label: "Material", value: "High-grade galvanized steel" },
              { label: "Beam Thickness", value: "3mm" },
              { label: "Surface Finish", value: "Hot-dip galvanized (as per IS standards)" },
              { label: "Length", value: "3.0 m / 4.0 m (standard)" },
              { label: "Post Type", value: "C-post / Sigma post" },
              { label: "Net Weight", value: "25 KG / RM" },
              { label: "Quality Standards", value: "MoRTH 803, ISO 9001:2015, EN 1317, IRC 119" }
            ],
            
            // Detailed Specifications for spec table
            // Technical Specifications Table (as per image)
            detailedSpecs: [
              {
                label: "Country of Origin",
                value: "India",
                icon: "location"
              },
              {
                label: "Manufacturing Location",
                value: "Telangana, Delhi, MP, Kolkata and Gujarat",
                icon: "location"
              },
              {
                label: "Net Weight",
                value: "25 KG / RM",
                icon: "weight"
              },
              {
                label: "Packing Type",
                value: "Bundled with steel straps / As per export standard packing",
                icon: "package"
              },
              {
                label: "Quality Standards",
                value: "MoRTH 803, ISO 9001:2015, EN 1317, IRC 119",
                icon: "standard"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "100 meters / 1 metric ton / Project-based",
                icon: "package"
              },
              {
                label: "HS Code",
                value: "73089090",
                icon: "standard"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: W Beam Crash Barrier",
                "Material: High-grade galvanized steel",
                "Beam Thickness: 3mm",
                "Surface Finish: Hot-dip galvanized (as per IS standards)",
                "Standard Length: 3.0 m / 4.0 m",
                "Post Type: C-post / Sigma post",
                "Net Weight: 25 KG / RM",
                "Impact Performance: High energy absorption",
                "Compliance: MoRTH 803, IRC 119, EN 1317",
                "Quality Standards: MoRTH 803, ISO 9001:2015, EN 1317, IRC 119",
                "HS Code: 73089090"
              ],
              keyFeatures: [
                "Manufactured by experienced metal beam crash barrier manufacturers",
                "High tensile steel for superior impact resistance",
                "Proven W-profile design for energy absorption",
                "Hot-dip galvanized coating for corrosion protection",
                "Easy installation and low maintenance",
                "Suitable for highways, expressways & bridge approaches",
                "Long service life in extreme weather conditions"
              ],
              advantages: [
                "Enhances road safety by preventing vehicle rollovers",
                "Reduces accident severity and roadside fatalities",
                "Cost-effective solution for large infrastructure projects",
                "Trusted W beam crash barrier manufacturer – YNM Safety",
                "Consistent quality for bulk supply and exports",
                "Meets government and international safety norms"
              ]
            },
            
            features: [
              "Manufactured by experienced metal beam crash barrier manufacturers",
              "High tensile steel for superior impact resistance",
              "Proven W-profile design for energy absorption",
              "Hot-dip galvanized coating for corrosion protection",
              "Easy installation and low maintenance",
              "Suitable for highways, expressways & bridge approaches",
              "Long service life in extreme weather conditions"
            ],
            advantages: [
              "Enhances road safety by preventing vehicle rollovers",
              "Reduces accident severity and roadside fatalities",
              "Cost-effective solution for large infrastructure projects",
              "Trusted W beam crash barrier manufacturer – YNM Safety",
              "Consistent quality for bulk supply and exports",
              "Meets government and international safety norms"
            ],
            technicalSpecs: {
              "Product Type": "W Beam Crash Barrier",
              "Material": "High-grade galvanized steel",
              "Beam Thickness": "3mm",
              "Surface Finish": "Hot-dip galvanized (as per IS standards)",
              "Length": "3.0 m / 4.0 m (standard)",
              "Post Type": "C-post / Sigma post",
              "Impact Performance": "High energy absorption",
              "Compliance": "MoRTH 803, IRC 119, EN 1317",
              "Country of Origin": "India",
              "Manufacturing Location": "Telangana, Delhi, MP, Kolkata and Gujarat",
              "Net Weight": "25 KG / RM",
              "Packing Type": "Bundled with steel straps / As per export standard packing",
              "Quality Standards": "MoRTH 803, ISO 9001:2015, EN 1317, IRC 119",
              "MOQ": "100 meters / 1 metric ton / Project-based",
              "HS Code": "73089090"
            },
            
            // Application Areas with images
            applicationAreas: [
              {
                id: "app1",
                title: "Highways & Expressways",
                description: "High-performance W beam crash barriers by YNM Safety ensure maximum safety on high-speed highways and expressways.",
                image: "/assets/metal beam crash barrier for highway ynm safety.png",
                details: "YNM Safety, a trusted metal beam crash barrier manufacturer, supplies durable W beam crash barriers designed to withstand high-impact collisions. These barriers enhance road safety and reduce accident severity on national and international highways."
              },
              {
                id: "app2",
                title: "Curves & Sharp Bends",
                description: "YNM Safety W beam crash barriers provide reliable protection at dangerous curves and sharp bends.",
                image: "/assets/metal beam crash barrier Sharp Bends  &  corners ynm safey.png",
                details: "Engineered for impact absorption, our galvanized W beam crash barriers help control vehicle deviation on accident-prone curves. They significantly improve driver safety in sharp turns and hilly terrains."
              },
              {
                id: "app3",
                title: "Bridges & Flyovers",
                description: "Robust W beam crash barriers from YNM Safety safeguard vehicles on bridges and flyovers.",
                image: "/assets/metal beam crash barrier s ynm safety at Bridges.png",
                details: "As leading W beam crash barrier manufacturers in India, we deliver strong edge protection systems for elevated roads. Our barriers prevent vehicle fall-offs and ensure long-term structural safety."
              },
              {
                id: "app4",
                title: "Roadside Hazards & Embankments",
                description: "YNM Safety's metal beam crash barriers protect vehicles from roadside hazards and embankments.",
                image: "/assets/metal beam crash barrier Hazards at ynm safety.png",
                details: "Our W beam crash barriers are widely installed near culverts, slopes, and embankments to reduce accident impact. They act as a reliable safety shield in high-risk roadside zones."
              },
              {
                id: "app5",
                title: "Medians & Central Dividers",
                description: "YNM Safety W beam crash barriers are ideal for medians and central dividers.",
                image: "/assets/metal beam crash barrier Central Dividers from ynm safety.jpeg",
                details: "Designed to prevent cross-median collisions, our galvanized W beam crash barriers improve traffic separation and road discipline. They are commonly used on multi-lane highways and urban roads."
              },
              {
                id: "app6",
                title: "Mountain & Ghat Roads",
                description: "YNM Safety provides W beam crash barriers for safe travel on mountain and ghat roads.",
                image: "/assets/ghat road w beam barrier ynm safety.png",
                details: "Built for extreme terrain, our metal beam crash barriers perform reliably on steep slopes and narrow roads. They enhance safety on winding ghat sections and high-altitude routes."
              }
            ],
            
            applications: [
              {
                title: "Highways & Expressways",
                short: "High-performance W beam crash barriers by YNM Safety ensure maximum safety on high-speed highways and expressways.",
                hover: "YNM Safety, a trusted metal beam crash barrier manufacturer, supplies durable W beam crash barriers designed to withstand high-impact collisions. These barriers enhance road safety and reduce accident severity on national and international highways.",
                image: "/assets/metal beam crash barrier for highway ynm safety.png"
              },
              {
                title: "Curves & Sharp Bends",
                short: "YNM Safety W beam crash barriers provide reliable protection at dangerous curves and sharp bends.",
                hover: "Engineered for impact absorption, our galvanized W beam crash barriers help control vehicle deviation on accident-prone curves. They significantly improve driver safety in sharp turns and hilly terrains.",
                image: "/assets/metal beam crash barrier Sharp Bends  &  corners ynm safey.png"
              },
              {
                title: "Bridges & Flyovers",
                short: "Robust W beam crash barriers from YNM Safety safeguard vehicles on bridges and flyovers.",
                hover: "As leading W beam crash barrier manufacturers in India, we deliver strong edge protection systems for elevated roads. Our barriers prevent vehicle fall-offs and ensure long-term structural safety.",
                image: "/assets/metal beam crash barrier s ynm safety at Bridges.png"
              },
              {
                title: "Roadside Hazards & Embankments",
                short: "YNM Safety's metal beam crash barriers protect vehicles from roadside hazards and embankments.",
                hover: "Our W beam crash barriers are widely installed near culverts, slopes, and embankments to reduce accident impact. They act as a reliable safety shield in high-risk roadside zones.",
                image: "/assets/metal beam crash barrier Hazards at ynm safety.png"
              },
              {
                title: "Medians & Central Dividers",
                short: "YNM Safety W beam crash barriers are ideal for medians and central dividers.",
                hover: "Designed to prevent cross-median collisions, our galvanized W beam crash barriers improve traffic separation and road discipline. They are commonly used on multi-lane highways and urban roads.",
                image: "/assets/metal beam crash barrier Central Dividers from ynm safety.jpeg"
              },
              {
                title: "Mountain & Ghat Roads",
                short: "YNM Safety provides W beam crash barriers for safe travel on mountain and ghat roads.",
                hover: "Built for extreme terrain, our metal beam crash barriers perform reliably on steep slopes and narrow roads. They enhance safety on winding ghat sections and high-altitude routes.",
                image: "/assets/ghat road w beam barrier ynm safety.png"
              }
            ],
            
            // Pricing Information
            pricing: {
              basePriceINR: 1900,
              currency: "INR",
              unit: "per running meter",
              thickness: "t=3mm",
              displayPrice: "₹1,900 per running meter (t=3mm)",
              packageSizes: [
                { size: "100 meters", priceINR: 1900, moq: 100 },
                { size: "500 meters", priceINR: 1850, moq: 500 },
                { size: "1000 meters", priceINR: 1800, moq: 1000 }
              ],
              bulkDiscounts: [
                { minQuantity: 500, discount: 3 },
                { minQuantity: 1000, discount: 5 },
                { minQuantity: 5000, discount: 8 },
                { minQuantity: 10000, discount: 10 }
              ]
            },
            
            gallery: [
              "/assets/metal beam crash barrier ynm safety.png",
              "/assets/w beam crash barries ynm safety.webp",
              "/assets/ynm safety metal beam crash barriers.png",
              "/assets/metal beam crash barrier for highway ynm safety.png",
              "/assets/metal beam crash barrier Central Dividers from ynm safety.jpeg",
              "/assets/metal beam crash barrier Hazards at ynm safety.png",
              "/assets/metal beam crash barrier s ynm safety at Bridges.png",
              "/assets/metal beam crash barrier Sharp Bends  &  corners ynm safey.png",
              "/assets/ghat road w beam barrier ynm safety.png"
            ],
            
            // Our Projects / Clients
            projects: [
              {
                id: "proj1",
                title: "BEKEM INFRA PROJECTS PVT. LTD - Hyderabad Highway Project",
                client: "BEKEM INFRA PROJECTS PVT. LTD",
                location: "Hyderabad",
                description: "Supplied 20,000 meters of W-Beam Crash Barriers for highway safety infrastructure development project in Hyderabad. Our high-quality galvanized steel barriers provided excellent impact resistance and long-term durability for this critical road safety installation.",
                quantity: "20,000 mts",
                year: "2024"
              },
              {
                id: "proj2",
                title: "ANUSHA PROJECTS PRIVATE LIMITED - Hyderabad Expressway Project",
                client: "ANUSHA PROJECTS PRIVATE LIMITED",
                location: "Hyderabad",
                description: "Delivered 15,360 meters of W-Beam Crash Barriers for expressway median and roadside protection in Hyderabad. The installation enhanced road safety standards and reduced accident severity on this busy expressway corridor.",
                quantity: "15,360 mts",
                year: "2024"
              },
              {
                id: "proj3",
                title: "VRIDDHI INFRATECH INDIA PRIVATE LIMITED - Hyderabad Infrastructure Project",
                client: "VRIDDHI INFRATECH INDIA PRIVATE LIMITED",
                location: "Hyderabad",
                description: "Supplied 28,500 meters of W-Beam Crash Barriers for comprehensive highway safety infrastructure project in Hyderabad. Our metal beam crash barriers were installed across bridges, curves, and high-risk zones, ensuring maximum protection for road users.",
                quantity: "28,500 mts",
                year: "2024"
              }
            ],
            
            meta: {
              title: "W Beam Crash Barrier Manufacturer in India | YNM Safety",
              description: "Leading W beam crash barrier manufacturer in India. YNM Safety offers durable metal beam crash barriers for highways & expressways.",
              slug: "/w-beam-crash-barrier-manufacturers"
            },
            
            // Market Growth Information
            marketGrowth: {
              title: "W-Beam Crash Barrier Market Growth – Global Outlook",
              description: "The global W-beam crash barrier market is growing steadily due to large-scale investments in road safety infrastructure, national highway expansion, and strict government regulations aimed at reducing road fatalities. Rising demand for metal beam crash barriers across highways, expressways, bridges, and urban roads has positioned manufacturers like YNM Safety as key contributors to this growth. With strong adoption in Asia-Pacific, the Middle East, Africa, and North America, the market is expected to register a CAGR of 4–6%, driven by new installations and replacement of outdated safety barriers.",
              cagr: "4-6%",
              growthFactors: [
                "Government mandates for road safety and crash protection systems",
                "Rapid construction of highways, expressways, and smart roads worldwide",
                "Growing demand for galvanized steel W-beam crash barriers due to durability and cost efficiency",
                "Increasing vehicle density and focus on accident impact mitigation",
                "Upgradation of old guardrails with high-performance metal beam crash barriers",
                "Strong presence of reliable manufacturers like YNM Safety – W-Beam Crash Barrier Manufacturers"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$2.8B",
                projectedMarketSize: "$4.2B",
                currentYear: "2024",
                projectedYear: "2030",
                highwayKmGlobal: "65M+",
                annualInstallations: "12,000+",
                roadsafetySpending: "$180B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "Asia Pacific", value: 35, color: "#74060D" },
                { region: "North America", value: 25, color: "#9A1B2E" },
                { region: "Europe", value: 20, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 12, color: "#D4A853" },
                { region: "Latin America", value: 8, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2021", value: 2.1 },
                { year: "2022", value: 2.3 },
                { year: "2023", value: 2.5 },
                { year: "2024", value: 2.8 },
                { year: "2025", value: 3.1 },
                { year: "2026", value: 3.4 }
              ]
            },
            
            // Global Availability - Structured by Region
            globalAvailability: {
              regions: [
                {
                  name: "North America",
                  countries: ["United States", "Canada", "Mexico"]
                },
                {
                  name: "Europe",
                  countries: ["Germany", "United Kingdom", "France", "Italy", "Spain", "Other EU countries"]
                },
                {
                  name: "Asia / Asia Pacific",
                  countries: ["China", "India", "Japan", "South Korea", "Australia", "Indonesia", "Thailand", "Malaysia"]
                },
                {
                  name: "Latin America",
                  countries: ["Brazil", "Argentina", "Colombia", "Mexico"]
                },
                {
                  name: "Middle East & Africa",
                  countries: ["Saudi Arabia", "United Arab Emirates", "South Africa"]
                },
                {
                  name: "Oceania",
                  countries: ["Australia", "New Zealand"]
                }
              ]
            },
            
            performanceMetrics: "100,000 running meters/month",
            
            statistics: {
              annualCapacity: "1,200,000 rm",
              exportCountries: "25+",
              qualityStandards: "ISO 9001:2015",
              productionSpeed: "100,000 rm"
            },
            
            // Manufacturing Process
            // Manufacturing Process - 9 Steps
            manufacturingProcessIntro: "Our Metal Beam Crash Barriers are manufactured through a controlled, quality-driven process to ensure maximum strength, durability, and compliance with national and international road safety standards.",
            manufacturingProcess: [
              {
                step: "01",
                title: "Raw Material Procurement & Inspection",
                description: "High-quality steel coils are sourced from certified suppliers. Each batch undergoes chemical and mechanical testing to ensure conformity with IS, ASTM, and MoRTH specifications."
              },
              {
                step: "02",
                title: "Steel Coil Slitting & Cutting",
                description: "Steel coils are precision-slit and cut into required widths and lengths based on W-Beam, Thrie-Beam, or Double W-Beam specifications to maintain dimensional accuracy."
              },
              {
                step: "03",
                title: "Cold Roll Forming",
                description: "The cut steel sheets are passed through advanced roll-forming machines to achieve the exact crash barrier profile with uniform thickness and consistent geometry."
              },
              {
                step: "04",
                title: "Punching & Slot Formation",
                description: "Computer-controlled punching machines create bolt holes and slots with high precision to ensure easy installation and perfect alignment at site."
              },
              {
                step: "05",
                title: "End Finishing & Edge Trimming",
                description: "Barrier ends are trimmed, deburred, and finished to eliminate sharp edges, improving safety during handling and installation."
              },
              {
                step: "06",
                title: "Surface Preparation (Degreasing & Pickling)",
                description: "Formed beams are thoroughly cleaned through degreasing and pickling processes to remove oil, rust, and impurities, ensuring superior coating adhesion."
              },
              {
                step: "07",
                title: "Hot-Dip Galvanizing",
                description: "The beams are hot-dip galvanized as per IS 4759 / ASTM A123 standards, providing a uniform zinc coating for long-term corrosion resistance in harsh environments."
              },
              {
                step: "08",
                title: "Quality Testing & Inspection",
                description: "Finished barriers undergo strict quality checks, including coating thickness, dimensional accuracy, mechanical strength, and visual inspection before approval."
              },
              {
                step: "09",
                title: "Packing, Storage & Dispatch",
                description: "Approved crash barriers are securely bundled, labeled, and stored in covered areas. Products are then dispatched with proper documentation to ensure safe and timely delivery."
              }
            ]
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
          },
          {
            id: "sg5",
            slug: "retro-reflective-gantry-signage-manufactures",
            name: "Retro Reflective Gantry Signage",
            shortDesc: "High-visibility retro reflective gantry signage manufactures for highways, expressways & advanced traffic guidance systems.",
            desc: "Premium retro reflective gantry signage for highways and expressways. Excellent long-distance visibility and weather-resistant overhead signboard solutions.",
            image: "/assets/Ynm safety signages.png",
            heroImage: "/assets/Ynm safety signages.png",
            specs: ["Long-distance visibility", "Overhead gantry", "Weather resistant", "MoRTH compliant"],
            
            // SEO Meta Information
            meta: {
              title: "Retro Reflective Gantry Signage Manufactures | YNM Safety",
              description: "Retro reflective gantry signage manufactures delivering high-visibility overhead road sign solutions. YNM Safety manufactures gantry signboards for highways, expressways & urban traffic safety.",
              slug: "/retro-reflective-gantry-signage-manufactures"
            },
            
            // Product Overview
            overview: "YNM Safety is one of the trusted retro reflective gantry signage manufactures, offering premium-quality overhead signboard solutions for modern road infrastructure. We manufacture retro reflective gantry signages designed for long-distance visibility, lane guidance, and effective traffic communication on highways, expressways, flyovers, and major junctions.\n\nOur retro reflective gantry signboards are manufactured using high-grade aluminium sheets, certified retro reflective sheeting, and robust gantry structures. YNM Safety manufactures gantry signages that provide excellent day and night visibility, weather resistance, and long service life.\n\nAs experienced gantry signage manufactures, YNM Safety follows strict quality control processes and manufactures products compliant with MoRTH, IRC, IS, and ASTM standards for national and international road safety projects.",
            detailedDescription: "YNM Safety is one of the trusted retro reflective gantry signage manufactures, offering premium-quality overhead signboard solutions for modern road infrastructure. We manufacture retro reflective gantry signages designed for long-distance visibility, lane guidance, and effective traffic communication on highways, expressways, flyovers, and major junctions.\n\nOur retro reflective gantry signboards are manufactured using high-grade aluminium sheets, certified retro reflective sheeting, and robust gantry structures. YNM Safety manufactures gantry signages that provide excellent day and night visibility, weather resistance, and long service life.\n\nAs experienced gantry signage manufactures, YNM Safety follows strict quality control processes and manufactures products compliant with MoRTH, IRC, IS, and ASTM standards for national and international road safety projects.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "Retro Reflective Gantry Signage" },
              { label: "Sign Type", value: "Overhead / Cantilever / Portal Gantry" },
              { label: "Reflective Sheeting", value: "Engineer Grade / High Intensity / Diamond Grade" },
              { label: "Base Material", value: "Aluminium Sheet" },
              { label: "Visibility Range", value: "Long-distance visibility" },
              { label: "Mounting", value: "Gantry Structure" },
              { label: "Application Area", value: "Highways & Expressways" },
              { label: "Compliance", value: "MoRTH, IRC, IS Standards" }
            ],
            
            // Detailed Specifications for spec table
            detailedSpecs: [
              {
                label: "Country of Origin",
                value: "India",
                icon: "location"
              },
              {
                label: "Manufacturing Location",
                value: "Hyderabad",
                icon: "location"
              },
              {
                label: "Net Weight",
                value: "Variable",
                icon: "weight"
              },
              {
                label: "Packing Type",
                value: "Wrapped with bubble wrap",
                icon: "package"
              },
              {
                label: "Quality Standards",
                value: "IRC 67, MoRTH, ISO 9001:2015",
                icon: "standard"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "As Per Project Based",
                icon: "package"
              },
              {
                label: "HSN Code",
                value: "831000",
                icon: "standard"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: Retro Reflective Gantry Signage",
                "Sign Type: Overhead / Cantilever / Portal Gantry",
                "Reflective Sheeting: Engineer Grade / High Intensity / Diamond Grade",
                "Base Material: Aluminium Sheet",
                "Visibility Range: Long-distance visibility",
                "Mounting: Gantry Structure",
                "Application Area: Highways & Expressways",
                "Compliance: MoRTH, IRC, IS Standards",
                "HSN Code: 831000"
              ],
              keyFeatures: [
                "Certified gantry signage manufacturing quality",
                "Long-distance day & night visibility",
                "Corrosion-resistant aluminium panels",
                "Heavy-duty overhead gantry design",
                "Built for extreme weather conditions",
                "Quick installation and low upkeep"
              ],
              advantages: [
                "Improves road safety with clear overhead guidance",
                "Reduces driver confusion on high-speed roads",
                "Cost-effective solution for large highway projects",
                "Trusted gantry signage manufacturer – YNM Safety",
                "Consistent quality for bulk supply and exports",
                "Meets government and international road safety standards"
              ]
            },
            
            features: [
              "Certified gantry signage manufacturing quality",
              "Long-distance day & night visibility",
              "Corrosion-resistant aluminium panels",
              "Heavy-duty overhead gantry design",
              "Built for extreme weather conditions",
              "Quick installation and low upkeep"
            ],
            
            advantages: [
              "Improves road safety with clear overhead guidance",
              "Reduces driver confusion on high-speed roads",
              "Cost-effective solution for large highway projects",
              "Trusted gantry signage manufacturer – YNM Safety",
              "Consistent quality for bulk supply and exports",
              "Meets government and international road safety standards"
            ],
            
            // Application Areas with images and hover effects
            applicationAreas: [
              {
                id: "app1",
                title: "Highways & Expressways",
                description: "Retro reflective gantry signages provide clear overhead guidance on highways and expressways.",
                image: "/assets/Ynm safety Highways & Expressways.png",
                details: "YNM Safety manufactures retro reflective gantry signages for highways and expressways to ensure long-distance visibility at high speeds. As trusted gantry signage manufacturers, we deliver durable overhead signboards that improve lane discipline and road safety."
              },
              {
                id: "app2",
                title: "Urban Roads & City Streets",
                description: "Gantry signages support organized traffic movement on urban roads and city streets.",
                image: "/assets/Ynm safety Urban Roads & City streets.png",
                details: "YNM Safety manufactures gantry signboards for urban roads and city streets with high retro reflectivity. These overhead gantry signages help reduce driver confusion and improve traffic flow in busy city environments."
              },
              {
                id: "app3",
                title: "Toll Plazas & Bridges",
                description: "Gantry signages improve lane identification at toll plazas and bridge approaches.",
                image: "/assets/Ynm safety Toll ways & Bridges.png",
                details: "YNM Safety manufactures retro reflective gantry signages for toll plazas and bridges to ensure clear lane guidance and visibility. Our overhead gantry signboards are designed for durability and continuous operation in high-traffic zones."
              },
              {
                id: "app4",
                title: "Airports & Railway Stations",
                description: "Gantry signages provide effective traffic guidance in transport hubs.",
                image: "/assets/ynm safety Airports & Railway Stations.png",
                details: "YNM Safety manufactures overhead gantry signages for airports and railway stations to manage vehicle movement efficiently. These retro reflective gantry signboards enhance navigation and safety in high-traffic transport areas."
              },
              {
                id: "app5",
                title: "Industrial Sites & Ports",
                description: "Gantry signages ensure controlled traffic movement in industrial areas.",
                image: "/assets/Ynm safety Industrial sites & port areas.png",
                details: "YNM Safety manufactures heavy-duty gantry signboards for industrial sites and ports. These retro reflective overhead signages support safe vehicle routing and operational efficiency."
              },
              {
                id: "app6",
                title: "Commercial & Advertising",
                description: "Gantry structures support commercial signage and advertising displays.",
                image: "/assets/Ynm safety Commercial &  Advertising.png",
                details: "YNM Safety manufactures gantry structures suitable for commercial signage and advertising applications. Our overhead gantry signboards offer high visibility and long-term performance."
              },
              {
                id: "app7",
                title: "Smart / Intelligent Transportation Systems (ITS)",
                description: "Gantry signages integrate seamlessly with smart traffic systems.",
                image: "/assets/Ynm safety Smart  Intelligent Transportation Systems (ITS).png",
                details: "YNM Safety manufactures gantry signages compatible with Intelligent Transportation Systems (ITS). These retro reflective gantry signboards support real-time traffic information and modern road management solutions."
              }
            ],
            
            applications: [
              {
                title: "Highways & Expressways",
                short: "Retro reflective gantry signages provide clear overhead guidance on highways and expressways.",
                hover: "YNM Safety manufactures retro reflective gantry signages for highways and expressways to ensure long-distance visibility at high speeds. As trusted gantry signage manufacturers, we deliver durable overhead signboards that improve lane discipline and road safety.",
                image: "/assets/Ynm safety Highways & Expressways.png"
              },
              {
                title: "Urban Roads & City Streets",
                short: "Gantry signages support organized traffic movement on urban roads and city streets.",
                hover: "YNM Safety manufactures gantry signboards for urban roads and city streets with high retro reflectivity. These overhead gantry signages help reduce driver confusion and improve traffic flow in busy city environments.",
                image: "/assets/Ynm safety Urban Roads & City streets.png"
              },
              {
                title: "Toll Plazas & Bridges",
                short: "Gantry signages improve lane identification at toll plazas and bridge approaches.",
                hover: "YNM Safety manufactures retro reflective gantry signages for toll plazas and bridges to ensure clear lane guidance and visibility. Our overhead gantry signboards are designed for durability and continuous operation in high-traffic zones.",
                image: "/assets/Ynm safety Toll ways & Bridges.png"
              },
              {
                title: "Airports & Railway Stations",
                short: "Gantry signages provide effective traffic guidance in transport hubs.",
                hover: "YNM Safety manufactures overhead gantry signages for airports and railway stations to manage vehicle movement efficiently. These retro reflective gantry signboards enhance navigation and safety in high-traffic transport areas.",
                image: "/assets/ynm safety Airports & Railway Stations.png"
              },
              {
                title: "Industrial Sites & Ports",
                short: "Gantry signages ensure controlled traffic movement in industrial areas.",
                hover: "YNM Safety manufactures heavy-duty gantry signboards for industrial sites and ports. These retro reflective overhead signages support safe vehicle routing and operational efficiency.",
                image: "/assets/Ynm safety Industrial sites & port areas.png"
              },
              {
                title: "Commercial & Advertising",
                short: "Gantry structures support commercial signage and advertising displays.",
                hover: "YNM Safety manufactures gantry structures suitable for commercial signage and advertising applications. Our overhead gantry signboards offer high visibility and long-term performance.",
                image: "/assets/Ynm safety Commercial &  Advertising.png"
              },
              {
                title: "Smart / Intelligent Transportation Systems (ITS)",
                short: "Gantry signages integrate seamlessly with smart traffic systems.",
                hover: "YNM Safety manufactures gantry signages compatible with Intelligent Transportation Systems (ITS). These retro reflective gantry signboards support real-time traffic information and modern road management solutions.",
                image: "/assets/Ynm safety Smart  Intelligent Transportation Systems (ITS).png"
              }
            ],
            
            // Customer Success Stories / Projects (placeholder - can be updated later)
            projects: [],
            
            // Market Growth Information
            marketGrowth: {
              title: "Retro Reflective Gantry Signage Market Growth | YNM Safety",
              description: "The global gantry signage market is experiencing steady growth, valued at around USD 2–3 billion in 2024 and expected to grow at a 5–7% CAGR through 2030. Growth is driven by infrastructure expansion, smart city initiatives, and adoption of digital/LED signage.\n\nYNM Safety manufactures retro reflective gantry signages that support long-term performance and modern road safety requirements across various traffic environments.",
              cagr: "5-7%",
              growthFactors: [
                "Rapid expansion of highways and expressways",
                "Implementation of smart traffic management systems",
                "Growing emphasis on road safety and accident prevention",
                "Increasing demand for long-distance visible overhead signages",
                "Government investments in national and urban road infrastructure"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$2.5B",
                projectedMarketSize: "$3.8B",
                currentYear: "2024",
                projectedYear: "2030",
                highwayKmGlobal: "65M+",
                annualInstallations: "50,000+",
                roadsafetySpending: "$180B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "Asia Pacific", value: 38, color: "#74060D" },
                { region: "North America", value: 22, color: "#9A1B2E" },
                { region: "Europe", value: 20, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 12, color: "#D4A853" },
                { region: "Latin America", value: 8, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2021", value: 2.0 },
                { year: "2022", value: 2.2 },
                { year: "2023", value: 2.4 },
                { year: "2024", value: 2.5 },
                { year: "2025", value: 2.8 },
                { year: "2026", value: 3.1 }
              ]
            },
            
            // Global Availability - Structured by Region
            globalAvailability: {
              regions: [
                {
                  name: "North America",
                  countries: ["United States", "Canada", "Mexico"]
                },
                {
                  name: "Europe",
                  countries: ["Germany", "France", "United Kingdom", "Italy", "Spain"]
                },
                {
                  name: "Asia-Pacific",
                  countries: ["China", "India", "Japan", "South Korea", "Indonesia"]
                },
                {
                  name: "Middle East & Africa",
                  countries: ["United Arab Emirates", "Saudi Arabia", "South Africa", "Nigeria", "Egypt"]
                },
                {
                  name: "South America",
                  countries: ["Brazil", "Argentina", "Chile", "Ecuador", "Venezuela"]
                }
              ]
            },
            
            // Manufacturing Process - 9 Steps
            manufacturingProcessIntro: "YNM Safety manufactures retro reflective gantry signages through a controlled, quality-driven process to ensure high visibility, structural strength, durability, and compliance with national and international road safety standards.",
            manufacturingProcess: [
              {
                step: "01",
                title: "Raw Material Procurement & Inspection",
                description: "High-quality raw materials such as aluminium sheets, retro reflective sheeting, structural steel sections, fasteners, and protective coatings are sourced from certified suppliers. Each material is inspected to meet required quality, thickness, and performance standards before manufacturing."
              },
              {
                step: "02",
                title: "Aluminium Sheet Cutting & Panel Preparation",
                description: "Aluminium sheets are accurately cut to required gantry signage dimensions using precision cutting machines. Proper panel preparation ensures uniform size, smooth edges, and structural stability for overhead signboards."
              },
              {
                step: "03",
                title: "Surface Cleaning & Pre-Treatment",
                description: "The aluminium panels undergo surface cleaning and chemical pre-treatment to remove oil, dust, and impurities. This step improves adhesion of retro reflective sheeting and enhances long-term durability."
              },
              {
                step: "04",
                title: "Application of Retro Reflective Sheeting",
                description: "Certified retro reflective sheeting (Engineer Grade, High Intensity, or Diamond Grade) is carefully applied to the prepared aluminium panels. Controlled application ensures wrinkle-free bonding, uniform reflectivity, and long-distance visibility."
              },
              {
                step: "05",
                title: "Graphic Printing & Message Overlay",
                description: "Traffic symbols, route information, and directional text are applied using high-quality digital printing or cut vinyl overlays. UV-resistant inks and protective overlays ensure clear readability and color stability in all weather conditions."
              },
              {
                step: "06",
                title: "Gantry Structure Fabrication",
                description: "Structural steel sections for gantry frames are fabricated, welded, and assembled as per approved engineering drawings. YNM Safety manufactures gantry structures with high load-bearing capacity to support large overhead signboards safely."
              },
              {
                step: "07",
                title: "Quality Testing & Reflectivity Inspection",
                description: "Finished gantry signages undergo strict quality checks, including reflectivity testing, adhesion strength, dimensional accuracy, and structural inspection. All products are tested to comply with MoRTH, IRC, IS, and ASTM standards."
              },
              {
                step: "08",
                title: "Packing & Labeling",
                description: "Approved gantry signage panels and structures are packed using protective materials to prevent transit damage. Each package is properly labeled with product details, project information, and handling instructions."
              },
              {
                step: "09",
                title: "Storage & Dispatch",
                description: "The finished retro reflective gantry signages are stored in a clean and secure facility before dispatch. Products are dispatched with proper documentation to ensure safe delivery to project sites across India and global markets."
              }
            ],
            
            // Pricing Information - Toggle between Reflective Part and MS Part
            pricing: {
              hasToggle: true,
              pricingTypes: [
                {
                  id: "reflective",
                  name: "Reflective Part",
                  description: "Retro reflective sheeting on aluminium panels",
                  basePriceINR: 420,
                  unit: "per sq. ft",
                  icon: "✨"
                },
                {
                  id: "ms-part",
                  name: "MS Part (Mild Steel)",
                  description: "Gantry structure and steel components",
                  basePriceINR: 110,
                  unit: "per kg",
                  icon: "🔩"
                }
              ],
              // Default pricing for backwards compatibility
              basePriceINR: 420,
              currency: "INR",
              unit: "per sq. ft",
              displayPrice: "₹420 per sq. ft (Reflective Part)",
              bulkDiscounts: [
                { minQuantity: 5, discount: 3 },
                { minQuantity: 10, discount: 5 },
                { minQuantity: 20, discount: 8 }
              ]
            },
            
            // Statistics
            statistics: {
              annualCapacity: "180 gantries",
              productionSpeed: "15 gantries",
              qualityStandards: "ISO 9001:2015",
              exportCountries: "20+"
            },
            
            // Quality Certificates
            certificates: [
              {
                id: "iso-9001",
                title: "ISO 9001:2015",
                description: "Quality Management System Certification",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "shield"
              },
              {
                id: "irc-67",
                title: "IRC 67",
                description: "Indian Roads Congress Standard for Road Signs",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "check"
              },
              {
                id: "morth",
                title: "MoRTH",
                description: "Ministry of Road Transport & Highways Specifications",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "check"
              }
            ],
            
            // Gallery Images
            gallery: [
              "/assets/Ynm safety signages.png",
              "/assets/Ynm safety Highways & Expressways.png",
              "/assets/Ynm safety Urban Roads & City streets.png",
              "/assets/Ynm safety Toll ways & Bridges.png",
              "/assets/ynm safety Airports & Railway Stations.png",
              "/assets/Ynm safety Industrial sites & port areas.png",
              "/assets/Ynm safety Commercial &  Advertising.png",
              "/assets/Ynm safety Smart  Intelligent Transportation Systems (ITS).png"
            ]
          },
          {
            id: "sg6",
            slug: "cantilever-signage-manufacturers",
            name: "Cantilever Signage",
            shortDesc: "High-visibility cantilever signages manufactures for highways, expressways, and global road safety infrastructure.",
            desc: "Robust and high-visibility overhead cantilever signage solutions for highways, expressways, and major road corridors. Single-pole mounted structures for advance traffic information.",
            image: "/assets/ynm safety cantilever.png",
            heroImage: "/assets/ynm safety cantilever.png",
            specs: ["Single-Pole Cantilever", "High visibility", "15-20 Years Design Life", "IRC 67 compliant"],
            
            // SEO Meta Information
            meta: {
              title: "Cantilever Signage Manufacturers | Worldwide Supply | YNM Safety",
              description: "Leading Cantilever signages manufactures delivering durable highway and road safety signages worldwide. YNM Safety manufactures high-quality cantilever signages compliant with international standards.",
              slug: "/cantilever-signage-manufacturers"
            },
            
            // Product Overview
            overview: "YNM Safety is one of the trusted Cantilever signages manufactures, delivering robust and high-visibility overhead signage solutions for highways, expressways, and major road corridors across global markets. Cantilever signages are designed to provide advance traffic information without obstructing road movement, ensuring maximum visibility and improved driver response.\n\nAs YNM Safety manufactures premium-quality signages, our cantilever structures are engineered to withstand high wind loads, extreme weather conditions, and long-term outdoor exposure. These signages are widely used for lane guidance, directional information, exit identification, and regulatory traffic control.\n\nAll cantilever signages are manufactured with strict quality control and comply with international road safety standards, making them suitable for government, EPC, and private infrastructure projects worldwide.",
            detailedDescription: "YNM Safety is one of the trusted Cantilever signages manufactures, delivering robust and high-visibility overhead signage solutions for highways, expressways, and major road corridors across global markets. Cantilever signages are designed to provide advance traffic information without obstructing road movement, ensuring maximum visibility and improved driver response.\n\nAs YNM Safety manufactures premium-quality signages, our cantilever structures are engineered to withstand high wind loads, extreme weather conditions, and long-term outdoor exposure. These signages are widely used for lane guidance, directional information, exit identification, and regulatory traffic control.\n\nAll cantilever signages are manufactured with strict quality control and comply with international road safety standards, making them suitable for government, EPC, and private infrastructure projects worldwide.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "Cantilever Signage Structure" },
              { label: "Material", value: "Structural Steel / Mild Steel" },
              { label: "Finish", value: "Hot Dip Galvanized / Painted" },
              { label: "Sign Board", value: "Retro-Reflective Sheeting" },
              { label: "Mounting Type", value: "Single-Pole Cantilever" },
              { label: "Design Life", value: "15-20 Years" },
              { label: "Application Area", value: "High-Speed & Urban Road Networks" },
              { label: "Compliance", value: "IRC 67, MoRTH, ISO 9001:2015" }
            ],
            
            // Detailed Specifications for spec table
            detailedSpecs: [
              {
                label: "Country of Origin",
                value: "India",
                icon: "location"
              },
              {
                label: "Manufacturing Location",
                value: "Hyderabad",
                icon: "location"
              },
              {
                label: "Net Weight",
                value: "Variable",
                icon: "weight"
              },
              {
                label: "Packing Type",
                value: "Wrapped with bubble wrap",
                icon: "package"
              },
              {
                label: "Quality Standards",
                value: "IRC 67, MoRTH, ISO 9001:2015",
                icon: "standard"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "As Per Project Based",
                icon: "package"
              },
              {
                label: "HSN Code",
                value: "831000",
                icon: "standard"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: Cantilever Signage Structure",
                "Material: Structural Steel / Mild Steel",
                "Finish: Hot Dip Galvanized / Painted",
                "Sign Board: Retro-Reflective Sheeting",
                "Mounting Type: Single-Pole Cantilever",
                "Design Life: 15-20 Years",
                "Application: High-Speed & Urban Road Networks",
                "Compliance: IRC 67, MoRTH, ISO 9001:2015",
                "HSN Code: 831000"
              ],
              keyFeatures: [
                "Excellent visibility from long distances",
                "Strong structural stability in high-wind environments",
                "Corrosion-resistant for long service life",
                "Custom-designed for multi-lane roadways",
                "Fully compliant with global safety norms",
                "Low maintenance with high durability"
              ],
              advantages: [
                "Enhances driver awareness and road safety",
                "Reduces last-moment lane changes",
                "Ideal for high-speed and controlled-access roads",
                "Low maintenance with high durability",
                "Trusted signages manufacturers – YNM Safety",
                "Meets government and international road safety standards"
              ]
            },
            
            features: [
              "Excellent visibility from long distances",
              "Strong structural stability in high-wind environments",
              "Corrosion-resistant for long service life",
              "Custom-designed for multi-lane roadways",
              "Fully compliant with global safety norms",
              "Low maintenance with high durability"
            ],
            
            advantages: [
              "Enhances driver awareness and road safety",
              "Reduces last-moment lane changes",
              "Ideal for high-speed and controlled-access roads",
              "Low maintenance with high durability",
              "Trusted signages manufacturers – YNM Safety",
              "Meets government and international road safety standards"
            ],
            
            // Application Areas with images and hover effects
            applicationAreas: [
              {
                id: "app1",
                title: "Highways & Expressways",
                description: "Cantilever signages provide clear overhead traffic guidance on highways and expressways.",
                image: "/assets/YNM Safety Cantilever Highways & Expressways.png",
                details: "Cantilever signages ensure maximum visibility across multiple lanes without obstructing traffic flow. They are designed to withstand high wind loads and high-speed vehicle conditions. This improves driver response time and overall road safety."
              },
              {
                id: "app2",
                title: "Urban Roads & Streets",
                description: "Cantilever signages are ideal for urban roads and busy city streets.",
                image: "/assets/YNM Safety Cantilever Urban Roads & Streets.png",
                details: "Elevated cantilever signages remain clearly visible even in congested traffic conditions. They deliver advance directional and lane information to drivers. This helps reduce confusion and improves traffic movement in urban areas."
              },
              {
                id: "app3",
                title: "Toll Plazas",
                description: "Cantilever signages are widely used at toll plazas for clear lane and regulatory guidance.",
                image: "/assets/YNM Safety Cantilever Toll Plazas.png",
                details: "At toll plazas, cantilever signages display lane usage, toll instructions, and regulatory messages. Their strong structural design ensures reliability in high-stress zones. This enhances safety and operational efficiency."
              },
              {
                id: "app4",
                title: "Industrial Areas",
                description: "Cantilever signages support safe traffic movement in industrial areas.",
                image: "/assets/YNM Safety Cantilever Industrial areas.png",
                details: "Cantilever signages provide clear directional and warning information for heavy vehicles. Their robust construction withstands harsh industrial environments. This improves navigation and reduces accident risks within industrial zones."
              },
              {
                id: "app5",
                title: "Ports & Logistics Hubs",
                description: "Cantilever signages are suitable for ports and logistics hubs with heavy vehicle traffic.",
                image: "/assets/YNM Safety Cantilever Ports & Logistics Hubs.png",
                details: "Overhead cantilever signages offer high visibility in large cargo and logistics areas. They guide vehicles through complex routes and loading zones. This ensures smooth traffic flow and improved safety operations."
              },
              {
                id: "app6",
                title: "Smart / Intelligent Transportation Systems (ITS)",
                description: "Cantilever signages play a key role in smart and intelligent transportation systems.",
                image: "/assets/Ynm safety Smart  Intelligent Transportation Systems (ITS).png",
                details: "Cantilever signages integrate effectively with ITS infrastructure for traffic management. Their elevated positioning supports clear data visibility and driver communication. This contributes to efficient and modern road management systems."
              }
            ],
            
            applications: [
              {
                title: "Highways & Expressways",
                short: "Cantilever signages provide clear overhead traffic guidance on highways and expressways.",
                hover: "Cantilever signages ensure maximum visibility across multiple lanes without obstructing traffic flow. They are designed to withstand high wind loads and high-speed vehicle conditions. This improves driver response time and overall road safety.",
                image: "/assets/YNM Safety Cantilever Highways & Expressways.png"
              },
              {
                title: "Urban Roads & Streets",
                short: "Cantilever signages are ideal for urban roads and busy city streets.",
                hover: "Elevated cantilever signages remain clearly visible even in congested traffic conditions. They deliver advance directional and lane information to drivers. This helps reduce confusion and improves traffic movement in urban areas.",
                image: "/assets/YNM Safety Cantilever Urban Roads & Streets.png"
              },
              {
                title: "Toll Plazas",
                short: "Cantilever signages are widely used at toll plazas for clear lane and regulatory guidance.",
                hover: "At toll plazas, cantilever signages display lane usage, toll instructions, and regulatory messages. Their strong structural design ensures reliability in high-stress zones. This enhances safety and operational efficiency.",
                image: "/assets/YNM Safety Cantilever Toll Plazas.png"
              },
              {
                title: "Industrial Areas",
                short: "Cantilever signages support safe traffic movement in industrial areas.",
                hover: "Cantilever signages provide clear directional and warning information for heavy vehicles. Their robust construction withstands harsh industrial environments. This improves navigation and reduces accident risks within industrial zones.",
                image: "/assets/YNM Safety Cantilever Industrial areas.png"
              },
              {
                title: "Ports & Logistics Hubs",
                short: "Cantilever signages are suitable for ports and logistics hubs with heavy vehicle traffic.",
                hover: "Overhead cantilever signages offer high visibility in large cargo and logistics areas. They guide vehicles through complex routes and loading zones. This ensures smooth traffic flow and improved safety operations.",
                image: "/assets/YNM Safety Cantilever Ports & Logistics Hubs.png"
              },
              {
                title: "Smart / Intelligent Transportation Systems (ITS)",
                short: "Cantilever signages play a key role in smart and intelligent transportation systems.",
                hover: "Cantilever signages integrate effectively with ITS infrastructure for traffic management. Their elevated positioning supports clear data visibility and driver communication. This contributes to efficient and modern road management systems.",
                image: "/assets/Ynm safety Smart  Intelligent Transportation Systems (ITS).png"
              }
            ],
            
            // Customer Success Stories / Projects (placeholder - can be updated later)
            projects: [],
            
            // Market Growth Information
            marketGrowth: {
              title: "Cantilever Signage Market Growth | YNM Safety",
              description: "In 2023–24, the global portable cantilever sign systems market was valued at around USD 1.28 billion, showing growth from the previous year's baseline as demand expanded across infrastructure and commercial sectors. Analysts forecast that this segment will continue to grow at a steady CAGR of about 6.4%, lifting the market to roughly USD 2.22 billion by 2033.\n\nYNM Safety manufactures cantilever signages that support long-term performance and modern road safety requirements across various traffic environments.",
              cagr: "6.4%",
              growthFactors: [
                "Urbanization and Infrastructure Expansion",
                "Government Regulations and Safety Initiatives",
                "Technological Advancements",
                "Versatility and Flexibility",
                "Rising Demand for Durable Signage"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$1.28B",
                projectedMarketSize: "$2.22B",
                currentYear: "2024",
                projectedYear: "2033",
                highwayKmGlobal: "65M+",
                annualInstallations: "40,000+",
                roadsafetySpending: "$180B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "Asia Pacific", value: 38, color: "#74060D" },
                { region: "North America", value: 22, color: "#9A1B2E" },
                { region: "Europe", value: 20, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 12, color: "#D4A853" },
                { region: "Latin America", value: 8, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2021", value: 1.05 },
                { year: "2022", value: 1.15 },
                { year: "2023", value: 1.22 },
                { year: "2024", value: 1.28 },
                { year: "2025", value: 1.40 },
                { year: "2026", value: 1.55 }
              ]
            },
            
            // Global Availability - Structured by Region
            globalAvailability: {
              regions: [
                {
                  name: "Asia",
                  countries: ["India", "China", "Japan", "South Korea", "United Arab Emirates", "Saudi Arabia", "Singapore", "Malaysia"]
                },
                {
                  name: "Europe",
                  countries: ["Germany", "United Kingdom", "France", "Italy", "Spain", "Netherlands", "Sweden", "Poland"]
                },
                {
                  name: "North America",
                  countries: ["United States", "Canada", "Mexico"]
                },
                {
                  name: "South America",
                  countries: ["Brazil", "Argentina", "Chile", "Colombia"]
                },
                {
                  name: "Africa",
                  countries: ["South Africa", "Egypt", "Nigeria", "Kenya"]
                },
                {
                  name: "Oceania",
                  countries: ["Australia", "New Zealand"]
                }
              ]
            },
            
            // Manufacturing Process - 10 Steps
            manufacturingProcessIntro: "As one of the leading Cantilever signages manufacturers, YNM Safety Manufactures follows a precision-driven and quality-controlled production process to deliver durable, high-visibility signages for highway, road, and infrastructure projects worldwide. Below is the complete manufacturing workflow from raw material selection to final dispatch.",
            manufacturingProcess: [
              {
                step: "01",
                title: "Raw Material Selection & Quality Inspection",
                description: "The manufacturing process of cantilever signage begins with sourcing premium-grade raw materials to ensure structural strength and long service life. Materials include high-tensile structural steel, aluminum or GI sheets for signage panels, high-intensity reflective sheeting, industrial fasteners, and anti-corrosive coatings. Each batch undergoes strict quality inspection before production."
              },
              {
                step: "02",
                title: "Steel Cutting & Structural Fabrication",
                description: "Steel pipes, plates, and channels are precision-cut using CNC machines and hydraulic shearing systems. These components form the vertical support poles, horizontal cantilever arms, base plates, and stiffeners. Accurate fabrication ensures proper load distribution and stability for cantilever signages installed in high-wind and heavy-traffic areas."
              },
              {
                step: "03",
                title: "Welding & Cantilever Frame Assembly",
                description: "Cut steel components are assembled and welded using MIG and ARC welding techniques to create a rigid cantilever structure. All welded joints are checked for strength, alignment, and dimensional accuracy to meet safety and engineering standards followed by professional cantilever signages manufacturers."
              },
              {
                step: "04",
                title: "Surface Preparation & Corrosion Protection",
                description: "To enhance durability and weather resistance, the fabricated cantilever structure undergoes: Shot blasting or sand blasting to remove rust and impurities, application of anti-corrosive primer, and hot-dip galvanization or epoxy coating. This process ensures long-term protection against corrosion, moisture, and extreme environmental conditions."
              },
              {
                step: "05",
                title: "Signage Panel Manufacturing",
                description: "Signage panels are manufactured using aluminum or GI sheets and precisely cut to required dimensions. High-intensity reflective sheeting is applied for maximum visibility. Graphics, symbols, and text are added using digital printing, vinyl pasting, or screen printing, ensuring compliance with international signage standards."
              },
              {
                step: "06",
                title: "Painting & Final Finishing",
                description: "The cantilever structure is painted with weather-resistant, UV-protected industrial paints. This step enhances visual appeal, improves visibility, and extends the life of the signages in outdoor environments."
              },
              {
                step: "07",
                title: "Final Assembly & Mounting",
                description: "Manufactured signage panels are securely mounted onto the cantilever structure using heavy-duty bolts and fixtures. Electrical components are integrated where illuminated signages are required. All assemblies are tightened and rechecked for safety."
              },
              {
                step: "08",
                title: "Quality Testing & Inspection",
                description: "Every cantilever signage undergoes multiple quality checks, including: Dimensional accuracy, weld strength and finish, coating thickness, reflective performance and visual clarity. Load and wind-resistance inspections ensure the signages perform reliably in real-world conditions."
              },
              {
                step: "09",
                title: "Packing & Labeling",
                description: "Approved cantilever signage panels and structures are packed using protective materials to prevent transit damage. Each package is properly labeled with product details, project information, and handling instructions."
              },
              {
                step: "10",
                title: "Storage & Dispatch",
                description: "Once approved, the finished cantilever signages are carefully packed with protective materials to prevent transit damage. Each dispatch includes proper labeling, installation guidelines, and quality assurance documents, ensuring safe delivery to project locations worldwide."
              }
            ],
            
            // Pricing Information - Toggle between Reflective Part and MS Part
            pricing: {
              hasToggle: true,
              pricingTypes: [
                {
                  id: "reflective",
                  name: "Reflective Part",
                  description: "Retro reflective sheeting on aluminium/GI panels",
                  basePriceINR: 420,
                  unit: "per sq. ft",
                  icon: "✨"
                },
                {
                  id: "ms-part",
                  name: "MS Part (Mild Steel)",
                  description: "Cantilever structure and steel components",
                  basePriceINR: 110,
                  unit: "per kg",
                  icon: "🔩"
                }
              ],
              // Default pricing for backwards compatibility
              basePriceINR: 420,
              currency: "INR",
              unit: "per sq. ft",
              displayPrice: "₹420 per sq. ft (Reflective Part)",
              bulkDiscounts: [
                { minQuantity: 5, discount: 3 },
                { minQuantity: 10, discount: 5 },
                { minQuantity: 20, discount: 8 }
              ]
            },
            
            // Statistics
            statistics: {
              annualCapacity: "240-300 cantilevers",
              productionSpeed: "20-25 cantilevers",
              qualityStandards: "ISO 9001:2015",
              exportCountries: "20+"
            },
            
            // Quality Certificates
            certificates: [
              {
                id: "iso-9001",
                title: "ISO 9001:2015",
                description: "Quality Management System Certification",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "shield"
              },
              {
                id: "irc-67",
                title: "IRC 67",
                description: "Indian Roads Congress Standard for Road Signs",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "check"
              },
              {
                id: "morth",
                title: "MoRTH",
                description: "Ministry of Road Transport & Highways Specifications",
                pdfPath: "/certificates/ynm-safety-iso-9001-2015.pdf",
                icon: "check"
              }
            ],
            
            // Gallery Images
            gallery: [
              "/assets/ynm safety cantilever.png",
              "/assets/YNM Safety Cantilever Highways & Expressways.png",
              "/assets/YNM Safety Cantilever Urban Roads & Streets.png",
              "/assets/YNM Safety Cantilever Toll Plazas.png",
              "/assets/YNM Safety Cantilever Industrial areas.png",
              "/assets/YNM Safety Cantilever Ports & Logistics Hubs.png",
              "/assets/Ynm safety Smart  Intelligent Transportation Systems (ITS).png"
            ]
          }
        ]
      },
      fabrication: {
        title: "Fabrication",
        description: "Custom steel and metal fabrication solutions. From structural components to precision-engineered parts for all industrial needs.",
        icon: "⚙️",
        simpleDisplay: true, // Flag for simplified display (only name and photo)
        products: [
          {
            id: "fab1",
            name: "Sign Board Structures",
            desc: "Custom fabricated sign board structures for highways and roads.",
            image: "/assets/product-structural-steel.png",
            specs: ["Steel Structure", "Custom Design", "Durable"]
          },
          {
            id: "fab2",
            name: "Cantilever Structures",
            desc: "Heavy-duty cantilever structures for road signage applications.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Cantilever Design", "High Strength", "Weather Resistant"]
          },
          {
            id: "fab3",
            name: "Gantry Structures",
            desc: "Overhead gantry structures for highway signage systems.",
            image: "/assets/product-structural-steel.png",
            specs: ["Overhead Design", "Large Span", "Heavy Duty"]
          },
          {
            id: "fab4",
            name: "VMS Structures",
            desc: "Variable Message Sign structures for intelligent transportation.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["VMS Compatible", "Modular", "Sturdy Construction"]
          },
          {
            id: "fab5",
            name: "ITMS Structures",
            desc: "Intelligent Traffic Management System structures.",
            image: "/assets/product-structural-steel.png",
            specs: ["ITMS Ready", "Smart Integration", "Durable"]
          },
          {
            id: "fab6",
            name: "Street Light Poles",
            desc: "Galvanized street light poles for urban lighting.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Galvanized", "Multiple Heights", "Corrosion Resistant"]
          },
          {
            id: "fab7",
            name: "Solar Light Poles",
            desc: "Solar-ready light poles for eco-friendly lighting solutions.",
            image: "/assets/product-structural-steel.png",
            specs: ["Solar Compatible", "Energy Efficient", "Sustainable"]
          },
          {
            id: "fab8",
            name: "High Mast",
            desc: "High mast lighting poles for large area illumination.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["High Rise", "Wide Coverage", "Stadium Grade"]
          },
          {
            id: "fab9",
            name: "Scaffolding Parts",
            desc: "Quality scaffolding components for construction sites.",
            image: "/assets/product-structural-steel.png",
            specs: ["Safety Certified", "Modular", "Easy Assembly"]
          },
          {
            id: "fab10",
            name: "Shuttering Materials",
            desc: "Concrete shuttering materials for construction projects.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Heavy Duty", "Reusable", "Precision Made"]
          },
          {
            id: "fab11",
            name: "Cup Lock",
            desc: "Cup lock scaffolding system components.",
            image: "/assets/product-structural-steel.png",
            specs: ["Quick Lock", "Versatile", "Strong Connection"]
          },
          {
            id: "fab12",
            name: "Ledger",
            desc: "Scaffolding ledgers for horizontal bracing.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Standard Sizes", "Galvanized", "High Load Capacity"]
          },
          {
            id: "fab13",
            name: "Base Jack",
            desc: "Adjustable base jacks for scaffolding leveling.",
            image: "/assets/product-structural-steel.png",
            specs: ["Adjustable Height", "Heavy Load", "Threaded Rod"]
          },
          {
            id: "fab14",
            name: "I-Girders",
            desc: "Steel I-Girders for bridge and infrastructure construction.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["High Strength", "Bridge Grade", "Custom Lengths"]
          },
          {
            id: "fab15",
            name: "RE Panel Moulds",
            desc: "Reinforced Earth panel moulds for retaining walls.",
            image: "/assets/product-structural-steel.png",
            specs: ["Precision Cast", "Durable", "Multiple Sizes"]
          },
          {
            id: "fab16",
            name: "Foot Over Bridges",
            desc: "Prefabricated foot over bridge structures.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Pedestrian Safe", "Modular Design", "Quick Assembly"]
          },
          {
            id: "fab17",
            name: "Gabion Wire Mesh",
            desc: "Gabion wire mesh for erosion control and retaining walls.",
            image: "/assets/product-structural-steel.png",
            specs: ["Galvanized Wire", "Corrosion Resistant", "Flexible"]
          },
          {
            id: "fab18",
            name: "Bridge Bearings",
            desc: "Elastomeric and metallic bridge bearings.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Load Distribution", "Movement Absorption", "Long Life"]
          },
          {
            id: "fab19",
            name: "Anchor Cones",
            desc: "Precast concrete anchor cones for construction.",
            image: "/assets/product-structural-steel.png",
            specs: ["Precise Dimensions", "Easy Installation", "Reusable"]
          },
          {
            id: "fab20",
            name: "Open Web Bridge Girders",
            desc: "Open web steel girders for bridge construction.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Lightweight", "High Span", "Cost Effective"]
          },
          {
            id: "fab21",
            name: "Modular Pontoon",
            desc: "Modular floating pontoon systems.",
            image: "/assets/product-structural-steel.png",
            specs: ["Floating Platform", "Interlocking", "Marine Grade"]
          },
          {
            id: "fab22",
            name: "Expansion Joints",
            desc: "Bridge and road expansion joints.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Thermal Movement", "Waterproof", "Durable"]
          },
          {
            id: "fab23",
            name: "Pedestrian Guardrails",
            desc: "Safety guardrails for pedestrian pathways.",
            image: "/assets/product-structural-steel.png",
            specs: ["Safety Barrier", "Aesthetic Design", "Galvanized"]
          },
          {
            id: "fab24",
            name: "Noise Barriers",
            desc: "Sound barrier panels for highways and railways.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Noise Reduction", "Weather Proof", "Easy Install"]
          },
          {
            id: "fab25",
            name: "Adjustable Prop Jack",
            desc: "Adjustable prop jacks for slab support.",
            image: "/assets/product-structural-steel.png",
            specs: ["Height Adjustable", "Heavy Load", "Easy Operation"]
          },
          {
            id: "fab26",
            name: "Barricading Boards",
            desc: "Traffic barricading boards for road safety.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["High Visibility", "Reflective", "Portable"]
          },
          {
            id: "fab27",
            name: "Heavy Duty Racks",
            desc: "Industrial heavy duty storage racks.",
            image: "/assets/product-industrial-racking.png",
            specs: ["High Capacity", "Warehouse Grade", "Adjustable"]
          },
          {
            id: "fab28",
            name: "Slotted Angle Racks",
            desc: "Versatile slotted angle storage racks.",
            image: "/assets/product-industrial-racking.png",
            specs: ["Modular Design", "Easy Assembly", "Cost Effective"]
          },
          {
            id: "fab29",
            name: "Camera Poles",
            desc: "CCTV and surveillance camera mounting poles.",
            image: "/assets/product-structural-steel.png",
            specs: ["Multiple Heights", "Galvanized", "Sturdy Base"]
          },
          {
            id: "fab30",
            name: "Parking Signages",
            desc: "Parking lot signage structures and boards.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Reflective", "Weather Resistant", "Clear Marking"]
          },
          {
            id: "fab31",
            name: "Solar Panel Structures / Frames",
            desc: "Mounting structures and frames for solar panels.",
            image: "/assets/product-structural-steel.png",
            specs: ["Solar Mounting", "Tilt Adjustable", "Corrosion Resistant"]
          },
          {
            id: "fab32",
            name: "Railway Structures",
            desc: "Steel structures for railway infrastructure.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Railway Grade", "Heavy Duty", "Safety Certified"]
          },
          {
            id: "fab33",
            name: "GI Dustbins",
            desc: "Galvanized iron dustbins for public spaces.",
            image: "/assets/product-structural-steel.png",
            specs: ["Galvanized", "Durable", "Easy Clean"]
          },
          {
            id: "fab34",
            name: "Rickshaw",
            desc: "Custom fabricated rickshaw frames and parts.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Custom Design", "Lightweight", "Sturdy Frame"]
          }
        ]
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
  Object.entries(productsData.manufacturing.categories).forEach(([categoryKey, category]) => {
    category.products.forEach((product) => {
      allProducts.push({
        ...product,
        category: categoryKey,
        categoryTitle: category.title
      });
    });
  });
  return allProducts;
}

// Helper function to get product by ID or slug
export function getProductById(id) {
  const allProducts = getAllProducts();
  // Try to find by id first
  let product = allProducts.find((p) => p.id === id);
  // If not found, try to find by slug
  if (!product) {
    product = allProducts.find((p) => p.slug === id);
  }
  return product;
}

// Helper function to get product by slug
export function getProductBySlug(slug) {
  const allProducts = getAllProducts();
  return allProducts.find((p) => p.slug === slug);
}
