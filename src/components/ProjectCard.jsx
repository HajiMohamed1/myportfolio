import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project, number, layout }) {
  return (
    <article className={`project-row ${layout}`}>
      <div className="project-media">
        <a
          className="project-shot-container"
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — Live Demo`}
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
          />
          <div className="project-view-indicator">
            <span>Live Demo</span>
            <FiArrowUpRight />
          </div>
        </a>
        <div className="project-meta-bar">
          <span className="project-index">WORK // {number}</span>
        </div>
      </div>

      <div className="project-info">
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <h3 className="project-title-h3">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-links">
          <a
            className="link-arrow"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <span>Live Preview</span> <FiExternalLink />
          </a>
          <a
            className="link-arrow"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> <span>Codebase</span>
          </a>
        </div>
      </div>
    </article>
  )
}
