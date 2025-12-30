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
    id: 'post-verbal-world',
    title: 'The Post-Verbal World',
    description: 'On the shift from communication to coordination, and why the future belongs to those who can express intent clearly.',
    date: 'December 2024',
    readTime: '12 min',
    tags: ['future', 'intent', 'ai'],
    featured: true,
  },
  {
    id: 'clarity-as-leverage',
    title: 'Clarity as Leverage',
    description: 'Why the ability to articulate what you want is becoming the most valuable skill in the age of AI.',
    date: 'November 2024',
    readTime: '8 min',
    tags: ['clarity', 'leverage'],
    featured: true,
  },
  {
    id: 'understanding-before-execution',
    title: 'Understanding Before Execution',
    description: 'The case for spending more time on intent and less time on implementation.',
    date: 'October 2024',
    readTime: '10 min',
    tags: ['product', 'process'],
  },
  {
    id: 'async-first-clarity',
    title: 'Async-First Requires Clarity-First',
    description: 'How remote teams can reduce meeting overhead by improving written communication.',
    date: 'September 2024',
    readTime: '7 min',
    tags: ['remote-work', 'async'],
  },
  {
    id: 'intent-as-primitive',
    title: 'Intent as the Atomic Unit',
    description: 'Exploring intent as the fundamental building block of human-AI collaboration.',
    date: 'August 2024',
    readTime: '15 min',
    tags: ['intent', 'ai', 'research'],
  },
];

const notes = [
  {
    id: 'note-frameworks',
    title: 'On Frameworks',
    excerpt: 'A framework is a compression of experience. Good ones disappear into practice.',
    date: 'Dec 2024',
  },
  {
    id: 'note-simplicity',
    title: 'Simplicity is not reduction',
    excerpt: 'True simplicity preserves essence while removing noise. Reduction loses both.',
    date: 'Nov 2024',
  },
  {
    id: 'note-clarity',
    title: 'Clarity compounds',
    excerpt: 'One clear thought enables many clear decisions. Invest in understanding.',
    date: 'Oct 2024',
  },
];

export default function Writing() {
  return (
    <Layout
      title="Writing"
      description="Essays on clarity, intent, and the post-verbal world."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Writing</span>
        <h1 className={styles.title}>Thinking Through Writing</h1>
        <p className={styles.subtitle}>
          Essays, notes, and fragments on clarity, intent, and building 
          for the post-verbal world.
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


