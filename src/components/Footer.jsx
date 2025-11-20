import React from 'react'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-white">Blue Studio</h3>
            <p className="mt-2 text-sm text-blue-200/80">
              We craft interactive, animated experiences for modern brands.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-blue-200/80">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-3 space-y-2 text-blue-200/80">
              <li>Web Design</li>
              <li>Frontend Engineering</li>
              <li>Brand Motion</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-blue-200/80">
              <li>hello@bluestudio.co</li>
              <li>@bluestudio</li>
              <li>+1 (555) 012-3456</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-blue-300/60">
          © {new Date().getFullYear()} Blue Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
