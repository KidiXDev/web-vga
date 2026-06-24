import { Cpu, Menu, PhoneCall, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  onOpenTracker: () => void;
}

export default function Header({ onOpenTracker }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#before-after' },
    { label: 'Produk', href: '#products' },
    { label: 'Keunggulan', href: '#why-us' },
    { label: 'Alur Kerja', href: '#process' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Kontak', href: '#contact' }
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="relative p-2 bg-brand-blue/10 border border-brand-blue/20 rounded-xl group-hover:scale-105 transition-transform duration-300">
            <Cpu className="w-5 h-5 text-brand-blue" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold tracking-wider text-lg text-white">
              AKAHITO<span className="text-brand-blue"> STORE</span>
            </span>
            <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">
              SEMARANG
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-display text-xs tracking-wider uppercase font-semibold text-gray-400 hover:text-white transition-colors duration-200 relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenTracker}
            className="px-4 py-2 font-mono text-xs font-semibold border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 active:scale-95 cursor-pointer"
          >
            LACAK REPARASI
          </button>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-5 py-2 font-display text-xs font-bold bg-brand-blue hover:bg-brand-blue/90 text-neutral-950 rounded-lg transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            PESAN SLOT
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenTracker}
            className="px-3 py-1.5 font-mono text-[10px] font-semibold border border-brand-blue/40 text-brand-blue hover:bg-brand-blue/10 rounded-lg cursor-pointer"
          >
            LACAK
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-brand-blue transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[72px] left-0 w-full bg-dark-bg/95 backdrop-blur-lg border-b border-white/5 py-8 px-6 flex flex-col gap-6 animate-fadeIn z-40 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-display text-lg font-medium text-gray-200 hover:text-brand-blue transition-colors duration-200 py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenTracker();
              }}
              className="w-full py-3 font-mono text-xs font-semibold border border-white/10 text-gray-300 hover:bg-white/5 rounded-lg transition-colors text-center cursor-pointer"
            >
              LACAK REPARASI
            </button>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full py-3 font-display text-sm font-bold bg-brand-blue text-neutral-950 text-center rounded-lg shadow-lg"
            >
              PESAN SLOT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
