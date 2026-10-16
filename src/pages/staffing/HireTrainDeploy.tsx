import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';
import { SERVICE_PAGES } from '../../content/content';
import { IMAGES } from '../../content/images';

export const HireTrainDeploy: React.FC = () => {
  const content = SERVICE_PAGES.hireTrainDeploy;
  const images = IMAGES.serviceDetails.hireTrainDeploy;

  return (
    <ServicePageTemplate
      data={{
        tag: content.tag,
        title: content.title,
        intro: content.intro,
        heroImage: images.hero,
        heroImageAlt: "Hire Train Deploy Enterprise Cohort",
        modulesCovered: content.modulesCovered,
        whatWeDo: content.whatWeDo,
        metrics: [
          { value: "Day One", label: "Productivity", detail: "Trained on your exact landscape, repos, and ticket workflows." },
          { value: "8 to 12", label: "Weeks Immersion", detail: "Intensive sandbox configuration by senior SAP practitioners." },
          { value: "Top 5%", label: "Aptitude Filtration", detail: "Rigorous algorithmic and communication filtration." }
        ],
        featureImage: images.feature,
        featureImageAlt: "Cohort workshop and real-world SAP scenario practice",
        deliverables: [
          { title: "Customized Module Curriculum", desc: "Syllabus reverse-engineered from your specific project deliverables." },
          { title: "Live Ticket Simulation Portfolios", desc: "Proof of practical competency across real bug-fixing and transport cycles." },
          { title: "Long-Term Conversion Pathways", desc: "Seamless right-to-hire transition after initial contractual milestones." }
        ],
        teamPod: content.teamPod,
        faqs: content.faqs,
        process: content.process,
        processImage: images.process,
        processImageAlt: "Cohort of engineers in intensive SAP hands-on workshop",
      }}
    />
  );
};
