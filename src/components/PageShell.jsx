import React from 'react'

export default function PageShell({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_10%,rgba(34,211,238,0.08),transparent),radial-gradient(600px_300px_at_80%_20%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative">{children}</div>
    </div>
  )
}
