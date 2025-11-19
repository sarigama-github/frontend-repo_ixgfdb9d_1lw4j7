import { useEffect, useState } from 'react'
import { Menu, X, Bell, ShieldCheck, GraduationCap, Moon, Sun } from 'lucide-react'

export default function Navbar({ onOpenNotifications }) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => typeof window !== 'undefined' && document.documentElement.classList.contains('dark'))

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const navItems = [
    { label: 'News', href: '#news' },
    { label: 'Policies', href: '#policies' },
    { label: 'Certificates', href: '#policies' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-sky-100 dark:supports-[backdrop-filter]:bg-slate-950/60 dark:bg-slate-950/70 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 shadow-sm flex items-center justify-center text-white">
              <ShieldCheck size={18} />
            </div>
            <div className="leading-tight">
              <div className="text-slate-900 dark:text-white font-semibold tracking-tight">PPRO</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">Professional Organization</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors dark:text-slate-300 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={onOpenNotifications}
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800"
              aria-label="Notifications"
            >
              <Bell size={18} />
            </button>
            <a
              href="https://office.ppro.org"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-amber-500 to-amber-600 shadow-sm hover:shadow-md transition"
            >
              <GraduationCap size={16} />
              PPRO Office
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-sky-100 dark:border-slate-800">
            <nav className="flex flex-col gap-2 pt-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => { setDark(!dark) }}
                  className="flex-1 h-10 rounded-lg border border-slate-200 text-slate-700 font-medium dark:border-slate-700 dark:text-slate-200"
                >
                  <div className="inline-flex items-center gap-2 justify-center">
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                    Theme
                  </div>
                </button>
                <button
                  onClick={() => { onOpenNotifications?.(); setOpen(false) }}
                  className="flex-1 h-10 rounded-lg border border-slate-200 text-slate-700 font-medium dark:border-slate-700 dark:text-slate-200"
                >
                  <div className="inline-flex items-center gap-2 justify-center">
                    <Bell size={16} />
                    Notifications
                  </div>
                </button>
              </div>
              <a
                href="https://office.ppro.org"
                target="_blank"
                rel="noreferrer"
                className="mt-2 h-10 rounded-lg text-white font-medium bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center"
              >
                <GraduationCap size={16} />
                <span className="ml-2">Office</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
