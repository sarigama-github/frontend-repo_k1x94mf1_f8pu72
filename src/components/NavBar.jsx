import React from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Menu } from 'lucide-react'

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.05 }}
      className="relative z-20 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/30 backdrop-blur border border-white/40 flex items-center justify-center shadow-sm">
            <CreditCard className="h-5 w-5 text-slate-800" />
          </div>
          <span className="text-slate-900 font-semibold tracking-tight">Blue Wallet</span>
        </div>
        <button className="h-10 w-10 rounded-xl bg-white/30 backdrop-blur border border-white/40 flex items-center justify-center text-slate-800">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </motion.nav>
  )
}

export default NavBar
