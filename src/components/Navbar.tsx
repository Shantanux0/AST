import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY, NAVIGATION } from '../content/content';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Solid background threshold
      setIsScrolled(currentScrollY > 60);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && !isMobileMenuOpen) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Determine navbar styling:
  // When at top of Home page: transparent with white text (since hero is a full-bleed dark-toned photo)
  // When scrolled OR on any inner page (which has warm off-white background): solid warm off-white with hairline border and dark ink text
  const isTransparentHero = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isTransparentHero
            ? 'bg-transparent text-white border-b border-white/10'
            : 'bg-[#FAF8F4]/95 backdrop-blur-md text-[#0E0E0C] border-b border-[#E6E2DA]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo / Wordmark - Prominently Highlighted */}
          <Link
            to="/"
            className="flex items-center gap-3.5 group"
            aria-label="Aditya Swift Technologies Home"
          >
            <div className="flex items-center">
              <Logo
                variant={isTransparentHero ? 'white' : 'black'}
                className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col border-l-2 border-[#FF5B1F] pl-3">
              <span className="text-sm sm:text-base tracking-[0.12em] uppercase font-extrabold leading-none">
                Aditya Swift
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase font-bold text-[#FF5B1F] leading-tight mt-1">
                Technologies Pvt Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium tracking-wide">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 py-2 transition-colors ${
                  isTransparentHero ? 'hover:text-[#FF5B1F]' : 'hover:text-[#FF5B1F]'
                }`}
                aria-expanded={isServicesOpen}
              >
                <span>Services</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" />
                </svg>
              </button>

              {/* Mega Dropdown Panel */}
              <div
                className={`absolute top-full -left-20 w-[520px] bg-[#FAF8F4] text-[#0E0E0C] border border-[#E6E2DA] shadow-xl p-6 rounded-[2px] transition-all duration-200 ${
                  isServicesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="grid grid-cols-2 gap-6">
                  {/* Column 1: SAP Practice */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B6B66] block mb-3 pb-1 border-b border-[#E6E2DA]">
                      SAP Practice
                    </span>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          to="/services/sap-implementation"
                          className="group block text-xs hover:text-[#FF5B1F] transition-colors"
                        >
                          <div className="font-semibold text-sm text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors">
                            SAP Implementation
                          </div>
                          <div className="text-[#6B6B66] text-[11px] mt-0.5">
                            RISE with SAP & enterprise rollouts
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/s4hana-conversion"
                          className="group block text-xs hover:text-[#FF5B1F] transition-colors"
                        >
                          <div className="font-semibold text-sm text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors">
                            S/4HANA Conversion
                          </div>
                          <div className="text-[#6B6B66] text-[11px] mt-0.5">
                            Cloud migration to AWS, Azure, GCP
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services/application-management"
                          className="group block text-xs hover:text-[#FF5B1F] transition-colors"
                        >
                          <div className="font-semibold text-sm text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors">
                            Application Management
                          </div>
                          <div className="text-[#6B6B66] text-[11px] mt-0.5">
                            SLA-backed continuous L2-L4 AMS
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Staffing Practice & Training */}
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B6B66] block mb-3 pb-1 border-b border-[#E6E2DA]">
                      Staffing & Talent
                    </span>
                    <ul className="space-y-2.5">
                      <li>
                        <Link
                          to="/staffing/permanent"
                          className="group block text-xs hover:text-[#FF5B1F] transition-colors"
                        >
                          <div className="font-semibold text-sm text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors">
                            Permanent Staffing
                          </div>
                          <div className="text-[#6B6B66] text-[11px] mt-0.5">
                            Vetted full-time enterprise hires
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/staffing/contract"
                          className="group block text-xs hover:text-[#FF5B1F] transition-colors"
                        >
                          <div className="font-semibold text-sm text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors">
                            Contract Staffing
                          </div>
                          <div className="text-[#6B6B66] text-[11px] mt-0.5">
                            On-demand talent for project peaks
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/staffing/hire-train-deploy"
                          className="group block text-xs hover:text-[#FF5B1F] transition-colors"
                        >
                          <div className="font-semibold text-sm text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors">
                            Hire Train Deploy
                          </div>
                          <div className="text-[#6B6B66] text-[11px] mt-0.5">
                            Tailored engineering cohorts
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/corporate-training"
                          className="group block text-xs hover:text-[#FF5B1F] transition-colors pt-1 border-t border-[#E6E2DA]/60"
                        >
                          <div className="font-medium text-xs text-[#0E0E0C] group-hover:text-[#FF5B1F] transition-colors flex items-center justify-between">
                            <span>Corporate Training</span>
                            <span className="text-[10px] text-[#FF5B1F]">→</span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`transition-colors link-editorial ${
                location.pathname === '/about' ? 'text-[#FF5B1F]' : ''
              }`}
            >
              About
            </Link>

            <Link
              to="/why-choose-us"
              className={`transition-colors link-editorial ${
                location.pathname === '/why-choose-us' ? 'text-[#FF5B1F]' : ''
              }`}
            >
              Why AST
            </Link>

            <Link
              to="/careers"
              className={`transition-colors link-editorial ${
                location.pathname === '/careers' ? 'text-[#FF5B1F]' : ''
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* Right Action / CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/contact"
              className="btn-editorial-solid text-xs py-2.5 px-5"
            >
              <span>{NAVIGATION.cta.label}</span>
              <span className="ml-1.5 text-xs">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-current focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-200 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF8F4] text-[#0E0E0C] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-8 pb-10 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#6B6B66] font-semibold border-b border-[#E6E2DA] pb-2">
            Navigation
          </span>

          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif"
          >
            About Us
          </Link>
          <Link
            to="/why-choose-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif"
          >
            Why Choose AST
          </Link>
          <Link
            to="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif"
          >
            Careers
          </Link>

          <span className="text-[11px] uppercase tracking-[0.16em] text-[#6B6B66] font-semibold border-b border-[#E6E2DA] pt-4 pb-2">
            Services & Staffing
          </span>

          <div className="grid grid-cols-1 gap-3 text-sm">
            <Link
              to="/services/sap-implementation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              SAP Implementation
            </Link>
            <Link
              to="/services/s4hana-conversion"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              S/4HANA Conversion
            </Link>
            <Link
              to="/services/application-management"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              Application Management (AMS)
            </Link>
            <Link
              to="/staffing/permanent"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              Permanent Staffing
            </Link>
            <Link
              to="/staffing/contract"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              Contract Staffing
            </Link>
            <Link
              to="/staffing/executive"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              Executive Search
            </Link>
            <Link
              to="/staffing/hire-train-deploy"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              Hire Train Deploy
            </Link>
            <Link
              to="/corporate-training"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-1 hover:text-[#FF5B1F]"
            >
              Corporate Training
            </Link>
          </div>

          <div className="pt-8 mt-auto border-t border-[#E6E2DA]">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-editorial-solid w-full text-center py-3"
            >
              Talk to us →
            </Link>
            <div className="mt-4 text-xs text-[#6B6B66] space-y-1">
              <div>{COMPANY.email}</div>
              <div>{COMPANY.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
