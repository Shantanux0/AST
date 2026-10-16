import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_PAGE, COMPANY } from '../content/content';
import { IMAGES } from '../content/images';

export const About: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F4] text-[#0E0E0C]">
      {/* 1. Hero / Header */}
      <section className="pt-36 sm:pt-44 pb-20 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-tag text-[#6B6B66] block mb-4">
            {ABOUT_PAGE.tag}
          </span>
          <h1 className="font-serif text-display-headline text-[#0E0E0C] max-w-4xl mb-8">
            {ABOUT_PAGE.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[#6B6B66] max-w-3xl font-light leading-relaxed">
            {ABOUT_PAGE.intro}
          </p>
        </div>
      </section>

      {/* 2. Full Bleed Panoramic Photo of Financial District */}
      <section className="w-full h-[50vh] min-h-[380px] overflow-hidden relative border-b border-[#E6E2DA]">
        <img
          src={IMAGES.about.hero.url}
          alt={IMAGES.about.hero.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white font-mono text-xs">
          {IMAGES.about.hero.caption}
        </div>
      </section>

      {/* 3. Four Core Pillars */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-[#E6E2DA] gap-6">
            <div>
              <span className="text-tag text-[#6B6B66] block mb-3">
                02 / Foundations
              </span>
              <h2 className="font-serif text-4xl text-[#0E0E0C]">
                Operating Values
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6B66] max-w-xs">
              Every engagement balances technical rigor with transparent accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E2DA] border border-[#E6E2DA] mt-12 bg-white">
            {ABOUT_PAGE.pillars.map((pillar) => (
              <div key={pillar.num} className="p-8 flex flex-col justify-between">
                <span className="font-mono text-xs text-[#FF5B1F] mb-8 block">
                  {pillar.num}
                </span>
                <div>
                  <h3 className="font-serif text-2xl text-[#0E0E0C] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership & Practice Stewardship Section */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols: Leadership Photography */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E6E2DA] bg-[#EAE6DF]">
                <img
                  src={IMAGES.about.leadership.url}
                  alt={IMAGES.about.leadership.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[11px] rounded-[2px]">
                  {IMAGES.about.leadership.caption}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Leadership Standards */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-tag text-[#6B6B66] block">
                03 / Leadership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                Practicing architects, not passive account managers.
              </h2>
              <p className="text-sm text-[#6B6B66] leading-relaxed">
                AST leadership is composed of enterprise veterans who have directly managed SAP cutovers, S/4HANA migrations, and technical recruitment across Europe, the US, and India.
              </p>
              <div className="pt-4 border-t border-[#E6E2DA] grid grid-cols-2 gap-6 text-xs">
                <div>
                  <span className="font-serif text-3xl text-[#0E0E0C] block mb-1">100%</span>
                  <span className="text-[#6B6B66]">Architect review on all candidate submissions</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-[#0E0E0C] block mb-1">14 Days</span>
                  <span className="text-[#6B6B66]">Average deployment turnaround to active pods</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Company Milestones / Journey Strip */}
      {ABOUT_PAGE.milestones && (
        <section className="py-24 sm:py-32 border-b border-[#E6E2DA] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <span className="text-tag text-[#6B6B66] block mb-2">
                04 / Evolution
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                Milestones & Scale
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E2DA] border border-[#E6E2DA]">
              {ABOUT_PAGE.milestones.map((m, idx) => (
                <div key={idx} className="p-8 bg-[#FAF8F4]/40">
                  <span className="font-mono text-xs text-[#FF5B1F] block mb-4">
                    {m.year}
                  </span>
                  <h3 className="font-serif text-xl text-[#0E0E0C] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs text-[#6B6B66] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Sanskrit Sun Meaning Callout */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <span className="w-3 h-3 rounded-full bg-[#FF5B1F] inline-block mb-8" />
          <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0E0E0C] leading-snug mb-8">
            "{ABOUT_PAGE.quote.text}"
          </blockquote>
          <div className="text-xs font-mono uppercase tracking-widest text-[#6B6B66]">
            — {ABOUT_PAGE.quote.author}, {ABOUT_PAGE.quote.role}
          </div>
        </div>
      </section>

      {/* 7. Hyderabad Headquarters Band */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-tag text-[#FF5B1F] block mb-3">
                {ABOUT_PAGE.location.tag}
              </span>
              <h2 className="font-serif text-4xl text-[#0E0E0C] mb-4">
                {ABOUT_PAGE.location.heading}
              </h2>
              <p className="text-sm text-[#6B6B66] leading-relaxed mb-6">
                {ABOUT_PAGE.location.desc}
              </p>
              <address className="not-italic text-xs font-mono text-[#0E0E0C] p-4 bg-white border border-[#E6E2DA] rounded-[2px] leading-relaxed">
                {COMPANY.fullAddress}
              </address>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden border border-[#E6E2DA]">
                <img
                  src={IMAGES.about.workspace.url}
                  alt={IMAGES.about.workspace.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[11px] rounded-[2px]">
                  {IMAGES.about.workspace.caption}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0E0E0C] mb-2">
              Explore our delivery capabilities.
            </h2>
            <p className="text-sm text-[#6B6B66]">
              Review how we execute enterprise programs or integrate on-demand talent pods.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/services/sap-implementation" className="btn-editorial-solid text-xs py-3.5 px-6">
              Our Services →
            </Link>
            <Link to="/contact" className="btn-editorial-ghost text-xs py-3.5 px-6">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
