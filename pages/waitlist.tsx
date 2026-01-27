/**
 * Waitlist Page — Product idea cards
 * 
 * AppLauncher v2 is the primary featured waitlist
 * Other experimental ideas appear as secondary
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import { WaitlistCard } from '../components/Card';
import { waitlists, getFeaturedWaitlist, getComingSoonWaitlists } from '../data/waitlists';
import styles from '../styles/Waitlist.module.css';

export default function Waitlist() {
  const featuredWaitlist = getFeaturedWaitlist();
  const comingSoonWaitlists = getComingSoonWaitlists();

  return (
    <Layout
      title="Waitlist"
      description="Pilot Diaminate, sponsor a Cursor meetup, or join the event organizer network."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Get Involved</span>
        <h1 className={styles.title}>Work with Us</h1>
        <p className={styles.subtitle}>
          Pilot Diaminate at your events. Sponsor a Cursor meetup. 
          Join the network of organizers proving sponsor ROI.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Featured — Diaminate
          ═══════════════════════════════════════════════════════════════════════ */}
      {featuredWaitlist && (
        <Section variant="default" className={styles.section}>
          <SectionHeader 
            number="01"
            title="Featured"
            subtitle="The flagship product currently in pilot."
          />
          
          <div className={styles.featuredWrapper}>
            <WaitlistCard
              name={featuredWaitlist.name}
              tagline={featuredWaitlist.tagline}
              description={featuredWaitlist.description}
              status={featuredWaitlist.status}
              featured={featuredWaitlist.featured}
              formUrl={featuredWaitlist.formUrl}
              expectedLaunch={featuredWaitlist.expectedLaunch}
            />
            
            <div className={styles.featuredContext}>
              <h3 className={styles.contextTitle}>Why Diaminate?</h3>
              <p className={styles.contextText}>
                Sponsors write checks and hope for leads. Organizers promise exposure 
                but can't prove value. Everyone operates on vibes.
              </p>
              <p className={styles.contextText}>
                Diaminate tracks the full loop—meetings → outcomes → follow-ups—so 
                sponsors and organizers can measure what actually happened. Real data, 
                not guesswork.
              </p>
              <a href="/applauncher" className={styles.contextLink}>
                Learn more about Diaminate →
              </a>
            </div>
          </div>
        </Section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          Coming Soon
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="Coming Soon"
          subtitle="Future experiments and products in development."
        />
        
        <div className={styles.waitlistGrid}>
          {comingSoonWaitlists.map((waitlist) => (
            <WaitlistCard
              key={waitlist.id}
              name={waitlist.name}
              tagline={waitlist.tagline}
              description={waitlist.description}
              status={waitlist.status}
              formUrl={waitlist.formUrl}
              expectedLaunch={waitlist.expectedLaunch}
            />
          ))}
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Philosophy
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.philosophy}>
        <div className={styles.philosophyContent}>
          <h3 className={styles.philosophyTitle}>Why Pilots?</h3>
          <p className={styles.philosophyText}>
            We build with partners, not for them. Pilots let us deploy Diaminate 
            at real events, measure real outcomes, and build real case studies 
            together. Early partners get hands-on support and help shape the product.
          </p>
          <p className={styles.philosophyText}>
            If you run events or sponsor them, and you're tired of guessing what 
            worked, let's talk. We'll prove ROI together.
          </p>
        </div>
      </Section>
    </Layout>
  );
}


