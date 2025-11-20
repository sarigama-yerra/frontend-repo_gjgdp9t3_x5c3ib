import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ eyebrow, title, copy, cta, id }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <div className="mb-6 text-sm font-semibold uppercase tracking-widest text-cyan-300/80">
          {eyebrow}
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-blue-200/90">
          {copy}
        </p>
        {cta && (
          <div className="mt-6">
            <a
              href={cta.href}
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-semibold text-slate-900 shadow-xl shadow-blue-500/30 transition hover:shadow-blue-500/50"
            >
              {cta.label}
            </a>
          </div>
        )}
      </motion.div>
    </section>
  )
}
