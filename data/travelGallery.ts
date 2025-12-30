/**
 * Travel Gallery Data — Global context images
 * 
 * This is field research, not tourism.
 * Pattern recognition across ecosystems.
 * 
 * Content: Cities, transit, work-from-anywhere, event venues, quiet in-between moments
 * No selfies. No landmarks for flexing.
 */

export interface TravelImage {
  id: string;
  src: string;
  alt: string; // For accessibility only, not displayed
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export const travelImages: TravelImage[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // Cities & Streets
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'travel-001', src: '/images/travel/city-skyline-01.jpg', alt: 'City skyline', aspectRatio: 'landscape' },
  { id: 'travel-002', src: '/images/travel/street-scene-01.jpg', alt: 'Street scene', aspectRatio: 'landscape' },
  { id: 'travel-003', src: '/images/travel/urban-grid.jpg', alt: 'Urban grid view', aspectRatio: 'landscape' },
  { id: 'travel-004', src: '/images/travel/neighborhood-01.jpg', alt: 'Neighborhood street', aspectRatio: 'square' },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // Transit & Movement
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'travel-005', src: '/images/travel/airport-terminal.jpg', alt: 'Airport terminal', aspectRatio: 'landscape' },
  { id: 'travel-006', src: '/images/travel/train-platform.jpg', alt: 'Train platform', aspectRatio: 'landscape' },
  { id: 'travel-007', src: '/images/travel/window-seat.jpg', alt: 'Window seat view', aspectRatio: 'portrait' },
  { id: 'travel-008', src: '/images/travel/metro-station.jpg', alt: 'Metro station', aspectRatio: 'square' },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // Work-from-Anywhere
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'travel-009', src: '/images/travel/cafe-workspace.jpg', alt: 'Cafe workspace', aspectRatio: 'landscape' },
  { id: 'travel-010', src: '/images/travel/hotel-desk.jpg', alt: 'Hotel desk', aspectRatio: 'square' },
  { id: 'travel-011', src: '/images/travel/coworking-abroad.jpg', alt: 'Coworking space', aspectRatio: 'landscape' },
  { id: 'travel-012', src: '/images/travel/laptop-view.jpg', alt: 'Remote work setup', aspectRatio: 'landscape' },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // Event Venues & Gatherings
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'travel-013', src: '/images/travel/conference-hall.jpg', alt: 'Conference venue', aspectRatio: 'landscape' },
  { id: 'travel-014', src: '/images/travel/meetup-space.jpg', alt: 'Meetup space', aspectRatio: 'landscape' },
  { id: 'travel-015', src: '/images/travel/startup-hub.jpg', alt: 'Startup hub', aspectRatio: 'square' },
  
  // ═══════════════════════════════════════════════════════════════════════════
  // Quiet In-Between Moments
  // ═══════════════════════════════════════════════════════════════════════════
  { id: 'travel-016', src: '/images/travel/morning-light.jpg', alt: 'Morning light', aspectRatio: 'landscape' },
  { id: 'travel-017', src: '/images/travel/empty-street.jpg', alt: 'Empty street', aspectRatio: 'portrait' },
  { id: 'travel-018', src: '/images/travel/rainy-window.jpg', alt: 'Rainy window', aspectRatio: 'square' },
  { id: 'travel-019', src: '/images/travel/night-city.jpg', alt: 'Night cityscape', aspectRatio: 'landscape' },
  { id: 'travel-020', src: '/images/travel/waiting-area.jpg', alt: 'Waiting area', aspectRatio: 'landscape' },
];

// Double the array for seamless infinite scroll
export const getInfiniteTravelImages = () => [...travelImages, ...travelImages];

