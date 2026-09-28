import { useState } from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts'
import { ArrowUpRight, ArrowDownLeft, Plus } from 'lucide-react'
import BankCard from '../components/BankCard'
import { cards, allTransactions, myExpense } from '../data/mockData'

const tabs = ['All Transactions', 'Income', 'Expense']

export default function Transactions() {
  const [activeTab, setActiveTab] = useState('All Transactions')
  const [page, setPage] = useState(1)

  const filtered = allTransactions.filter((t) => {
    if (activeTab === 'Income') return t.amount > 0
    if (activeTab === 'Expense') return t.amount < 0
    return true
  })

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-navy">My Cards</h2>
            <button className="text-sm text-primary font-medium flex items-center gap-1">
              <Plus size={14} /> Add Card
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BankCard card={cards[0]} />
            <BankCard card={cards[1]} />
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-navy mb-4">My Expense</h2>
          <p className="text-xl font-bold text-navy mb-2">$12,500</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={myExpense}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#A3AED0' }} />
              <Tooltip />
              <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={22}>
                {myExpense.map((entry, i) => (
                  <Cell key={i} fill={entry.month === 'Dec' ? '#00C2A8' : '#E3E9FF'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h2 className="font-bold text-navy mb-4">Recent Transactions</h2>
        <div className="flex gap-6 border-b border-slate-100 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-slate-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="text-left text-muted text-xs uppercase">
                <th className="pb-3 font-medium">Description</th>
                <th className="pb-3 font-medium">Transaction ID</th>
                <th className="pb-3 font-medium">Type</th>
                <th className="pb-3 font-medium">Card</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Receipt</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t, i) => (
                <tr key={i} className="border-t border-slate-50">
                  <td className="py-3 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                      {t.direction === 'up' ? <ArrowUpRight size={13} /> : <ArrowDownLeft size={13} />}
                    </span>
                    <span className="font-medium text-navy">{t.description}</span>
                  </td>
                  <td className="text-muted">{t.id}</td>
                  <td className="text-navy">{t.type}</td>
                  <td className="text-navy">{t.card}</td>
                  <td className="text-muted">{t.date}</td>
                  <td className={t.amount < 0 ? 'text-danger font-medium' : 'text-success font-medium'}>
                    {t.amount < 0 ? '-' : '+'}${Math.abs(t.amount).toLocaleString()}
                  </td>
                  <td>
                    <button className="border border-primary text-primary text-xs px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end items-center gap-2 mt-4 text-sm">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="text-muted disabled:opacity-40"
          >
            &lt; Previous
          </button>
          {[1, 2, 3, 4].map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-7 h-7 rounded-full flex items-center justify-center ${
                page === n ? 'bg-primary text-white' : 'text-navy hover:bg-slate-100'
              }`}
            >
              {n}
            </button>
          ))}
          <button onClick={() => setPage((p) => Math.min(4, p + 1))} className="text-muted">
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
