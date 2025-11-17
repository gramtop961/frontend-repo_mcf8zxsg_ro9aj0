import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Coins, Sparkles } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/markets', label: 'Markets' },
  { to: '/products', label: 'Products' },
  { to: '/learn', label: 'Learn' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-amber-300 shadow-lg shadow-cyan-500/20">
              <Coins className="h-5 w-5 text-black" />
              <Sparkles className="h-4 w-4 text-black absolute -right-1 -top-1 animate-pulse" />
            </div>
            <span className="text-white font-semibold tracking-tight">Nebula Crypto</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden text-white/80 hover:text-white"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
