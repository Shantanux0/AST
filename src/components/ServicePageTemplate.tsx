import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../content/content';

export interface ServiceData {
  tag: string;
  title: string;
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  modulesCovered?: string[];
  whatWeDo: Array<{
    title: string;
    desc: string;
  }>;
  teamPod?: Array<{
    role: string;
    desc: string;
  }>;
  deliverables?: Array<{
    title: string;
    desc: string;
  }>;
  metrics?: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  featureImage?: string;
  featureImageAlt?: string;
  faqs?: Array<{
    q: string;
    a: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  processImage: string;
  processImageAlt: string;
}

interface ServicePageTemplateProps {
  data: ServiceData;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ data }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const defaultMetrics = [
    { value: "99.8%", label: "Target SLA Adherence", detail: "Maintained consistently on enterprise engagements." },
    { value: "14 Days", label: "Average Mobilization", detail: "Fast resource integration without administrative drag." },
    { value: "Zero", label: "Unplanned Business Downtime", detail: "Rigorous testing and rollback contingencies." }
  ];

  const defaultDeliverables = [
    { title: "Definitive Blueprint", desc: "Architecture diagrams, data flows, and cutover milestone checklists." },
    { title: "Continuous Telemetry", desc: "Real-time monitoring and SLA status dashboards shared with your leads." },
    { title: "Knowledge Retention", desc: "Complete operational runbooks to prevent single-person dependency." }
  ];

  const metrics = data.metrics || defaultMetrics;
  const deliverables = data.deliverables || defaultDeliverables;

  return (
    <div className="w-full bg-[#FAF8F4] text-[#0E0E0C]">
      {/* 1. Full-Bleed Hero Image with Overlay Headline */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden flex items-end pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={data.heroImageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white">
          <div className="max-w-3xl">
            <span className="text-tag tracking-[0.2em] text-[#FF5B1F] block mb-4">
              {data.tag}
            </span>
            <h1 className="font-serif text-display-headline text-white mb-4">
              {data.title}
            </h1>
            <p className="text-base sm:text-xl text-white/85 font-light max-w-xl">
              {data.intro}
            </p>
          </div>
        </div>
      </section>


      {/* 3. Editorial Two-Column "What We Do" Layout */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 4 cols: Tag & Context */}
            <div className="lg:col-span-4">
              <span className="text-tag text-[#6B6B66] block mb-3">
                01 / Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                Key Service Pillars
              </h2>
              <p className="text-xs sm:text-sm text-[#6B6B66] mt-3 leading-relaxed">
                Engineered for enterprise compliance, predictability, and verified production standards.
              </p>
            </div>

            {/* Right 8 cols: What we do cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.whatWeDo.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-[#E6E2DA] bg-white rounded-[2px]"
                >
                  <span className="font-mono text-xs text-[#FF5B1F] block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-[#0E0E0C] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B66] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Performance & Impact Metrics Row */}
      <section className="py-20 border-b border-[#E6E2DA] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-tag text-[#6B6B66] mb-8">
            02 / Benchmarks
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E6E2DA] border border-[#E6E2DA] bg-white">
            {metrics.map((m, idx) => (
              <div key={idx} className="p-8 sm:p-10">
                <div className="font-serif text-4xl sm:text-5xl text-[#0E0E0C] mb-3">
                  {m.value}
                </div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1">
                  {m.label}
                </div>
                <p className="text-xs text-[#6B6B66]">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Architecture & Governance Section with Feature Image */}
      {data.featureImage && (
        <section className="py-24 sm:py-32 border-b border-[#E6E2DA] bg-[#FAF8F4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left 6 cols: Large Feature Photo */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E6E2DA] bg-[#EAE6DF]">
                  <img
                    src={data.featureImage}
                    alt={data.featureImageAlt || "Enterprise architecture and collaboration"}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[11px] rounded-[2px]">
                    Delivery Rigor • AST Global Practice
                  </div>
                </div>
              </div>

              {/* Right 6 cols: Deliverables */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-tag text-[#6B6B66] block">
                  03 / Governance
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                  Measurable deliverables on every engagement.
                </h3>
                <div className="divide-y divide-[#E6E2DA] pt-4">
                  {deliverables.map((del, idx) => (
                    <div key={idx} className="py-5">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B1F]" />
                        <h4 className="text-sm font-semibold text-[#0E0E0C]">{del.title}</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#6B6B66] pl-4 leading-relaxed">
                        {del.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Typical Team Pod Structure (If defined) */}
      {data.teamPod && data.teamPod.length > 0 && (
        <section className="py-24 border-b border-[#E6E2DA] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <span className="text-tag text-[#6B6B66] block mb-2">
                04 / Squad Composition
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                Typical Delivery Team Structure
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.teamPod.map((member, idx) => (
                <div key={idx} className="p-6 bg-[#FAF8F4] border border-[#E6E2DA] rounded-[2px]">
                  <span className="font-mono text-xs text-[#FF5B1F] block mb-3">
                    Role 0{idx + 1}
                  </span>
                  <h4 className="font-serif text-xl text-[#0E0E0C] mb-2">
                    {member.role}
                  </h4>
                  <p className="text-xs text-[#6B6B66] leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Simple Process Strip */}
      <section className="py-20 sm:py-28 border-b border-[#E6E2DA] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-tag text-[#6B6B66] block mb-2">
              05 / Execution
            </span>
            <h2 className="font-serif text-3xl text-[#0E0E0C]">
              Delivery Sequence
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E6E2DA] border border-[#E6E2DA]">
            {data.process.map((p, idx) => (
              <div key={idx} className="p-6 sm:p-8 bg-white/60">
                <span className="font-mono text-xs text-[#FF5B1F] block mb-4">
                  Phase {p.step}
                </span>
                <h4 className="font-serif text-2xl text-[#0E0E0C] mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-[#6B6B66] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Technical FAQs (If defined) */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-24 border-b border-[#E6E2DA] bg-[#FAF8F4]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <span className="text-tag text-[#6B6B66] block mb-2">
                06 / Inquiries
              </span>
              <h3 className="font-serif text-3xl text-[#0E0E0C]">
                Practice FAQs & Technical Clarity
              </h3>
            </div>

            <div className="divide-y divide-[#E6E2DA] border-y border-[#E6E2DA]">
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-6">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left text-base sm:text-lg font-serif text-[#0E0E0C] hover:text-[#FF5B1F] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="font-mono text-sm ml-4 text-[#6B6B66]">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-4 text-xs sm:text-sm text-[#6B6B66] leading-relaxed pr-6">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 9. Panoramic Photo Band */}
      <section className="w-full h-80 sm:h-96 overflow-hidden relative border-b border-[#E6E2DA]">
        <img
          src={data.processImage}
          alt={data.processImageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white font-mono text-xs">
          AST Enterprise Practice • Managed from Hyderabad Delivery Hub
        </div>
      </section>

      {/* 10. Closing "Talk to us" CTA */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <span className="text-tag text-[#6B6B66] block mb-3">
              Next Step
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0E0E0C] mb-3">
              Ready to discuss {data.title}?
            </h2>
            <p className="text-sm text-[#6B6B66] max-w-md">
              Speak with a practice lead to review your system scope, timeline, and resource allocation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="btn-editorial-solid text-sm py-3.5 px-8"
            >
              Talk to us →
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="btn-editorial-ghost text-sm py-3.5 px-6"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
