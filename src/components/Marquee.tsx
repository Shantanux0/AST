import React from 'react';
import { PARTNERS_MARQUEE } from '../content/content';

export const Marquee: React.FC = () => {
  return (
    <div className="w-full border-y border-[#E6E2DA] bg-[#FAF8F4] overflow-hidden py-4 select-none">
      <div className="flex w-max animate-marquee space-x-12 whitespace-nowrap">
        {[...PARTNERS_MARQUEE, ...PARTNERS_MARQUEE, ...PARTNERS_MARQUEE].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-12 text-xs uppercase tracking-[0.2em] font-medium text-[#6B6B66]"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B1F]/60" />
          </div>
        ))}
      </div>
    </div>
  );
};
