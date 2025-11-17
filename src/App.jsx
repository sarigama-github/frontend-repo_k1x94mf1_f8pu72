import React from 'react'
import { motion } from 'framer-motion'
import Hero3D from './components/Hero3D'
import LoginCard from './components/LoginCard'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Hero3D />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-1 grid place-items-center px-4 py-10">
          <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
            {/* Headline */}
            <motion.div
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.15 }}
              className="relative text-slate-900"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Sign in to your digital wallet
              </h1>
              <p className="mt-4 text-slate-700 max-w-xl">
                A modern, secure way to manage your cards and crypto. 3D, glass, and motion — all in one elegant space.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-indigo-500/20 border border-indigo-500/40" />
                <div className="h-10 w-10 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/40" />
                <div className="h-10 w-10 rounded-full bg-cyan-500/20 border border-cyan-500/40" />
              </div>
            </motion.div>

            {/* Login Card */}
            <LoginCard />
          </div>
        </main>

        <footer className="relative z-10 px-4 pb-6">
          <div className="mx-auto max-w-7xl text-slate-700 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Blue Wallet. All rights reserved.
          </div>
        </footer>
      </div>

      {/* Ambient gradient curtain that doesn't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
    </div>
  )
}

export default App
