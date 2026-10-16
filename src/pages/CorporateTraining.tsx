import React from 'react';
import { ServicePageTemplate } from '../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../content/content';
import { IMAGES } from '../content/images';

export const CorporateTraining: React.FC = () => {
  const content = SERVICE_PAGES.corporateTraining;
  const images = IMAGES.serviceDetails.corporateTraining;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "Corporate SAP Training and Enterprise Upskilling",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "100%", label: "Hands-On Sandbox Time", detail: "Dedicated configured instances for practical scenario practice." },
          { value: "10+ Yrs", label: "Instructor Deployment", detail: "Taught exclusively by active enterprise SAP consultants." },
          { value: "Role Aligned", label: "Custom Tracks", detail: "Syllabus adapted to your actual migration or go-live roadmap." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Interactive executive amphitheater and technical masterclass",
        deliverables: [
          { title: "Enterprise Scenario Sandboxes", desc: "Access to live configured SAP landscapes for hands-on unit configuration." },
          { title: "Post-Training Competency Matrix", desc: "Detailed individual progress reporting and certification evaluations." },
          { title: "Ongoing Reference Materials", desc: "Recorded sessions and custom cheat sheets for post-course operational use." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "Instructor-led sandbox exercises with live SAP instances",
      }}
    />
  );
};
