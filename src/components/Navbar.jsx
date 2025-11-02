import { useEffect, useState } from 'react';
import { Download, Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/75 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 grid place-items-center text-white shadow-md">
            <Rocket size={18} />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Build for Rural India</p>
            <p className="text-xs text-gray-500">by TOH × Ashoka</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#register"
            className="rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Register Now
          </a>
          <a
            href="#brochure"
            className="rounded-full border border-gray-300 bg-white text-gray-900 px-4 py-2 text-sm font-medium hover:border-gray-400 transition-colors flex items-center gap-2"
          >
            <Download size={16} /> Download Brochure
          </a>
        </div>
      </nav>
    </header>
  );
}
