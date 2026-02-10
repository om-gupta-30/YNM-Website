// All products organized under Manufacturing (all products are manufactured and exported)
export const productsData = {
  manufacturing: {
    title: "What We Manufacture",
    description: "Premium quality products manufactured in-house with strict quality control. All our products are exported to 50+ countries worldwide.",
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
            slug: "waterborne-airfield-marking-paints-manufacturers",
            name: "Waterborne Airfield Marking Paints",
            shortDesc: "YNM Safety manufactures premium waterborne airfield marking paints engineered for superior visibility, fast drying, and long-lasting performance across airport and aviation infrastructure.",
            desc: "YNM Safety manufactures premium waterborne airfield marking paints engineered for superior visibility, fast drying, and long-lasting performance across airport and aviation infrastructure.",
            image: "/assets/YNM Safety Runways.png",
            heroImage: "/assets/YNM Safety Runways.png",
            specs: ["Waterborne base", "Fast drying", "High visibility", "Weather resistant", "Strong adhesion", "Low VOC"],
            
            // SEO Meta Information
            meta: {
              title: "Waterborne Airfield Marking Paints Manufacturers | Airport Marking Paints | YNM Safety",
              description: "YNM Safety manufactures high-quality waterborne airfield marking paints for runways, taxiways, aprons, and helipads, offering durable, fast-drying, and high-visibility airport marking solutions.",
              slug: "/waterborne-airfield-marking-paints-manufacturers"
            },
            
            // Product Overview
            overview: "YNM Safety is a trusted name among waterborne airfield marking paints manufactures, delivering high-performance airport marking solutions for modern aviation infrastructure. As leading YNM Safety manufactures, our YNM Safety waterborne paints are specially formulated for runways, taxiways, aprons, and helipads, ensuring clear guidance, safety, and operational efficiency in critical airfield environments. Our YNM Safety Waterborne Airfield Marking Paints manufactures products offer excellent adhesion, fast curing, and long service life, making them ideal for high-traffic airport surfaces exposed to aircraft movement and harsh weather conditions.",
            detailedDescription: "YNM Safety is a trusted name among waterborne airfield marking paints manufactures, delivering high-performance airport marking solutions for modern aviation infrastructure. As leading YNM Safety manufactures, our YNM Safety waterborne paints are specially formulated for runways, taxiways, aprons, and helipads, ensuring clear guidance, safety, and operational efficiency in critical airfield environments. Our YNM Safety Waterborne Airfield Marking Paints manufactures products offer excellent adhesion, fast curing, and long service life, making them ideal for high-traffic airport surfaces exposed to aircraft movement and harsh weather conditions.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "Waterborne Airfield Marking Paints" },
              { label: "Base", value: "Waterborne" },
              { label: "Finish", value: "Matt / Semi-Gloss" },
              { label: "Drying Time", value: "Fast Drying" },
              { label: "Weather Resistance", value: "Excellent" },
              { label: "Adhesion", value: "Strong adhesion on concrete & asphalt" },
              { label: "Visibility", value: "High contrast daytime & night visibility" },
              { label: "Compliance", value: "IS164- 2023" }
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
                value: "20Kg",
                icon: "weight"
              },
              {
                label: "Quality Standards",
                value: "IS164-2023, Federal Specification TTP 1952D, ISO 9001:2015",
                icon: "standard"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "1MT",
                icon: "package"
              },
              {
                label: "HSN Code",
                value: "32089090",
                icon: "standard"
              },
              {
                label: "Packing Type",
                value: "20Kg Container",
                icon: "package"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: Waterborne Airfield Marking Paints",
                "Base: Waterborne",
                "Finish: Matt / Semi-Gloss",
                "Drying Time: Fast Drying",
                "Weather Resistance: Excellent",
                "Adhesion: Strong adhesion on concrete & asphalt",
                "Visibility: High contrast daytime & night visibility",
                "Compliance: IS164- 2023",
                "HSN Code: 32089090"
              ],
              keyFeatures: [
                "High visibility for aviation safety",
                "Fast drying to minimize runway downtime",
                "Excellent adhesion on airfield surfaces",
                "UV and weather resistant formulation",
                "Low VOC, eco-friendly waterborne system",
                "Manufactured by trusted YNM Safety manufactures"
              ],
              advantages: [
                "Enhances runway and taxiway safety",
                "Ensures accurate aircraft guidance",
                "Reduces maintenance and repainting cycles",
                "Cost-effective airfield marking solution",
                "Trusted YNM Safety Waterborne Airfield Marking Paints manufactures"
              ]
            },
            
            features: [
              "High visibility for aviation safety",
              "Fast drying to minimize runway downtime",
              "Excellent adhesion on airfield surfaces",
              "UV and weather resistant formulation",
              "Low VOC, eco-friendly waterborne system",
              "Manufactured by trusted YNM Safety manufactures"
            ],
            
            advantages: [
              "Enhances runway and taxiway safety",
              "Ensures accurate aircraft guidance",
              "Reduces maintenance and repainting cycles",
              "Cost-effective airfield marking solution",
              "Trusted YNM Safety Waterborne Airfield Marking Paints manufactures"
            ],
            
            technicalSpecs: {
              "Product Type": "Waterborne Airfield Marking Paints",
              "Base": "Waterborne",
              "Finish": "Matt / Semi-Gloss",
              "Drying Time": "Fast Drying",
              "Weather Resistance": "Excellent",
              "Adhesion": "Strong adhesion on concrete & asphalt",
              "Visibility": "High contrast daytime & night visibility",
              "Compliance": "IS164- 2023",
              "Country of Origin": "India",
              "Manufacturing Location": "Hyderabad",
              "Net Weight": "20Kg",
              "Quality Standards": "IS164-2023, Federal Specification TTP 1952D, ISO 9001:2015",
              "MOQ": "1MT",
              "HSN Code": "32089090",
              "Packing Type": "20Kg Container"
            },
            
            // Application Areas with images
            applicationAreas: [
              {
                id: "app1",
                title: "Runways",
                description: "YNM Safety waterborne airfield marking paints deliver high-visibility runway markings for safe aircraft landing and take-off.",
                image: "/assets/YNM Safety Runways.png",
                details: "YNM Safety manufactures waterborne airfield marking paints designed to withstand heavy aircraft loads and extreme weather conditions. Our runway marking paints ensure long-lasting visibility and compliance with aviation safety standards."
              },
              {
                id: "app2",
                title: "Taxiways",
                description: "Waterborne airfield marking paints provide clear directional guidance on airport taxiways.",
                image: "/assets/YNM Safety Taxiways.png",
                details: "YNM Safety waterborne paints offer fast drying and strong adhesion for uninterrupted taxiway operations. Manufactured for precise markings that improve aircraft movement safety."
              },
              {
                id: "app3",
                title: "Aprons",
                description: "Waterborne airfield marking paints support safe aircraft servicing and ground operations on aprons.",
                image: "/assets/YNM Safety Aprons.png",
                details: "YNM Safety manufactures durable waterborne airfield marking paints resistant to surface wear and operational stress. Ideal for high-traffic apron zones requiring consistent marking clarity."
              },
              {
                id: "app4",
                title: "Aircraft Parking Bays",
                description: "Clear aircraft parking bay markings ensure accurate positioning and safety.",
                image: "/assets/YNM Safety Aircraft Parking Bays.png",
                details: "YNM Safety waterborne airfield marking paints manufactures supply high-contrast paints for aircraft parking areas. Designed for long-lasting visibility in busy airport environments."
              },
              {
                id: "app5",
                title: "Holding Position Markings",
                description: "Holding position markings improve runway safety and aircraft control.",
                image: "/assets/YNM Safety Holding position markings.png",
                details: "YNM Safety manufactures waterborne airfield marking paints for precise holding position identification. These markings reduce runway incursion risks and enhance pilot awareness."
              },
              {
                id: "app6",
                title: "Helipads",
                description: "Waterborne airfield marking paints provide durable and highly visible helipad markings.",
                image: "/assets/YNM Safety Helipads.png",
                details: "YNM Safety waterborne paints deliver excellent adhesion and clarity for rooftop and ground helipads. Manufactured to support safe helicopter landing and take-off operations."
              }
            ],
            
            applications: [
              {
                title: "Runways",
                short: "YNM Safety waterborne airfield marking paints deliver high-visibility runway markings for safe aircraft landing and take-off.",
                hover: "YNM Safety manufactures waterborne airfield marking paints designed to withstand heavy aircraft loads and extreme weather conditions. Our runway marking paints ensure long-lasting visibility and compliance with aviation safety standards.",
                image: "/assets/YNM Safety Runways.png"
              },
              {
                title: "Taxiways",
                short: "Waterborne airfield marking paints provide clear directional guidance on airport taxiways.",
                hover: "YNM Safety waterborne paints offer fast drying and strong adhesion for uninterrupted taxiway operations. Manufactured for precise markings that improve aircraft movement safety.",
                image: "/assets/YNM Safety Taxiways.png"
              },
              {
                title: "Aprons",
                short: "Waterborne airfield marking paints support safe aircraft servicing and ground operations on aprons.",
                hover: "YNM Safety manufactures durable waterborne airfield marking paints resistant to surface wear and operational stress. Ideal for high-traffic apron zones requiring consistent marking clarity.",
                image: "/assets/YNM Safety Aprons.png"
              },
              {
                title: "Aircraft Parking Bays",
                short: "Clear aircraft parking bay markings ensure accurate positioning and safety.",
                hover: "YNM Safety waterborne airfield marking paints manufactures supply high-contrast paints for aircraft parking areas. Designed for long-lasting visibility in busy airport environments.",
                image: "/assets/YNM Safety Aircraft Parking Bays.png"
              },
              {
                title: "Holding Position Markings",
                short: "Holding position markings improve runway safety and aircraft control.",
                hover: "YNM Safety manufactures waterborne airfield marking paints for precise holding position identification. These markings reduce runway incursion risks and enhance pilot awareness.",
                image: "/assets/YNM Safety Holding position markings.png"
              },
              {
                title: "Helipads",
                short: "Waterborne airfield marking paints provide durable and highly visible helipad markings.",
                hover: "YNM Safety waterborne paints deliver excellent adhesion and clarity for rooftop and ground helipads. Manufactured to support safe helicopter landing and take-off operations.",
                image: "/assets/YNM Safety Helipads.png"
              }
            ],
            
            // Pricing Information
            pricing: {
              basePriceINR: 150,
              currency: "INR",
              unit: "per kg",
              displayPrice: "₹150 per kg",
              packageSizes: [
                { size: "20 kg", priceINR: 150, moq: 50 },
                { size: "100 kg", priceINR: 145, moq: 20 },
                { size: "1000 kg", priceINR: 140, moq: 5 }
              ],
              bulkDiscounts: [
                { minQuantity: 1000, discount: 3 },
                { minQuantity: 5000, discount: 5 },
                { minQuantity: 10000, discount: 8 },
                { minQuantity: 25000, discount: 10 }
              ]
            },
            
            gallery: [
              "/assets/YNM Safety Runways.png",
              "/assets/YNM Safety Taxiways.png",
              "/assets/YNM Safety Aprons.png",
              "/assets/YNM Safety Aircraft Parking Bays.png",
              "/assets/YNM Safety Holding position markings.png",
              "/assets/YNM Safety Helipads.png"
            ],
            
            // Our Projects / Clients
            projects: [],
            
            meta: {
              title: "Waterborne Airfield Marking Paints Manufacturers | Airport Marking Paints | YNM Safety",
              description: "YNM Safety manufactures high-quality waterborne airfield marking paints for runways, taxiways, aprons, and helipads, offering durable, fast-drying, and high-visibility airport marking solutions.",
              slug: "/waterborne-airfield-marking-paints-manufacturers"
            },
            
            // Market Growth Information
            marketGrowth: {
              title: "Waterborne Airfield Marking Paint Market Growth",
              description: "The water airfield marking paint market is growing steadily, driven by global airport expansion and stricter aviation safety standards. The market was valued at around USD 550–600 million in recent years and is projected to reach nearly USD 900 million–1 billion by the early 2030s. This reflects an average CAGR of about 5–6% over the forecast period. Growth is further supported by rising air traffic and the shift toward eco-friendly, low-VOC water-based coatings.",
              cagr: "5-6%",
              growthFactors: [
                "Airport Infrastructure Expansion",
                "Environmental & Safety regulations",
                "Increasing Air traffic worldwide",
                "Technological Advancements in paint formulations",
                "Growth in Emerging Regions and new airport development"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$575M",
                projectedMarketSize: "$950M",
                currentYear: "2024",
                projectedYear: "2032",
                airportsGlobal: "41,000+",
                annualPaintConsumption: "15,000+ MT",
                aviationSafetySpending: "$12B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "North America", value: 32, color: "#74060D" },
                { region: "Europe", value: 28, color: "#9A1B2E" },
                { region: "Asia Pacific", value: 25, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 10, color: "#D4A853" },
                { region: "Latin America", value: 5, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2024", value: 0.575 },
                { year: "2026", value: 0.65 },
                { year: "2028", value: 0.75 },
                { year: "2030", value: 0.85 },
                { year: "2032", value: 0.95 }
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
                  countries: ["Germany", "United Kingdom", "France", "Italy", "Spain", "Russia", "Sweden", "Netherlands", "Switzerland", "Belgium", "Austria"]
                },
                {
                  name: "Asia & Asia-Pacific",
                  countries: ["China", "India", "Japan", "South Korea", "Australia", "Indonesia", "Vietnam", "Philippines", "Thailand", "Malaysia", "Taiwan"]
                },
                {
                  name: "Latin America",
                  countries: ["Brazil", "Argentina", "Colombia", "Chile", "Panama"]
                },
                {
                  name: "Middle East & Africa",
                  countries: ["United Arab Emirates", "Saudi Arabia", "Egypt", "South Africa", "Nigeria", "Israel", "Turkey"]
                }
              ]
            },
            
            performanceMetrics: "50 MT/month",
            
            statistics: {
              annualCapacity: "600 MT",
              exportCountries: "20+",
              qualityStandards: "IS164-2023",
              productionSpeed: "50 MT"
            },
            
            // Manufacturing Process
            manufacturingProcessIntro: "YNM Safety manufactures Waterborne Airfield Marking Paints through a controlled, quality-driven process to ensure excellent visibility, adhesion, weather resistance, and compliance with aviation safety standards.",
            manufacturingProcess: [
              {
                step: "01",
                title: "Raw Material Procurement",
                description: "High-quality raw materials such as acrylic or styrene-acrylic emulsions, titanium dioxide pigments, extender fillers, additives, defoamers, and deionized water are sourced from approved suppliers to ensure consistency, durability, and compliance with airfield standards."
              },
              {
                step: "02",
                title: "Raw Material Inspection & Quality Check",
                description: "All incoming raw materials are tested for parameters like purity, viscosity, particle size, and moisture content to ensure they meet aviation and environmental specifications before production begins."
              },
              {
                step: "03",
                title: "Pre-Mixing of Liquid Components",
                description: "Water, binders, wetting agents, dispersants, and other liquid additives are charged into the mixing vessel and blended at controlled speed to create a uniform base mixture."
              },
              {
                step: "04",
                title: "Pigment & Filler Dispersion",
                description: "High-opacity pigments such as titanium dioxide and selected fillers are slowly added to the pre-mix. High-speed dispersers are used to achieve fine particle dispersion for excellent color brightness and visibility."
              },
              {
                step: "05",
                title: "Grinding & Homogenization",
                description: "The paint slurry is processed through grinding equipment to ensure uniform particle size, smooth texture, and consistent film performance required for runway and taxiway markings."
              },
              {
                step: "06",
                title: "Let-Down & Final Mixing",
                description: "Additional binders, performance additives, anti-settling agents, and rheology modifiers are added during the let-down stage to achieve the required viscosity, drying time, skid resistance, and durability."
              },
              {
                step: "07",
                title: "Quality Control Testing",
                description: "The finished paint is tested for color consistency, viscosity, drying time, adhesion, reflectivity compatibility, abrasion resistance, and compliance with ICAO / FAA / DGCA standards."
              },
              {
                step: "08",
                title: "Filtration & Batch Approval",
                description: "The paint is filtered to remove any impurities or agglomerates. After final inspection and approval by the quality team, the batch is released for packing."
              },
              {
                step: "09",
                title: "Filling & Packaging",
                description: "Approved paint is filled into HDPE drums or containers of required capacity, properly sealed, batch-coded, and labeled with product specifications and safety information."
              },
              {
                step: "10",
                title: "Storage & Dispatch",
                description: "Packed materials are stored in a controlled warehouse environment and dispatched as per customer orders with proper documentation to ensure safe transport and on-time delivery to airfield projects."
              }
            ]
          }
        ]
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
            slug: "double-w-beam-crash-barriers-manufacturers",
            name: "Double W Beam Crash Barriers",
            shortDesc: "High-strength double W beam crash barrier manufactures delivering superior impact resistance, durability, and enhanced road safety for global infrastructure projects.",
            desc: "High-strength double W beam crash barrier manufactures delivering superior impact resistance, durability, and enhanced road safety for global infrastructure projects.",
            image: "/assets/YNM Safety Highways Expressways w double beam barrier.jpg",
            heroImage: "/assets/YNM Safety Highways Expressways w double beam barrier.jpg",
            specs: ["Double W-beam profile", "Hot-dip galvanized", "IS 5986 certified", "MoRTH compliant", "High tensile strength", "2.7mm/3.0mm thickness"],
            overview: "YNM Safety is one of the leading double W beam manufactures, delivering robust and reliable metal beam crash barriers engineered for maximum road safety and long-term performance. As trusted YNM Safety manufactures, our double W beam crash barriers are designed to absorb high-impact collisions, prevent vehicle crossovers, and reduce accident severity on highways and expressways. Manufactured using premium galvanized steel, our W beam barriers offer excellent corrosion resistance and structural strength. Our products are widely supplied to government projects, EPC contractors, and private infrastructure developers, making YNM Safety a preferred name among metal beam manufactures and w beam barrier manufactures across domestic and international markets.",
            detailedDescription: "YNM Safety is one of the leading double W beam manufactures, delivering robust and reliable metal beam crash barriers engineered for maximum road safety and long-term performance. As trusted YNM Safety manufactures, our double W beam crash barriers are designed to absorb high-impact collisions, prevent vehicle crossovers, and reduce accident severity on highways and expressways. Manufactured using premium galvanized steel, our W beam barriers offer excellent corrosion resistance and structural strength. Our products are widely supplied to government projects, EPC contractors, and private infrastructure developers, making YNM Safety a preferred name among metal beam manufactures and w beam barrier manufactures across domestic and international markets.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "Double W Beam Crash Barrier" },
              { label: "Material", value: "High-Grade Galvanized Steel" },
              { label: "Beam Thickness", value: "2.7 mm / 3.0 mm" },
              { label: "Beam Width", value: "310 mm" },
              { label: "Surface Finish", value: "Hot Dip Galvanized" },
              { label: "Coating Thickness", value: "550 – 610 GSM" },
              { label: "Impact Absorption", value: "High Energy Absorption" },
              { label: "Design Life", value: "20 – 25 Years" },
              { label: "Compliance", value: "ISO 9001: 2015" },
              { label: "Application Area", value: "Highways, Expressways, Bridges" }
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
                value: "30 Kg/Rm (Railways), 40 Kg/Rm (Highways)",
                icon: "weight"
              },
              {
                label: "Quality Standards",
                value: "IRC 119, MoRTH 803, ISO 9001:2015, EN 1317",
                icon: "standard"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "1000 rm (India), 5000 rm (Export)",
                icon: "package"
              },
              {
                label: "HSN Code",
                value: "73089090",
                icon: "standard"
              },
              {
                label: "Packing Type",
                value: "Standard",
                icon: "package"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: Double W Beam Crash Barrier",
                "Material: High-Grade Galvanized Steel",
                "Beam Thickness: 2.7 mm / 3.0 mm",
                "Beam Width: 310 mm",
                "Surface Finish: Hot Dip Galvanized",
                "Coating Thickness: 550 – 610 GSM",
                "Impact Absorption: High Energy Absorption",
                "Design Life: 20 – 25 Years",
                "Compliance: ISO 9001: 2015",
                "Application Area: Highways, Expressways, Bridges",
                "HSN Code: 73089090"
              ],
              keyFeatures: [
                "High impact energy absorption",
                "Superior corrosion resistance",
                "Long service life with minimal maintenance",
                "Designed for high-speed road safety",
                "Manufactured to global standards"
              ],
              advantages: [
                "Prevents vehicle cross-over accidents",
                "Reduces fatal crash severity",
                "Easy installation & replacement",
                "Cost-effective long-term safety solution",
                "Trusted double w beam manufactures – YNM Safety"
              ]
            },
            
            features: [
              "High impact energy absorption",
              "Superior corrosion resistance",
              "Long service life with minimal maintenance",
              "Designed for high-speed road safety",
              "Manufactured to global standards"
            ],
            
            advantages: [
              "Prevents vehicle cross-over accidents",
              "Reduces fatal crash severity",
              "Easy installation & replacement",
              "Cost-effective long-term safety solution",
              "Trusted double w beam manufactures – YNM Safety"
            ],
            
            technicalSpecs: {
              "Product Type": "Double W Beam Crash Barrier",
              "Material": "High-Grade Galvanized Steel",
              "Beam Thickness": "2.7 mm / 3.0 mm",
              "Beam Width": "310 mm",
              "Surface Finish": "Hot Dip Galvanized",
              "Coating Thickness": "550 – 610 GSM",
              "Impact Absorption": "High Energy Absorption",
              "Design Life": "20 – 25 Years",
              "Compliance": "ISO 9001: 2015",
              "Country of Origin": "India",
              "Manufacturing Location": "Hyderabad",
              "Net Weight": "30 Kg/Rm (Railways), 40 Kg/Rm (Highways)",
              "Quality Standards": "IRC 119, MoRTH 803, ISO 9001:2015, EN 1317",
              "MOQ": "1000 rm (India), 5000 rm (Export)",
              "HSN Code": "73089090",
              "Packing Type": "Standard"
            },
            
            // Application Areas with images
            applicationAreas: [
              {
                id: "app1",
                title: "Highways & Expressways",
                description: "YNM Safety double W beam crash barriers provide strong vehicle containment and enhanced safety on high-speed highways and expressways.",
                image: "/assets/YNM Safety Highways Expressways w double beam barrier.jpg",
                details: "YNM Safety manufactures high-quality double W beam barriers designed to absorb impact energy and prevent cross-over accidents. Our metal beam crash barriers meet MORTH and IRC standards, ensuring long-term durability and highway safety performance."
              },
              {
                id: "app2",
                title: "Urban Roads & Arterial Streets",
                description: "Double W beam barriers improve traffic discipline and road safety on busy urban roads and arterial streets.",
                image: "/assets/YNM Safety Urban roads arterial streets w double beam barrier.jpg",
                details: "YNM Safety metal beam manufactures supply crash barriers that protect vehicles and pedestrians in high-traffic city environments. These W beam barriers reduce accident severity and maintain structural stability under frequent impact conditions."
              },
              {
                id: "app3",
                title: "Bridges & Flyovers",
                description: "Metal beam crash barriers provide reliable edge protection on bridges and flyovers.",
                image: "/assets/YNM Safety Bridges flyovers w double beam barrier.jpg",
                details: "YNM Safety manufactures corrosion-resistant double W beam crash barriers ideal for elevated structures. Our W beam barrier manufactures ensure controlled vehicle deflection and long service life in demanding bridge conditions."
              },
              {
                id: "app4",
                title: "Curves, Ramps & Interchanges",
                description: "Double W beam barriers guide vehicles safely through sharp curves, ramps, and interchanges.",
                image: "/assets/YNM Safety Curves Ramps and Interchanges w double beam barrier.jpg",
                details: "YNM Safety double W beam manufactures design barriers that effectively absorb collision impact at high-risk curve locations. These metal beam crash barriers enhance vehicle stability and reduce run-off-road accidents."
              },
              {
                id: "app5",
                title: "Road Medians & Central Dividers",
                description: "W beam crash barriers prevent vehicle cross-overs and enhance median safety.",
                image: "/assets/YNM Safety Road medians central dividers w double beam barrier.jpg",
                details: "YNM Safety manufactures double W beam barriers for medians and central dividers to improve traffic separation. Our metal beam manufactures deliver high-strength barriers that minimize head-on collision risks."
              },
              {
                id: "app6",
                title: "Embankments, Slopes & Roadside Hazards",
                description: "Double W beam crash barriers protect vehicles from roadside hazards and steep embankments.",
                image: "/assets/YNM Safety Embankments Slopes and Roadside hazards w double beam barrier.jpg",
                details: "YNM Safety metal beam manufactures supply robust crash barriers for slope protection and hazard containment. These W beam barriers reduce vehicle roll-over risks and enhance overall roadside safety."
              }
            ],
            
            applications: [
              {
                title: "Highways & Expressways",
                short: "YNM Safety double W beam crash barriers provide strong vehicle containment and enhanced safety on high-speed highways and expressways.",
                hover: "YNM Safety manufactures high-quality double W beam barriers designed to absorb impact energy and prevent cross-over accidents. Our metal beam crash barriers meet MORTH and IRC standards, ensuring long-term durability and highway safety performance.",
                image: "/assets/YNM Safety Highways Expressways w double beam barrier.jpg"
              },
              {
                title: "Urban Roads & Arterial Streets",
                short: "Double W beam barriers improve traffic discipline and road safety on busy urban roads and arterial streets.",
                hover: "YNM Safety metal beam manufactures supply crash barriers that protect vehicles and pedestrians in high-traffic city environments. These W beam barriers reduce accident severity and maintain structural stability under frequent impact conditions.",
                image: "/assets/YNM Safety Urban roads arterial streets w double beam barrier.jpg"
              },
              {
                title: "Bridges & Flyovers",
                short: "Metal beam crash barriers provide reliable edge protection on bridges and flyovers.",
                hover: "YNM Safety manufactures corrosion-resistant double W beam crash barriers ideal for elevated structures. Our W beam barrier manufactures ensure controlled vehicle deflection and long service life in demanding bridge conditions.",
                image: "/assets/YNM Safety Bridges flyovers w double beam barrier.jpg"
              },
              {
                title: "Curves, Ramps & Interchanges",
                short: "Double W beam barriers guide vehicles safely through sharp curves, ramps, and interchanges.",
                hover: "YNM Safety double W beam manufactures design barriers that effectively absorb collision impact at high-risk curve locations. These metal beam crash barriers enhance vehicle stability and reduce run-off-road accidents.",
                image: "/assets/YNM Safety Curves , Ramps and Interchnages w double beam barrier.jpg"
              },
              {
                title: "Road Medians & Central Dividers",
                short: "W beam crash barriers prevent vehicle cross-overs and enhance median safety.",
                hover: "YNM Safety manufactures double W beam barriers for medians and central dividers to improve traffic separation. Our metal beam manufactures deliver high-strength barriers that minimize head-on collision risks.",
                image: "/assets/YNM Safety Road medians central dividers w double beam barrier.jpg"
              },
              {
                title: "Embankments, Slopes & Roadside Hazards",
                short: "Double W beam crash barriers protect vehicles from roadside hazards and steep embankments.",
                hover: "YNM Safety metal beam manufactures supply robust crash barriers for slope protection and hazard containment. These W beam barriers reduce vehicle roll-over risks and enhance overall roadside safety.",
                image: "/assets/YNM Safety Embankments Slopes and Roadside hazards w double beam barrier.jpg"
              }
            ],
            
            // Pricing Information
            pricing: {
              basePriceINR: 2100,
              currency: "INR",
              unit: "per running meter",
              thickness: "t=3mm",
              displayPrice: "₹2,100 per running meter (t=3mm)",
              packageSizes: [
                { size: "100 meters", priceINR: 2100, moq: 100 },
                { size: "500 meters", priceINR: 2050, moq: 500 },
                { size: "1000 meters", priceINR: 2000, moq: 1000 }
              ],
              bulkDiscounts: [
                { minQuantity: 500, discount: 3 },
                { minQuantity: 1000, discount: 5 },
                { minQuantity: 5000, discount: 8 },
                { minQuantity: 10000, discount: 10 }
              ]
            },
            
            gallery: [
              "/assets/YNM Safety Highways Expressways w double beam barrier.jpg",
              "/assets/YNM Safety Urban roads arterial streets w double beam barrier.jpg",
              "/assets/YNM Safety Bridges flyovers w double beam barrier.jpg",
              "/assets/YNM Safety Curves Ramps and Interchanges w double beam barrier.jpg",
              "/assets/YNM Safety Road medians central dividers w double beam barrier.jpg",
              "/assets/YNM Safety Embankments Slopes and Roadside hazards w double beam barrier.jpg"
            ],
            
            // Our Projects / Clients
            projects: [
              {
                id: "proj1",
                title: "M/S AV Developer - Agra Project",
                client: "M/S AV Developer",
                location: "Agra",
                description: "Supplied 42,000 Running Meters of Double W-Beam Crash Barriers for highway safety infrastructure development project in Agra. Our high-quality galvanized steel barriers provided excellent impact resistance and long-term durability for this critical road safety installation.",
                quantity: "42,000 RM",
                year: "2024"
              }
            ],
            
            meta: {
              title: "Double W Beam Crash Barriers Manufacturers | Metal Beam Barriers | YNM Safety",
              description: "YNM Safety manufactures high-quality double W beam crash barriers and metal beam barriers for highways, expressways, and road safety projects, compliant with international standards.",
              slug: "/double-w-beam-crash-barriers-manufacturers"
            },
            
            // Market Growth Information
            marketGrowth: {
              title: "Double W-Beam Crash Barrier Market Growth",
              description: "Double W-beam crash barriers (as part of the broader W-beam/metal beam crash barrier segment), Compared with ~USD 1.25–1.5 billion in 2024, the Double W-beam crash barrier segment is projected to nearly double in value by 2033 (to around USD 2.3–2.8 billion), reflecting strong infrastructure investment and rising road safety demand worldwide.",
              cagr: "5-7%",
              growthFactors: [
                "Expansion of road and highway infrastructure",
                "Stringent government road safety regulations",
                "Growth in vehicle population and traffic density",
                "Rapid urbanization and expressway development",
                "Advancements in crash barrier design and materials"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$1.4B",
                projectedMarketSize: "$2.6B",
                currentYear: "2024",
                projectedYear: "2033",
                highwayKmGlobal: "75M+",
                annualInstallations: "15,000+",
                roadsafetySpending: "$200B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "Asia Pacific", value: 38, color: "#74060D" },
                { region: "North America", value: 24, color: "#9A1B2E" },
                { region: "Europe", value: 18, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 12, color: "#D4A853" },
                { region: "Latin America", value: 8, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2024", value: 1.4 },
                { year: "2026", value: 1.7 },
                { year: "2028", value: 2.0 },
                { year: "2030", value: 2.3 },
                { year: "2032", value: 2.5 },
                { year: "2033", value: 2.6 }
              ]
            },
            
            // Global Availability - Structured by Region
            globalAvailability: {
              regions: [
                {
                  name: "Asia",
                  countries: ["China", "India", "Nepal", "Malaysia", "Singapore", "Russia", "South Korea", "Japan", "Indonesia", "Vietnam", "Thailand"]
                },
                {
                  name: "Europe",
                  countries: ["United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", "Poland", "Czech Republic", "Austria"]
                },
                {
                  name: "North America",
                  countries: ["United States", "Canada", "Mexico"]
                },
                {
                  name: "Middle East",
                  countries: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Oman"]
                },
                {
                  name: "Africa",
                  countries: ["South Africa", "Mauritius"]
                },
                {
                  name: "Latin America & Caribbean",
                  countries: ["Brazil", "Argentina", "Colombia", "Chile", "Peru", "Mexico"]
                },
                {
                  name: "Oceania",
                  countries: ["Australia", "New Zealand", "Papua New Guinea"]
                }
              ]
            },
            
            performanceMetrics: "500,000 running meters/month",
            
            statistics: {
              annualCapacity: "6,000,000 R.M",
              exportCountries: "20+",
              qualityStandards: "ISO 9001: 2015",
              productionSpeed: "500,000 RM"
            },
            
            // Manufacturing Process
            manufacturingProcessIntro: "Our Double W Beam Crash Barriers are manufactured through a controlled, quality-driven process to ensure maximum strength, durability, and compliance with national and international road safety standards.",
            manufacturingProcess: [
              {
                step: "01",
                title: "Raw Material Procurement",
                description: "High-quality hot rolled steel coils or sheets (as per IS 5986 / ASTM A36 / EN standards) are procured. The steel must meet specified yield strength, thickness, and chemical composition requirements to ensure impact resistance and durability."
              },
              {
                step: "02",
                title: "Material Inspection & Testing",
                description: "Incoming steel coils are inspected for thickness tolerance, surface defects, and mechanical properties. Only approved and tested raw material is released for production."
              },
              {
                step: "03",
                title: "Decoiling & Sheet Cutting",
                description: "Steel coils are mounted on decoilers and straightened. Sheets are then cut to required lengths using shearing or slitting machines based on the standard W-beam size."
              },
              {
                step: "04",
                title: "Roll Forming (Double W Profile)",
                description: "Cut steel sheets are passed through a precision roll-forming line where they are shaped into the Double W (Thrie Beam / W-Beam) profile. This step ensures accurate wave geometry, uniform thickness, and consistent strength along the beam."
              },
              {
                step: "05",
                title: "Punching & Slotting",
                description: "Computer-controlled punching machines create bolt holes and slots for spacer blocks and posts. This allows easy installation and proper alignment at site."
              },
              {
                step: "06",
                title: "Edge Trimming & Finishing",
                description: "Edges are trimmed and deburred to remove sharp corners. This enhances worker safety, product aesthetics, and coating adhesion."
              },
              {
                step: "07",
                title: "Hot Dip Galvanizing",
                description: "Formed W-beams are galvanized using the hot dip galvanizing process as per IS 2629 / IS 4759 / ASTM A123. This provides uniform zinc coating, high corrosion resistance, and long service life in harsh weather conditions."
              },
              {
                step: "08",
                title: "Galvanized Coating Thickness Inspection",
                description: "Zinc coating thickness is measured using calibrated gauges to ensure compliance with standards. Visual checks are done for smooth finish, no bare spots, and proper adhesion."
              },
              {
                step: "09",
                title: "Straightening & Final Quality Check",
                description: "Post-galvanization, beams are straightened if required and undergo final inspection for dimensions, hole alignment, coating quality, and overall finish."
              },
              {
                step: "10",
                title: "Packing & Labeling",
                description: "Approved crash barriers are stacked properly, bundled with protective spacers, and labeled with batch number, size, and standard reference. This prevents damage during transportation."
              },
              {
                step: "11",
                title: "Dispatch",
                description: "Finished Double W Beam Crash Barriers are dispatched as per customer or project requirements to Highways & Expressways, Urban Roads, and Bridges & Flyovers."
              }
            ]
          },
          {
            id: "cb3",
            slug: "roller-beam-crash-barrier-manufacturers",
            name: "Roller Beam Crash Barriers",
            shortDesc: "YNM Safety manufactures advanced roller beam crash barriers engineered to reduce collision impact, minimize vehicle damage, and enhance road safety across highways, curves, and high-risk zones.",
            desc: "YNM Safety manufactures advanced roller beam crash barriers engineered to reduce collision impact, minimize vehicle damage, and enhance road safety across highways, curves, and high-risk zones.",
            image: "/assets/YNM Safety Highways Expressways roller beam barriers.jpg",
            heroImage: "/assets/YNM Safety Highways Expressways roller beam barriers.jpg",
            specs: ["Rotating roller design", "Hot-dip galvanized", "MoRTH 810 certified", "EN 1317 compliant", "High energy absorption", "3.0mm thickness"],
            overview: "YNM Safety is one of the trusted roller beam crash barrier manufacturers, delivering next-generation metal beam crash barriers that combine steel strength with energy-absorbing roller technology. As experienced YNM Safety metal beam crash barrier manufacturers, our roller beam systems are designed to rotate upon impact, reducing collision force and safely redirecting vehicles back onto the roadway. This innovative mechanism significantly lowers accident severity, vehicle damage, and fatality risks, especially at curves and accident-prone zones. Our roller beam crash barriers are widely adopted in national highways, expressways, bridges, and smart road infrastructure projects across India and international markets.",
            detailedDescription: "YNM Safety is one of the trusted roller beam crash barrier manufacturers, delivering next-generation metal beam crash barriers that combine steel strength with energy-absorbing roller technology. As experienced YNM Safety metal beam crash barrier manufacturers, our roller beam systems are designed to rotate upon impact, reducing collision force and safely redirecting vehicles back onto the roadway. This innovative mechanism significantly lowers accident severity, vehicle damage, and fatality risks, especially at curves and accident-prone zones. Our roller beam crash barriers are widely adopted in national highways, expressways, bridges, and smart road infrastructure projects across India and international markets.",
            
            // Overview Technical Points (displayed below overview paragraph)
            overviewPoints: [
              { label: "Product Type", value: "Roller Beam Crash Barrier" },
              { label: "Material", value: "High-Strength Galvanized Steel & Polymer Rollers" },
              { label: "Beam Thickness", value: "3.0 mm" },
              { label: "Roller Diameter", value: "345 mm" },
              { label: "Surface Finish", value: "Hot Dip Galvanized" },
              { label: "Coating Thickness", value: "550–610 GSM" },
              { label: "Impact Energy Absorption", value: "Very High" },
              { label: "Design Life", value: "20–25 Years" },
              { label: "Compliance", value: "MoRTH 810, EN 1317, ISO 9001:2015" }
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
                value: "35-50 Kg/Rm",
                icon: "weight"
              },
              {
                label: "Quality Standards",
                value: "EN 1317, MoRTH 810, ISO 9001:2015",
                icon: "standard"
              },
              {
                label: "Minimum Order Quantity (MOQ)",
                value: "1Km",
                icon: "package"
              },
              {
                label: "HSN Code",
                value: "73089090",
                icon: "standard"
              },
              {
                label: "Packing Type",
                value: "Standard",
                icon: "package"
              }
            ],
            
            // Specifications for tabs
            specifications: {
              technical: [
                "Product Type: Roller Beam Crash Barrier",
                "Material: High-Strength Galvanized Steel & Polymer Rollers",
                "Beam Thickness: 3.0 mm",
                "Roller Diameter: 345 mm",
                "Surface Finish: Hot Dip Galvanized",
                "Coating Thickness: 550–610 GSM",
                "Impact Energy Absorption: Very High",
                "Design Life: 20–25 Years",
                "Compliance: MoRTH 810, EN 1317, ISO 9001:2015",
                "HSN Code: 73089090"
              ],
              keyFeatures: [
                "High impact energy absorption through rotating rollers",
                "Reduces vehicle damage and occupant injury",
                "Excellent corrosion resistance",
                "Ideal for sharp curves and high-risk zones",
                "Manufactured by certified YNM Safety manufacturers"
              ],
              advantages: [
                "Minimizes fatal accident severity",
                "Prevents vehicle rollover and cross-over",
                "Improves visibility with reflective rollers",
                "Low maintenance and long service life",
                "Trusted YNM Safety metal beam crash barrier manufacturers"
              ]
            },
            
            features: [
              "High impact energy absorption through rotating rollers",
              "Reduces vehicle damage and occupant injury",
              "Excellent corrosion resistance",
              "Ideal for sharp curves and high-risk zones",
              "Manufactured by certified YNM Safety manufacturers"
            ],
            
            advantages: [
              "Minimizes fatal accident severity",
              "Prevents vehicle rollover and cross-over",
              "Improves visibility with reflective rollers",
              "Low maintenance and long service life",
              "Trusted YNM Safety metal beam crash barrier manufacturers"
            ],
            
            technicalSpecs: {
              "Product Type": "Roller Beam Crash Barrier",
              "Material": "High-Strength Galvanized Steel & Polymer Rollers",
              "Beam Thickness": "3.0 mm",
              "Roller Diameter": "345 mm",
              "Surface Finish": "Hot Dip Galvanized",
              "Coating Thickness": "550–610 GSM",
              "Impact Energy Absorption": "Very High",
              "Design Life": "20–25 Years",
              "Compliance": "MoRTH 810, EN 1317, ISO 9001:2015",
              "Country of Origin": "India",
              "Manufacturing Location": "Hyderabad",
              "Net Weight": "35-50 Kg/Rm",
              "Quality Standards": "EN 1317, MoRTH 810, ISO 9001:2015",
              "MOQ": "1Km",
              "HSN Code": "73089090",
              "Packing Type": "Standard"
            },
            
            // Application Areas with images
            applicationAreas: [
              {
                id: "app1",
                title: "Highways & Expressways",
                description: "YNM Safety roller beam crash barriers provide controlled vehicle redirection and enhanced safety on high-speed highways and expressways.",
                image: "/assets/YNM Safety Highways Expressways roller beam barriers.jpg",
                details: "As leading roller beam crash barrier manufacturers, YNM Safety designs metal beam crash barriers that absorb high-impact collisions and reduce accident severity. Our systems comply with MoRTH and IRC standards, ensuring long-term performance on national and expressway corridors."
              },
              {
                id: "app2",
                title: "Sharp Curves & Accident-Prone Zones",
                description: "Roller beam crash barriers improve safety at sharp curves and high-risk accident zones.",
                image: "/assets/YNM Safety Sharp curves Accident prone zones roller beam barriers.jpg",
                details: "YNM Safety manufactures roller beam crash barriers with rotating energy-absorbing rollers that minimize collision impact and prevent vehicle rollover. These metal beam crash barriers are ideal for locations with frequent skidding and loss-of-control incidents."
              },
              {
                id: "app3",
                title: "Medians & Central Dividers",
                description: "Roller beam barriers enhance median safety by preventing vehicle cross-over accidents.",
                image: "/assets/YNM Safety Medians Central dividers roller beam barriers.jpg",
                details: "YNM Safety metal beam crash barrier manufacturers supply high-visibility roller beam systems that safely redirect vehicles back to their lanes. These barriers significantly reduce the risk of head-on collisions on divided highways and urban corridors."
              },
              {
                id: "app4",
                title: "Bridges & Flyovers",
                description: "Metal beam crash barriers provide reliable edge protection on bridges and flyovers.",
                image: "/assets/YNM Safety Bridges Flyovers roller beam barriers.jpg",
                details: "YNM Safety roller beam crash barrier manufacturers deliver corrosion-resistant systems designed for elevated structures. Our metal beam crash barriers ensure controlled vehicle deflection and long service life under demanding traffic conditions."
              },
              {
                id: "app5",
                title: "Mountain Roads & Ghat Sections",
                description: "Roller beam crash barriers protect vehicles on steep slopes and narrow mountain roads.",
                image: "/assets/YNM Safety Mountain roads ghat sections roller beam barriers.jpg",
                details: "YNM Safety manufactures roller beam crash barriers specifically for ghat sections, where rotating rollers absorb impact energy and prevent vehicles from falling into deep valleys. These metal beam crash barriers enhance safety on winding and low-visibility terrain."
              },
              {
                id: "app6",
                title: "Interchanges & Ramps",
                description: "Roller beam crash barriers guide vehicles safely through interchanges and ramps.",
                image: "/assets/YNM Safety Interchnages Ramps roller beam barriers.jpg",
                details: "YNM Safety metal beam crash barrier manufacturers design advanced roller beam systems that improve vehicle stability at merging and diverging points. These crash barriers reduce accident severity and ensure smoother traffic flow in complex road networks."
              }
            ],
            
            applications: [
              {
                title: "Highways & Expressways",
                short: "YNM Safety roller beam crash barriers provide controlled vehicle redirection and enhanced safety on high-speed highways and expressways.",
                hover: "As leading roller beam crash barrier manufacturers, YNM Safety designs metal beam crash barriers that absorb high-impact collisions and reduce accident severity. Our systems comply with MoRTH and IRC standards, ensuring long-term performance on national and expressway corridors.",
                image: "/assets/YNM Safety Highways Expressways roller beam barriers.jpg"
              },
              {
                title: "Sharp Curves & Accident-Prone Zones",
                short: "Roller beam crash barriers improve safety at sharp curves and high-risk accident zones.",
                hover: "YNM Safety manufactures roller beam crash barriers with rotating energy-absorbing rollers that minimize collision impact and prevent vehicle rollover. These metal beam crash barriers are ideal for locations with frequent skidding and loss-of-control incidents.",
                image: "/assets/YNM Safety Sharp curves Accident prone zones roller beam barriers.jpg"
              },
              {
                title: "Medians & Central Dividers",
                short: "Roller beam barriers enhance median safety by preventing vehicle cross-over accidents.",
                hover: "YNM Safety metal beam crash barrier manufacturers supply high-visibility roller beam systems that safely redirect vehicles back to their lanes. These barriers significantly reduce the risk of head-on collisions on divided highways and urban corridors.",
                image: "/assets/YNM Safety Medians Central dividers roller beam barriers.jpg"
              },
              {
                title: "Bridges & Flyovers",
                short: "Metal beam crash barriers provide reliable edge protection on bridges and flyovers.",
                hover: "YNM Safety roller beam crash barrier manufacturers deliver corrosion-resistant systems designed for elevated structures. Our metal beam crash barriers ensure controlled vehicle deflection and long service life under demanding traffic conditions.",
                image: "/assets/YNM Safety Bridges Flyovers roller beam barriers.jpg"
              },
              {
                title: "Mountain Roads & Ghat Sections",
                short: "Roller beam crash barriers protect vehicles on steep slopes and narrow mountain roads.",
                hover: "YNM Safety manufactures roller beam crash barriers specifically for ghat sections, where rotating rollers absorb impact energy and prevent vehicles from falling into deep valleys. These metal beam crash barriers enhance safety on winding and low-visibility terrain.",
                image: "/assets/YNM Safety Mountain roads ghat sections roller beam barriers.jpg"
              },
              {
                title: "Interchanges & Ramps",
                short: "Roller beam crash barriers guide vehicles safely through interchanges and ramps.",
                hover: "YNM Safety metal beam crash barrier manufacturers design advanced roller beam systems that improve vehicle stability at merging and diverging points. These crash barriers reduce accident severity and ensure smoother traffic flow in complex road networks.",
                image: "/assets/YNM Safety Interchnages Ramps roller beam barriers.jpg"
              }
            ],
            
            // Pricing Information
            pricing: {
              basePriceINR: 2500,
              currency: "INR",
              unit: "per running meter",
              thickness: "t=3mm",
              displayPrice: "₹2,500 per running meter (t=3mm)",
              packageSizes: [
                { size: "100 meters", priceINR: 2500, moq: 100 },
                { size: "500 meters", priceINR: 2450, moq: 500 },
                { size: "1000 meters", priceINR: 2400, moq: 1000 }
              ],
              bulkDiscounts: [
                { minQuantity: 500, discount: 3 },
                { minQuantity: 1000, discount: 5 },
                { minQuantity: 5000, discount: 8 },
                { minQuantity: 10000, discount: 10 }
              ]
            },
            
            gallery: [
              "/assets/YNM Safety Highways Expressways roller beam barriers.jpg",
              "/assets/YNM Safety Sharp curves Accident prone zones roller beam barriers.jpg",
              "/assets/YNM Safety Medians Central dividers roller beam barriers.jpg",
              "/assets/YNM Safety Bridges Flyovers roller beam barriers.jpg",
              "/assets/YNM Safety Mountain roads ghat sections roller beam barriers.jpg",
              "/assets/YNM Safety Interchnages Ramps roller beam barriers.jpg"
            ],
            
            // Our Projects / Clients
            projects: [
              {
                id: "proj1",
                title: "National Highway Project - Phase I",
                client: "National Highways Authority of India",
                location: "Maharashtra",
                description: "Supplied 15,000 Running Meters of Roller Beam Crash Barriers for highway safety infrastructure development. Our innovative roller beam technology provided superior impact absorption and reduced accident severity on this critical highway corridor.",
                quantity: "15,000 RM",
                year: "2024"
              }
            ],
            
            meta: {
              title: "Roller Beam Crash Barrier Manufacturers | YNM Safety",
              description: "YNM Safety is a leading roller beam crash barrier manufacturer in India, supplying high-performance metal beam crash barriers designed for superior impact absorption, vehicle redirection, and long-term road safety compliance.",
              slug: "/roller-beam-crash-barrier-manufacturers"
            },
            
            // Market Growth Information
            marketGrowth: {
              title: "Roller Beam Crash Barrier Market Growth",
              description: "The global barrier systems market, which includes roller and metal beam crash barriers, was valued at about USD 21.1 B in 2023 and is forecast to reach around USD 25.5 B by 2028, reflecting a CAGR of approximately 3.8% driven by infrastructure expansion and stricter safety regulations.",
              cagr: "3.8%",
              growthFactors: [
                "Stricter Road Safety Regulations",
                "Rapid Infrastructure Expansion",
                "Growing Vehicle Population and Traffic Volumes",
                "Technological Advancements in Design and Materials",
                "Urbanization and Expanding Transportation Networks"
              ],
              // Market Statistics
              marketStats: {
                currentMarketSize: "$21.1B",
                projectedMarketSize: "$25.5B",
                currentYear: "2023",
                projectedYear: "2028",
                highwayKmGlobal: "80M+",
                annualInstallations: "18,000+",
                roadsafetySpending: "$220B"
              },
              // Regional Distribution for Pie Chart
              regionalDistribution: [
                { region: "Asia Pacific", value: 40, color: "#74060D" },
                { region: "North America", value: 22, color: "#9A1B2E" },
                { region: "Europe", value: 18, color: "#C9A24D" },
                { region: "Middle East & Africa", value: 12, color: "#D4A853" },
                { region: "Latin America", value: 8, color: "#E8C97A" }
              ],
              // Year-wise Growth Data for Bar Chart
              yearlyGrowth: [
                { year: "2023", value: 21.1 },
                { year: "2024", value: 21.9 },
                { year: "2025", value: 22.7 },
                { year: "2026", value: 23.6 },
                { year: "2027", value: 24.5 },
                { year: "2028", value: 25.5 }
              ]
            },
            
            // Global Availability - Structured by Region
            globalAvailability: {
              regions: [
                {
                  name: "Asia",
                  countries: ["South Korea", "Japan", "China", "Malaysia", "Singapore", "India", "Indonesia"]
                },
                {
                  name: "North America",
                  countries: ["United States"]
                },
                {
                  name: "Europe",
                  countries: ["Germany", "France", "Netherlands"]
                },
                {
                  name: "Africa",
                  countries: ["South Africa", "Algeria", "Mozambique", "Ghana"]
                },
                {
                  name: "Middle East",
                  countries: ["United Arab Emirates"]
                },
                {
                  name: "South America",
                  countries: ["Brazil"]
                }
              ]
            },
            
            performanceMetrics: {
              monthly: "10 km",
              annually: "120 km"
            },
            
            statistics: {
              annualCapacity: "120 km",
              exportCountries: "20+",
              qualityStandards: "MoRTH 810, EN 1317",
              productionSpeed: "10 km/month"
            },
            
            // Manufacturing Process
            manufacturingProcessIntro: "Our Roller Beam Crash Barriers are manufactured through a precision-driven process combining advanced steel fabrication with innovative roller technology to ensure maximum impact absorption and road safety compliance.",
            manufacturingProcess: [
              {
                step: "01",
                title: "Raw Material Procurement & Quality Check",
                description: "High-strength steel coils and polymer materials are sourced from certified suppliers. All materials undergo rigorous testing to ensure compliance with MoRTH 810, EN 1317, and ISO 9001:2015 standards."
              },
              {
                step: "02",
                title: "Steel Sheet Cutting & Preparation",
                description: "Steel coils are precision-cut to required dimensions using advanced slitting machines. The cut sheets are prepared for roll-forming with exact dimensional accuracy."
              },
              {
                step: "03",
                title: "Roll Forming & Profile Creation",
                description: "Steel sheets are passed through specialized roll-forming machines to create the beam profile that will house the roller mechanisms. This ensures structural integrity and proper roller alignment."
              },
              {
                step: "04",
                title: "Roller Component Manufacturing",
                description: "High-strength polymer rollers are manufactured with precision diameter (345mm) to ensure smooth rotation upon impact. Each roller undergoes quality inspection for dimensional accuracy and rotation performance."
              },
              {
                step: "05",
                title: "Assembly & Roller Integration",
                description: "Formed steel beams are integrated with roller components using precision mounting hardware. This critical step ensures rollers rotate freely while maintaining structural strength."
              },
              {
                step: "06",
                title: "Surface Preparation & Cleaning",
                description: "Assembled barriers undergo thorough cleaning through degreasing and pickling processes to remove contaminants and ensure optimal galvanizing adhesion."
              },
              {
                step: "07",
                title: "Hot-Dip Galvanizing",
                description: "The barrier systems are hot-dip galvanized as per IS 4759 standards, achieving a uniform zinc coating of 550-610 GSM for superior corrosion resistance and long service life."
              },
              {
                step: "08",
                title: "Roller Function Testing",
                description: "Post-galvanization, each roller mechanism is tested for smooth rotation, impact response, and alignment. Only barriers meeting strict performance criteria are approved for dispatch."
              },
              {
                step: "09",
                title: "Final Inspection & Documentation",
                description: "Completed roller beam barriers undergo comprehensive quality inspection including dimensional accuracy, coating thickness, and mechanical strength verification."
              },
              {
                step: "10",
                title: "Packaging & Dispatch",
                description: "Approved roller beam crash barriers are carefully packaged with protective materials to prevent damage during transportation. Complete documentation including quality certificates and installation guides is provided."
              }
            ]
          }
        ]
      },
      signages: {
        title: "Signages",
        description: "Retro-reflective sign boards and traffic signages for roads and highways. High visibility and weather-resistant for optimal safety.",
        icon: "🚦",
        products: [
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
        comingSoonMessage: "More products coming soon",
        products: [
          {
            id: "fab1",
            name: "Solar Panel Structures / Frames",
            desc: "Mounting structures and frames for solar panels.",
            image: "/assets/product-structural-steel.png",
            specs: ["Solar Mounting", "Tilt Adjustable", "Corrosion Resistant"]
          },
          {
            id: "fab2",
            name: "Railway Structures",
            desc: "Steel structures for railway infrastructure.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Railway Grade", "Heavy Duty", "Safety Certified"]
          },
          {
            id: "fab3",
            name: "GI Dustbins",
            desc: "Galvanized iron dustbins for public spaces.",
            image: "/assets/product-structural-steel.png",
            specs: ["Galvanized", "Durable", "Easy Clean"]
          },
          {
            id: "fab4",
            name: "Rickshaw",
            desc: "Custom fabricated rickshaw frames and parts.",
            image: "/assets/product-custom-metal-enclosure.png",
            specs: ["Custom Design", "Lightweight", "Sturdy Frame"]
          }
        ]
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
