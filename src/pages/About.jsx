import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  const paragraphs = new Array(10).fill(0).map((_, i) => (
    <motion.p
      key={i}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="mt-4 text-blue-200/90"
    >
      We are a multidisciplinary team focused on crafting memorable digital experiences. Our philosophy blends aesthetics, usability, and motion. From concept to launch, we collaborate closely with our clients, iterating quickly and delivering value at every step. Our process emphasizes user empathy, performance, and attention to micro-interactions that delight.
    </motion.p>
  ))

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
          About Us
        </motion.h1>
        <div className="mt-6 text-lg">{paragraphs}</div>
      </div>
      <Footer />
    </div>
  )
}
