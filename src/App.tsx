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
  const [customTickets, setCustomTickets] = useState<{
    [key: string]: RepairTicket;
  }>({});
  const [prefilledContactNotes, setPrefilledContactNotes] = useState('');

  // Handle registering a newly created ticket from the contact booking form
  const handleNewTicketCreated = (newTicket: RepairTicket) => {
    setCustomTickets((prev) => ({
      ...prev,
      [newTicket.id]: newTicket
    }));
  };

  // Handle assembly quote transfer from product catalog to contact booking form
  const handleAddToQuoteRequest = (selectedParts: Product[]) => {
    const partsList = selectedParts
      .map((p) => `- ${p.name} ($${p.price})`)
      .join('\n');
    const note = `I would like to request a Custom PC Assembly Quote for the following components:\n\n${partsList}\n\nPlease prepare my workbench diagnostics.`;
    setPrefilledContactNotes(note);
  };

  // Handle quick booking directly from services modal selection
  const handleBookService = (serviceName: string) => {
    const note = `I would like to book the following service: ${serviceName}.\nPlease allocate my diagnostic workbench.`;
    setPrefilledContactNotes(note);

    // Smooth scroll to contact form
    const contactSec = document.querySelector('#contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
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
      <ContactForm
        prefilledNotes={prefilledContactNotes}
        onNewTicketCreated={handleNewTicketCreated}
        onOpenTracker={() => setIsTrackerOpen(true)}
      />

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
