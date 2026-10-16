import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../../content/content';
import { IMAGES } from '../../content/images';

export const SapImplementation: React.FC = () => {
  const content = SERVICE_PAGES.sapImplementation;
  const images = IMAGES.serviceDetails.sapImplementation;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "SAP Implementation and Architecture Planning",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "100%", label: "Target Cutover Success", detail: "Orchestrated weekend maintenance cutovers." },
          { value: "4 to 6", label: "Months Average Timeline", detail: "Lean accelerated RISE with SAP client implementations." },
          { value: "24/7", label: "Hypercare Coverage", detail: "Post-go-live operational support." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Modern glass office and SAP enterprise architecture planning",
        deliverables: [
          { title: "Target Architecture Blueprint", desc: "Process definition across core enterprise modules with complete simplification checks." },
          { title: "Automated Data Migration Scripts", desc: "Rigorous test conversion runs validating legacy database accuracy." },
          { title: "Role-Based Training Modules", desc: "Handover sessions ensuring your internal teams achieve Day 1 self-reliance." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "Engineers deploying SAP production configuration",
      }}
    />
  );
};
