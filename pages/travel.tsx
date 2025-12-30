/**
 * Travel Page — Countries and meaningful places
 * 
 * Country grid on desktop
 * Stacked list on mobile
 * Data sourced from data/travel.ts
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
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
      description="Countries visited, places that shaped perspective."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.header}>
        <span className={styles.label}>Travel</span>
        <h1 className={styles.title}>Geography as Perspective</h1>
        <p className={styles.subtitle}>
          Every place teaches something. These are the ones that have shaped 
          how I think, work, and build.
        </p>
        
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
          Philosophy
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.philosophy}>
        <blockquote className={styles.quote}>
          "Travel is not about collecting places. It's about collecting perspectives 
          that change how you see everything else."
        </blockquote>
        <p className={styles.philosophyText}>
          I travel slowly and return to places that resonate. Each location on this 
          list taught me something about systems, culture, or myself. The map is a 
          record of curiosity, not conquest.
        </p>
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

