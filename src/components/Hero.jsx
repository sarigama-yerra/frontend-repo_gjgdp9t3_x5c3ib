import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/30 to-slate-900" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl pt-28"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            A playful, modern studio crafting interactive experiences
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-200/90">
            We blend design, code, and motion to build immersive websites and products. Enjoy delightful micro-interactions, cinematic transitions, and a fully responsive experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center rounded-xl bg-white/90 px-5 py-3 font-semibold text-slate-900 shadow-xl shadow-blue-400/20 transition hover:bg-white"
            >
              Explore Work
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
