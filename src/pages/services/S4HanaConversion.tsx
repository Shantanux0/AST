import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../../content/content';
import { IMAGES } from '../../content/images';

export const S4HanaConversion: React.FC = () => {
  const content = SERVICE_PAGES.s4hanaConversion;
  const images = IMAGES.serviceDetails.s4hanaConversion;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "S/4HANA Cloud Conversion & Migration",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "< 48 Hrs", label: "Cutover Downtime Window", detail: "Weekend technical execution with zero business spillover." },
          { value: "3 Hyperscalers", label: "Cloud Platforms", detail: "Certified deployments across AWS, Azure, and Google Cloud." },
          { value: "100%", label: "Code Remediation", detail: "Automated custom ABAP modernization for SAP HANA DB." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Senior engineer reviewing SAP S/4HANA migration telemetry",
        deliverables: [
          { title: "Simplification & Add-On Audit", desc: "Detailed analysis of custom transactions, user exits, and third-party interface compatibility." },
          { title: "Sandbox Conversion Dry-Run", desc: "Full simulation of the target database migration with verified rehearsal metrics." },
          { title: "Cloud Sizing & Architecture Spec", desc: "Optimized HANA memory sizing to minimize recurring cloud infrastructure expenditures." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "Data analysis and system cutover simulation",
      }}
    />
  );
};
