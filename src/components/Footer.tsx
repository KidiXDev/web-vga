import { ArrowUp, Cpu } from 'lucide-react';
import {
  SiFacebook,
  SiGooglemaps,
  SiInstagram,
  SiYoutube
} from 'react-icons/si';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Background glow line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[3px] bg-linear-to-r from-transparent via-brand-blue/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Upper Column Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5 text-left">
          {/* Col 1: Brand & Bio - 5/12 width */}
          <div className="lg:col-span-5 flex flex-col items-start gap-6">
            <a
              href="#"
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTop();
              }}
            >
              <div className="p-2 bg-brand-blue rounded-xl">
                <Cpu className="w-5 h-5 text-neutral-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-wider text-lg text-white">
                  AKAHITO<span className="text-brand-blue"> STORE</span>
                </span>
                <span className="font-mono text-[8px] text-brand-blue tracking-widest uppercase">
                  REPARASI & PERANGKAT KERAS
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm font-sans leading-relaxed max-w-sm">
              Kami mengoperasikan bengkel penyolderan mikro dan pengerjaan ulang
              BGA tingkat antusias. Menyediakan suku cadang langka, meningkatkan
              chip memori, dan merestorasi kartu grafis yang rusak sejak 2018.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <SiYoutube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <SiGooglemaps className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick links - 4/12 width */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <h4 className="font-display font-bold text-sm text-white tracking-wide">
              SOLUSI PERBAIKAN
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-sans">
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Mikro-Solder & VRM
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Penggantian VRAM GDDR6
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Reballing BGA & Reflow
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Loop Kustom Soft/Hardline
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Pembersihan Bak Ultrasonik
              </a>
            </div>
          </div>

          {/* Col 3: Navigation shortcuts - 3/12 width */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-display font-bold text-sm text-white tracking-wide">
              NAVIGASI
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-sans">
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Layanan Kami
              </a>
              <a
                href="#before-after"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Portofolio
              </a>
              <a
                href="#products"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Toko Hardware
              </a>
              <a
                href="#why-us"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Keunggulan Kami
              </a>
              <a
                href="#gallery"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Galeri Bengkel
              </a>
            </div>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500 font-mono">
            © 2026 Akahito Store Semarang. All Right Reserved.
          </span>

          <div className="flex items-center gap-6 text-xs text-gray-500 font-sans">
            <a href="#" className="hover:text-brand-blue transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors">
              Ketentuan Layanan
            </a>
            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 transition-all flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase font-bold cursor-pointer"
            >
              ATAS <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
