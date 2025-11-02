import { Instagram, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-semibold">Empowering youth to be changemakers.</p>
            <p className="mt-2 text-sm text-gray-400">Build for Rural India — jointly organized by TOH & Ashoka.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Links</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Travel Policy</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold">Contact</p>
            <p className="mt-2 text-sm text-gray-400">Email: hello@toh.org • partners@ashoka.org</p>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center"><Linkedin size={18} /></a>
              <a href="#" aria-label="Website" className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center"><Globe size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} TOH & Ashoka. All rights reserved.</div>
      </div>
    </footer>
  );
}
