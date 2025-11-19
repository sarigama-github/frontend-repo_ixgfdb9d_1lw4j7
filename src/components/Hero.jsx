import React, { Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Lazy-load Spline so a network error won't crash the page
const Spline = React.lazy(() => import('@splinetool/react-spline'))

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

function VisualFallback() {
  return (
    <div className="absolute inset-0">
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="absolute -bottom-36 -left-10 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-70">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0ea5e9"/>
              <stop offset="100%" stopColor="#f59e0b"/>
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#g1)" strokeWidth="0.6">
            {Array.from({ length: 60 }).map((_, i) => (
              <path key={i} d={`M0 ${5 + i*5} C 100 ${i*3}, 300 ${150 - i*2}, 400 ${5 + i*5}`} />
            ))}
          </g>
        </svg>
      </motion.div>
      <div className="absolute bottom-3 right-4 text-[11px] text-slate-500/80">
        Interactive visual unavailable — showing fallback
      </div>
    </div>
  )
}

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.75])

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.h1
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Advancing Professionals. Empowering Communities.
          </motion.h1>

          <motion.p
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-slate-600 max-w-xl dark:text-slate-300"
          >
            PPRO connects consultants, educators, and policymakers through trusted programs, resources, and a vibrant network.
          </motion.p>

          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#policies"
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl text-white bg-sky-600 hover:bg-sky-700 font-semibold shadow-sm hover:shadow transition"
            >
              Explore Policies
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a
              href="https://office.ppro.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl font-semibold border border-amber-400 text-amber-700 bg-amber-50 hover:bg-amber-100 dark:text-amber-300 dark:border-amber-700 dark:bg-amber-900/20 dark:hover:bg-amber-900/30"
            >
              Visit PPRO Office
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-2">
              {['/avatar1.png','/avatar2.png','/avatar3.png'].map((src, i) => (
                <img key={i} src={src} alt="Member" className="h-9 w-9 rounded-full ring-2 ring-white object-cover" />
              ))}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Trusted by 12k+ members across 40+ institutions
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-amber-50 ring-1 ring-slate-200 overflow-hidden dark:from-slate-900 dark:to-slate-800 dark:ring-slate-800">
          <SplineErrorBoundary fallback={<VisualFallback /> }>
            <Suspense fallback={<VisualFallback /> }>
              {/* If the Spline scene is not publicly accessible, we gracefully show a fallback */}
              <div className="absolute inset-0 opacity-90">
                <Spline scene="https://prod.spline.design/q3N4W4kLxN7i4I1C/scene.splinecode" />
              </div>
            </Suspense>
          </SplineErrorBoundary>
        </div>
      </div>
    </section>
  )
}
