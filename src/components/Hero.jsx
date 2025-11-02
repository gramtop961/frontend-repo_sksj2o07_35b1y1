import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin, Send, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full pt-16 overflow-hidden">
      {/* Full-bleed Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soften and improve text contrast while keeping interactions available */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-white/80" />
      </div>

      {/* Large decorative illustrations (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-400/40 via-cyan-300/30 to-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-rose-400/40 via-amber-300/30 to-yellow-300/20 blur-3xl" />

        {/* Floating paper planes & sparkles */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: -10, opacity: 0.9 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute left-[6%] top-[22%] text-white/90 drop-shadow-xl"
        >
          <Send size={42} className="rotate-12" />
        </motion.div>
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 12, opacity: 0.9 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute right-[8%] top-[18%] text-white/90 drop-shadow-xl"
        >
          <Send size={56} className="-rotate-6" />
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: -10, opacity: 0.9 }}
          transition={{ duration: 2.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute right-[14%] bottom-[18%] text-white/90 drop-shadow-xl"
        >
          <Sparkles size={40} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl rounded-2xl bg-white/80 backdrop-blur-md p-6 sm:p-8 shadow-md"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-green-400 px-3 py-1 text-xs font-semibold text-white shadow">
              Empowering youth to be changemakers.
            </span>

            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Build for Rural India
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl">
              Join India’s most innovative hackathon to build solutions for rural transformation.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-700">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-2 shadow-sm">
                <CalendarDays size={16} className="text-blue-600" />
                <span>Finale: Jan 17–18, 2025</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-2 shadow-sm">
                <MapPin size={16} className="text-rose-600" />
                <span>IIT Delhi</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#register"
                className="rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              >
                Apply Now <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="rounded-full bg-white/90 px-6 py-3 font-semibold text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
