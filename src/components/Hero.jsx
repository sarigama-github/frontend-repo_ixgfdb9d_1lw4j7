import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
          >
            Advancing Professionals. Empowering Communities.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-slate-600 max-w-xl"
          >
            PPRO connects consultants, educators, and policymakers through trusted programs, resources, and a vibrant network.
          </motion.p>

          <motion.div
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
              className="inline-flex items-center justify-center h-12 px-6 rounded-xl font-semibold border border-amber-400 text-amber-700 bg-amber-50 hover:bg-amber-100"
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
            <div className="text-sm text-slate-600">
              Trusted by 12k+ members across 40+ institutions
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-sky-50 to-amber-50 ring-1 ring-slate-200 overflow-hidden">
          <div className="absolute inset-0 opacity-90">
            <Spline scene="https://prod.spline.design/q3N4W4kLxN7i4I1C/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  )
}
