import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Experience Design',
    copy:
      'Human-centered product design across web and mobile. Research, UX, UI, prototyping, and design systems with motion guidelines.',
  },
  {
    title: 'Frontend Engineering',
    copy:
      'Component-driven development with modern frameworks. Performance budgets, accessibility, and delightful micro-interactions.',
  },
  {
    title: 'Brand Motion',
    copy:
      'From logo reveals to hero animations, we bring your identity to life with tasteful motion and interactive 3D elements.',
  },
  {
    title: 'Content & CMS',
    copy:
      'Flexible, editor-friendly content models and integrations. We build with scalability in mind so your team can move fast.',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight"
        >
          Services
        </motion.h1>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-blue-200/90">{s.copy}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 p-8 text-blue-100">
          <div className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Capabilities</div>
          <p className="mt-3 max-w-3xl text-blue-200/90">
            Motion design, React, prototyping, accessibility, performance optimization, 3D integration, content modeling, and more.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
