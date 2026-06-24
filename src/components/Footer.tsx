import { ArrowUp, Cpu, HomeIcon, Shield } from 'lucide-react';

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
          {/* Col 1: Brand & Bio - 4/12 width */}
          <div className="lg:col-span-4 flex flex-col items-start gap-6">
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
                  AERO<span className="text-brand-blue">GPU</span>
                </span>
                <span className="font-mono text-[8px] text-brand-blue tracking-widest uppercase">
                  REPAIR & HARDWARE
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm font-sans leading-relaxed max-w-sm">
              We operate an enthusiast-level micro-soldering and BGA rework
              laboratory. Sourcing rare components, upgrading memory chips, and
              restoring faulty graphics boards since 2018.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <HomeIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <HomeIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <HomeIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 border border-white/5 hover:border-transparent transition-all duration-300"
              >
                <HomeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick links - 3/12 width */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-display font-bold text-sm text-white tracking-wide">
              REPAIR SOLUTIONS
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-sans">
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Micro-Soldering & VRM
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                GDDR6 VRAM Swapping
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                BGA Reballing & Reflow
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Custom Soft/Hardline Loop
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors text-left"
              >
                Ultrasonic Bath Wash
              </a>
            </div>
          </div>

          {/* Col 3: Navigation shortcuts - 2/12 width */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <h4 className="font-display font-bold text-sm text-white tracking-wide">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-2.5 text-sm font-sans">
              <a
                href="#services"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Our Services
              </a>
              <a
                href="#before-after"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Showcase
              </a>
              <a
                href="#products"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Shop Hardware
              </a>
              <a
                href="#why-us"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Why Choose Us
              </a>
              <a
                href="#gallery"
                className="text-gray-400 hover:text-brand-blue transition-colors"
              >
                Laboratory Gallery
              </a>
            </div>
          </div>

          {/* Col 4: Warranty & Assurance card - 3/12 width */}
          <div className="lg:col-span-3 p-5 rounded-2xl bg-white/3 border border-white/5 flex flex-col items-start gap-4 text-left">
            <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
              <Shield className="w-5 h-5" />
            </div>

            <h4 className="font-display font-bold text-sm text-white leading-tight">
              Official 365-Day Guarantee
            </h4>

            <p className="text-gray-400 text-xs font-sans leading-relaxed">
              Every component-level VRM rebuild, trace repair, or liquid metal
              overhaul we perform is backed by our full 1-year guarantee.
            </p>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-gray-500 font-mono">
            © 2026 AeroGPU Labs. All rights reserved. Developed under BGA solder
            compliance standards.
          </span>

          <div className="flex items-center gap-6 text-xs text-gray-500 font-sans">
            <a href="#" className="hover:text-brand-blue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-blue transition-colors">
              Terms of Work
            </a>
            <button
              onClick={handleScrollTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-neutral-950 transition-all flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase font-bold cursor-pointer"
            >
              TOP <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
