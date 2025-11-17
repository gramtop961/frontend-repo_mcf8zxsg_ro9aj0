import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const pairs = [
  { pair: 'BTC/USDT', price: '67,420.15', change: '+2.1%' },
  { pair: 'ETH/USDT', price: '3,245.90', change: '+1.4%' },
  { pair: 'SOL/USDT', price: '152.33', change: '-0.6%' },
  { pair: 'AVAX/USDT', price: '45.28', change: '+3.2%' },
  { pair: 'DOGE/USDT', price: '0.1582', change: '+5.7%' },
]

export default function Markets() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-24 mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Markets</h1>
          <p className="text-white/70 mt-2">Live prices, trends, and heatmaps across the crypto universe.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map((p, i) => (
            <motion.div
              key={p.pair}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">{p.pair}</h3>
                <span className={`text-sm ${p.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{p.change}</span>
              </div>
              <div className="mt-2 text-2xl font-bold">${p.price}</div>
              <div className="mt-4 h-16 w-full rounded-md bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-amber-500/20" />
            </motion.div>
          ))}
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
