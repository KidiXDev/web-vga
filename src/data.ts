import type {
  GalleryItem,
  Product,
  RepairTicket,
  Service,
  Testimonial
} from './types';

export const SERVICES: Service[] = [
  {
    id: 'gpu-repair',
    title: 'Reparasi GPU Profesional',
    shortDescription:
      'Perbaikan motherboard tingkat komponen, pembangunan kembali VRM, penggantian chip memori, dan chip kontroler.',
    longDescription:
      'Teknisi bersertifikat kami mendiagnosis korsleting mikro, membangun kembali sirkuit daya yang terbakar (VRM), mengganti modul memori GDDR6/HBM yang rusak, serta melakukan re-balling atau penggantian chip core GPU menggunakan BGA rework station profesional.',
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
    basePrice: 'Rp 1.400.000',
    turnaround: '3-5 Hari Kerja',
    highlights: [
      'Pembangunan Kembali VRM Solder-Mikro',
      'Penggantian VRAM GDDR6',
      'Jasa Reballing BGA',
      'Deteksi Korsleting (Short Circuit)'
    ]
  },
  {
    id: 'custom-builds',
    title: 'Perakitan PC Kustom & Workstation',
    shortDescription:
      'Sistem pendingin cairan kustom yang dirakit untuk kinerja puncak, keheningan maksimal, dan estetika premium.',
    longDescription:
      'Mulai dari rig gaming aliran udara tinggi hingga pendingin cairan kustom hardline open-loop dan workstation deep learning multi-GPU. Setiap sistem dirakit dengan tangan, manajemen kabel yang sempurna, dan diuji stabilitasnya.',
    image:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800',
    basePrice: 'Rp 2.400.000',
    turnaround: '5-7 Hari Kerja',
    highlights: [
      'Kustom Loop Hardline/Softline',
      'Profil Kipas & Kebisingan Optimal',
      'Manajemen Kabel Panel Belakang Rapi',
      'Garansi Perakitan 3 Tahun'
    ]
  },
  {
    id: 'pc-troubleshooting',
    title: 'Diagnosis & Pemecahan Masalah',
    shortDescription:
      'Atasi blue screen (BSOD) yang rumit, crash acak, thermal throttling, atau gagal boot (tidak bisa POST).',
    longDescription:
      'Ketika sistem Anda gagal di bawah beban berat atau tidak bisa menyala (POST), kami menjalankan tes perangkat keras komponen-demi-komponen yang ketat, diagnosis memori, tes riak catu daya (PSU), dan audit perangkat lunak untuk menemukan penyebab utamanya.',
    image:
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
    basePrice: 'Rp 800.000',
    turnaround: '24-48 Jam',
    highlights: [
      'Audit Diagnosis Perangkat Keras Mendalam',
      'Pemeriksaan Stabilitas RAM & MemTest',
      'Perbaikan OS & Pembersihan Driver',
      'Resolusi Kegagalan Boot'
    ]
  },
  {
    id: 'thermal-service',
    title: 'Perawatan Suhu & Liquid Metal',
    shortDescription:
      'Turunkan suhu GPU/CPU hingga 25°C. Mengganti pasta termal bawaan dengan liquid metal atau thermal pad premium.',
    longDescription:
      'Apakah kipas Anda bising atau perangkat Anda mengalami penurunan performa akibat panas (thermal throttling)? Kami membongkar seluruh GPU dan CPU Anda, membersihkan pasta pabrik yang sudah kering, dan mengaplikasikan senyawa premium (Thermal Grizzly Kryonaut, Kryosheets, atau Liquid Metal untuk pengguna ekstrem).',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    basePrice: 'Rp 600.000',
    turnaround: 'Selesai di Hari yang Sama',
    highlights: [
      'Aplikasi Pasta Termal Grizzly Premium',
      'Thermal Pad Gelid Berkinerja Tinggi',
      'Modifikasi Copper Shim untuk VRAM',
      'Garansi Penurunan Suhu'
    ]
  },
  {
    id: 'laptop-repair',
    title: 'Reparasi Laptop Gaming Premium',
    shortDescription:
      'Reparasi laptop gaming kelas atas (ROG, Alienware, Razer) termasuk layar, engsel, colokan daya (DC jack), dan perbaikan tumpahan cairan.',
    longDescription:
      'Laptop gaming mengemas perangkat keras kelas desktop ke dalam ruang yang sangat sempit. Kami berspesialisasi dalam perbaikan laptop yang sensitif: menyolder colokan daya yang rusak, menyolder motherboard yang terbakar, membersihkan tumpahan cairan, dan mengatasi korsleting internal.',
    image:
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800',
    basePrice: 'Rp 1.600.000',
    turnaround: '2-4 Hari Kerja',
    highlights: [
      'Pembersihan Kerusakan Akibat Cairan',
      'Penyolderan Port Pengisian Daya',
      'Penggantian Layar & Engsel',
      'Repaste Liquid Metal Ultrabook'
    ]
  },
  {
    id: 'gpu-cleaning',
    title: 'Pembersihan Mendalam & Perawatan GPU',
    shortDescription:
      'Restorasi penuh kartu grafis yang berdebu, teroksidasi, atau mengalami panas berlebih ke kondisi seperti baru.',
    longDescription:
      'Lindungi investasi GPU Anda. Layanan restorasi penuh kami meliputi pembersihan heatsink dengan bak ultrasonik mendalam, pembersihan debu dari kipas, pembersihan papan PCB menggunakan alkohol isopropil, serta penggantian pasta termal dan pad baru.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6do1poCjHxDj1dGYMn_39JJBGCDlzeZF6JCaUP0nnR9k94P_i7KIcmYc&s=10',
    basePrice: 'Rp 950.000',
    turnaround: 'Selesai di Hari yang Sama',
    highlights: [
      'Pembersihan Heatsink Ultrasonik',
      'Pembersihan Oksidasi PCB',
      'Lubrikasi Bearing Kipas',
      'Uji Tolok Ukur Beban Penuh (Burn-in)'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'NVIDIA GeForce RTX 4090 OC Edition 24GB',
    category: 'gpu',
    price: 31000000,
    originalPrice: 34000000,
    image:
      'https://mbpc.gg/cdn/shop/files/20240609_215927.jpg?v=1721255222&width=1946',
    rating: 4.9,
    specs: [
      '24GB GDDR6X VRAM',
      'Arsitektur Ada Lovelace',
      'DLSS 3.0 & Frame Generation',
      'Vapor chamber dengan tiga kipas'
    ],
    inStock: true,
    isPopular: true
  },
  {
    id: 'p2',
    name: 'AMD Ryzen 7 7800X3D 8-Core 5.0GHz',
    category: 'cpu',
    price: 6000000,
    image:
      'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:300,cw:1920,ch:1080,q:80,w:1920/V8jM5TCahc4LNw8cUBiZeY.jpg',
    rating: 4.8,
    specs: [
      '8 Core / 16 Thread',
      '96MB 3D V-Cache',
      'Prosesor Gaming Terbaik',
      'Kompatibel dengan Socket AM5'
    ],
    inStock: true,
    isPopular: true
  },
  {
    id: 'p3',
    name: 'ROG Maximus Z790 Dark Hero',
    category: 'motherboard',
    price: 10500000,
    originalPrice: 11200000,
    image:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    specs: [
      'Socket Intel LGA 1700',
      'Mendukung PCIe 5.0',
      '20+1+2 Power Stages',
      'Integrasi Wi-Fi 7'
    ],
    inStock: true
  },
  {
    id: 'p4',
    name: 'Corsair Dominator Titanium DDR5 64GB 6000MHz',
    category: 'ram',
    price: 4700000,
    image:
      'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    specs: [
      'Kit 64GB (2x32GB)',
      'Latensi Sangat Rendah CL30',
      'Mendukung Intel XMP 3.0',
      'Diffuser RGB Premium'
    ],
    inStock: true
  },
  {
    id: 'p5',
    name: 'Seasonic PRIME TX-1600 Titanium 1600W',
    category: 'psu',
    price: 8200000,
    image:
      'https://www.quietpc.com/images/products/ssr-prime-tx-1600-ne-3-large.jpg',
    rating: 4.9,
    specs: [
      '1600W 80+ Titanium',
      'Desain Fully Modular',
      'ATX 3.0 & PCIe 5.0 Native',
      'Termasuk Kabel 12VHPWR'
    ],
    inStock: true
  },
  {
    id: 'p6',
    name: 'Lian Li O11 Dynamic EVO XL RGB Black',
    category: 'case',
    price: 4000000,
    originalPrice: 4400000,
    image: 'https://i.redd.it/3b6ul5o2yxub1.jpg',
    rating: 4.8,
    specs: [
      'Full-Tower Dual Chamber',
      'Strip RGB Atas & Bawah',
      'Tata Letak GPU Sangat Modular',
      'Muat Tiga Radiator 420mm'
    ],
    inStock: true,
    isPopular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexander Mercer',
    role: 'Insinyur Deep Learning',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'GPU RTX 4090 saya seharga Rp 31 juta mati di tengah pelatihan model jaringan saraf tiruan yang kritis. Vendor menolak garansi karena ada goresan fisik pada PCB. Tim di sini menemukan kapasitor yang meledak di dekat slot PCIe, menyolder yang baru, dan mengembalikannya dalam kondisi bekerja dalam 4 hari. Penyelamatan luar biasa!',
    repairType: 'Perbaikan VRM & Kapasitor Terbakar',
    date: '2 minggu yang lalu'
  },
  {
    id: 't2',
    name: 'Seraphina Vance',
    role: 'Streamer Kompetitif',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'PC kustom watercooling saya mengalami micro-stuttering dan suhu cairan sangat panas. Akahito Store merapikan kembali pipa PETG hardline, membersihkan blok CPU, dan mengganti pad termal. Suhu turun hingga 18°C. Benar-benar profesional.',
    repairType: 'Pembangunan Ulang Hardline Kustom Loop',
    date: '1 bulan yang lalu'
  },
  {
    id: 't3',
    name: 'Derrick Chen',
    role: 'Pengembang Game Independen',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Membawa RTX 3080 dengan kerusakan saluran memori (error pada saluran B). Mereka mengganti chip VRAM GDDR6 yang rusak di bawah mikroskop langsung di depan saya. Grafik uji stres sekarang benar-benar stabil. Layanan hardware terbaik!',
    repairType: 'Penggantian & Reballing VRAM GDDR6',
    date: '3 minggu yang lalu'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Aplikasi Liquid Metal Thermal Grizzly',
    category: 'workshop',
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    description:
      'Mengaplikasikan lapisan pelindung liquid metal presisi untuk rakitan GPU overclocking tingkat enthusiast.'
  },
  {
    id: 'g2',
    title: 'Pameran Kustom Loop Hardline',
    category: 'builds',
    image:
      'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800',
    description:
      'Lekukan paralel 90 derajat yang sempurna pada pipa satin frosted dengan cairan UV-purple.'
  },
  {
    id: 'g3',
    title: 'Meja Kerja Reparasi BGA Mikroskop',
    category: 'microscope',
    image:
      'https://images.unsplash.com/photo-1597872200319-3367cd24174b?auto=format&fit=crop&q=80&w=800',
    description:
      'Menyolder pengontrol daya frekuensi tinggi di bawah mikroskop definisi tinggi di bengkel kami.'
  },
  {
    id: 'g4',
    title: 'Battle-Station Desktop Kustom',
    category: 'builds',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    description:
      'Setup kustom pelanggan dengan tiga monitor yang disinkronkan dengan pencahayaan ambien.'
  },
  {
    id: 'g5',
    title: 'Silicon Die dan Pipa Panas (Heatpipe)',
    category: 'gpus',
    image:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
    description:
      'Membuka ruang tembaga pendingin dan merapikan kembali sirip pembuang panas berkinerja tinggi.'
  },
  {
    id: 'g6',
    title: 'Pusat Perakitan Presisi',
    category: 'workshop',
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    description:
      'Setiap rakitan PC kustom dirakit di workstation anti-statis bebas debu kami.'
  }
];

