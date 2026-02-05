// Flag component using flagcdn.com for cross-platform compatibility
// Windows doesn't support emoji flags, so we use actual images

const countryCodeMap = {
  // Common names to ISO codes
  'India': 'in',
  'USA': 'us',
  'United States': 'us',
  'Europe': 'eu',
  'UK': 'gb',
  'United Kingdom': 'gb',
  'UAE': 'ae',
  'United Arab Emirates': 'ae',
  'Saudi Arabia': 'sa',
  'Australia': 'au',
  'Japan': 'jp',
  'China': 'cn',
  'Singapore': 'sg',
  'South Africa': 'za',
  'Malaysia': 'my',
  'Qatar': 'qa',
  'Germany': 'de',
  'France': 'fr',
  'Italy': 'it',
  'Spain': 'es',
  'Netherlands': 'nl',
  'Canada': 'ca',
  'Mexico': 'mx',
  'Brazil': 'br',
  'Argentina': 'ar',
  'Colombia': 'co',
  'South Korea': 'kr',
  'Indonesia': 'id',
  'Thailand': 'th',
  'Vietnam': 'vn',
  'Kuwait': 'kw',
  'Oman': 'om',
  'New Zealand': 'nz',
  'Kenya': 'ke',
  'Nigeria': 'ng',
  'Egypt': 'eg',
  'Tanzania': 'tz',
  'Ghana': 'gh',
  // Direct codes
  'in': 'in',
  'us': 'us',
  'eu': 'eu',
  'gb': 'gb',
  'ae': 'ae',
  'sa': 'sa',
  'au': 'au',
  'jp': 'jp',
  'cn': 'cn',
  'sg': 'sg',
  'za': 'za',
  'my': 'my',
  'qa': 'qa',
  'de': 'de',
  'fr': 'fr',
  'it': 'it',
  'es': 'es',
  'nl': 'nl',
  'ca': 'ca',
  'mx': 'mx',
  'br': 'br',
  'ar': 'ar',
  'co': 'co',
  'kr': 'kr',
  'id': 'id',
  'th': 'th',
  'vn': 'vn',
  'kw': 'kw',
  'om': 'om',
  'nz': 'nz',
  'ke': 'ke',
  'ng': 'ng',
  'eg': 'eg',
  'tz': 'tz',
  'gh': 'gh',
};

export default function Flag({ country, size = 24, className = "" }) {
  const code = countryCodeMap[country] || country?.toLowerCase() || 'un';
  
  // Use flagcdn.com which provides high-quality flag images
  const flagUrl = `https://flagcdn.com/w40/${code}.png`;
  const flagUrl2x = `https://flagcdn.com/w80/${code}.png`;
  
  return (
    <img
      src={flagUrl}
      srcSet={`${flagUrl2x} 2x`}
      alt={`${country} flag`}
      width={size}
      height={Math.round(size * 0.75)}
      className={`flag-img ${className}`}
      style={{
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        borderRadius: '2px',
      }}
      loading="lazy"
    />
  );
}

// Export the country code map for use in other components
export { countryCodeMap };
