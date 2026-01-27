/**
 * Community Page — Fisherman's Village
 * 
 * Sections:
 * - What I'm looking for
 * - What I offer
 * - Communities I participate in
 */

import React from 'react';
import Layout from '../components/Layout';
import Section, { SectionHeader } from '../components/Section';
import styles from '../styles/Community.module.css';

export default function Community() {
  return (
    <Layout
      title="Community"
      description="Cursor Meetups in Calgary and Toronto. Builder-heavy rooms where we test ideas and measure sponsor outcomes."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Community</span>
        <h1 className={styles.title}>Cursor Meetups: Calgary + Toronto</h1>
        <p className={styles.subtitle}>
          I organize Cursor community events to bring builders together and create 
          real collisions. These events also serve as high-signal testbeds for 
          measuring sponsor outcomes.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          The Meetups
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="01"
          title="The Meetups"
          subtitle="Builder-heavy rooms where we test ideas in the real world."
        />
        
        <div className={styles.lookingGrid}>
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Cursor Calgary</h3>
            <p className={styles.lookingText}>
              Monthly meetups for developers, founders, and builders using 
              AI-powered development tools. Demos, discussions, and real 
              conversations about shipping with AI.
            </p>
          </div>
          
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Cursor Toronto</h3>
            <p className={styles.lookingText}>
              Same format, larger ecosystem. Bringing together Toronto's 
              AI and developer community for high-signal conversations 
              and genuine collisions.
            </p>
          </div>
          
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Sponsor Testbed</h3>
            <p className={styles.lookingText}>
              These meetups double as real-world testing grounds for Diaminate. 
              We measure what works—who engaged, what converted, what's worth 
              funding. Sponsors get real data.
            </p>
          </div>
          
          <div className={styles.lookingCard}>
            <h3 className={styles.lookingTitle}>Builder Network</h3>
            <p className={styles.lookingText}>
              Not a passive community. Active builders shipping real products. 
              If you're building with AI tools and want accountability, 
              this is your room.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          For Sponsors
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="02"
          title="For Sponsors"
          subtitle="What you get when you sponsor a meetup."
        />
        
        <div className={styles.offerList}>
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>High-Signal Audience</h4>
              <p className={styles.offerText}>
                Builder-heavy rooms. Developers, founders, and product people 
                actively using AI tools to ship. Not passive attendees—active builders.
              </p>
            </div>
          </div>
          
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>Measured Outcomes</h4>
              <p className={styles.offerText}>
                We track sponsor ROI using Diaminate. Meetings captured, outcomes 
                logged, follow-ups measured. You'll know exactly what happened.
              </p>
            </div>
          </div>
          
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>Real Conversations</h4>
              <p className={styles.offerText}>
                Not logo placement. Actual time with attendees. Demo slots, 
                speaking opportunities, and structured networking that leads 
                to real conversations.
              </p>
            </div>
          </div>
          
          <div className={styles.offerItem}>
            <div className={styles.offerIcon}>→</div>
            <div className={styles.offerContent}>
              <h4 className={styles.offerTitle}>Post-Event Report</h4>
              <p className={styles.offerText}>
                After each event, you get a report: who engaged, what converted, 
                what follow-ups are pending. Real data, not vibes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Ecosystems
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="default" className={styles.section}>
        <SectionHeader 
          number="03"
          title="Ecosystems"
          subtitle="Where you might find me."
        />
        
        <div className={styles.communityGrid}>
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>Cursor Community</h4>
            <p className={styles.communityRole}>Organizer</p>
            <p className={styles.communityDescription}>
              Running meetups in Calgary and Toronto. Bringing builders together 
              to share learnings and ship faster with AI tools.
            </p>
          </div>
          
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>Event Organizers</h4>
            <p className={styles.communityRole}>Active participant</p>
            <p className={styles.communityDescription}>
              Connecting with other event organizers who care about 
              proving sponsor value. Sharing learnings on measurement.
            </p>
          </div>
          
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>Calgary Tech</h4>
            <p className={styles.communityRole}>Contributor</p>
            <p className={styles.communityDescription}>
              Building density in Calgary's startup ecosystem. 
              Helping organize the room so it compounds faster.
            </p>
          </div>
          
          <div className={styles.communityCard}>
            <h4 className={styles.communityName}>AI Builders</h4>
            <p className={styles.communityRole}>Builder</p>
            <p className={styles.communityDescription}>
              Shipping Diaminate and learning from others building 
              AI-native products. Practical implementation over theory.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Connect CTA
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.connect}>
        <div className={styles.connectContent}>
          <h3 className={styles.connectTitle}>Partner / Sponsor an Event</h3>
          <p className={styles.connectText}>
            Interested in sponsoring a Cursor meetup or partnering on an event? 
            Let's talk about what you're looking for and how we can measure it.
          </p>
          <a href="/contact" className="btn btn--primary">Get involved</a>
        </div>
      </Section>
    </Layout>
  );
}


