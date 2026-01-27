/**
 * Diaminate Page — Dedicated Product Page for Diaminate
 * 
 * This page represents Diaminate — Event Intelligence for sponsor ROI.
 * 
 * Focus:
 * - Event Intelligence
 * - Sponsor ROI
 * - Meetings → Outcomes → Follow-ups
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/AppLauncher.module.css';

export default function Diaminate() {
  return (
    <Layout
      title="Diaminate"
      description="Event Intelligence that proves sponsor ROI. Track meetings, outcomes, and follow-ups at events."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Hero
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="hero" className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Diaminate</span>
          <h1 className={styles.heroTitle}>
            Event Intelligence<br />
            <span className={styles.heroAccent}>that proves ROI.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We track the full loop—meetings → outcomes → follow-ups—so sponsors 
            and organizers can measure what actually happened. No more guessing.
          </p>
          <div className={styles.heroCta}>
            <a 
              href="/contact" 
              className="btn btn--primary"
            >
              Start a Pilot
            </a>
            <span className={styles.heroStatus}>Currently in pilot with select partners</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Product Manifesto
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.manifesto}>
        <div className={styles.manifestoContent}>
          <h2 className={styles.manifestoTitle}>The Problem</h2>
          <div className={styles.manifestoBody}>
            <p className={styles.manifestoLine}>
              Sponsors write checks, get a logo on a banner, and hope for leads.
            </p>
            <p className={styles.manifestoLine}>
              Organizers promise exposure but can't prove value.
            </p>
            <p className={styles.manifestoLine}>
              Everyone operates on vibes. Nobody measures what actually happened.
            </p>
            <p className={styles.manifestoLine}>
              Diaminate exists to change that.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          The Full Loop
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="The Full Loop"
          subtitle="Sponsor value happens in three stages."
        />
        
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>Meetings</h3>
            <p className={styles.problemText}>
              The conversations that happen on the floor. We capture who met 
              whom, what was discussed, and what interest was expressed.
            </p>
          </div>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>Outcomes</h3>
            <p className={styles.problemText}>
              What those conversations produced. Demos scheduled, intros made, 
              commitments given. We log it in real-time.
            </p>
          </div>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>Follow-ups</h3>
            <p className={styles.problemText}>
              What actually closes after the event ends. We track the thread 
              through to conversion so you know the true ROI.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          How It Works
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="How It Works"
          subtitle="Event intelligence, end-to-end."
        />
        
        <div className={styles.howList}>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>01</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Deploy at Event</h4>
              <p className={styles.howText}>
                We integrate with your event. Attendees and sponsors capture 
                meetings as they happen—quick, frictionless, real-time.
              </p>
            </div>
          </div>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>02</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Log Outcomes</h4>
              <p className={styles.howText}>
                After each conversation, participants log what happened. 
                Demo scheduled? Intro requested? Interest expressed? 
                It's captured immediately.
              </p>
            </div>
          </div>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>03</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Track Follow-ups</h4>
              <p className={styles.howText}>
                We follow the thread after the event. What closed? 
                What converted? What's still pending? The full picture emerges.
              </p>
            </div>
          </div>
          <div className={styles.howItem}>
            <span className={styles.howNumber}>04</span>
            <div className={styles.howContent}>
              <h4 className={styles.howTitle}>Report ROI</h4>
              <p className={styles.howText}>
                Sponsors get a clear report: meetings had, outcomes achieved, 
                conversions closed. Organizers get proof their events deliver value.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Who It's For
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="Who It's For"
          subtitle="The people who need real measurement."
        />
        
        <div className={styles.audienceGrid}>
          <div className={styles.audienceCard}>
            <h4 className={styles.audienceTitle}>Event Organizers</h4>
            <p className={styles.audienceText}>
              You're tired of sponsors asking "what did we actually get?" and 
              having no answer. You want proof that your events deliver value.
            </p>
          </div>
          <div className={styles.audienceCard}>
            <h4 className={styles.audienceTitle}>Sponsors</h4>
            <p className={styles.audienceText}>
              You're tired of writing checks without knowing what happened. 
              You want real data on meetings, outcomes, and conversions.
            </p>
          </div>
          <div className={styles.audienceCard}>
            <h4 className={styles.audienceTitle}>Conference Teams</h4>
            <p className={styles.audienceText}>
              You run recurring events and need to justify sponsorship pricing. 
              Real ROI data helps you charge what you're worth.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Start a Pilot</h2>
          <p className={styles.ctaText}>
            We're working with select event organizers and sponsors to deploy 
            Diaminate, prove the model, and build case studies together. 
            Early partners get hands-on support.
          </p>
          <a 
            href="/contact" 
            className="btn btn--primary"
          >
            Work with us
          </a>
          <div className={styles.ctaMeta}>
            <span className={styles.ctaMetaItem}>Currently in pilot</span>
            <span className={styles.ctaMetaDivider}>·</span>
            <span className={styles.ctaMetaItem}>Select partners only</span>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Footer Note
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.footerNote}>
        <p className={styles.footerNoteText}>
          Diaminate is built by <a href="/">Jia Ming Huang</a> (Co-founder & CPO). 
          Read about the <a href="/vision">vision</a> behind this work, 
          or see the <a href="/community">Cursor meetups</a> where we test it.
        </p>
      </Section>
    </Layout>
  );
}


