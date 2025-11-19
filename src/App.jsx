import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Policies from './components/Policies'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import NotificationsModal from './components/NotificationsModal'

function App() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  // Apply persisted theme on mount for dark mode support
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar onOpenNotifications={() => setNotificationsOpen(true)} />
      <main>
        <Hero />
        <News />
        <Policies />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
          <div>© {new Date().getFullYear()} PPRO. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#policies" className="hover:text-slate-900 dark:hover:text-white">Policies</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <NotificationsModal open={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </div>
  )
}

export default App
