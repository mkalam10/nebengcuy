import React from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck, Users, Leaf, TrendingUp, ShieldAlert, Bike, UserCheck } from 'lucide-react';
import { AppConfig } from '../types';

interface DaftarSectionProps {
  config: AppConfig;
}

export const DaftarSection: React.FC<DaftarSectionProps> = ({ config }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Header Section */}
      <div className="text-center space-y-3 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#00E5FF]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>KHUSUS MAHASISWA UNSRI</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Bergabung dengan Gerakan <span className="text-[#D2F500]">Komunitas NebengCuy</span>
        </h2>
        
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Pendaftaran hanya untuk mahasiswa aktif UNSRI.
          Verifikasi dilakukan untuk memastikan keamanan, kenyamanan, dan kepercayaan komunitas.
        </p>
      </div>

      {/* 2 MAIN REGISTRATION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* CARD 1: DRIVER */}
        <div className="bg-[#0B101D] border-2 border-[#D2F500]/50 hover:border-[#D2F500] rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col justify-between space-y-6 transition-all relative overflow-hidden group">
          
          {/* Top Badge & Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#D2F500]/10 border border-[#D2F500]/40 flex items-center justify-center text-[#D2F500] shadow-md">
                <Bike className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider uppercase bg-slate-900 border border-slate-700 text-[#D2F500] px-3 py-1 rounded-full">
                Untuk Mahasiswa yang Ingin
              </span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white group-hover:text-[#D2F500] transition-colors">
                Memberi Tebengan (Driver)
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Bagikan perjalananmu, patungan bensin, dan bantu teman-teman UNSRI komuter setiap hari.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D2F500] shrink-0" />
                <span>Wajib verifikasi KPM mahasiswa aktif</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D2F500] shrink-0" />
                <span>Patungan bensin lebih hemat</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D2F500] shrink-0" />
                <span>Tambah kompensasi biaya maintenance kendaraan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#D2F500] shrink-0" />
                <span>Perjalanan lebih efisien</span>
              </div>
            </div>
          </div>

          {/* Action Button & Subtext */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href={config.gformDriverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#D2F500] hover:bg-[#c0e000] text-black font-extrabold text-sm py-3.5 px-5 rounded-xl shadow-lg shadow-[#d2f500]/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              <span>Daftar Jadi Driver (Google Forms)</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Komunitas terverifikasi • Aman • Nyaman • Saling menghargai</span>
            </div>
          </div>

        </div>

        {/* CARD 2: PENUMPANG */}
        <div className="bg-[#0B101D] border-2 border-[#00E5FF]/50 hover:border-[#00E5FF] rounded-3xl p-6 lg:p-8 shadow-2xl flex flex-col justify-between space-y-6 transition-all relative overflow-hidden group">
          
          {/* Top Badge & Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shadow-md">
                <UserCheck className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider uppercase bg-slate-900 border border-slate-700 text-[#00E5FF] px-3 py-1 rounded-full">
                Untuk Mahasiswa yang Ingin
              </span>
            </div>

            <div>
              <h3 className="text-xl font-black text-white group-hover:text-[#00E5FF] transition-colors">
                Mencari Tebengan (Penumpang)
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Komuter hemat, aman, dan nyaman bersama komunitas mahasiswa UNSRI.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Wajib verifikasi KPM mahasiswa aktif</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Proses cepat & tanpa ribet</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Kloter keberangkatan terjadwal</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Perjalanan aman dengan helm pribadi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                <span>Harga patungan lebih hemat</span>
              </div>
            </div>
          </div>

          {/* Action Button & Subtext */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <a
              href={config.gformPassengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-slate-800 text-[#00E5FF] border border-[#00E5FF] font-extrabold text-sm py-3.5 px-5 rounded-xl shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              <span>Daftar Jadi Penumpang (Google Forms)</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Komunitas terverifikasi • Aman • Nyaman • Saling menghargai</span>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM BENEFIT GRID */}
      <div className="space-y-4 pt-6">
        <h3 className="text-center text-lg font-bold text-white">
          Bersama NebengCuy, Kita Berdampak Nyata
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-[#00E5FF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Aman & Terverifikasi</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Wajib verifikasi KPM untuk menjaga keamanan & kepercayaan komunitas.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-yellow-950/60 border border-[#D2F500]/40 flex items-center justify-center text-[#D2F500]">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Komunitas Mahasiswa</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dibuat oleh & untuk mahasiswa UNSRI. Saling membantu, saling menghargai.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-[#00E5FF]">
              <Leaf className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Membantu Mengurangi CO₂</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Setiap perjalanan patungan membantu mengurangi emisi CO₂ untuk iklim masa depan.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#0B101D] border border-slate-800 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-yellow-950/60 border border-[#D2F500]/40 flex items-center justify-center text-[#D2F500]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Perjalanan Lebih Efisien</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Rute, waktu, dan kloter terstruktur membuat perjalanan lebih efisien dan terhindar dari kemacetan.
            </p>
          </div>

        </div>
      </div>

      {/* SOP SAFETY BANNER */}
      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-xs text-slate-300 shadow-xl">
        <div className="p-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 shrink-0">
          <ShieldAlert className="w-6 h-6" />
        </div>
        <p className="leading-relaxed">
          Wajib menggunakan <strong className="text-[#D2F500]">helm pribadi</strong> selama perjalanan. Patuhi <strong className="text-white">SOP komunitas</strong> dan rambu lalu lintas. Pelanggaran akan dikenakan sanksi sesuai aturan komunitas NebengCuy.
        </p>
      </div>

    </div>
  );
};
