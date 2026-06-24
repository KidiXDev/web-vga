import {
  AlertCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import React, { useState } from 'react';

interface ShowcaseExample {
  id: string;
  title: string;
  subtitle: string;
  cardName: string;
  beforeImg: string;
  afterImg: string;
  beforeSpecs: string[];
  afterSpecs: string[];
  diagnosis: string;
  repairMethod: string;
  tempDelta: string;
}

const EXAMPLES: ShowcaseExample[] = [
  {
    id: 'ex1',
    title: 'EVGA RTX 3090 FTW3 Ultra',
    subtitle: 'Fase Daya VRM Terbakar & Korsleting Langsung',
    cardName: 'Reparasi Fase Daya RTX 3090',
    beforeImg:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800', // Close up components
    afterImg:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800', // Solder joints close up
    beforeSpecs: [
      'Korsleting Penuh (Short-to-Ground) pada Jalur PCIe 12V',
      'Lapisan PCB Hangus Terbakar di dekat Phase 4',
      'Sistem Gagal Boot / Memicu Proteksi OCP pada PSU',
      'DrMOS 50A dan Induktor Input Meledak'
    ],
    afterSpecs: [
      'Milling Lapisan PCB & Menghubungkan Jalur Tembaga',
      'Semua MOSFET Sisi Atas Ditingkatkan ke 70A',
      'Pembersihan PCB Mendalam dengan Bak Ultrasonik',
      'Uji Stabilitas 24 Jam: Suhu Inti Puncak di 64°C'
    ],
    diagnosis:
      'Kelebihan beban termal (overheating) menyebabkan DrMOS Phase 4 mengalami kerusakan gerbang total, menciptakan korsleting langsung pada input 12V, yang memicu proteksi Catu Daya (PSU).',
    repairMethod:
      'Mengikis lapisan yang hangus untuk mencegah korsleting karbon. Memasang kabel jumper tembaga terisolasi untuk menghubungkan bidang daya. Menyolder ulang dan meningkatkan seluruh jajaran fase daya dengan MOSFET arus tinggi premium.',
    tempDelta: '92°C Hotspot → 68°C'
  },
  {
    id: 'ex2',
    title: 'ASUS ROG Strix RTX 3080 Ti',
    subtitle: 'Retak Sambungan Solder GDDR6X & Artefak Memori',
    cardName: 'Ganti VRAM RTX 3080 Ti Berartefak',
    beforeImg:
      'https://images.unsplash.com/photo-1597872200319-3367cd24174b?auto=format&fit=crop&q=80&w=800', // Disassembled workstation
    afterImg:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800', // Pristine component close up
    beforeSpecs: [
      'Layar Berartefak (Garis/Kotak Merah Muda)',
      'Kegagalan Diagnosis Memori MODS pada Saluran C0',
      'Langsung Crash Saat Aplikasi 3D Dimulai',
      'Bola Solder Bebas Timbal Teroksidasi Parah'
    ],
    afterSpecs: [
      'Chip VRAM Micron yang Rusak Dilepas',
      'Pad Dipersiapkan & Dilapisi Solder Paduan Premium',
      'Chip GDDR6X 2GB Baru Di-reball & Dipasang',
      'Uji Stres TimeSpy Stabil di 120 FPS'
    ],
    diagnosis:
      'Siklus panas intens dan GPU yang melengkung (sagging) menyebabkan kelelahan termal fisik, meretakkan kontak solder mikro BGA di bawah modul memori Saluran C0, menyebabkan error register alamat memori.',
    repairMethod:
      'Mendapatkan modul memori Micron GDDR6X baru langsung dari pabrik. Mempersiapkan papan sirkuit untuk penyolderan di bawah atmosfer nitrogen. Memasang modul menggunakan kurva profil panas kustom di BGA Rework Station kami.',
    tempDelta: '104°C Suhu Memori → 78°C'
  },
  {
    id: 'ex3',
    title: 'Gigabyte Eagle RX 6800 XT',
    subtitle: 'Jalur Kipas Korosi & Ganti Pasta Inti',
    cardName: 'Pemulihan RX 6800 XT Terkena Cairan',
    beforeImg:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800', // Raw silicon substrate
    afterImg:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800', // Premium motherboard clean look
    beforeSpecs: [
      'Kipas Tidak Berputar / Mati Otomatis karena Panas',
      'Oksidasi Hijau Parah dari Kebocoran Cairan Pendingin',
      'Terdeteksi Jalur Terbuka (Open Loop) pada Sirkuit PWM',
      'Thermal Paste Asli Kering dan Mengeras'
    ],
    afterSpecs: [
      'Pembersihan Korosi Kimia & Perawatan Bak',
      'Jumper Jaringan pada 3 Jalur Pengontrol PWM di Bawah Mikroskop',
      'Menggunakan Pasta Termal Grizzly Kryonaut Premium',
      'Kurva Kipas & Pembacaan Sensor Pulih 100%'
    ],
    diagnosis:
      'Kebocoran kecil pada loop pendingin cairan meneteskan etilen-glikol langsung ke sirkuit pengontrol kecepatan kipas GPU, memicu korosi elektrokimia agresif yang memakan habis tiga jalur mikro.',
    repairMethod:
      'Menempatkan kartu grafis dalam pembersih ultrasonik khusus untuk menghilangkan garam cairan. Di bawah mikroskop, mengikis masker solder yang rusak dan membangun kembali jalur yang terputus menggunakan kabel tembaga enamel 0,02 mm. Melindungi hasil kerja dengan resin UV.',
    tempDelta: 'Mati karena Panas → 59°C'
  }
];

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const current = EXAMPLES[activeTab];

  return (
    <section
      id="before-after"
      className="py-24 bg-dark-bg border-y border-white/5 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
            BERKAS KASUS TEKNIS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Sebelum & Sesudah Interaktif <br />
            <span className="text-brand-blue">Tolok Ukur Presisi</span>
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            Bandingkan kualitas struktural hasil kerja kami. Geser slider ke kiri dan kanan untuk memeriksa komponen yang hangus dibandingkan dengan hasil sirkuit yang telah selesai diperbaiki dan di-reball.
          </p>
        </div>

        {/* Showcase Switcher (Tabs) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {EXAMPLES.map((example, index) => (
            <button
              key={example.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(50); // reset slider
              }}
              className={`px-5 py-3 rounded-xl font-display text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                activeTab === index
                  ? 'bg-brand-blue border-transparent text-neutral-950 font-bold scale-[1.03]'
                  : 'bg-white/5 border-white/10 hover:border-brand-blue/50 text-gray-400 hover:text-white'
              }`}
            >
              {example.cardName}
            </button>
          ))}
        </div>

        {/* Interactive Comparison and Specs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Slider Screen (Left/Center - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border border-white/10 shadow-2xl select-none group">
              {/* After Image (Full width background) */}
              <img
                src={current.afterImg}
                alt="Repaired Restored GPU PCB"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
              {/* After label */}
              <div className="absolute bottom-4 right-4 z-30 bg-emerald-500/80 backdrop-blur-md border border-emerald-400/30 px-3 py-1 rounded-md text-[10px] font-mono font-bold text-white shadow-lg">
                SESUDAH: REPARASI SELESAI
              </div>

              {/* Before Image (Overlaid, clipped based on slider position) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden z-10 pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                {/* Before Image inside container has to match the aspect and width of parent */}
                <div
                  className="absolute inset-y-0 left-0 w-screen h-full"
                  style={{ width: '100%', minWidth: '100%' }}
                >
                  <img
                    src={current.beforeImg}
                    alt="Damaged Burnt GPU PCB"
                    className="absolute inset-0 w-full h-full object-cover brightness-50"
                    style={{ filter: 'contrast(1.2) sepia(0.2)' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Before label */}
                <div className="absolute bottom-4 left-4 z-30 bg-red-600/80 backdrop-blur-md border border-red-500/30 px-3 py-1 rounded-md text-[10px] font-mono font-bold text-white shadow-lg">
                  SEBELUM: KERUSAKAN TERBAKAR
                </div>
              </div>

              {/* Divider Line & Slider Thumb */}
              <div
                className="absolute inset-y-0 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute inset-y-0 -left-0.5 w-0.5 bg-brand-blue" />
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-dark-bg border border-brand-blue flex items-center justify-center shadow-lg pointer-events-none">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="w-3.5 h-3.5 text-brand-blue" />
                    <ChevronRight className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                </div>
              </div>

              {/* Invisible Range Input spanning the container for robust drag & touch support */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag slider to compare before and after repair work"
              />

              {/* Instructional overlay that fades out when user interacts */}
              {sliderPosition === 50 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/30 z-25 transition-opacity duration-500">
                  <div className="px-4 py-2 rounded-lg bg-dark-bg/80 border border-white/10 backdrop-blur-md text-xs font-mono text-gray-300 animate-pulse">
                    ↔ GESER SLIDER UNTUK MELIHAT
                  </div>
                </div>
              )}
            </div>

            {/* Micro Delta Temperature Spec */}
            <div className="mt-4 flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 font-mono text-xs">
              <span className="text-gray-400">PEMULIHAN TOLOK UKUR:</span>
              <span className="text-brand-blue font-bold">
                {current.tempDelta}
              </span>
            </div>
          </div>

          {/* Details / Technical specs (Right - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="font-mono text-xs text-brand-blue uppercase tracking-widest mb-1 font-bold">
              RINGKASAN BERKAS KASUS
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              {current.title}
            </h3>
            <p className="text-gray-400 font-mono text-xs mb-6 font-semibold uppercase tracking-wider">
              {current.subtitle}
            </p>

            <div className="flex flex-col gap-6 mb-8">
              {/* Diagnosis Box */}
              <div className="p-4 rounded-xl bg-red-950/10 border border-red-900/30">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-wider">
                    DIAGNOSIS LAB & MASALAH
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {current.diagnosis}
                </p>
              </div>

              {/* Repair Method Box */}
              <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-900/30">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    METODOLOGI & TAHAPAN REPARASI
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-sans">
                  {current.repairMethod}
                </p>
              </div>
            </div>

            {/* Quick checklist grids */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-mono text-[10px] font-bold text-red-400 block mb-2 uppercase">
                  KERUSAKAN AWAL
                </span>
                <ul className="flex flex-col gap-1.5">
                  {current.beforeSpecs.map((spec, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-400 flex items-start gap-1.5 leading-tight"
                    >
                      <span className="text-red-500 shrink-0">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-mono text-[10px] font-bold text-emerald-400 block mb-2 uppercase">
                  HASIL AKHIR
                </span>
                <ul className="flex flex-col gap-1.5">
                  {current.afterSpecs.map((spec, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-400 flex items-start gap-1.5 leading-tight"
                    >
                      <span className="text-emerald-500 shrink-0">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
