import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-transparent backdrop-blur-md" />

      <nav className="relative mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl shadow-2xl">
          <Link to="/" className="group inline-flex items-center gap-2">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
              <span className="absolute -right-1 -top-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
            </div>
            <span className="font-semibold tracking-tight text-white">Blue Studio</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-blue-200/80 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center gap-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30 transition hover:shadow-blue-500/50"
            >
              Start a Project <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {navItems.map((item, i) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-5 py-4 text-base transition-colors ${
                        isActive ? 'text-white' : 'text-blue-200/80 hover:text-white'
                      }`
                    }
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  )
}
