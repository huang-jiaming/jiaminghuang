/**
 * Stats Data — Minimal, factual numbers
 * 
 * Used on /work/stats page for calm, infographic presentation
 */

export interface Stat {
  id: string;
  value: string | number;
  label: string;
  context?: string;
  category: 'building' | 'learning' | 'traveling' | 'community';
}

export const stats: Stat[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // BUILDING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'products-shipped',
    value: 12,
    label: 'Products shipped',
    context: 'From weekend experiments to production systems',
    category: 'building',
  },
  {
    id: 'years-building',
    value: 8,
    label: 'Years building',
    context: 'Started with curiosity, continue with purpose',
    category: 'building',
  },
  {
    id: 'lines-written',
    value: '500K+',
    label: 'Lines of code',
    context: 'TypeScript, Python, and the languages in between',
    category: 'building',
  },
  {
    id: 'active-projects',
    value: 3,
    label: 'Active projects',
    context: 'Focus over fragmentation',
    category: 'building',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // LEARNING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'books-read',
    value: 200,
    label: 'Books read',
    context: 'Mostly non-fiction, occasionally escapism',
    category: 'learning',
  },
  {
    id: 'essays-written',
    value: 45,
    label: 'Essays written',
    context: 'Thinking through writing',
    category: 'learning',
  },
  {
    id: 'courses-completed',
    value: 30,
    label: 'Courses completed',
    context: 'Formal learning, informal application',
    category: 'learning',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAVELING
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'countries-visited',
    value: 23,
    label: 'Countries visited',
    context: 'Geography as perspective',
    category: 'traveling',
  },
  {
    id: 'cities-lived',
    value: 5,
    label: 'Cities lived in',
    context: 'Each one taught something different',
    category: 'traveling',
  },
  {
    id: 'flights-taken',
    value: 150,
    label: 'Flights taken',
    context: 'The carbon offset is a work in progress',
    category: 'traveling',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMUNITY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cursor-meetups',
    value: 2,
    label: 'Cities organized',
    context: 'Cursor meetups in Calgary + Toronto',
    category: 'community',
  },
  {
    id: 'meetup-events',
    value: '10+',
    label: 'Events organized',
    context: 'Builder-heavy rooms, real collisions',
    category: 'community',
  },
  {
    id: 'collaborations',
    value: 25,
    label: 'Collaborations',
    context: 'Building with others over building alone',
    category: 'community',
  },
  {
    id: 'sponsors-measured',
    value: '5+',
    label: 'Sponsors measured',
    context: 'Real ROI data from Diaminate pilots',
    category: 'community',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// Helper functions
// ═══════════════════════════════════════════════════════════════════════════

export const getStatsByCategory = (category: Stat['category']) =>
  stats.filter(stat => stat.category === category);

export const getHighlightStats = () => [
  stats.find(s => s.id === 'products-shipped'),
  stats.find(s => s.id === 'countries-visited'),
  stats.find(s => s.id === 'books-read'),
  stats.find(s => s.id === 'collaborations'),
].filter(Boolean) as Stat[];

