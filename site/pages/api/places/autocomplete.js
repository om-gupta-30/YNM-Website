export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const { input, type, country } = req.query;
  if (!input || input.length < 2) return res.status(400).json({ error: "Input too short" });

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "API key not configured" });

  try {
    const body = { input, languageCode: "en" };

    if (type === "country") {
      body.includedPrimaryTypes = ["country"];
    } else {
      body.includedPrimaryTypes = ["locality", "administrative_area_level_1"];
      if (country) {
        body.includedRegionCodes = [country.toUpperCase()];
      }
    }

    const response = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Places API error:", response.status, errText);
      return res.status(response.status).json({ error: "Places API request failed", detail: errText });
    }

    const data = await response.json();

    const suggestions = (data.suggestions || [])
      .filter((s) => s.placePrediction)
      .map((s) => {
        const pred = s.placePrediction;
        const description = pred.text?.text || pred.structuredFormat?.mainText?.text || "";
        const result = { description, placeId: pred.placeId || "" };

        if (type === "country" && pred.structuredFormat?.mainText?.text) {
          result.mainText = pred.structuredFormat.mainText.text;
        }

        return result;
      });

    // For countries, fetch the short code (ISO alpha-2) via Place Details
    if (type === "country" && suggestions.length > 0) {
      const detailed = await Promise.all(
        suggestions.slice(0, 5).map(async (s) => {
          if (!s.placeId) return s;
          try {
            const detailRes = await fetch(
              `https://places.googleapis.com/v1/places/${s.placeId}?fields=addressComponents&languageCode=en`,
              { headers: { "X-Goog-Api-Key": apiKey } }
            );
            if (!detailRes.ok) return s;
            const detail = await detailRes.json();
            const countryComp = (detail.addressComponents || []).find((c) =>
              c.types?.includes("country")
            );
            if (countryComp) {
              s.countryCode = countryComp.shortText || "";
              s.countryName = countryComp.longText || s.mainText || s.description;
            }
          } catch { /* keep suggestion without code */ }
          return s;
        })
      );
      return res.status(200).json({ suggestions: detailed });
    }

    return res.status(200).json({ suggestions });
  } catch (err) {
    console.error("Places autocomplete proxy error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
