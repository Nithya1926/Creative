import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Layers,
  DollarSign,
  MessageSquare,
  Settings,
  ArrowLeft,
  Search,
  CheckCircle2,
  Clock,
  Mail,
  MessageCircle,
  MapPin,
  Save,
  Plus,
  Filter,
  Eye,
  Trash2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import {
  PageId,
  ServiceItem,
  PortfolioProject,
  PricingPlan,
  Testimonial,
  ProjectInquiryData,
  BusinessSettings
} from '../types';
import {
  SERVICES_DATA,
  PORTFOLIO_DATA,
  PRICING_PLANS,
  TESTIMONIALS_DATA,
  INITIAL_BUSINESS_SETTINGS,
  INITIAL_LEADS
} from '../data/websiteData';

interface AdminDashboardProps {
  onReturnToSite: () => void;
}

type AdminTab =
  | 'dashboard'
  | 'leads'
  | 'portfolio'
  | 'services'
  | 'pricing'
  | 'testimonials'
  | 'settings';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onReturnToSite }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  // Leads State
  const [leads, setLeads] = useState<ProjectInquiryData[]>(() => {
    try {
      const saved = localStorage.getItem('cs_leads');
      return saved ? JSON.parse(saved) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  // Settings State
  const [settings, setSettings] = useState<BusinessSettings>(() => {
    try {
      const saved = localStorage.getItem('cs_settings');
      return saved ? JSON.parse(saved) : INITIAL_BUSINESS_SETTINGS;
    } catch {
      return INITIAL_BUSINESS_SETTINGS;
    }
  });

  const [savedSettingsNotice, setSavedSettingsNotice] = useState(false);
  const [leadsFilter, setLeadsFilter] = useState<'All' | 'New' | 'In Review' | 'Contacted' | 'Closed'>('All');
  const [selectedLead, setSelectedLead] = useState<ProjectInquiryData | null>(null);

  // Portfolio items in admin
  const [portfolioList, setPortfolioList] = useState<PortfolioProject[]>(PORTFOLIO_DATA);
  const [servicesList, setServicesList] = useState<ServiceItem[]>(SERVICES_DATA);
  const [pricingList, setPricingList] = useState<PricingPlan[]>(PRICING_PLANS);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(TESTIMONIALS_DATA);

  useEffect(() => {
    try {
      localStorage.setItem('cs_leads', JSON.stringify(leads));
    } catch {
      // ignore
    }
  }, [leads]);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('cs_settings', JSON.stringify(settings));
    } catch {
      // ignore
    }
    setSavedSettingsNotice(true);
    setTimeout(() => setSavedSettingsNotice(false), 3500);
  };

  const handleUpdateLeadStatus = (id: string, newStatus: 'New' | 'In Review' | 'Contacted' | 'Closed') => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
    );
    if (selectedLead && selectedLead.id === id) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const handleDeleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
    if (selectedLead?.id === id) {
      setSelectedLead(null);
    }
  };

  const filteredLeads = leads.filter((l) => {
    if (leadsFilter === 'All') return true;
    return l.status === leadsFilter;
  });

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads', icon: Users, badge: leads.filter((l) => l.status === 'New').length },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'pricing', label: 'Pricing', icon: DollarSign },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div id="admin-portal-root" className="min-h-screen bg-[#F7F5F0] text-[#1A281C] flex flex-col pt-20">
      {/* Admin Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#1A281C] text-[#FAF8F5] border-b border-[#D4A346]/20 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <button
            id="admin-return-site-btn"
            onClick={onReturnToSite}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#FAF8F5] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D4A346]" />
            <span>Return to Website</span>
          </button>
          <div className="h-5 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-['Syne'] font-bold text-base sm:text-lg text-white">
              CreativeSpace
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4A346] text-[#1A281C] font-extrabold uppercase tracking-wider">
              Studio Admin
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/70">
            <MapPin className="w-3.5 h-3.5 text-[#D4A346]" />
            <span>Chennai, Tamil Nadu, India</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80 font-medium">Live Studio Portal</span>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 gap-6">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0 bg-white rounded-2xl border border-[#E7E1D3] p-4 shadow-sm h-fit">
          <div className="mb-4 px-3 py-2 border-b border-[#E7E1D3]">
            <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
              Management Portal
            </p>
            <p className="font-['Syne'] font-bold text-sm text-[#1A281C]">
              CreativeSpace Designs
            </p>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`admin-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id as AdminTab)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1A281C] text-white shadow-sm'
                      : 'text-neutral-600 hover:bg-[#F3EFE6] hover:text-[#1A281C]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4A346]' : 'text-neutral-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#D4A346] text-[#1A281C]">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#E7E1D3] px-3 space-y-2">
            <p className="text-[10px] text-neutral-400 font-medium">
              Location: Chennai, IN
            </p>
            <p className="text-[10px] text-neutral-400 font-medium">
              WhatsApp: +91 7010160844
            </p>
          </div>
        </aside>

        {/* Content View */}
        <main className="flex-1 space-y-6">
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Overview Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#E7E1D3] shadow-sm space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Total Leads</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-['Syne'] text-3xl font-extrabold text-[#1A281C]">{leads.length}</span>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +100%
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Inquiries via form & modal</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E7E1D3] shadow-sm space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Active Disciplines</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-['Syne'] text-3xl font-extrabold text-[#1A281C]">{servicesList.length}</span>
                    <span className="text-xs font-semibold text-[#D4A346]">Core 4</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">UI/UX, Web, Branding, Responsive</p>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E7E1D3] shadow-sm space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">Case Studies</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-['Syne'] text-3xl font-extrabold text-[#1A281C]">{portfolioList.length}</span>
                    <span className="text-xs font-semibold text-neutral-700">Published</span>
                  </div>
                  <p className="text-[11px] text-neutral-500">Interactive client showcases</p>
                </div>

                <div className="bg-[#1A281C] text-white p-5 rounded-2xl border border-[#D4A346]/30 shadow-sm space-y-2">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#D4A346]">Studio Base</span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-['Syne'] text-xl font-bold text-white">Chennai</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/80">TN, India</span>
                  </div>
                  <p className="text-[11px] text-white/70">+91 7010160844</p>
                </div>
              </div>

              {/* Recent Leads Preview */}
              <div className="bg-white rounded-2xl border border-[#E7E1D3] p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-['Syne'] text-lg font-bold text-[#1A281C]">Recent Project Inquiries</h3>
                    <p className="text-xs text-neutral-500">Incoming prospective client requests</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('leads')}
                    className="text-xs font-bold text-[#D4A346] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View All Leads ({leads.length})</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="divide-y divide-[#E7E1D3]">
                  {leads.slice(0, 3).map((lead) => (
                    <div key={lead.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#1A281C]">{lead.fullName}</span>
                          <span className="text-xs text-neutral-500">• {lead.companyName || 'Private Client'}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            lead.status === 'New' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {lead.status}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1 line-clamp-1">{lead.description}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#1A281C] bg-[#F3EFE6] px-2.5 py-1 rounded-md">
                          {lead.budgetRange}
                        </span>
                        <a
                          href={`mailto:${lead.email}`}
                          className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                          title="Email Lead"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Studio Status Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F3EFE6] p-6 rounded-2xl border border-[#E7E1D3] space-y-3">
                  <h4 className="font-['Syne'] font-bold text-sm text-[#1A281C] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4A346]" />
                    Studio Identity Overview
                  </h4>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    CreativeSpace Designs operates as an independent design atelier headquartered in Chennai, Tamil Nadu, India, delivering world-class UI/UX architecture, website design, and brand identity systems.
                  </p>
                  <div className="text-xs space-y-1 pt-2 border-t border-[#E7E1D3] text-neutral-800">
                    <p><strong>Official Email:</strong> {settings.email}</p>
                    <p><strong>WhatsApp Support:</strong> {settings.whatsapp}</p>
                    <p><strong>Headquarters:</strong> {settings.location}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#E7E1D3] space-y-3">
                  <h4 className="font-['Syne'] font-bold text-sm text-[#1A281C] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4A346]" />
                    Operational Notice
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    All website contact cards and mailto triggers are synchronized with your Chennai, Tamil Nadu official credentials. No leadership management section is present, keeping your operational data focused on projects and client inquiries.
                  </p>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className="mt-2 text-xs font-bold text-[#D4A346] hover:underline"
                  >
                    Modify Studio Settings →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LEADS */}
          {activeTab === 'leads' && (
            <div className="bg-white rounded-2xl border border-[#E7E1D3] p-6 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-['Syne'] text-xl font-bold text-[#1A281C]">Client Inquiries & Leads</h2>
                  <p className="text-xs text-neutral-500">Track and respond to incoming project scopes</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {(['All', 'New', 'In Review', 'Contacted', 'Closed'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setLeadsFilter(status)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        leadsFilter === status
                          ? 'bg-[#1A281C] text-white shadow-xs'
                          : 'bg-[#F3EFE6] text-neutral-700 hover:bg-[#E7E1D3]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {filteredLeads.length === 0 ? (
                <div className="text-center py-16 space-y-2 border border-dashed border-[#E7E1D3] rounded-2xl">
                  <Users className="w-8 h-8 text-neutral-400 mx-auto" />
                  <p className="font-['Syne'] font-bold text-sm text-neutral-700">No leads in this status</p>
                  <p className="text-xs text-neutral-500">Inquiries submitted via the Contact page or Consultation modal will appear here.</p>
                </div>
              ) : (
                <div className="divide-y divide-[#E7E1D3]">
                  {filteredLeads.map((lead) => (
                    <div key={lead.id} className="py-4 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-['Syne'] font-bold text-base text-[#1A281C]">{lead.fullName}</span>
                            <span className="text-xs text-neutral-500">({lead.email})</span>
                          </div>
                          <p className="text-xs text-[#D4A346] font-semibold">
                            {lead.companyName || 'Independent Client'} • Budget: {lead.budgetRange} • Timeline: {lead.projectTimeline}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <select
                            value={lead.status || 'New'}
                            onChange={(e) =>
                              handleUpdateLeadStatus(
                                lead.id || '',
                                e.target.value as 'New' | 'In Review' | 'Contacted' | 'Closed'
                              )
                            }
                            className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E7E1D3] text-neutral-800 focus:outline-none"
                          >
                            <option value="New">New</option>
                            <option value="In Review">In Review</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed</option>
                          </select>

                          <button
                            onClick={() => handleDeleteLead(lead.id || '')}
                            className="p-1.5 text-neutral-400 hover:text-red-600 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-neutral-700 bg-[#F7F5F0] p-3 rounded-xl border border-[#E7E1D3] leading-relaxed">
                        {lead.description || 'No detailed description provided.'}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-500 pt-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Services Requested:</span>
                          <span className="text-[#1A281C] font-semibold">{lead.selectedServices.join(', ')}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <a
                            href={`mailto:${lead.email}?subject=CreativeSpace%20Designs%20-%20Project%20Discussion`}
                            className="text-[#1A281C] font-bold hover:text-[#D4A346] flex items-center gap-1"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Reply via Email</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="bg-white rounded-2xl border border-[#E7E1D3] p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-['Syne'] text-xl font-bold text-[#1A281C]">Portfolio Case Studies</h2>
                  <p className="text-xs text-neutral-500">Manage published digital works ({portfolioList.length} total)</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioList.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl border border-[#E7E1D3] flex items-start gap-4 bg-[#FAF8F5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-lg object-cover border border-[#E7E1D3] shrink-0"
                    />
                    <div className="space-y-1 flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#D4A346]">
                        {item.category} • {item.year}
                      </span>
                      <h4 className="font-['Syne'] font-bold text-sm text-[#1A281C] truncate">{item.title}</h4>
                      <p className="text-xs text-neutral-500 truncate">Client: {item.client}</p>
                      <p className="text-[11px] text-neutral-600 line-clamp-1">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SERVICES */}
          {activeTab === 'services' && (
            <div className="bg-white rounded-2xl border border-[#E7E1D3] p-6 shadow-sm space-y-6">
              <div>
                <h2 className="font-['Syne'] text-xl font-bold text-[#1A281C]">CreativeSpace Studio Disciplines</h2>
                <p className="text-xs text-neutral-500">The 4 core offerings presented to clients</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesList.map((srv) => (
                  <div key={srv.id} className="p-5 rounded-2xl border border-[#E7E1D3] bg-[#FAF8F5] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#D4A346]">{srv.category}</span>
                      <span className="text-xs font-bold text-[#1A281C]">{srv.startingPrice}</span>
                    </div>
                    <h4 className="font-['Syne'] font-bold text-base text-[#1A281C]">{srv.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">{srv.shortDesc}</p>
                    <div className="pt-2 border-t border-[#E7E1D3] text-[11px] text-neutral-500">
                      Typical Timeline: <strong className="text-neutral-800">{srv.timeline}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PRICING */}
          {activeTab === 'pricing' && (
            <div className="bg-white rounded-2xl border border-[#E7E1D3] p-6 shadow-sm space-y-6">
              <div>
                <h2 className="font-['Syne'] text-xl font-bold text-[#1A281C]">Pricing Architecture</h2>
                <p className="text-xs text-neutral-500">Active pricing tiers and turnaround SLA guarantees</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pricingList.map((plan) => (
                  <div key={plan.id} className="p-5 rounded-2xl border border-[#E7E1D3] bg-[#FAF8F5] space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-['Syne'] font-bold text-base text-[#1A281C]">{plan.name}</h4>
                        {plan.popular && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4A346] text-[#1A281C]">Popular</span>
                        )}
                      </div>
                      <p className="font-['Syne'] text-2xl font-extrabold text-[#1A281C]">${plan.projectPrice.toLocaleString()}</p>
                      <p className="text-xs text-neutral-600">{plan.subtitle}</p>
                    </div>

                    <div className="pt-3 border-t border-[#E7E1D3] text-xs text-neutral-500">
                      Turnaround: <span className="font-semibold text-neutral-800">{plan.turnaround}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="bg-white rounded-2xl border border-[#E7E1D3] p-6 shadow-sm space-y-6">
              <div>
                <h2 className="font-['Syne'] text-xl font-bold text-[#1A281C]">Client Testimonials</h2>
                <p className="text-xs text-neutral-500">Verified social proof and feedback ratings</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {testimonialsList.map((t) => (
                  <div key={t.id} className="p-5 rounded-2xl border border-[#E7E1D3] bg-[#FAF8F5] space-y-3">
                    <p className="text-xs italic text-neutral-700 leading-relaxed">"{t.quote}"</p>
                    <div className="pt-2 border-t border-[#E7E1D3] flex items-center justify-between text-xs">
                      <div>
                        <p className="font-bold text-[#1A281C]">{t.author}</p>
                        <p className="text-[11px] text-neutral-500">{t.role}, {t.company}</p>
                      </div>
                      <span className="text-[#D4A346] font-bold">★ {t.rating}.0</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-2xl border border-[#E7E1D3] p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <h2 className="font-['Syne'] text-xl font-bold text-[#1A281C]">Studio Business Information</h2>
                <p className="text-xs text-neutral-500">
                  Manage primary business credentials, contact numbers, and studio location in Chennai.
                </p>
              </div>

              {savedSettingsNotice && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Business information saved successfully! Website synchronization active.</span>
                </div>
              )}

              <form onSubmit={handleSaveSettings} className="space-y-5 max-w-2xl">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    Business Name
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.businessName}
                    onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none focus:border-[#D4A346]"
                  />
                  <p className="text-[11px] text-neutral-500">Official registered brand entity name.</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    Location
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.location}
                    onChange={(e) => setSettings({ ...settings, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none focus:border-[#D4A346]"
                  />
                  <p className="text-[11px] text-neutral-500">Exact required location: Chennai, Tamil Nadu, India</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    WhatsApp / Studio Phone
                  </label>
                  <input
                    type="text"
                    required
                    value={settings.whatsapp}
                    onChange={(e) => setSettings({ ...settings, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none focus:border-[#D4A346]"
                  />
                  <p className="text-[11px] text-neutral-500">Official contact: +91 7010160844</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    Official Email
                  </label>
                  <input
                    type="email"
                    required
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none focus:border-[#D4A346]"
                  />
                  <p className="text-[11px] text-neutral-500">Official email: creativespacedesign.official@gmail.com</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                    Studio Tagline
                  </label>
                  <input
                    type="text"
                    value={settings.tagline}
                    onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E7E1D3] text-xs text-neutral-800 focus:outline-none focus:border-[#D4A346]"
                  />
                </div>

                <div className="pt-4 border-t border-[#E7E1D3] flex items-center justify-between">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#1A281C] text-white hover:bg-[#273D2B] text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <Save className="w-3.5 h-3.5 text-[#D4A346]" />
                    <span>Save Settings</span>
                  </button>

                  <p className="text-[11px] text-neutral-500 italic">
                    All public cards reflect these credentials.
                  </p>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
