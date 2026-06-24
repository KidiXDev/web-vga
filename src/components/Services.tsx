import {
  ArrowUpRight,
  CheckCircle2,
  CircleDollarSign,
  Clock,
  Phone,
  Shield,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { SERVICES } from '../data';
import type { Service } from '../types';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="py-24 bg-dark-bg relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-blue/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
            WHAT WE DO
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Elite Repair Services & <br />
            <span className="text-brand-blue">Component Engineering</span>
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            We don't do quick "temporary" fixes. We deploy microscopic imaging,
            diagnostic heat chambers, and BGA engineering to restore hardware to
            factory-new standards.
          </p>
        </div>

        {/* Services Grid with Large Photographic Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl glass-panel-hover"
            >
              {/* Cinematic Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none brightness-75"
                referrerPolicy="no-referrer"
              />

              {/* Premium Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/20 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-transparent group-hover:border-brand-blue/30 rounded-2xl transition-all duration-300" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Micro details row */}
                <div className="flex justify-between items-center mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-[10px] font-bold text-brand-blue tracking-widest uppercase bg-brand-blue/10 border border-brand-blue/20 px-2 py-0.5 rounded">
                    FROM {service.basePrice}
                  </span>
                  <span className="font-mono text-[10px] text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-blue" />{' '}
                    {service.turnaround}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-brand-blue transition-colors duration-300 flex items-center justify-between gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </h3>

                {/* Description (visible on hover or mobile) */}
                <p className="text-gray-300 text-sm mt-2 line-clamp-2 md:line-clamp-1 group-hover:line-clamp-3 transition-all duration-500 font-sans leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Micro border element at card bottom */}
                <div className="w-0 h-[3px] bg-brand-blue absolute bottom-0 left-0 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Interactive Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              {/* Header banner style */}
              <div className="relative h-64 sm:h-72 w-full">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover brightness-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-card via-dark-card/45 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-brand-blue/20 border border-white/10 hover:border-brand-blue/30 text-white transition-all duration-200 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase bg-brand-blue/10 border border-brand-blue/25 px-3 py-1 rounded-full backdrop-blur-md mb-3 inline-block">
                    PREMIUM HARDWARE LAB
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 sm:p-8 bg-dark-card text-left grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left col: description and list */}
                <div className="md:col-span-7 flex flex-col gap-6">
                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-2">
                      SERVICE SUMMARY
                    </h4>
                    <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] font-bold text-gray-400 tracking-wider uppercase mb-3">
                      CERTIFIED WORKFLOW HIGHLIGHTS
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedService.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right col: quick billing & booking info */}
                <div className="md:col-span-5 flex flex-col justify-between gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-mono text-xs font-bold text-gray-300 tracking-wider border-b border-white/10 pb-2">
                      ESTIMATE DETAILS
                    </h4>

                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-brand-blue/10 border border-brand-blue/20">
                        <CircleDollarSign className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-mono">
                          BASE PRICE
                        </span>
                        <span className="font-display font-bold text-lg text-white">
                          From {selectedService.basePrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                        <Clock className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-mono">
                          TURNAROUND
                        </span>
                        <span className="font-display font-bold text-sm text-white">
                          {selectedService.turnaround}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <Shield className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-mono">
                          WARRANTY
                        </span>
                        <span className="font-display font-bold text-sm text-white">
                          1-Year Guarantee Included
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onBookService(selectedService.title);
                      setSelectedService(null);
                    }}
                    className="w-full py-3 bg-brand-blue hover:bg-brand-blue/90 text-neutral-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Book This Service
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
