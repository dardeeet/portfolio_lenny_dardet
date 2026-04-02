import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app bg-slate-950 text-slate-50 selection:bg-indigo-500/30 overflow-x-hidden" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-main)' }}>
      {/* Background radial gradient for modern look */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
