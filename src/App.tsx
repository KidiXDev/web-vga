import { useState } from 'react';
import BeforeAfter from './components/BeforeAfter';
import Brands from './components/Brands';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import LiveTracker from './components/LiveTracker';
import ProductCatalog from './components/ProductCatalog';
import RepairProcessTimeline from './components/RepairProcessTimeline';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import type { Product, RepairTicket } from './types';

export default function App() {
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [customTickets] = useState<{
    [key: string]: RepairTicket;
  }>({});

  // Handle assembly quote transfer from product catalog directly to WhatsApp
  const handleAddToQuoteRequest = (selectedParts: Product[]) => {
    if (selectedParts.length === 0) {
      alert('Keranjang estimasi Anda kosong.');
      return;
    }
    const partsList = selectedParts
      .map((p) => `- ${p.name} (Rp ${p.price.toLocaleString('id-ID')})`)
      .join('\n');
    const message = `Halo Akahito Store Semarang, saya ingin memesan perakitan PC Kustom dengan komponen berikut:\n\n${partsList}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6289660225666?text=${encodedMessage}`, '_blank');
  };

  // Handle quick booking directly from services modal selection to WhatsApp
  const handleBookService = (serviceName: string) => {
    const message = `Halo Akahito Store Semarang, saya ingin memesan layanan reparasi: ${serviceName}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6289660225666?text=${encodedMessage}`, '_blank');
  };

  const handleBookClickHero = () => {
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrowseClickHero = () => {
    const productsSec = document.querySelector('#products');
    if (productsSec) {
      productsSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="app"
      className="bg-dark-bg min-h-screen text-gray-100 flex flex-col font-sans overflow-x-hidden relative"
    >
      {/* Header element */}
      <Header onOpenTracker={() => setIsTrackerOpen(true)} />

      {/* Hero Section */}
      <Hero
        onBookClick={handleBookClickHero}
        onBrowseClick={handleBrowseClickHero}
      />

      {/* Brand coverage banner */}
      <Brands />

      {/* Featured Services Grid */}
      <Services onBookService={handleBookService} />

      {/* Before & After Interactive drag-to-reveal Slider */}
      <BeforeAfter />

      {/* Product Catalog Showcase & Budget Estimator */}
      <ProductCatalog onAddToQuoteRequest={handleAddToQuoteRequest} />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Repair Process Timeline */}
      <RepairProcessTimeline />

      {/* Testimonials */}
      <Testimonials />

      {/* Workshop Gallery */}
      <Gallery />

      {/* Booking Form and cyber-map */}
      <ContactForm />

      {/* Footer element */}
      <Footer />

      {/* Interactive Overlay Live Tracker Console */}
      <LiveTracker
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        customTickets={customTickets}
      />
    </div>
  );
}
