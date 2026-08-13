import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { navLinks, site } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-pill">
          <a className="nav-brand" href="#home" onClick={() => setOpen(false)}>
            HAJI MOHAMED<span>.</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${active === link.href ? ' active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="nav-socials">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>

            <a className="nav-cta" href="#contact">
              Let&rsquo;s talk
            </a>

            <button
              className="nav-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close main menu' : 'Open main menu'}
              aria-expanded={open}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      {/* Full screen mobile navigation menu */}
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        <nav className="nav-mobile-links" aria-label="Mobile navigation">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? 'active' : ''}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-mobile-meta">
          <div className="nav-mobile-socials">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FaGithub />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin />
            </a>
          </div>
          <span className="nav-mobile-email">{site.email}</span>
        </div>
      </div>
    </>
  )
}
