import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, Sparkles, Send, Compass } from 'lucide-react';
import { ProjectInquiryData } from '../types';
import { INITIAL_LEADS } from '../data/websiteData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [formData, setFormData] = useState<ProjectInquiryData>({
    fullName: '',
    email: '',
    companyName: '',
    selectedServices: preselectedService ? [preselectedService] : ['UI/UX Design'],
    budgetRange: '$5k - $10k',
    projectTimeline: 'Within 1-2 months',
    description: '',
    preferredMeetingDate: '',
    preferredTimeSlot: '10:00 AM GMT'
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const availableServices = [
    'UI/UX Design',
    'Website Design',
    'Branding',
    'Responsive Design'
  ];

  const budgetOptions = [
    'Under $5k',
    '$5k - $10k',
    '$10k - $20k',
    '$20k+'
  ];

  const timelineOptions = [
    'Immediately (< 2 weeks)',
    'Within 1-2 months',
    'Next Quarter',
    'Flexible / Exploring'
  ];

  const timeSlots = [
    '09:00 AM GMT',
    '11:00 AM GMT',
    '02:00 PM GMT',
    '04:00 PM GMT',
    '06:00 PM GMT'
  ];

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
      // ignore
    }

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="consultation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="consultation-modal-container"
        className="relative w-full max-w-2xl max-h-[92vh] bg-[#FAF8F5] text-[#1A281C] rounded-2xl shadow-2xl overflow-y-auto border border-[#D4A346]/40 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#1A281C] text-[#FAF8F5] border-b border-[#D4A346]/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D4A346] flex items-center justify-center text-[#1A281C]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-['Syne'] font-bold text-base sm:text-lg">
                Start Your Project
              </h3>
              <p className="text-[11px] text-[#D4A346] tracking-wider uppercase font-semibold">
                CreativeSpace Designs Studio
              </p>
            </div>
          </div>

          <button
            id="close-consultation-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-['Syne'] text-2xl font-bold text-[#1A281C]">
                Inquiry Received
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you for considering CreativeSpace Designs. Our Creative Director will review your project requirements and get back to you within 24 hours with custom scope ideas and a meeting calendar link.
              </p>
              <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E7E1D3] text-left text-xs max-w-md mx-auto space-y-1.5">
                <p><strong>Client:</strong> {formData.fullName} ({formData.email})</p>
                <p><strong>Services:</strong> {formData.selectedServices.join(', ') || 'General Inquiries'}</p>
                <p><strong>Target Budget:</strong> {formData.budgetRange}</p>
                {formData.preferredMeetingDate && (
                  <p><strong>Requested Slot:</strong> {formData.preferredMeetingDate} at {formData.preferredTimeSlot}</p>
                )}
              </div>
              <button
                id="done-consultation-btn"
                onClick={handleResetAndClose}
                className="mt-6 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1A281C] text-white hover:bg-[#273D2B] transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h4 className="font-['Syne'] text-xl font-bold text-[#1A281C]">
                  Let’s create something exceptional together.
                </h4>
                <p className="text-xs text-neutral-600">
                  Tell us about your objectives, timeline, and vision. We will follow up with a bespoke proposal.
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                  1. What services are you looking for? (Select one or more)
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

              {/* Budget Range */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                  2. Anticipated Project Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((opt) => {
                    const isSelected = formData.budgetRange === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, budgetRange: opt })}
                        className={`py-2 px-3 rounded-lg text-xs font-medium text-center transition-all border ${
                          isSelected
                            ? 'bg-[#D4A346] text-[#1A281C] font-bold border-[#D4A346]'
                            : 'bg-white text-neutral-700 border-[#E7E1D3] hover:border-[#D4A346]'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                  3. Target Timeline
                </label>
                <select
                  value={formData.projectTimeline}
                  onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none focus:border-[#D4A346]"
                >
                  {timelineOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Personal & Company Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-700 block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-neutral-700 block">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
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
                  placeholder="e.g. Lumina Global / Stealth Startup"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
                />
              </div>

              {/* Project Brief */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-700 block">
                  Brief Project Overview
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your current challenges, key goals, or references..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
                />
              </div>

              {/* Preferred Discovery Call Slot */}
              <div className="p-4 rounded-xl bg-[#F3EFE6] border border-[#E7E1D3] space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D4A346]" />
                  <span className="text-xs font-bold text-[#1A281C]">
                    Optional: Pick a 20-min Discovery Call Window
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-neutral-600 block mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={formData.preferredMeetingDate}
                      onChange={(e) => setFormData({ ...formData, preferredMeetingDate: e.target.value })}
                      className="w-full px-3 py-2 rounded bg-white border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] text-neutral-600 block mb-1">Preferred Slot</label>
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

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-md active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
