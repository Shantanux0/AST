import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Utility components
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { SapImplementation } from './pages/services/SapImplementation';
import { S4HanaConversion } from './pages/services/S4HanaConversion';
import { ApplicationManagement } from './pages/services/ApplicationManagement';
import { PermanentStaffing } from './pages/staffing/PermanentStaffing';
import { ContractStaffing } from './pages/staffing/ContractStaffing';
import { ExecutiveStaffing } from './pages/staffing/ExecutiveStaffing';
import { HireTrainDeploy } from './pages/staffing/HireTrainDeploy';
import { CorporateTraining } from './pages/CorporateTraining';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  const location = useLocation();

  // Dynamic SEO title & meta description update
  useEffect(() => {
    const pageTitles: Record<string, string> = {
      '/': 'Aditya Swift Technologies (AST) | SAP Projects & Enterprise Staffing',
      '/about': 'About AST | Aditya Swift Technologies Hyderabad',
      '/why-choose-us': 'Why Choose AST | Rigorous SAP Delivery & Staffing',
      '/services/sap-implementation': 'SAP Implementation Services | RISE with SAP | AST',
      '/services/s4hana-conversion': 'SAP S/4HANA Cloud Conversion & Migration | AST',
      '/services/application-management': 'SAP Application Management Services (AMS) | AST',
      '/staffing/permanent': 'Permanent SAP Staffing & Talent Recruitment | AST',
      '/staffing/contract': 'Contract Staffing & On-Demand SAP Pods | AST',
      '/staffing/executive': 'Executive Search & SAP Leadership | AST',
      '/staffing/hire-train-deploy': 'Hire Train Deploy Enterprise Talent Programs | AST',
      '/corporate-training': 'Corporate SAP Training & Technical Upskilling | AST',
      '/careers': 'Careers & SAP Openings | Aditya Swift Technologies',
      '/contact': 'Contact Aditya Swift Technologies | Madhapur, Hyderabad',
      '/privacy': 'Privacy Policy | Aditya Swift Technologies',
      '/terms': 'Terms of Engagement | Aditya Swift Technologies',
    };

    const currentTitle = pageTitles[location.pathname] || 'Aditya Swift Technologies (AST)';
    document.title = currentTitle;
  }, [location.pathname]);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#FAF8F4] text-[#0E0E0C] flex flex-col justify-between selection:bg-[#FF5B1F] selection:text-white">
        {/* Bespoke interactive desktop cursor */}
        <CustomCursor />

        {/* Dynamic Sticky Header */}
        <Navbar />

        {/* Animated Page Content */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/why-choose-us" element={<PageTransition><WhyChooseUs /></PageTransition>} />
              
              {/* SAP Services */}
              <Route path="/services/sap-implementation" element={<PageTransition><SapImplementation /></PageTransition>} />
              <Route path="/services/s4hana-conversion" element={<PageTransition><S4HanaConversion /></PageTransition>} />
              <Route path="/services/application-management" element={<PageTransition><ApplicationManagement /></PageTransition>} />
              
              {/* Staffing */}
              <Route path="/staffing/permanent" element={<PageTransition><PermanentStaffing /></PageTransition>} />
              <Route path="/staffing/contract" element={<PageTransition><ContractStaffing /></PageTransition>} />
              <Route path="/staffing/executive" element={<PageTransition><ExecutiveStaffing /></PageTransition>} />
              <Route path="/staffing/hire-train-deploy" element={<PageTransition><HireTrainDeploy /></PageTransition>} />
              
              {/* Corporate Training */}
              <Route path="/corporate-training" element={<PageTransition><CorporateTraining /></PageTransition>} />
              
              {/* Careers & Contact */}
              <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              
              {/* Legal & 404 */}
              <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
              <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </div>

        {/* Editorial Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
};
