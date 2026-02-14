// Simple in-memory cache for responses (server-side)
const serverCache = new Map();
const SERVER_CACHE_TTL = 10 * 60 * 1000; // 10 minutes

// Server-side rate limiting per IP
const ipRateLimits = new Map();
const IP_RATE_LIMIT_WINDOW = 60000; // 1 minute
const IP_MAX_REQUESTS = 15; // 15 requests per minute per IP

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

// Run cleanup every 5 minutes
setInterval(cleanupCache, 5 * 60 * 1000);

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
- Established: 2013 (12+ years experience)
- Tagline: "Road Safety & Infrastructure Excellence Since 2013"
- Business: Manufacturer & exporter of road safety products, road marking paints, crash barriers, signages, bitumen, metal fabrication
- Headquarters: Hyderabad, Telangana, India
- Managing Director: Mr. Rishuu Jaiin (Founder, B.E. Mechanical, MBA)

STATISTICS:
- 12+ Years Experience | 500+ Projects | 50+ Export Countries | 1000+ Clients | 200+ Team Members

PRODUCTS (5 Categories):

1. ROAD MARKING PAINTS (6 types):
   • Hot Thermoplastic Road Marking Paint - high-performance paint for highways, MoRTH/IRC/IS 164/BS 3262 compliant, retro-reflective glass beads, ₹85/kg approx
   • Waterborne Airfield Marking Paints - for airports, ICAO/FAA/DGCA compliant, eco-friendly
   • Cold Plastic Paints (MMA) - solvent-free, 5-7 year life, for airports, race tracks, parking
   • Oil Kerb Base Paint - for road edges, traffic islands
   • Water Kerb Base Paint - eco-friendly, low-VOC
   • Enamel Paint - industrial applications

2. BITUMEN:
   • Bitumen VG 40 - for heavy-traffic highways, IS 73/ASTM compliant

3. METAL BEAM CRASH BARRIERS:
   • W Beam Crash Barrier - most common, hot-dip galvanized
   • Double W Beam - for bridges, flyovers
   • Roller Beam - for sharp curves, mountain roads
   • Accessories: End Terminals, Crash Attenuators, Posts
   • Standards: MoRTH, IRC 119, IS 15465, AASHTO M180

4. SIGNAGES:
   • Retro Reflective Gantry Signage - overhead highway signs
   • Cantilever Signage - single-arm mounted
   • Canopy Signage - for toll plazas
   • Informatory Signage - direction boards
   • Standards: IRC 67, MoRTH

5. FABRICATION (34 products):
   • Solar Panel Structures & Frames
   • Railway Structures & Platform Components
   • GI Dustbins & Waste Management
   • Rickshaw Bodies
   • High Mast Poles (15-40m)
   • Street Light Poles
   • Solar Light Poles
   • Bridge Bearings
   • Expansion Joints
   • Gantry Structures
   • Sign Board Structures
   • Slotted Angle Racks
   • Heavy Duty Racks
   • ITMS Structures (traffic management)
   • VMS Structures (variable message signs)
   • Adjustable Prop Jack
   • Base Jack
   • Cup Lock scaffolding
   • Ledger (scaffolding)
   • Scaffolding Parts
   • Shuttering Materials
   • Barricading Boards
   • I-Girders (bridge construction)
   • RE Panel Moulds (retaining walls)
   • Foot Over Bridges
   • Noise Barriers
   • Pedestrian Guardrails
   • Modular Pontoon
   • Open Web Bridge Girders
   • Gabion Wire Mesh
   • Anchor Cones
   • Bus Stop Shelters
   • Toll Plaza Equipment
   • Custom Metal Fabrication

EXPORT REGIONS (50+ Countries):
- Middle East: UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain
- East Asia: Hong Kong, China, Taiwan, South Korea, Japan
- Africa: Kenya, Nigeria, South Africa, Egypt, Tanzania, Ghana
- Southeast Asia: Singapore, Malaysia, Indonesia, Thailand, Vietnam
- South Asia: Sri Lanka, Bangladesh, Nepal, Bhutan, Maldives
- Pricing: FOB & CIF with export documentation

KEY TEAM:
- Mr. Rishuu Jaiin - Managing Director
- Ravi Kanneganti - Operations Manager
- Pradeep Kumar - Product Head
- Shweta Rai - Business Development
- Bussa Rama Krishna - CFO
- Divya Sekhar - Sr. HR Generalist
- Om Gupta - Software Engineer
- Gokari Shiva Kumar Reddy - Digital Marketing

CERTIFICATIONS: ISO 9001:2015, MoRTH, IRC, IS, ASTM, BS, AASHTO

KEY CLIENTS: GMR, NTPC, IndianOil, PowerGrid, Hyundai Glovis, Tech Mahindra, NCC, BSCPL, GVK, Prestige, Aparna Constructions, Ramoji Film City, NPCI

CONTACT:
- Phone: +91 96765 75770 / +91 90002 62013
- Email: sales@ynmsafety.com
- HR: ynm.hr@ynmsafety.com
- Address: Gowra Fountain Head, 4th Floor, Suite 401 A, Patrika Nagar, Madhapur, Hyderabad 500081
- Hours: Mon-Sat, 10 AM - 6 PM IST

WEBSITE PAGES:
- /products - all products
- /products/fabrication - 34 fabrication products
- /get-quote - request quotation
- /contact - contact form
- /careers - job applications
- /about - company story
- /our-director - leadership
- /clients - our clients
- /foreign-collaborations - partnerships

CAREERS: Open positions in Operations, Sales, Marketing, IT, Purchase, Accounts, HR. Apply at /careers

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
