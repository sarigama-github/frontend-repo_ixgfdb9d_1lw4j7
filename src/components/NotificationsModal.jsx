import { useEffect, useState } from 'react'
import { X, BellRing } from 'lucide-react'

export default function NotificationsModal({ open, onClose }) {
  const [items, setItems] = useState([
    { id: 1, title: 'Webinar: Ethics in Consulting', date: 'Dec 2, 2025', link: '#' },
    { id: 2, title: 'Policy update: Data retention rules', date: 'Nov 30, 2025', link: '#' },
    { id: 3, title: 'Cohort applications closing soon', date: 'Nov 25, 2025', link: '#' },
  ])

  useEffect(() => {
    // Future: fetch from backend
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden animate-in">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-slate-900 font-semibold">
              <div className="h-9 w-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center"><BellRing size={18}/></div>
              Notifications
            </div>
            <button onClick={onClose} className="h-8 w-8 inline-flex items-center justify-center rounded-lg hover:bg-slate-100"><X size={16}/></button>
          </div>

          <div className="p-4 divide-y divide-slate-100 max-h-[60vh] overflow-auto">
            {items.map((n) => (
              <a key={n.id} href={n.link} className="flex items-center justify-between py-3 group">
                <div>
                  <div className="font-medium text-slate-900 group-hover:text-sky-700">{n.title}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{n.date}</div>
                </div>
                <span className="text-sky-700 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">Open →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
