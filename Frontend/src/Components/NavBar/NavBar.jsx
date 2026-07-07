import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', icon: 'bi-house-door-fill' },
  { to: '/projects', label: 'Projects', icon: 'bi-grid-fill' },
  { to: '/collections', label: 'Collections', icon: 'bi-collection-fill' },
  { to: '/connect', label: 'Connect', icon: 'bi-chat-dots-fill' },
]

const NavBar = ({ theme, toggleTheme }) => {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-slate-200 bg-white/95 px-3 py-2 shadow-[0_16px_45px_rgba(15,23,42,0.18)] backdrop-blur">
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            aria-label={link.label}
            title={link.label}
            className={({ isActive }) =>
              `grid h-10 w-10 place-items-center rounded-full text-lg transition ${
                isActive && !link.to.includes('#') ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
              }`
            }
          >
            <i className={`bi ${link.icon}`} />
          </NavLink>
        ))}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle black and white theme"
          title={theme === 'dark' ? 'Switch to white theme' : 'Switch to black theme'}
          className="grid h-10 w-10 place-items-center rounded-full text-lg text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
        >
          <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`} />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
