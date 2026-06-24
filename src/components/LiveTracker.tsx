import {
  Activity,
  CheckCircle2,
  Search,
  ShieldAlert,
  Terminal,
  Wrench,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useState } from 'react';
import { SAMPLE_TICKETS } from '../data';
import type { RepairTicket } from '../types';

interface LiveTrackerProps {
  customTickets?: { [key: string]: RepairTicket };
  isOpen: boolean;
  onClose: () => void;
}

export default function LiveTracker({
  customTickets = {},
  isOpen,
  onClose
}: LiveTrackerProps) {
  const [ticketId, setTicketId] = useState<string>('');
  const [searchError, setSearchError] = useState<string | null>(null);
  const [activeTicket, setActiveTicket] = useState<RepairTicket | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const id = ticketId.trim().toUpperCase();

    // Check custom local bookings or standard sample tickets
    const ticket = customTickets[id] || SAMPLE_TICKETS[id];

    if (ticket) {
      setActiveTicket(ticket);
      setSearchError(null);
    } else {
      setSearchError(
        `Tiket aktif dengan ID "${id}" tidak ditemukan. Coba masukkan "GPU-7301" or "GPU-9842" untuk pengujian.`
      );
      setActiveTicket(null);
    }
  };

  const statusPhases = [
    {
      key: 'inspection',
      label: '1. Inspeksi',
      icon: <Search className="w-4 h-4" />
    },
    {
      key: 'diagnosis',
      label: '2. Diagnosis',
      icon: <ShieldAlert className="w-4 h-4" />
    },
    {
      key: 'repair',
      label: '3. Reparasi Board',
      icon: <Wrench className="w-4 h-4" />
    },
    {
      key: 'testing',
      label: '4. Uji Stabilitas',
      icon: <Activity className="w-4 h-4" />
    },
    {
      key: 'ready',
      label: '5. Selesai',
      icon: <CheckCircle2 className="w-4 h-4" />
    }
  ];

  const getPhaseIndex = (status: string) => {
    return statusPhases.findIndex((p) => p.key === status);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Blur backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Tracker Portal Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-dark-card border border-brand-blue/30 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]"
          >
            {/* Header branding band */}
            <div className="p-6 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-blue/15 rounded-lg">
                  <Terminal className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-mono text-2xs text-brand-blue font-bold tracking-widest uppercase">
                    PORTAL AMAN AKAHITO STORE
                  </span>
                  <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                    Konsol Pelacak Perbaikan Real-Time
                  </h2>
                </div>
              </div>

              {/* Close portal button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-black/40 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tracker Content (Internal Scrollable) */}
            <div className="p-6 sm:p-8 overflow-y-auto grow">
              {/* Search ticket input form */}
              <div className="max-w-xl mx-auto mb-10 text-center">
                <p className="text-xs text-gray-400 mb-4 font-sans leading-relaxed">
                  Masukkan ID Perbaikan alfanumerik unik Anda (contoh:{' '}
                  <span className="font-mono text-brand-blue font-semibold">
                    GPU-9842
                  </span>{' '}
                  atau{' '}
                  <span className="font-mono text-brand-blue font-semibold">
                    GPU-7301
                  </span>
                  ) untuk mengakses node pelacakan perbaikan kami.
                </p>

                <form onSubmit={handleSearch} className="flex gap-2">
                  <div className="relative grow">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="MASUKKAN ID PERBAIKAN (CONTOH: GPU-7301)"
                      value={ticketId}
                      onChange={(e) => setTicketId(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl text-sm font-mono tracking-wider uppercase text-white outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/80 text-neutral-950 font-display font-bold text-xs rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    HUBUNGKAN
                  </button>
                </form>

                {searchError && (
                  <p className="text-xs text-red-400 font-mono mt-3">
                    {searchError}
                  </p>
                )}
              </div>

              {/* Display Active Ticket Status */}
              <AnimatePresence mode="wait">
                {activeTicket ? (
                  <motion.div
                    key={activeTicket.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex flex-col gap-8 text-left"
                  >
                    {/* Device Overview Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                          ID PERBAIKAN
                        </span>
                        <span className="font-mono text-base font-bold text-brand-blue">
                          {activeTicket.id}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                          MODEL HARDWARE
                        </span>
                        <span className="font-display text-sm font-bold text-white">
                          {activeTicket.deviceModel}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider">
                          KERUSAKAN DIADUKAN
                        </span>
                        <span className="text-xs text-gray-300 font-sans line-clamp-1">
                          {activeTicket.issue}
                        </span>
                      </div>
                    </div>

                    {/* Progress Track (Steps) */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-[10px] font-bold text-brand-blue tracking-widest uppercase">
                          STATUS LINIMASA FASE
                        </span>
                        <span className="font-mono text-xs text-brand-blue font-bold">
                          {activeTicket.progress}% SELESAI
                        </span>
                      </div>

                      {/* Horizontal Tracker for desktop / Vertical for mobile */}
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
                        {statusPhases.map((phase, idx) => {
                          const currentIdx = getPhaseIndex(activeTicket.status);
                          const isCompleted = idx < currentIdx;
                          const isActive = idx === currentIdx;

                          return (
                            <div
                              key={phase.key}
                              className={`p-4 rounded-xl border flex flex-col justify-between gap-3 relative transition-all ${
                                isActive
                                  ? 'bg-brand-blue/10 border-brand-blue/30 text-white'
                                  : isCompleted
                                    ? 'bg-emerald-500/5 border-emerald-500/20 text-gray-400'
                                    : 'bg-white/2 border-white/5 text-gray-600'
                              }`}
                            >
                              <div className="flex justify-between items-center">
                                <div
                                  className={`p-2 rounded-lg ${
                                    isActive
                                      ? 'bg-brand-blue/20 text-brand-blue'
                                      : isCompleted
                                        ? 'bg-emerald-500/20 text-emerald-400'
                                        : 'bg-white/5 text-gray-600'
                                  }`}
                                >
                                  {phase.icon}
                                </div>
                                {isCompleted && (
                                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 fill-emerald-400/10" />
                                )}
                              </div>
                              <span
                                className={`font-display font-bold text-xs ${
                                  isActive
                                    ? 'text-white'
                                    : isCompleted
                                      ? 'text-gray-300'
                                      : 'text-gray-500'
                                }`}
                              >
                                {phase.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Technician Workbench Logs (Dynamic Command Line View) */}
                    <div className="p-6 rounded-2xl bg-black/60 border border-white/5 font-mono">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                        <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                          LOG MEJA KERJA TEKNISI // MEJA TERLINDUNGI ESD
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-brand-blue rounded-full animate-ping" />
                          <span className="text-[9px] text-gray-500">
                            TERKONEKSI LIVE
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 max-h-[180px] overflow-y-auto text-left text-xs text-gray-300">
                        {activeTicket.notes.map((note: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-brand-blue shrink-0">
                              ~ $
                            </span>
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="py-12 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center max-w-md mx-auto">
                    <Terminal className="w-10 h-10 text-gray-600 mb-4" />
                    <span className="font-display font-bold text-sm text-gray-400 mb-2">
                      Menunggu Koneksi Sistem
                    </span>
                    <p className="text-xs text-gray-500 font-sans px-6">
                      Tidak ada tiket aktif yang dimuat. Silakan cari ID di atas untuk melihat status telemetri saat ini.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer console note */}
            <div className="p-4 bg-black/40 border-t border-white/5 text-center font-mono text-[9px] text-gray-500">
              DIAMANKAN MELALUI PORTAL PUSAT AKAHITO STORE • WAKTU SEKARANG: 2026-06-24
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
