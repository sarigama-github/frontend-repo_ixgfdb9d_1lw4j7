import { useRef, useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Aisha Khan',
    role: 'Policy Fellow, 2024 Cohort',
    quote:
      'PPRO helped me turn research into real impact. The mentorship and community are unmatched.',
  },
  {
    name: 'Diego Martinez',
    role: 'Certified Consultant',
    quote:
      'The certification pathway was rigorous yet supportive. It opened doors to new clients right away.',
  },
  {
    name: 'Mei Lin',
    role: 'Program Scholar',
    quote:
      'From webinars to networking, I always find practical resources and people who care.',
  },
  {
    name: 'Sarah Thompson',
    role: 'Education Partner',
    quote:
      'We collaborate with PPRO to shape curriculum that directly serves communities.',
  },
  {
    name: 'Omar Faruk',
    role: 'Regional Mentor',
    quote:
      'The mentor network connects talent across borders. It is energizing and effective.',
  },
  {
    name: 'Priya Desai',
    role: 'Cohort Lead',
    quote:
      'Clarity in policies and transparent certifications keep everyone aligned and confident.',
  },
]

function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setInView(true) })
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])
  return { ref, inView }
}

export default function Testimonials() {
  const { ref, inView } = useInView()

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm font-medium dark:bg-sky-900/40 dark:text-sky-300">
            <Star size={16} /> Loved by learners and leaders
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Student stories</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">What our community says about PPRO’s programs and certifications.</p>
        </div>

        <div ref={ref} className={`mt-10 grid md:grid-cols-3 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {testimonials.map((t, idx) => (
            <figure
              key={t.name}
              style={{ transitionDelay: `${idx * 60}ms` }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-200/60 via-slate-200/40 to-amber-200/60 dark:from-sky-500/20 dark:via-slate-800 dark:to-amber-500/20 shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="rounded-[15px] overflow-hidden bg-white dark:bg-slate-950 border border-white/60 dark:border-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/90 dark:supports-[backdrop-filter]:bg-slate-950/80 p-6">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-gradient-to-tr from-sky-500 to-amber-400 opacity-90 group-hover:opacity-100" />
                  <blockquote className="text-slate-700 dark:text-slate-200 leading-relaxed">“{t.quote}”</blockquote>
                </div>
                <figcaption className="mt-4 text-sm font-medium text-slate-900 dark:text-white">
                  {t.name}
                  <span className="block text-slate-500 dark:text-slate-400 font-normal">{t.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
