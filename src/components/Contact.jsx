import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('ok')
      e.currentTarget.reset()
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Parliamo del tuo progetto</h2>
        <p className="text-slate-300 mb-8">Dimmi di cosa hai bisogno: ti risponderò entro 24h con idee, tempi e costi.</p>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Nome" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400"/>
          <input type="email" name="email" required placeholder="Email" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400"/>
          <input name="budget" placeholder="Budget (opzionale)" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400"/>
          <input name="timeline" placeholder="Tempistiche (opzionale)" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400"/>
          <textarea name="message" required placeholder="Raccontami del progetto" rows="5" className="md:col-span-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-400" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="px-5 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-colors" disabled={status==='sending'}>
              {status==='sending' ? 'Invio...' : 'Invia richiesta'}
            </button>
            {status==='ok' && <span className="text-green-400">Messaggio inviato! Ti risponderò presto.</span>}
            {status==='error' && <span className="text-red-400">Qualcosa è andato storto. Riprova.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
