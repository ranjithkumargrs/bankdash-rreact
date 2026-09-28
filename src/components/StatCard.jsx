export default function StatCard({ label, value, icon, bg = '#E3E9FF' }) {
  return (
    <div className="card flex items-center gap-4 flex-1 min-w-[180px]">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center text-lg shrink-0"
        style={{ backgroundColor: bg }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted mb-1">{label}</p>
        <p className="text-lg font-bold text-navy">{value}</p>
      </div>
    </div>
  )
}
