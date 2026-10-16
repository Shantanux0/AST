import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HOME_PAGE, COMPANY } from '../content/content';
import { IMAGES } from '../content/images';
import { Marquee } from '../components/Marquee';

// Animated stat counter component
const CounterItem: React.FC<{
  prefix?: string;
  num: number;
  suffix: string;
  label: string;
  note: string;
}> = ({ prefix, num, suffix, label, note }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * num));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(num);
      }
    };

    requestAnimationFrame(update);
  }, [inView, num]);

  return (
    <div ref={ref} className="py-8 px-4 sm:px-6 flex flex-col justify-between h-full">
      <div className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#0E0E0C] flex items-baseline">
        {prefix && <span className="text-[#FF5B1F] text-3xl sm:text-4xl lg:text-5xl mr-1">{prefix}</span>}
        <span>{count}</span>
        <span className="text-[#FF5B1F]">{suffix}</span>
      </div>
      <div className="mt-6 pt-4 border-t border-[#E6E2DA]">
        <h4 className="text-sm font-semibold text-[#0E0E0C]">{label}</h4>
        <p className="text-xs text-[#6B6B66] mt-1 max-w-xs">{note}</p>
      </div>
    </div>
  );
};

export const Home: React.FC = () => {
  // Active hovered service for background image swap
  const [activeServiceImage, setActiveServiceImage] = useState<string>(
    IMAGES.servicesIndex.sapImplementation.url
  );

  // Active step for sticky Approach section
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Simple contact form state at the end of the page
  const [homeContact, setHomeContact] = useState({ name: '', email: '', message: '' });
  const [isHomeSubmitting, setIsHomeSubmitting] = useState(false);
  const [isHomeSubmitted, setIsHomeSubmitted] = useState(false);

  const handleHomeContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsHomeSubmitting(true);
    setTimeout(() => {
      setIsHomeSubmitting(false);
      setIsHomeSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Full-Screen Photo with Slow Ken Burns & Masked Slide-up) */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-end pb-20 sm:pb-24">
        {/* Full-bleed background photo with slow Ken Burns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src={IMAGES.hero.main.url}
            alt={IMAGES.hero.main.alt}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 16, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle natural dark gradient only at bottom for text legibility, keeping photography bright */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white">
          <div className="max-w-4xl">
            {/* Tag / Location indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B1F]" />
              <span className="text-tag text-white/90 font-medium">
                {HOME_PAGE.hero.tag}
              </span>
            </motion.div>

            {/* Huge Headline: "SAP projects. The right people." line-by-line slide up */}
            <h1 className="font-serif text-display-hero text-white tracking-tight mb-6">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="block"
                >
                  {HOME_PAGE.hero.headlinePart1}
                </motion.span>
              </span>
              <span className="block overflow-hidden text-white/90">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
                  className="block"
                >
                  {HOME_PAGE.hero.headlinePart2}
                </motion.span>
              </span>
            </h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-base sm:text-lg text-white/80 max-w-xl font-light mb-10"
            >
              {HOME_PAGE.hero.subline}
            </motion.p>

            {/* Action Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-6 text-sm"
            >
              <Link
                to={HOME_PAGE.hero.primaryCta.href}
                className="btn-editorial-solid bg-[#FAF8F4] text-[#0E0E0C] hover:bg-[#FF5B1F] hover:text-white"
              >
                <span>{HOME_PAGE.hero.primaryCta.label}</span>
                <span className="ml-2">→</span>
              </Link>
              <Link
                to={HOME_PAGE.hero.secondaryCta.href}
                className="inline-flex items-center text-white/90 hover:text-[#FF5B1F] link-editorial py-2"
              >
                <span>{HOME_PAGE.hero.secondaryCta.label}</span>
                <span className="ml-1.5">↗</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATEMENT SECTION (Huge serif sentence on off-white with sun orange highlight) */}
      <section className="py-24 sm:py-36 bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-tag text-[#6B6B66] mb-8">
            {HOME_PAGE.statement.tag}
          </div>

          <div className="max-w-5xl">
            <h2 className="font-serif text-display-statement text-[#0E0E0C]">
              {HOME_PAGE.statement.beforeAccent}
              <span className="text-[#FF5B1F] italic">
                {HOME_PAGE.statement.accent}
              </span>
              {HOME_PAGE.statement.middle}
              <span className="border-b border-[#0E0E0C]">
                {HOME_PAGE.statement.accent2}
              </span>
            </h2>

            <div className="mt-12 flex items-center gap-4">
              <Link
                to={HOME_PAGE.statement.linkHref}
                className="link-editorial text-sm font-semibold text-[#0E0E0C] hover:text-[#FF5B1F]"
              >
                <span>{HOME_PAGE.statement.linkText}</span>
                <span className="ml-1.5">→</span>
              </Link>
              <span className="text-xs text-[#6B6B66]">/</span>
              <span className="text-xs text-[#6B6B66]">Madhapur, Hyderabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO BIG SPLIT PANELS (Full-height images side-by-side, hover reveals) */}
      <section className="w-full bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Split Panel: SAP Services */}
          <Link
            to={HOME_PAGE.splitPanels.left.href}
            className="group relative h-[560px] lg:h-[700px] overflow-hidden border-b md:border-b-0 md:border-r border-[#E6E2DA] flex flex-col justify-between p-8 lg:p-14"
          >
            {/* Background Image with slight scale hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={IMAGES.splitPanels.sap.url}
                alt={IMAGES.splitPanels.sap.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            </div>

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between text-white/80">
              <span className="text-tag tracking-[0.2em] text-[#FF5B1F] bg-black/40 px-2.5 py-1 rounded-[2px] backdrop-blur-sm">
                {HOME_PAGE.splitPanels.left.tag}
              </span>
              <span className="text-lg text-white font-light group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 text-white">
              <h3 className="font-serif text-4xl lg:text-5xl mb-3 tracking-tight">
                {HOME_PAGE.splitPanels.left.title}
              </h3>
              <p className="text-sm text-white/80 max-w-sm mb-6">
                {HOME_PAGE.splitPanels.left.desc}
              </p>
              <div className="inline-flex items-center text-xs tracking-wider uppercase font-semibold text-[#FF5B1F] group-hover:text-white transition-colors">
                <span>{HOME_PAGE.splitPanels.left.buttonText}</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Right Split Panel: Staffing */}
          <Link
            to={HOME_PAGE.splitPanels.right.href}
            className="group relative h-[560px] lg:h-[700px] overflow-hidden flex flex-col justify-between p-8 lg:p-14"
          >
            {/* Background Image with slight scale hover */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={IMAGES.splitPanels.staffing.url}
                alt={IMAGES.splitPanels.staffing.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            </div>

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between text-white/80">
              <span className="text-tag tracking-[0.2em] text-[#FF5B1F] bg-black/40 px-2.5 py-1 rounded-[2px] backdrop-blur-sm">
                {HOME_PAGE.splitPanels.right.tag}
              </span>
              <span className="text-lg text-white font-light group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 text-white">
              <h3 className="font-serif text-4xl lg:text-5xl mb-3 tracking-tight">
                {HOME_PAGE.splitPanels.right.title}
              </h3>
              <p className="text-sm text-white/80 max-w-sm mb-6">
                {HOME_PAGE.splitPanels.right.desc}
              </p>
              <div className="inline-flex items-center text-xs tracking-wider uppercase font-semibold text-[#FF5B1F] group-hover:text-white transition-colors">
                <span>{HOME_PAGE.splitPanels.right.buttonText}</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. SERVICES INDEX (Large numbered list, hover swaps big image) */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E6E2DA] gap-6">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#0E0E0C]">
                {HOME_PAGE.servicesIndex.heading}
              </h2>
            </div>
            <p className="text-sm text-[#6B6B66] max-w-xs">
              {HOME_PAGE.servicesIndex.subheading}
            </p>
          </div>

          {/* Interactive Row Grid: Left list of services, Right Preview Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 items-start">
            {/* Left 7 cols: Numbered service items */}
            <div className="lg:col-span-7 divide-y divide-[#E6E2DA]">
              {HOME_PAGE.servicesIndex.items.map((item) => {
                const imgAsset =
                  IMAGES.servicesIndex[item.imageKey as keyof typeof IMAGES.servicesIndex];

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    onMouseEnter={() => {
                      if (imgAsset?.url) {
                        setActiveServiceImage(imgAsset.url);
                      }
                    }}
                    className="group py-6 sm:py-7 flex items-baseline justify-between transition-colors block"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-xs text-[#6B6B66] group-hover:text-[#FF5B1F] transition-colors">
                        {item.id}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#6B6B66] mt-1 max-w-md">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-[#6B6B66] group-hover:text-[#FF5B1F] group-hover:translate-x-1 transition-all pl-4">
                      →
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right 5 cols: Sticky preview image with smooth crossfade */}
            <div className="lg:col-span-5 sticky top-28 hidden lg:block">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#E6E2DA] bg-[#0E0E0C]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={activeServiceImage}
                    src={activeServiceImage}
                    alt="Service preview"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs flex items-center justify-between pointer-events-none">
                  <span className="font-mono text-[10px] tracking-widest uppercase">
                    Architecture & Delivery
                  </span>
                  <span className="text-[#FF5B1F]">● Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Partner / Platform Marquee */}
      <Marquee />

      {/* 5. NUMBERS SECTION (4 large stats in a thin-ruled row, count up when in view) */}
      <section className="bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-tag text-[#6B6B66] mb-8">
            {HOME_PAGE.metrics.tag}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E2DA] border border-[#E6E2DA]">
            {HOME_PAGE.metrics.stats.map((stat, idx) => (
              <CounterItem
                key={idx}
                prefix={stat.prefix}
                num={stat.num}
                suffix={stat.suffix}
                label={stat.label}
                note={stat.note}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Supported Ecosystem Grid */}
      {HOME_PAGE.techLandscape && (
        <section className="py-20 sm:py-28 bg-[#FAF8F4] border-b border-[#E6E2DA]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E6E2DA] gap-6">
              <div>
                <span className="text-tag text-[#6B6B66] mb-3 block">
                  {HOME_PAGE.techLandscape.tag}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                  {HOME_PAGE.techLandscape.heading}
                </h2>
              </div>
              <p className="text-sm text-[#6B6B66] max-w-md">
                {HOME_PAGE.techLandscape.subheading}
              </p>
            </div>

            {/* 4-Column Architectural Pillar Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E6E2DA] border-b md:border-x border-[#E6E2DA]">
              {HOME_PAGE.techLandscape.categories.map((category) => (
                <div
                  key={category.id}
                  className="p-6 sm:p-8 flex flex-col justify-between hover:bg-black/[0.015] transition-colors group"
                >
                  <div>
                    {/* Pillar Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#E6E2DA] mb-6">
                      <span className="font-mono text-xs font-semibold text-[#FF5B1F]">
                        {category.id}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B66]">
                        Pillar
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#0E0E0C] mb-6 group-hover:text-[#FF5B1F] transition-colors">
                      {category.title}
                    </h3>

                    {/* Module Items with Descriptions */}
                    <div className="space-y-4">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="group/item">
                          <div className="text-xs font-medium text-[#0E0E0C] group-hover/item:text-[#FF5B1F] transition-colors flex items-baseline">
                            <span className="text-[#FF5B1F] mr-1.5 font-bold text-[10px]">/</span>
                            <span>{item.name}</span>
                          </div>
                          <p className="text-[11px] text-[#6B6B66] mt-0.5 pl-3 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="pt-6 mt-6 border-t border-[#E6E2DA]/60 flex items-center justify-between text-[10px] font-mono text-[#6B6B66]">
                    <span>Standardized</span>
                    <span className="text-[#0E0E0C] font-semibold">Active Pods</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. APPROACH SECTION (4 steps with thin lines and sticky large image on left) */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0E0E0C]">
              {HOME_PAGE.approach.heading}
            </h2>
            <p className="text-sm text-[#6B6B66] mt-2">
              {HOME_PAGE.approach.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 6 cols: Sticky Image that updates with step */}
            <div className="lg:col-span-6 sticky top-28">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-[#E6E2DA] bg-[#0E0E0C]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.img
                    key={IMAGES.approachSteps[activeStepIndex].url}
                    src={IMAGES.approachSteps[activeStepIndex].url}
                    alt={IMAGES.approachSteps[activeStepIndex].alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between text-xs pointer-events-none">
                  <span className="font-mono uppercase tracking-wider text-[11px] text-[#FF5B1F]">
                    {IMAGES.approachSteps[activeStepIndex].step}
                  </span>
                  <span className="text-white/80 text-[11px]">
                    Structured Milestones
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 cols: 4 Steps with thin lines and numerals */}
            <div className="lg:col-span-6 divide-y divide-[#E6E2DA] border-y border-[#E6E2DA]">
              {HOME_PAGE.approach.steps.map((step, idx) => (
                <div
                  key={step.number}
                  onMouseEnter={() => setActiveStepIndex(idx)}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`py-8 cursor-pointer transition-all ${
                    activeStepIndex === idx ? 'bg-black/[0.02] pl-4 sm:pl-6' : 'pl-0 hover:pl-2'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className={`font-mono text-xs ${
                        activeStepIndex === idx ? 'text-[#FF5B1F] font-bold' : 'text-[#6B6B66]'
                      }`}
                    >
                      Step {step.number}
                    </span>
                    <span className="text-xs text-[#6B6B66]">/ 04</span>
                  </div>

                  <h3 className="font-serif text-3xl text-[#0E0E0C] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#6B6B66] mb-3 max-w-md">
                    {step.desc}
                  </p>

                  <div className="text-xs text-[#0E0E0C] font-mono bg-white inline-block px-2.5 py-1 border border-[#E6E2DA] rounded-[2px]">
                    Deliverable: {step.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIRE TRAIN DEPLOY FEATURE (Full-bleed cinematic image with overlay headline) */}
      <section className="relative h-[560px] sm:h-[640px] w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hireTrainDeployBanner.url}
            alt={IMAGES.hireTrainDeployBanner.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
          <span className="text-tag tracking-[0.2em] text-[#FF5B1F] block mb-4">
            {HOME_PAGE.hireTrainDeployFeature.tag}
          </span>
          <h2 className="font-serif text-display-headline text-white mb-6">
            {HOME_PAGE.hireTrainDeployFeature.title}
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 font-light">
            {HOME_PAGE.hireTrainDeployFeature.subline}
          </p>
          <Link
            to={HOME_PAGE.hireTrainDeployFeature.cta.href}
            className="btn-editorial-solid bg-[#FF5B1F] text-white hover:bg-white hover:text-[#0E0E0C]"
          >
            <span>{HOME_PAGE.hireTrainDeployFeature.cta.label}</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* 8. CAREERS BAND (Big headline, image of team, button "See open roles") */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-tag text-[#6B6B66] mb-4 block">
                {HOME_PAGE.careersBand.tag}
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-[#0E0E0C] leading-tight mb-6">
                {HOME_PAGE.careersBand.heading}
              </h2>
              <p className="text-base text-[#6B6B66] max-w-md mb-8">
                {HOME_PAGE.careersBand.subline}
              </p>
              <div>
                <Link
                  to={HOME_PAGE.careersBand.cta.href}
                  className="btn-editorial-solid text-xs py-3 px-6"
                >
                  <span>{HOME_PAGE.careersBand.cta.label}</span>
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] overflow-hidden border border-[#E6E2DA]">
                <img
                  src={IMAGES.careers.banner.url}
                  alt={IMAGES.careers.banner.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[11px] rounded-[2px]">
                  Aditya Swift Team • Madhapur
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA WITH SIMPLE CONTACT FORM AT THE END */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4] border-t border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 6 cols: Let's talk & Direct Contacts */}
            <div className="lg:col-span-6">
              <div className="text-tag text-[#6B6B66] mb-4">
                {HOME_PAGE.contactCta.tag}
              </div>

              <h2 className="font-serif text-display-headline text-[#0E0E0C] mb-4">
                {HOME_PAGE.contactCta.heading}
              </h2>
              <p className="text-base text-[#6B6B66] mb-8 max-w-md">
                {HOME_PAGE.contactCta.subline}
              </p>

              <div className="space-y-6 pt-6 border-t border-[#E6E2DA]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] font-semibold block mb-1">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-serif text-2xl sm:text-3xl text-[#0E0E0C] hover:text-[#FF5B1F] transition-colors break-all"
                  >
                    {COMPANY.email}
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#6B6B66] font-semibold block mb-1">
                    Direct Telephone
                  </span>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="font-serif text-2xl sm:text-3xl text-[#0E0E0C] hover:text-[#FF5B1F] transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>

                <div className="pt-2">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Connect instantly on WhatsApp</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 6 cols: Simple Clean Form */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 border border-[#E6E2DA] bg-white rounded-[2px]">
                <h3 className="font-serif text-2xl text-[#0E0E0C] mb-2">
                  Send a message
                </h3>
                <p className="text-xs text-[#6B6B66] mb-6">
                  We review project requirements and respond promptly.
                </p>

                {isHomeSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#FF5B1F]/10 text-[#FF5B1F] flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <h4 className="font-serif text-xl text-[#0E0E0C]">Message sent</h4>
                    <p className="text-xs text-[#6B6B66]">
                      Thank you, <span className="text-[#0E0E0C] font-medium">{homeContact.name}</span>. An AST lead will get in touch shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsHomeSubmitted(false);
                        setHomeContact({ name: '', email: '', message: '' });
                      }}
                      className="text-xs underline text-[#0E0E0C] pt-2"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHomeContactSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={homeContact.name}
                        onChange={(e) => setHomeContact({ ...homeContact, name: e.target.value })}
                        className="w-full bg-[#FAF8F4] border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={homeContact.email}
                        onChange={(e) => setHomeContact({ ...homeContact, email: e.target.value })}
                        className="w-full bg-[#FAF8F4] border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Share brief requirements (e.g. SAP client implementation, staffing pod)..."
                        value={homeContact.message}
                        onChange={(e) => setHomeContact({ ...homeContact, message: e.target.value })}
                        className="w-full bg-[#FAF8F4] border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isHomeSubmitting}
                        className="btn-editorial-solid w-full text-xs py-3"
                      >
                        {isHomeSubmitting ? 'Sending...' : 'Send message →'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
