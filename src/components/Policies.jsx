import { FileBadge, Download, Eye } from 'lucide-react'

const policies = [
  { id: 1, name: 'Code of Professional Conduct', version: 'v3.2', size: '1.2 MB' },
  { id: 2, name: 'Data Protection & Privacy Policy', version: 'v2.5', size: '980 KB' },
  { id: 3, name: 'Consultancy Framework Guidelines', version: 'v1.9', size: '2.1 MB' },
]

export default function Policies() {
  return (
    <section id="policies" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
            <FileBadge size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Policies & Certificates</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((p) => (
            <div key={p.id} className="p-6 rounded-xl bg-white border border-slate-200 hover:border-amber-200 shadow-sm hover:shadow-md transition">
              <div className="font-semibold text-slate-900">{p.name}</div>
              <div className="mt-1 text-sm text-slate-500">{p.version} • {p.size}</div>
              <div className="mt-5 flex items-center gap-3">
                <button className="flex-1 inline-flex items-center justify-center h-10 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50">
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
