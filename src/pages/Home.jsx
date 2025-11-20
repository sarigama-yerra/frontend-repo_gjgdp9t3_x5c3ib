import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Hero />

      <Section
        id="work"
        eyebrow="Featured Work"
        title="Cinematic, responsive, and fast"
        copy="Our projects combine high-end design with robust engineering. From landing pages that convert to product dashboards that scale, we obsess over motion, clarity, and accessibility."
        cta={{ label: 'See Case Studies', href: '/services' }}
      />

      <Section
        id="services"
        eyebrow="What we do"
        title="Design, code, and motion"
        copy="We help brands and startups bring ideas to life. Strategy and discovery, delightful user interfaces, performant frontend architecture, and micro-interactions that make people smile."
        cta={{ label: 'Explore Services', href: '/services' }}
      />

      <Section
        id="approach"
        eyebrow="Approach"
        title="Collaborative from day one"
        copy="We work in small, focused sprints with transparent communication and iterative delivery. You’ll see progress early and often with interactive previews."
        cta={{ label: 'Start a Project', href: '/contact' }}
      />

      <Footer />
    </div>
  )
}
