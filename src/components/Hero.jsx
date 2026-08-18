import { useEffect, useRef, useState } from 'react'
import { FiArrowRight, FiLayers } from 'react-icons/fi'
import { SiMongodb, SiReact, SiNodedotjs } from 'react-icons/si'
import { site } from '../data'

const ROLES = [
  'MERN Stack Developer',
  'React.js Engineer',
  'Node.js Backend Dev',
  'Full Stack Builder',
]

function useTypewriter(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? deleteSpeed : typeSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return text
}

// function SplitText({ text, className, baseDelay = 0, step = 40 }) {
//   return (
//     <span className={className} aria-label={text}>
//       {text.split('').map((char, i) => (
//         <span
//           key={i}
//           className="split-letter"
//           style={{ '--sd': `${baseDelay + i * step}ms` }}
//           aria-hidden="true"
//         >
//           {char === ' ' ? '\u00A0' : char}
//         </span>
//       ))}
//     </span>
//   )
// }

// function SplitText({ text, className, baseDelay = 0, step = 40 }) {
//   return (
//     <span className={className} aria-label={text}>
//       {text.split('').map((char, i) => (
//         <span
//           key={i}
//           className="split-letter"
//           style={{ '--sd': `${baseDelay + i * step}ms` }}
//           aria-hidden="true"
//         >
//           {char === ' ' ? '\u00A0' : char}
//         </span>
//       ))}
//     </span>
//   )
// }
// function SplitText({ text, className, baseDelay = 0, step = 40 }) {
//   return (
//     <span className={className} aria-label={text}>
//       {text.split('').map((char, i) => (
//         <span
//           key={i}
//           className={`split-letter ${i === 0 ? 'first-letter' : ''}`}
//           style={{ '--sd': `${baseDelay + i * step}ms` }}
//           aria-hidden="true"
//         >
//           {char === ' ' ? '\u00A0' : char}
//         </span>
//       ))}
//     </span>
//   )
// }
function SplitText({ text, className, baseDelay = 0, step = 40 }) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={`split-letter ${i === 0 ? 'first-letter' : ''}`}
          style={{ '--sd': `${baseDelay + i * step}ms` }}
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
function ArchStackPanel() {
  return (
    <div className="arch-panel" aria-hidden="true">
      <div className="arch-grid-lines" />
      <div className="arch-flow-line" />
      <div className="arch-header">
        <span className="arch-title">System Architecture</span>
        <span className="arch-status">
          <i /> Online
        </span>
      </div>

      <div className="arch-body">
        <div className="arch-layer" style={{ '--ld': '0ms' }}>
          <div className="arch-layer-info">
            <span className="arch-layer-num">LAYER 03</span>
            <span className="arch-layer-name">Database / Cloud</span>
            <span className="arch-layer-tech">MongoDB &amp; Firebase</span>
          </div>
          <span className="arch-layer-icon">
            <SiMongodb />
          </span>
        </div>

        <div className="arch-layer" style={{ '--ld': '120ms' }}>
          <div className="arch-layer-info">
            <span className="arch-layer-num">LAYER 02</span>
            <span className="arch-layer-name">API / Server</span>
            <span className="arch-layer-tech">Node.js &amp; Express.js</span>
          </div>
          <span className="arch-layer-icon">
            <SiNodedotjs />
          </span>
        </div>

        <div className="arch-layer" style={{ '--ld': '240ms' }}>
          <div className="arch-layer-info">
            <span className="arch-layer-num">LAYER 01</span>
            <span className="arch-layer-name">Client / UI</span>
            <span className="arch-layer-tech">React.js &amp; Tailwind</span>
          </div>
          <span className="arch-layer-icon">
            <SiReact />
          </span>
        </div>
      </div>

      <div className="arch-footer">
        <span>V2.0.26</span>
        <span>HM_PORTFOLIO</span>
      </div>
    </div>
  )
}

function MagneticButton({ className, href, children }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = 'translate(' + x * 0.18 + 'px, ' + y * 0.35 + 'px)'
  }

  const handleLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0, 0)'
  }

  return (
    <a ref={ref} className={className} href={href} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </a>
  )
}

export default function Hero() {
  const stageRef = useRef(null)
  const roleText = useTypewriter(ROLES)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 16
        const y = (e.clientY / window.innerHeight - 0.5) * 10
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate3d(${y.toFixed(1)}, ${(-x).toFixed(1)}, 0, 2deg)`
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-aurora" aria-hidden="true">
        <span className="aurora-blob blob-a" />
        <span className="aurora-blob blob-b" />
        <span className="aurora-blob blob-c" />
      </div>

      <div className="hero-noise" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow" data-reveal>
              <FiLayers /> MERN Stack Engineer
            </p>

            <h1 className="hero-title">
              <SplitText text="Haji" className="name-big" baseDelay={80} step={45} />
              <SplitText text="Mohamed" className="name-outline" baseDelay={300} step={35} />
            </h1>

            <div className="hero-meta-grid" data-reveal style={{ '--d': '520ms' }}>
              <div className="hero-role">
                <span className="typewriter-text">{roleText}</span>
                <span className="typewriter-cursor" />
              </div>
              <p className="hero-tagline">{site.tagline}</p>
            </div>

            <div className="hero-actions" data-reveal style={{ '--d': '600ms' }}>
              <MagneticButton className="btn btn-primary" href="#projects">
                <span>Selected Work</span> <FiArrowRight />
              </MagneticButton>
              <MagneticButton className="btn btn-secondary" href="#contact">
                <span>Let&rsquo;s Connect</span>
              </MagneticButton>
            </div>
          </div>

          <div className="hero-stage" ref={stageRef} aria-hidden="true" data-reveal style={{ '--d': '680ms' }}>
            <ArchStackPanel />
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}