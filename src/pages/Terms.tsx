import React from 'react';
import { COMPANY } from '../content/content';

export const Terms: React.FC = () => {
  return (
    <div className="w-full bg-[#FAF8F4] text-[#0E0E0C] pt-36 sm:pt-44 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <span className="text-tag text-[#6B6B66] block mb-4">
          Legal / Governance
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl mb-6">
          Terms of Engagement
        </h1>
        <p className="text-xs font-mono text-[#6B6B66] mb-12">
          Effective Date: January 1, 2026 • {COMPANY.legalName}
        </p>

        <div className="space-y-8 text-sm text-[#6B6B66] leading-relaxed border-t border-[#E6E2DA] pt-8">
          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">1. Scope of Services</h2>
            <p>
              Aditya Swift Technologies Pvt. Ltd. provides enterprise SAP consulting, system integration, cloud conversion, application maintenance, and technical staffing services in accordance with customized Master Services Agreements (MSAs) and Statements of Work (SOWs) executed with our enterprise clients.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">2. Intellectual Property</h2>
            <p>
              SAP, SAP S/4HANA, RISE with SAP, and related trademarks are registered trademarks of SAP SE in Germany and other countries. Aditya Swift Technologies is an independent enterprise technology consultancy and services partner.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">3. Candidate Representation</h2>
            <p>
              Candidate profiles presented for client mandates are submitted with prior consent and validation. Unauthorized solicitation or direct employment of represented contractors is subject to non-circumvention terms agreed in specific commercial agreements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#0E0E0C] mb-3">4. Jurisdiction</h2>
            <p>
              These terms and all commercial agreements are governed by the laws of India, with exclusive jurisdiction in the courts of Hyderabad, Telangana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
