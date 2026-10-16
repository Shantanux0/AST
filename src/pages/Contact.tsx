import React, { useState } from 'react';
import { CONTACT_PAGE, COMPANY } from '../content/content';
import { IMAGES } from '../content/images';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: CONTACT_PAGE.topics[0],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-[#FAF8F4] text-[#0E0E0C]">
      {/* 1. Header */}
      <section className="pt-36 sm:pt-44 pb-16 border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="text-tag text-[#6B6B66] block mb-4">
            {CONTACT_PAGE.tag}
          </span>
          <h1 className="font-serif text-display-headline text-[#0E0E0C] max-w-4xl mb-6">
            {CONTACT_PAGE.title}
          </h1>
          <p className="text-xl sm:text-2xl text-[#6B6B66] max-w-2xl font-light leading-relaxed">
            {CONTACT_PAGE.intro}
          </p>
        </div>
      </section>

      {/* 2. Clean, Simple Two-Column Layout */}
      <section className="py-20 sm:py-28 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left 7 cols: Simple Clean Form */}
            <div className="lg:col-span-7">
              <span className="text-tag text-[#6B6B66] block mb-3">
                Inquiry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E0E0C] mb-8">
                Send a message
              </h2>

              {isSubmitted ? (
                <div className="p-10 border border-[#E6E2DA] bg-white rounded-[2px] text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#FF5B1F]/10 text-[#FF5B1F] flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl text-[#0E0E0C]">Message received</h3>
                  <p className="text-sm text-[#6B6B66] max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-[#0E0E0C]">{formData.name}</span>. We will review your note and get back to <span className="font-semibold text-[#0E0E0C]">{formData.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        topic: CONTACT_PAGE.topics[0],
                        message: '',
                      });
                    }}
                    className="btn-editorial-ghost text-xs mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#E6E2DA] px-4 py-3 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-[#E6E2DA] px-4 py-3 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white border border-[#E6E2DA] px-4 py-3 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-2">
                        Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full bg-white border border-[#E6E2DA] px-4 py-3 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                      >
                        {CONTACT_PAGE.topics.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#0E0E0C] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project or staffing requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-[#E6E2DA] px-4 py-3 text-sm rounded-[2px] focus:outline-none focus:border-[#0E0E0C] transition-colors"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-editorial-solid text-xs py-3.5 px-8"
                    >
                      {isSubmitting ? 'Sending...' : 'Send message →'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 cols: Image + Office Details + WhatsApp Link */}
            <div className="lg:col-span-5 space-y-8">
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden border border-[#E6E2DA]">
                <img
                  src={IMAGES.contact.hero.url}
                  alt={IMAGES.contact.hero.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-[2px]">
                  {IMAGES.contact.hero.caption}
                </div>
              </div>

              {/* Details Box */}
              <div className="p-8 border border-[#E6E2DA] bg-white rounded-[2px] space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#6B6B66] block mb-1">
                    Corporate Office
                  </span>
                  <p className="text-xs sm:text-sm text-[#0E0E0C] leading-relaxed">
                    {COMPANY.legalName}<br />
                    {COMPANY.fullAddress}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E2DA] space-y-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#6B6B66] block text-[11px] uppercase tracking-wider mb-0.5">Email</span>
                    <a href={`mailto:${COMPANY.email}`} className="link-editorial text-[#0E0E0C] hover:text-[#FF5B1F]">
                      {COMPANY.email}
                    </a>
                  </div>
                  <div className="pt-1">
                    <span className="text-[#6B6B66] block text-[11px] uppercase tracking-wider mb-0.5">Phone</span>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="link-editorial text-[#0E0E0C] hover:text-[#FF5B1F]">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Link */}
                <div className="pt-4 border-t border-[#E6E2DA]">
                  <a
                    href={COMPANY.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/10 text-[#0E0E0C] border border-[#25D366]/30 rounded-[2px] text-xs font-semibold hover:bg-[#25D366] hover:text-white transition-all w-full justify-center"
                  >
                    <span>Connect on WhatsApp</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