export const BRANDS = [
  { name: 'NVIDIA', logo: 'NVIDIA' },
  { name: 'AMD', logo: 'AMD' },
  { name: 'ASUS', logo: 'ASUS ROG' },
  { name: 'MSI', logo: 'MSI Gaming' },
  { name: 'Gigabyte', logo: 'AORUS' },
  { name: 'Zotac', logo: 'ZOTAC Gaming' },
  { name: 'Sapphire', logo: 'SAPPHIRE' },
  { name: 'Colorful', logo: 'COLORFUL' }
];

export const SAMPLE_TICKETS: { [key: string]: RepairTicket } = {
  'GPU-9842': {
    id: 'GPU-9842',
    customerName: 'Marcus Aurelius',
    deviceModel: 'MSI Trio RTX 3080 10GB',
    issue: 'Artifacting saat beban berat / Error Code 43',
    status: 'repair',
    lastUpdated: 'Hari ini jam 08:30 WIB',
    progress: 60,
    notes: [
      'Perangkat masuk: Kerusakan fisik di sekitar chip GDDR6 teridentifikasi.',
      'Laporan diagnosis: Siklus panas merusak bola solder mikro di bawah Chip Memori B0.',
      'Tahap perbaikan: Melepas chip memori, membersihkan pad, dan menyolder chip memori Micron GDDR6 baru.',
      'Selanjutnya: Penggantian unit termal dan pengujian stres benchmark TimeSpy selama 12 jam.'
    ]
  },
  'SYS-2415': {
    id: 'SYS-2415',
    customerName: 'Elena Rostova',
    deviceModel: 'PC Gaming Kustom Liquid Cooled',
    issue: 'CPU thermal throttling & pompa berisik',
    status: 'testing',
    lastUpdated: 'Kemarin jam 16:15 WIB',
    progress: 80,
    notes: [
      'Diagnosis sistem: Kerusakan pompa AIO Corsair H150i terdeteksi.',
      'Penggantian: Memasang NZXT Kraken Elite 360 RGB baru.',
      'Perawatan: Mengaplikasikan Thermal Grizzly Kryonaut premium.',
      'Tahap pengujian: Menjalankan pengujian Cinebench R23 berulang; suhu CPU stabil pada puncak 74°C (sebelumnya 98°C).'
    ]
  },
  'GPU-7301': {
    id: 'GPU-7301',
    customerName: 'Jonathan Joestar',
    deviceModel: 'ASUS TUF RX 7900 XTX',
    issue: 'Mati total / Korsleting penuh',
    status: 'ready',
    lastUpdated: 'Hari ini jam 09:15 WIB',
    progress: 100,
    notes: [
      'Diagnosis: Chip DrMOS sisi atas rusak pada Phase 6 menyebabkan korsleting langsung ke ground.',
      'Tahap perbaikan: Melepas DrMOS, membersihkan jalur tembaga terbakar, menghubungkan kembali dan memasang Power Stage 70A berspesifikasi tinggi.',
      'Pengujian: Uji stres Furmark 24 jam selesai dengan sukses. Suhu stabil di 65°C core, 82°C hotspot.',
      'Status: Perbaikan selesai penuh, dikemas dalam kantong pelindung ESD, siap diambil.'
    ]
  }
};
