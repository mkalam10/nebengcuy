import React from 'react';
import { Phone, Instagram, ShieldCheck } from 'lucide-react';
import { TabType, AppConfig } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  config: AppConfig;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, config }) => {
  return (
    <footer className="bg-[#05080E] border-t border-slate-800/80 text-slate-400 text-sm mt-16 pt-12 pb-8 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        
        {/* Left Col - Brand */}
        <div className="md:col-span-5 space-y-3">
          <div 
            onClick={() => setActiveTab('beranda')}
            className="flex items-center gap-2 cursor-pointer select-none group"
          >
            <Logo src={config.customLogoUrl} size="sm" />
            <span className="text-xs text-slate-500 font-normal ml-2">© 2025</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Komunitas Komuter Mahasiswa UNSRI.<br />
            Berangkat bareng, bayar adil, sampai aman.
          </p>
        </div>

        {/* Center Col - Navigation */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-white font-semibold text-sm tracking-wide">Tautan Cepat</h4>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-400">
            <button onClick={() => setActiveTab('beranda')} className="hover:text-[#D2F500] transition-colors cursor-pointer">
              Beranda
            </button>
            <span>|</span>
            <button onClick={() => setActiveTab('cara-kerja')} className="hover:text-[#D2F500] transition-colors cursor-pointer">
              Cara Kerja
            </button>
            <span>|</span>
            <button onClick={() => setActiveTab('daftar')} className="hover:text-[#D2F500] transition-colors cursor-pointer">
              Daftar
            </button>
            <span>|</span>
            <button onClick={() => setActiveTab('kontak')} className="hover:text-[#D2F500] transition-colors cursor-pointer">
              Kontak
            </button>
            <span>|</span>
            <button onClick={() => setActiveTab('kontak')} className="hover:text-[#D2F500] transition-colors cursor-pointer">
              Pusat Bantuan
            </button>
          </div>
        </div>

        {/* Right Col - Support Contact */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-white font-semibold text-sm tracking-wide">Dukungan</h4>
          <div className="space-y-2 text-xs">
            <a 
              href={config.whatsappAdminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-[#D2F500] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#00E5FF]" />
              <span>{config.whatsappNumber}</span>
            </a>
            <a 
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-[#00E5FF] transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>@nebengcuyid</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
          <span>Komunitas Terverifikasi • Aman • Nyaman • Saling Menghargai</span>
        </div>
        <div>
          © 2025 NebengCuy! Komunitas Komuter Mahasiswa UNSRI
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>Menghubungkan Mahasiswa, Membangun Masa Depan Berkelanjutan.</span>
          <div className="w-5 h-5 rounded bg-slate-800 p-0.5 inline-flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-full h-full" fill="none">
              <path d="M7 25V7L18 25V7" stroke="#00E5FF" strokeWidth="3" />
              <path d="M25 7L25 25" stroke="#D2F500" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
