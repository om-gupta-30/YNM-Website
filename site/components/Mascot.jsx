"use client";

import { useState, useEffect, useCallback, useRef, memo } from "react";
import Image from "next/image";

// Company facts and prompts the mascot will share
const mascotPrompts = [
  "🌍 Leading manufacturer & exporter of road marking paints to 50+ countries across Asia, Africa & the Middle East!",
  "🛣️ We manufacture hot thermoplastic paints, cold plastic paints & water-based road marking paints for highways!",
  "🛡️ Trusted road safety products manufacturer - crash barriers, retro reflective signages & gantry systems!",
  "🏗️ In-house metal fabrication for W beam, double W beam, thrie beam & roller crash barriers!",
  "⭐ Premium raw materials used in manufacturing road marking paints & highway safety products!",
];

function Mascot() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const containerRef = useRef(null);
  const promptIndexRef = useRef(0);

  // Get next prompt (sequential instead of random for better UX)
  const getNextPrompt = useCallback(() => {
    const prompt = mascotPrompts[promptIndexRef.current];
    promptIndexRef.current = (promptIndexRef.current + 1) % mascotPrompts.length;
    return prompt;
  }, []);

  // Show mascot after page loads with pop-in animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show first prompt after mascot appears
      setTimeout(() => {
        setCurrentPrompt(getNextPrompt());
        setShowBubble(true);
      }, 600);
    }, 2000); // Increased delay for better initial page load

    return () => clearTimeout(timer);
  }, [getNextPrompt]);

  // Auto-rotate prompts every 8 seconds (increased from 5 for less distraction)
  useEffect(() => {
    if (!isVisible || isMinimized) return;

    const interval = setInterval(() => {
      setShowBubble(false);
      setTimeout(() => {
        setCurrentPrompt(getNextPrompt());
        setShowBubble(true);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible, isMinimized, getNextPrompt]);

  // Handle mascot click - show new prompt
  const handleMascotClick = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setTimeout(() => {
        setCurrentPrompt(getNextPrompt());
        setShowBubble(true);
      }, 200);
    } else {
      setShowBubble(false);
      setTimeout(() => {
        setCurrentPrompt(getNextPrompt());
        setShowBubble(true);
      }, 200);
    }
  };

  // Minimize mascot
  const handleMinimize = (e) => {
    e.stopPropagation();
    setShowBubble(false);
    setIsMinimized(true);
  };

  // Always render container so animation can work
  return (
    <div 
      ref={containerRef}
      className={`mascot-container ${isVisible ? "visible" : ""} ${isMinimized ? "minimized" : ""}`}
    >
      {/* Mascot Character */}
      <div className="mascot-character" onClick={handleMascotClick}>
        <div className="mascot-glow" />
        <Image
          src="/assets/mascot.png"
          alt="YNM Safety Mascot - Road Safety Products Manufacturer | Hot Thermoplastic Paint Manufacturers India"
          width={140}
          height={140}
          className="mascot-image"
          priority
        />
        {isMinimized && (
          <div className="mascot-badge">
            <span>💬</span>
          </div>
        )}
      </div>

      {/* Speech Bubble - Beside the mascot */}
      {showBubble && !isMinimized && (
        <div className="mascot-bubble">
          <button className="mascot-bubble-close" onClick={handleMinimize} aria-label="Close">
            ×
          </button>
          <p>{currentPrompt}</p>
          <div className="mascot-bubble-tip" />
        </div>
      )}
    </div>
  );
}

export default memo(Mascot);
