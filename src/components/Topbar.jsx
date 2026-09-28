import { Search, Settings, Bell, Menu } from 'lucide-react'
import { user } from '../data/mockData'

export default function Topbar({ title, onMenuClick }) {
  return (
    <header className="flex items-center justify-between mb-6 gap-3 flex-wrap">
      <div className="flex items-center gap-3">
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-navy">{title}</h1>
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <div className="hidden md:flex items-center gap-2 bg-white rounded-full px-4 py-2 w-64 shadow-sm">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm w-full placeholder:text-slate-400"
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-slate-500 hover:text-primary">
          <Settings size={18} />
        </button>
        <button className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shadow-sm text-pink-400 hover:text-pink-500 relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-pink-500" />
        </button>
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
        />
      </div>
    </header>
  )
}
