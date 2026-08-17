import React, { useState, useRef } from 'react';
import { X, Save, ExternalLink, Link2, Phone, RotateCcw, Image, Upload } from 'lucide-react';
import { AppConfig } from '../types';
import { DEFAULT_CONFIG, DEFAULT_LOGO } from '../config';

interface LinkConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: AppConfig;
  onSave: (newConfig: AppConfig) => void;
}

export const LinkConfigModal: React.FC<LinkConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<AppConfig>(config);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen) return null;

  const handleReset = () => {
    setFormData(DEFAULT_CONFIG);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFormData(prev => ({ ...prev, customLogoUrl: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build whatsapp admin url dynamically if phone changed
    const cleanPhone = formData.whatsappNumber.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
    
    const updated: AppConfig = {
      ...formData,
      customLogoUrl: formData.customLogoUrl || DEFAULT_LOGO,
      whatsappAdminUrl: `https://wa.me/${formattedPhone}?text=Halo%20Admin%20NebengCuy!%20Saya%20ingin%20bertanya%20mengenai%20layanan%20tebengan%20UNSRI.`
    };

    onSave(updated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0B101D] border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#D2F500]/10 border border-[#D2F500]/30 text-[#D2F500]">
              <Link2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Pengaturan Logo & Link Form</h3>
              <p className="text-xs text-slate-400">Atur logo brand, link pendaftaran & WhatsApp Admin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4 text-sm max-h-[75vh] overflow-y-auto pr-1">
          {/* Logo Preview & Custom Image */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Image className="w-3.5 h-3.5 text-[#D2F500]" /> Logo NebengCuy
            </label>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-black border border-slate-700 p-0.5 overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src={formData.customLogoUrl || DEFAULT_LOGO}
                  alt="Preview Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 space-y-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 flex items-center gap-1.5"
                  >
                    <Upload className="w-3 h-3 text-[#00E5FF]" />
                    <span>Unggah Gambar Logo (JPG/PNG)</span>
                  </button>
                  {formData.customLogoUrl !== DEFAULT_LOGO && (
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, customLogoUrl: DEFAULT_LOGO }))}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Reset Logo
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-slate-400">Format JPG atau PNG transparan/hitam</p>
              </div>
            </div>
          </div>

          {/* Driver GForm */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Link Google Form - Driver</span>
              <a 
                href={formData.gformDriverUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#D2F500] text-[11px] hover:underline flex items-center gap-1"
              >
                Uji Link <ExternalLink className="w-3 h-3" />
              </a>
            </label>
            <input
              type="url"
              required
              value={formData.gformDriverUrl}
              onChange={(e) => setFormData({ ...formData, gformDriverUrl: e.target.value })}
              placeholder="https://docs.google.com/forms/..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#D2F500] focus:ring-1 focus:ring-[#D2F500]"
            />
          </div>

          {/* Passenger GForm */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>Link Google Form - Penumpang</span>
              <a 
                href={formData.gformPassengerUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-[#00E5FF] text-[11px] hover:underline flex items-center gap-1"
              >
                Uji Link <ExternalLink className="w-3 h-3" />
              </a>
            </label>
            <input
              type="url"
              required
              value={formData.gformPassengerUrl}
              onChange={(e) => setFormData({ ...formData, gformPassengerUrl: e.target.value })}
              placeholder="https://docs.google.com/forms/..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]"
            />
          </div>

          {/* WhatsApp Admin Number */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Admin
              </span>
              <a 
                href={formData.whatsappAdminUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-400 text-[11px] hover:underline flex items-center gap-1"
              >
                Uji WA <ExternalLink className="w-3 h-3" />
              </a>
            </label>
            <input
              type="text"
              required
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              placeholder="0819 7720 8968"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
            />
            <p className="text-[11px] text-slate-500">Nomor ini akan otomatis dihubungkan ke link https://wa.me/...</p>
          </div>

          {/* Action Footer */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#D2F500] hover:bg-[#c0e000] text-black flex items-center gap-1.5 shadow-md shadow-[#d2f500]/10"
              >
                <Save className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Simpan Pengaturan</span>
              </button>
            </div>
          </div>
        </form>

        {copied && (
          <div className="absolute top-2 right-12 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-md shadow-lg animate-bounce">
            Tersimpan!
          </div>
        )}
      </div>
    </div>
  );
};
