/**
 * Travel Page — Global context through pattern recognition
 * 
 * This is field research, not tourism.
 * Pattern recognition across ecosystems.
 * 
 * Features:
 * - Infinite gallery of travel images (no captions, no labels)
 * - Country grid on desktop, stacked on mobile
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import { StackedInfiniteGallery } from '../components/InfiniteGallery';
import { travelImages } from '../data/travelGallery';
import { 
  countries, 
  getCountriesByContinent, 
  getTotalCountries, 
  getTotalVisits,
  continentLabels,
  getCountriesLived
} from '../data/travel';
import styles from '../styles/Travel.module.css';

export default function Travel() {
  const totalCountries = getTotalCountries();
  const totalVisits = getTotalVisits();
  const countriesLived = getCountriesLived();
  
  const continents = ['asia', 'europe', 'north-america', 'south-america', 'oceania'] as const;

  return (
    <Layout
      title="Travel"
      description="Pattern recognition across ecosystems. Understanding what makes cities compound."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.header}>
        <span className={styles.label}>Travel</span>
        <h1 className={styles.title}>Pattern Recognition</h1>
        <p className={styles.subtitle}>
          Understanding what makes ecosystems compound — and what makes them stall.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Infinite Gallery — Global Context
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="wide" spacing="medium" className={styles.gallerySection}>
        <StackedInfiniteGallery images={travelImages} className={styles.travelGallery} />
        
        <div className={styles.galleryContext}>
          <p>
            Travel isn't about novelty. It's about pattern recognition — understanding 
            what makes ecosystems compound, and what makes them stall. Every city 
            teaches the same lessons differently. The goal is to import frameworks, 
            not aesthetics.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Stats
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.statsSection}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalCountries}</span>
            <span className={styles.statLabel}>Countries</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalVisits}</span>
            <span className={styles.statLabel}>Total visits</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{countriesLived.length}</span>
            <span className={styles.statLabel}>Lived in</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Countries by Continent
          ═══════════════════════════════════════════════════════════════════════ */}
      {continents.map((continent, index) => {
        const continentCountries = getCountriesByContinent(continent);
        if (continentCountries.length === 0) return null;
        
        return (
          <Section key={continent} variant="default" className={styles.section}>
            <SectionHeader 
              number={String(index + 1).padStart(2, '0')}
              title={continentLabels[continent]}
              subtitle={`${continentCountries.length} ${continentCountries.length === 1 ? 'country' : 'countries'}`}
            />
            
            <div className={styles.countryGrid}>
              {continentCountries.map((country) => (
                <div 
                  key={country.id} 
                  className={`${styles.countryCard} ${country.significance === 'lived' ? styles.lived : ''}`}
                >
                  <div className={styles.countryHeader}>
                    <span className={styles.countryFlag}>{getFlagEmoji(country.code)}</span>
                    <div>
                      <h3 className={styles.countryName}>{country.name}</h3>
                      <span className={styles.countryMeta}>
                        {country.visits} {country.visits === 1 ? 'visit' : 'visits'}
                        {country.lastVisit && ` · Last: ${country.lastVisit}`}
                      </span>
                    </div>
                  </div>
                  
                  {country.significance && (
                    <span className={`${styles.countryBadge} ${styles[country.significance]}`}>
                      {country.significance}
                    </span>
                  )}
                  
                  {country.note && (
                    <p className={styles.countryNote}>{country.note}</p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        );
      })}

      {/* ═══════════════════════════════════════════════════════════════════════
          Philosophy — Why this matters
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.philosophy}>
        <div className={styles.philosophyContent}>
          <h3 className={styles.philosophyTitle}>Why Calgary + Toronto</h3>
          <p className={styles.philosophyText}>
            After years of moving through ecosystems — from Sydney to Tokyo to San Francisco — 
            Calgary and Toronto became the places to build. Not because they're the most obvious 
            choices, but because the patterns are clear: ecosystems compound faster when someone 
            decides to organize the room and measure what works.
          </p>
          <p className={styles.philosophyText}>
            The lessons from every city on this page inform what's being built at Diaminate 
            and through the Cursor meetups. The work isn't about importing Silicon Valley. 
            It's about applying universal principles to specific contexts—and proving ROI 
            for sponsors along the way.
          </p>
        </div>
      </Section>
    </Layout>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Helper: Convert country code to flag emoji
   ───────────────────────────────────────────────────────────────────────────── */
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
