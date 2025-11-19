import { useRef, useState, useEffect } from 'react'
import { FileBadge, Download, Eye, Shield, FileCheck2, Lock } from 'lucide-react'

const basePolicies = [
  { id: 1, name: 'Code of Professional Conduct', version: 'v3.2', size: '1.2 MB', icon: Shield },
  { id: 2, name: 'Data Protection & Privacy Policy', version: 'v2.5', size: '980 KB', icon: Lock },
  { id: 3, name: 'Consultancy Framework Guidelines', version: 'v1.9', size: '2.1 MB', icon: FileCheck2 },
  { id: 4, name: 'Accessibility & Inclusion Statement', version: 'v1.2', size: '760 KB', icon: FileBadge },
  { id: 5, name: 'Environmental Responsibility Charter', version: 'v1.0', size: '1.6 MB', icon: FileCheck2 },
  { id: 6, name: 'Certification Verification Policy', version: 'v2.1', size: '1.1 MB', icon: Shield },
]

function useInView(options = { threshold: 0.2 }) {
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

export default function Policies() {
  const { ref, inView } = useInView()

  return (
    <section id="policies" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center dark:bg-amber-900/30 dark:text-amber-300">
            <FileBadge size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Policies & Certificates</h2>
        </div>

        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {basePolicies.map((p, idx) => (
            <div
              key={p.id}
              style={{ transitionDelay: `${idx * 60}ms` }}
              className="p-6 rounded-xl bg-white border border-slate-200 hover:border-amber-200 shadow-sm hover:shadow-md transition dark:bg-slate-950 dark:border-slate-800 dark:hover:border-amber-800/40"
            >
              <div className="flex items-center gap-3">
                <p.icon className="text-amber-600 dark:text-amber-400" size={20} />
                <div className="font-semibold text-slate-900 dark:text-white">{p.name}</div>
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.version} • {p.size}</div>
              <div className="mt-5 flex items-center gap-3">
                <button className="flex-1 inline-flex items-center justify-center h-10 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                  <Eye size={16} className="mr-2" />
                  View
                </button>
                <button className="flex-1 inline-flex items-center justify-center h-10 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium hover:shadow">
                  <Download size={16} className="mr-2" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
