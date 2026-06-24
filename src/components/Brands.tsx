import React from 'react';
import {
  SiAcer,
  SiAmd,
  SiAsus,
  SiCorsair,
  SiDell,
  SiIntel,
  SiLenovo,
  SiMsi,
  SiNvidia,
  SiRepublicofgamers,
  SiSony
} from 'react-icons/si';

const brandsRow1 = [
  { name: 'NVIDIA', icon: <SiNvidia className="w-12 h-12" /> },
  { name: 'AMD', icon: <SiAmd className="w-12 h-12" /> },
  { name: 'INTEL', icon: <SiIntel className="w-12 h-12" /> },
  { name: 'ASUS', icon: <SiAsus className="w-12 h-12" /> },
  { name: 'MSI', icon: <SiMsi className="w-12 h-12" /> },
  { name: 'ROG', icon: <SiRepublicofgamers className="w-12 h-12" /> },
  { name: 'CORSAIR', icon: <SiCorsair className="w-12 h-12" /> },
  { name: 'ACER', icon: <SiAcer className="w-12 h-12" /> },
  { name: 'SONY', icon: <SiSony className="w-12 h-12" /> },
  { name: 'LENOVO', icon: <SiLenovo className="w-12 h-12" /> },
  { name: 'DELL', icon: <SiDell className="w-12 h-12" /> }
];

const brandsRow2 = [...brandsRow1].reverse();

const BrandLogo = ({
  brand
}: {
  brand: { name: string; icon: React.ReactNode };
}) => (
  <div
    title={brand.name}
    className="flex items-center justify-center shrink-0 w-32 h-20 text-white/30 hover:text-brand-blue transition-all duration-300 cursor-default"
  >
    {brand.icon}
  </div>
);

export default function Brands() {
  return (
    <section className="py-12 bg-dark-bg/95 border-y border-white/5 relative overflow-hidden">
      {/* Edge Fade Overlays */}
      <div className="absolute top-0 left-0 bottom-0 w-24 sm:w-40 bg-linear-to-r from-dark-bg to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 bottom-0 w-24 sm:w-40 bg-linear-to-l from-dark-bg to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-6">
          <span className="font-mono text-[10px] font-bold text-brand-blue tracking-widest uppercase block mb-2">
            CAKUPAN KOMPONEN BERSERTIFIKAT
          </span>
          <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
            Produsen & Merek Board yang Didukung
          </h3>
        </div>

        {/* Double Marquee Container */}
        <div className="flex flex-col gap-2 w-full">
          {/* Row 1: Scrolling Left */}
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max gap-12 animate-marquee-left hover:[animation-play-state:paused]">
              {/* First copy */}
              {brandsRow1.map((brand, i) => (
                <BrandLogo key={`r1-1-${i}`} brand={brand} />
              ))}
              {/* Second copy */}
              {brandsRow1.map((brand, i) => (
                <BrandLogo key={`r1-2-${i}`} brand={brand} />
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max gap-12 animate-marquee-right hover:[animation-play-state:paused]">
              {/* First copy */}
              {brandsRow2.map((brand, i) => (
                <BrandLogo key={`r2-1-${i}`} brand={brand} />
              ))}
              {/* Second copy */}
              {brandsRow2.map((brand, i) => (
                <BrandLogo key={`r2-2-${i}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
