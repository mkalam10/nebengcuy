import React, { useState } from 'react';
import { ChevronDown, Phone, Instagram, ArrowRight, HelpCircle, GraduationCap, Leaf, Car, Coins } from 'lucide-react';
import { AppConfig, FAQItem } from '../types';

interface KontakSectionProps {
  config: AppConfig;
}

export const KontakSection: React.FC<KontakSectionProps> = ({ config }) => {
  // Q4 open by default as shown in Image 4
  const [openFaq, setOpenFaq] = useState<number | null>(4);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: '1. Bagaimana cara memesan tumpangan?',
      answer: 'Isi Form Google sebagai penumpang H-1 sebelum max pukul 21.00 WIB. Pembayaran patungan bensin via QRIS DANA.',
    },
    {
      id: 2,
      question: '2. Bagaimana cara menawarkan tebengan (Driver)?',
      answer: 'Isi Form Google sebagai driver H-1 sebelum max pukul 21.00 WIB. Wajib verifikasi KPM dan SIM C aktif.',
    },
    {
      id: 3,
      question: '3. Bagaimana kebijakan pembatalan?',
      answer: 'Hubungi admin via WhatsApp sebelum pagi hari keberangkatan untuk pembatalan atau perubahan kloter.',
    },
    {
      id: 4,
      question: '4. Apa keuntungan & dampaknya bagi alam?',
      answer: 'Lebih hemat secara finansial, eksklusif sesama KPM UNSRI, dan aksi nyata menurunkan emisi CO₂ serta kemacetan di rute Palembang – Indralaya (Lintas Timur).',
      details: [
        {
          icon: 'Rp',
          label: 'Hemat Finansial',
          desc: 'Patungan bensin lebih hemat tanpa mark-up.',
        },
        {
          icon: 'cap',
          label: 'Eksklusif KPM UNSRI',
          desc: 'Hanya untuk mahasiswa UNSRI terverifikasi.',
        },
        {
          icon: 'leaf',
          label: 'Turunkan Emisi CO₂',
          desc: 'Mengurangi jejak karbon untuk masa depan yang lebih hijau.',
        },
        {
          icon: 'car',
          label: 'Kurangi Kemacetan',
          desc: 'Perjalanan lebih efisien di rute Lintas Timur Palembang – Indralaya.',
        },
      ],
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-300 max-w-4xl mx-auto">
      
      {/* Header Section */}
      <div className="text-center space-y-3 pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#00E5FF]">
          <span>🌱 #KomuterHijau UNSRI</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Pusat Bantuan & <span className="text-[#00E5FF]">FAQ</span>
        </h2>
        
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
          Sistem kloter manual kami, menjamin keamanan dan transparansi patungan.
          Bersama NebengCuy, hemat biaya dan berkontribusi untuk lingkungan.
        </p>
      </div>

      {/* ACCORDION LIST */}
      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-[#0B101D] border border-slate-800 rounded-2xl overflow-hidden transition-all shadow-lg"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-[#00E5FF] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-[#00E5FF] shrink-0 font-extrabold text-xs">
                    Q
                  </div>
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#00E5FF]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 space-y-4">
                  <p className="pl-11 text-slate-300 text-xs leading-relaxed">{faq.answer}</p>

                  {/* If Q4 subdetails exist */}
                  {faq.details && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 pl-11">
                      {faq.details.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl space-y-1.5"
                        >
                          <div className="w-8 h-8 rounded-lg bg-yellow-950/60 border border-[#D2F500]/40 flex items-center justify-center text-[#D2F500] font-black text-xs">
                            {item.icon === 'Rp' && 'Rp'}
                            {item.icon === 'cap' && <GraduationCap className="w-4 h-4" />}
                            {item.icon === 'leaf' && <Leaf className="w-4 h-4" />}
                            {item.icon === 'car' && <Car className="w-4 h-4" />}
                          </div>
                          <h4 className="font-bold text-white text-xs">{item.label}</h4>
                          <p className="text-[11px] text-slate-400 leading-normal">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* NEED OTHER HELP / CONTACT CARDS */}
      <div className="space-y-6 pt-6">
        <div className="text-center space-y-1">
          <h3 className="text-lg font-extrabold text-white">Butuh Bantuan Lain?</h3>
          <p className="text-xs text-slate-400">Hubungi kami melalui kanal resmi berikut.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          {/* Card 1: WhatsApp Admin (Bright Yellow Card) */}
          <a
            href={config.whatsappAdminUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#D2F500] hover:bg-[#c2e500] text-black p-6 rounded-2xl flex items-center justify-between shadow-xl shadow-[#d2f500]/10 hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-black/10 border border-black/20 flex items-center justify-center text-black">
                <Phone className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-black/70">WhatsApp Admin</span>
                <h4 className="text-xl font-black text-black">{config.whatsappNumber}</h4>
                <p className="text-[11px] text-black/80 font-medium">Fast response • 08.00 – 21.00 WIB</p>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
            </div>
          </a>

          {/* Card 2: Instagram Official (Dark Card with Cyan Border) */}
          <a
            href={config.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0B101D] border-2 border-[#00E5FF]/60 hover:border-[#00E5FF] p-6 rounded-2xl flex items-center justify-between shadow-xl hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">Instagram Official</span>
                <h4 className="text-xl font-black text-white">@Nebengcuyid</h4>
                <p className="text-[11px] text-slate-400 font-medium">Info terbaru & update komunitas</p>
              </div>
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:translate-x-1 transition-transform text-[#00E5FF]">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </a>

        </div>
      </div>

    </div>
  );
};
