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
                value: "500 kg / Project-based",
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
                quantity: "1,500 sqms",
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
                quantity: "20,000 sqms",
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
                quantity: "12,000 sqms",
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
              annualCapacity: "10,800 MT",
              productionSpeed: "900 MT/month",
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
