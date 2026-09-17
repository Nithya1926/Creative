import React from 'react';
import { PageId, PortfolioProject, ServiceItem } from '../types';
import { SERVICES_DATA, PORTFOLIO_DATA, TESTIMONIALS_DATA } from '../data/websiteData';
import { CostCalculator } from '../components/CostCalculator';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  LayoutGrid,
  Globe,
  Smartphone,
  CheckCircle2,
  Star,
  Quote,
  Layers,
  Compass,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenProject: (project: PortfolioProject) => void;
  onOpenConsultation: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenProject,
  onOpenConsultation
}) => {
  const featuredProjects = PORTFOLIO_DATA.slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-[#D4A346]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#D4A346]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4A346]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#D4A346]" />;
      default:
        return <Layers className="w-6 h-6 text-[#D4A346]" />;
    }
  };

  return (
    <div id="home-page-container" className="space-y-24 sm:space-y-32">
      {/* HERO SECTION */}
      <section id="hero-section" className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-[#1A281C] text-[#FAF8F5]">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D4A346]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#38553D]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 border border-[#D4A346]/40 text-[#FAF8F5]">
                <span className="w-2 h-2 rounded-full bg-[#D4A346] animate-pulse"></span>
                <span>CreativeSpace Designs Studio • Open for Q3/Q4 Partnerships</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Designing Ideas Into{' '}
                <span className="text-[#D4A346] italic font-['Cormorant_Garamond'] font-normal underline decoration-[#D4A346]/40 underline-offset-8">
                  Digital Experiences
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
                We design and engineer bespoke UI/UX interfaces, responsive web applications, and timeless brand identities that distinguish industry leaders and convert visitors into lifelong advocates.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-start-project-btn"
                  onClick={() => onOpenConsultation()}
                  className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-lg shadow-[#D4A346]/25 hover:shadow-xl hover:shadow-[#D4A346]/35 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-explore-work-btn"
                  onClick={() => onNavigate('portfolio')}
                  className="px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-all border border-white/15 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Selected Work</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4 text-xs text-white/70">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    className="w-8 h-8 rounded-full border-2 border-[#1A281C] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    className="w-8 h-8 rounded-full border-2 border-[#1A281C] object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    className="w-8 h-8 rounded-full border-2 border-[#1A281C] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#D4A346]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#D4A346]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/60">Rated 4.9/5 by 120+ global companies</span>
                </div>
              </div>
            </div>

            {/* Right Hero Composition (Visual Design Mockup) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Visual Card */}
                <div className="rounded-2xl overflow-hidden bg-[#121C13] border border-[#D4A346]/40 shadow-2xl p-3 transform transition-transform hover:-translate-y-1 duration-500">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-neutral-900">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
                      alt="Digital Experience Showcase"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#D4A346] text-[#1A281C] uppercase tracking-wider">
                          Featured Case Study
                        </span>
                        <h3 className="font-['Syne'] text-lg font-bold text-white mt-1">
                          Lumina Wealth Interaction Ecosystem
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Micro stats banner below preview */}
                  <div className="mt-3 p-3 rounded-lg bg-white/5 flex items-center justify-between text-xs">
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-wider">Metric Lift</p>
                      <p className="font-bold text-[#D4A346] text-sm">+164% Conversions</p>
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <div>
                      <p className="text-white/60 text-[10px] uppercase tracking-wider">Design System</p>
                      <p className="font-bold text-white text-sm">Figma & React</p>
                    </div>
                    <div className="h-6 w-px bg-white/10" />
                    <button
                      id="hero-preview-details-btn"
                      onClick={() => onOpenProject(PORTFOLIO_DATA[0])}
                      className="p-2 rounded-md bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-colors"
                      aria-label="View Project"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Floating Decorative Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#FAF8F5] text-[#1A281C] p-4 rounded-xl shadow-xl border border-[#D4A346]/50 flex items-center gap-3 animate-bounce duration-1000">
                  <div className="w-10 h-10 rounded-lg bg-[#1A281C] text-[#D4A346] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1A281C]">Awwwards & D&AD</p>
                    <p className="text-[10px] text-neutral-600">Featured Design Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section id="metrics-strip" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-2xl bg-[#F3EFE6] border border-[#E7E1D3]">
          <div className="space-y-1">
            <p className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-[#1A281C]">
              120<span className="text-[#D4A346]">+</span>
            </p>
            <p className="text-xs uppercase tracking-wider text-neutral-600 font-semibold">
              Completed Projects
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-[#1A281C]">
              99<span className="text-[#D4A346]">%</span>
            </p>
            <p className="text-xs uppercase tracking-wider text-neutral-600 font-semibold">
              Client Satisfaction
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-[#1A281C]">
              8<span className="text-[#D4A346]">+</span>
            </p>
            <p className="text-xs uppercase tracking-wider text-neutral-600 font-semibold">
              Years of Craft
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-[#1A281C]">
              15<span className="text-[#D4A346]">+</span>
            </p>
            <p className="text-xs uppercase tracking-wider text-neutral-600 font-semibold">
              Global Design Awards
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section id="services-overview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
            Our Capabilities
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281C]">
            Tailored Services Crafted for Impact
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            From initial discovery research to pixel-perfect visual design and responsive code implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="bg-white rounded-2xl p-8 border border-[#E7E1D3] shadow-sm hover:shadow-xl hover:border-[#D4A346]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#1A281C] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-xs font-bold text-[#D4A346] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E7E1D3]">
                    {srv.highlightStat}
                  </span>
                </div>

                <h3 className="font-['Syne'] text-2xl font-bold text-[#1A281C]">
                  {srv.title}
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {srv.shortDesc}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs uppercase tracking-wider font-bold text-neutral-400">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5">
                    {srv.deliverables.slice(0, 3).map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A346]" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E1D3] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Starting At</span>
                  <span className="font-['Syne'] font-bold text-base text-[#1A281C]">{srv.startingPrice}</span>
                </div>

                <button
                  id={`inquire-service-${srv.id}`}
                  onClick={() => onOpenConsultation(srv.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1A281C] text-[#FAF8F5] hover:bg-[#D4A346] hover:text-[#1A281C] transition-colors cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK / PORTFOLIO SHOWCASE */}
      <section id="featured-work-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#D4A346] text-[#1A281C]">
              Case Studies
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281C]">
              Recent Featured Projects
            </h2>
            <p className="text-sm text-neutral-600 max-w-lg">
              Every project is a partnership built on clarity, high design standards, and tangible business metrics.
            </p>
          </div>

          <button
            id="view-all-projects-btn"
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-bold bg-[#1A281C] text-[#FAF8F5] hover:bg-[#273D2B] transition-all cursor-pointer self-start md:self-auto"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              id={`featured-project-${project.id}`}
              onClick={() => onOpenProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E7E1D3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#1A281C]/90 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs uppercase tracking-wider font-bold text-[#D4A346]">
                    {project.client}
                  </p>
                  <h3 className="font-['Syne'] text-xl font-bold text-[#1A281C] group-hover:text-[#D4A346] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7E1D3] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1A281C]">
                    {project.results[0]?.value} {project.results[0]?.label}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#D4A346] group-hover:translate-x-1 transition-transform">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN METHODOLOGY / PROCESS */}
      <section id="process-section" className="bg-[#1A281C] text-[#FAF8F5] py-20 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-white/10 text-[#D4A346] border border-[#D4A346]/30">
            Our Blueprint
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How We Transform Ideas Into Reality
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            A structured, collaborative methodology designed to deliver exceptional quality on scheduled milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            {
              step: '01',
              title: 'Discover & Strategy',
              desc: 'Deep stakeholder interviews, user persona mapping, and architectural scoping to lay the foundation.'
            },
            {
              step: '02',
              title: 'Architect & Wireframe',
              desc: 'Interactive wireframes, user flow diagrams, and information hierarchies built and tested in Figma.'
            },
            {
              step: '03',
              title: 'Visual Craft & Prototype',
              desc: 'Bespoke design systems, typography pairing, motion micro-interactions, and high-fidelity prototypes.'
            },
            {
              step: '04',
              title: 'Launch & Evolution',
              desc: 'Responsive code execution, performance tuning, Core Web Vitals checks, and post-launch support.'
            }
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-[#D4A346]/40 transition-colors"
            >
              <span className="font-['Syne'] text-4xl font-extrabold text-[#D4A346]/40">
                {item.step}
              </span>
              <h3 className="font-['Syne'] text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE SCOPE & COST ESTIMATOR */}
      <section id="calculator-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostCalculator
          onStartWithEstimate={(details) => {
            onOpenConsultation(details.serviceType);
          }}
        />
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section id="testimonials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
            Client Endorsements
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281C]">
            Trusted by Leaders & Innovators
          </h2>
          <p className="text-sm text-neutral-600">
            Hear from the founders, CMOs, and product directors who chose CreativeSpace Designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.slice(0, 4).map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl bg-[#F3EFE6] border border-[#E7E1D3] space-y-4 relative flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#D4A346]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A346]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base italic text-neutral-800 font-serif leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E7E1D3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-11 h-11 rounded-full object-cover border border-[#D4A346]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-[#1A281C]">{t.author}</h4>
                    <p className="text-[11px] text-neutral-600">{t.role} • {t.company}</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D4A346] bg-white px-2.5 py-1 rounded-full border border-[#E7E1D3]">
                  {t.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL HIGH-IMPACT CTA SECTION */}
      <section id="cta-banner-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#1A281C] via-[#273D2B] to-[#1A281C] text-[#FAF8F5] p-8 sm:p-16 text-center space-y-6 border border-[#D4A346]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A346]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#D4A346] text-[#1A281C]">
              Let’s Collaborate
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Schedule a complimentary 20-minute strategic consultation. We’ll review your existing product, discuss your ambitions, and recommend an actionable roadmap.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                id="cta-schedule-call-btn"
                onClick={() => onOpenConsultation()}
                className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="cta-view-pricing-btn"
                onClick={() => onNavigate('pricing')}
                className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 active:scale-95 cursor-pointer"
              >
                <span>Compare Pricing Plans</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
