// Simple in-memory cache for responses (server-side)
const serverCache = new Map();
const SERVER_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// Server-side rate limiting per IP
const ipRateLimits = new Map();
const IP_RATE_LIMIT_WINDOW = 60000; // 1 minute
const IP_MAX_REQUESTS = 30; // 30 requests per minute per IP (generous to avoid user-facing errors)

function checkIpRateLimit(ip) {
  const now = Date.now();
  const ipData = ipRateLimits.get(ip);
  
  if (!ipData || now - ipData.windowStart > IP_RATE_LIMIT_WINDOW) {
    ipRateLimits.set(ip, { windowStart: now, count: 1 });
    return true;
  }
  
  if (ipData.count >= IP_MAX_REQUESTS) {
    return false;
  }
  
  ipData.count++;
  return true;
}

// Clean up old cache entries periodically
function cleanupCache() {
  const now = Date.now();
  for (const [key, value] of serverCache.entries()) {
    if (now - value.timestamp > SERVER_CACHE_TTL) {
      serverCache.delete(key);
    }
  }
  for (const [ip, data] of ipRateLimits.entries()) {
    if (now - data.windowStart > IP_RATE_LIMIT_WINDOW * 2) {
      ipRateLimits.delete(ip);
    }
  }
}

// Run cleanup every 5 minutes (.unref() so it doesn't block next build from exiting)
const cleanupTimer = setInterval(cleanupCache, 5 * 60 * 1000);
if (cleanupTimer.unref) cleanupTimer.unref();

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get client IP for rate limiting
  const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress || 'unknown';
  
  // Check server-side rate limit
  if (!checkIpRateLimit(clientIp)) {
    return res.status(429).json({ 
      error: 'Too many requests. Please wait a moment before trying again.',
      retryAfter: 60
    });
  }

  const { message, conversationHistory = [], language = 'en' } = req.body;

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required and cannot be empty' });
  }

  // Limit message length to prevent abuse
  const trimmedMessage = message.trim().slice(0, 500);

  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

  if (!apiKey) {
    console.error('GOOGLE_GEMINI_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'Gemini API key not configured' });
  }

  // Check server-side cache first
  const cacheKey = `${trimmedMessage.toLowerCase()}_${language}`;
  const cachedResponse = serverCache.get(cacheKey);
  if (cachedResponse && (Date.now() - cachedResponse.timestamp < SERVER_CACHE_TTL)) {
    console.log('✓ Serving from server cache');
    return res.status(200).json({ 
      response: cachedResponse.response,
      cached: true
    });
  }

  try {
    // Company context for the AI - with language support
    const languageInstruction = language === 'hi' 
      ? 'Respond in Hindi (हिंदी). Be concise but complete.'
      : 'Respond in English. Be concise but complete.';
    
    const systemContext = `You are a customer service AI assistant for YNM Safety Pan Global Trade Pvt Ltd.

STRICT RULES - FOLLOW THESE EXACTLY:
1. ONLY answer questions about YNM Safety, our products, services, company, careers, or road safety/infrastructure industry topics.
2. For ANY off-topic questions (politics, entertainment, general knowledge, coding, recipes, personal advice, other companies, etc.), respond ONLY with: "I'm the YNM Safety assistant and can only help with questions about our company, products, and services. How can I assist you with YNM Safety today?"
3. Be concise - provide complete answers but don't over-explain. Use bullet points for lists.
4. Never make up information not provided below.

COMPANY OVERVIEW:
- Name: YNM Safety Pan Global Trade Pvt Ltd
- Established: 2013 (13+ years experience)
- Tagline: "Road Safety & Infrastructure Excellence Since 2013"
- Business: Manufacturer & exporter of road safety products, road marking paints, crash barriers, signages, bitumen, metal fabrication, road safety furnitures
- Headquarters: Hyderabad, Telangana, India
- Factory: Sy No 74, Kothur Village, Shabad Mandal, Rangareddy, Telangana 509217
- Managing Director: Mr. Rishuu Jaiin (Founder, B.E. Mechanical Engineering 2008, MBA Operations & International Business 2010)
- Director Awards: Export Excellence Award - FIEO (2023), Manufacturing Excellence Award - CII (2022), Entrepreneur of the Year - Hyderabad Chamber (2021), Quality Leadership Award - IQC (2020)

STATISTICS:
- 13+ Years Experience | 500+ Projects | 50+ Export Countries | 1000+ Clients | 200+ Team Members

COMPANY MILESTONES:
- 2013: Foundation
- 2015: ISO 9001:2015 Certification
- 2018: Global Expansion to 50+ countries (Asia, Africa, Middle East)
- 2023: 10 Years of Excellence
- 2026: PAN India Expansion - opening new factories across India

PRODUCTS (6 Categories):

1. ROAD MARKING PAINTS (8 types):
   • Hot Thermoplastic Road Marking Paint - high-performance paint for highways, MoRTH/IRC/IS 164/BS 3262/AASHTO M249 compliant, retro-reflective glass beads, Rs.80-85/kg, Annual capacity: 96,000 MT, 25 kg bag packing
   • Cold Plastic Paints (MMA/Acrylic) - fast drying, anti-skid, 2-5 year design life, MORTH 803.7/IRC 35, 16 Kg MS Container, for airports, F1 tracks, parking lots, sport areas
   • Waterborne Airfield Marking Paints - for airport runways, taxiways, helipads, military airfields, ICAO/FAA/DGCA compliant, eco-friendly, low-VOC
   • Oil Kerb Base Paint - Synthetic Resin/Alkyd Oil Base, surface dry 30 min, IS164-2023
   • Water Kerb Base Paint - Acrylic Water Based, surface dry 20-30 min, low-VOC, IS164:2023
   • Enamel Paint - Synthetic/Alkyd Based, High Gloss/Semi Gloss, surface dry 6-8 hours, IS164:2023
   • Red Oxide Paint - High durability, excellent corrosion resistance, strong colour stability, IS:2074 compliant
   • Profile Marking Paint - High retro-reflective, weather resistant, superior abrasion resistance, MoRT&H 803 compliant

2. BITUMEN:
   • Bitumen VG 40 - IS 73, ASTM, high viscosity, for heavy traffic roads & high-temperature regions, 200 kg drums, export ready
   • Bitumen VG 30 - IS 73, ASTM, for road construction, waterproofing, heavy-duty infrastructure, 200 kg drums, export ready

3. METAL BEAM CRASH BARRIERS (5 types):
   • W Beam Crash Barrier - most common, hot-dip galvanized, 2.7mm/3.0mm thickness, IS 5986, MoRTH, IRC 119, IS 15465, AASHTO M180
   • Thrie Beam Crash Barrier - for bridges, elevated sections, high-risk zones
   • Double W Beam Crash Barriers - maximum protection, bridges, flyovers, medians, dividers, highways, embankments, sharp curves
   • Roller Beam Crash Barriers - rotating barrel system, sharp curves, mountain roads, rotational energy absorption
   • Attenuator - impact absorption at toll plazas, highway exits
   • Accessories: End Terminals, Fish Tail End Sections, Posts, Hardware

4. SIGNAGES (10 types):
   • Retro Reflective Gantry Signage - overhead highway signs, IRC 67, MoRTH
   • Cantilever Signage - single-arm mounted expressway signs
   • Mandatory Sign Board (Octagonal) - ACP/Aluminium/GI Sheet, Engineer Grade/HIP/DG reflective, 7-10 year durability, MORTH & IRC 67
   • Mandatory Sign Board (Circular) - MORTH & IRC 67 compliant
   • Cautionary Sign Boards (Triangle) - warning signs for curves, speed breakers, hazards, 7-10 year durability
   • Canopy - structures for toll plazas, fuel stations, retail stores, hotels, industrial facilities
   • Informatory Sign Board - direction and information boards for roads, commercial spaces, hospitals, transportation hubs
   • Place Identification Boards - location/area identification for roads, tourism, retail, hospitals, transportation hubs
   • Advance Direction Boards - route guidance signage
   • Toll Boards & Facia - toll plaza signage and facia boards

5. FABRICATION (34+ products, organized by subcategory):
   Infrastructure: Pedestrian Guardrails, Noise Barriers, Foot Over Bridges, High Mast Poles (15-40m), Sign Board Structures, ITMS Structures, Barricading Boards, Gantry Structures, Cantilever Structures, Camera Poles, VMS Structures, I-Girders, Expansion Joints, Bridge Bearings, Modular Pontoon, Open Web Bridge Girders, Gabion Wire Mesh, Anchor Cones
   Solar: Solar Panel Structures/Frames, Solar Light Poles
   Urban: Street Light Poles, Parking Signages, GI Dustbins, E-Rickshaw, Ledger
   Industrial: Slotted Angle Racks, Heavy Duty Racks, Adjustable Prop Jack, RE Panel Moulds, Base Jack, Cup Lock, Scaffolding Parts, Shuttering Materials
   Railway: Railway Structures (RDSO approved)

6. ROAD SAFETY FURNITURES (19 products):
   Road Studs: Twin Shank, ABS, Aluminium
   Solar Studs: Twin Shank, ABS, Circular, Square, Aluminium
   Delineators: IRC Delineator (NHAI approved), Spring Post 750mm, Spring Post 1000mm, Spring Post Anchor Fasteners
   Traffic Control: Solar Blinker, Traffic Cone 750mm, Traffic Cone 1000mm, Antiglare Screen 600mm, Antiglare Screen 900mm, Water Barricade 1000mm, Water Barricade 2000mm
   Road Safety: Reflective Tapes, Flexible Median Marker, Box Type Median Marker, Highway Speed Breaker

EXPORT REGIONS (50+ Countries):
- Middle East: UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain
- East Asia: Hong Kong, China (Shanghai, Shenzhen), Taiwan, South Korea, Japan
- Africa: Kenya, Nigeria, South Africa, Egypt, Tanzania, Ghana, Ethiopia, Morocco
- Southeast Asia: Singapore, Malaysia, Indonesia, Thailand, Vietnam, Philippines
- South Asia: Sri Lanka, Bangladesh, Nepal, Bhutan, Maldives
- Europe: Germany, UK, France, Italy, Spain, Netherlands, Sweden, Poland, Belgium
- Americas: United States, Canada, Mexico, Brazil, Argentina, Chile, Colombia, Peru
- Pricing: FOB & CIF with export documentation

KEY TEAM:
- Mr. Rishuu Jaiin - Managing Director (Founder, leads 6 companies, 17+ countries reached)
- Ravi Kanneganti - Operations Manager
- Pradeep Kumar - Product Head
- Shweta Rai - Business Development
- Bussa Rama Krishna - CFO
- Divya Sekhar - Sr. HR Generalist
- Harikanth - Team Member
- Om Gupta - Software Engineer
- Gokari Shiva Kumar Reddy - Digital Marketing

CERTIFICATIONS & STANDARDS: ISO 9001:2015, MoRTH, IRC, IS, ASTM, BS, AASHTO, ICAO, FAA, DGCA, RDSO, NHAI

KEY CLIENTS (18 major clients): IndianOil, Ramoji Film City, Prestige Group, Tech Mahindra, GMR Group, Tom Tailor, NCC Limited, NSL Group, HCL, Alekhya Homes, GVK EMRI, NTPC, PowerGrid, Hyundai Glovis, NPCI International, BSCPL Infrastructure, AT&T, Aparna Constructions

CONTACT:
- Phone: +91 96765 75770 / +91 88850 02183
- Email: sales@ynmsafety.com
- HR: hr@ynmsafety.com
- Partnerships: partnership@ynmsafety.com
- Investors: invest@ynmsafety.com
- WhatsApp: wa.me/918885002183
- Office: Survey 84P, Gowra Fountain Head, 4th Floor, Suite 401 A, Patrika Nagar, Madhapur, Hyderabad, Telangana 500081
- Factory: Sy No 74, Kothur Village, Shabad Mandal, Rangareddy, Telangana 509217
- Hours: Mon-Sat, 10 AM - 6 PM IST
- LinkedIn: linkedin.com/company/ynmsafety
- Instagram: @ynm.safety
- Facebook: YNM Safety

WEBSITE PAGES:
- / - home page with overview, products, testimonials, client logos
- /products - all product categories with filterable grid
- /products/[productId] - individual product detail pages with specs, applications, pricing
- /products/fabrication - 34+ fabrication products with image galleries
- /products/road-safety-furnitures - 19 road safety furniture products
- /about - company story, timeline, values, gallery, mission/vision
- /our-director - Mr. Rishuu Jaiin's profile, ventures, achievements, appointment booking form
- /clients - 18 detailed client/partner profiles
- /get-quote - dedicated quote request form with product selection, quantity, timeline, delivery location, file attachment (PDF)
- /careers - 6 open positions (Production Manager, QC Engineer, Export Coordinator, Sales Executive, Warehouse Supervisor, Accounts Executive) and application form
- /contact - contact form, company info, social links, interactive India presence map with state-wise contacts
- /investor-relations - investment thesis, milestones, fund allocation, inquiry form
- /foreign-collaborations - collaboration areas, global regions with flags, partnership process, inquiry form

LANGUAGE SUPPORT: Website available in 12 Indian languages: English, Hindi, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, Urdu. Language selector in navbar.

GET A QUOTE: Dedicated page at /get-quote. Users can select products (Paints, Crash Barriers, Signage, Fabrication categories), specify quantity/unit/timeline, attach technical specs (PDF), provide delivery location and project details. Also accessible via floating "Get a Quote" button on all pages.

DIRECTOR APPOINTMENT: Users can book a meeting with Mr. Rishuu Jaiin via /our-director page. Form fields: name, email, phone, company, purpose, preferred date/time, message.

CAREERS: 6 open positions - Production Manager (Manufacturing), Quality Control Engineer (QA), Export Coordinator (International Trade), Sales Executive (Sales & Marketing), Warehouse Supervisor (Operations), Accounts Executive (Finance). All full-time in Hyderabad. Apply at /careers with resume (PDF, max 5MB). HR email: hr@ynmsafety.com

INVESTOR RELATIONS: Open to equity investment, strategic partnerships, joint ventures. Investor types: Individual, Angel, VC, PE, Strategic, Family Office. Fund allocation: 40% Capacity Expansion, 25% Technology Upgrade, 20% Market Development, 15% Working Capital. Milestones: 2013 Foundation → 2015 First Export → 2018 ISO Certified → 2021 Expansion → 2024 PAN India → 2025 Contracting → 2026 PAN India Mfg. Email: invest@ynmsafety.com. Visit /investor-relations

FOREIGN COLLABORATIONS: Manufacturing Partnerships, Distribution Networks, R&D, Quality & Compliance. Target: Middle East, East Asia, Africa, Southeast Asia, Europe. Email: partnership@ynmsafety.com. Visit /foreign-collaborations

INDIA PRESENCE: PAN India contacts in Maharashtra, Delhi, Karnataka, Tamil Nadu, Gujarat, Uttar Pradesh, Rajasthan, Telangana, West Bengal. Interactive map on /contact page.

${languageInstruction}`;

    // Build conversation history for context (only user and model messages)
    // Limit history to last 4 messages to reduce token usage
    const history = (conversationHistory || [])
      .filter(msg => msg && (msg.sender === 'user' || msg.sender === 'bot') && msg.text && msg.text.trim())
      .slice(-4) // Only last 4 messages for context
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: String(msg.text).trim().slice(0, 300) }] // Limit each message
      }));

    // Prepare the request for Gemini API
    // Build conversation with system context embedded in first message
    let contents = [];
    
    if (history.length === 0) {
      // First message - include system context with user message
      contents.push({
        role: 'user',
        parts: [{ text: `${systemContext}\n\nQuestion: ${trimmedMessage}` }]
      });
    } else {
      // Subsequent messages - prepend system context, then add history and current message
      contents.push({
        role: 'user',
        parts: [{ text: systemContext }]
      });
      contents.push({
        role: 'model',
        parts: [{ text: 'Understood. I will help with YNM Safety queries only.' }]
      });
      contents.push(...history);
      contents.push({
        role: 'user',
        parts: [{ text: trimmedMessage }]
      });
    }

    const requestBody = {
      contents: contents,
      generationConfig: {
        temperature: 0.3, // Lower for more consistent, focused responses
        topK: 20,
        topP: 0.8,
        maxOutputTokens: 1500, // Reduced - concise responses save tokens
      },
    };

    // Use cost-effective models first (lite/flash variants)
    // Priority: cheapest and fastest first, fallback to more capable
    const modelConfigs = [
      // Cheapest - Lite models first
      { model: 'gemini-2.0-flash-lite', version: 'v1beta' },
      { model: 'gemini-2.0-flash-lite-001', version: 'v1beta' },
      // Fast models
      { model: 'gemini-2.0-flash', version: 'v1beta' },
      { model: 'gemini-2.5-flash', version: 'v1beta' },
      // Fallback to more capable if needed
      { model: 'gemini-1.5-flash', version: 'v1' },
      { model: 'gemini-1.5-flash-latest', version: 'v1' },
    ];
    
    let response = null;
    let lastError = null;
    let successfulConfig = null;
    let allErrors = [];
    
    // Try each model configuration
    for (const config of modelConfigs) {
      try {
        const apiUrl = `https://generativelanguage.googleapis.com/${config.version}/models/${config.model}:generateContent?key=${apiKey}`;
        
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
        
        if (response.ok) {
          successfulConfig = config;
          console.log(`✓ Successfully using: ${config.model} (${config.version})`);
          break; // Success!
        }
        
        // If 404 or 400, try next model
        if (response.status === 404 || response.status === 400) {
          const errorText = await response.text().catch(() => '');
          let errorData;
          try {
            errorData = JSON.parse(errorText);
          } catch {
            errorData = { error: errorText };
          }
          allErrors.push(`${config.model} (${config.version}): ${errorData.error?.message || 'Not found'}`);
          continue;
        }
        
        // For other errors, we'll handle them below
        break;
      } catch (err) {
        lastError = err;
        allErrors.push(`${config.model} (${config.version}): ${err.message}`);
        continue;
      }
    }
    
    // If we found a working model, proceed with that response
    if (successfulConfig && response && response.ok) {
      // Continue to process the successful response below
    } else if (!response || !successfulConfig) {
      // All models failed - try to list available models
      let availableModelsInfo = 'Could not fetch available models.';
      try {
        const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const listResponse = await fetch(listUrl);
        if (listResponse.ok) {
          const listData = await listResponse.json();
          if (listData.models && Array.isArray(listData.models)) {
            const modelNames = listData.models
              .filter(m => m.supportedGenerationMethods?.includes('generateContent'))
              .map(m => m.name.replace('models/', ''))
              .slice(0, 10);
            availableModelsInfo = `Available models: ${modelNames.join(', ')}`;
            console.log('Available models:', modelNames);
          }
        }
      } catch (e) {
        console.error('Error fetching available models:', e);
      }
      
      const errorMsg = `All model attempts failed. ${availableModelsInfo} Tried: ${allErrors.slice(0, 3).join('; ')}`;
      console.error(errorMsg);
      return res.status(500).json({ 
        error: errorMsg,
        availableModels: availableModelsInfo
      });
    }

    // Handle non-OK responses (shouldn't reach here if successfulConfig is set, but just in case)
    if (!response.ok) {
      let errorText;
      try {
        errorText = await response.text();
      } catch {
        errorText = `HTTP ${response.status}: ${response.statusText}`;
      }
      
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { error: errorText };
      }
      
      console.error('Gemini API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData,
        attemptedModels: modelConfigs.map(c => `${c.model} (${c.version})`).join(', ')
      });
      
      // Provide helpful error message
      let errorMessage = errorData.error?.message || 
                        errorData.error || 
                        `API returned status ${response.status}`;
      
      // If model not found, provide specific guidance
      if (response.status === 404 || response.status === 400) {
        errorMessage = `Model error: ${errorMessage}. Using gemini-1.5-flash with v1 API.`;
      }
      
      return res.status(response.status >= 500 ? 500 : response.status).json({ 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? errorData : undefined
      });
    }

    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      console.error('Failed to parse Gemini API response:', parseError);
      return res.status(500).json({ error: 'Invalid response format from AI' });
    }

    if (!data || !data.candidates || !Array.isArray(data.candidates) || data.candidates.length === 0) {
      console.error('Invalid Gemini API response structure:', data);
      return res.status(500).json({ error: 'Invalid response structure from AI' });
    }

    const candidate = data.candidates[0];
    if (!candidate || !candidate.content || !candidate.content.parts || !Array.isArray(candidate.content.parts) || candidate.content.parts.length === 0) {
      console.error('Invalid Gemini API response content:', candidate);
      return res.status(500).json({ error: 'Invalid response content from AI' });
    }

    const aiResponse = candidate.content.parts[0].text;

    if (!aiResponse || typeof aiResponse !== 'string') {
      console.error('Invalid AI response text:', aiResponse);
      return res.status(500).json({ error: 'Invalid response text from AI' });
    }

    const finalResponse = aiResponse.trim();
    
    // Cache the response for future identical queries
    serverCache.set(cacheKey, {
      response: finalResponse,
      timestamp: Date.now()
    });

    // Log usage for monitoring
    if (data.usageMetadata) {
      console.log(`API Usage - Prompt: ${data.usageMetadata.promptTokenCount || 0}, Response: ${data.usageMetadata.candidatesTokenCount || 0}`);
    }

    return res.status(200).json({ 
      response: finalResponse,
      cached: false
    });

  } catch (error) {
    console.error('Error calling Gemini API:', {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      name: error.name
    });
    
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message || 'An unexpected error occurred',
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
  }
}
