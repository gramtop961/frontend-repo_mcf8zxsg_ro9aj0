import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Markets from './pages/Markets'
import Products from './pages/Products'
import Learn from './pages/Learn'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/products" element={<Products />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
