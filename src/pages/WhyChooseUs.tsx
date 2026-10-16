import React from 'react';
import { Link } from 'react-router-dom';
import { WHY_CHOOSE_US_PAGE } from '../content/content';
import { IMAGES } from '../content/images';

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F4] text-[#0E0E0C]">
      {/* 1. Header */}
      <section className="pt-36 sm:pt-44 pb-20 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-tag text-[#6B6B66] block mb-4">
            {WHY_CHOOSE_US_PAGE.tag}
          </span>
          <h1 className="font-serif text-display-headline text-[#0E0E0C] max-w-4xl mb-8">
            {WHY_CHOOSE_US_PAGE.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[#6B6B66] max-w-3xl font-light leading-relaxed">
            {WHY_CHOOSE_US_PAGE.intro}
          </p>
        </div>
      </section>

      {/* 2. Photographic Banner */}
      <section className="w-full h-[45vh] min-h-[340px] overflow-hidden relative border-b border-[#E6E2DA]">
        <img
          src={IMAGES.whyChooseUs.hero.url}
          alt={IMAGES.whyChooseUs.hero.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white font-mono text-xs">
          {IMAGES.whyChooseUs.hero.caption}
        </div>
      </section>

      {/* 3. Six Concrete Differentiators */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <span className="text-tag text-[#6B6B66] block mb-3">
              02 / The Standard
            </span>
            <h2 className="font-serif text-4xl text-[#0E0E0C]">
              What separates our engagements.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US_PAGE.reasons.map((item) => (
              <div
                key={item.num}
                className="p-8 border border-[#E6E2DA] bg-white rounded-[2px] flex flex-col justify-between h-full"
              >
                <div>
                  <span className="font-mono text-xs text-[#FF5B1F] mb-6 block">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E0E0C] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Bar: Conventional Agency vs Aditya Swift */}
      <section className="py-20 sm:py-28 bg-[#FAF8F4] border-b border-[#E6E2DA]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-tag text-[#6B6B66] block mb-2">
              03 / Accountability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
              The AST Delivery Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Conventional */}
            <div className="p-8 border border-[#E6E2DA] bg-white/40">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B6B66] block mb-4">
                Conventional Staffing / Agencies
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-[#6B6B66]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Unplanned downtime and cutover delays on SAP S/4HANA migrations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Reactive AMS maintenance with recurring SLA breaches and slow resolutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>Unfiltered resume forwarding without technical SAP evaluation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span>4 to 8 weeks delay in identifying project replacements.</span>
                </li>
              </ul>
            </div>

            {/* Right: Aditya Swift Technologies */}
            <div className="p-8 border-2 border-[#0E0E0C] bg-white">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF5B1F] font-bold block mb-4">
                Aditya Swift Technologies (AST)
              </span>
              <ul className="space-y-3 text-xs sm:text-sm text-[#0E0E0C]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Clean-core SAP S/4HANA migrations with zero unplanned business downtime.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Guaranteed 99.8% SLA uptime with sub-15 minute emergency AMS response.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Every candidate evaluated by practicing SAP enterprise architects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>14-day average deployment turnaround to active project pods.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Vetting & Screening Methodology */}
      {WHY_CHOOSE_US_PAGE.vettingStages && (
        <section className="py-24 border-b border-[#E6E2DA] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <span className="text-tag text-[#6B6B66] block mb-2">
                04 / Filtration Rigor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                The 4-Stage Technical Screening Pipeline
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHY_CHOOSE_US_PAGE.vettingStages.map((stage) => (
                <div key={stage.num} className="p-8 bg-[#FAF8F4] border border-[#E6E2DA] rounded-[2px] flex flex-col justify-between">
                  <span className="font-mono text-xs text-[#FF5B1F] block mb-4">
                    Gate 0{stage.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-[#0E0E0C] mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#6B6B66] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Quality Gates & Telemetry Section with Rigor Photo */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols: Rigor Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E6E2DA] bg-[#EAE6DF]">
                <img
                  src={IMAGES.whyChooseUs.rigor.url}
                  alt={IMAGES.whyChooseUs.rigor.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[11px] rounded-[2px]">
                  {IMAGES.whyChooseUs.rigor.caption}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Quality Gates */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-tag text-[#6B6B66] block">
                05 / Verification
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                Predictable milestones with continuous telemetry.
              </h3>
              <p className="text-sm text-[#6B6B66] leading-relaxed">
                Whether executing multi-month S/4HANA cloud conversion pipelines or deploying contract engineering pods, we apply quantitative milestone gates at every phase.
              </p>
              <div className="space-y-4 pt-2">
                <div className="p-4 bg-white border border-[#E6E2DA] rounded-[2px] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0E0E0C]">Two-Week Candidate Review Window</span>
                  <span className="font-mono text-xs text-[#FF5B1F]">100% Guaranteed</span>
                </div>
                <div className="p-4 bg-white border border-[#E6E2DA] rounded-[2px] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0E0E0C]">SLA Uptime on AMS Support</span>
                  <span className="font-mono text-xs text-[#FF5B1F]">99.8% Target</span>
                </div>
                <div className="p-4 bg-white border border-[#E6E2DA] rounded-[2px] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#0E0E0C]">Enterprise Compliance & Statutory Adherence</span>
                  <span className="font-mono text-xs text-[#FF5B1F]">Full Audit Clear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Commercial Engagement Models */}
      {WHY_CHOOSE_US_PAGE.commercialModels && (
        <section className="py-24 border-b border-[#E6E2DA] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-14">
              <span className="text-tag text-[#6B6B66] block mb-2">
                06 / Flexibility
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                Commercial Engagement Frameworks
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WHY_CHOOSE_US_PAGE.commercialModels.map((model, idx) => (
                <div key={idx} className="p-8 border border-[#E6E2DA] bg-[#FAF8F4]/40 rounded-[2px]">
                  <span className="font-mono text-xs text-[#FF5B1F] block mb-3">
                    Model 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E0E0C] mb-2">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed">
                    {model.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Closing CTA */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0E0E0C] mb-2">
              Ready to verify our candidates?
            </h2>
            <p className="text-sm text-[#6B6B66]">
              Share your current skill matrix or project requirement for rapid qualification.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="btn-editorial-solid text-xs py-3.5 px-6">
              Request Candidate Profiles →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
