import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiIntellijidea,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { skills } from '../data'

const iconMap = {
  html: [SiHtml5, 'c-html'],
  css: [SiCss, 'c-css'],
  js: [SiJavascript, 'c-js'],
  react: [SiReact, 'c-react'],
  tailwind: [SiTailwindcss, 'c-tailwind'],
  node: [SiNodedotjs, 'c-node'],
  express: [SiExpress, 'c-express'],
  mongodb: [SiMongodb, 'c-mongo'],
  mysql: [SiMysql, 'c-mysql'],
  git: [SiGit, 'c-git'],
  github: [SiGithub, 'c-github'],
  vscode: [VscCode, 'c-vscode'],
  postman: [SiPostman, 'c-postman'],
  intellij: [SiIntellijidea, 'c-intellij'],
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="section-label">
            <span className="section-num">02</span>
            <span>Skills</span>
          </p>
          <div className="section-title-wrap">
            <h2 className="section-title">
              Technical Stack<span className="dot">.</span>
            </h2>
          </div>
        </div>

        <div className="skills-container" data-reveal>
          {Object.entries(skills).map(([group, items], gi) => (
            <div className="skills-row" key={group}>
              <div className="skills-row-header">
                <span className="skills-row-num">{String(gi + 1).padStart(2, '0')} //</span>
                <h3 className="skills-row-title">{group}</h3>
              </div>
              <div className="skills-row-items">
                {items.map((skill) => {
                  const [Icon, colorClass] = iconMap[skill.icon] || []
                  return (
                    <div className="skill-tag" key={skill.name}>
                      <span className="skill-tag-name">{skill.name}</span>
                      <span className="skill-tag-icon">
                        {Icon && <Icon className={colorClass} />}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
