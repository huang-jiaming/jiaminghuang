/**
 * Build Gallery Data — Proof of work images
 * 
 * No captions, no dates, no city labels.
 * Let density imply credibility.
 * 
 * Categories mixed: hackathons, demos, events, shipped tools, venues, working sessions
 * Cities intermixed without labels: Calgary, Sydney, Tokyo, etc.
 */

export interface BuildImage {
  id: string;
  src: string;
  alt: string; // For accessibility only, not displayed
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export const buildImages: BuildImage[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // Hackathons & Events
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'build-001', src: '/images/build/hackathon-room-01.jpg', alt: 'Hackathon working session', aspectRatio: 'landscape' },
  { id: 'build-002', src: '/images/build/whiteboard-planning.jpg', alt: 'Whiteboard planning session', aspectRatio: 'landscape' },
  { id: 'build-003', src: '/images/build/demo-day-01.jpg', alt: 'Demo day presentation', aspectRatio: 'landscape' },
  { id: 'build-004', src: '/images/build/late-night-coding.jpg', alt: 'Late night coding session', aspectRatio: 'square' },
  { id: 'build-005', src: '/images/build/event-venue-01.jpg', alt: 'Event venue setup', aspectRatio: 'landscape' },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // Product Screenshots & Demos
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'build-006', src: '/images/build/applauncher-screen.jpg', alt: 'AppLauncher interface', aspectRatio: 'landscape' },
  { id: 'build-007', src: '/images/build/prototype-01.jpg', alt: 'Prototype interface', aspectRatio: 'landscape' },
  { id: 'build-008', src: '/images/build/code-review.jpg', alt: 'Code review session', aspectRatio: 'square' },
  { id: 'build-009', src: '/images/build/terminal-deploy.jpg', alt: 'Deployment terminal', aspectRatio: 'landscape' },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // Working Sessions & Venues
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'build-010', src: '/images/build/coworking-space.jpg', alt: 'Coworking space', aspectRatio: 'landscape' },
  { id: 'build-011', src: '/images/build/workshop-01.jpg', alt: 'Workshop session', aspectRatio: 'landscape' },
  { id: 'build-012', src: '/images/build/standup-meeting.jpg', alt: 'Team standup', aspectRatio: 'square' },
  { id: 'build-013', src: '/images/build/builder-gathering.jpg', alt: 'Builder gathering', aspectRatio: 'landscape' },
  { id: 'build-014', src: '/images/build/presentation-screen.jpg', alt: 'Presentation', aspectRatio: 'landscape' },
  { id: 'build-015', src: '/images/build/desk-setup.jpg', alt: 'Working desk', aspectRatio: 'square' },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // More Events & Community
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'build-016', src: '/images/build/networking-event.jpg', alt: 'Networking event', aspectRatio: 'landscape' },
  { id: 'build-017', src: '/images/build/hackathon-room-02.jpg', alt: 'Hackathon venue', aspectRatio: 'landscape' },
  { id: 'build-018', src: '/images/build/pitch-practice.jpg', alt: 'Pitch practice', aspectRatio: 'square' },
  { id: 'build-019', src: '/images/build/post-its-wall.jpg', alt: 'Planning wall', aspectRatio: 'portrait' },
  { id: 'build-020', src: '/images/build/team-celebration.jpg', alt: 'Team moment', aspectRatio: 'landscape' },
];

// Double the array for seamless infinite scroll
export const getInfiniteBuildImages = () => [...buildImages, ...buildImages];

