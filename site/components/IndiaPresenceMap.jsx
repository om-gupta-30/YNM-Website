import { useState, useRef, useEffect } from "react";
import { INDIA_MAP_PATHS } from "@/lib/indiaMapPaths";
import indiaContacts from "@/lib/indiaContacts";

const TRANSITION = "fill 0.2s ease, transform 0.2s ease, stroke 0.2s ease";

/*
 * SVG coordinate system (viewBox="-90 -120 680 810")
 *   minX: -90    minY: -120
 *   width: 680   height: 810
 *   X range: -90 to 590   Y range: -120 to 690
 * All state paths in INDIA_MAP_PATHS use these user coordinates.
 */

// Heat colors by contact count: 0 = light gray; 1–2 = light red; 3–5 = medium red; 6+ = dark red
const HEAT_0 = "#e8e4dc";
const HEAT_1_2 = "#f5c6c6";
const HEAT_3_5 = "#d96969";
const HEAT_6_PLUS = "#a52a2a";

const STROKE_DEFAULT = "#555";
const STROKE_ACTIVE = "#1a1a1a";
const STROKE_WIDTH_DEFAULT = 1;
const STROKE_WIDTH_ACTIVE = 1.5;

function getBaseFill(id) {
  const n = indiaContacts[id]?.contacts?.length ?? 0;
  if (n === 0) return HEAT_0;
  if (n <= 2) return HEAT_1_2;
  if (n <= 5) return HEAT_3_5;
  return HEAT_6_PLUS;
}

function darken(hex, factor = 0.88) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.floor(((n >> 16) & 0xff) * factor));
  const g = Math.max(0, Math.floor(((n >> 8) & 0xff) * factor));
  const b = Math.max(0, Math.floor((n & 0xff) * factor));
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function getFill(id, selectedState) {
  const base = getBaseFill(id);
  return selectedState === id ? darken(base) : base;
}

const STATE_NAMES = {
  AN: "Andaman and Nicobar Islands", AP: "Andhra Pradesh", AR: "Arunachal Pradesh", AS: "Assam",
  BR: "Bihar", CH: "Chandigarh", CT: "Chhattisgarh", DD: "Daman and Diu", DL: "Delhi",
  DN: "Dadra and Nagar Haveli", GA: "Goa", GJ: "Gujarat", HP: "Himachal Pradesh", HR: "Haryana",
  JH: "Jharkhand", JK: "Jammu and Kashmir", KA: "Karnataka", KL: "Kerala", LD: "Lakshadweep",
  MH: "Maharashtra", ML: "Meghalaya", MN: "Manipur", MP: "Madhya Pradesh", MZ: "Mizoram",
  NL: "Nagaland", OR: "Odisha", PB: "Punjab", PY: "Puducherry", RJ: "Rajasthan", SK: "Sikkim",
  TG: "Telangana", TN: "Tamil Nadu", TR: "Tripura", UP: "Uttar Pradesh", UT: "Uttarakhand",
  WB: "West Bengal",
};

