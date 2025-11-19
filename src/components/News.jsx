import { useEffect, useState, useRef } from 'react'
import { Newspaper } from 'lucide-react'

function useInViewAnimation(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setInView(true)
      })
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])
  return { ref, inView }
}

export default function News() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'PPRO launches 2025 Professional Standards', date: 'Nov 10, 2025', tag: 'Standards' },
    { id: 2, title: 'New partnership with EduTech Labs to expand certification access', date: 'Oct 28, 2025', tag: 'Partnership' },
    { id: 3, title: 'Scholarship program opens for early career professionals', date: 'Oct 05, 2025', tag: 'Scholarship' },
    { id: 4, title: 'PPRO Summit 2026: Call for speakers now open', date: 'Sep 19, 2025', tag: 'Events' },
    { id: 5, title: 'Mentor network expands to 20+ countries', date: 'Aug 30, 2025', tag: 'Community' },
    { id: 6, title: 'New micro-credentials for policy analysts', date: 'Aug 14, 2025', tag: 'Certification' },
  ])

  useEffect(() => {
    // Placeholder for future API integration
  }, [])

  const { ref, inView } = useInViewAnimation()

  return (
    <section id="news" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center dark:bg-sky-900/40 dark:text-sky-300">
            <Newspaper size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Latest News</h2>
        </div>

        <div ref={ref} className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {articles.map((a, idx) => (
            <article
              key={a.id}
              style={{ transitionDelay: `${idx * 60}ms` }}
              className="p-6 rounded-xl border border-slate-200 hover:border-sky-200 bg-white shadow-sm/50 hover:shadow-md transition dark:bg-slate-900 dark:border-slate-800 dark:hover:border-sky-800/50"
            >
              <div className="text-xs font-medium text-sky-700 bg-sky-50 inline-flex px-2 py-1 rounded dark:bg-sky-900/40 dark:text-sky-300">{a.tag}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{a.date}</p>
              <button className="mt-4 text-sm font-semibold text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200">Read more →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
