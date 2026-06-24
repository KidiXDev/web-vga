import { Camera, Eye, X, ZoomIn } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import type { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const categories = [
    { value: 'all', label: 'Semua Foto' },
    { value: 'builds', label: 'PC Rakitan' },
    { value: 'gpus', label: 'Desain Ulang GPU' },
    { value: 'workshop', label: 'Ruang Kerja Bengkel' },
    { value: 'microscope', label: 'Tampilan Mikroskop' }
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-24 bg-dark-bg border-b border-white/5 relative overflow-hidden"
    >
      {/* Background glow overlay */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
            PORTOFOLIO VISUAL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Di Dalam Bengkel Bersih <br />
            <span className="text-brand-blue font-extrabold">
              Akahito Store
            </span>
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            Dokumentasi foto dari proyek favorit kami. Sambungan solder presisi tinggi, pendingin cairan kustom, konfigurasi PCB makro, dan PC rakitan kustom kelas atas.
          </p>
        </div>

        {/* Gallery Filtering */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat.value
                  ? 'bg-brand-blue border-transparent text-neutral-950 font-bold'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-brand-blue/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Portfolio Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:balance]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxImage(item)}
                className="break-inside-avoid relative rounded-2xl overflow-hidden border border-white/5 group shadow-2xl cursor-pointer"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-700 brightness-90 group-hover:brightness-100 select-none"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay metadata */}
                <div className="absolute inset-0 bg-linear-to-t from-dark-bg/95 via-dark-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                  <span className="font-mono text-[9px] font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/15 border border-brand-blue/20 px-2.5 py-0.5 rounded w-fit mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-white flex items-center justify-between gap-1.5">
                    {item.title}
                    <ZoomIn className="w-4 h-4 text-brand-blue" />
                  </h3>
                  <p className="text-gray-400 text-xs font-sans mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-brand-blue/20 border border-white/10 text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="md:w-3/5 bg-black/60 flex items-center justify-center overflow-hidden">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-h-[60vh] md:max-h-[80vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Field details column */}
              <div className="md:w-2/5 p-6 sm:p-8 bg-dark-card flex flex-col justify-between text-left border-t md:border-t-0 md:border-l border-white/5">
                <div>
                  <span className="font-mono text-2xs font-bold text-brand-blue tracking-widest uppercase bg-brand-blue/10 border border-brand-blue/20 px-2.5 py-1 rounded">
                    LAPORAN LOG FASE // {lightboxImage.category}
                  </span>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-4 mb-3">
                    {lightboxImage.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                    {lightboxImage.description}
                  </p>

                  {/* Metadata cards */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                      <Camera className="w-4 h-4 text-brand-blue" />
                      <div className="flex flex-col">
                        <span className="text-[9px] text-gray-500 font-mono">
                          KAMERA FOTO
                        </span>
                        <span className="text-xs text-gray-300 font-mono">
                          Micro-Nikkor 105mm f/2.8 Macro
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                      <Eye className="w-4 h-4 text-brand-blue" />
                      <div className="flex flex-col">
                        <span className="text-[9px] text-gray-500 font-mono">
                          PERBESARAN
                        </span>
                        <span className="text-xs text-gray-300 font-mono">
                          20x Optical Dental Scope
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6">
                  <span className="text-[10px] text-gray-500 font-mono block">
                    Log Toko Akahito Store • Terdaftar 2026-06-23
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
