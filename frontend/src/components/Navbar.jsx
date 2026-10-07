import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/conferences', label: 'Conferences' },
  { to: '/weddings', label: 'Weddings & Events' },
  { to: '/accommodation', label: 'Accommodation' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-brand-700 flex items-center justify-center text-white font-bold text-sm">DR</div>
            <div className="leading-tight">
              <span className="block text-brand-800 font-semibold text-sm sm:text-base group-hover:text-brand-600 transition">Destination Resort</span>
              <span className="block text-[10px] sm:text-xs text-gray-500 tracking-wide uppercase">Centre</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition ${isActive ? 'text-brand-700 bg-brand-50' : 'text-gray-600 hover:text-brand-700 hover:bg-gray-50'}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link to="/contact" className="inline-flex items-center px-4 py-2.5 rounded-full bg-brand-700 text-white text-sm font-medium hover:bg-brand-800 transition shadow-sm">Enquire Now</Link>
          </div>
          <button type="button" className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-md text-sm font-medium ${isActive ? 'text-brand-700 bg-brand-50' : 'text-gray-600 hover:bg-gray-50'}`}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block mt-3 text-center px-4 py-2.5 rounded-full bg-brand-700 text-white text-sm font-medium">Enquire Now</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
