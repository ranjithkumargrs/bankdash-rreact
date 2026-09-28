import { motion } from 'framer-motion'

const variants = {
  dark: 'bg-gradient-to-br from-[#1B2A6B] via-[#2D3FA0] to-[#3B4FD9] text-white',
  light: 'bg-gradient-to-br from-[#3B4FD9] via-[#5B6FF0] to-[#7C8CFF] text-white',
  outline: 'bg-white text-navy border border-slate-100',
}

export default function BankCard({ card, showToggle = true }) {
  const style = variants[card.variant] || variants.dark
  const isOutline = card.variant === 'outline'

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-2xl p-5 w-full min-w-[220px] shadow-card relative overflow-hidden ${style}`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className={`text-xs mb-1 ${isOutline ? 'text-slate-400' : 'text-white/70'}`}>Balance</p>
          <p className="text-xl font-bold">${card.balance.toLocaleString()}</p>
        </div>
        <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
          <circle cx="9" cy="10" r="9" fill={isOutline ? '#E2E8F0' : 'rgba(255,255,255,0.35)'} />
          <circle cx="19" cy="10" r="9" fill={isOutline ? '#CBD5E1' : 'rgba(255,255,255,0.6)'} />
        </svg>
      </div>

      <div className="flex justify-between text-xs mb-4">
        <div>
          <p className={isOutline ? 'text-slate-400' : 'text-white/60'}>CARD HOLDER</p>
          <p className="font-medium mt-0.5">{card.holder}</p>
        </div>
        <div>
          <p className={isOutline ? 'text-slate-400' : 'text-white/60'}>VALID THRU</p>
          <p className="font-medium mt-0.5">{card.validThru}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="tracking-widest font-medium text-sm">{card.number}</p>
        {showToggle && (
          <div className={`w-9 h-5 rounded-full flex items-center px-0.5 ${isOutline ? 'bg-slate-200' : 'bg-white/30'}`}>
            <div className={`w-4 h-4 rounded-full ${isOutline ? 'bg-slate-400' : 'bg-white'}`} />
          </div>
        )}
      </div>
    </motion.div>
  )
}
