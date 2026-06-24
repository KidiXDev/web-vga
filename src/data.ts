import type { GalleryItem, Product, RepairTicket, Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'gpu-repair',
    title: 'Professional GPU Repair',
    shortDescription:
      'Component-level motherboard repair, VRM rebuilding, memory chip replacement, and controller chips replacement.',
    longDescription:
      'Our certified technicians diagnose micro-shortages, rebuild burnt power stages (VRM), replace faulty GDDR6/HBM memory modules, and re-ball or replace GPU cores using professional BGA rework stations.',
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
    basePrice: '$89',
    turnaround: '3-5 Business Days',
    highlights: [
      'Micro-soldering VRM Rebuild',
      'GDDR6 VRAM Replacement',
      'BGA Reballing Service',
      'Short Circuit Detection'
    ]
  },
  {
    id: 'custom-builds',
    title: 'Custom Gaming & Workstation PCs',
    shortDescription:
      'Bespoke liquid-cooled systems built for peak performance, extreme quietness, and custom aesthetics.',
    longDescription:
      'From high-airflow gaming rigs to custom open-loop hardline water cooling and multi-GPU deep learning workstations. Every system is hand-built, cable-managed to perfection, and stress-tested.',
    image:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=800',
    basePrice: '$150',
    turnaround: '5-7 Business Days',
    highlights: [
      'Hardline/Softline Custom Loops',
      'Optimized Fan & Noise Profiles',
      'Clean Back-Panel Cable Routing',
      '3-Year Assembly Warranty'
    ]
  },
  {
    id: 'pc-troubleshooting',
    title: 'Diagnostic & Troubleshooting',
    shortDescription:
      'Solve complex blue screens, random crashes, thermal throttling, or failures to boot.',
    longDescription:
      "When your system fails under load or won't POST, we run rigorous component-by-component hardware tests, memory diagnostics, power supply ripple tests, and software audits to find the exact root cause.",
    image:
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800',
    basePrice: '$49',
    turnaround: '24-48 Hours',
    highlights: [
      'Deep HW Diagnostic Audits',
      'RAM & MemTest Stability Checks',
      'OS Repair & Driver Cleanups',
      'Boot Failure Resolution'
    ]
  },
  {
    id: 'thermal-service',
    title: 'Thermal Maintenance & Liquid Metal',
    shortDescription:
      'Lower GPU/CPU temperatures by up to 25°C. Replacing factory thermal paste with liquid metal or premium pads.',
    longDescription:
      'Are your fans screaming or is your device thermal throttling? We completely disassemble your GPU and CPU, clean off crusty factory paste, and apply premium compounds (Thermal Grizzly Kryonaut, Kryosheets, or Liquid Metal for extreme users).',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    basePrice: '$39',
    turnaround: 'Same-Day Service',
    highlights: [
      'Thermal Grizzly Paste Application',
      'High-Performance Gelid Thermal Pads',
      'Copper Shim Modding for VRAM',
      'Temperature Drop Guaranteed'
    ]
  },
  {
    id: 'laptop-repair',
    title: 'Premium Laptop Gaming Repair',
    shortDescription:
      'Repair of high-end gaming laptops (ROG, Alienware, Razer) including screen, hinge, power jack, and liquid spill repairs.',
    longDescription:
      'Gaming laptops pack desktop-class hardware into tiny spaces. We specialize in delicate laptop repairs: fixing broken power DC jacks, soldering burnt motherboards, cleaning up liquid spills, and resolving internal short circuits.',
    image:
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800',
    basePrice: '$99',
    turnaround: '2-4 Business Days',
    highlights: [
      'Liquid Damage Cleaning',
      'Charging Port Soldering',
      'Screen & Hinge Replacement',
      'Ultrabook Liquid Metal Repaste'
    ]
  },
  {
    id: 'gpu-cleaning',
    title: 'Deep GPU Cleaning & Maintenance',
    shortDescription:
      'Full restoration of dusty, oxidized, or thermal-throttle bound graphics cards to brand new condition.',
    longDescription:
      'Protect your GPU investment. Our full restoration service includes deep ultrasonic bath cleaning of the heatsink, dust removal from fans, board cleaning using isopropyl alcohol, and brand new thermal paste and pads.',
    image:
      'https://images.unsplash.com/photo-1597872200319-3367cd24174b?auto=format&fit=crop&q=80&w=800',
    basePrice: '$59',
    turnaround: 'Same-Day Service',
    highlights: [
      'Ultrasonic Heatsink Cleaning',
      'PCB De-oxidation Treatment',
      'Fan Bearing Lubrication',
      'Full Burn-In Benchmarks'
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'NVIDIA GeForce RTX 4090 OC Edition 24GB',
    category: 'gpu',
    price: 1899,
    originalPrice: 2099,
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    specs: [
      '24GB GDDR6X VRAM',
      'Ada Lovelace Architecture',
      'DLSS 3.0 & Frame Generation',
      'Triple-fan vapor chamber'
    ],
    inStock: true,
    isPopular: true
  },
  {
    id: 'p2',
    name: 'AMD Ryzen 7 7800X3D 8-Core 5.0GHz',
    category: 'cpu',
    price: 369,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    specs: [
      '8 Cores / 16 Threads',
      '96MB 3D V-Cache',
      'Best Gaming Processor',
      'Socket AM5 Compatible'
    ],
    inStock: true,
    isPopular: true
  },
  {
    id: 'p3',
    name: 'ROG Maximus Z790 Dark Hero',
    category: 'motherboard',
    price: 649,
    originalPrice: 699,
    image:
      'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    specs: [
      'Intel LGA 1700 Socket',
      'PCIe 5.0 ready',
      '20+1+2 Power Stages',
      'Wi-Fi 7 Integration'
    ],
    inStock: true
  },
  {
    id: 'p4',
    name: 'Corsair Dominator Titanium DDR5 64GB 6000MHz',
    category: 'ram',
    price: 289,
    image:
      'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    specs: [
      '64GB Kit (2x32GB)',
      'CL30 Ultra-Low Latency',
      'Intel XMP 3.0 Support',
      'Premium RGB Diffuser'
    ],
    inStock: true
  },
  {
    id: 'p5',
    name: 'Seasonic PRIME TX-1600 Titanium 1600W',
    category: 'psu',
    price: 499,
    image:
      'https://images.unsplash.com/photo-1551645121-d1034da75057?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    specs: [
      '1600W 80+ Titanium',
      'Fully Modular Design',
      'ATX 3.0 & Native PCIe 5.0',
      '12VHPWR Cable Included'
    ],
    inStock: true
  },
  {
    id: 'p6',
    name: 'Lian Li O11 Dynamic EVO XL RGB Black',
    category: 'case',
    price: 245,
    originalPrice: 269,
    image:
      'https://images.unsplash.com/photo-1587202372430-612196025195?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    specs: [
      'Full-Tower Dual Chamber',
      'Top & Bottom RGB Strips',
      'Highly Modular GPU Layout',
      'Fits Triple 420mm Radiators'
    ],
    inStock: true,
    isPopular: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexander Mercer',
    role: 'Deep Learning Engineer',
    avatar:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'My $2,000 RTX 4090 died in the middle of training a critical neural network model. ASUS refused RMA due to a physical scratch on the PCB. These guys located a blown capacitor near the PCIe slot, soldered a new one on, and returned it working within 4 days. Incredible save!',
    repairType: 'Blown VRM & Capacitor Repair',
    date: '2 weeks ago'
  },
  {
    id: 't2',
    name: 'Seraphina Vance',
    role: 'Competitive Streamer',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'My custom watercooled build was suffering from micro-stuttering and high liquid temperatures. AeroGPU re-ran the hardline PETG tubing, cleaned the custom CPU block, and replaced the pads. Temperatures dropped by 18°C. Absolute professionals.',
    repairType: 'Hardline Custom Loop Rebuild',
    date: '1 month ago'
  },
  {
    id: 't3',
    name: 'Derrick Chen',
    role: 'Indie Game Developer',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    text: 'Brought in an RTX 3080 with dead memory channels (errors on channel B). They swapped out the faulty GDDR6 VRAM chips under a microscope right in front of me. Stress-testing graphs are totally flat line now. Best hardware service around!',
    repairType: 'GDDR6 VRAM Swap & Reballing',
    date: '3 weeks ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Thermal Grizzly Liquid Metal Application',
    category: 'workshop',
    image:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800',
    description:
      'Applying precise liquid metal interface shielding for an enthusiast GPU overclocking build.'
  },
  {
    id: 'g2',
    title: 'Hardline Liquid Loop Showcase',
    category: 'builds',
    image:
      'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800',
    description:
      'Perfect 90-degree parallel bends on satin frosted tubing with UV-purple fluid.'
  },
  {
    id: 'g3',
    title: 'Microscope BGA Repair Desk',
    category: 'microscope',
    image:
      'https://images.unsplash.com/photo-1597872200319-3367cd24174b?auto=format&fit=crop&q=80&w=800',
    description:
      'Soldering high-frequency power controllers under our high-definition dental microscope.'
  },
  {
    id: 'g4',
    title: 'Enthusiast Desk Battle-Station',
    category: 'builds',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    description:
      'Custom client setup with triple monitor rig synced with ambient lighting.'
  },
  {
    id: 'g5',
    title: 'Silicon Dies and Heatpipes',
    category: 'gpus',
    image:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800',
    description:
      'Exposing cooling copper chambers and re-routing high performance fins.'
  },
  {
    id: 'g6',
    title: 'Precision Assembly Center',
    category: 'workshop',
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
    description:
      'Each PC custom builds are assembled in our dust-controlled anti-static workstations.'
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
    issue: 'Artifacting under heavy load / Code 43 error',
    status: 'repair',
    lastUpdated: 'Today at 08:30 AM',
    progress: 60,
    notes: [
      'Device checked in: Physical damage around GDDR6 chip identified.',
      'Diagnostic report: Thermal cycling broke micro solder balls underneath Memory Chip B0.',
      'Repair phase: Removing memory chip, cleaning pads, and re-soldering new Micron GDDR6 memory chip.',
      'Up next: Thermal assembly replacement and 12-hour TimeSpy stress benchmark run.'
    ]
  },
  'SYS-2415': {
    id: 'SYS-2415',
    customerName: 'Elena Rostova',
    deviceModel: 'Custom Liquid Cooled Gaming Tower',
    issue: 'CPU thermal throttling & pump rattle',
    status: 'testing',
    lastUpdated: 'Yesterday at 04:15 PM',
    progress: 80,
    notes: [
      'System diagnosed: Corsair H150i AIO pump failure detected.',
      'Replacement: Brand new NZXT Kraken Elite 360 RGB installed.',
      'Maintenance: Premium Thermal Grizzly Kryonaut applied.',
      'Testing phase: Running Cinebench R23 looping load; CPU temperatures stabilized at peak 74°C (was 98°C).'
    ]
  },
  'GPU-7301': {
    id: 'GPU-7301',
    customerName: 'Jonathan Joestar',
    deviceModel: 'ASUS TUF RX 7900 XTX',
    issue: 'Complete power loss / Dead short-circuit',
    status: 'ready',
    lastUpdated: 'Today at 09:15 AM',
    progress: 100,
    notes: [
      'Diagnosis: Blown high-side DrMOS chip on Phase 6 creating a direct 12V short-to-ground.',
      'Repair phase: Removed DrMOS, cleaned burnt copper traces, re-bridged and installed high-grade 70A Power Stage.',
      'Testing: 24-hour Furmark burn-in completed successfully. Temperatures stable at 65°C core, 82°C hotspot.',
      'Status: Fully repaired, packed in protective ESD bags, and ready for pickup.'
    ]
  }
};
