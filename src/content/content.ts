/**
 * Aditya Swift Technologies (AST) - Master Content Configuration
 * Designed for human, confident, editorial copy.
 * Rich, detailed enterprise context across every service, capability, and career path.
 * Client can edit all copy, metrics, and details directly from this file.
 */

export const COMPANY = {
  legalName: "Aditya Swift Technologies Pvt. Ltd.",
  shortName: "AST",
  tagline: "Enterprise SAP excellence. The elite talent to drive it.",
  city: "Hyderabad, India",
  fullAddress: "CoKarma, Mahaveer Radiance, 1st floor, Opp. Metro Pillar 1708, Madhapur, Hyderabad, Telangana, India 500081",
  email: "support@adityaswifttech.com",
  phone: "+91 9000316070",
  phoneRaw: "+919000316070",
  whatsappUrl: "https://wa.me/919000316070",
  socials: {
    linkedin: "https://linkedin.com/company/102043724",
    facebook: "https://facebook.com/profile.php?id=61559242855265",
    instagram: "https://instagram.com/aditya_swift_technologies",
    twitter: "https://twitter.com/adityaswifttech",
  },
  year: 2026,
};

export const NAVIGATION = {
  links: [
    {
      label: "Services",
      href: "/services/sap-implementation",
      children: [
        {
          group: "SAP Practice",
          items: [
            { label: "SAP Implementation", href: "/services/sap-implementation", desc: "RISE with SAP and greenfield rollouts" },
            { label: "S/4HANA Conversion", href: "/services/s4hana-conversion", desc: "Brownfield, bluefield, and cloud migration" },
            { label: "Application Management", href: "/services/application-management", desc: "L2 to L4 support with guaranteed SLAs" },
          ],
        },
        {
          group: "Staffing Practice",
          items: [
            { label: "Permanent Staffing", href: "/staffing/permanent", desc: "Vetted full-time engineering hires" },
            { label: "Contract Staffing", href: "/staffing/contract", desc: "On-demand talent for project peaks" },
            { label: "Executive Search", href: "/staffing/executive", desc: "VP, Director, and Practice Heads" },
            { label: "Hire Train Deploy", href: "/staffing/hire-train-deploy", desc: "Custom cohorts tailored to your stack" },
          ],
        },
        {
          group: "Education",
          items: [
            { label: "Corporate Training", href: "/corporate-training", desc: "Role-aligned SAP module upskilling" },
          ],
        },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Why AST", href: "/why-choose-us" },
    { label: "Careers", href: "/careers" },
  ],
  cta: {
    label: "Talk to us",
    href: "/contact",
  },
};

export const HOME_PAGE = {
  hero: {
    tag: "Hyderabad, India / Global Delivery",
    headlinePart1: "Enterprise SAP excellence.",
    headlinePart2: "The elite talent to drive it.",
    subline: "Delivery and talent for enterprises going digital.",
    primaryCta: { label: "Our services", href: "/services/sap-implementation" },
    secondaryCta: { label: "Join our team", href: "/careers" },
    scrollLabel: "Scroll to explore",
  },

  statement: {
    tag: "01 / Philosophy",
    beforeAccent: "We deliver ",
    accent: "SAP transformations",
    middle: " and the ",
    accent2: "teams that run them.",
    linkText: "About our model",
    linkHref: "/about",
  },

  splitPanels: {
    left: {
      tag: "Practice 01",
      title: "SAP Services",
      desc: "Implementations, conversions, and continuous application support.",
      href: "/services/sap-implementation",
      buttonText: "Explore SAP practice",
    },
    right: {
      tag: "Practice 02",
      title: "Staffing",
      desc: "Vetted SAP consultants, contract pods, and custom talent cohorts.",
      href: "/staffing/permanent",
      buttonText: "Explore staffing",
    },
  },

  servicesIndex: {
    tag: "",
    heading: "Core practices.",
    subheading: "Precise execution across the enterprise technology lifecycle.",
    items: [
      {
        id: "01",
        title: "SAP Implementation",
        desc: "Complete RISE with SAP rollouts and custom enterprise configurations.",
        href: "/services/sap-implementation",
        imageKey: "sapImplementation",
      },
      {
        id: "02",
        title: "S/4HANA Conversion",
        desc: "Smooth transitions to modern SAP cloud platforms on AWS, Azure, and GCP.",
        href: "/services/s4hana-conversion",
        imageKey: "s4hanaConversion",
      },
      {
        id: "03",
        title: "Application Management",
        desc: "Continuous SLA-backed incident management, monitoring, and enhancement.",
        href: "/services/application-management",
        imageKey: "applicationManagement",
      },
      {
        id: "04",
        title: "Permanent Staffing",
        desc: "Senior functional and technical consultants placed for the long haul.",
        href: "/staffing/permanent",
        imageKey: "permanentStaffing",
      },
      {
        id: "05",
        title: "Contract Staffing",
        desc: "Rapid deployment of pre-vetted specialists to meet delivery deadlines.",
        href: "/staffing/contract",
        imageKey: "contractStaffing",
      },
      {
        id: "06",
        title: "Hire Train Deploy",
        desc: "Handpicked engineering cohorts trained on your specific stack before day one.",
        href: "/staffing/hire-train-deploy",
        imageKey: "hireTrainDeploy",
      },
    ],
  },

  // Editable Metrics
  metrics: {
    tag: "03 / Impact",
    heading: "By the numbers.",
    stats: [
      {
        num: 15,
        suffix: "+ Years",
        label: "Proven Track Record",
        note: "Over 15 years of enterprise SAP delivery and technical talent excellence.",
      },
      {
        num: 99,
        suffix: "%",
        label: "Customer Satisfaction",
        note: "Consistently rated highest for delivery quality, transparency, and retention.",
      },
      {
        num: 75,
        suffix: "+",
        label: "Large Projects Delivered",
        note: "Complex multi-module rollouts, cloud conversions, and custom integrations.",
      },
      {
        prefix: "< ",
        num: 15,
        suffix: " Min",
        label: "Respond Time",
        note: "Immediate turnaround on critical support escalations and urgent staffing requirements.",
      },
    ],
  },

  approach: {
    tag: "",
    heading: "How we work.",
    subheading: "A four-stage methodology with zero room for ambiguity.",
    steps: [
      {
        number: "01",
        title: "Understand",
        desc: "We dissect business requirements, current landscape, and skill gaps.",
        deliverable: "Clear scope statement & readiness assessment.",
      },
      {
        number: "02",
        title: "Plan",
        desc: "Architecture blueprints, resource matrices, and conversion timelines.",
        deliverable: "Sprint roadmap with fixed milestone gates.",
      },
      {
        number: "03",
        title: "Deliver",
        desc: "Agile configuration, rigorous data testing, and smooth user cutover.",
        deliverable: "Production deployment with rollback safeguards.",
      },
      {
        number: "04",
        title: "Support",
        desc: "Post-go-live stabilization, continuous AMS, and knowledge transfer.",
        deliverable: "24/7 SLA coverage and ongoing system tuning.",
      },
    ],
  },

  techLandscape: {
    tag: "Supported Ecosystem",
    heading: "Architectural Coverage & Platforms",
    subheading: "Deep functional specializations across SAP core modules, modern BTP extensions, and hyperscaler clouds.",
    categories: [
      {
        id: "01",
        title: "Enterprise Core",
        items: [
          { name: "S/4HANA Finance (FICO)", desc: "General ledger, controlling & treasury" },
          { name: "Materials Management (MM)", desc: "Procurement, inventory & valuation" },
          { name: "Sales & Distribution (SD)", desc: "Order-to-cash, pricing & billing" },
          { name: "Production Planning (PP)", desc: "Discrete & process manufacturing" },
        ],
      },
      {
        id: "02",
        title: "Operations & Quality",
        items: [
          { name: "Plant Maintenance (PM)", desc: "Asset management & preventive care" },
          { name: "Quality Management (QM)", desc: "Inspections, audits & compliance" },
          { name: "Extended Warehouse (EWM)", desc: "Intralogistics & RF scanner workflows" },
          { name: "SuccessFactors HXM", desc: "Global HR, payroll & talent systems" },
        ],
      },
      {
        id: "03",
        title: "Modern Platform & UI",
        items: [
          { name: "SAP BTP Architecture", desc: "Integration Suite & Extension Suite" },
          { name: "SAP Fiori & UI5", desc: "Modern human-centered enterprise UX" },
          { name: "ABAP on HANA & CDS", desc: "High-throughput cloud data models" },
          { name: "SAP Event Mesh & CPI", desc: "Real-time asynchronous enterprise queues" },
        ],
      },
      {
        id: "04",
        title: "Cloud Hyperscalers",
        items: [
          { name: "AWS Hyperscaler", desc: "RISE with SAP high-availability pods" },
          { name: "Microsoft Azure Cloud", desc: "S/4HANA enterprise cloud infrastructure" },
          { name: "Google Cloud Platform", desc: "BigQuery telemetry & SAP analytics" },
          { name: "24/7 SLA Monitoring", desc: "Proactive disaster recovery & patch mgmt" },
        ],
      },
    ],
  },

  hireTrainDeployFeature: {
    tag: "05 / Differentiated Model",
    title: "Hire. Train. Deploy.",
    subline: "Custom enterprise cohorts trained on your specific SAP modules before day one.",
    cta: { label: "Learn about the model", href: "/staffing/hire-train-deploy" },
  },

  careersBand: {
    tag: "06 / Careers",
    heading: "Build your career with us.",
    subline: "Work on demanding SAP programs with leaders who value craft.",
    cta: { label: "See open roles", href: "/careers" },
  },

  contactCta: {
    tag: "07 / Next Step",
    heading: "Let's talk.",
    subline: "Tell us about your upcoming project or talent requirements.",
  },
};

export const PARTNERS_MARQUEE = [
  "SAP S/4HANA",
  "RISE with SAP",
  "AWS Cloud",
  "Microsoft Azure",
  "Google Cloud Platform",
  "SAP Fiori",
  "SAP BTP",
  "SAP SuccessFactors",
  "SAP Ariba",
  "SAP MM / SD / FICO",
];

export const ABOUT_PAGE = {
  tag: "01 / Company",
  title: "A focused enterprise partner.",
  intro: "Aditya Swift Technologies is built on a direct premise: complex SAP transformations require seasoned practitioners, not layered management.",
  pillars: [
    {
      num: "01",
      title: "Client-Centric",
      desc: "We align with your project goals, timelines, and commercial constraints without surprises.",
    },
    {
      num: "02",
      title: "Candidate-Focused",
      desc: "We treat consultants and candidates as core colleagues, ensuring low attrition and high pride in craft.",
    },
    {
      num: "03",
      title: "Deep Expertise",
      desc: "Every consultant we deploy has hands-on experience in production enterprise environments.",
    },
    {
      num: "04",
      title: "Continuous Innovation",
      desc: "From S/4HANA cloud conversions to automated testing pipelines, we keep systems lean and future-ready.",
    },
  ],
  quote: {
    text: "In Sanskrit, Aditya means the Sun: source of clarity, energy, and constancy. That is how we show up for every rollout.",
    author: "Leadership Team",
    role: "Aditya Swift Technologies",
  },
  milestones: [
    {
      year: "Phase 01",
      title: "Founding & Center of Excellence",
      desc: "Established headquarters in Madhapur, Hyderabad, bringing together veteran SAP functional and technical architects.",
    },
    {
      year: "Phase 02",
      title: "Cloud Hyperscaler Integration",
      desc: "Formalized certified migration pipelines for SAP on AWS, Microsoft Azure, and Google Cloud Platform.",
    },
    {
      year: "Phase 03",
      title: "RISE with SAP & S/4HANA Practice",
      desc: "Expanded dedicated conversion pods for multi-country manufacturing and logistics enterprise transformations.",
    },
    {
      year: "Phase 04",
      title: "Global Delivery & Talent Cohorts",
      desc: "Operating 24/7 AMS, permanent and contract staffing pods, and the flagship Hire Train Deploy model.",
    },
  ],
  operatingPrinciples: [
    {
      title: "Clean Core Strategy",
      desc: "Minimizing legacy custom code debt by implementing modern BTP extensions and standard SAP Fiori APIs.",
    },
    {
      title: "Zero Unverified Submissions",
      desc: "Every engineer is technically screened by practicing architects before client introduction.",
    },
    {
      title: "Fixed Milestone Accountability",
      desc: "Predictable schedules, transparent commercial rate cards, and clear contractual deliverables.",
    },
  ],
  location: {
    tag: "Hyderabad Headquarters",
    heading: "Rooted in India's technology capital.",
    desc: "Our delivery center at CoKarma Madhapur gives us immediate access to top enterprise talent and proximity to global technology hubs.",
  },
};

export const WHY_CHOOSE_US_PAGE = {
  tag: "02 / Why AST",
  title: "Precision over promises.",
  intro: "Enterprise leaders choose Aditya Swift Technologies when they cannot afford delayed milestones or unqualified contractors.",
  reasons: [
    {
      num: "01",
      title: "Zero Bench Bloat",
      desc: "We deploy active, verified subject matter experts matched specifically to your technical scope.",
    },
    {
      num: "02",
      title: "Fast Turnaround",
      desc: "Average 14-day turnaround from confirmed requisition to verified resource onboarding.",
    },
    {
      num: "03",
      title: "Strict Screening",
      desc: "Multi-round technical reviews conducted by senior SAP architects before candidate submission.",
    },
    {
      num: "04",
      title: "Hybrid Delivery",
      desc: "Seamless collaboration between our Hyderabad delivery hub and your on-site project management.",
    },
    {
      num: "05",
      title: "Cost Transparency",
      desc: "Clear rate cards and fixed milestone deliverables. No hidden billing or scope drift.",
    },
    {
      num: "06",
      title: "Long-Term Retention",
      desc: "Above-market compensation and strong career development keep our deployed teams stable.",
    },
  ],
  vettingStages: [
    {
      num: "01",
      title: "Module Architecture Review",
      desc: "In-depth oral examination of module configuration, data structures, and integration points.",
    },
    {
      num: "02",
      title: "Live Sandbox Simulation",
      desc: "Practical troubleshooting in configured sandbox systems to evaluate real problem-solving.",
    },
    {
      num: "03",
      title: "Consultative Communication",
      desc: "Evaluating stakeholder management, workshop facilitation, and requirement translation.",
    },
    {
      num: "04",
      title: "360-Degree Reference Audit",
      desc: "Direct verification with past project sponsors and client delivery leads.",
    },
  ],
  commercialModels: [
    {
      title: "Fixed Milestone SOW",
      desc: "Defined scope, fixed timeline, and milestone-linked billing. Ideal for greenfield and conversions.",
    },
    {
      title: "Dedicated Agile Pods",
      desc: "Cross-functional teams on monthly retainer for continuous enhancement and delivery peaks.",
    },
    {
      title: "Strategic Staff Augmentation",
      desc: "On-demand niche consultants to fill specific module or architectural vacancies rapidly.",
    },
  ],
};

export const SERVICE_PAGES = {
  sapImplementation: {
    slug: "sap-implementation",
    tag: "SAP Practice",
    title: "SAP Implementation",
    intro: "Structured, predictable SAP rollouts tailored to your business architecture.",
    modulesCovered: [
      "Financial Accounting (FI)",
      "Controlling & Profitability (CO)",
      "Materials Management (MM)",
      "Sales & Distribution (SD)",
      "Production Planning (PP)",
      "Plant Maintenance (PM)",
      "Quality Management (QM)",
      "SAP BTP Integration",
      "SAP Fiori Apps",
      "RISE Clean Core",
    ],
    whatWeDo: [
      {
        title: "RISE with SAP Advisory",
        desc: "Guiding enterprise cloud transition with business process design and target architecture mapping.",
      },
      {
        title: "Full Lifecycle Greenfield",
        desc: "End-to-end configuration from blue-printing to functional unit testing and user training.",
      },
      {
        title: "SAP Module Configuration",
        desc: "Implementation across FICO, MM, SD, PP, PM, and Supply Chain management.",
      },
      {
        title: "Cutover & Go-Live Protection",
        desc: "Strict cutover orchestration with zero unplanned business interruptions.",
      },
    ],
    teamPod: [
      { role: "Lead Solution Architect", desc: "Owns overall landscape blueprint and cross-module integrity." },
      { role: "Functional Module Leads", desc: "Specialists in Finance, Logistics, and Supply Chain configuration." },
      { role: "Senior ABAP/BTP Engineer", desc: "Builds custom clean-core extensions and cloud integrations." },
      { role: "Cutover & Test Manager", desc: "Orchestrates mock rehearsals, UAT cycles, and go-live sequences." },
    ],
    faqs: [
      {
        q: "What is the typical timeframe for a mid-market SAP implementation?",
        a: "Using our pre-configured accelerators and clean core approach, targeted rollouts typically span 4 to 7 months from discovery blueprinting to hypercare stabilization."
      },
      {
        q: "How does AST support RISE with SAP initiatives?",
        a: "We assist with business process redesign, technical clean-core remediation, cloud landing zone sizing, and contractual SLA structuring with SAP and hyperscalers."
      },
      {
        q: "How do you manage data migration from legacy ERPs?",
        a: "We utilize automated extraction and cleansing scripts with multiple mock cutover iterations to validate 100% data reconciliation prior to production cutover."
      }
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Process blueprinting and integration analysis." },
      { step: "02", title: "Build", desc: "Core configuration and data conversion." },
      { step: "03", title: "Test", desc: "User acceptance, performance stress tests." },
      { step: "04", title: "Deploy", desc: "Controlled go-live and hypercare support." },
    ],
  },

  s4hanaConversion: {
    slug: "s4hana-conversion",
    tag: "SAP Practice",
    title: "S/4HANA Conversion",
    intro: "Accelerated migration paths to modern SAP cloud platforms with verified data integrity.",
    modulesCovered: [
      "SAP ECC 6.0 to S/4HANA",
      "Brownfield System Conversion",
      "Bluefield Selective Data Transition",
      "Greenfield Cloud Re-platform",
      "AWS Hyperscaler Migration",
      "Microsoft Azure S/4HANA",
      "Google Cloud Architecture",
      "ABAP Custom Code Remediation",
      "Simplification Item Checks",
    ],
    whatWeDo: [
      {
        title: "Readiness Assessment",
        desc: "Comprehensive custom code analysis, add-on compatibility, and simplification item checks.",
      },
      {
        title: "Cloud Infrastructure Setup",
        desc: "Architecting high-availability S/4HANA instances on AWS, Microsoft Azure, or Google Cloud.",
      },
      {
        title: "Brownfield & Bluefield Paths",
        desc: "Selective data transitions or full system conversions engineered around your downtime window.",
      },
      {
        title: "Custom Code Modernization",
        desc: "Remediation of ABAP code and adaptation to SAP HANA database standards.",
      },
    ],
    teamPod: [
      { role: "Migration Lead Architect", desc: "Oversees system readiness, sizing, and simplification catalogs." },
      { role: "BASIS / Cloud Hyperscaler Lead", desc: "Configures high-availability instances, network, and storage." },
      { role: "ABAP HANA Remediation Pod", desc: "Adapts custom Z-code and optimizes database queries." },
      { role: "Data Cleansing Specialist", desc: "Validates historical archive cutoffs and reconciliation." },
    ],
    faqs: [
      {
        q: "What is the difference between Brownfield and Bluefield conversions?",
        a: "Brownfield upgrades your existing system with full transaction history intact, while Bluefield allows selective historical data transfer, combining a fresh clean core with historical continuity."
      },
      {
        q: "Can the actual production conversion be executed over a single weekend?",
        a: "Yes. By executing automated dress rehearsals and database shadow conversions, we consistently fit enterprise production cutovers into a 36-to-48-hour weekend maintenance window."
      },
      {
        q: "How do you handle custom modifications made in our legacy ECC?",
        a: "We run automated custom code analyses to retire unused programs, remediate non-standard ABAP syntax, and transition necessary extensions to SAP BTP."
      }
    ],
    process: [
      { step: "01", title: "Assess", desc: "Simplification catalogue and readiness checks." },
      { step: "02", title: "Prepare", desc: "Data cleansing and cloud sizing." },
      { step: "03", title: "Convert", desc: "Rehearsal runs and automated code remediation." },
      { step: "04", title: "Go-Live", desc: "Final cutover within weekend maintenance windows." },
    ],
  },

  applicationManagement: {
    slug: "application-management",
    tag: "SAP Practice",
    title: "Application Management",
    intro: "Dependable L2 to L4 operational support that keeps your mission-critical SAP systems stable.",
    modulesCovered: [
      "24/7/365 Incident Management",
      "L2 Functional Troubleshooting",
      "L3 Technical & ABAP Remediation",
      "L4 Landscape Architecture & BASIS",
      "Quarterly Release Management",
      "Proactive EarlyWatch Tuning",
      "Security Patching & Notes",
      "Statutory GST & Tax Updates",
    ],
    whatWeDo: [
      {
        title: "Guaranteed SLA Response",
        desc: "Tiered response times down to 15 minutes for critical P1 incidents.",
      },
      {
        title: "Continuous System Monitoring",
        desc: "Proactive health monitoring, background job inspection, and memory optimization.",
      },
      {
        title: "Enhancement & Release Cycles",
        desc: "Regular packaging of minor enhancements, security notes, and statutory compliance updates.",
      },
      {
        title: "Knowledge Retention",
        desc: "System documentation maintained so you are never reliant on single-person knowledge.",
      },
    ],
    teamPod: [
      { role: "AMS Service Delivery Manager", desc: "Owns SLA governance, ticket prioritization, and client reviews." },
      { role: "Primary Functional Consultants", desc: "Dedicated module specialists familiar with your custom setups." },
      { role: "BASIS System Administrator", desc: "Monitors memory, transport requests, and database performance." },
      { role: "Security & Compliance Lead", desc: "Ensures role authorizations and audit compliance." },
    ],
    faqs: [
      {
        q: "What are your standard SLA response times?",
        a: "We offer tiered contractual response SLAs: 15 minutes for Priority 1 (System Down), 1 hour for Priority 2 (Major Impact), and 4 hours for standard functional queries."
      },
      {
        q: "How does knowledge transfer work during onboarding?",
        a: "We execute a structured 30-day shadow transition where our engineers catalog runbooks, review historical ticket logs, and baseline system metrics before taking over primary queue management."
      },
      {
        q: "Do you support minor enhancements under the AMS contract?",
        a: "Yes. Our standard AMS agreements allocate dedicated monthly capacity for minor enhancements, user interface tweaks, and statutory updates without separate procurement cycles."
      }
    ],
    process: [
      { step: "01", title: "Transition", desc: "Knowledge shadowing and runbook documentation." },
      { step: "02", title: "Baseline", desc: "Incident triage and metric baselining." },
      { step: "03", title: "Operate", desc: "SLA-backed continuous ticket resolution." },
      { step: "04", title: "Optimize", desc: "Root cause eradication and performance tuning." },
    ],
  },

  permanentStaffing: {
    slug: "permanent-staffing",
    tag: "Staffing Practice",
    title: "Permanent Staffing",
    intro: "Connecting enterprise leaders with full-time SAP professionals who fit technically and culturally.",
    modulesCovered: [
      "SAP Solution Architects",
      "FICO & S/4HANA Finance Leads",
      "Supply Chain & MM/SD Leads",
      "BASIS & Cloud Infrastructure",
      "SAP BTP & Fiori Developers",
      "Enterprise Program Managers",
      "Data Migration Leads",
      "Security & GRC Specialists",
    ],
    whatWeDo: [
      {
        title: "Technical Architect Search",
        desc: "Senior practitioners capable of owning complex landscape design and integration roadmaps.",
      },
      {
        title: "Functional Module Leads",
        desc: "Domain experts in Finance, Logistics, Supply Chain, and Human Capital management.",
      },
      {
        title: "Culture & Longevity Fit",
        desc: "Rigorous vetting to ensure long tenure and genuine alignment with your organizational values.",
      },
      {
        title: "Direct Placement Guarantee",
        desc: "Structured replacement warranties providing complete peace of mind for every placement.",
      },
    ],
    teamPod: [
      { role: "Lead Technology Recruiter", desc: "Specializes exclusively in SAP and enterprise application searches." },
      { role: "Practicing Technical Reviewer", desc: "Conducts multi-round architectural and module screening." },
      { role: "Candidate Relationship Lead", desc: "Manages offer negotiations, buyouts, and joining integrity." },
    ],
    faqs: [
      {
        q: "How do you screen senior SAP candidates before presentation?",
        a: "Every candidate undergoes a mandatory technical evaluation by a practicing AST architect to verify actual rollout involvement, hands-on configuration ability, and communication clarity."
      },
      {
        q: "What is your replacement warranty on permanent hires?",
        a: "We provide an industry-standard 90-day replacement warranty. If a hire departs or fails to meet established milestones, we source a qualified replacement at zero additional fee."
      },
      {
        q: "What is the typical time from requisition to candidate onboarding?",
        a: "We present verified candidate dossiers within 5 business days, with average joining timelines ranging from 15 to 45 days depending on notice periods and offer terms."
      }
    ],
    process: [
      { step: "01", title: "Calibration", desc: "Detailed discussion on technical & team culture requirements." },
      { step: "02", title: "Sourcing", desc: "Targeted outreach to passive and senior industry talent." },
      { step: "03", title: "Screening", desc: "Architect-level technical verification and reference checks." },
      { step: "04", title: "Onboarding", desc: "Offer negotiation, notice-period tracking, and Day 1 welcome." },
    ],
  },

  contractStaffing: {
    slug: "contract-staffing",
    tag: "Staffing Practice",
    title: "Contract Staffing",
    intro: "Flexible talent deployment for critical project sprints, audit remediation, and rollout peaks.",
    modulesCovered: [
      "On-Demand SAP Specialists",
      "Dedicated Delivery Pods",
      "Cutover Sprint Teams",
      "ABAP on HANA Developers",
      "BASIS Stabilization Pods",
      "Third-Party Integration Leads",
      "UAT & Testing Squads",
      "Hypercare Standby Teams",
    ],
    whatWeDo: [
      {
        title: "Immediate Availability",
        desc: "Pre-vetted pool of SAP specialists ready to onboard within days, not months.",
      },
      {
        title: "Flexible Engagement Terms",
        desc: "Short-term, long-term, and contract-to-hire arrangements structured around your schedule.",
      },
      {
        title: "Payroll & Compliance Handling",
        desc: "We manage all statutory compliances, contracts, and benefits transparently.",
      },
      {
        title: "Continuous Performance Review",
        desc: "Regular check-ins with client managers to ensure milestones are met on time.",
      },
    ],
    teamPod: [
      { role: "Talent Delivery Manager", desc: "Coordinates contractor allocation, milestone schedules, and extensions." },
      { role: "Statutory Compliance Officer", desc: "Guarantees full payroll, tax, and insurance adherence." },
      { role: "Technical Engagement Lead", desc: "Performs bi-weekly performance checks with client project leads." },
    ],
    faqs: [
      {
        q: "How fast can you deploy a contract SAP consultant?",
        a: "From initial requisition confirmation, pre-vetted contractor profiles are presented within 48 to 72 hours, with on-boarding possible in under 10 business days."
      },
      {
        q: "Do you offer contract-to-hire arrangements?",
        a: "Yes. Many enterprise clients engage specialists under our contract model and transition them to full-time employees after a 6-month evaluation milestone."
      },
      {
        q: "How are statutory compliances managed?",
        a: "All contractors are 100% compliant with GST, Provident Fund, ESIC, professional tax, and standard commercial liability insurance."
      }
    ],
    process: [
      { step: "01", title: "Requisition", desc: "Role breakdown and skill matrix confirmation." },
      { step: "02", title: "Shortlisting", desc: "Profiles presented within 48 to 72 hours." },
      { step: "03", title: "Selection", desc: "Single or multi-round technical client validation." },
      { step: "04", title: "Deployment", desc: "Instant deployment with hardware and system access support." },
    ],
  },

  executiveStaffing: {
    slug: "executive-staffing",
    tag: "Staffing Practice",
    title: "Executive Search",
    intro: "Discreet leadership recruitment for CIOs, VPs of Enterprise Applications, and SAP Practice Directors.",
    modulesCovered: [
      "Chief Information Officers (CIO)",
      "Chief Technology Officers (CTO)",
      "VPs of Enterprise Applications",
      "SAP Practice Directors",
      "Global Enterprise Delivery Heads",
      "Cloud Transformation Executives",
      "Principal Enterprise Architects",
    ],
    whatWeDo: [
      {
        title: "Confidential Headhunting",
        desc: "Targeted approaches for top-tier leadership roles in enterprise technology.",
      },
      {
        title: "Track Record Verification",
        desc: "In-depth review of past multi-million dollar transformation outcomes and team governance.",
      },
      {
        title: "Strategic Alignment",
        desc: "Evaluating executive vision against board priorities and digital modernization goals.",
      },
      {
        title: "Comprehensive References",
        desc: "360-degree reference interviews with past clients, peers, and reporting team members.",
      },
    ],
    teamPod: [
      { role: "Managing Partner", desc: "Directly leads the search charter, client calibration, and executive outreach." },
      { role: "Senior Research Analyst", desc: "Maps passive executive leadership across competitor and enterprise landscapes." },
    ],
    faqs: [
      {
        q: "How do you preserve confidentiality during executive searches?",
        a: "All executive mandates are conducted under strict non-disclosure terms without public job postings. Initial discussions disclose only broad scope until candidate alignment is confirmed."
      },
      {
        q: "What is your track record in executive placement longevity?",
        a: "Over 95% of executives placed through our practice remain in their roles past the two-year mark, supported by our thorough 180-day executive warranty."
      }
    ],
    process: [
      { step: "01", title: "Charter", desc: "Defining leadership benchmarks and target enterprise sectors." },
      { step: "02", title: "Outreach", desc: "Private, confidential executive conversations." },
      { step: "03", title: "Assessment", desc: "Strategic fit, transformation history, and leadership style." },
      { step: "04", title: "Closing", desc: "Executive compensation structuring and seamless onboarding." },
    ],
  },

  hireTrainDeploy: {
    slug: "hire-train-deploy",
    tag: "Staffing Practice",
    title: "Hire. Train. Deploy.",
    intro: "Turnkey talent engineering. We recruit high-aptitude graduates and train them on your exact tech stack.",
    modulesCovered: [
      "Top Engineering Campus Sourcing",
      "SAP Module Immersion (8–12 Weeks)",
      "Hands-On Sandbox Simulations",
      "Corporate Communication & Etiquette",
      "Real-World Ticket Resolution",
      "Clean-Core ABAP & OData",
      "Day 1 Billable Productivity",
    ],
    whatWeDo: [
      {
        title: "Selective Campus Sourcing",
        desc: "Top 5% aptitude screening from leading engineering institutions across South India.",
      },
      {
        title: "Curriculum Customization",
        desc: "8 to 12 weeks of rigorous training built around your enterprise versions and internal workflows.",
      },
      {
        title: "Mentor-Led Real Scenarios",
        desc: "Simulation of live tickets, mock cutover exercises, and code reviews by senior leads.",
      },
      {
        title: "Day One Productivity",
        desc: "Engineers arrive ready to deliver real tasks without a multi-month ramp-up lag.",
      },
    ],
    teamPod: [
      { role: "Program Director", desc: "Customizes curriculum to your enterprise tech stack and roadmap." },
      { role: "Lead Technical Trainer", desc: "Full-time enterprise architect mentoring trainees daily." },
      { role: "Cohort Success Manager", desc: "Monitors aptitude assessments, milestone reviews, and onboarding." },
    ],
    faqs: [
      {
        q: "Who bears the cost of training in the Hire Train Deploy model?",
        a: "AST finances and manages the entire recruitment, training, and sandbox setup. Clients only begin billing once resources are deployed on active project tasks."
      },
      {
        q: "Can clients review and interview trainees before deployment?",
        a: "Yes. Clients review progress scorecards throughout the 10-week cohort and conduct final milestone gate interviews prior to Day 1 onboarding."
      }
    ],
    process: [
      { step: "01", title: "Hire", desc: "Aptitude and coding filtration from accredited universities." },
      { step: "02", title: "Train", desc: "Hands-on SAP module and corporate professionalism immersion." },
      { step: "03", title: "Assess", desc: "Client milestone evaluations and certification milestones." },
      { step: "04", title: "Deploy", desc: "Direct integration into your project teams as active contributors." },
    ],
  },

  corporateTraining: {
    slug: "corporate-training",
    tag: "Education",
    title: "Corporate Training",
    intro: "Targeted technical training to upskill enterprise teams on S/4HANA, BTP, and modern SAP modules.",
    modulesCovered: [
      "S/4HANA Delta Upskilling for ECC Teams",
      "SAP Business Technology Platform (BTP)",
      "SAP Fiori & UI5 Development",
      "ABAP RESTful Application Programming (RAP)",
      "Core Data Services (CDS Views)",
      "Advanced Financial Closing Cockpit",
      "Supply Chain & Extended Warehouse (EWM)",
    ],
    whatWeDo: [
      {
        title: "Customized Module Tracks",
        desc: "Syllabus adapted to your actual landscape, configurations, and organizational processes.",
      },
      {
        title: "Hands-On Sandbox Systems",
        desc: "Live access to configured SAP environments for real-world scenario practice.",
      },
      {
        title: "Senior Practitioner Instructors",
        desc: "Taught by working enterprise consultants who deal with real deployment challenges daily.",
      },
      {
        title: "Post-Training Evaluations",
        desc: "Practical milestone tests and benchmark reporting to ensure skill retention.",
      },
    ],
    teamPod: [
      { role: "Curriculum Architect", desc: "Designs custom modules aligned to your upcoming go-live." },
      { role: "Practicing Instructor", desc: "Active enterprise consultant sharing production case scenarios." },
    ],
    faqs: [
      {
        q: "Are training environments provided for all participants?",
        a: "Yes. Every participant receives personal login credentials to a fully configured SAP sandbox instance with preloaded master data for hands-on exercises."
      },
      {
        q: "Can training be delivered virtually and on-site?",
        a: "We offer both immersive on-site workshops at your enterprise offices and live interactive virtual sessions across global timezones."
      }
    ],
    process: [
      { step: "01", title: "Assessment", desc: "Skill evaluation of current team members." },
      { step: "02", title: "Design", desc: "Tailoring curriculum to upcoming project requirements." },
      { step: "03", title: "Delivery", desc: "Interactive instructor-led virtual or on-site workshops." },
      { step: "04", title: "Certification", desc: "Practical project review and completion validation." },
    ],
  },
};

export const CAREERS_PAGE = {
  tag: "01 / Join Us",
  title: "Build your career with us.",
  intro: "We work with top enterprise clients on significant SAP implementations. If you value rigor, craft, and autonomy, we want to hear from you.",
  benefits: [
    { title: "Above-Market Compensation", desc: "Transparent compensation structures aligned with senior consulting benchmarks." },
    { title: "100% Certification Sponsorship", desc: "Full funding for SAP S/4HANA, BTP, AWS, and Azure professional credentials." },
    { title: "Enterprise Impact", desc: "Direct hands-on involvement with Tier-1 global clients without bureaucratic filtering." },
    { title: "Hybrid Autonomy", desc: "Flexible hybrid working model anchored by our modern Madhapur technical hub." },
  ],
  openings: [
    {
      id: "job-01",
      title: "Senior SAP FICO Consultant",
      department: "SAP Practice",
      location: "Hyderabad / Hybrid",
      type: "Full-time",
      experience: "6–9 years",
      summary: "Lead financial accounting and controlling configuration for multi-country enterprise rollouts.",
      responsibilities: [
        "Architect GL, AP, AR, Asset Accounting, and CO-PA structures.",
        "Collaborate directly with client financial controllers.",
        "Guide junior functional analysts and lead integration testing.",
      ],
      requirements: [
        "6+ years hands-on experience in SAP FICO with at least 2 full-cycle rollouts.",
        "Deep familiarity with S/4HANA Finance and universal journal concepts.",
        "Strong business communication and workshop facilitation skills.",
      ],
    },
    {
      id: "job-02",
      title: "SAP S/4HANA Migration Architect",
      department: "Cloud Architecture",
      location: "Hyderabad / On-site",
      type: "Full-time",
      experience: "8–12 years",
      summary: "Lead brownfield and bluefield cloud migrations to AWS and Microsoft Azure.",
      responsibilities: [
        "Execute pre-conversion assessments and simplification item audits.",
        "Design cloud sizing and high-availability architecture.",
        "Direct the technical cutover sequence and hypercare support.",
      ],
      requirements: [
        "Proven lead architect on at least 3 S/4HANA migration projects.",
        "Solid grasp of SAP HANA DB optimization and ABAP code remediation.",
        "Certifications in SAP S/4HANA or Hyperscaler architecture.",
      ],
    },
    {
      id: "job-03",
      title: "SAP MM / SD Functional Consultant",
      department: "Supply Chain Practice",
      location: "Hyderabad / Hybrid",
      type: "Full-time",
      experience: "5–8 years",
      summary: "Configure procurement, inventory, and order-to-cash workflows for manufacturing clients.",
      responsibilities: [
        "Design purchase order workflows, pricing procedures, and shipping conditions.",
        "Work with client warehouse teams on logistics integration.",
        "Support user training and post-go-live stabilization.",
      ],
      requirements: [
        "5+ years in SAP MM or SD configuration.",
        "Experience with third-party logistics integrations.",
        "Bachelor's degree in Engineering, Business, or related field.",
      ],
    },
    {
      id: "job-04",
      title: "SAP BTP Integration Architect",
      department: "Cloud Development",
      location: "Hyderabad / Hybrid",
      type: "Full-time",
      experience: "6–10 years",
      summary: "Design and implement clean-core cloud extensions using SAP BTP and Cloud Integration.",
      responsibilities: [
        "Architect enterprise event-driven integrations on SAP Integration Suite.",
        "Guide modern SAP RAP (RESTful Application Programming) backend patterns.",
        "Build secure API connections between S/4HANA and external SaaS platforms.",
      ],
      requirements: [
        "6+ years enterprise integration experience with 3+ years hands-on with SAP BTP.",
        "Strong experience with OData, REST, SOAP, and OAuth authentication.",
        "Demonstrated understanding of SAP clean core principles.",
      ],
    },
    {
      id: "job-05",
      title: "Technical Recruiter – SAP & Enterprise Tech",
      department: "Talent Acquisition",
      location: "Madhapur, Hyderabad",
      type: "Full-time",
      experience: "3–6 years",
      summary: "Source and screen top-tier functional and technical SAP talent for client mandates.",
      responsibilities: [
        "Conduct headhunting for senior SAP consultants across India.",
        "Collaborate with practice leads to screen candidate technical competency.",
        "Maintain candidate relationships from initial call through joining date.",
      ],
      requirements: [
        "3+ years experience in IT or SAP technical recruitment.",
        "Strong understanding of SAP modules, certifications, and market rates.",
        "High empathy, clear written communication, and closing capability.",
      ],
    },
    {
      id: "job-06",
      title: "SAP ABAP on HANA Developer",
      department: "Development",
      location: "Hyderabad / Hybrid",
      type: "Full-time",
      experience: "4–7 years",
      summary: "Build custom CDS views, AMDP procedures, and Fiori application backends.",
      responsibilities: [
        "Develop high-performance database procedures in SAP HANA.",
        "Remediate legacy ABAP code for S/4HANA compatibility.",
        "Build OData services for modern SAP Fiori user interfaces.",
      ],
      requirements: [
        "4+ years development in ABAP with focus on ABAP 7.5+ syntax.",
        "Hands-on experience with CDS views, AMDP, and OData.",
        "Comfortable with Git and modern CI/CD deployment pipelines.",
      ],
    },
  ],
};

export const CONTACT_PAGE = {
  tag: "01 / Contact",
  title: "Let's begin.",
  intro: "Reach out directly. Whether planning an enterprise rollout or looking for senior talent, our leadership team responds promptly.",
  topics: [
    "SAP Implementation / RISE",
    "S/4HANA Conversion",
    "Application Management (AMS)",
    "Contract / Permanent Staffing",
    "Hire Train Deploy Program",
    "Corporate Training",
    "Other Inquiry",
  ],
};
