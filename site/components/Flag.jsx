// Flag component using flagcdn.com for cross-platform compatibility
// Windows doesn't support emoji flags, so we use actual images

import Image from 'next/image';

const countryCodeMap = {
  // Country names to ISO 3166-1 alpha-2 codes
  'India': 'in',
  'USA': 'us',
  'United States': 'us',
  'United States of America': 'us',
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
  'Nepal': 'np',
  'Russia': 'ru',
  'Belgium': 'be',
  'Poland': 'pl',
  'Czech Republic': 'cz',
  'Czechia': 'cz',
  'Austria': 'at',
  'Mauritius': 'mu',
  'Chile': 'cl',
  'Peru': 'pe',
  'Papua New Guinea': 'pg',
  'Philippines': 'ph',
  'Sweden': 'se',
  'Switzerland': 'ch',
  'Panama': 'pa',
  'Taiwan': 'tw',
  'Israel': 'il',
  'Turkey': 'tr',
  'Algeria': 'dz',
  'Ecuador': 'ec',
  'Venezuela': 've',
  'Bahrain': 'bh',
  'Iraq': 'iq',
  'Iran': 'ir',
  'Pakistan': 'pk',
  'Kazakhstan': 'kz',
  'Uzbekistan': 'uz',
  'Bangladesh': 'bd',
  'Bhutan': 'bt',
  'Maldives': 'mv',
  'Sri Lanka': 'lk',
  'Ireland': 'ie',
  'Djibouti': 'dj',
  'Lithuania': 'lt',
  'Latvia': 'lv',
  'Mozambique': 'mz',
  'Cambodia': 'kh',
  'Myanmar': 'mm',
  'Honduras': 'hn',
  'Dominican Republic': 'do',
  'Portugal': 'pt',
  // Direct ISO codes
  'in': 'in', 'us': 'us', 'eu': 'eu', 'gb': 'gb', 'ae': 'ae',
  'sa': 'sa', 'au': 'au', 'jp': 'jp', 'cn': 'cn', 'sg': 'sg',
  'za': 'za', 'my': 'my', 'qa': 'qa', 'de': 'de', 'fr': 'fr',
  'it': 'it', 'es': 'es', 'nl': 'nl', 'ca': 'ca', 'mx': 'mx',
  'br': 'br', 'ar': 'ar', 'co': 'co', 'kr': 'kr', 'id': 'id',
  'th': 'th', 'vn': 'vn', 'kw': 'kw', 'om': 'om', 'nz': 'nz',
  'ke': 'ke', 'ng': 'ng', 'eg': 'eg', 'tz': 'tz', 'gh': 'gh',
  'np': 'np', 'ru': 'ru', 'be': 'be', 'pl': 'pl', 'cz': 'cz',
  'at': 'at', 'mu': 'mu', 'cl': 'cl', 'pe': 'pe', 'pg': 'pg',
  'ph': 'ph', 'se': 'se', 'ch': 'ch', 'pa': 'pa', 'tw': 'tw',
  'il': 'il', 'tr': 'tr', 'dz': 'dz', 'ec': 'ec', 've': 've',
  'bh': 'bh', 'iq': 'iq', 'ir': 'ir', 'pk': 'pk', 'kz': 'kz',
  'uz': 'uz', 'bd': 'bd', 'bt': 'bt', 'mv': 'mv', 'lk': 'lk',
  'ie': 'ie', 'dj': 'dj', 'lt': 'lt', 'lv': 'lv', 'mz': 'mz',
  'hk': 'hk', 'et': 'et', 'ma': 'ma',
};

export default function Flag({ country, size = 24, className = "" }) {
  const code = countryCodeMap[country];
  
  // Skip rendering for generic/aggregate names that have no flag
  if (!code) {
    return (
      <span
        className={className}
        style={{
          display: 'inline-block',
          width: size,
          height: Math.round(size * 0.75),
          verticalAlign: 'middle',
          textAlign: 'center',
          fontSize: Math.round(size * 0.6),
          lineHeight: `${Math.round(size * 0.75)}px`,
        }}
        aria-hidden="true"
      >
        🌐
      </span>
    );
  }
  
  const flagUrl40 = `https://flagcdn.com/w40/${code}.png`;
  const flagUrl80 = `https://flagcdn.com/w80/${code}.png`;
  const src = size > 24 ? flagUrl80 : flagUrl40;
  
  return (
    <Image
      src={src}
      alt={`${country || 'Unknown'} flag`}
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
      quality={75}
      unoptimized={false}
    />
  );
}

// Export the country code map for use in other components
export { countryCodeMap };
