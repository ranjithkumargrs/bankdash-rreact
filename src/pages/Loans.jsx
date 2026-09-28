import { User, Briefcase, BarChart3, Wrench } from 'lucide-react'
import { loanTypes, activeLoans } from '../data/mockData'

const icons = { person: User, briefcase: Briefcase, chart: BarChart3, tool: Wrench }

export default function Loans() {
  const totalMoney = activeLoans.reduce((sum, l) => sum + l.money, 0)
  const totalLeft = activeLoans.reduce((sum, l) => sum + l.left, 0)

  const handleRepay = (sl) => alert(`Repay loan #${sl} — connect this to your payments API.`)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {loanTypes.map((l) => {
          const Icon = icons[l.icon]
          return (
            <div key={l.id} className="card flex items-center gap-4 flex-1 min-w-[200px]">
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: l.bg }}>
                <Icon size={18} className="text-navy" />
              </div>
              <div>
                <p className="text-xs text-primary mb-1">{l.label}</p>
                <p className="text-lg font-bold text-navy">{l.value}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="card">
        <h2 className="font-bold text-navy mb-4">Active Loans Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="text-left text-muted text-xs uppercase">
                <th className="pb-3 font-medium">SL No</th>
                <th className="pb-3 font-medium">Loan Money</th>
                <th className="pb-3 font-medium">Left to repay</th>
                <th className="pb-3 font-medium">Duration</th>
                <th className="pb-3 font-medium">Interest rate</th>
                <th className="pb-3 font-medium">Installment</th>
                <th className="pb-3 font-medium">Repay</th>
              </tr>
            </thead>
            <tbody>
              {activeLoans.map((l) => (
                <tr key={l.sl} className="border-t border-slate-50">
                  <td className="py-3 text-navy">{l.sl}</td>
                  <td className="py-3 text-navy">${l.money.toLocaleString()}</td>
                  <td className="py-3 text-navy">${l.left.toLocaleString()}</td>
                  <td className="py-3 text-navy">{l.duration}</td>
                  <td className="py-3 text-navy">{l.rate}</td>
                  <td className="py-3 text-navy">{l.installment}</td>
                  <td className="py-3">
                    <button
                      onClick={() => handleRepay(l.sl)}
                      className="border border-primary text-primary text-xs px-4 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      Repay
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="border-t border-slate-100 font-semibold text-danger">
                <td className="py-3"></td>
                <td className="py-3">${totalMoney.toLocaleString()}</td>
                <td className="py-3">${totalLeft.toLocaleString()}</td>
                <td className="py-3"></td>
                <td className="py-3"></td>
                <td className="py-3">$50,000 / month</td>
                <td className="py-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
