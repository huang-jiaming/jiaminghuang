/**
 * Chronology Page — Narrative resume / life timeline
 * 
 * AppLauncher v1 → historical
 * AppLauncher v2 → current arc
 */

import React from 'react';
import Layout from '../../components/Layout';
import Section, { SectionHeader } from '../../components/Section';
import { timeline, getCurrentProjects, getTimelineSorted } from '../../data/chronology';
import styles from '../../styles/Work.module.css';

export default function Chronology() {
  const currentProjects = getCurrentProjects();
  const sortedTimeline = getTimelineSorted();

  return (
    <Layout
      title="Chronology"
      description="A narrative timeline — where I've been, what I've built, what I've learned."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.header}>
        <span className={styles.label}>Work</span>
        <h1 className={styles.title}>Chronology</h1>
        <p className={styles.subtitle}>
          A narrative timeline. Not a resume — a map of the journey.
        </p>
        
        <nav className={styles.subnav}>
          <a href="/work/built" className={styles.subnavLink}>Built</a>
          <a href="/work/stats" className={styles.subnavLink}>Stats</a>
          <a href="/work/chronology" className={styles.subnavLink + ' ' + styles.active}>Chronology</a>
        </nav>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Current Arc
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="NOW"
          title="Current Arc"
          subtitle="What I'm building and exploring right now."
        />
        
        <div className={styles.currentArc}>
          {currentProjects.map((entry) => (
            <div key={entry.id} className={styles.currentEntry}>
              <div className={styles.currentHeader}>
                <h3 className={styles.currentTitle}>{entry.title}</h3>
                <span className={styles.currentBadge}>Active</span>
              </div>
              <span className={styles.currentSubtitle}>{entry.subtitle}</span>
              <p className={styles.currentDescription}>{entry.description}</p>
              {entry.tags && (
                <div className={styles.currentTags}>
                  {entry.tags.map((tag) => (
                    <span key={tag} className={styles.currentTag}>#{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Timeline
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          title="Timeline"
          subtitle="Major chapters in reverse chronological order."
        />
        
        <div className={styles.timeline}>
          {sortedTimeline.filter(entry => !entry.current).map((entry, index) => (
            <div 
              key={entry.id} 
              className={styles.timelineEntry}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.timelineMarker}>
                <span className={styles.timelineYear}>
                  {entry.endYear ? `${entry.year}–${entry.endYear}` : entry.year}
                </span>
                <div className={styles.timelineDot} />
                <div className={styles.timelineLine} />
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.timelineTitle}>{entry.title}</h3>
                  <span className={`${styles.timelineCategory} ${styles[entry.category]}`}>
                    {entry.category}
                  </span>
                </div>
                {entry.subtitle && (
                  <span className={styles.timelineSubtitle}>{entry.subtitle}</span>
                )}
                <p className={styles.timelineDescription}>{entry.description}</p>
                {entry.tags && (
                  <div className={styles.timelineTags}>
                    {entry.tags.map((tag) => (
                      <span key={tag} className={styles.timelineTag}>#{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}


