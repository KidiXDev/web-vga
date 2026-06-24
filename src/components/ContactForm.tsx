import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Terminal,
  Ticket
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import type { RepairBooking, RepairTicket } from '../types';

interface ContactFormProps {
  prefilledNotes?: string;
  onNewTicketCreated: (ticket: RepairTicket) => void;
  onOpenTracker: () => void;
}

export default function ContactForm({
  prefilledNotes = '',
  onNewTicketCreated,
  onOpenTracker
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: 'gpu',
    deviceModel: '',
    issue: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState<RepairBooking | null>(
    null
  );
  const [isCopied, setIsCopied] = useState(false);

  const [prevPrefilledNotes, setPrevPrefilledNotes] = useState(prefilledNotes);
  if (prefilledNotes !== prevPrefilledNotes) {
    setPrevPrefilledNotes(prefilledNotes);
    if (prefilledNotes) {
      setFormData((prev) => ({
        ...prev,
        issue: prefilledNotes,
        deviceType: 'custom_pc'
      }));
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out all required contact details.');
      return;
    }

    // Generate random mock Booking and corresponding Ticket
    const randomId = `GPU-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking: RepairBooking = {
      id: randomId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      deviceType: formData.deviceType,
      deviceModel: formData.deviceModel || 'N/A',
      issueDescription: formData.issue,
      bookingDate: new Date().toLocaleDateString(),
      status: 'pending'
    };

    const newTicket: RepairTicket = {
      id: randomId,
      customerName: formData.name,
      deviceModel: formData.deviceModel || 'Standard HW Device',
      issue: formData.issue || 'Diagnose & General Repair',
      status: 'inspection',
      lastUpdated: 'Just Now',
      progress: 20,
      notes: [
        `Booking submitted: Initial Ticket created with ID ${randomId}.`,
        'Shipping label generated. Waiting for device delivery or local walk-in dropoff.',
        'Workbench reserved. Phase 1 visual inspection pending.'
      ]
    };

    setBookingSuccess(newBooking);
    onNewTicketCreated(newTicket); // Register in root app state
  };

  const copyToClipboard = () => {
    if (bookingSuccess) {
      navigator.clipboard.writeText(bookingSuccess.id);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold text-brand-blue tracking-widest uppercase block mb-3">
            RESERVE A WORKBENCH
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Book Your Professional <br />
            <span className="text-brand-blue font-extrabold">
              Repair & Build Slot
            </span>
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            No upfront diagnosis fee for shipped cards. Fill out our micro-form
            below to register your device instantly on our secure repair
            telemetry tracker.
          </p>
        </div>

        {/* Contact and Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Contact Details & Interactive Cyber-Map Widget (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Address Cards */}
            <div className="p-6 rounded-3xl bg-dark-card border border-white/5 shadow-2xl flex flex-col gap-6">
              <h3 className="font-display font-bold text-lg text-white">
                Laboratory Headquarters
              </h3>

              <div className="flex flex-col gap-4">
                {/* Loc */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue mt-0.5 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      LAB ADDRESS
                    </span>
                    <span className="text-sm text-gray-300 font-sans mt-0.5 leading-relaxed">
                      100 Enthusiast Way, Suite 404, Silicon Valley, CA 94025
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue mt-0.5 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      SECURE LAB LINE
                    </span>
                    <span className="text-sm text-gray-300 font-mono mt-0.5 font-semibold">
                      (555) AERO-GPU / (555) 237-6478
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue mt-0.5 shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      EMAIL DISPATCH
                    </span>
                    <span className="text-sm text-gray-300 font-sans mt-0.5">
                      lab@aerogpu.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Vector Cyber-Map Widget */}
            <div className="p-6 rounded-3xl bg-dark-card border border-white/5 shadow-2xl overflow-hidden relative group">
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[9px] text-brand-blue font-bold tracking-widest uppercase">
                  ACTIVE REGION MATRIX
                </span>
                <span className="font-mono text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />{' '}
                  LAB CONNECTED
                </span>
              </div>

              {/* Vector Grid Map Layout */}
              <div className="h-44 bg-black/40 border border-white/5 rounded-2xl relative flex items-center justify-center overflow-hidden">
                {/* Background matrix dot grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-size-[10px_10px] opacity-40" />

                {/* Glowing target node */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-blue border border-white flex items-center justify-center" />
                  <div className="absolute top-5 bg-dark-bg/95 border border-brand-blue/25 px-2 py-1 rounded shadow-lg backdrop-blur-sm pointer-events-none select-none">
                    <span className="font-mono text-[8px] font-bold text-white tracking-wider uppercase whitespace-nowrap">
                      HQ LAB: SILICON VALLEY
                    </span>
                  </div>
                </div>

                {/* Graphic line metrics */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <path
                    d="M 0,20 L 100,50 L 200,30 L 300,100 L 400,120"
                    stroke="var(--color-brand-blue)"
                    strokeDasharray="3,3"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M 0,140 L 150,110 L 250,150 L 400,60"
                    stroke="var(--color-brand-blue)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>

                <div className="absolute bottom-3 left-3 font-mono text-[9px] text-gray-500">
                  LAT: 37.4419° N, LON: 122.1430° W
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-3xl bg-dark-card border border-white/5 shadow-2xl flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-brand-blue" />
                <h3 className="font-display font-bold text-base text-white">
                  Operating Laboratory Hours
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm font-sans border-t border-white/5 pt-3">
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="font-mono text-white font-bold">
                    9:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400">Saturday</span>
                  <span className="font-mono text-white font-bold">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="col-span-2 text-xs text-gray-500 font-mono mt-1 pt-2 border-t border-white/2">
                  * Sunday: Closed (Emergency diagnostics via Discord and Slack
                  channel)
                </div>
              </div>
            </div>
          </div>

          {/* Quick Repair Booking Form / Success Dialog (Right - 7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!bookingSuccess ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-6 sm:p-8 rounded-3xl bg-dark-card border border-white/5 shadow-2xl relative"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Two col: name and email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col items-start gap-1.5">
                        <label className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          FULL NAME <span className="text-brand-blue">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-1.5">
                        <label className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          EMAIL ADDRESS{' '}
                          <span className="text-brand-blue">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="e.g. john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Two col: phone and device type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col items-start gap-1.5">
                        <label className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          PHONE NUMBER{' '}
                          <span className="text-brand-blue">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. (555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-1.5">
                        <label className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          SERVICE CATEGORY
                        </label>
                        <select
                          name="deviceType"
                          value={formData.deviceType}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-white outline-none transition-all cursor-pointer"
                        >
                          <option value="gpu" className="bg-dark-card">
                            Graphics Card Repair
                          </option>
                          <option value="custom_pc" className="bg-dark-card">
                            Custom PC Assembly
                          </option>
                          <option value="troubleshoot" className="bg-dark-card">
                            Hardware Diagnostics
                          </option>
                          <option value="maintenance" className="bg-dark-card">
                            Deep Cleaning & Paste
                          </option>
                          <option value="laptop" className="bg-dark-card">
                            Gaming Laptop Repair
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Device Model name */}
                    <div className="flex flex-col items-start gap-1.5">
                      <label className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        DEVICE MODEL / PARTS LIST
                      </label>
                      <input
                        type="text"
                        name="deviceModel"
                        placeholder="e.g. ASUS ROG Strix RTX 3080 Ti 12GB (or list of selected components)"
                        value={formData.deviceModel}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                      />
                    </div>

                    {/* Issue Description */}
                    <div className="flex flex-col items-start gap-1.5">
                      <label className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        REPAIRS SUMMARY / ISSUE DETAILS
                      </label>
                      <textarea
                        name="issue"
                        rows={4}
                        placeholder="Please describe symptoms, benchmarks, water spills, or specific overclocking requirements..."
                        value={formData.issue}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-sm text-white outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 mt-2 bg-brand-blue hover:bg-brand-blue/90 text-neutral-950 font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <Calendar className="w-4 h-4" />
                      Register Secure Diagnostic Booking
                    </button>

                    {/* Compliance terms */}
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 font-sans leading-relaxed mt-2 justify-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>
                        Zero diagnosis fee applied. Fast 1-Year hardware
                        warranty coverage included.
                      </span>
                    </div>
                  </form>
                </motion.div>
              ) : (
                /* Interactive Booking Confirmation Node */
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6 sm:p-8 rounded-3xl border border-brand-blue bg-dark-card/95 relative text-center"
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 rounded-full animate-pulse">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-xs font-semibold text-brand-blue tracking-widest uppercase">
                        BOOKING REGISTRATION SUCCESSFUL
                      </span>
                      <h3 className="font-display font-bold text-2xl text-white mt-1">
                        Diagnostic Slot Reserved
                      </h3>
                      <p className="text-gray-400 text-sm font-sans max-w-sm mx-auto mt-2.5 leading-relaxed">
                        We have successfully generated your AeroGPU repair
                        database ticket. Bring your device or mail it with the
                        registered ID.
                      </p>
                    </div>

                    {/* Copyable Ticket Block */}
                    <div className="p-4 rounded-xl bg-black/50 border border-white/5 w-full max-w-sm flex items-center justify-between font-mono">
                      <div className="flex items-center gap-3">
                        <Ticket className="w-5 h-5 text-brand-blue" />
                        <div className="flex flex-col items-start">
                          <span className="text-[9px] text-gray-500">
                            YOUR SYSTEM TICKET ID
                          </span>
                          <span className="text-base font-bold text-white tracking-wider">
                            {bookingSuccess.id}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={copyToClipboard}
                        className="p-2 rounded bg-white/5 hover:bg-brand-blue/20 text-gray-300 hover:text-brand-blue border border-white/10 hover:border-brand-blue/30 transition-colors flex items-center gap-1.5 text-2xs uppercase tracking-wider font-semibold cursor-pointer"
                      >
                        {isCopied ? 'Copied' : 'Copy'}
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Interactive Tracker Navigation Trigger */}
                    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-4 border-t border-white/5">
                      <button
                        onClick={onOpenTracker}
                        className="flex-1 py-3 bg-brand-blue hover:bg-brand-blue/90 text-neutral-950 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        Track Repair Real-Time
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          setBookingSuccess(null);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            deviceType: 'gpu',
                            deviceModel: '',
                            issue: ''
                          });
                        }}
                        className="flex-1 py-3 border border-white/10 hover:border-brand-blue/40 bg-white/5 text-gray-300 hover:text-white font-mono text-xs font-semibold rounded-xl transition-all cursor-pointer"
                      >
                        Book Another Device
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
