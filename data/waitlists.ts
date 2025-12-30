/**
 * Waitlists Data — Product ideas and early access
 * 
 * AppLauncher v2 is the primary featured waitlist
 */

export interface Waitlist {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'active' | 'coming-soon' | 'closed';
  featured?: boolean;
  formUrl?: string;
  expectedLaunch?: string;
  category: 'product' | 'community' | 'experiment';
}

export const waitlists: Waitlist[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // PRIMARY — AppLauncher v2
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'applauncher-v2',
    name: 'AppLauncher v2',
    tagline: 'Understanding before execution',
    description: 'The next evolution of AppLauncher. Moving from code generation to clarity — helping founders and teams understand their intent deeply before taking action. Join the early circle shaping how we think about building in a post-AI world.',
    status: 'active',
    featured: true,
    formUrl: 'https://forms.gle/jZF2GacPQSnQXYNK6',
    expectedLaunch: 'Q1 2025',
    category: 'product',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECONDARY — Other experiments
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'intent-framework',
    name: 'Intent Framework',
    tagline: 'A vocabulary for clarity',
    description: 'A structured methodology for decomposing complex goals into clear, actionable intent units. For teams tired of miscommunication and founders who want to think more clearly.',
    status: 'coming-soon',
    expectedLaunch: 'Q2 2025',
    category: 'product',
  },
  {
    id: 'clarity-circle',
    name: 'Clarity Circle',
    tagline: 'A community of deliberate builders',
    description: 'A small, curated community of founders and builders who value clarity over speed. Monthly discussions on intent, execution, and the craft of building meaningful things.',
    status: 'coming-soon',
    expectedLaunch: 'Q2 2025',
    category: 'community',
  },
  {
    id: 'async-protocols',
    name: 'Async Protocols',
    tagline: 'Coordination without meetings',
    description: 'A collection of async-first communication patterns for remote teams. Reduce meeting overhead while improving alignment and clarity.',
    status: 'coming-soon',
    expectedLaunch: 'Q3 2025',
    category: 'experiment',
  },
  {
    id: 'post-verbal-research',
    name: 'Post-Verbal Research',
    tagline: 'Exploring intent-based interaction',
    description: 'Early research into how humans and AI can collaborate through intent rather than language. For researchers and practitioners interested in the future of human-computer interaction.',
    status: 'coming-soon',
    expectedLaunch: 'TBD',
    category: 'experiment',
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// Helper functions
// ═══════════════════════════════════════════════════════════════════════════

export const getFeaturedWaitlist = () =>
  waitlists.find(waitlist => waitlist.featured);

export const getActiveWaitlists = () =>
  waitlists.filter(waitlist => waitlist.status === 'active');

export const getComingSoonWaitlists = () =>
  waitlists.filter(waitlist => waitlist.status === 'coming-soon' && !waitlist.featured);

export const getWaitlistsByCategory = (category: Waitlist['category']) =>
  waitlists.filter(waitlist => waitlist.category === category);

