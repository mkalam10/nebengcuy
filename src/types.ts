export type TabType = 'beranda' | 'cara-kerja' | 'daftar' | 'kontak';

export interface AppConfig {
  gformDriverUrl: string;
  gformPassengerUrl: string;
  whatsappNumber: string;
  whatsappAdminUrl: string;
  instagramUrl: string;
  customLogoUrl?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  details?: {
    icon: string;
    label: string;
    desc: string;
  }[];
}
