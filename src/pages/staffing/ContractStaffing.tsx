import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../../content/content';
import { IMAGES } from '../../content/images';

export const ContractStaffing: React.FC = () => {
  const content = SERVICE_PAGES.contractStaffing;
  const images = IMAGES.serviceDetails.contractStaffing;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "Contract Staffing and Agile Project Pods",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "48 Hrs", label: "Candidate Submission", detail: "Pre-vetted profiles presented within two business days." },
          { value: "100%", label: "Statutory Adherence", detail: "Complete GST, PF, ESIC, and labor compliance handled transparently." },
          { value: "2 Weeks", label: "Evaluation Guarantee", detail: "Zero billable liability if contractor expectations are not met." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Agile contractor pod collaborating in modern office",
        deliverables: [
          { title: "Rapid Requisition Calibrations", desc: "Detailed matrix mapping exact module versions and integration points." },
          { title: "Hardware & Secure Access Readiness", desc: "Pre-configured systems aligned with your enterprise security protocols." },
          { title: "Timesheet & Milestone Billing", desc: "Clean itemized monthly billing with transparent rate structures." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "Project team collaboration during peak delivery sprint",
      }}
    />
  );
};
