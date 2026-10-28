import React, { useState } from 'react';
import { Wifi, QrCode, Smartphone } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: 'Google' | 'Instagram' | string;
  fallbackColor?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className,
  fallbackTitle,
  fallbackCategory,
  fallbackColor,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    const isGoogle = fallbackCategory?.toLowerCase().includes('google');
    const isPink = fallbackColor?.toLowerCase().includes('rosa');
    const isDark = fallbackColor?.toLowerCase().includes('preta');

    return (
      <div 
        className="w-full h-full flex flex-col items-center justify-center p-3 rounded-xl text-center select-none"
        style={{
          background: isDark 
            ? 'linear-gradient(145deg, #1e293b, #0f172a)' 
            : isPink 
            ? 'linear-gradient(145deg, #fdf2f8, #fce7f3)'
            : 'linear-gradient(145deg, #eff6ff, #dbeafe)',
          color: isDark ? '#f8fafc' : '#0f172a'
        }}
        role="img"
        aria-label={alt || fallbackTitle || "Modelo de Placa NFC"}
      >
        <div className={`p-2.5 rounded-full mb-2 ${isDark ? 'bg-slate-800 text-blue-400' : isPink ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'}`}>
          <Wifi className="w-5 h-5" />
        </div>
        <p className="text-xs font-bold leading-tight px-1 line-clamp-2">
          {fallbackTitle || "Placa NFC"}
        </p>
        <span className={`text-[10px] mt-1 font-semibold uppercase px-2 py-0.5 rounded-full ${
          isDark 
            ? 'bg-slate-700/60 text-slate-300' 
            : isPink 
            ? 'bg-pink-200/70 text-pink-700' 
            : 'bg-blue-200/70 text-blue-800'
        }`}>
          {fallbackCategory || "NFC + QR"}
        </span>
        <div className="mt-2 flex items-center gap-1.5 opacity-60 text-[9px]">
          <QrCode className="w-3 h-3" />
          <span>Aproximação Ativa</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className={`${className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        decoding="async"
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 animate-pulse">
          <Smartphone className="w-6 h-6 text-slate-300" />
        </div>
      )}
    </div>
  );
};
