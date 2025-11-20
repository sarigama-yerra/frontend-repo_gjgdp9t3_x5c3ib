import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const posts = new Array(9).fill(0).map((_, i) => ({
  title: `Designing with Motion ${i + 1}`,
  excerpt:
    'Exploring how micro-interactions and subtle transitions improve usability and create a sense of quality in digital products.',
}))

export default function Blog() {
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
          Blog
        </motion.h1>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-2xl transition-all group-hover:translate-x-8 group-hover:-translate-y-8" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-blue-200/90">{p.excerpt}</p>
              <div className="mt-4 text-sm text-cyan-300/80">Read more →</div>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
