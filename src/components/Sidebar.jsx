import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, ArrowLeftRight, User, LineChart, CreditCard,
  HandCoins, Wrench, Gem, Settings, Landmark,
} from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/transactions', label: 'Transactions', icon: ArrowLeftRight },
  { to: '/accounts', label: 'Accounts', icon: User },
  { to: '/investments', label: 'Investments', icon: LineChart },
  { to: '/credit-cards', label: 'Credit Cards', icon: CreditCard },
  { to: '/loans', label: 'Loans', icon: HandCoins },
  { to: '/services', label: 'Services', icon: Wrench },
  { to: '/privileges', label: 'My Privileges', icon: Gem },
  { to: '/settings', label: 'Setting', icon: Settings },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      <motion.aside
        initial={false}
        animate={{ x: 0 }}
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-slate-100 z-40
          flex flex-col py-6 px-4 transition-transform duration-300 shrink-0
          ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white">
            <Landmark size={18} />
          </div>
          <span className="text-lg font-bold text-navy">BankDash.</span>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </motion.aside>
    </>
  )
}
