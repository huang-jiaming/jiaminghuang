/**
 * Chronology Data — Life timeline and narrative resume
 * 
 * Used on /work/chronology page
 */

export interface TimelineEntry {
  id: string;
  year: string;
  endYear?: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'work' | 'education' | 'project' | 'milestone';
  current?: boolean;
  tags?: string[];
}

export const timeline: TimelineEntry[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CURRENT ARC
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'applauncher-v2',
    year: '2024',
    title: 'AppLauncher v2',
    subtitle: 'Clarity-first product development',
    description: 'Building the next evolution of AppLauncher — moving from code generation to understanding. Focused on helping founders and teams clarify intent before execution.',
    category: 'project',
    current: true,
    tags: ['product', 'clarity', 'intent'],
  },
  {
    id: 'post-verbal-exploration',
    year: '2024',
    title: 'Post-Verbal Research',
    subtitle: 'Intent as the atomic unit',
    description: 'Deep dive into how coordination can happen beyond language. Exploring intent-based interfaces and collaboration patterns.',
    category: 'project',
    current: true,
    tags: ['research', 'future'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // RECENT HISTORY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'applauncher-v1',
    year: '2023',
    title: 'AppLauncher v1',
    subtitle: 'Code generation experiments',
    description: 'Built the original AppLauncher as a code generation tool. Learned that the real problem isn\'t generating code—it\'s understanding what to build.',
    category: 'project',
    tags: ['product', 'code-generation'],
  },
  {
    id: 'nomad-period',
    year: '2022',
    endYear: '2024',
    title: 'Global Building',
    subtitle: 'Nomadic product development',
    description: 'Built products while traveling across 15 countries. Learned how context shapes creativity and how async-first teams can outperform co-located ones.',
    category: 'milestone',
    tags: ['travel', 'remote-work'],
  },
  {
    id: 'startup-era',
    year: '2020',
    endYear: '2023',
    title: 'Startup Building',
    subtitle: 'Early-stage product work',
    description: 'Series of startup experiments and consulting work. Built products for fintech, developer tools, and consumer applications.',
    category: 'work',
    tags: ['startup', 'product'],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FOUNDATION
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'tech-career-start',
    year: '2018',
    endYear: '2020',
    title: 'Software Engineering',
    subtitle: 'Enterprise and scale',
    description: 'Cut teeth on large-scale systems at established tech companies. Learned the difference between code that works and code that lasts.',
    category: 'work',
    tags: ['engineering', 'growth'],
  },
  {
    id: 'education',
    year: '2014',
    endYear: '2018',
    title: 'Computer Science',
    subtitle: 'University years',
    description: 'Formal computer science education with focus on systems and human-computer interaction. Where curiosity became craft.',
    category: 'education',
    tags: ['education', 'cs'],
  },
  {
    id: 'first-code',
    year: '2010',
    title: 'First Lines of Code',
    subtitle: 'Where it began',
    description: 'Wrote first program as a teenager. A simple game that sparked a lifelong obsession with building things that work.',
    category: 'milestone',
    tags: ['origin'],
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// Helper functions
// ═══════════════════════════════════════════════════════════════════════════

export const getCurrentProjects = () =>
  timeline.filter(entry => entry.current);

export const getTimelineByCategory = (category: TimelineEntry['category']) =>
  timeline.filter(entry => entry.category === category);

export const getTimelineSorted = () =>
  [...timeline].sort((a, b) => parseInt(b.year) - parseInt(a.year));

