import React, { useState } from 'react';
import { CAREERS_PAGE, COMPANY } from '../content/content';
import { IMAGES } from '../content/images';
import { JobApplicationModal } from '../components/JobApplicationModal';

export const Careers: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const departments = ['All', ...Array.from(new Set(CAREERS_PAGE.openings.map((j) => j.department)))];

  const filteredJobs = selectedDept === 'All'
    ? CAREERS_PAGE.openings
    : CAREERS_PAGE.openings.filter((j) => j.department === selectedDept);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-[#FAF8F4] text-[#0E0E0C]">
      {/* 1. Header */}
      <section className="pt-36 sm:pt-44 pb-20 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-tag text-[#6B6B66] block mb-4">
            {CAREERS_PAGE.tag}
          </span>
          <h1 className="font-serif text-display-headline text-[#0E0E0C] max-w-4xl mb-8">
            {CAREERS_PAGE.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[#6B6B66] max-w-3xl font-light leading-relaxed">
            {CAREERS_PAGE.intro}
          </p>
        </div>
      </section>

      {/* 2. Team Photo Banner */}
      <section className="w-full h-[45vh] min-h-[340px] overflow-hidden relative border-b border-[#E6E2DA]">
        <img
          src={IMAGES.careers.banner.url}
          alt={IMAGES.careers.banner.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-6 sm:left-12 text-white font-mono text-xs">
          {IMAGES.careers.banner.caption}
        </div>
      </section>

      {/* 3. Benefits & Value Proposition */}
      {CAREERS_PAGE.benefits && (
        <section className="py-16 border-b border-[#E6E2DA] bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-tag text-[#6B6B66] mb-8">
              Why Join AST
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {CAREERS_PAGE.benefits.map((b, idx) => (
                <div key={idx} className="p-6 bg-[#FAF8F4] border border-[#E6E2DA] rounded-[2px]">
                  <span className="font-mono text-xs text-[#FF5B1F] block mb-2">0{idx + 1}</span>
                  <h4 className="font-serif text-lg text-[#0E0E0C] mb-1.5">{b.title}</h4>
                  <p className="text-xs text-[#6B6B66] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Open Positions with Filters */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-[#E6E2DA] gap-6">
            <div>
              <span className="text-tag text-[#6B6B66] block mb-2">
                02 / Positions
              </span>
              <h2 className="font-serif text-4xl text-[#0E0E0C]">
                Current Openings
              </h2>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setSelectedDept(dept)}
                  className={`text-xs px-4 py-2 rounded-[2px] transition-colors border ${
                    selectedDept === dept
                      ? 'bg-[#0E0E0C] text-white border-[#0E0E0C]'
                      : 'bg-white text-[#6B6B66] border-[#E6E2DA] hover:border-[#0E0E0C]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Rows */}
          <div className="divide-y divide-[#E6E2DA]">
            {filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div key={job.id} className="py-8 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF5B1F] bg-white px-2 py-0.5 border border-[#E6E2DA] rounded-[2px]">
                          {job.department}
                        </span>
                        <span className="text-xs text-[#6B6B66] font-mono">
                          {job.location} • {job.experience}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#0E0E0C]">
                        {job.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6B6B66] mt-2">
                        {job.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                        className="text-xs text-[#6B6B66] hover:text-[#0E0E0C] underline underline-offset-4"
                      >
                        {isExpanded ? 'Hide details' : 'View requirements'}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleApplyClick(job.title)}
                        className="btn-editorial-solid text-xs py-2.5 px-5"
                      >
                        <span>Apply</span>
                        <span className="ml-1.5">↗</span>
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Requirements Details */}
                  {isExpanded && (
                    <div className="mt-8 pt-6 border-t border-dashed border-[#E6E2DA] grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#0E0E0C] bg-white/50 p-6 rounded-[2px]">
                      <div>
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-[#6B6B66] mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-[#6B6B66]">
                          {job.responsibilities.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-[#6B6B66] mb-3">
                          Desired Profile
                        </h4>
                        <ul className="space-y-2 list-disc list-inside text-[#6B6B66]">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-4 border-t border-[#E6E2DA]">
                          <button
                            type="button"
                            onClick={() => handleApplyClick(job.title)}
                            className="btn-editorial-solid text-xs py-2 px-4"
                          >
                            Apply for this role →
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Engineering Culture Section with Unique Photo */}
      <section className="py-24 sm:py-32 border-b border-[#E6E2DA] bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 cols: Culture Photo */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-[#E6E2DA] bg-[#EAE6DF]">
                <img
                  src={IMAGES.careers.culture.url}
                  alt={IMAGES.careers.culture.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-[11px] rounded-[2px]">
                  {IMAGES.careers.culture.caption}
                </div>
              </div>
            </div>

            {/* Right 6 cols: Culture Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-tag text-[#6B6B66] block">
                03 / Culture
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C]">
                An engineering-first, autonomous environment.
              </h3>
              <p className="text-sm text-[#6B6B66] leading-relaxed">
                We believe top enterprise consultants do their best work when granted technical autonomy, direct client exposure, and support for continuous certification.
              </p>
              <div className="space-y-4 pt-2 text-xs">
                <div className="p-4 bg-white border border-[#E6E2DA] rounded-[2px]">
                  <strong className="text-[#0E0E0C] block text-sm mb-1 font-serif">Autonomous Craft</strong>
                  <span className="text-[#6B6B66]">Direct ownership of functional configuration and code without multi-layered bureaucracy.</span>
                </div>
                <div className="p-4 bg-white border border-[#E6E2DA] rounded-[2px]">
                  <strong className="text-[#0E0E0C] block text-sm mb-1 font-serif">Certification Sponsorship</strong>
                  <span className="text-[#6B6B66]">Full coverage for SAP S/4HANA, BTP, AWS, and Azure professional credentials.</span>
                </div>
                <div className="p-4 bg-white border border-[#E6E2DA] rounded-[2px]">
                  <strong className="text-[#0E0E0C] block text-sm mb-1 font-serif">Meritocratic Progression</strong>
                  <span className="text-[#6B6B66]">Advancement driven by cutover milestones, architecture contributions, and peer reviews.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Don't see your role section */}
      <section className="py-24 sm:py-32 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C] mb-2">
              Don't see your specific SAP module?
            </h2>
            <p className="text-sm text-[#6B6B66] max-w-md">
              We continually hire senior SAP consultants for upcoming global client rollouts. Submit a speculative application.
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleApplyClick('General Speculative Application')}
            className="btn-editorial-ghost text-xs py-3 px-6"
          >
            Submit General Profile →
          </button>
        </div>
      </section>

      {/* Slide-in Application Modal */}
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle={selectedJob || 'Aditya Swift Role'}
      />
    </div>
  );
};
