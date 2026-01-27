/**
 * Gallery Data — Items for the infinite vertical exploration
 * 
 * Categories: product | build | writing | travel | experiment | stat
 * Featured items appear larger in the gallery layout
 */

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'product' | 'build' | 'writing' | 'travel' | 'experiment' | 'stat';
  link?: string;
  featured?: boolean;
  status?: 'active' | 'archived' | 'coming-soon';
  year?: string;
  tags?: string[];
}

export const galleryItems: GalleryItem[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PRODUCTS — Current and past
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'diaminate',
    title: 'Diaminate',
    subtitle: 'Event Intelligence for sponsor ROI',
    description: 'We track the full loop—meetings → outcomes → follow-ups—so sponsors and organizers can measure what actually happened at events. Co-founder & CPO.',
    category: 'product',
    link: '/applauncher',
    featured: true,
    status: 'active',
    year: '2024–',
    tags: ['events', 'sponsor-roi', 'measurement'],
  },
  {
    id: 'cursor-meetups',
    title: 'Cursor Meetups',
    subtitle: 'Calgary + Toronto',
    description: 'Organizing Cursor community events to bring builders together. High-signal testbeds for measuring sponsor outcomes with Diaminate.',
    category: 'build',
    link: '/community',
    status: 'active',
    year: '2024–',
    tags: ['community', 'events', 'cursor'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BUILDS — Past projects and experiments
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'applauncher',
    title: 'AppLauncher',
    subtitle: 'Code generation & clarity tools',
    description: 'An AI-powered code generation tool that evolved into a clarity-first understanding tool. Lessons now inform Diaminate.',
    category: 'build',
    link: '/work/built#applauncher',
    status: 'archived',
    year: '2023–2024',
    tags: ['code-generation', 'clarity'],
  },
  {
    id: 'sponsor-intelligence',
    title: 'Sponsor Intelligence',
    subtitle: 'Measurement frameworks',
    description: 'Frameworks for measuring event ROI: what worked, who engaged, what converted. The methodology behind Diaminate.',
    category: 'experiment',
    status: 'active',
    year: '2024',
    tags: ['measurement', 'events'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WRITING — Essays and thoughts
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'essay-sponsor-roi',
    title: 'The Sponsor ROI Problem',
    subtitle: 'Essay',
    description: 'Why events are broken for sponsors, and how Event Intelligence can fix it. The thesis behind Diaminate.',
    category: 'writing',
    link: '/vision',
    year: '2024',
    tags: ['essay', 'events', 'sponsor-roi'],
  },
  {
    id: 'essay-event-measurement',
    title: 'Measuring What Matters at Events',
    subtitle: 'Essay',
    description: 'Beyond badge scans: how to track meetings, outcomes, and follow-ups to prove real event ROI.',
    category: 'writing',
    link: '/writing',
    year: '2024',
    tags: ['essay', 'measurement'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAVEL — Places and experiences
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'travel-tokyo',
    title: 'Tokyo',
    subtitle: 'Japan',
    description: 'Where efficiency meets intentionality. A city that understands systems thinking.',
    category: 'travel',
    link: '/travel',
    tags: ['japan', 'asia'],
  },
  {
    id: 'travel-lisbon',
    title: 'Lisbon',
    subtitle: 'Portugal',
    description: 'The crossroads of old world wisdom and new world building. A growing ecosystem.',
    category: 'travel',
    link: '/travel',
    tags: ['portugal', 'europe'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STATS — Numbers that matter
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'stat-countries',
    title: '23',
    subtitle: 'Countries visited',
    description: 'Seeking perspective through geography.',
    category: 'stat',
    link: '/travel',
  },
  {
    id: 'stat-builds',
    title: '12',
    subtitle: 'Products shipped',
    description: 'Learning through making.',
    category: 'stat',
    link: '/work/built',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXPERIMENTS — Ongoing explorations
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'experiment-event-intelligence',
    title: 'Event Intelligence Patterns',
    subtitle: 'Ongoing research',
    description: 'Studying what works at events: which sponsor formats convert, what follow-up patterns close, what is worth funding.',
    category: 'experiment',
    year: '2024',
    tags: ['research', 'events'],
  },
  {
    id: 'experiment-community-roi',
    title: 'Community Distribution ROI',
    subtitle: 'Early exploration',
    description: 'How recurring community events compound value for sponsors over time. Building the case for long-term sponsorship.',
    category: 'experiment',
    year: '2024',
    tags: ['research', 'community'],
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// Helper functions
// ═══════════════════════════════════════════════════════════════════════════

export const getFeaturedItems = () => galleryItems.filter(item => item.featured);

export const getItemsByCategory = (category: GalleryItem['category']) => 
  galleryItems.filter(item => item.category === category);

export const getActiveProducts = () => 
  galleryItems.filter(item => item.category === 'product' && item.status === 'active');

export const getArchivedBuilds = () => 
  galleryItems.filter(item => (item.category === 'build' || item.category === 'product') && item.status === 'archived');

