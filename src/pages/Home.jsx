import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeatureGrid from '../components/FeatureGrid'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  )
}
