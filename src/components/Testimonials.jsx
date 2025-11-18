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
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
            <Star size={16} /> Loved by learners and leaders
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900">Student stories</h2>
          <p className="mt-2 text-slate-600">What our community says about PPRO’s programs and certifications.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-slate-900">{t.name}
                <span className="block text-slate-500 font-normal">{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
