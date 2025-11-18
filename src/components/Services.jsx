export default function Services() {
  const services = [
    {
      title: 'Siti Vetrina',
      desc: 'Eleganti, veloci e ottimizzati per presentare al meglio la tua attività.',
    },
    {
      title: 'E-commerce',
      desc: 'Negozi online performanti con pagamenti sicuri e gestione ordini.',
    },
    {
      title: 'Landing Page',
      desc: 'Pagine ad alta conversione per campagne marketing e lead generation.',
    },
    {
      title: 'Restyling & SEO',
      desc: 'Aggiorno siti esistenti migliorando design, performance e indicizzazione.',
    },
  ]

  return (
    <section id="services" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Servizi</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 text-slate-200">
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-300/90 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
