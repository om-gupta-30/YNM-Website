import { useState, useRef, useEffect } from "react";

export default function PlacesAutocomplete({
  type,
  value,
  onChange,
  countryCode,
  id,
  required,
  placeholder,
  className,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const wrapRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const fetchSuggestions = (text) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!text.trim() || text.length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const params = new URLSearchParams({ input: text, type });
        if (type === "city" && countryCode) params.set("country", countryCode);

        const res = await fetch(`/api/places/autocomplete?${params}`);
        if (!res.ok) throw new Error();
        const data = await res.json();

        if (data.suggestions?.length) {
          setSuggestions(
            data.suggestions.map((s) => ({
              label: s.countryName || s.description,
              description: s.description,
              placeId: s.placeId,
              countryCode: s.countryCode || "",
            }))
          );
          setOpen(true);
        } else {
          setSuggestions([]);
          setOpen(false);
        }
      } catch {
        setSuggestions([]);
        setOpen(false);
      }
      setActiveIdx(-1);
    }, 250);
  };

  const handleInputChange = (text) => {
    onChange(text, undefined);
    fetchSuggestions(text);
  };

  const selectItem = (item) => {
    if (type === "country") {
      onChange(item.label, item.countryCode);
    } else {
      onChange(item.label);
    }
    setSuggestions([]);
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!open || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      selectItem(suggestions[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        onFocus={() => {
          if (suggestions.length) setOpen(true);
        }}
        onKeyDown={handleKeyDown}
        placeholder={
          placeholder ||
          (type === "country"
            ? "Start typing country..."
            : "Start typing city...")
        }
        required={required}
        className={className || ""}
        autoComplete="off"
      />
      {open && suggestions.length > 0 && (
        <ul className="ynm-places-dropdown">
          {suggestions.map((s, i) => (
            <li
              key={s.placeId || i}
              className={`ynm-places-item${i === activeIdx ? " active" : ""}`}
              onMouseDown={(e) => {
                e.preventDefault();
                selectItem(s);
              }}
              onMouseEnter={() => setActiveIdx(i)}
            >
              {s.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
