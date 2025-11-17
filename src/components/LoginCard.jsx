import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, Eye, EyeOff, Fingerprint } from 'lucide-react'

const inputBase = 'w-full bg-white/70 backdrop-blur-md border border-white/40 focus:border-indigo-400/60 text-gray-800 placeholder-gray-500 rounded-xl px-4 py-3 outline-none transition-colors'

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate login delay
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    alert(`Logged in as ${email || 'user'} (demo)`)
  }

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
      className="relative z-10 max-w-md w-full"
    >
      {/* Glassmorphic card */}
      <div className="relative rounded-3xl p-8 md:p-10 bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_10px_50px_-15px_rgba(30,41,59,0.35)]">
        {/* Subtle inner highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 100%)'
        }} />

        <div className="relative space-y-8">
          <div className="text-center space-y-3">
            <div className="mx-auto h-12 w-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Fingerprint className="h-6 w-6 text-indigo-500" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-800">
              Welcome back
            </h1>
            <p className="text-slate-600 text-sm">Secure access to your digital wallet</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Mail className="h-4 w-4"/> Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@bank.app"
                className={inputBase}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Lock className="h-4 w-4"/> Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={inputBase + ' pr-12'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-white/60"
                >
                  {showPassword ? <EyeOff className="h-5 w-5"/> : <Eye className="h-5 w-5"/>}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white font-semibold py-3 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-shadow disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-600">
            New here? <button className="font-medium text-indigo-600 hover:text-indigo-700">Create an account</button>
          </p>
        </div>
      </div>

      {/* Glow accents */}
      <div className="pointer-events-none absolute -inset-6 -z-0">
        <div className="absolute -inset-16 opacity-40 blur-3xl bg-gradient-to-tr from-indigo-500/30 via-cyan-500/20 to-fuchsia-500/30 rounded-[36px]" />
      </div>
    </motion.div>
  )
}

export default LoginCard
