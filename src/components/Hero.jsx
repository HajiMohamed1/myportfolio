import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowRight, FiDatabase, FiServer, FiLayers } from 'react-icons/fi'
import { SiMongodb, SiReact, SiNodedotjs, SiExpress } from 'react-icons/si'
import { site } from '../data'

function ArchStackPanel() {
  return (
    <div className="arch-panel" aria-hidden="true">
      <div className="arch-grid-lines" />
      <div className="arch-header">
        <span className="arch-title">System Architecture</span>
        <span className="arch-status">
          <i /> Online
        </span>
      </div>

      <div className="arch-body">
        {/* Layer 3: Database */}
        <div className="arch-layer">
          <div className="arch-layer-info">
            <span className="arch-layer-num">LAYER 03</span>
            <span className="arch-layer-name">Database / Cloud</span>
            <span className="arch-layer-tech">MongoDB & Firebase</span>
          </div>
          <span className="arch-layer-icon">
            <SiMongodb />
          </span>
        </div>

        {/* Layer 2: Backend */}
        <div className="arch-layer">
          <div className="arch-layer-info">
            <span className="arch-layer-num">LAYER 02</span>
            <span className="arch-layer-name">API / Server</span>
            <span className="arch-layer-tech">Node.js & Express.js</span>
          </div>
          <span className="arch-layer-icon">
            <SiNodedotjs />
          </span>
        </div>

        {/* Layer 1: Frontend */}
        <div className="arch-layer">
          <div className="arch-layer-info">
            <span className="arch-layer-num">LAYER 01</span>
            <span className="arch-layer-name">Client / UI</span>
            <span className="arch-layer-tech">React.js & Tailwind</span>
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

export default function Hero() {
  const stageRef = useRef(null)

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
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow" data-reveal>
              <FiLayers /> MERN Stack Engineer
            </p>
            <h1 className="hero-title">
              <span className="name-big" data-reveal style={{ '--d': '60ms' }}>
                Haji
              </span>
              <span className="name-outline" data-reveal style={{ '--d': '120ms' }}>
                Mohamed
              </span>
            </h1>
            
            <div className="hero-meta-grid" data-reveal style={{ '--d': '180ms' }}>
              <div className="hero-role">MERN Stack Developer</div>
              <p className="hero-tagline">{site.tagline}</p>
            </div>

            <div className="hero-actions" data-reveal style={{ '--d': '240ms' }}>
              <a className="btn btn-primary" href="#projects">
                <span>Selected Work</span> <FiArrowRight />
              </a>
              <a className="btn btn-secondary" href="#contact">
                <span>Let&rsquo;s Connect</span>
              </a>
            </div>
          </div>

          <div className="hero-stage" ref={stageRef} aria-hidden="true" data-reveal style={{ '--d': '300ms' }}>
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
