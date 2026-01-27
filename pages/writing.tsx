/**
 * Writing Page — Writing index
 * 
 * Blog / Substack mirror placeholders
 * Markdown-friendly structure
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/Writing.module.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Writing Data — Easy to update
   ───────────────────────────────────────────────────────────────────────────── */
const essays = [
  {
    id: 'sponsor-roi-problem',
    title: 'The Sponsor ROI Problem',
    description: 'Why events are broken for sponsors, and how Event Intelligence can fix it. The thesis behind Diaminate.',
    date: 'January 2026',
    readTime: '12 min',
    tags: ['events', 'sponsor-roi', 'diaminate'],
    featured: true,
  },
  {
    id: 'measuring-what-matters',
    title: 'Measuring What Matters at Events',
    description: 'Beyond badge scans: how to track meetings, outcomes, and follow-ups to prove real event ROI.',
    date: 'December 2025',
    readTime: '8 min',
    tags: ['measurement', 'events'],
    featured: true,
  },
  {
    id: 'organizing-the-room',
    title: 'Organizing the Room',
    description: 'Why small ecosystems compound faster when someone decides to convene and measure.',
    date: 'November 2025',
    readTime: '10 min',
    tags: ['community', 'events'],
  },
  {
    id: 'cursor-meetups-learnings',
    title: 'What I Learned Running Cursor Meetups',
    description: 'Lessons from organizing builder-heavy events in Calgary and Toronto.',
    date: 'October 2025',
    readTime: '7 min',
    tags: ['cursor', 'community'],
  },
  {
    id: 'sponsor-intelligence',
    title: 'Sponsor Intelligence: A New Category',
    description: 'The case for systematic capture and analysis of what happens at events.',
    date: 'September 2025',
    readTime: '15 min',
    tags: ['sponsor-roi', 'events', 'measurement'],
  },
];

const notes = [
  {
    id: 'note-vibes',
    title: 'Vibes vs. data',
    excerpt: 'Events run on vibes. Sponsors want data. The gap is an opportunity.',
    date: 'Jan 2026',
  },
  {
    id: 'note-follow-ups',
    title: 'Follow-ups are where value lives',
    excerpt: 'Meetings are just the start. What closes after the event is the real signal.',
    date: 'Dec 2025',
  },
  {
    id: 'note-density',
    title: 'Density creates collisions',
    excerpt: 'The value of an event is proportional to the density of high-signal people in the room.',
    date: 'Nov 2025',
  },
];

export default function Writing() {
  return (
    <Layout
      title="Writing"
      description="Essays on events, sponsor ROI, and building in public."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Writing</span>
        <h1 className={styles.title}>Thinking Through Writing</h1>
        <p className={styles.subtitle}>
          Essays, notes, and fragments on events, sponsor ROI, and 
          building communities that compound.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Featured Essays
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="Featured"
          subtitle="Longer explorations of core ideas."
        />
        
        <div className={styles.featuredGrid}>
          {essays.filter(e => e.featured).map((essay) => (
            <article key={essay.id} className={styles.featuredCard}>
              <div className={styles.cardMeta}>
                <span className={styles.cardDate}>{essay.date}</span>
                <span className={styles.cardDot}>·</span>
                <span className={styles.cardTime}>{essay.readTime}</span>
              </div>
              <h3 className={styles.cardTitle}>{essay.title}</h3>
              <p className={styles.cardDescription}>{essay.description}</p>
              <div className={styles.cardTags}>
                {essay.tags.map((tag) => (
                  <span key={tag} className={styles.cardTag}>#{tag}</span>
                ))}
              </div>
              <span className={styles.cardLink}>Read essay →</span>
            </article>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          All Essays
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="Essays"
          subtitle="All published pieces in reverse chronological order."
        />
        
        <div className={styles.essayList}>
          {essays.map((essay) => (
            <article key={essay.id} className={styles.essayItem}>
              <div className={styles.essayMeta}>
                <span className={styles.essayDate}>{essay.date}</span>
                <span className={styles.essayTime}>{essay.readTime}</span>
              </div>
              <div className={styles.essayContent}>
                <h3 className={styles.essayTitle}>{essay.title}</h3>
                <p className={styles.essayDescription}>{essay.description}</p>
              </div>
              <span className={styles.essayArrow}>→</span>
            </article>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Notes
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="Notes"
          subtitle="Shorter fragments and observations."
        />
        
        <div className={styles.notesGrid}>
          {notes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <span className={styles.noteDate}>{note.date}</span>
              <h4 className={styles.noteTitle}>{note.title}</h4>
              <p className={styles.noteExcerpt}>{note.excerpt}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Subscribe CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.subscribe}>
        <div className={styles.subscribeContent}>
          <h3 className={styles.subscribeTitle}>Stay updated</h3>
          <p className={styles.subscribeText}>
            Occasional essays on clarity, intent, and building meaningful things. 
            No spam, unsubscribe anytime.
          </p>
          <div className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="your@email.com"
              className={styles.subscribeInput}
            />
            <button className="btn btn--primary">Subscribe</button>
          </div>
        </div>
      </Section>
    </Layout>
  );
}


