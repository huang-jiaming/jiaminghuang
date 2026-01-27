/**
 * Vision Page — Long-form vision essay
 * 
 * Features:
 * - Clear section headers
 * - Editorial reading width on desktop
 * - Calm, measured typography
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/Vision.module.css';

export default function Vision() {
  return (
    <Layout
      title="Vision"
      description="Building Event Intelligence at Diaminate. Proving sponsor ROI by tracking meetings, outcomes, and follow-ups."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Vision</span>
        <h1 className={styles.title}>Event Intelligence That Proves ROI</h1>
        <p className={styles.subtitle}>
          On building systems that track meetings, outcomes, and follow-ups — 
          so sponsors and organizers can measure what actually happened.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Essay Content
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" as="article" className={styles.article}>
        
        {/* Section 01: The Problem */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>01</span>
            The Sponsor ROI Problem
          </h2>
          
          <p className={styles.paragraph}>
            Events are one of the highest-leverage activities in business. 
            Conferences, meetups, trade shows — they create density, surface 
            opportunities, and compress timelines. Yet sponsors have no idea 
            what actually happened.
          </p>
          
          <p className={styles.paragraph}>
            The current state: sponsors write checks, get a logo on a banner, 
            hope for leads, and leave with a stack of business cards they'll 
            never follow up on. Organizers promise exposure but can't prove value. 
            Everyone operates on vibes.
          </p>
          
          <p className={styles.paragraph}>
            This is a measurement problem. Not a networking problem. Not a 
            format problem. A measurement problem — and it's solvable.
          </p>
        </div>

        {/* Section 02: The Full Loop */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>02</span>
            The Full Loop: Meetings → Outcomes → Follow-ups
          </h2>
          
          <p className={styles.paragraph}>
            Sponsor value at events happens in three stages. First, meetings — 
            the conversations that happen on the floor. Second, outcomes — what 
            those conversations produced (demos, intros, commitments). Third, 
            follow-ups — what actually closes after the event ends.
          </p>
          
          <p className={styles.paragraph}>
            Most sponsors only measure the first stage, if that. They count 
            badge scans and call it a day. But badge scans don't close deals. 
            The real signal is downstream — and nobody's tracking it.
          </p>
          
          <blockquote className={styles.quote}>
            "The sponsor who can prove ROI will out-bid the sponsor who's 
            guessing."
          </blockquote>
          
          <p className={styles.paragraph}>
            Diaminate tracks the full loop. We capture meetings as they happen, 
            log outcomes in real-time, and follow the thread through to close. 
            Sponsors get a clear picture of what worked. Organizers get proof 
            that their events deliver value.
          </p>
        </div>

        {/* Section 03: Event Intelligence */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>03</span>
            Event Intelligence as a Category
          </h2>
          
          <p className={styles.paragraph}>
            We call this Event Intelligence — the systematic capture and analysis 
            of what happens at events. Not sentiment. Not surveys. Actual meetings, 
            actual outcomes, actual follow-ups.
          </p>
          
          <p className={styles.paragraph}>
            This matters because events are becoming more expensive and more 
            competitive. Sponsors are demanding accountability. Organizers need 
            to differentiate. The era of "trust us, it was great" is ending.
          </p>
          
          <p className={styles.paragraph}>
            The teams that adopt Event Intelligence will win more sponsors, 
            retain them longer, and build events that compound in value over time. 
            The ones that don't will watch budgets shift to channels with better 
            measurement.
          </p>
        </div>

        {/* Section 04: What We're Building */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>04</span>
            What We're Building at Diaminate
          </h2>
          
          <p className={styles.paragraph}>
            At <strong>Diaminate</strong>, I'm building the infrastructure for 
            Event Intelligence. We help sponsors and organizers capture meetings, 
            track outcomes, and measure follow-ups — end-to-end.
          </p>
          
          <p className={styles.paragraph}>
            The product is currently in pilot with select partners. We're working 
            with event organizers and sponsors who understand that measurement 
            is the unlock — not bigger booths or flashier swag.
          </p>
          
          <p className={styles.paragraph}>
            I also run{' '}
            <a href="/community" className={styles.link}>Cursor meetups in Calgary and Toronto</a> — 
            builder-heavy rooms that serve as real-world testbeds for measuring 
            sponsor outcomes. What converts, what follows up, what's worth funding.
          </p>
        </div>

        {/* Section 05: Invitation */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>05</span>
            Work with Us
          </h2>
          
          <p className={styles.paragraph}>
            If you're an event organizer tired of guessing whether sponsors got 
            value — or a sponsor tired of writing checks without proof — let's talk.
          </p>
          
          <p className={styles.paragraph}>
            We're looking for pilot partners: events where we can deploy Diaminate, 
            prove the model, and build case studies together. Early partners get 
            hands-on support and help shape the product.
          </p>
          
          <div className={styles.cta}>
            <a href="/contact" className="btn">Work with us</a>
            <a href="/community" className="btn btn--ghost">Sponsor a Meetup</a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}


