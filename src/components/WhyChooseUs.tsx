import { Award, Coins, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const achievements = [
    {
      icon: <Coins className="w-6 h-6 text-brand-blue" />,
      title: 'Hemat Rata-Rata 80%',
      desc: 'Perbaikan solder tingkat komponen (seperti mengganti kapasitor seharga Rp 35.000) menyelamatkan Anda dari membeli board baru seharga belasan juta rupiah.'
    },
    {
      icon: <Award className="w-6 h-6 text-brand-blue" />,
      title: 'Teknisi BGA Bersertifikat',
      desc: 'Teknisi solder senior kami memiliki kualifikasi micro-rework dan pemulihan sirkuit tingkat industri.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Garansi Penuh 1 Tahun',
      desc: 'Kami menjamin kualitas sambungan solder kami, penggantian chip memori, dan komponen lainnya selama 365 hari.'
    }
  ];

  const standards = [
    {
      title: 'GROUNDING AMAN ESD',
      desc: 'Gelang tangan dan alas antistatis yang ketat melindungi papan sirkuit logika yang sensitif.'
    },
    {
      title: 'ATOMISASI NITROGEN',
      desc: 'Menggunakan oven penyolderan gas nitrogen khusus mencegah kerusakan mikro (micro-voiding) atau oksidasi.'
    },
    {
      title: 'PENCUCIAN ULTRASONIK',
      desc: 'Setiap papan sirkuit dicuci dalam cairan khusus de-ionisasi untuk menghilangkan residu fluks sisa penyolderan.'
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
            <div className="col-span-12 rounded-3xl overflow-hidden border border-white/10 relative aspect-16/10 group">
              <img
                src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800"
                alt="Elite Anti-Static Custom PC Workshop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                Workshop Utama Perakitan ESD
              </div>
            </div>

            {/* Second offset image (technician close-up) */}
            <div className="col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative aspect-4/3 group">
              <img
                src="https://images.unsplash.com/photo-1597872200319-3367cd24174b?auto=format&fit=crop&q=80&w=600"
                alt="Soldering Graphics Card VRM Power Stages"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
            </div>

            {/* Micro statistic panel */}
            <div className="col-span-5 p-4 rounded-2xl bg-linear-to-tr from-dark-card to-white/5 border border-white/10 flex flex-col justify-center items-center shadow-2xl">
              <span className="font-mono text-2xs text-brand-blue tracking-widest font-bold uppercase mb-1">
                TINGKAT SUKSES
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                98.4%
              </span>
              <span className="text-[10px] text-gray-500 font-medium text-center">
                Untuk diagnosis sirkuit umum
              </span>
            </div>
          </div>

          {/* Copy & Core Competencies (Right - 7 cols) */}
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
              GARANSI & JAMINAN
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 animate-fadeIn">
              Mengapa Para Antusias PC <br />
              <span className="text-brand-blue">Mempercayai Akahito Store</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed font-sans">
              Berbeda dengan toko ritel besar yang langsung menyarankan Anda
              mengganti motherboard mati atau membuang kartu grafis rusak, kami
              menganalisis lebih dalam. Kami melacak penurunan tegangan mikro
              pada sirkuit termal untuk memulihkan komponen berharga Anda.
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

            {/* Workshop standard ticker */}
            <div className="border-t border-white/10 pt-6">
               <span className="font-mono text-2xs font-bold text-brand-blue tracking-wider uppercase block mb-4">
                STANDAR WORKSHOP YANG KETAT
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
