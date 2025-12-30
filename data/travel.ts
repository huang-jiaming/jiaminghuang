/**
 * Travel Data — Countries and meaningful places
 * 
 * Used on /travel page for grid display
 */

export interface Country {
  id: string;
  name: string;
  code: string; // ISO 3166-1 alpha-2
  continent: 'asia' | 'europe' | 'north-america' | 'south-america' | 'africa' | 'oceania';
  visits: number;
  lastVisit?: string; // Year
  significance?: 'lived' | 'worked' | 'traveled';
  note?: string;
}

export const countries: Country[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ASIA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'china',
    name: 'China',
    code: 'CN',
    continent: 'asia',
    visits: 10,
    lastVisit: '2023',
    significance: 'lived',
    note: 'Where it all started. Family roots and formative years.',
  },
  {
    id: 'japan',
    name: 'Japan',
    code: 'JP',
    continent: 'asia',
    visits: 5,
    lastVisit: '2024',
    significance: 'traveled',
    note: 'Systems thinking embodied in culture.',
  },
  {
    id: 'singapore',
    name: 'Singapore',
    code: 'SG',
    continent: 'asia',
    visits: 8,
    lastVisit: '2024',
    significance: 'worked',
    note: 'Asia\'s startup crossroads.',
  },
  {
    id: 'taiwan',
    name: 'Taiwan',
    code: 'TW',
    continent: 'asia',
    visits: 3,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Warmth, technology, and night markets.',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    code: 'TH',
    continent: 'asia',
    visits: 4,
    lastVisit: '2024',
    significance: 'worked',
    note: 'Remote work paradise, nomad community.',
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    code: 'VN',
    continent: 'asia',
    visits: 2,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Energy and resilience.',
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    code: 'KR',
    continent: 'asia',
    visits: 2,
    lastVisit: '2024',
    significance: 'traveled',
    note: 'Speed and ambition.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EUROPE
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'portugal',
    name: 'Portugal',
    code: 'PT',
    continent: 'europe',
    visits: 6,
    lastVisit: '2024',
    significance: 'lived',
    note: 'The new frontier for builders.',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    code: 'GB',
    continent: 'europe',
    visits: 5,
    lastVisit: '2024',
    significance: 'worked',
    note: 'Where finance meets fintech.',
  },
  {
    id: 'germany',
    name: 'Germany',
    code: 'DE',
    continent: 'europe',
    visits: 4,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Engineering precision.',
  },
  {
    id: 'france',
    name: 'France',
    code: 'FR',
    continent: 'europe',
    visits: 3,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Art, food, philosophy.',
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    code: 'NL',
    continent: 'europe',
    visits: 4,
    lastVisit: '2024',
    significance: 'traveled',
    note: 'Pragmatic innovation.',
  },
  {
    id: 'spain',
    name: 'Spain',
    code: 'ES',
    continent: 'europe',
    visits: 3,
    lastVisit: '2024',
    significance: 'traveled',
    note: 'Life at a different pace.',
  },
  {
    id: 'italy',
    name: 'Italy',
    code: 'IT',
    continent: 'europe',
    visits: 2,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Beauty as a value.',
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    code: 'CH',
    continent: 'europe',
    visits: 2,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Precision and neutrality.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NORTH AMERICA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'usa',
    name: 'United States',
    code: 'US',
    continent: 'north-america',
    visits: 10,
    lastVisit: '2024',
    significance: 'lived',
    note: 'Where dreams become products.',
  },
  {
    id: 'canada',
    name: 'Canada',
    code: 'CA',
    continent: 'north-america',
    visits: 3,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Quiet ambition.',
  },
  {
    id: 'mexico',
    name: 'Mexico',
    code: 'MX',
    continent: 'north-america',
    visits: 2,
    lastVisit: '2024',
    significance: 'traveled',
    note: 'Emerging tech scene, rich culture.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SOUTH AMERICA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'brazil',
    name: 'Brazil',
    code: 'BR',
    continent: 'south-america',
    visits: 2,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Scale and energy.',
  },
  {
    id: 'argentina',
    name: 'Argentina',
    code: 'AR',
    continent: 'south-america',
    visits: 1,
    lastVisit: '2023',
    significance: 'traveled',
    note: 'Resilience through chaos.',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OCEANIA
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'australia',
    name: 'Australia',
    code: 'AU',
    continent: 'oceania',
    visits: 2,
    lastVisit: '2024',
    significance: 'traveled',
    note: 'A different pace of life.',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    code: 'NZ',
    continent: 'oceania',
    visits: 1,
    lastVisit: '2022',
    significance: 'traveled',
    note: 'Nature as the main character.',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// Helper functions
// ═══════════════════════════════════════════════════════════════════════════

export const getCountriesByContinent = (continent: Country['continent']) =>
  countries.filter(country => country.continent === continent);

export const getCountriesLived = () =>
  countries.filter(country => country.significance === 'lived');

export const getCountriesWorked = () =>
  countries.filter(country => country.significance === 'worked' || country.significance === 'lived');

export const getTotalCountries = () => countries.length;

export const getTotalVisits = () =>
  countries.reduce((total, country) => total + country.visits, 0);

export const continentLabels: Record<Country['continent'], string> = {
  'asia': 'Asia',
  'europe': 'Europe',
  'north-america': 'North America',
  'south-america': 'South America',
  'africa': 'Africa',
  'oceania': 'Oceania',
};

