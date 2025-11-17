import { motion } from 'framer-motion'
import { Shield, Zap, BarChart3, Wallet } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Institutional Security',
    desc: 'Multi-layer security with cold storage and 24/7 monitoring.',
  },
  {
    icon: Zap,
    title: 'Blazing Fast',
    desc: 'Low-latency order execution and lightning-fast APIs.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    desc: 'Real-time charts, order books, and on-chain metrics.',
  },
  {
    icon: Wallet,
    title: 'Multi-Chain Wallet',
    desc: 'Manage assets across chains with one secure key.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Why choose Nebula</h2>
          <p className="mt-3 text-white/70">Engineered for speed, security, and clarity so you can focus on your edge.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
