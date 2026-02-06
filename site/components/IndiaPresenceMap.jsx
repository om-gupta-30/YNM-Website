import { useRef } from "react";
import { INDIA_MAP_PATHS } from "@/lib/indiaMapPaths";

/*
 * SVG coordinate system (viewBox="-90 -120 680 810")
 *   minX: -90    minY: -120
 *   width: 680   height: 810
 *   X range: -90 to 590   Y range: -120 to 690
 * All state paths in INDIA_MAP_PATHS use these user coordinates.
 */

// Single color for all states - Coming Soon mode
const STATE_COLOR = "#f5c6c6";
const STATE_COLOR_HIGHLIGHT = "#d96969";

const STROKE_DEFAULT = "#555";
const STROKE_WIDTH_DEFAULT = 1;

export default function IndiaPresenceMap() {
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        gap: 24, 
        maxWidth: "100%",
      }}
      className="india-map-container"
    >
      {/* Map */}
      <div style={{ position: "relative", width: "100%", maxWidth: 500 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-90 -120 680 810"
          width="100%"
          style={{ 
            background: "#f8f5f0", 
            display: "block", 
            borderRadius: 12,
            border: "1px solid #e8e4dc",
            maxHeight: 420,
            opacity: 0.7
          }}
          aria-label="Map of India"
          role="img"
        >
          {INDIA_MAP_PATHS.map(({ id, d }) => {
            // Highlight a few states to show presence
            const highlighted = ["TG", "MH", "KA", "TN", "GJ", "DL"].includes(id);
            return (
              <path
                key={id}
                id={id}
                d={d}
                fill={highlighted ? STATE_COLOR_HIGHLIGHT : STATE_COLOR}
                stroke={STROKE_DEFAULT}
                strokeWidth={STROKE_WIDTH_DEFAULT}
                style={{
                  cursor: "default",
                }}
              />
            );
          })}
        </svg>

        {/* Coming Soon Overlay */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(255, 255, 255, 0.95)",
          padding: "30px 50px",
          borderRadius: 16,
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(116, 6, 13, 0.2)",
          border: "2px solid #C9A24D"
        }}>
          <div style={{
            width: 60,
            height: 60,
            background: "linear-gradient(135deg, #C9A24D 0%, #E6D3A3 100%)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px"
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#74060D" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <h3 style={{ 
            fontSize: 22, 
            fontWeight: 800, 
            color: "#74060D", 
            margin: "0 0 8px" 
          }}>
            Coming Soon
          </h3>
          <p style={{ 
            fontSize: 14, 
            color: "#666", 
            margin: 0,
            lineHeight: 1.6
          }}>
            Regional contacts &amp; representatives<br/>will be available shortly
          </p>
        </div>
      </div>

      {/* Legend - simplified */}
      <div
        role="group"
        aria-label="State presence scale"
        style={{
          padding: "8px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 14px",
          alignItems: "center",
          fontSize: 11,
          color: "#666",
          justifyContent: "center"
        }}
      >
        {[
          [STATE_COLOR, "Expanding"],
          [STATE_COLOR_HIGHLIGHT, "Active presence"],
        ].map(([color, label]) => (
          <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: color, border: "1px solid #ccc", flexShrink: 0 }} />
            <span>{label}</span>
          </span>
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        .india-map-container {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
