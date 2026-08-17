import React from 'react';
import { Search, Shield, DollarSign, Clock, ArrowRight, CheckCircle2, Users, MapPin, Navigation } from 'lucide-react';
import { AppConfig, TabType } from '../types';

interface BerandaSectionProps {
  config: AppConfig;
  setActiveTab: (tab: TabType) => void;
}

export const BerandaSection: React.FC<BerandaSectionProps> = ({ config, setActiveTab }) => {
  return (
    <div className="space-y-16 animate-in fade-in duration-300">
      
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4 lg:pt-8">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-slate-300 shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>#1 Komunitas Komuter Mahasiswa UNSRI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight">
            Solusi Komuter<br />
            Palembang <span className="text-[#00E5FF]">↔</span> Indralaya<br />
            Paling <span className="text-[#D2F500]">Hemat & Aman</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            NebengCuy adalah platform patungan bensin khusus mahasiswa UNSRI.
            Berangkat bareng, bayar adil, sampai tujuan dengan aman.
          </p>

          {/* CTA Action Buttons - Directing to Google Forms as requested */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            
            {/* Cari Tebengan (Passenger GForm) */}
            <a
              href={config.gformPassengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#D2F500] hover:bg-[#c2e500] text-black font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#d2f500]/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Cari Tebengan</span>
            </a>

            {/* Daftar Jadi Driver (Driver GForm) */}
            <a
              href={config.gformDriverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-slate-800 text-white border border-[#00E5FF]/60 hover:border-[#00E5FF] font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <Navigation className="w-4 h-4 text-[#00E5FF] group-hover:rotate-45 transition-transform" />
              <span>Daftar Jadi Driver</span>
            </a>
          </div>

          {/* Feature Checkmarks */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
              <span>Wajib Verifikasi KPM</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
              <span>Patungan Bensin Transparan</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
              <span>Khusus Sivitas Akademika</span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Map Illustration */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#080C14] border border-slate-800 p-6 shadow-2xl overflow-hidden min-h-[360px] flex flex-col justify-between">
            
            {/* Background Grid Pattern & Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(#00E5FF_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#D2F500]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Landmark - Palembang */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Titik Awal</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00E5FF]" />
                  <h3 className="text-lg font-black text-white">PALEMBANG</h3>
                </div>
                <p className="text-xs text-slate-400">Kampus Bukit</p>
              </div>

              {/* Mini Bridge Visual Card */}
              <div className="w-24 h-14 rounded-xl bg-slate-900/80 border border-slate-700/60 overflow-hidden relative shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[10px] text-cyan-400 font-bold">
                  🌉 Ampera
                </div>
              </div>
            </div>

            {/* Curved Route Visual Path */}
            <div className="relative my-6 py-4 flex items-center justify-center">
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80" fill="none">
                {/* Glowing Background Path */}
                <path 
                  d="M 20 20 Q 150 80 280 60" 
                  stroke="#00E5FF" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  className="opacity-20 blur-sm"
                />
                {/* Main Path */}
                <path 
                  d="M 20 20 Q 150 80 280 60" 
                  stroke="url(#routeGradient)" 
                  strokeWidth="3.5" 
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="100%" stopColor="#D2F500" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Motorbike Icon on Route */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0F172A] border border-cyan-400/80 p-2.5 rounded-full shadow-lg shadow-cyan-500/20 text-[#00E5FF] animate-pulse">
                <div className="flex items-center gap-1">
                  <span className="text-base">🛵</span>
                </div>
              </div>

              {/* Floating Badge Card: Berangkat Bareng */}
              <div className="absolute bottom-0 left-4 bg-slate-900/90 border border-slate-700/80 px-3.5 py-2 rounded-xl flex items-center gap-3 shadow-xl backdrop-blur-md">
                <div className="p-1.5 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#D2F500]">Berangkat Bareng</h4>
                  <p className="text-[10px] text-slate-400">Lebih Hemat, Lebih Aman</p>
                </div>
              </div>
            </div>

            {/* Bottom Landmark - Indralaya */}
            <div className="relative z-10 flex items-center justify-between">
              {/* Mini Campus Visual Card */}
              <div className="w-24 h-14 rounded-xl bg-slate-900/80 border border-slate-700/60 overflow-hidden relative shadow-md">
                <div className="w-full h-full bg-slate-900 flex items-center justify-center text-[10px] text-yellow-400 font-bold">
                  🏫 UNSRI
                </div>
              </div>

              <div className="space-y-0.5 text-right">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tujuan</span>
                <div className="flex items-center justify-end gap-2">
                  <h3 className="text-lg font-black text-white">INDRALAYA</h3>
                  <MapPin className="w-4 h-4 text-[#D2F500]" />
                </div>
                <p className="text-xs text-slate-400">Kampus Indralaya</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* BOTTOM 3 FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        
        {/* Card 1: Aman & Terverifikasi */}
        <div 
          onClick={() => setActiveTab('cara-kerja')}
          className="group p-6 rounded-2xl bg-[#0B101D] border border-slate-800/90 hover:border-cyan-500/50 hover:bg-[#0E1526] transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-xl"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                Aman & Terverifikasi
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Setiap pengguna wajib verifikasi KPM mahasiswa aktif UNSRI. Kami jaga keamanan komunitas.
              </p>
            </div>
          </div>
          <div className="pt-2 flex items-center text-xs font-bold text-[#00E5FF]">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>

        {/* Card 2: Fair Cost-Sharing */}
        <div 
          onClick={() => setActiveTab('cara-kerja')}
          className="group p-6 rounded-2xl bg-[#0B101D] border border-slate-800/90 hover:border-[#D2F500]/50 hover:bg-[#0E1526] transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-xl"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-yellow-950/60 border border-[#D2F500]/40 flex items-center justify-center text-[#D2F500] group-hover:scale-105 transition-transform">
              <DollarSign className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#D2F500] transition-colors">
                Fair Cost-Sharing
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Patungan bensin transparan via QRIS DANA. Bayar sesuai jarak, tanpa markup, tanpa keuntungan.
              </p>
            </div>
          </div>
          <div className="pt-2 flex items-center text-xs font-bold text-[#D2F500]">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>

        {/* Card 3: Terstruktur & Tepat Waktu */}
        <div 
          onClick={() => setActiveTab('cara-kerja')}
          className="group p-6 rounded-2xl bg-[#0B101D] border border-slate-800/90 hover:border-cyan-500/50 hover:bg-[#0E1526] transition-all cursor-pointer flex flex-col justify-between space-y-4 shadow-xl"
        >
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-[#00E5FF] group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                Terstruktur & Tepat Waktu
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Sistem kloter dengan jadwal keberangkatan yang jelas setiap jam. Sesuai jadwal kuliahmu.
              </p>
            </div>
          </div>
          <div className="pt-2 flex items-center text-xs font-bold text-[#00E5FF]">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>

      </section>

    </div>
  );
};
