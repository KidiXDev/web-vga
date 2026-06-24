export interface Product {
  id: string;
  name: string;
  category: 'gpu' | 'cpu' | 'motherboard' | 'ram' | 'psu' | 'case';
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  specs: string[];
  inStock: boolean;
  isPopular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  basePrice: string;
  turnaround: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  repairType: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'gpus' | 'builds' | 'workshop' | 'microscope';
  image: string;
  description: string;
}

export interface RepairTicket {
  id: string;
  customerName: string;
  deviceModel: string;
  issue: string;
  status: 'inspection' | 'diagnosis' | 'repair' | 'testing' | 'ready';
  lastUpdated: string;
  progress: number; // 0 to 100
  notes: string[];
}

export interface RepairBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  deviceType: string;
  deviceModel: string;
  issueDescription: string;
  bookingDate: string;
  status: 'pending' | 'approved' | 'active';
}
