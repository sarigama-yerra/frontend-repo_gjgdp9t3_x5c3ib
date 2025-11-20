import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Mock submit
    setTimeout(() => setStatus('Thanks! We will be in touch.'), 800)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight"
        >
          Contact
        </motion.h1>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <div>
            <label className="text-sm text-blue-200/80">Name</label>
            <input className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 outline-none placeholder:text-blue-200/60" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="text-sm text-blue-200/80">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 outline-none placeholder:text-blue-200/60" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="text-sm text-blue-200/80">Message</label>
            <textarea rows="5" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 p-3 outline-none placeholder:text-blue-200/60" placeholder="Tell us about your project..." />
          </div>
          <button className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-semibold text-slate-900 shadow-xl shadow-blue-500/30">
            Send message
          </button>
          <div className="text-sm text-cyan-300/80">{status}</div>
        </motion.form>

        <div className="mt-12 space-y-4">
          {new Array(8).fill(0).map((_, i) => (
            <p key={i} className="text-blue-200/90">
              We typically respond within one business day. For urgent inquiries, please mention your timeline and we will prioritize accordingly. Our team is distributed across timezones, enabling almost round-the-clock collaboration and support.
            </p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
