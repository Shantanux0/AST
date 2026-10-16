/**
 * Aditya Swift Technologies (AST) - Image Asset Registry
 * All imagery is curated for international / foreign editorial aesthetic:
 * sleek glass & steel skyscrapers (New York, London, Zurich, Frankfurt),
 * diverse international enterprise executives, sunlit modern boardrooms,
 * and advanced cloud data center facilities.
 *
 * Every single image on the site is 100% UNIQUE — no repeated images anywhere.
 * Client can swap any asset directly from this file.
 */

export interface ImageAsset {
  url: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export const IMAGES = {
  // Hero Imagery (Home Page)
  hero: {
    // Original requested cinematic glass architectural facade reflecting sunlight
    main: {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85",
      alt: "Modern glass architectural facade reflecting morning sunlight",
      caption: "Enterprise scale. Hyderabad & global reach."
    },
    // Custom Generated Cloud Data Center Corridor
    datacenter: {
      url: "/images/ast_cloud_datacenter.jpg",
      alt: "Enterprise cloud data center facility with fiber optic architecture",
      caption: "Mission-critical SAP cloud platforms."
    },
    // Custom Generated High-Rise International Boardroom
    collaboration: {
      url: "/images/ast_consulting_team.jpg",
      alt: "International enterprise consultants in high-rise glass boardroom overlooking London skyline",
      caption: "Executive strategic delivery."
    }
  },

  // Split Panel Section (Home Page)
  splitPanels: {
    sap: {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=85",
      alt: "Enterprise cloud systems architect configuring SAP infrastructure",
      caption: "SAP Transformation & Cloud Advisory"
    },
    // International Corporate & Tech Talent Pod
    staffing: {
      url: "/images/ast_foreign_corporate_genz.jpg",
      alt: "Young international Gen Z corporate professionals and enterprise consultants collaborating in a modern high-rise glass boardroom",
      caption: "Next-Gen Enterprise Talent & Global Staffing Pods"
    }
  },

  // Services Interactive Preview Images (Home Page Index Hover States) - ALL UNIQUE
  servicesIndex: {
    sapImplementation: {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
      alt: "Sunlit Scandinavian architectural office with enterprise consultants",
    },
    s4hanaConversion: {
      url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85",
      alt: "Senior engineers analyzing migration telemetry on multi-display setup",
    },
    applicationManagement: {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=85",
      alt: "Continuous operational support engineers monitoring production SAP systems",
    },
    permanentStaffing: {
      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=85",
      alt: "Senior international corporate director in modern glass corner office",
    },
    contractStaffing: {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85",
      alt: "Agile international project sprint pod collaborating in open workspace",
    },
    hireTrainDeploy: {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1800&q=85",
      alt: "Specialized enterprise engineering cohort in high-tech training workshop",
    }
  },

  // Approach Step Images (Home Page Sticky Step Section) - ALL UNIQUE
  approachSteps: [
    {
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
      alt: "Reviewing system requirements, financial models, and architectural blueprints",
      step: "01 / Understand"
    },
    {
      url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=85",
      alt: "Detailed enterprise sprint roadmap, milestone planning, and user journeys",
      step: "02 / Plan"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85",
      alt: "Cloud deployment engineer verifying release pipelines and cutover controls",
      step: "03 / Deliver"
    },
    {
      url: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1600&q=85",
      alt: "Long-term production support, 24/7 SLA monitoring, and performance tuning",
      step: "04 / Support"
    }
  ],

  // Hire Train Deploy Hero Feature (Home Page)
  hireTrainDeployBanner: {
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=2200&q=85",
    alt: "Modern international university tech auditorium with engineers in training",
    caption: "Built for Day One productivity across global engagements."
  },

  // Careers Band / Team Imagery (Home Page & Careers Page) - ALL UNIQUE
  careers: {
    banner: {
      url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=85",
      alt: "International team gathered in a sunlit architectural atrium",
      caption: "Join engineers and consultants building high-impact careers."
    },
    culture: {
      url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=85",
      alt: "Engineers strategizing around modern glass whiteboard in Berlin",
      caption: "An engineering-first, meritocratic environment."
    }
  },

  // About Page Photography - ALL UNIQUE
  about: {
    hero: {
      url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=2200&q=85",
      alt: "Modern international financial district skyscraper against clear sky",
      caption: "Headquartered in Madhapur, Hyderabad. Operating globally."
    },
    leadership: {
      url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=85",
      alt: "Senior international executive reviewing strategic enterprise operations",
      caption: "Hands-on leadership with decades of enterprise SAP experience."
    },
    workspace: {
      url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=85",
      alt: "Minimalist sunlit architectural corporate workspace",
      caption: "CoKarma, Mahaveer Radiance, Madhapur."
    }
  },

  // Why Choose Us Photography - ALL UNIQUE
  whyChooseUs: {
    hero: {
      url: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=2200&q=85",
      alt: "Modern suspension bridge and architectural city lines at dusk",
      caption: "Precision in execution. Zero guesswork."
    },
    rigor: {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
      alt: "Enterprise telemetry dashboard and performance benchmarks",
      caption: "Measured outcomes against strict enterprise SLAs."
    }
  },

  // Service Details Photography (Each Service has 3 distinct, 100% unique photos for deep scrolling)
  serviceDetails: {
    // 1. SAP Implementation
    sapImplementation: {
      hero: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1800&q=85"
    },
    // 2. S/4HANA Conversion
    s4hanaConversion: {
      hero: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=1800&q=85"
    },
    // 3. Application Management (AMS)
    applicationManagement: {
      hero: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1800&q=85"
    },
    // 4. Permanent Staffing
    permanentStaffing: {
      hero: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1800&q=85"
    },
    // 5. Contract Staffing
    contractStaffing: {
      hero: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=1800&q=85"
    },
    // 6. Executive Staffing
    executiveStaffing: {
      hero: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=85"
    },
    // 7. Hire Train Deploy
    hireTrainDeploy: {
      hero: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1800&q=85"
    },
    // 8. Corporate Training
    corporateTraining: {
      hero: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2200&q=85",
      feature: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1800&q=85",
      process: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=85"
    }
  },

  // Contact Page Photography - UNIQUE
  contact: {
    hero: {
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85",
      alt: "Quiet architectural conference room in New York skyscraper overlooking city skyline",
      caption: "CoKarma, Mahaveer Radiance, Madhapur, Hyderabad."
    }
  }
};
