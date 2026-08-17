import React, { useState } from 'react';
import { User, Menu, X, Settings } from 'lucide-react';
import { TabType, AppConfig } from '../types';
import { Logo } from './Logo';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  config: AppConfig;
  onOpenConfig: () => void;
  onOpenRegisterModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  config,
  onOpenConfig,
  onOpenRegisterModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'cara-kerja', label: 'Cara Kerja' },
    { id: 'daftar', label: 'Daftar' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#070A11]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-12 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setActiveTab('beranda')} 
          className="cursor-pointer group select-none"
        >
          <Logo src={config.customLogoUrl} size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D2F500] rounded-full shadow-[0_0_8px_#D2F500]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenConfig}
            title="Pengaturan Link (GForm & WA)"
            className="p-2 rounded-full text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700"
          >
            <Settings className="w-4 h-4" />
          </button>
          
          <button
            onClick={onOpenRegisterModal}
            className="flex items-center gap-2 bg-[#D2F500] hover:bg-[#bce000] text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-[#d2f500]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <User className="w-4 h-4 stroke-[2.5]" />
            <span>Masuk / Daftar</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenConfig}
            className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/50"
          >
            <Settings className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-2 pb-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === item.id
                  ? 'bg-slate-800 text-[#D2F500] border border-[#D2F500]/30'
                  : 'text-slate-300 hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRegisterModal();
            }}
            className="mt-2 flex items-center justify-center gap-2 bg-[#D2F500] text-black font-bold text-sm px-4 py-3 rounded-xl shadow-md"
          >
            <User className="w-4 h-4 stroke-[2.5]" />
            <span>Masuk / Daftar</span>
          </button>
        </div>
      )}
    </header>
  );
};