export default function IndiaPresenceMap() {
  const containerRef = useRef(null);
  const [selectedState, setSelectedState] = useState(null);

  // Click outside map area → clear selection (only one state can be active; toggling same state also clears)
  useEffect(() => {
    const onDocumentClick = (e) => {
      if (selectedState && !containerRef.current?.contains(e.target)) {
        setSelectedState(null);
      }
    };
    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [selectedState]);

  const handleStateClick = (id, e) => {
    e.stopPropagation();
    setSelectedState((prev) => (prev === id ? null : id));
  };

  const handleSvgBackgroundClick = (e) => {
    if (selectedState && e.target === e.currentTarget) {
      setSelectedState(null);
    }
  };

  const stateName = selectedState ? (indiaContacts[selectedState]?.stateName ?? STATE_NAMES[selectedState] ?? selectedState) : "";
  const contacts = selectedState ? (indiaContacts[selectedState]?.contacts ?? []) : [];

  return (
    <div 
      ref={containerRef} 
      style={{ 
        display: "grid", 
        gridTemplateColumns: selectedState ? "1fr 1fr" : "1fr", 
        gap: 24, 
        maxWidth: "100%",
        alignItems: "start",
        transition: "grid-template-columns 0.3s ease"
      }}
      className="india-map-container"
    >
      {/* Left Side - Map */}
      <div style={{ position: "relative" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-90 -120 680 810"
          width="100%"
          style={{ 
            background: "#f8f5f0", 
            display: "block", 
            borderRadius: 12,
            border: "1px solid #e8e4dc",
            maxHeight: 420
          }}
          aria-label="Map of India"
          role="img"
          onClick={handleSvgBackgroundClick}
        >
          {INDIA_MAP_PATHS.map(({ id, d }) => {
            const isActive = selectedState === id;
            return (
              <path
                key={id}
                id={id}
                d={d}
                fill={getFill(id, selectedState)}
                stroke={isActive ? STROKE_ACTIVE : STROKE_DEFAULT}
                strokeWidth={isActive ? STROKE_WIDTH_ACTIVE : STROKE_WIDTH_DEFAULT}
                style={{
                  transition: TRANSITION,
                  cursor: "pointer",
                  transform: isActive ? "scale(1.02)" : "scale(1)",
                  transformOrigin: "center",
                  transformBox: "fill-box",
                }}
                onClick={(e) => handleStateClick(id, e)}
              />
            );
          })}
        </svg>

        {/* Legend */}
        <div
          role="group"
          aria-label="State presence scale"
          style={{
            marginTop: 12,
            padding: "8px 0",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px 14px",
            alignItems: "center",
            fontSize: 11,
            color: "#666",
          }}
        >
          {[
            [HEAT_0, "No presence"],
            [HEAT_1_2, "1–2 contacts"],
            [HEAT_3_5, "3–5 contacts"],
            [HEAT_6_PLUS, "6+ contacts"],
          ].map(([color, label]) => (
            <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: color, border: "1px solid #ccc", flexShrink: 0 }} />
              <span>{label}</span>
            </span>
          ))}
        </div>

        {/* Instruction text - only show when no state selected */}
        {!selectedState && (
          <p style={{ 
            margin: "8px 0 0", 
            fontSize: 12, 
            color: "#74060D", 
            lineHeight: 1.5,
            fontStyle: "italic"
          }}>
            Click on any state to view regional contacts →
          </p>
        )}
      </div>

      {/* Right Side - Contact Info */}
      {selectedState && (
        <div
          role="region"
          aria-label={`Contact details for ${stateName}`}
          style={{
            padding: "24px",
            background: "linear-gradient(135deg, #fff 0%, #faf8f5 100%)",
            border: "1px solid #e8e4dc",
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            height: "fit-content",
            maxHeight: 420,
            boxShadow: "0 4px 20px rgba(116, 6, 13, 0.08)",
            animation: "slideInRight 0.3s ease"
          }}
        >
          {/* Header */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            paddingBottom: 12,
            borderBottom: "2px solid #E6D3A3"
          }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#C9A24D", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
                Regional Contacts
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#74060D", lineHeight: 1.3 }}>
                {stateName}
              </div>
            </div>
            <button
              onClick={() => setSelectedState(null)}
              style={{
                background: "rgba(116, 6, 13, 0.1)",
                border: "none",
                borderRadius: 6,
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              aria-label="Close contact details"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#74060D" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          {/* Contacts List */}
          <div style={{ flex: 1, minHeight: 0, overflowY: "auto", paddingRight: 4 }}>
            {contacts.length > 0 ? (
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {contacts.map((c, i) => (
                  <li 
                    key={i} 
                    style={{ 
                      padding: 14,
                      background: "rgba(201, 162, 77, 0.08)",
                      borderRadius: 8,
                      borderLeft: "3px solid #C9A24D"
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#74060D", marginBottom: 6 }}>
                      {c?.name ?? ""}
                    </div>
                    <div style={{ fontSize: 12, color: "#888", marginBottom: 8, fontStyle: "italic" }}>
                      {c?.role ?? ""}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <div style={{ fontSize: 13, color: "#444", display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                        {c?.phone ?? "—"}
                      </div>
                      <div style={{ fontSize: 13, color: "#444", display: "flex", alignItems: "center", gap: 6 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A24D" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        {c?.email ?? "—"}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ 
                padding: 24, 
                textAlign: "center", 
                color: "#888",
                background: "rgba(201, 162, 77, 0.05)",
                borderRadius: 8
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>📍</div>
                <div style={{ fontSize: 14 }}>No contacts available for this region yet.</div>
                <div style={{ fontSize: 12, marginTop: 4, color: "#aaa" }}>We&apos;re expanding our presence!</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .india-map-container {
          transition: grid-template-columns 0.3s ease;
        }
        
        @media (max-width: 900px) {
          .india-map-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
