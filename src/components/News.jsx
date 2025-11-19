import { useEffect, useState, useRef } from 'react'
import { Newspaper, CalendarDays, ArrowRight } from 'lucide-react'

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
    { id: 1, title: 'PPRO launches 2025 Professional Standards', date: 'Nov 10, 2025', tag: 'Standards', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, title: 'New partnership with EduTech Labs to expand certification access', date: 'Oct 28, 2025', tag: 'Partnership', image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, title: 'Scholarship program opens for early career professionals', date: 'Oct 05, 2025', tag: 'Scholarship', image: 'https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, title: 'PPRO Summit 2026: Call for speakers now open', date: 'Sep 19, 2025', tag: 'Events', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, title: 'Mentor network expands to 20+ countries', date: 'Aug 30, 2025', tag: 'Community', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop' },
    { id: 6, title: 'New micro-credentials for policy analysts', date: 'Aug 14, 2025', tag: 'Certification', image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1200&auto=format&fit=crop' },
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
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-200/60 via-slate-200/40 to-amber-200/60 dark:from-sky-500/20 dark:via-slate-800 dark:to-amber-500/20 shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="rounded-[15px] overflow-hidden bg-white dark:bg-slate-950 border border-white/60 dark:border-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/90 dark:supports-[backdrop-filter]:bg-slate-950/80">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={a.image} alt="Article visual" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-medium text-sky-900 bg-sky-100/90 dark:text-sky-100 dark:bg-sky-900/60 px-2 py-1 rounded-full">{a.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                    {a.title}
                  </h3>
                  <div className="mt-2 flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <CalendarDays size={16} className="mr-2" /> {a.date}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-900 dark:text-sky-300 dark:hover:text-sky-200">
                      Read more
                      <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-500 to-amber-400 opacity-80 group-hover:opacity-100 blur-[2px]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
