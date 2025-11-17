import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { LineChart, Layers3, Coins, ShieldCheck } from 'lucide-react'

const products = [
  { icon: LineChart, name: 'Spot & Margin', desc: 'Deep liquidity, low fees, and advanced order types.' },
  { icon: Layers3, name: 'Derivatives', desc: 'Perpetuals and futures with robust risk controls.' },
  { icon: Coins, name: 'Earn', desc: 'Stake, lend, and auto-compound across chains.' },
  { icon: ShieldCheck, name: 'Custody', desc: 'Institutional-grade cold storage and compliance.' },
]

export default function Products() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-24 mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Products</h1>
          <p className="text-white/70 mt-2">Powerful tools from trading to custody  designed for clarity and speed.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ icon: Icon, name, desc }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
