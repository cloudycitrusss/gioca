import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/tryouts', label: 'Tryouts' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const { user, logout } = useAuth()
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const overHero = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={[
        'navbar',
        overHero ? 'navbar--over-hero' : 'navbar--solid',
        menuOpen ? 'navbar--open' : '',
      ].join(' ')}
    >
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__brand">
          <img src="/images/gioca-logo.png" alt="" width={44} height={44} />
          <span>Gioca Soccer Academy</span>
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav id="main-nav" className="navbar__links" aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="navbar__auth">
            {user ? (
              <>
                <span className="navbar__user">{user.email}</span>
                <button
                  type="button"
                  className="btn btn--ghost navbar__login"
                  onClick={() => logout()}
                >
                  Log out
                </button>
              </>
            ) : (
              <NavLink to="/login" className="btn btn--dark navbar__login">
                Log In
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
