import { projects } from '../data'
import ProjectCard from './ProjectCard.jsx'

export default function FeaturedProjects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="section-label">
            <span className="section-num">03</span>
            <span>Work</span>
          </p>
          <div className="section-title-wrap">
            <h2 className="section-title">
              Selected Projects<span className="dot">.</span>
            </h2>
            <p className="section-sub">
              A curated collection of full-stack web applications, built from database schemas to client-side interfaces.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => {
            // Determine layout based on user spec:
            // Project 1 (index 0) -> image right, content left
            // Project 2 (index 1) -> image left, content right
            // Project 3 (index 2) -> large full-width preview
            let layout = 'right-media'
            if (i === 1) {
              layout = 'left-media'
            } else if (i === 2) {
              layout = 'full-media'
            }

            return (
              <div key={project.id} data-reveal style={{ '--d': `${i * 100}ms` }}>
                <ProjectCard
                  project={project}
                  number={String(i + 1).padStart(2, '0')}
                  layout={layout}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
