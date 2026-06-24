import { Check, Flame, Hammer, Search, ShieldAlert, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  icon: React.ReactNode;
  image: string;
  desc: string;
  checks: string[];
}

const STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Device Inspection',
    icon: <Search className="w-5 h-5 text-brand-blue" />,
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400',
    desc: 'Unpacking your GPU or PC in an anti-static clean zone. We log cosmetic conditions, verify physical damage or prior repair attempts under high-magnification lenses.',
    checks: [
      'High-res macro photography log',
      'Corrosion/Liquid damage audit',
      'PCIe rail impedance testing',
      'ESD registration check-in'
    ]
  },
  {
    number: '02',
    title: 'Precision Diagnosis',
    icon: <ShieldAlert className="w-5 h-5 text-brand-blue" />,
    image:
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=400',
    desc: 'Using advanced multi-meters, oscilloscopes, and thermal imaging cameras, we power-sequence your card to track down micro-shortages and identify failing power phases.',
    checks: [
      'Thermal imaging heat map logs',
      'Power sequencing validation',
      'Clock signal checking',
      'Component-level fault isolation'
    ]
  },
  {
    number: '03',
    title: 'Solder & Core Repair',
    icon: <Hammer className="w-5 h-5 text-brand-blue" />,
    image:
      'https://images.unsplash.com/photo-1597872200319-3367cd24174b?auto=format&fit=crop&q=80&w=400',
    desc: 'BGA rework under microscope. We desolder and replace blown power stages, cracked VRAM chips, or re-ball main silicon cores using premium alloys and infrared heating.',
    checks: [
      'Microscopic solder joints rework',
      'BGA chip thermal profile run',
      'UV solder-mask curing',
      'VRAM memory chip swapping'
    ]
  },
  {
    number: '04',
    title: 'Extreme Stress Testing',
    icon: <Flame className="w-5 h-5 text-brand-blue" />,
    image:
      'https://images.unsplash.com/photo-1587202372430-612196025195?auto=format&fit=crop&q=80&w=400',
    desc: 'We clean the heatsinks, apply premium Thermal Grizzly paste/pads, and run intense FurMark, TimeSpy, and PortRoyal looping benchmarks for 12 hours straight.',
    checks: [
      '12-hour continuous burn-in load',
      'VRAM thermal pad temperature log',
      'Fan curve optimization profile',
      'FPS stability validation'
    ]
  },
  {
    number: '05',
    title: 'Premium Delivery',
    icon: <Truck className="w-5 h-5 text-emerald-400" />,
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=400',
    desc: 'Your card is wrapped in moisture-barrier anti-static bags, boxed securely, and shipped back with tracking, or ready for instant, certified local pickup.',
    checks: [
      'ESD protective shield bagging',
      'Heavy foam padded packaging',
      'Signature direct shipping track',
      'Official 1-Year Warranty slip'
    ]
  }
];

export default function RepairProcessTimeline() {
  return (
    <section
      id="process"
      className="py-24 bg-dark-bg/95 border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow lines */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
            OUR PROTOCOL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            The Certified 5-Step <br />
            <span className="text-brand-blue font-extrabold">
              Repair & Stress Process
            </span>
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            We document everything. From the second your device lands in our
            lab, it undergoes our standardized engineering flow to guarantee
            success.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative flex flex-col gap-12 sm:gap-16">
          {/* Vertical connecting line */}
          <div className="absolute left-[30px] md:left-1/2 top-10 bottom-10 w-0.5 bg-brand-blue/20 -translate-x-1/2" />

          {STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative gap-6 md:gap-0 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Connector Dot */}
                <div className="absolute left-[30px] md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                  <div className="w-10 h-10 rounded-full bg-dark-bg border border-brand-blue flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-brand-blue">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content Panel (Left/Right side of line - 45% width) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-[44%] pl-14 md:pl-0 flex flex-col text-left"
                >
                  <div className="p-6 sm:p-8 rounded-3xl bg-dark-card border border-white/5 hover:border-brand-blue/30 shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-blue group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all duration-300">
                        {step.icon}
                      </div>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                      {step.desc}
                    </p>

                    <div className="border-t border-white/5 pt-4">
                      <span className="font-mono text-[9px] font-bold text-brand-blue tracking-widest uppercase block mb-3">
                        COMPLIANCE DELIVERABLES
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.checks.map((check, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-gray-300"
                          >
                            <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{check}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Visual Image Card on the alternate side of the line - 44% width */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                  className="w-full md:w-[44%] pl-14 md:pl-0 hidden sm:block"
                >
                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10] relative group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 font-mono text-[10px] text-brand-blue font-bold tracking-widest uppercase">
                      PHASE {step.number} ACTIVE OPERATIONS
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
