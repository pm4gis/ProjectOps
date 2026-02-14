import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="ProjectOps"
      description="ProjectOps connects planning, delivery, change, and benefits into one operating model."
    >
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>ProjectOps</h1>
          <p className={styles.subtitle}>
            A practical operating model that connects planning, delivery, business change, and benefits into one continuous flow.
          </p>

          <div className={styles.ctaRow}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Start here
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/core-model/overview">
              Explore the core model
            </Link>
          </div>

          <div className={styles.quickLinks}>
            <Link to="/docs/guides/getting-started">Getting started</Link>
            <span className={styles.dot}>•</span>
            <Link to="/docs/templates/project-brief-template">Project brief template</Link>
            <span className={styles.dot}>•</span>
            <Link to="/docs/glossary">Glossary</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <div className={styles.card}>
                  <h2>Integrated</h2>
                  <p>
                    Planning, requirements, delivery, change, and benefits are treated as one system with shared artefacts and clear feedback loops.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.card}>
                  <h2>Operational</h2>
                  <p>
                    Focus on flow and decision clarity, with lightweight routines that keep work moving and reduce rework.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.card}>
                  <h2>Outcome-led</h2>
                  <p>
                    Define success early, track adoption, and confirm measurable outcomes after release rather than assuming value.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.note}>
              <strong>Use it your way:</strong> adopt the parts you need, keep what works, and simplify what does not.
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
