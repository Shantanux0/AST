import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../../content/content';
import { IMAGES } from '../../content/images';

export const ApplicationManagement: React.FC = () => {
  const content = SERVICE_PAGES.applicationManagement;
  const images = IMAGES.serviceDetails.applicationManagement;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "SAP Application Management Services (AMS)",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "15 Min", label: "P1 Incident Response", detail: "Round-the-clock rapid triage for mission-critical halts." },
          { value: "99.9%", label: "SLA Adherence", detail: "Transparent quarterly audit scorecards." },
          { value: "L2 to L4", label: "Continuous Support", detail: "Tiered engineering depth covering BASIS to functional modules." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Continuous monitoring desk for enterprise SAP operations",
        deliverables: [
          { title: "Standard Operating Runbooks", desc: "Detailed ticket routing matrices and resolution catalogs updated continuously." },
          { title: "Proactive Health Telemetry", desc: "Weekly job analysis, memory leak detection, and transport management." },
          { title: "Monthly SLA & Trend Reports", desc: "Executive dashboards detailing recurring ticket eradication and root cause analysis." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "AMS monitoring and ticket resolution operations",
      }}
    />
  );
};
