import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Policies from './components/Policies'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import NotificationsModal from './components/NotificationsModal'

function App() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenNotifications={() => setNotificationsOpen(true)} />
      <main>
        <Hero />
        <News />
        <Policies />
        <Testimonials />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} PPRO. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#policies" className="hover:text-slate-900">Policies</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>

      <NotificationsModal open={notificationsOpen} onClose={() => setNotificationsOpen(false)} />
    </div>
  )
}

export default App
