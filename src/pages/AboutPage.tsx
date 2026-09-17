import React from 'react';
import {
  Compass,
  Sparkles,
  Award,
  HeartHandshake,
  Eye,
  CheckCircle2,
  ArrowRight,
  Target,
  Workflow,
  Layers,
  LayoutGrid,
  Globe,
  Smartphone,
  ShieldCheck
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  // Design Philosophy Principles
  const principles = [
    {
      title: 'Human-Centered Ergonomics',
      desc: 'We design for genuine humans, not abstract metrics. Every click, transition, and type size is calibrated for effortless cognition.',
      icon: Eye
    },
    {
      title: 'Pixel-Perfect Discipline',
      desc: 'No arbitrary margins or generic templates. We operate with mathematical rhythm, refined palettes, and rigorous attention to detail.',
      icon: Sparkles
    },
    {
      title: 'Commercial Efficacy',
      desc: 'Art serves a purpose. We measure our success through conversion gains, brand recall, and the sustainable growth of your enterprise.',
      icon: Award
    },
    {
      title: 'Transparent Collaboration',
      desc: 'No bureaucracy or opaque black boxes. You get direct access to seasoned designers who communicate proactively every week.',
      icon: HeartHandshake
    }
  ];

  // What We Do Disciplines
  const disciplines = [
    {
      title: 'UI/UX Design & Architecture',
      desc: 'Comprehensive user journeys, wireframing, high-fidelity prototypes, and design systems that reduce friction and elevate engagement.',
      icon: LayoutGrid
    },
    {
      title: 'Bespoke Website Design',
      desc: 'Digital storefronts and marketing platforms crafted with editorial finesse, responsive fluidity, and search-optimized structure.',
      icon: Globe
    },
    {
      title: 'Brand Identity Systems',
      desc: 'Iconic logos, bespoke typographic suites, curated palettes, and guidelines that forge unmistakable recognition.',
      icon: Sparkles
    },
    {
      title: 'Responsive Digital Engineering',
      desc: 'Experiences engineered to perform with lightning speed and flawless fidelity across all mobile, tablet, and high-DPI screens.',
      icon: Smartphone
    }
  ];

  // Our Approach Phases
  const approachSteps = [
    {
      phase: '01',
      title: 'Discovery & Strategic Scoping',
      desc: 'We unpack your audience psychology, market position, and core commercial targets before crafting a single pixel.'
    },
    {
      phase: '02',
      title: 'Architecture & Wireframe Prototyping',
      desc: 'We structure intuitive user flows, content hierarchies, and low-fidelity prototypes to validate mental models early.'
    },
    {
      phase: '03',
      title: 'Visual Craft & High-Fidelity Systems',
      desc: 'We apply tailored color palettes, refined typography, and purposeful micro-interactions into living Figma design systems.'
    },
    {
      phase: '04',
      title: 'Execution, QA & Launch Assurance',
      desc: 'We test across devices, optimize Core Web Vitals, ensure responsive perfection, and deliver complete intellectual property.'
    }
  ];

  return (
    <div id="about-page-container" className="pt-32 pb-24 space-y-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
          About CreativeSpace Designs
        </span>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A281C]">
          Designing Ideas Into Digital Longevity
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Based in Chennai, Tamil Nadu, India, CreativeSpace Designs is an independent digital design studio crafting bespoke UI/UX interfaces, responsive web systems, and enduring brand identities.
        </p>
      </section>

      {/* 1. ABOUT CREATIVESPACE DESIGNS */}
      <section id="about-creativespace" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A346]">
              About CreativeSpace Designs
            </span>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-[#1A281C] leading-tight">
              Where aesthetic elegance meets digital engineering.
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              We founded CreativeSpace Designs with a simple conviction: the digital world has plenty of generic, templated noise, but very few truly memorable, tactile digital sanctuaries.
            </p>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              From Chennai, Tamil Nadu, India, we partner with visionary brands, high-growth startups, and established enterprises globally. By combining editorial typography, organic olive and gold color harmonies, and responsive web technology, we create digital flagships that establish authority and command loyalty.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <p className="font-['Syne'] text-3xl font-bold text-[#1A281C]">120+</p>
                <p className="text-xs text-neutral-500 uppercase font-semibold">Flagships Launched</p>
              </div>
              <div className="h-8 w-px bg-neutral-300" />
              <div>
                <p className="font-['Syne'] text-3xl font-bold text-[#1A281C]">99%</p>
                <p className="text-xs text-neutral-500 uppercase font-semibold">Client Satisfaction</p>
              </div>
              <div className="h-8 w-px bg-neutral-300" />
              <div>
                <p className="font-['Syne'] text-3xl font-bold text-[#1A281C]">8+ Yrs</p>
                <p className="text-xs text-neutral-500 uppercase font-semibold">Excellence</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E7E1D3] aspect-[4/3] bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="CreativeSpace Designs Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1A281C] text-[#FAF8F5] p-5 rounded-2xl shadow-xl border border-[#D4A346]/40 hidden sm:flex items-center gap-3">
              <Compass className="w-8 h-8 text-[#D4A346]" />
              <div>
                <p className="font-bold text-xs">CreativeSpace Designs</p>
                <p className="text-[10px] text-white/70">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR DESIGN PHILOSOPHY */}
      <section id="our-design-philosophy" className="bg-[#1A281C] text-[#FAF8F5] py-20 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-white/10 text-[#D4A346] border border-[#D4A346]/30">
            Our Design Philosophy
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Principles That Shape Every Pixel
          </h2>
          <p className="text-xs sm:text-sm text-white/70">
            We believe that digital interfaces should be as deliberate, tactile, and enduring as classical architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => {
            const IconComp = p.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 hover:border-[#D4A346]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4A346] text-[#1A281C] flex items-center justify-center font-bold">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-['Syne'] text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section id="what-we-do" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
            What We Do
          </span>
          <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold tracking-tight text-[#1A281C]">
            Specialized Digital Disciplines
          </h2>
          <p className="text-sm text-neutral-600">
            Focused capabilities designed to solve complex user interface challenges and establish market leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {disciplines.map((d, idx) => {
            const IconComp = d.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#E7E1D3] shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#1A281C] flex items-center justify-center text-[#D4A346]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-['Syne'] text-xl font-bold text-[#1A281C]">
                    {d.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E7E1D3] flex items-center gap-2 text-xs font-semibold text-[#D4A346]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Full ownership of design systems and assets</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section id="our-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F3EFE6] border border-[#E7E1D3] space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A346]">
              Our Approach
            </span>
            <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#1A281C]">
              Methodical, Transparent & Collaborative
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              We replace guesswork with research, continuous feedback loops, and structured milestone deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="space-y-3 border-t-2 border-[#D4A346] pt-5 bg-white/60 p-5 rounded-xl border border-[#E7E1D3]">
                <span className="font-['Syne'] text-3xl font-extrabold text-[#D4A346]">
                  {step.phase}
                </span>
                <h4 className="font-['Syne'] text-base font-bold text-[#1A281C]">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR GOAL */}
      <section id="our-goal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-white border border-[#E7E1D3] shadow-sm">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D4A346]">
              Our Goal
            </span>
            <h2 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#1A281C]">
              To Create Digital Experiences That Endure
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Our goal at CreativeSpace Designs is to empower ambitious brands and founders with digital interfaces that command attention and drive measurable growth. We aim to eradicate generic templates by proving that bespoke design, mathematical rigor, and thoughtful storytelling create the highest return on investment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-800">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#D4A346] shrink-0" />
                <span>Elevating digital benchmarks for Indian & global brands</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4A346] shrink-0" />
                <span>Zero bloated handoffs; pure production-ready files</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-[#1A281C] text-white p-6 rounded-2xl space-y-3 border border-[#D4A346]/40">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#D4A346]">
              Studio Benchmark
            </span>
            <p className="font-['Syne'] text-xl font-bold text-white">
              "Craft is not an embellishment; it is the fundamental strategy."
            </p>
            <p className="text-xs text-white/70">
              CreativeSpace Designs • Chennai, Tamil Nadu, India
            </p>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A281C] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#D4A346]/30">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-['Syne'] text-2xl font-bold text-white">
              Ready to elevate your digital experience?
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              CreativeSpace Designs is ready to partner on your next UI/UX, website, or branding milestone.
            </p>
          </div>
          <button
            id="about-cta-consultation-btn"
            onClick={onOpenConsultation}
            className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Start Project Discussion
          </button>
        </div>
      </section>
    </div>
  );
};
