import { Award, Coins, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const achievements = [
    {
      icon: <Coins className="w-6 h-6 text-brand-blue" />,
      title: '80% Average Savings',
      desc: 'Component-level solder repair (replacing a blown $2 capacitor) saves you from buying a new $1,200 board.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-blue" />,
      title: 'Certified BGA Reworkers',
      desc: 'Our senior soldering technicians hold IPC-7711/7721 micro-rework and circuit recovery credentials.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: '1-Year Full Warranty',
      desc: 'We guarantee our soldering joints, memory chip replacements, and components for 365 days.'
    }
  ];

  const standards = [
    {
      title: 'ESD SAFE GROUNDING',
      desc: 'Strict electrostatic discharge wristbands and mats protect sensitive logic boards.'
    },
    {
      title: 'NITROGEN ATOMIZATION',
      desc: 'Using specialized nitrogen gas soldering ovens prevents micro-voiding or oxidation.'
    },
    {
      title: 'ULTRASONIC WASHING',
      desc: 'Every board is fully submerged in customized de-ionized fluid baths to wash off burnt rosin flux.'
    }
  ];

  return (
    <section
      id="why-us"
      className="py-24 bg-dark-bg border-b border-white/5 relative overflow-hidden"
    >
      {/* Background circular glowing accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos and Graphic Grid (Left - 5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative">
            <div className="absolute inset-0 bg-brand-blue/3 blur-[80px] -z-10 rounded-full" />

            {/* Main high-res workshop image */}
            <div className="col-span-12 rounded-3xl overflow-hidden border border-white/10 relative aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800"
                alt="Elite Anti-Static Custom PC Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                Main ESD Assembly Lab
              </div>
            </div>

            {/* Second offset image (technician close-up) */}
            <div className="col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1597872200319-3367cd24174b?auto=format&fit=crop&q=80&w=600"
                alt="Soldering Graphics Card VRM Power Stages"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
            </div>

            {/* Micro statistic panel */}
            <div className="col-span-5 p-4 rounded-2xl bg-gradient-to-tr from-dark-card to-white/5 border border-white/10 flex flex-col justify-center items-center shadow-2xl">
              <span className="font-mono text-2xs text-brand-blue tracking-widest font-bold uppercase mb-1">
                SUCCESS RATE
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                98.4%
              </span>
              <span className="text-[10px] text-gray-500 font-medium text-center">
                On general board diagnostics
              </span>
            </div>
          </div>

          {/* Copy & Core Competencies (Right - 7 cols) */}
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
              WARRANTY & ASSURANCES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 animate-fadeIn">
              Why Desktop Enthusiasts <br />
              <span className="text-brand-blue">Trust AeroGPU Services</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed font-sans">
              Unlike big box retail stores that simply recommend replacing dead
              motherboards or throwing away crashed graphics cards, we dig deep.
              We isolate microvolt power drops on thermal tracks to restore your
              valuable physical cards.
            </p>

            {/* Achievements row */}
            <div className="flex flex-col gap-6 mb-10">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl shrink-0 h-fit">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-display font-bold text-base text-white">
                      {item.title}
                    </span>
                    <span className="text-sm text-gray-400 leading-normal font-sans">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Laboratory standard ticker */}
            <div className="border-t border-white/10 pt-6">
              <span className="font-mono text-2xs font-bold text-brand-blue tracking-wider uppercase block mb-4">
                STRICT LABORATORY STANDARDS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {standards.map((std, i) => (
                  <div key={i} className="flex flex-col text-left">
                    <span className="font-mono text-[10px] font-bold text-white tracking-wider mb-1">
                      // {std.title}
                    </span>
                    <span className="text-xs text-gray-500 font-sans leading-snug">
                      {std.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
