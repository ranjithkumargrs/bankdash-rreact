import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import BankCard from '../components/BankCard'
import { cards, cardExpenseStats, cardList, cardSettings } from '../data/mockData'

export default function CreditCards() {
  const [form, setForm] = useState({
    cardType: 'Classic',
    nameOnCard: 'My Cards',
    cardNumber: '',
    expiration: '25 January 2025',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Card added (demo only — wire this up to your backend endpoint).')
  }

  return (
    <div className="space-y-6">
      <div className="card">
        <h2 className="font-bold text-navy mb-4">My Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <BankCard card={cards[0]} />
          <BankCard card={cards[1]} />
          <BankCard card={cards[2]} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-bold text-navy mb-4">Card Expense Statistics</h2>
          <div className="flex items-center gap-6 flex-wrap">
            <ResponsiveContainer width={180} height={180}>
              <PieChart>
                <Pie data={cardExpenseStats} dataKey="value" innerRadius={55} outerRadius={85} paddingAngle={3}>
                  {cardExpenseStats.map((entry, i) => (
                    <Cell key={i} fill={entry.color} stroke="white" strokeWidth={2} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {cardExpenseStats.map((s) => (
                <div key={s.name} className="flex items-center gap-2 text-xs text-navy">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="font-bold text-navy mb-4">Card List</h2>
          <div className="space-y-4">
            {cardList.map((c) => (
              <div key={c.id} className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: c.bg }}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted">Card Type</p>
                    <p className="text-sm font-medium text-navy">{c.type}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted">Bank</p>
                  <p className="text-sm text-navy">{c.bank}</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Card Number</p>
                  <p className="text-sm text-navy">{c.number}</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Namain Card</p>
                  <p className="text-sm text-navy">{c.name}</p>
                </div>
                <button className="text-primary text-xs font-medium">View Details</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="card">
          <h2 className="font-bold text-navy mb-1">Add New Card</h2>
          <p className="text-xs text-muted mb-4 leading-relaxed">
            Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder,
            with a credit limit, that can be used to purchase goods and services or withdraw cash in advance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-muted block mb-1">Card Type</label>
              <input name="cardType" value={form.cardType} onChange={handleChange}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-primary" />
            </div>
            <div>
              <label className="text-xs text-muted block mb-1">Name On Card</label>
              <input name="nameOnCard" value={form.nameOnCard} onChange={handleChange}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-primary" />
            </div>
            <div>
              <label className="text-xs text-muted block mb-1">Card Number</label>
              <input name="cardNumber" value={form.cardNumber} onChange={handleChange}
                placeholder="**** **** **** ****"
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-primary" />
            </div>
            <div>
              <label className="text-xs text-muted block mb-1">Expiration Date</label>
              <input name="expiration" value={form.expiration} onChange={handleChange}
                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm outline-primary" />
            </div>
          </div>
          <button type="submit" className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
            Add Card
          </button>
        </form>

        <div className="card">
          <h2 className="font-bold text-navy mb-4">Card Setting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cardSettings.map((s) => (
              <button key={s.id} className="flex items-center gap-3 text-left hover:bg-slate-50 rounded-xl p-2 transition-colors">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0" style={{ backgroundColor: s.bg }}>
                  {s.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">{s.label}</p>
                  <p className="text-xs text-muted">{s.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
