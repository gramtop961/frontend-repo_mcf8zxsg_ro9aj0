import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const articles = [
  { title: 'What is Blockchain?', tag: 'Basics' },
  { title: 'How to Keep Your Crypto Safe', tag: 'Security' },
  { title: 'Understanding Perpetual Futures', tag: 'Trading' },
  { title: 'What is Staking?', tag: 'Earn' },
]

export default function Learn() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-24 mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Learn</h1>
          <p className="text-white/70 mt-2">Clear guides to master crypto from zero to pro.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">{a.tag}</span>
              <h3 className="mt-4 text-xl font-semibold">{a.title}</h3>
              <p className="mt-2 text-white/70 text-sm">A short primer with visuals and examples to help you understand the core concepts.</p>
              <button className="mt-4 rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Read</button>
            </motion.article>
          ))}
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
