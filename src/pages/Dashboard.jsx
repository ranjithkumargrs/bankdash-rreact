import { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, ResponsiveContainer, Tooltip,
  PieChart, Pie, Cell, AreaChart, Area,
} from 'recharts'
import { ArrowDownLeft, ArrowUpRight, Send, ChevronRight } from 'lucide-react'
import BankCard from '../components/BankCard'
import {
  cards, recentTransactions, weeklyActivity, expenseStatistics,
  quickTransfer, balanceHistory,
} from '../data/mockData'
import { endpoints } from '../api/client'

export default function Dashboard() {
  const [amount, setAmount] = useState('525.50')
  const [activeContact, setActiveContact] = useState(quickTransfer[0].id)

  useEffect(() => {
    // Wire this up to your real backend; falls back to mock data on failure.
    endpoints.getDashboard().catch(() => {})
  }, [])

  const handleSend = () => {
    const contact = quickTransfer.find((c) => c.id === activeContact)
    alert(`Sent $${amount} to ${contact?.name}`)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* My Cards */}
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-navy">My Cards</h2>
            <button className="text-sm text-primary font-medium">See All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BankCard card={cards[0]} />
            <BankCard card={cards[1]} />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-navy">Recent Transaction</h2>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((t) => (
              <div key={t.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                    {t.amount < 0 ? <ArrowUpRight size={16} /> : <ArrowDownLeft size={16} />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">{t.name}</p>
                    <p className="text-xs text-muted">{t.date}</p>
                  </div>
                </div>
                <p className={`text-sm font-semibold ${t.amount < 0 ? 'text-danger' : 'text-success'}`}>
                  {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Activity */}
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-navy">Weekly Activity</h2>
            <div className="flex items-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" /> Deposit</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-pink-400 inline-block" /> Withdraw</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={weeklyActivity} barGap={6}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#A3AED0' }} />
              <Tooltip cursor={{ fill: 'rgba(45,96,255,0.05)' }} />
              <Bar dataKey="deposit" fill="#2D60FF" radius={[6, 6, 6, 6]} barSize={10} />
              <Bar dataKey="withdraw" fill="#FF56A8" radius={[6, 6, 6, 6]} barSize={10} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Expense Statistics */}
        <div className="card">
          <h2 className="font-bold text-navy mb-4">Expense Statistics</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={expenseStatistics}
                dataKey="value"
                nameKey="name"
                innerRadius={0}
                outerRadius={90}
                paddingAngle={2}
              >
                {expenseStatistics.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="white" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Transfer */}
        <div className="card">
          <h2 className="font-bold text-navy mb-4">Quick Transfer</h2>
          <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-1">
            {quickTransfer.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveContact(c.id)}
                className="flex flex-col items-center gap-1.5 shrink-0"
              >
                <img
                  src={c.avatar}
                  alt={c.name}
                  className={`w-14 h-14 rounded-full object-cover ${activeContact === c.id ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                />
                <p className="text-xs font-semibold text-navy whitespace-nowrap">{c.name}</p>
                <p className="text-[11px] text-muted -mt-1">{c.role}</p>
              </button>
            ))}
            <button className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs text-muted whitespace-nowrap">Write Amount</p>
            <div className="flex-1 flex items-center bg-slate-50 rounded-full px-4 py-2">
              <span className="text-sm text-navy">$</span>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent outline-none text-sm w-full ml-1"
              />
            </div>
            <button
              onClick={handleSend}
              className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-primary-dark transition-colors"
            >
              Send <Send size={14} />
            </button>
          </div>
        </div>

        {/* Balance History */}
        <div className="lg:col-span-2 card">
          <h2 className="font-bold text-navy mb-4">Balance History</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={balanceHistory}>
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2D60FF" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#2D60FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#A3AED0' }} />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#2D60FF" strokeWidth={2} fill="url(#balanceGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
