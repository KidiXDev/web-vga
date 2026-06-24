import {
  ArrowRight,
  Hammer,
  Shield,
  Sparkles,
  Star,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookClick: () => void;
  onBrowseClick: () => void;
}

export default function Hero({ onBookClick, onBrowseClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-dark-bg"
    >
      {/* Background Cinematic Gradients and Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-dark-bg/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=90&w=1920"
          alt="Enthusiast Gaming PC Custom Build Workspace"
          className="w-full h-full object-cover opacity-20 object-center scale-105 select-none"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dynamic grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] z-20 opacity-30" />
      </div>

      {/* Main Container */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side: Copy and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span className="font-mono text-[10px] font-semibold tracking-wider text-gray-400">
              PREMIUM HARDWARE REBUILD LABORATORY
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl xl:text-6xl tracking-tight leading-tight text-white mb-6 animate-fadeIn"
          >
            Professional GPU Repair <br />
            <span className="text-brand-blue font-extrabold">
              & Custom PC Engineering
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10 font-sans"
          >
            Avoid the waste of discarded graphics boards. We perform precise
            component-level micro-soldering, VRAM expansion upgrades, and build
            tailored clean-loop liquid cooled systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 font-display font-bold text-xs uppercase tracking-wider bg-brand-blue hover:bg-brand-blue/90 text-neutral-950 hover:scale-[1.02] active:scale-[0.98] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
            >
              Book Workbench Slot
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onBrowseClick}
              className="w-full sm:w-auto px-8 py-4 font-display font-bold text-xs uppercase tracking-wider border border-white/10 hover:border-brand-blue/30 text-white bg-white/5 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Browse Hardware Catalog
            </button>
          </motion.div>

          {/* Floating Trust Indicators (Grid) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 w-full pt-6 border-t border-white/5"
          >
            {/* Trust Indicator 1 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-brand-blue" />
                <span className="font-mono text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                  REPAIRS COMPLETED
                </span>
              </div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                5,000+
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                Bespoke hardware restorations
              </span>
            </div>

            {/* Trust Indicator 2 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-brand-blue" />
                <span className="font-mono text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                  WARRANTY SECURED
                </span>
              </div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                365 Days
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                Fully covered laboratory warranty
              </span>
            </div>

            {/* Trust Indicator 3 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-brand-blue fill-brand-blue/20" />
                <span className="font-mono text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                  SATISFACTION RATING
                </span>
              </div>
              <span className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                4.9 / 5.0
              </span>
              <span className="text-[10px] text-gray-500 font-medium">
                From verified hardware enthusiasts
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Stacked PC components & Close-up Graphics Card */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0">
          {/* Subtle elegant backdrop glow */}
          <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[90px] -z-10" />

          {/* Master layered image montage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[420px] aspect-square rounded-2xl"
          >
            {/* Primary layered card - High Resolution GPU close-up */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=90&w=800"
                alt="Elite Nvidia Graphics Card Component Board"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />

              {/* Graphic card specs tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-brand-blue font-bold tracking-widest uppercase">
                    LAB WORKBENCH 01
                  </span>
                  <span className="font-display font-bold text-sm text-white">
                    NVIDIA RTX 4090 REBUILD
                  </span>
                </div>
                <div className="px-2.5 py-1 rounded bg-brand-blue/10 border border-brand-blue/20 font-mono text-[10px] text-brand-blue font-bold">
                  98°C → 62°C
                </div>
              </div>
            </div>

            {/* Back offset floating card - Custom desktop loop */}
            <motion.div
              initial={{ x: 20, y: -20, opacity: 0 }}
              animate={{ x: 35, y: -25, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -top-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden border border-white/10 shadow-2xl hidden sm:block pointer-events-none"
            >
              <img
                src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=400"
                alt="Custom Hardline Rig Showcase"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay" />
            </motion.div>

            {/* Bottom-left floating badge - Live micro soldering view */}
            <motion.div
              initial={{ x: -20, y: 20, opacity: 0 }}
              animate={{ x: -25, y: 25, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute -bottom-4 -left-6 p-3 rounded-2xl bg-dark-card/95 border border-white/10 flex items-center gap-3 max-w-[210px] hidden sm:flex pointer-events-none"
            >
              <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue">
                <Hammer className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xs text-white">
                  Rework Lab
                </span>
                <span className="font-mono text-[9px] text-gray-500">
                  100% ESD PROTECTED
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
