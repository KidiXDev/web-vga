import { Cpu, Layers, Server } from 'lucide-react';
import { BRANDS } from '../data';

export default function Brands() {
  return (
    <section className="py-16 bg-dark-bg/95 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-10">
          <span className="font-mono text-[10px] font-bold text-gray-500 tracking-widest uppercase block mb-2">
            CAKUPAN KOMPONEN BERSERTIFIKAT
          </span>
          <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
            Produsen & Merek Board yang Didukung
          </h3>
        </div>

        {/* Brand Grid with glowing effects */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
          {BRANDS.map((brand, i) => (
            <div
              key={i}
              className="py-6 px-4 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-all duration-300 flex flex-col items-center justify-center gap-2 group cursor-default shadow-lg"
            >
              {/* Brand Icons/Typography */}
              <div className="p-1.5 rounded-lg bg-white/5 text-gray-400 group-hover:text-brand-blue group-hover:bg-brand-blue/10 transition-all duration-300">
                {brand.name === 'NVIDIA' || brand.name === 'AMD' ? (
                  <Cpu className="w-5 h-5" />
                ) : brand.name === 'ASUS' || brand.name === 'MSI' ? (
                  <Server className="w-5 h-5" />
                ) : (
                  <Layers className="w-5 h-5" />
                )}
              </div>

              <span className="font-display font-bold text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors">
                {brand.name}
              </span>

              <span className="font-mono text-[8px] text-gray-600 group-hover:text-brand-blue tracking-widest uppercase font-medium">
                {brand.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
