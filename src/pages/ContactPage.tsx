import React, { useState } from 'react';
import { Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { ProjectInquiryData } from '../types';
import { INITIAL_LEADS } from '../data/websiteData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ProjectInquiryData>({
    fullName: '',
    email: '',
    companyName: '',
    selectedServices: ['UI/UX Design'],
    budgetRange: '$5k - $10k',
    projectTimeline: 'Within 1-2 months',
    description: '',
    preferredMeetingDate: '',
    preferredTimeSlot: '11:00 AM IST'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const availableServices = [
    'UI/UX Design',
    'Website Design',
    'Branding',
    'Responsive Design'
  ];

  const budgetOptions = ['Under $5k', '$5k - $10k', '$10k - $20k', '$20k+'];
  const timeSlots = ['10:00 AM IST', '12:00 PM IST', '03:00 PM IST', '05:00 PM IST', '07:00 PM IST'];

  const toggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const newLead: ProjectInquiryData = {
      ...formData,
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'New'
    };

    try {
      const saved = localStorage.getItem('cs_leads');
      const leads = saved ? JSON.parse(saved) : INITIAL_LEADS;
      localStorage.setItem('cs_leads', JSON.stringify([newLead, ...leads]));
    } catch {
      // ignore storage error if any
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div id="contact-page-container" className="pt-32 pb-24 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
          Get in Touch
        </span>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A281C]">
          Let’s Build Something Remarkable
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Reach out directly to CreativeSpace Designs in Chennai, Tamil Nadu, India. Whether by WhatsApp, email, or brief submission, we are ready to elevate your brand.
        </p>
      </section>

      {/* THREE PRIMARY CONTACT CARDS: WhatsApp, Email, Location */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WhatsApp */}
          <div
            id="contact-card-whatsapp"
            className="p-8 rounded-3xl bg-[#1A281C] text-[#FAF8F5] border border-[#D4A346]/40 shadow-xl flex flex-col justify-between space-y-6 hover:border-[#D4A346] transition-all group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#D4A346] text-[#1A281C] flex items-center justify-center shadow-md">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#D4A346]">
                  Instant Direct Chat
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold text-white mt-1">
                  WhatsApp
                </h3>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Fastest response for preliminary project inquiries, scopes, and quick consultations.
                </p>
              </div>
              <div className="pt-2">
                <span className="font-['Syne'] font-bold text-lg text-white block">
                  +91 7010160844
                </span>
              </div>
            </div>

            <a
              id="whatsapp-direct-btn"
              href="https://wa.me/917010160844"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#D4A346] text-[#1A281C] font-bold text-xs uppercase tracking-wider hover:bg-[#E2B254] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Email */}
          <div
            id="contact-card-email"
            className="p-8 rounded-3xl bg-white text-[#1A281C] border border-[#E7E1D3] shadow-sm hover:shadow-xl hover:border-[#D4A346]/50 transition-all flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1A281C] text-[#D4A346] flex items-center justify-center shadow-md">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#D4A346]">
                  Official Correspondence
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold text-[#1A281C] mt-1">
                  Email Studio
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Send project RFPs, documents, brand assets, or formal collaboration proposals.
                </p>
              </div>
              <div className="pt-2">
                <span className="font-medium text-xs sm:text-sm text-neutral-900 break-all block">
                  creativespacedesign.official@gmail.com
                </span>
              </div>
            </div>

            <a
              id="email-direct-btn"
              href="mailto:creativespacedesign.official@gmail.com"
              className="w-full py-3.5 px-6 rounded-full bg-[#1A281C] text-[#FAF8F5] font-bold text-xs uppercase tracking-wider hover:bg-[#273D2B] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Open Email (Mailto)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3: Location */}
          <div
            id="contact-card-location"
            className="p-8 rounded-3xl bg-[#F3EFE6] text-[#1A281C] border border-[#E7E1D3] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1A281C] text-[#D4A346] flex items-center justify-center shadow-md">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#D4A346]">
                  Studio Location
                </span>
                <h3 className="font-['Syne'] text-2xl font-bold text-[#1A281C] mt-1">
                  CreativeSpace Designs
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Digital design studio serving ambitious businesses locally across India and globally across time zones.
                </p>
              </div>
              <div className="pt-2">
                <span className="font-['Syne'] font-bold text-lg text-[#1A281C] block">
                  Chennai, Tamil Nadu, India
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E7E1D3] text-xs text-neutral-700 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4A346] shrink-0" />
              <span>Response Guarantee: Within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Studio Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E7E1D3] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-['Syne'] text-2xl font-bold text-[#1A281C]">
                  Project Brief Received!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.fullName}. CreativeSpace Designs has received your project outline. We will review your specifications and follow up within 24 business hours.
                </p>
                <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E7E1D3] text-left text-xs max-w-md mx-auto space-y-1">
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Company:</strong> {formData.companyName || 'Individual'}</p>
                  <p><strong>Disciplines:</strong> {formData.selectedServices.join(', ')}</p>
                  <p><strong>Target Budget:</strong> {formData.budgetRange}</p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1A281C] text-white hover:bg-[#273D2B] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-['Syne'] text-2xl font-bold text-[#1A281C]">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Fill in your project specifications to receive a tailored timeline and quotation.
                  </p>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    1. Needed Disciplines
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {availableServices.map((srv) => {
                      const isSelected = formData.selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#1A281C] text-white border-[#1A281C] shadow-sm'
                              : 'bg-white text-neutral-700 border-[#E7E1D3] hover:border-[#D4A346]'
                          }`}
                        >
                          <span>{srv}</span>
                          {isSelected && <Sparkles className="w-3.5 h-3.5 text-[#D4A346]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    2. Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, budgetRange: opt })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium text-center transition-all border ${
                          formData.budgetRange === opt
                            ? 'bg-[#D4A346] text-[#1A281C] font-bold border-[#D4A346]'
                            : 'bg-white text-neutral-700 border-[#E7E1D3] hover:border-[#D4A346]'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal & Company Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-700 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Vikram Raman"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-neutral-700 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. vikram@enterprise.in"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-700 block">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Studio / Stealth Venture"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-700 block">
                    Project Brief & Objectives
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about the project goals, timeline, reference links, and target audience..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
                  />
                </div>

                {/* Preferred Discovery Call Slot */}
                <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E7E1D3] space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#D4A346]" />
                    <span className="text-xs font-bold text-[#1A281C]">
                      Request 20-min Discovery Video Call (Optional)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-neutral-600 block mb-1">Target Date</label>
                      <input
                        type="date"
                        value={formData.preferredMeetingDate}
                        onChange={(e) => setFormData({ ...formData, preferredMeetingDate: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-white border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-600 block mb-1">Preferred Time Window</label>
                      <select
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full px-3 py-2 rounded bg-white border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#1A281C] text-[#FAF8F5] rounded-3xl p-8 sm:p-10 border border-[#D4A346]/30 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#D4A346]">
                Official Business Info
              </span>
              <h3 className="font-['Syne'] text-2xl font-bold text-white">
                CreativeSpace Designs
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We bring together thoughtful digital product design, bespoke website architecture, and timeless branding from Chennai, Tamil Nadu, India.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-white/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4A346] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase tracking-wider">Location</span>
                    <span className="font-semibold text-white">
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-[#D4A346] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase tracking-wider">WhatsApp</span>
                    <a
                      href="https://wa.me/917010160844"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#D4A346] hover:underline flex items-center gap-1"
                    >
                      <span>+91 7010160844</span>
                      <ArrowUpRight className="w-3.5 h-3.5 inline" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4A346] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase tracking-wider">Email</span>
                    <a
                      href="mailto:creativespacedesign.official@gmail.com"
                      className="font-semibold text-[#D4A346] hover:underline break-all"
                    >
                      creativespacedesign.official@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4A346] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 block text-[10px] uppercase tracking-wider">Response Time</span>
                    <span className="font-semibold text-white">&lt; 24 Business Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Promise Card */}
            <div className="p-6 rounded-2xl bg-[#F3EFE6] border border-[#E7E1D3] space-y-3">
              <h4 className="font-['Syne'] font-bold text-sm text-[#1A281C] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A346]" />
                What Happens Next?
              </h4>
              <ol className="space-y-2 text-xs text-neutral-700 list-decimal list-inside leading-relaxed">
                <li>We review your inquiry and project objectives within 24 hours.</li>
                <li>We propose a 20-minute video or audio call to discuss exact milestones.</li>
                <li>We deliver an itemized scope of work with transparent milestone pricing.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
