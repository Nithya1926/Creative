import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

interface CostCalculatorProps {
  onStartWithEstimate: (estimateDetails: {
    serviceType: string;
    screens: number;
    addons: string[];
    total: number;
    timeline: string;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onStartWithEstimate }) => {
  const [serviceType, setServiceType] = useState<'uiux' | 'website' | 'branding' | 'fullsuite'>('website');
  const [screenCount, setScreenCount] = useState<number>(5);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['design-system', 'seo']);

  const basePrices = {
    uiux: 3200,
    website: 4200,
    branding: 2800,
    fullsuite: 6800
  };

  const serviceLabels = {
    uiux: 'UI/UX Design & Prototyping',
    website: 'Custom Website Design',
    branding: 'Brand Identity & Visual System',
    fullsuite: 'Full Product Suite & Brand'
  };

  const addonsList = [
    { id: 'design-system', name: 'Comprehensive Design System in Figma', price: 950 },
    { id: 'motion', name: 'Custom Micro-interactions & 3D Motion', price: 800 },
    { id: 'seo', name: 'Technical SEO & Performance Tune-up', price: 600 },
    { id: 'cms', name: 'CMS Architecture & Editor Walkthrough', price: 750 },
    { id: 'rush', name: 'Priority Fast-Track Turnaround', price: 1200 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculation
  const baseCost = basePrices[serviceType];
  const screenRate = serviceType === 'branding' ? 0 : (screenCount - 3) * 220;
  const addonsCost = selectedAddons.reduce((acc, curr) => {
    const found = addonsList.find((a) => a.id === curr);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalEstimate = Math.max(baseCost, baseCost + (screenRate > 0 ? screenRate : 0) + addonsCost);

  // Timeline estimation
  let estimatedWeeks = '3 - 4 weeks';
  if (serviceType === 'fullsuite' || totalEstimate > 7000) {
    estimatedWeeks = '5 - 6 weeks';
  } else if (totalEstimate < 4000) {
    estimatedWeeks = '2 - 3 weeks';
  }

  const handleBookWithEstimate = () => {
    onStartWithEstimate({
      serviceType: serviceLabels[serviceType],
      screens: screenCount,
      addons: selectedAddons.map((id) => addonsList.find((a) => a.id === id)?.name || id),
      total: totalEstimate,
      timeline: estimatedWeeks
    });
  };

  return (
    <div id="cost-calculator-card" className="bg-[#1A281C] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#D4A346]/30 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A346]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Interactive Configuration */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4A346]/20 text-[#D4A346] border border-[#D4A346]/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Transparent Estimation</span>
            </div>
            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Plan Your Scope & Budget
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Configure your requirements to receive a real-time price estimate backed by our guaranteed milestone delivery.
            </p>
          </div>

          {/* Service Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#D4A346]">
              1. Choose Core Discipline
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(basePrices) as Array<keyof typeof basePrices>).map((key) => {
                const isSelected = serviceType === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setServiceType(key)}
                    className={`p-3 rounded-xl text-xs font-medium text-left transition-all border ${
                      isSelected
                        ? 'bg-[#D4A346] text-[#1A281C] font-bold border-[#D4A346] shadow-md'
                        : 'bg-white/5 text-white/90 border-white/10 hover:border-[#D4A346]/50'
                    }`}
                  >
                    {serviceLabels[key]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Screen / Page volume slider */}
          {serviceType !== 'branding' && (
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#D4A346]">
                  2. Approximate Screens / Pages
                </span>
                <span className="font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-full">
                  {screenCount} {screenCount === 1 ? 'Screen' : 'Screens'}
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={18}
                value={screenCount}
                onChange={(e) => setScreenCount(parseInt(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#D4A346]"
              />
              <div className="flex justify-between text-[10px] text-white/50">
                <span>3 Screens (Compact MVP)</span>
                <span>8 Screens (Standard)</span>
                <span>18+ Screens (Comprehensive)</span>
              </div>
            </div>
          )}

          {/* Add-ons Checklist */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#D4A346]">
              {serviceType === 'branding' ? '2. Brand Enhancements' : '3. High-Value Enhancements'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addonsList.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 rounded-lg text-xs text-left transition-all flex items-center justify-between border ${
                      isChecked
                        ? 'bg-[#D4A346]/20 border-[#D4A346] text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:border-white/20'
                    }`}
                  >
                    <span className="truncate pr-2">{addon.name}</span>
                    <span className="text-[11px] font-bold text-[#D4A346] shrink-0">
                      +${addon.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Live Estimate Output */}
        <div className="lg:col-span-5 bg-[#121C13] rounded-2xl p-6 sm:p-8 border border-[#D4A346]/40 shadow-xl space-y-6">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#D4A346] font-bold">
              Estimated Investment
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-['Syne'] text-4xl sm:text-5xl font-black text-white">
                ${totalEstimate.toLocaleString()}
              </span>
              <span className="text-xs text-white/50 font-normal">USD fixed</span>
            </div>
          </div>

          <div className="space-y-3 pt-2 border-t border-white/10 text-xs">
            <div className="flex justify-between py-1">
              <span className="text-white/70">Selected Framework:</span>
              <span className="font-semibold text-white">{serviceLabels[serviceType]}</span>
            </div>
            {serviceType !== 'branding' && (
              <div className="flex justify-between py-1">
                <span className="text-white/70">Screen Volume:</span>
                <span className="font-semibold text-white">{screenCount} templates</span>
              </div>
            )}
            <div className="flex justify-between py-1">
              <span className="text-white/70">Estimated Timeline:</span>
              <span className="font-semibold text-[#D4A346]">{estimatedWeeks}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-white/70">Intellectual Property:</span>
              <span className="font-semibold text-white">100% Owned by Client</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-white/80">
            <ShieldCheck className="w-4 h-4 text-[#D4A346] shrink-0 mt-0.5" />
            <span>Includes 3 review cycles, source Figma files, and 30-day post-launch warranty.</span>
          </div>

          <button
            id="book-estimate-btn"
            onClick={handleBookWithEstimate}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Proceed With This Scope</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
