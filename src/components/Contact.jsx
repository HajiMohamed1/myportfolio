import { useState } from 'react'
import { FiMail, FiPhone, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { site } from '../data'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  function validate() {
    const next = {}
    if (!name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = 'Please enter a valid email address.'
    if (message.trim().length < 10)
      next.message = 'Your message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    const subject = encodeURIComponent(`Portfolio contact from ${name || 'your site'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="section-label">
            <span className="section-num">04</span>
            <span>Contact</span>
          </p>
          <div className="section-title-wrap">
            <h2 className="section-title">
              Let&rsquo;s Connect<span className="dot">.</span>
            </h2>
          </div>
        </div>

        <div className="contact-grid" data-reveal>
          <div className="contact-info">
            <h3 className="contact-intro-title">Have a project in mind?</h3>
            <p className="contact-desc">
              Tell me what you&rsquo;re working on — I&rsquo;ll reply with ideas and next steps.
            </p>

            <div className="contact-links">
              <div className="contact-link-item">
                <span className="label">Email</span>
                <a className="value" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
                <FiMail />
              </div>
              <div className="contact-link-item">
                <span className="label">Phone</span>
                <a className="value" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
                <FiPhone />
              </div>
              <div className="contact-link-item">
                <span className="label">LinkedIn</span>
                <a className="value" href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn Profile
                </a>
                <FaLinkedin />
              </div>
              <div className="contact-link-item">
                <span className="label">GitHub</span>
                <a className="value" href={site.github} target="_blank" rel="noreferrer">
                  GitHub Repositories
                </a>
                <FaGithub />
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (errors.name) setErrors({ ...errors, name: undefined })
                }}
                placeholder="Enter your Name"
                required
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="field-error">{errors.name}</p>}
            </div>

            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors({ ...errors, email: undefined })
                }}
                placeholder="you@example.com"
                required
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                  if (errors.message) setErrors({ ...errors, message: undefined })
                }}
                placeholder="Tell me about your project, target audience, and timeline..."
                required
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="field-error">{errors.message}</p>}
            </div>

            <button className="btn btn-primary" type="submit">
              <span>Send Message</span> <FiSend />
            </button>
            <p className="form-note">
              // opens your local email client with the draft prepared
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
