import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../../content/content';
import { IMAGES } from '../../content/images';

export const PermanentStaffing: React.FC = () => {
  const content = SERVICE_PAGES.permanentStaffing;
  const images = IMAGES.serviceDetails.permanentStaffing;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "Permanent SAP Staffing and Talent Acquisition",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "94%", label: "First-Year Retention", detail: "Carefully vetted cultural and technical alignment." },
          { value: "3 to 1", label: "Interview-to-Offer Ratio", detail: "Pre-screened candidates directly by practicing architects." },
          { value: "90 Days", label: "Replacement Warranty", detail: "Complete assurance on all permanent enterprise placements." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Senior technical interview and leadership consultation",
        deliverables: [
          { title: "Architect-Verified Technical Dossier", desc: "Granular breakdown of module competency, past rollout scale, and reference checks." },
          { title: "Notice Period & Joining Governance", desc: "Proactive tracking through offer acceptance and Day 1 onboarding." },
          { title: "Compensation Market Calibration", desc: "Transparent benchmarking to secure top-tier candidates within budget." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "Senior technical interview and candidate evaluation",
      }}
    />
  );
};
