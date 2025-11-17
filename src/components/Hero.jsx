import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast - pointer events disabled per Spline guidance */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/80"
        >
          Next-gen crypto platform
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight"
        >
          Trade. Earn. Build your digital future.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-white/80"
        >
          Secure, fast, and intuitive. Experience a holographic interface with real-time markets and institutional-grade tools.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#" className="rounded-lg bg-white text-black px-6 py-3 font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-90 transition">Get Started</a>
          <a href="#" className="rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10 transition">Explore Markets</a>
        </motion.div>
      </div>

      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute -bottom-40 left-10 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
    </section>
  )
}
