export default function Footer() {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
        <div>
          <h4 className="text-white font-semibold">Nebula Crypto</h4>
          <p className="mt-3 text-sm">A futuristic platform for trading, earning, and managing digital assets with style.</p>
        </div>
        <div>
          <h5 className="text-white font-medium">Products</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Spot Trading</li>
            <li>Derivatives</li>
            <li>Earn</li>
            <li>Wallet</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium">Company</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-medium">Legal</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs">© {new Date().getFullYear()} Nebula Crypto. All rights reserved.</div>
    </footer>
  )
}
