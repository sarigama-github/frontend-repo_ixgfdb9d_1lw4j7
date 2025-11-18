import { useEffect, useState } from 'react'
import { Newspaper } from 'lucide-react'

export default function News() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'PPRO launches 2025 Professional Standards', date: 'Nov 10, 2025', tag: 'Standards' },
    { id: 2, title: 'New partnership with EduTech Labs to expand certification access', date: 'Oct 28, 2025', tag: 'Partnership' },
    { id: 3, title: 'Scholarship program opens for early career professionals', date: 'Oct 05, 2025', tag: 'Scholarship' },
  ])

  useEffect(() => {
    // Placeholder for future API integration
  }, [])

  return (
    <section id="news" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <Newspaper size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Latest News</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.id} className="p-6 rounded-xl border border-slate-200 hover:border-sky-200 bg-white shadow-sm/50 hover:shadow-md transition">
              <div className="text-xs font-medium text-sky-700 bg-sky-50 inline-flex px-2 py-1 rounded">{a.tag}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{a.date}</p>
              <button className="mt-4 text-sm font-semibold text-sky-700 hover:text-sky-900">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
