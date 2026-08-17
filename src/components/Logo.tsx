import React, { useState } from 'react';
import defaultLogoImg from '../assets/images/nebengcuy_logo_1786944538599.jpg';

interface LogoProps {
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  src,
  size = 'md',
  showText = true,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);
  const logoSrc = imgError || !src ? defaultLogoImg : src;

  const sizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div
        className={`${sizeClasses[size]} overflow-hidden border border-slate-700/80 bg-[#070A11] p-0.5 flex items-center justify-center relative shadow-lg shadow-cyan-950/30 group-hover:border-cyan-500/60 transition-all duration-300`}
      >
        <img
          src={logoSrc}
          alt="NebengCuy! Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center rounded-[inherit]"
          onError={() => setImgError(true)}
        />
      </div>

      {showText && (
        <span className={`${textSizeClasses[size]} font-black tracking-tight text-white font-sans`}>
          Nebeng<span className="text-[#D2F500]">Cuy!</span>
        </span>
      )}
    </div>
  );
};
