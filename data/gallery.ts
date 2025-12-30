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
    id: 'applauncher-v2',
    title: 'AppLauncher v2',
    subtitle: 'Understanding before execution',
    description: 'The evolution from code generation to clarity. AppLauncher v2 is about understanding intent before action — a tool for founders and teams who want to think clearly before building.',
    category: 'product',
    link: '/applauncher',
    featured: true,
    status: 'active',
    year: '2024–',
    tags: ['clarity', 'intent', 'understanding'],
  },
  {
    id: 'applauncher-v1',
    title: 'AppLauncher v1',
    subtitle: 'Code generation experiments',
    description: 'The original exploration into automated code generation. A technical proof-of-concept that taught us valuable lessons about what builders actually need.',
    category: 'build',
    link: '/work/built#applauncher-v1',
    status: 'archived',
    year: '2023',
    tags: ['code-generation', 'automation'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BUILDS — Past projects and experiments
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'intent-framework',
    title: 'Intent Framework',
    subtitle: 'Structuring clarity',
    description: 'A methodology for decomposing complex goals into actionable intent units. Used internally and shared with early collaborators.',
    category: 'build',
    status: 'active',
    year: '2024',
    tags: ['methodology', 'frameworks'],
  },
  {
    id: 'collaboration-protocols',
    title: 'Collaboration Protocols',
    subtitle: 'Post-verbal coordination',
    description: 'Experiments in how teams can coordinate without endless meetings. Async-first, intent-driven communication patterns.',
    category: 'experiment',
    status: 'active',
    year: '2024',
    tags: ['async', 'collaboration'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // WRITING — Essays and thoughts
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'essay-post-verbal',
    title: 'The Post-Verbal World',
    subtitle: 'Essay',
    description: 'On the shift from communication to coordination, and why the future belongs to those who can express intent clearly.',
    category: 'writing',
    link: '/writing',
    year: '2024',
    tags: ['essay', 'future'],
  },
  {
    id: 'essay-clarity-as-leverage',
    title: 'Clarity as Leverage',
    subtitle: 'Essay',
    description: 'Why the ability to articulate what you want is becoming the most valuable skill in the age of AI.',
    category: 'writing',
    link: '/writing',
    year: '2024',
    tags: ['essay', 'clarity'],
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
    id: 'experiment-async-teams',
    title: 'Async Team Dynamics',
    subtitle: 'Ongoing research',
    description: 'Studying how high-performing remote teams maintain clarity without synchronous overhead.',
    category: 'experiment',
    year: '2024',
    tags: ['research', 'async'],
  },
  {
    id: 'experiment-intent-primitives',
    title: 'Intent Primitives',
    subtitle: 'Early exploration',
    description: 'What are the atomic units of human intention? Building a vocabulary for clarity.',
    category: 'experiment',
    year: '2024',
    tags: ['research', 'language'],
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

