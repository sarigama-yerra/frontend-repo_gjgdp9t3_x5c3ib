import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Senior Product Designer',
    location: 'Remote',
    desc: 'Lead complex design initiatives, create systems, and bring motion-first thinking to product experiences.',
  },
  {
    title: 'Frontend Engineer (React)',
    location: 'Remote',
    desc: 'Build accessible, performant interfaces with a focus on animation, micro-interactions, and developer experience.',
  },
  {
    title: '3D Designer',
    location: 'Remote',
    desc: 'Create interactive 3D scenes and integrate them into web experiences using modern toolchains.',
  },
]

export default function Careers() {
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
          Careers
        </motion.h1>

        <div className="mt-10 space-y-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{r.title}</h3>
                  <p className="mt-2 text-blue-200/90">{r.desc}</p>
                </div>
                <div className="text-sm text-cyan-300/80">{r.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold">Working at Blue Studio</h3>
          <p className="mt-3 max-w-3xl text-blue-200/90">
            We are a fully remote, async-first team. We value curiosity, craft, and kindness. Benefits include flexible hours, learning stipend, and hardware budget.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
