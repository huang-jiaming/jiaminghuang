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
      description="Join early access for upcoming products and experiments."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Waitlist</span>
        <h1 className={styles.title}>Early Access</h1>
        <p className={styles.subtitle}>
          Join the early circle for upcoming products. Get first access, 
          shape development, and be part of the founding community.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Featured — AppLauncher v2
          ═══════════════════════════════════════════════════════════════════════ */}
      {featuredWaitlist && (
        <Section variant="default" className={styles.section}>
          <SectionHeader 
            number="01"
            title="Featured"
            subtitle="The flagship product currently in early access."
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
              <h3 className={styles.contextTitle}>Why AppLauncher v2?</h3>
              <p className={styles.contextText}>
                The first version of AppLauncher was a code generation tool. It worked, 
                but we learned that the hard part isn't generating code — it's knowing 
                what to generate.
              </p>
              <p className={styles.contextText}>
                v2 is a fundamental shift: from execution to understanding. It helps 
                you clarify your intent before any code is written. Think of it as a 
                thinking partner that ensures you're building the right thing.
              </p>
              <a href="/applauncher" className={styles.contextLink}>
                Learn more about AppLauncher v2 →
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
          <h3 className={styles.philosophyTitle}>Why Waitlists?</h3>
          <p className={styles.philosophyText}>
            I build products slowly and deliberately. Waitlists let me work with 
            a small group of early users who care deeply about the problem. This 
            isn't about hype — it's about building with feedback from day one.
          </p>
          <p className={styles.philosophyText}>
            If you join a waitlist, expect direct communication, early access, 
            and the opportunity to shape what gets built. Your input matters.
          </p>
        </div>
      </Section>
    </Layout>
  );
}

