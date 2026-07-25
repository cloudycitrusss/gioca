import { NavLink } from 'react-router-dom'
import './Footer.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img src="/images/gioca-logo.png" alt="" width={56} height={56} />
          <div>
            <h2>Gioca Soccer Academy</h2>
            <p>
              Eagles Landing Day Camp
              <br />
              74 Davidson&apos;s Mill Road, North Brunswick
            </p>
          </div>
        </div>

        <div className="footer__meta">
          <a href="mailto:zane.taha@giocasocceracademy.com">
            zane.taha@giocasocceracademy.com
          </a>
          <a href="tel:6098196499">609-819-6499</a>
        </div>

        <nav className="footer__links" aria-label="Footer">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Gioca Soccer Academy</p>
        </div>
      </div>
    </footer>
  )
}
