import { BadgeCheck, MessageSquareCode, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-blue/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
            KEBERHASILAN PELANGGAN
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Menyelamatkan Perangkat Keras <br />
            <span className="text-brand-blue font-extrabold">
              Dari Kuburan Elektronik
            </span>
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            Kami memperbaiki komponen yang ditolak garansinya oleh produsen resmi. Baca ulasan langsung dari insinyur deep learning, pengembang game, dan pencinta PC gaming.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl bg-dark-card border border-white/5 hover:border-brand-blue/20 shadow-2xl relative flex flex-col justify-between group transition-all duration-300"
            >
              {/* Subtle visual quotes indicator */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageSquareCode className="w-20 h-20 text-brand-blue" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial body */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6 font-sans">
                  "{t.text}"
                </p>
              </div>

              {/* Author & Repair details */}
              <div className="border-t border-white/5 pt-4 mt-4">
                {/* Repair category badge */}
                <div className="flex items-center gap-1.5 mb-3.5">
                  <BadgeCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {t.repairType}
                  </span>
                </div>

                {/* Profile card row */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-display font-bold text-sm text-white">
                      {t.name}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono font-medium">
                      {t.role} • {t.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
