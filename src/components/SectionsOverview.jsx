import { motion } from 'framer-motion';
import {
  Sprout,
  HeartPulse,
  GraduationCap,
  Sun,
  Wifi,
  Users,
  Trophy,
  Train,
  Building2,
  Clock,
  ChevronRight,
  FileDown,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionsOverview() {
  return (
    <div className="relative">
      {/* About */}
      <section id="about" className="relative py-16 sm:py-24 bg-white">
        <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-sky-50 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">About the Hackathon</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Build for Rural India is a youth-first innovation challenge by TOH and Ashoka to inspire
              student teams to design and prototype bold solutions for rural transformation. We bring
              together mentorship, resources, and a collaborative community so you can turn ideas into
              real impact.
            </p>
            <p className="mt-3 text-gray-700 leading-relaxed">
              If you are a builder, designer, or changemaker who cares about agriculture, education,
              health, sustainability, or digital inclusion — this is for you.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#register" className="rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                Register Now <ChevronRight size={18} />
              </a>
              <a href="#brochure" className="rounded-full bg-white px-6 py-3 font-semibold text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors inline-flex items-center gap-2">
                <FileDown size={18} /> Download Brochure
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-blue-100 via-sky-100 to-green-100 p-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop" alt="Students brainstorming" className="rounded-xl w-full h-40 object-cover" />
              <p className="mt-3 text-sm text-gray-700">Young innovators co-creating solutions</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-amber-100 via-yellow-100 to-rose-100 p-4 shadow-sm">
              <img src="https://images.unsplash.com/photo-1759884247144-53d52c31f859?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYWNrYXRob24lMjBjb2xsYWJvcmF0aW9ufGVufDB8MHx8fDE3NjIwODM1NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hackathon collaboration" className="rounded-xl w-full h-40 object-cover" />
              <p className="mt-3 text-sm text-gray-700">Hands-on mentoring and team sprints</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-sky-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Choose Your Innovation Track
          </motion.h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Sprout, title: 'Agriculture & Rural Economy', color: 'from-green-500 to-emerald-400' },
              { icon: HeartPulse, title: 'Health & Sanitation', color: 'from-rose-500 to-pink-500' },
              { icon: GraduationCap, title: 'Education', color: 'from-blue-600 to-sky-500' },
              { icon: Sun, title: 'Renewable Energy', color: 'from-amber-500 to-yellow-400' },
              { icon: Wifi, title: 'Digital Inclusion', color: 'from-violet-500 to-fuchsia-500' },
            ].map((t, i) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-2xl bg-white border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${t.color} text-white grid place-items-center shadow`}> 
                  <t.icon size={20} />
                </div>
                <h4 className="mt-3 font-semibold text-gray-900">{t.title}</h4>
                <p className="mt-1 text-sm text-gray-600">Build practical, scalable solutions for India’s grassroots.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Registration */}
      <section id="register" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Eligibility & Registration</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Participants: College students (ages 18–25)</li>
              <li>• Team size: 4 members from the same college</li>
              <li>• Multi-disciplinary teams encouraged</li>
            </ul>
            <a href="#register" className="mt-6 inline-flex rounded-full bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors items-center gap-2">
              Apply with Your Team <ChevronRight size={18} />
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Users className="text-sky-600" />
              <p className="font-semibold text-gray-900">Who should join?</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">Developers, designers, storytellers, and problem-solvers passionate about rural innovation.</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white p-4 border border-gray-100">
                <p className="font-medium text-gray-900">Benefits</p>
                <p className="mt-1 text-gray-600">Mentorship, workshops, resources, community.</p>
              </div>
              <div className="rounded-xl bg-white p-4 border border-gray-100">
                <p className="font-medium text-gray-900">Outcome</p>
                <p className="mt-1 text-gray-600">Demo-ready prototypes and real-world pilots.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Flow */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-sky-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl sm:text-3xl font-extrabold text-gray-900">Important Dates & Flow</motion.h3>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {[
              { step: 'Phase 1', title: 'Registration & Idea Submission' },
              { step: 'Phase 2', title: 'Online Design Sprint (Qualifier)' },
              { step: 'Phase 3', title: 'On-Ground Hackathon (IIT Delhi)' },
              { step: 'Phase 4', title: 'Final Pitching' },
            ].map((s, i) => (
              <motion.div key={s.step} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                <span className="text-xs font-semibold text-sky-600">{s.step}</span>
                <p className="mt-1 font-medium text-gray-900">{s.title}</p>
                <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 opacity-20" />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-600"><Clock size={16} className="text-blue-600" /> Jan 17: Opening Ceremony, Workshops, Hacking Begins</div>
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-600"><Clock size={16} className="text-rose-600" /> Jan 18: Final Submissions, Judging, Closing Ceremony</div>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm flex items-center gap-4">
              <Building2 className="text-gray-700" />
              <p className="text-sm text-gray-700">Venue: IIT Delhi • Travel reimbursement up to 3rd AC train fare <Train className="inline-block text-gray-500 ml-1" size={16} /></p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes & Perks */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl sm:text-3xl font-extrabold text-gray-900">Prizes & Perks</motion.h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400 text-white grid place-items-center shadow"><Trophy size={20} /></div>
              <h4 className="mt-3 font-semibold text-gray-900">Cash, Certificates, Mentorship</h4>
              <p className="mt-1 text-sm text-gray-600">Win cash prizes, get certified, and access mentors to scale your idea.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 to-sky-50 p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white grid place-items-center shadow"><Train size={20} /></div>
              <h4 className="mt-3 font-semibold text-gray-900">Travel Reimbursement</h4>
              <p className="mt-1 text-sm text-gray-600">Reimbursement up to 3rd AC train fare for shortlisted finalists.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-emerald-50 to-green-50 p-6 shadow-sm">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 text-white grid place-items-center shadow"><Users size={20} /></div>
              <h4 className="mt-3 font-semibold text-gray-900">Accommodation & 24×7 Support</h4>
              <p className="mt-1 text-sm text-gray-600">Stay, meals, Wi‑Fi workspaces, and round‑the‑clock mentor + logistics support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways / Stats */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-indigo-600 via-sky-600 to-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.blockquote variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-xl sm:text-2xl font-medium">
            “The future belongs to those who build. Let’s design for every village, every learner, every dream.”
          </motion.blockquote>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {[{ k: '500+', v: 'Teams' }, { k: '₹10L+', v: 'in rewards' }, { k: 'Nationwide', v: 'Participation' }].map((s) => (
              <motion.div key={s.k} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl bg-white/10 backdrop-blur p-6">
                <div className="text-3xl font-extrabold">{s.k}</div>
                <div className="text-sm opacity-90">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges & Mentors placeholder */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl sm:text-3xl font-extrabold text-gray-900">Judges & Mentors</motion.h3>
          <p className="mt-3 text-gray-600">Coming soon — a lineup of industry leaders, social entrepreneurs, and educators.</p>
        </div>
      </section>

      {/* Brochure anchor */}
      <section id="brochure" className="pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-900">
            <FileDown size={16} /> Download the full event brochure
          </a>
        </div>
      </section>
    </div>
  );
}
