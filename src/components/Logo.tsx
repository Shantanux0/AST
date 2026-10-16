import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'auto' | 'black' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-9 h-9', variant = 'black' }) => {
  const isWhite = variant === 'white';
  const src = isWhite ? '/logo-white.png' : '/logo-black.png';

  return (
    <img
      src={src}
      alt="Aditya Swift Technologies Emblem"
      className={`${className} object-contain select-none inline-block`}
      width={36}
      height={36}
      loading="eager"
      decoding="async"
    />
  );
};
