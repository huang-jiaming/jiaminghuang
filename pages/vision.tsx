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
      description="A long-form exploration of intent, clarity, and building for the post-verbal world."
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          Header
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" className={styles.header}>
        <span className={styles.label}>Vision</span>
        <h1 className={styles.title}>Building for the Post-Verbal World</h1>
        <p className={styles.subtitle}>
          On intent, clarity, and the systems that will shape how we collaborate, 
          create, and understand each other.
        </p>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════════════
          Essay Content
          ═══════════════════════════════════════════════════════════════════════ */}
      <Section variant="narrow" as="article" className={styles.article}>
        
        {/* Section 01: The Shift */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>01</span>
            The Shift We're Living Through
          </h2>
          
          <p className={styles.paragraph}>
            We are entering an era where the bottleneck is no longer execution — it's 
            understanding. The tools to build anything already exist. What's missing 
            is the clarity to know what to build.
          </p>
          
          <p className={styles.paragraph}>
            For decades, we've invested in making execution faster: better compilers, 
            faster deployment, more powerful hardware. We've succeeded. A single person 
            can now ship what once required a team. Yet most projects still fail — not 
            because they couldn't be built, but because they solved the wrong problem.
          </p>
          
          <p className={styles.paragraph}>
            The constraint has shifted from "can we build it?" to "do we understand 
            what we actually want?" This is the post-verbal world: a place where 
            articulating intent clearly is the most valuable skill.
          </p>
        </div>

        {/* Section 02: Intent as Primitive */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>02</span>
            Intent as the Atomic Unit
          </h2>
          
          <p className={styles.paragraph}>
            Before code, before design, before any artifact — there is intent. A 
            desire, a direction, a sense of what should exist. This is the true 
            starting point of creation.
          </p>
          
          <p className={styles.paragraph}>
            Most tools skip past this moment. They assume you already know what you 
            want and rush to help you get it. But the gap between vague desire and 
            clear intent is where most projects fail. It's also where the most 
            leverage exists.
          </p>
          
          <blockquote className={styles.quote}>
            "The person who can articulate what they truly want has already done 
            the hardest work."
          </blockquote>
          
          <p className={styles.paragraph}>
            I believe we need tools that help with this moment — not execution tools, 
            but understanding tools. Systems that help you discover and articulate 
            your actual intent before you start building.
          </p>
        </div>

        {/* Section 03: Clarity as Leverage */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>03</span>
            Clarity as the Ultimate Leverage
          </h2>
          
          <p className={styles.paragraph}>
            In a world where AI can execute on any well-specified intent, the 
            ability to specify clearly becomes the differentiator. Clarity is 
            leverage — it multiplies everything that follows.
          </p>
          
          <p className={styles.paragraph}>
            This isn't just about better prompts or clearer requirements documents. 
            It's about developing a practice of understanding. Learning to sit with 
            ambiguity long enough to resolve it into specificity. Knowing the 
            difference between what you think you want and what you actually need.
          </p>
          
          <p className={styles.paragraph}>
            The people who will thrive in this new world aren't necessarily the 
            best coders or designers. They're the ones who can think clearly, 
            express precisely, and iterate on understanding before iterating on 
            execution.
          </p>
        </div>

        {/* Section 04: What I'm Building */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>04</span>
            What I'm Building Toward
          </h2>
          
          <p className={styles.paragraph}>
            Every project I work on is an exploration of this theme. 
            <a href="/applauncher" className={styles.link}>AppLauncher v2</a> is 
            the current flagship — a tool that helps you understand your intent 
            before generating anything.
          </p>
          
          <p className={styles.paragraph}>
            The first version of AppLauncher was a code generation tool. It worked, 
            but I realized we were solving the wrong problem. The hard part isn't 
            generating code — it's knowing what code to generate. v2 is about 
            understanding first, execution second.
          </p>
          
          <p className={styles.paragraph}>
            Beyond products, I'm building a practice: writing essays that clarify 
            thinking, creating frameworks that structure understanding, and 
            cultivating a community of people who share this obsession with clarity.
          </p>
        </div>

        {/* Section 05: Invitation */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>05</span>
            An Invitation
          </h2>
          
          <p className={styles.paragraph}>
            If this resonates — if you believe the future belongs to those who can 
            think clearly and express precisely — I'd love to connect.
          </p>
          
          <p className={styles.paragraph}>
            This isn't a polished manifesto but a working hypothesis. It evolves 
            as I learn. If you see gaps, have counterarguments, or are building 
            in adjacent spaces, reach out.
          </p>
          
          <div className={styles.cta}>
            <a href="/contact" className="btn">Get in Touch</a>
            <a href="/now" className="btn btn--ghost">See What I'm Doing Now</a>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

