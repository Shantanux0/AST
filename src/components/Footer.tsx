import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../content/content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [hydTime, setHydTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setHydTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#FAF8F4] text-[#0E0E0C] border-t border-[#E6E2DA] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Band: Brand Statement & Local Time */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[#E6E2DA] gap-8">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <Logo variant="black" className="w-9 h-9 sm:w-10 sm:h-10" />
              <div className="flex flex-col border-l-2 border-[#FF5B1F] pl-3">
                <span className="text-base sm:text-lg tracking-[0.12em] uppercase font-extrabold leading-none text-[#0E0E0C]">
                  Aditya Swift
                </span>
                <span className="text-[11px] sm:text-xs tracking-[0.16em] uppercase font-bold text-[#FF5B1F] leading-tight mt-1">
                  Technologies Pvt Ltd
                </span>
              </div>
            </div>
            <p className="text-sm text-[#6B6B66] max-w-sm">
              {COMPANY.legalName}
              <br />
              {COMPANY.tagline}
            </p>
          </div>

          <div className="flex flex-col md:items-end text-xs font-mono text-[#6B6B66] space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hyderabad Hub Active</span>
            </div>
            <div>{hydTime || 'Loading IST...'}</div>
            <div className="text-[11px] opacity-75">17.4483° N, 78.3915° E</div>
          </div>
        </div>

        {/* 4 Editorial Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16 border-b border-[#E6E2DA] text-sm">
          {/* Column 1: Company */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#6B6B66] mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="link-editorial hover:text-[#FF5B1F]">
                  About AST
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="link-editorial hover:text-[#FF5B1F]">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="link-editorial hover:text-[#FF5B1F]">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-editorial hover:text-[#FF5B1F]">
                  Contact & Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: SAP Practice */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#6B6B66] mb-5">
              SAP Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/sap-implementation" className="link-editorial hover:text-[#FF5B1F]">
                  SAP Implementation
                </Link>
              </li>
              <li>
                <Link to="/services/s4hana-conversion" className="link-editorial hover:text-[#FF5B1F]">
                  S/4HANA Conversion
                </Link>
              </li>
              <li>
                <Link to="/services/application-management" className="link-editorial hover:text-[#FF5B1F]">
                  Application Management
                </Link>
              </li>
              <li>
                <Link to="/corporate-training" className="link-editorial hover:text-[#FF5B1F]">
                  Corporate Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Staffing */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#6B6B66] mb-5">
              Staffing
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/staffing/permanent" className="link-editorial hover:text-[#FF5B1F]">
                  Permanent Staffing
                </Link>
              </li>
              <li>
                <Link to="/staffing/contract" className="link-editorial hover:text-[#FF5B1F]">
                  Contract Staffing
                </Link>
              </li>
              <li>
                <Link to="/staffing/executive" className="link-editorial hover:text-[#FF5B1F]">
                  Executive Search
                </Link>
              </li>
              <li>
                <Link to="/staffing/hire-train-deploy" className="link-editorial hover:text-[#FF5B1F]">
                  Hire Train Deploy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[#6B6B66] mb-5">
              Headquarters
            </h4>
            <address className="not-italic text-xs text-[#6B6B66] leading-relaxed mb-4">
              CoKarma, Mahaveer Radiance, 1st floor<br />
              Opp. Metro Pillar 1708, Madhapur<br />
              Hyderabad, Telangana 500081, India
            </address>
            <div className="space-y-1.5 text-xs">
              <div>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="link-editorial hover:text-[#FF5B1F]"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="link-editorial hover:text-[#FF5B1F]"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={COMPANY.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0E0E0C] hover:text-[#FF5B1F] transition-colors"
                >
                  <span>Connect on WhatsApp</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#6B6B66]">
          <div className="flex flex-wrap items-center gap-6">
            <span>© {COMPANY.year} {COMPANY.legalName}</span>
            <Link to="/privacy" className="hover:text-[#0E0E0C] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#0E0E0C] transition-colors">
              Terms of Engagement
            </Link>
          </div>

          <div className="flex items-center gap-6 font-medium text-xs">
            <a
              href={COMPANY.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5B1F] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={COMPANY.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5B1F] transition-colors"
            >
              X / Twitter
            </a>
            <a
              href={COMPANY.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5B1F] transition-colors"
            >
              Instagram
            </a>
            <a
              href={COMPANY.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF5B1F] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
