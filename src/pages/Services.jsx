import { serviceHighlights, bankServices } from '../data/mockData'

export default function Services() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {serviceHighlights.map((s) => (
          <div key={s.id} className="card flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: s.bg }}>
              {s.icon}
            </div>
            <div>
              <p className="font-semibold text-navy text-sm">{s.title}</p>
              <p className="text-xs text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="font-bold text-navy mb-4">Bank Services List</h2>
        <div className="space-y-3">
          {bankServices.map((s, i) => (
            <div key={i} className="flex items-center justify-between flex-wrap gap-3 py-2">
              <div className="flex items-center gap-3 min-w-[220px]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: s.bg }}>
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{s.title}</p>
                  <p className="text-xs text-primary">It is a long established</p>
                </div>
              </div>
              <p className="text-xs text-muted hidden md:block">Lorem ipsum</p>
              <p className="text-xs text-primary hidden md:block">Many publishing</p>
              <p className="text-xs text-primary hidden md:block">Many publishing</p>
              <button className="border border-primary text-primary text-xs px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
