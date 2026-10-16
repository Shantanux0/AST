import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../../content/content';
import { IMAGES } from '../../content/images';

export const ExecutiveStaffing: React.FC = () => {
  const content = SERVICE_PAGES.executiveStaffing;
  const images = IMAGES.serviceDetails.executiveStaffing;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "Executive Search and Enterprise Leadership",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "100%", label: "Search Confidentiality", detail: "Discreet outreach safeguarding your market positioning." },
          { value: "15+ Yrs", label: "Average Executive Tenure", detail: "Proven track records across Fortune 500 transformations." },
          { value: "180 Days", label: "Executive Warranty", detail: "Extended governance on Vice President and Director placements." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Executive boardroom and technology leadership discussion",
        deliverables: [
          { title: "Confidential Search Charter", desc: "Detailed benchmarks aligning board vision with enterprise target architecture." },
          { title: "Transformation Track Record Audit", desc: "In-depth verification of past multi-million dollar program governance." },
          { title: "Structured Compensation Advisory", desc: "Executive equity and milestone retention packaging guidance." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "Leadership conference room discussion",
      }}
    />
  );
};
