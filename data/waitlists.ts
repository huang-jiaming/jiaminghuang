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
  // PRIMARY — Diaminate
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'diaminate',
    name: 'Diaminate',
    tagline: 'Event Intelligence that proves ROI',
    description: 'We track the full loop—meetings → outcomes → follow-ups—so sponsors and organizers can measure what actually happened at events. Join the pilot to prove sponsor ROI at your events.',
    status: 'active',
    featured: true,
    formUrl: '/contact',
    expectedLaunch: 'Pilot now',
    category: 'product',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECONDARY — Other opportunities
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'cursor-meetup-sponsor',
    name: 'Cursor Meetup Sponsorship',
    tagline: 'Sponsor a builder-heavy room',
    description: 'Sponsor Cursor meetups in Calgary or Toronto. High-signal audience, real conversations, and measured outcomes using Diaminate. We track what works.',
    status: 'active',
    formUrl: '/contact',
    expectedLaunch: 'Ongoing',
    category: 'community',
  },
  {
    id: 'event-organizer-network',
    name: 'Event Organizer Network',
    tagline: 'Share learnings on sponsor ROI',
    description: 'A network of event organizers who care about proving sponsor value. Share learnings, explore Diaminate together, and build better events.',
    status: 'coming-soon',
    expectedLaunch: 'Q2 2026',
    category: 'community',
  },
  {
    id: 'sponsor-intelligence-reports',
    name: 'Sponsor Intelligence Reports',
    tagline: 'Benchmarks and insights',
    description: 'Aggregate insights from Diaminate deployments. What works at events? What converts? What follow-up patterns drive ROI? Data-driven guidance for sponsors.',
    status: 'coming-soon',
    expectedLaunch: 'Q3 2026',
    category: 'product',
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

