import { AppConfig } from './types';
import defaultLogoImg from './assets/images/nebengcuy_logo_1786944538599.jpg';

export const DEFAULT_LOGO = defaultLogoImg;

export const DEFAULT_CONFIG: AppConfig = {
  gformDriverUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_DRIVER/viewform',
  gformPassengerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_PASSENGER/viewform',
  whatsappNumber: '0819 7720 8968',
  whatsappAdminUrl: 'https://wa.me/6281977208968?text=Halo%20Admin%20NebengCuy!%20Saya%20ingin%20bertanya%20mengenai%20layanan%20tebengan%20UNSRI.',
  instagramUrl: 'https://instagram.com/nebengcuyid',
  customLogoUrl: defaultLogoImg,
};

export const getStoredConfig = (): AppConfig => {
  try {
    const saved = localStorage.getItem('nebengcuy_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      return { 
        ...DEFAULT_CONFIG, 
        ...parsed,
        customLogoUrl: parsed.customLogoUrl || defaultLogoImg
      };
    }
  } catch (e) {
    console.error('Failed to load saved config:', e);
  }
  return DEFAULT_CONFIG;
};

export const saveStoredConfig = (config: AppConfig): void => {
  try {
    localStorage.setItem('nebengcuy_config', JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save config:', e);
  }
};
