import React from 'react';
import { UserCheck, CalendarClock, Leaf, Wallet, CheckCircle2, HeartHandshake, Users, ShieldCheck, Route, Bike } from 'lucide-react';
import { AppConfig, TabType } from '../types';

interface CaraKerjaSectionProps {
  config: AppConfig;
  setActiveTab: (tab: TabType) => void;
}

export const CaraKerjaSection: React.FC<CaraKerjaSectionProps> = ({ config, setActiveTab }) => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      
      {/* Header Badge & Title */}
      <div className="text-center space-y-3 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#00E5FF]">
          <span>⚡ PROSES MUDAH & AMAN</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Cara Kerja <span className="text-[#D2F500]">NebengCuy</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
          NebengCuy adalah gerakan komuter hijau mahasiswa UNSRI.
          Lebih hemat, aman, transparan, dan berdampak nyata untuk SDGs.
        </p>
      </div>

      {/* Top Stepper Timeline Icons Row */}
      <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto px-10 relative">
        <div className="absolute top-1/2 left-20 right-20 h-0.5 border-t-2 border-dashed border-cyan-500/30 -z-0" />
        
        {/* Step 1 Icon */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-[#0F172A] border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-lg shadow-cyan-500/20">
          <UserCheck className="w-7 h-7" />
        </div>

        {/* Step 2 Icon */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-[#0F172A] border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-lg shadow-cyan-500/20">
          <CalendarClock className="w-7 h-7" />
        </div>

        {/* Step 3 Icon */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-[#0F172A] border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-lg shadow-cyan-500/20">
          <Leaf className="w-7 h-7" />
        </div>

        {/* Step 4 Icon */}
        <div className="relative z-10 w-16 h-16 rounded-full bg-[#0F172A] border-2 border-[#00E5FF] flex items-center justify-center text-[#00E5FF] shadow-lg shadow-cyan-500/20">
          <Wallet className="w-7 h-7" />
        </div>
      </div>

      {/* 4 Step Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* STEP 1 */}
        <div className="bg-[#0B101D] border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-yellow-950/80 border border-[#D2F500] text-[#D2F500] font-black text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="text-base font-bold text-white">
                Pendaftaran & Verifikasi KPM
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Semua pengguna wajib verifikasi Kartu Pelajar Mahasiswa (KPM) untuk menjaga keamanan komunitas.
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#00E5FF]">
                <Bike className="w-3.5 h-3.5" /> Driver
              </div>
              <p className="text-[11px] text-slate-400">Wajib KPM & SIM C</p>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[#00E5FF]">
                <Users className="w-3.5 h-3.5" /> Penumpang
              </div>
              <p className="text-[11px] text-slate-400">Wajib KPM (Mahasiswa UNSRI)</p>
            </div>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="bg-[#0B101D] border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-yellow-950/80 border border-[#D2F500] text-[#D2F500] font-black text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="text-base font-bold text-white">
                Pemesanan & Kloter Pukul 21.00 WIB
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pesan tebegnan sebelum jam 21.00 WIB. Pembayaran patungan bensin dilakukan via QRIS DANA (escrow transparan).
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Cut-off booking: 21.00 WIB</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Pembayaran via QRIS DANA</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Dana ditahan aman hingga perjalanan selesai</span>
            </div>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="bg-[#0B101D] border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-yellow-950/80 border border-[#D2F500] text-[#D2F500] font-black text-sm flex items-center justify-center">
                3
              </span>
              <h3 className="text-base font-bold text-white">
                Aksi Nyata SDGs & Matching
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sistem otomatis mencocokkan kloter pada pukul 21.00 WIB berdasarkan rute & waktu keberangkatan.
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Mengurangi emisi karbon</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Mengurangi kemacetan di rute Palembang–Indralaya</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Komuter hijau untuk generasi masa depan</span>
            </div>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="bg-[#0B101D] border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-yellow-950/80 border border-[#D2F500] text-[#D2F500] font-black text-sm flex items-center justify-center">
                4
              </span>
              <h3 className="text-base font-bold text-white">
                Selesai & Payout Transparan
              </h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Perjalanan aman dengan helm pribadi. Berikan rating untuk menjaga kualitas komunitas. Dana bensin dicairkan ke driver keesokan harinya.
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Gunakan helm pribadi</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Rating mutual (driver & penumpang)</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
              <span>Payout dana bensin ke driver (H+1)</span>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM IMPACT BANNER */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#0B101D] to-[#0A0E18] border border-slate-800 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-[#00E5FF] shrink-0">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs text-slate-400 font-medium">Lebih dari sekadar berbagi tumpangan.</span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Bersama NebengCuy, kita hemat, aman, dan beri dampak.
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-slate-200">
            <Users className="w-4 h-4 text-[#00E5FF]" />
            <span><strong className="text-[#D2F500]">100+</strong> Mahasiswa Aktif</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-slate-200">
            <Leaf className="w-4 h-4 text-[#00E5FF]" />
            <span><strong className="text-[#D2F500]">CO₂ 12.5 Ton</strong> Emisi Karbon Berkurang</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-slate-200">
            <Route className="w-4 h-4 text-[#00E5FF]" />
            <span><strong className="text-[#D2F500]">2 Rute Utama</strong> Palembang ↔ Indralaya</span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl text-slate-200">
            <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
            <span><strong className="text-[#D2F500]">100%</strong> Sivitas Akademika</span>
          </div>
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActiveTab('daftar')}
          className="inline-flex items-center gap-2 bg-[#D2F500] hover:bg-[#c2e500] text-black font-extrabold text-sm px-8 py-3.5 rounded-full shadow-xl shadow-[#d2f500]/20 transition-all cursor-pointer"
        >
          <span>Mulai Gabung Komunitas Sekarang</span>
        </button>
      </div>

    </div>
  );
};
