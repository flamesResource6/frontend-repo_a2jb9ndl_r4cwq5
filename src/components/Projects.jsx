import { useEffect, useState } from 'react'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/projects`)
        const data = await res.json()
        setProjects(data.projects || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="projects" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-white">Progetti</h2>
          <a href="#contact" className="text-sky-400 hover:text-sky-300">Vuoi qualcosa di simile?</a>
        </div>

        {loading ? (
          <p className="text-slate-300">Caricamento...</p>
        ) : projects.length === 0 ? (
          <p className="text-slate-300">Nessun progetto al momento. Scrivimi e ne creeremo uno su misura per te!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => (
              <a key={p.id} href={p.live_url || '#'} target="_blank" className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
                <div className="aspect-video bg-slate-800/40 overflow-hidden">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                  ) : (
                    <div className="w-full h-full grid place-items-center text-slate-400">Nessuna immagine</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    {p.year && <span className="text-slate-400 text-sm">{p.year}</span>}
                  </div>
                  <p className="text-slate-300/90 text-sm mt-1">{p.description}</p>
                  {p.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tags.map(t => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-slate-900/60 border border-white/10 text-slate-300">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
