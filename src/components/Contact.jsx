import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-2 text-slate-600">Have questions about programs, policies, or membership? We’re here to help.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-700"><Mail size={18} className="text-sky-600"/> support@ppro.org</div>
              <div className="flex items-center gap-3 text-slate-700"><Phone size={18} className="text-sky-600"/> +1 (555) 123-4567</div>
              <div className="flex items-center gap-3 text-slate-700"><MapPin size={18} className="text-sky-600"/> 200 Innovation Way, Springfield</div>
            </div>
          </div>

          <form onSubmit={(e)=> e.preventDefault()} className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Name</label>
              <input className="mt-1 w-full h-11 rounded-lg border border-slate-200 px-3 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input type="email" className="mt-1 w-full h-11 rounded-lg border border-slate-200 px-3 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea className="mt-1 w-full h-28 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="How can we help?" />
            </div>
            <button className="w-full h-11 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
