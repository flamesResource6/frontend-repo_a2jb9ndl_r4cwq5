export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(56,189,248,0.25),rgba(2,6,23,0))]" />
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sky-400 font-semibold mb-3">Sviluppatore Web Freelance</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Creo siti web moderni che portano risultati
          </h1>
          <p className="text-slate-300 mb-8">
            Dal design alla messa online: siti veloci, responsive e ottimizzati SEO per professionisti e piccole imprese.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-colors">Richiedi un preventivo</a>
            <a href="#projects" className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:bg-white/10 transition-colors">Guarda i lavori</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1600&auto=format&fit=crop" alt="Mockup siti web" className="w-full h-full object-cover opacity-90"/>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-slate-900/80 backdrop-blur border border-white/10 rounded-xl px-4 py-3 text-slate-100 shadow-lg">
            <p className="text-sm"><span className="text-sky-400 font-semibold">+30</span> progetti consegnati</p>
          </div>
        </div>
      </div>
    </section>
  )
}
