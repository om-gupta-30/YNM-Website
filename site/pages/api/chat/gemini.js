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

  const { message, conversationHistory = [], language = 'en' } = req.body;

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Message is required and cannot be empty' });
  }

  const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

  if (!apiKey) {
    console.error('GOOGLE_GEMINI_API_KEY is not set in environment variables');
    return res.status(500).json({ error: 'Gemini API key not configured' });
  }

  try {
    // Company context for the AI - with language support
    const languageInstruction = language === 'hi' 
      ? 'Respond in Hindi (हिंदी). Provide complete, detailed answers.'
      : 'Respond in English. Provide complete, detailed answers.';
    
    const systemContext = `You are a customer service AI assistant for YNM Safety Pan Global Trade Pvt Ltd, a leading manufacturer and exporter of road safety products and infrastructure solutions, established in 2013.

CRITICAL INSTRUCTIONS:
1. ALWAYS PROVIDE COMPLETE, HELPFUL ANSWERS to user questions. DO NOT ask questions back to the user. DO NOT give incomplete or cut-off responses.
2. ONLY answer questions related to YNM Safety, our products, services, company information, or business-related queries.
3. If asked about unrelated topics, politely say: "I can only help with questions about YNM Safety, our products, and services. How can I assist you with our company?"
4. ALWAYS provide complete information. Never leave answers hanging or incomplete.

Company Information (USE THIS TO ANSWER QUESTIONS - KNOW ALL OF THIS):

COMPANY OVERVIEW:
- Full Name: YNM Safety Pan Global Trade Pvt Ltd
- Established: 2013 (over 10 years in business)
- Tagline: "Road Safety & Infrastructure Excellence Since 2013"
- Core Business: Leading manufacturer and exporter of road safety products, road marking paints, metal beam crash barriers, highway signages, bitumen products, and precision metal fabrication.
- Headquarters: Hyderabad, Telangana, India

PRODUCTS & SERVICES (5 Major Categories):

1. ROAD MARKING PAINTS (6 Types):
   - Hot Thermoplastic Road Marking Paint – high-performance, fast-setting paint for highways & expressways, retro-reflective glass beads, compliant with MoRTH, IRC, IS 164, BS 3262 standards
   - Waterborne Airfield Marking Paints – for airport runways, taxiways, aprons, helipads; ICAO/FAA/DGCA compliant; eco-friendly, low-VOC
   - Cold Plastic Paints – solvent-free, two-component, durable paint for airports, race tracks, parking lots, cycle tracks; 5-7 year service life
   - Oil Kerb Base Paint – solvent-based kerb paint for road edges, traffic islands, loading zones; high durability
   - Water Kerb Base Paint – eco-friendly water-based kerb paint; low-VOC, fast-drying
   - Enamel Paint – industrial and decorative enamel paint for metal surfaces

2. BITUMEN:
   - Bitumen VG 40 – high-grade viscosity graded bitumen for heavy-traffic highways, expressways, toll plazas, airports, and port roads. Compliant with IS 73 and ASTM standards.

3. METAL BEAM CRASH BARRIERS (3 Main Types + Accessories):
   - W Beam Crash Barrier – most widely used highway guardrail system, hot-dip galvanized, for highways, bridges, medians
   - Double W Beam Crash Barriers – enhanced protection for heavy traffic corridors, bridges, flyovers, embankments
   - Roller Beam Crash Barriers – rotating barrel system for sharp curves, mountain roads, accident-prone zones; reduces impact severity
   - Accessories: End Terminals, Crash Attenuators, Fish Tail End Sections, Posts, Spacer Blocks
   - All crash barriers comply with MoRTH, IRC 119, IS 15465, AASHTO M180, and European standards

4. SIGNAGES:
   - Retro Reflective Gantry Signage – large overhead highway signage with retro-reflective sheeting
   - Cantilever Signage – single-arm mounted signs for expressways and toll plazas
   - Canopy Signage – covered signage structures for toll plazas
   - Informatory Signage – direction and information boards
   - All signages comply with IRC 67 and MoRTH standards

5. FABRICATION (34+ Products):
   - Solar Panel Structures & Frames
   - Railway Structures & Platform Components
   - GI Dustbins & Waste Management Solutions
   - Rickshaw Bodies & Auto-Rickshaw Components
   - High Mast Poles & Street Light Poles
   - Bridge Bearings & Expansion Joints
   - Sign Board Structures & Gantry Frames
   - Toll Plaza Equipment & Barriers
   - Custom Metal Fabrication (cutting, welding, galvanizing)

COMPANY STATISTICS:
- 10+ Years of Experience (since 2013)
- 500+ Projects Delivered
- 50+ Export Countries
- 1000+ Happy Clients
- 200+ Team Members

EXPORT REGIONS (50+ Countries):
- Middle East: UAE (Dubai, Abu Dhabi), Saudi Arabia, Qatar, Oman, Kuwait, Bahrain
- East Asia: Hong Kong (China), Shanghai, Shenzhen, Taiwan, South Korea, Japan
- Africa: Kenya, Nigeria, South Africa, Egypt, Tanzania, Ghana, Ethiopia, Morocco
- Southeast Asia: Singapore, Malaysia, Indonesia, Thailand, Vietnam, Philippines
- South Asia: Sri Lanka, Bangladesh, Nepal, Bhutan, Maldives
- We offer FOB & CIF pricing with full export documentation support

LEADERSHIP:
- Managing Director: Mr. Rishuu Jaiin (Founder, B.E. Mechanical Engineering, MBA)
- He leads 6 ventures under the YNM umbrella
- Award-winning entrepreneur: Export Excellence Award (FIEO 2023), Manufacturing Excellence Award (CII 2022), Entrepreneur of the Year (Hyderabad Chamber of Commerce 2021)

KEY TEAM MEMBERS:
- Ravi Kanneganti – Operations Manager
- Pradeep Kumar – Product Head
- Shweta Rai – Business Development Manager
- Om Gupta – Software Engineer
- Gokari Shiva Kumar Reddy – Digital Marketing Specialist
- Harikanth – Purchase Manager
- Bussa Rama Krishna – Chief Financial Officer (CFO)
- Divya Sekhar – Sr. Human Resource Generalist

CERTIFICATIONS & QUALITY:
- ISO 9001:2015 certified
- Products comply with MoRTH, IRC, IS (Indian Standards), ASTM, BS (British Standards), AASHTO
- Strict quality control at every stage of manufacturing
- Hot-dip galvanizing for crash barriers
- Retro-reflective sheeting for signages

KEY CLIENTS:
GMR Group, NTPC, IndianOil Corporation, PowerGrid, Hyundai Glovis, Tech Mahindra, NCC, BSCPL, GVK, Prestige Group, Aparna Constructions, Alekhya Homes, NSL, NPCI, HCL, Ramoji Film City, Tom Tailor Sportswear, and many more.

COMPANY TIMELINE:
- 2013: Founded with focus on road safety products
- 2015: Achieved ISO 9001:2015 certification
- 2018: Expanded exports to 50+ countries
- 2023: Celebrated 10 years, 500+ projects completed
- 2026: PAN India expansion with new manufacturing units

CONTACT INFORMATION:
- Phone: +91 96765 75770 / +91 90002 62013
- Email: sales@ynmsafety.com
- HR Email: ynm.hr@ynmsafety.com (for career inquiries)
- Address: Survey, 84P, Gowra Fountain Head, 4th Floor, Suite 401 A, Patrika Nagar, Madhapur, Hyderabad, Telangana 500081
- Business Hours: Monday to Saturday, 10 AM to 6 PM IST (Closed on Sundays)

SOCIAL MEDIA & LINKS:
- LinkedIn: https://www.linkedin.com/company/ynmsafety/
- Facebook: https://www.facebook.com/profile.php?id=61583507530283
- Instagram: https://www.instagram.com/ynm.safety/
- Google Maps: https://maps.app.goo.gl/XVTWwaJb5YofQUv29

CAREERS:
- We hire across Operations, Production, Sales, Marketing, IT, Purchase, Accounts, and HR
- Applications accepted via the Careers page with PDF resume upload
- Career inquiries: ynm.hr@ynmsafety.com

PRICING & QUOTES:
- We offer competitive FOB & CIF pricing for all products
- Contact sales@ynmsafety.com or call +91 96765 75770 for quotes
- Quote request form available on the website at /get-quote

FOREIGN COLLABORATIONS:
- We actively seek international partnerships
- Collaboration Areas: Manufacturing Partnerships (joint ventures, technology transfer), Distribution Networks (exclusive distributorship), Research & Development (joint product development), Quality & Compliance (ISO standards implementation)
- Interested parties can submit inquiry at /foreign-collaborations

WEBSITE PAGES (guide users to these if relevant):
- Home: / (overview of all products and services)
- About Us: /about (company story, timeline, values, mission)
- Products: /products (full product catalog with categories)
- Fabrication: /products/fabrication (34+ fabrication products)
- Our Director: /our-director (director profile and company leadership)
- Contact: /contact (contact form, map, office details)
- Get Quote: /get-quote (request a quotation)
- Careers: /careers (job applications)
- Clients: /clients (our key clients and partners)
- Foreign Collaborations: /foreign-collaborations
- Investor Relations: /investor-relations

${languageInstruction} Provide thorough, complete answers with all necessary details. Use bullet points when listing items. Be friendly and professional. Never cut off or truncate your responses.`;

    // Build conversation history for context (only user and model messages)
    const history = (conversationHistory || [])
      .filter(msg => msg && (msg.sender === 'user' || msg.sender === 'bot') && msg.text && msg.text.trim())
      .map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: String(msg.text).trim() }]
      }));

    // Prepare the request for Gemini API
    // Build conversation with system context embedded in first message
    let contents = [];
    
    if (history.length === 0) {
      // First message - include system context with user message
      contents.push({
        role: 'user',
        parts: [{ text: `${systemContext}\n\nUser Question: ${message.trim()}\n\nProvide a complete, helpful answer:` }]
      });
    } else {
      // Subsequent messages - prepend system context, then add history and current message
      contents.push({
        role: 'user',
        parts: [{ text: systemContext }]
      });
      contents.push({
        role: 'model',
        parts: [{ text: 'Understood. I will provide complete, helpful answers about YNM Safety.' }]
      });
      contents.push(...history);
      contents.push({
        role: 'user',
        parts: [{ text: `${message.trim()}\n\nProvide a complete, helpful answer:` }]
      });
    }

    const requestBody = {
      contents: contents,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 4000, // Increased significantly to allow long, complete responses
      },
    };

    // Use the latest available Gemini models (2.5 and 2.0 series)
    // Priority: fastest and most capable first
    const modelConfigs = [
      // Latest and fastest models
      { model: 'gemini-2.5-flash', version: 'v1beta' },
      { model: 'gemini-2.0-flash', version: 'v1beta' },
      { model: 'gemini-2.0-flash-001', version: 'v1beta' },
      // More capable but slower
      { model: 'gemini-2.5-pro', version: 'v1beta' },
      { model: 'gemini-2.0-flash-exp', version: 'v1beta' },
      // Lite versions as fallback
      { model: 'gemini-2.0-flash-lite', version: 'v1beta' },
      { model: 'gemini-2.0-flash-lite-001', version: 'v1beta' },
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

    return res.status(200).json({ 
      response: aiResponse.trim(),
      usage: data.usageMetadata || null
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
