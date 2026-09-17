import React, { useState } from 'react';
import { PRICING_PLANS, FAQS_DATA } from '../data/websiteData';
import { CostCalculator } from '../components/CostCalculator';
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onOpenConsultation: (servicePlan?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenConsultation }) => {
  const [billingMode, setBillingMode] = useState<'project' | 'monthly'>('project');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const pricingFaqs = FAQS_DATA.filter((f) => f.category === 'Pricing' || f.category === 'Deliverables');

  return (
    <div id="pricing-page-container" className="pt-32 pb-24 space-y-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
          Transparent Investment
        </span>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A281C]">
          Straightforward, Value-Aligned Pricing
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          No hidden retainers or opaque hourly billing. Choose between structured project sprints or an agile monthly creative partnership.
        </p>

        {/* Toggle Pill */}
        <div className="pt-4 flex items-center justify-center">
          <div className="p-1 rounded-full bg-[#F3EFE6] border border-[#E7E1D3] flex items-center gap-1 shadow-inner">
            <button
              id="billing-toggle-project"
              onClick={() => setBillingMode('project')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingMode === 'project'
                  ? 'bg-[#1A281C] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Fixed Project Scope
            </button>
            <button
              id="billing-toggle-monthly"
              onClick={() => setBillingMode('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingMode === 'monthly'
                  ? 'bg-[#1A281C] text-white shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Monthly Studio Retainer
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingMode === 'project' ? plan.projectPrice : plan.monthlyPrice;
            const periodLabel = billingMode === 'project' ? '/ project' : '/ month';

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  plan.popular
                    ? 'bg-[#1A281C] text-[#FAF8F5] border-[#D4A346] shadow-2xl lg:-translate-y-2'
                    : 'bg-white text-[#1A281C] border-[#E7E1D3] shadow-sm hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#D4A346] text-[#1A281C] shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-['Syne'] text-2xl font-bold">
                      {plan.name}
                    </h3>
                    <p className={`text-xs leading-relaxed ${plan.popular ? 'text-white/70' : 'text-neutral-600'}`}>
                      {plan.subtitle}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="font-['Syne'] text-4xl sm:text-5xl font-extrabold">
                        ${price.toLocaleString()}
                      </span>
                      <span className={`text-xs font-semibold ${plan.popular ? 'text-white/60' : 'text-neutral-500'}`}>
                        {periodLabel}
                      </span>
                    </div>
                    <p className={`text-[11px] font-medium ${plan.popular ? 'text-[#D4A346]' : 'text-[#B88B34]'}`}>
                      Turnaround: {plan.turnaround}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-current/10 space-y-3">
                    <p className={`text-[11px] uppercase tracking-wider font-bold ${plan.popular ? 'text-white/40' : 'text-neutral-400'}`}>
                      Inclusions:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-[#D4A346]' : 'text-[#1A281C]'}`} />
                          <span className={plan.popular ? 'text-white/90' : 'text-neutral-700'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-current/10 space-y-3">
                  <p className={`text-[11px] italic ${plan.popular ? 'text-white/60' : 'text-neutral-500'}`}>
                    Ideal for: {plan.idealFor}
                  </p>
                  <button
                    id={`select-plan-${plan.id}`}
                    onClick={() => onOpenConsultation(`${plan.name} Plan`)}
                    className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer ${
                      plan.popular
                        ? 'bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254]'
                        : 'bg-[#1A281C] text-[#FAF8F5] hover:bg-[#273D2B]'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Custom Cost Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CostCalculator
          onStartWithEstimate={(details) => {
            onOpenConsultation(`${details.serviceType} (Estimated $${details.total.toLocaleString()})`);
          }}
        />
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D4A346]">
            Clarity & FAQs
          </span>
          <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#1A281C]">
            Questions About Pricing & Deliverables
          </h2>
        </div>

        <div className="space-y-3">
          {pricingFaqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E7E1D3] p-5 shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left font-['Syne'] font-bold text-sm sm:text-base text-[#1A281C] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg text-[#D4A346] font-normal">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed pt-2 border-t border-[#E7E1D3]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
