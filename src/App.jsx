import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Mio Portfolio — Siti web su misura</p>
      </footer>
    </div>
  )
}

export default App
