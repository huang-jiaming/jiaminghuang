/**
 * Now Page — Present-tense clarity page
 * 
 * Sections:
 * - Current focus (this quarter)
 * - Explicitly not doing
 * - Locations / ecosystems
 * - Open asks
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/Now.module.css';

export default function Now() {
  return (
    <Layout
      title="Now"
      description="Co-founder & CPO at Diaminate. Organizer of Cursor meetups in Calgary and Toronto."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Now</span>
        <h1 className={styles.title}>Present Tense</h1>
        <p className={styles.subtitle}>
          What I'm focused on, where I am, and what I'm looking for.
          <br />
          <span className={styles.updated}>Last updated: January 2026</span>
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Current Focus
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="Current Focus"
          subtitle="What I'm actively building and thinking about this quarter."
        />
        
        <div className={styles.grid}>
          <div className={styles.focusCard}>
            <h3 className={styles.focusTitle}>Diaminate</h3>
            <p className={styles.focusDescription}>
              Co-founder & CPO. Building Event Intelligence that proves sponsor ROI 
              at events. We track the full loop—meetings → outcomes → follow-ups—so 
              sponsors and organizers can measure what actually happened. Currently 
              in pilot with select partners.
            </p>
            <a href="/vision" className={styles.focusLink}>Learn more →</a>
          </div>

          <div className={styles.focusCard}>
            <h3 className={styles.focusTitle}>Cursor Meetups: Calgary + Toronto</h3>
            <p className={styles.focusDescription}>
              Organizing Cursor community events to bring builders together and create 
              real collisions. These events also serve as high-signal testbeds for 
              measuring sponsor outcomes—what converts, what follows up, what's worth funding.
            </p>
            <a href="/community" className={styles.focusLink}>Get involved →</a>
          </div>

          <div className={styles.focusCard}>
            <h3 className={styles.focusTitle}>Sponsor Intelligence</h3>
            <p className={styles.focusDescription}>
              Developing frameworks for measuring event ROI: what worked, who engaged, 
              what converted. This informs both the Diaminate product and how I run 
              my own meetups.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Not Doing
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="Not Doing"
          subtitle="Clarity about what I'm saying no to."
        />
        
        <ul className={styles.notDoingList}>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>Advisory or consulting</span>
            <span className={styles.notDoingReason}>
              All energy goes to Diaminate and the meetups. Not taking side projects.
            </span>
          </li>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>Freelance client work</span>
            <span className={styles.notDoingReason}>
              Not taking on contract projects. Focused on building Diaminate.
            </span>
          </li>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>Events outside Calgary/Toronto</span>
            <span className={styles.notDoingReason}>
              Focused on these two cities for now. May expand later.
            </span>
          </li>
          <li className={styles.notDoingItem}>
            <span className={styles.notDoingLabel}>Speaking for exposure</span>
            <span className={styles.notDoingReason}>
              Only speaking where it directly supports Diaminate or the meetups.
            </span>
          </li>
        </ul>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Location / Ecosystems
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="Location & Ecosystems"
          subtitle="Where I am and the communities I'm part of."
        />
        
        <div className={styles.locationGrid}>
          <div className={styles.locationCard}>
            <h4 className={styles.locationTitle}>Based</h4>
            <p className={styles.locationValue}>Calgary + Toronto</p>
            <p className={styles.locationNote}>
              Running meetups in both cities. Splitting time based on 
              event schedules and Diaminate pilot work.
            </p>
          </div>

          <div className={styles.locationCard}>
            <h4 className={styles.locationTitle}>Ecosystems</h4>
            <ul className={styles.ecosystemList}>
              <li>Cursor community (Calgary + Toronto)</li>
              <li>Event organizers and sponsors</li>
              <li>AI/LLM tool builders</li>
              <li>Startup founders in Canada</li>
            </ul>
          </div>

          <div className={styles.locationCard}>
            <h4 className={styles.locationTitle}>Timezone</h4>
            <p className={styles.locationValue}>Mountain / Eastern</p>
            <p className={styles.locationNote}>
              Available for sync calls during North American business hours.
              Prefer async for non-urgent communication.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Open Asks
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="04"
          title="Open Asks"
          subtitle="Where I could use help or connection."
        />
        
        <div className={styles.askGrid}>
          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Pilot Partners</h4>
            <p className={styles.askDescription}>
              Looking for event organizers and sponsors who want to pilot 
              Diaminate. We'll deploy, measure, and build case studies together. 
              Early partners get hands-on support.
            </p>
          </div>

          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Meetup Sponsors</h4>
            <p className={styles.askDescription}>
              Seeking sponsors for Cursor meetups in Calgary and Toronto. 
              Builder-heavy rooms, real conversations, measurable outcomes. 
              We track what works.
            </p>
          </div>

          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Event Organizers</h4>
            <p className={styles.askDescription}>
              Interested in connecting with other event organizers who care 
              about proving sponsor value. Let's share learnings.
            </p>
          </div>

          <div className={styles.askCard}>
            <h4 className={styles.askTitle}>Builders in Calgary/Toronto</h4>
            <p className={styles.askDescription}>
              If you're building with AI tools and want to be part of a 
              high-signal community, come to a meetup. We ship together.
            </p>
          </div>
        </div>

        <div className={styles.askCta}>
          <a href="/contact" className="btn">Work with us</a>
        </div>
      </Section>
    </Layout>
  );
}


