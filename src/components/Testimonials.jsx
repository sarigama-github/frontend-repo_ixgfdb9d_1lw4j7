import { useRef, useEffect, useState } from 'react'
import { Star } from 'lucide-react'

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
            <blockquote
              key={t.name}
              style={{ transitionDelay: `${idx * 60}ms` }}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 dark:bg-slate-900 dark:border-slate-800"
            >
              <p className="text-slate-700 dark:text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-slate-900 dark:text-white">{t.name}
                <span className="block text-slate-500 dark:text-slate-400 font-normal">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
