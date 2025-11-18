import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-white font-bold text-xl tracking-tight">Mio Portfolio</a>
        <nav className="hidden md:flex items-center gap-6 text-slate-200">
          <a href="#services" className="hover:text-white transition-colors">Servizi</a>
          <a href="#projects" className="hover:text-white transition-colors">Progetti</a>
          <a href="#contact" className="hover:text-white transition-colors">Contatti</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
