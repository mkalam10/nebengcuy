import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BerandaSection } from './components/BerandaSection';
import { CaraKerjaSection } from './components/CaraKerjaSection';
import { DaftarSection } from './components/DaftarSection';
import { KontakSection } from './components/KontakSection';
import { LinkConfigModal } from './components/LinkConfigModal';
import { RegistrationModal } from './components/RegistrationModal';
import { TabType, AppConfig } from './types';
import { getStoredConfig, saveStoredConfig } from './config';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('beranda');
  const [config, setConfig] = useState<AppConfig>(getStoredConfig);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleSaveConfig = (newConfig: AppConfig) => {
    setConfig(newConfig);
    saveStoredConfig(newConfig);
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 flex flex-col font-sans selection:bg-[#D2F500] selection:text-black">
      
      {/* Sticky Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        config={config}
        onOpenConfig={() => setIsConfigModalOpen(true)}
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
      />

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
        {activeTab === 'beranda' && (
          <BerandaSection config={config} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'cara-kerja' && (
          <CaraKerjaSection config={config} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'daftar' && (
          <DaftarSection config={config} />
        )}

        {activeTab === 'kontak' && (
          <KontakSection config={config} />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} config={config} />

      {/* Link Configuration Modal */}
      <LinkConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />

      {/* Registration Choice Modal */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        config={config}
      />

    </div>
  );
}
