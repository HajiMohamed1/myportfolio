import { FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          <span className="footer-monogram" aria-hidden="true">
            HM
          </span>
          &nbsp;&copy; {new Date().getFullYear()} Haji Mohamed
        </span>
        <span>Built with React &amp; Vite</span>
        <a href="#home">
          Back to top <FiArrowUp style={{ verticalAlign: '-2px' }} />
        </a>
      </div>
    </footer>
  )
}
