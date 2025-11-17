import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="pt-24 mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
          <p className="text-white/70 mt-2">We'd love to hear from you. Reach out for support, partnerships, or media.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-white/80">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 outline-none focus:border-cyan-400" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 outline-none focus:border-cyan-400" placeholder="jane@domain.com" />
              </div>
              <div>
                <label className="text-sm text-white/80">Message</label>
                <textarea rows="5" className="mt-1 w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 outline-none focus:border-cyan-400" placeholder="How can we help?" />
              </div>
              <button className="mt-2 rounded-lg bg-white text-black px-5 py-2 font-semibold hover:opacity-90">Send</button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="font-semibold">Headquarters</h3>
            <p className="mt-2 text-white/70 text-sm">123 Aurora Ave, Suite 500, San Francisco, CA</p>
            <h3 className="mt-6 font-semibold">Support</h3>
            <p className="mt-2 text-white/70 text-sm">support@nebula.xyz</p>
            <h3 className="mt-6 font-semibold">Press</h3>
            <p className="mt-2 text-white/70 text-sm">press@nebula.xyz</p>
          </motion.div>
        </div>
      </main>
      <div className="mt-16" />
      <Footer />
    </div>
  )
}
