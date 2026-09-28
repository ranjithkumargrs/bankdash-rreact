import { LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import StatCard from '../components/StatCard'
import {
  investmentSummary, yearlyInvestment, monthlyRevenue, myInvestments, trendingStock,
} from '../data/mockData'

const icons = { money: '💰', invest: '🔁', return: '🔄' }

export default function Investments() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {investmentSummary.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} icon={icons[s.icon]} bg="#E3E9FF" />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-bold text-navy mb-4">Yearly Total Investment</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={yearlyInvestment}>
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#A3AED0' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#A3AED0' }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#FFB547" strokeWidth={3} dot={{ r: 4, fill: '#FFB547' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="font-bold text-navy mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00C2A8" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#00C2A8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#A3AED0' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#A3AED0' }} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#00C2A8" strokeWidth={3} fill="url(#revGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-bold text-navy mb-4">My Investment</h2>
          <div className="space-y-4">
            {myInvestments.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: inv.bg }}>
                    {inv.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">{inv.name}</p>
                    <p className="text-xs text-primary">{inv.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-navy">${inv.value.toLocaleString()}</p>
                  <p className={`text-xs ${inv.returnPct >= 0 ? 'text-success' : 'text-danger'}`}>
                    {inv.returnPct >= 0 ? '+' : ''}{inv.returnPct}% Envestment Value
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-navy mb-4">Trending Stock</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted text-xs uppercase">
                <th className="pb-3 font-medium">SL No</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Price</th>
                <th className="pb-3 font-medium">Return</th>
              </tr>
            </thead>
            <tbody>
              {trendingStock.map((s) => (
                <tr key={s.sl} className="border-t border-slate-50">
                  <td className="py-2.5 text-muted">{s.sl}</td>
                  <td className="py-2.5 text-navy font-medium">{s.name}</td>
                  <td className="py-2.5 text-navy">${s.price}</td>
                  <td className={`py-2.5 font-medium ${s.returnPct >= 0 ? 'text-success' : 'text-danger'}`}>
                    {s.returnPct >= 0 ? '+' : ''}{s.returnPct}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
