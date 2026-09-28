import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import BankCard from '../components/BankCard'
import StatCard from '../components/StatCard'
import {
  accountsSummary, lastTransactions, cards, debitCreditOverview, invoicesSent,
} from '../data/mockData'

const icons = { wallet: '💰', income: '📥', expense: '📤', saving: '🐷' }

export default function Accounts() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {accountsSummary.map((s) => (
          <StatCard key={s.label} label={s.label} value={`$${s.value.toLocaleString()}`} icon={icons[s.icon]} bg={s.bg} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <h2 className="font-bold text-navy mb-4">Last Transaction</h2>
          <div className="space-y-4">
            {lastTransactions.map((t) => (
              <div key={t.id} className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3 min-w-[200px]">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">🔄</div>
                  <div>
                    <p className="text-sm font-medium text-navy">{t.name}</p>
                    <p className="text-xs text-muted">{t.date}</p>
                  </div>
                </div>
                <span className="text-xs text-navy w-20">{t.type}</span>
                <span className="text-xs text-muted w-16">{t.card}</span>
                <span className={`text-xs w-20 ${t.status === 'Pending' ? 'text-amber-500' : 'text-success'}`}>{t.status}</span>
                <span className={`text-sm font-semibold ${t.amount < 0 ? 'text-danger' : 'text-success'}`}>
                  {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-navy">My Card</h2>
            <button className="text-sm text-primary font-medium">See All</button>
          </div>
          <BankCard card={cards[0]} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <h2 className="font-bold text-navy">Debit & Credit Overview</h2>
            <p className="text-xs text-muted">
              <span className="text-navy font-medium">$7,560</span> Debited &amp;{' '}
              <span className="text-navy font-medium">$5,420</span> Credited in this Week
            </p>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={debitCreditOverview} barGap={6}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#A3AED0' }} />
              <Tooltip cursor={{ fill: 'rgba(45,96,255,0.05)' }} />
              <Bar dataKey="debit" fill="#2D60FF" radius={[6, 6, 6, 6]} barSize={12} />
              <Bar dataKey="credit" fill="#FFB547" radius={[6, 6, 6, 6]} barSize={12} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h2 className="font-bold text-navy mb-4">Invoices Sent</h2>
          <div className="space-y-4">
            {invoicesSent.map((inv) => (
              <div key={inv.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-lg">
                    {inv.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy">{inv.name}</p>
                    <p className="text-xs text-muted">{inv.time}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-navy">${inv.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
