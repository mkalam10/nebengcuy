import React from 'react';
import { X, ExternalLink, Bike, UserCheck, ShieldCheck } from 'lucide-react';
import { AppConfig } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  config,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0B101D] border border-slate-700/80 rounded-2xl max-w-xl w-full p-6 lg:p-8 shadow-2xl relative space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> KHUSUS MAHASISWA UNSRI
          </div>
          <h3 className="text-2xl font-extrabold text-white">Pilih Jenis Pendaftaran</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Silakan pilih peran kamu. Kamu akan diarahkan langsung ke Google Form pendaftaran resmi NebengCuy.
          </p>
        </div>

        {/* 2 Choice Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Driver Choice */}
          <a
            href={config.gformDriverUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-[#131C2E] to-[#0A0F1B] border border-[#D2F500]/40 hover:border-[#D2F500] hover:shadow-[0_0_20px_rgba(210,245,0,0.15)] transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#D2F500]/10 border border-[#D2F500]/30 flex items-center justify-center text-[#D2F500] group-hover:scale-110 transition-transform">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D2F500]">Pemberi Tebengan</span>
                <h4 className="text-base font-bold text-white group-hover:text-[#D2F500] transition-colors">Daftar Jadi Driver</h4>
                <p className="text-xs text-slate-400 mt-1">Punya motor/mobil, ingin hemat bensin & bantu teman UNSRI.</p>
              </div>
            </div>
            
            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#D2F500]">
              <span>Buka Form Driver</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Passenger Choice */}
          <a
            href={config.gformPassengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex flex-col justify-between p-5 rounded-xl bg-gradient-to-b from-[#131C2E] to-[#0A0F1B] border border-[#00E5FF]/40 hover:border-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00E5FF]">Pencari Tebengan</span>
                <h4 className="text-base font-bold text-white group-hover:text-[#00E5FF] transition-colors">Daftar Jadi Penumpang</h4>
                <p className="text-xs text-slate-400 mt-1">Butuh tebengan hemat, aman & terverifikasi Palembang-Indralaya.</p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#00E5FF]">
              <span>Buka Form Penumpang</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Modal Footer Note */}
        <p className="text-[11px] text-center text-slate-500">
          Wajib melampirkan verifikasi KPM (Kartu Pelajar Mahasiswa) UNSRI aktif pada form.
        </p>
      </div>
    </div>
  );
};
