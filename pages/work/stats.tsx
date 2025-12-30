/**
 * Stats Page — Minimal infographic-style stats
 * 
 * Data sourced from data/stats.ts
 * Calm, factual presentation
 */

import React from 'react';
import Layout from '../../components/Layout';
import Section, { SectionHeader } from '../../components/Section';
import { StatCard } from '../../components/Card';
import { stats, getStatsByCategory } from '../../data/stats';
import styles from '../../styles/Work.module.css';

export default function Stats() {
  const buildingStats = getStatsByCategory('building');
  const learningStats = getStatsByCategory('learning');
  const travelingStats = getStatsByCategory('traveling');
  const communityStats = getStatsByCategory('community');

  return (
    <Layout
      title="Stats"
      description="Numbers that tell a story — building, learning, traveling, community."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.header}>
        <span className={styles.label}>Work</span>
        <h1 className={styles.title}>Stats</h1>
        <p className={styles.subtitle}>
          Numbers that tell a story. Not metrics to optimize — 
          markers of a life in progress.
        </p>
        
        <nav className={styles.subnav}>
          <a href="/work/built" className={styles.subnavLink}>Built</a>
          <a href="/work/stats" className={styles.subnavLink + ' ' + styles.active}>Stats</a>
          <a href="/work/chronology" className={styles.subnavLink}>Chronology</a>
        </nav>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Building
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="Building"
        />
        
        <div className={styles.statsGrid}>
          {buildingStats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              context={stat.context}
            />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Learning
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="Learning"
        />
        
        <div className={styles.statsGrid}>
          {learningStats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              context={stat.context}
            />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Traveling
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="Traveling"
        />
        
        <div className={styles.statsGrid}>
          {travelingStats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              context={stat.context}
            />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Community
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="04"
          title="Community"
        />
        
        <div className={styles.statsGrid}>
          {communityStats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={stat.label}
              context={stat.context}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
}


