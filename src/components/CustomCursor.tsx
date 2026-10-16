import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for devices with precise pointer (mouse)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, select, textarea, [data-cursor-expand], [role="button"]');
      setIsHovered(!!interactive);

      const isImage = target.closest('img, [data-cursor-image]');
      setIsPointer(!!isImage);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`rounded-full transition-all duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-10 h-10 bg-[#FF5B1F]/15 border border-[#FF5B1F]'
            : isPointer
            ? 'w-12 h-12 bg-black/20 border border-white backdrop-blur-[2px]'
            : 'w-2.5 h-2.5 bg-[#FF5B1F]'
        }`}
      />
    </div>
  );
};
