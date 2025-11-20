import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Test from './Test'
import './index.css'

function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-900 text-white p-8">
      <div className="text-center">
        <div className="text-6xl font-bold">404</div>
        <p className="mt-2 text-blue-200/90">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="mt-6 inline-block rounded-xl bg-white/90 px-4 py-2 font-semibold text-slate-900">Go Home</a>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
