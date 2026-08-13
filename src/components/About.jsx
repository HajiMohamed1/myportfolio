export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="section-label">
            <span className="section-num">01</span>
            <span>About</span>
          </p>
          <div className="section-title-wrap">
            <h2 className="section-title">
              The Developer<span className="dot">.</span>
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-left" data-reveal>
            <div className="about-statement">
              <span>I build web</span>
              <span>experiences</span>
              <span className="outline-text">for the real world.</span>
            </div>
            <div className="about-meta">
              based in kenya · mern stack · full stack
            </div>
          </div>

          <div className="about-right" data-reveal style={{ '--d': '120ms' }}>
            <div className="about-bio">
              <p>
                I&rsquo;m a MERN stack developer based in Kenya. I work across the
                whole stack — MongoDB, Express, React, and Node — and I care about
                the parts users actually notice: speed, clean state management,
                and the small details that make an app feel finished.
              </p>
              <p>
                My recent projects include a <strong>movie discovery app</strong>, a{' '}
                <strong>real-time chat application</strong>, and an{' '}
                <strong>e-commerce platform</strong> — each one built end to end,
                from database schema to the deployed frontend.
              </p>
            </div>

            <div className="about-list">
              <div className="about-item">
                <span className="about-item-num">01 //</span>
                <div className="about-item-content">
                  <h3>Building</h3>
                  <p>
                    Full-stack applications end to end — from database schema to
                    deployed UI.
                  </p>
                </div>
              </div>
              <div className="about-item">
                <span className="about-item-num">02 //</span>
                <div className="about-item-content">
                  <h3>Learning</h3>
                  <p>
                    Exploring new tools and breaking things to understand them
                    better.
                  </p>
                </div>
              </div>
              <div className="about-item">
                <span className="about-item-num">03 //</span>
                <div className="about-item-content">
                  <h3>Creating</h3>
                  <p>Real projects used by real people — not just demos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
