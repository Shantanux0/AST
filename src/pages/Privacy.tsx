import React from 'react';
import { COMPANY } from '../content/content';

export const Privacy: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F4] text-[#0E0E0C] pt-36 sm:pt-44 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <span className="text-tag text-[#6B6B66] block mb-4">
          Legal / Compliance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono text-[#6B6B66] mb-12">
          Effective Date: January 1, 2026 • {COMPANY.legalName}
        </p>

        <div className="space-y-8 text-sm text-[#6B6B66] leading-relaxed border-t border-[#E6E2DA] pt-8">
          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">1. Information We Collect</h2>
            <p>
              We collect information you submit directly via our contact and job application forms, including your full name, email address, telephone number, current organization, resume documents, and any specific requirements you share with us.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">2. How We Use Information</h2>
            <p>
              Submitted details are solely used to evaluate talent applications, respond to prospective enterprise client inquiries, provide consulting proposals, and maintain lawful employment or contract records. We never sell or lease candidate or client data to third-party marketers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">3. Data Security & Storage</h2>
            <p>
              We apply industry-standard security safeguards to protect candidate resumes and enterprise communications. All data is handled in strict compliance with applicable data protection laws of India and international standards.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">4. Contact & Inquiries</h2>
            <p>
              For questions regarding our privacy practices or to request data removal, write to{' '}
              <a href={`mailto:${COMPANY.email}`} className="text-[#0E0E0C] underline">
                {COMPANY.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
