import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl py-16 sm:py-24"
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

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-3 py-2 shadow-sm">
              <CalendarDays size={16} className="text-blue-600" />
              <span>Finale: Jan 17–18, 2025</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-3 py-2 shadow-sm">
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
    </section>
  );
}
