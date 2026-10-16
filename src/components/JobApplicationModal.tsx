import React, { useState, useEffect } from 'react';
import { COMPANY } from '../content/content';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  isOpen,
  onClose,
  jobTitle,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceYears: '',
    currentLocation: '',
    linkedinUrl: '',
    coverNote: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsSubmitted(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-in Drawer */}
      <div className="relative w-full max-w-lg bg-[#FAF8F4] text-[#0E0E0C] h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto border-l border-[#E6E2DA]">
        {/* Drawer Header */}
        <div className="p-8 border-b border-[#E6E2DA] flex items-start justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5B1F]">
              Application
            </span>
            <h3 className="font-serif text-2xl mt-1 text-[#0E0E0C]">
              {jobTitle || 'General Application'}
            </h3>
            <p className="text-xs text-[#6B6B66] mt-1">
              Aditya Swift Technologies • Madhapur, Hyderabad
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#6B6B66] hover:text-[#0E0E0C] transition-colors"
            aria-label="Close form"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-8 flex-1">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#FF5B1F]/10 text-[#FF5B1F] flex items-center justify-center text-xl font-bold">
                ✓
              </div>
              <h4 className="font-serif text-2xl">Application Received</h4>
              <p className="text-sm text-[#6B6B66] max-w-xs mx-auto">
                Thank you for applying for <span className="text-[#0E0E0C] font-medium">{jobTitle}</span>. Our technical recruitment team will review your profile and reach out within 48 hours.
              </p>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-editorial-solid text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 6 years"
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full bg-white border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                    Current Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyderabad"
                    value={formData.currentLocation}
                    onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                    className="w-full bg-white border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                  LinkedIn Profile / Portfolio Link
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                  className="w-full bg-white border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                  Resume / CV (PDF or DOCX) *
                </label>
                <div className="relative border border-dashed border-[#BDB8AC] bg-white p-4 rounded-[2px] text-center hover:border-[#0E0E0C] transition-colors cursor-pointer">
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-xs text-[#6B6B66]">
                    {fileName ? (
                      <span className="font-medium text-[#0E0E0C]">Attached: {fileName}</span>
                    ) : (
                      <span>Click or drag your CV here (Max 10MB)</span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-1.5">
                  Brief Note on Experience
                </label>
                <textarea
                  rows={3}
                  placeholder="Key SAP modules, recent rollout highlights..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full bg-white border border-[#E6E2DA] px-3.5 py-2.5 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-editorial-solid w-full py-3"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application →'}
                </button>
              </div>

              <p className="text-[11px] text-[#6B6B66] text-center pt-2">
                Direct questions? Email our recruitment lead at{' '}
                <a href={`mailto:${COMPANY.email}`} className="underline text-[#0E0E0C]">
                  {COMPANY.email}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
