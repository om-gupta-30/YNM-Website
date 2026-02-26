import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import countryCodes from "@/lib/countryCodes";

export default function PhoneInput({ value, onChange, id, required, className }) {
  const [dialCode, setDialCode] = useState("+91");
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropRef = useRef(null);
  const searchRef = useRef(null);

  // Sync external value on mount
  useEffect(() => {
    if (value && !number) {
      const match = countryCodes.find((c) => value.startsWith(c.dial));
      if (match) {
        setDialCode(match.dial);
        setNumber(value.slice(match.dial.length).replace(/\D/g, "").slice(0, 10));
      } else {
        const digits = value.replace(/\D/g, "");
        setNumber(digits.slice(0, 10));
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const propagate = useCallback(
    (dc, num) => {
      const clean = num.replace(/\D/g, "").slice(0, 10);
      onChange(clean ? `${dc}${clean}` : "");
    },
    [onChange]
  );

  const handleNumberChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 10);
    setNumber(raw);
    propagate(dialCode, raw);
  };

  const selectCode = (c) => {
    setDialCode(c.dial);
    setOpen(false);
    setSearch("");
    propagate(c.dial, number);
  };

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) searchRef.current.focus();
  }, [open]);

  const selected = countryCodes.find((c) => c.dial === dialCode) || countryCodes[0];

  const filtered = useMemo(() => {
    if (!search) return countryCodes;
    const q = search.toLowerCase();
    return countryCodes.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial.includes(q) || c.code.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className={`ynm-phone-wrap ${className || ""}`} ref={dropRef}>
      <button type="button" className="ynm-phone-code-btn" onClick={() => setOpen(!open)} aria-label="Select country code">
        <span className="ynm-phone-flag">{selected.flag}</span>
        <span className="ynm-phone-dial">{selected.dial}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <input
        id={id}
        type="tel"
        inputMode="numeric"
        maxLength={10}
        placeholder="10-digit number"
        value={number}
        onChange={handleNumberChange}
        required={required}
        className="ynm-phone-input"
      />
      {open && (
        <div className="ynm-phone-dropdown">
          <input
            ref={searchRef}
            type="text"
            className="ynm-phone-search"
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="ynm-phone-list">
            {filtered.map((c) => (
              <button type="button" key={c.code} className={`ynm-phone-option ${c.dial === dialCode ? "active" : ""}`} onClick={() => selectCode(c)}>
                <span className="ynm-phone-opt-flag">{c.flag}</span>
                <span className="ynm-phone-opt-name">{c.name}</span>
                <span className="ynm-phone-opt-dial">{c.dial}</span>
              </button>
            ))}
            {filtered.length === 0 && <div className="ynm-phone-empty">No results</div>}
          </div>
        </div>
      )}
    </div>
  );
}
