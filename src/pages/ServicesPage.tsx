import React from 'react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/websiteData';
import {
  LayoutGrid,
  Globe,
  Sparkles,
  Smartphone,
  Layers,
  CheckCircle2,
  ArrowRight,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface ServicesPageProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-8 h-8 text-[#D4A346]" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-[#D4A346]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#D4A346]" />;
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-[#D4A346]" />;
      default:
        return <Layers className="w-8 h-8 text-[#D4A346]" />;
    }
  };

  return (
    <div id="services-page-container" className="pt-32 pb-24 space-y-20">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
          What We Do
        </span>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A281C]">
          Tailored Design Services
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          From human-centered digital experiences to full-scale responsive web platforms and iconic brand systems, we elevate ambitious brands.
        </p>
      </section>

      {/* Deep Dive Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES_DATA.map((srv, index) => (
          <div
            key={srv.id}
            id={`service-detail-${srv.id}`}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-3xl border border-[#E7E1D3] shadow-sm bg-white ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Service Information */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#1A281C] flex items-center justify-center shadow-md">
                  {getIcon(srv.iconName)}
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#D4A346]">
                    Discipline 0{index + 1}
                  </span>
                  <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#1A281C]">
                    {srv.title}
                  </h2>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                {srv.fullDesc}
              </p>

              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-bold text-neutral-500">
                  Deliverables Included:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {srv.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A346] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-neutral-500 mr-2">Tools & Tech:</span>
                {srv.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-[#F3EFE6] text-[#1A281C] border border-[#E7E1D3]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E7E1D3] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Starting Investment</span>
                    <span className="font-['Syne'] font-bold text-base text-[#1A281C]">{srv.startingPrice}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Typical Delivery</span>
                    <span className="font-semibold text-neutral-800">{srv.timeline}</span>
                  </div>
                </div>

                <button
                  id={`quote-btn-${srv.id}`}
                  onClick={() => onOpenConsultation(srv.title)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-sm active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Service Visual Highlight Box */}
            <div className="lg:col-span-5 bg-[#1A281C] text-[#FAF8F5] rounded-2xl p-8 space-y-6 border border-[#D4A346]/30">
              <span className="text-xs uppercase tracking-widest font-bold text-[#D4A346]">
                Studio Standards
              </span>

              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#D4A346] font-bold">
                    <Zap className="w-4 h-4" />
                    <span>Iterative Milestone Cadence</span>
                  </div>
                  <p className="text-white/70">
                    Transparent weekly sprints with interactive previews in Figma and staging environments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#D4A346] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Commercial IP Guarantee</span>
                  </div>
                  <p className="text-white/70">
                    Full transfer of all intellectual property, source files, and design system components upon completion.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-[#D4A346] font-bold">
                    <Clock className="w-4 h-4" />
                    <span>30-Day Launch Warranty</span>
                  </div>
                  <p className="text-white/70">
                    Dedicated support window for responsive tweaks, asset exports, and team onboarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
