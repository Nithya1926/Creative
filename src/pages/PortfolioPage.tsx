import React, { useState } from 'react';
import { PortfolioProject, ServiceCategory } from '../types';
import { PORTFOLIO_DATA } from '../data/websiteData';
import { ArrowUpRight, Filter, Search, Sparkles } from 'lucide-react';

interface PortfolioPageProps {
  onOpenProject: (project: PortfolioProject) => void;
  onOpenConsultation: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenProject,
  onOpenConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'UI/UX Design', 'Website Design', 'Branding', 'Responsive Design'];

  const filteredProjects = PORTFOLIO_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div id="portfolio-page-container" className="pt-32 pb-24 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-[#1A281C] text-[#FAF8F5]">
          Selected Portfolio
        </span>
        <h1 className="font-['Syne'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A281C]">
          Design That Drives Measurable Growth
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Explore our curated portfolio of bespoke digital products, brand identities, and high-performance responsive web applications.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#F3EFE6] border border-[#E7E1D3]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#1A281C] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-[#FAF8F5] border border-[#E7E1D3]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search case studies..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#E7E1D3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4A346]"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <p className="font-['Syne'] text-xl font-bold text-neutral-700">
              No matching projects found
            </p>
            <p className="text-xs text-neutral-500">
              Try adjusting your search query or switching to another category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`portfolio-item-${project.id}`}
                onClick={() => onOpenProject(project)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E7E1D3] shadow-sm hover:shadow-xl hover:border-[#D4A346]/40 transition-all duration-300 flex flex-col"
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
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-[#D4A346] text-[#1A281C] flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <p className="text-xs uppercase tracking-wider font-bold text-[#D4A346]">
                      {project.client} • {project.year}
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
                    <span className="text-[11px] font-semibold text-[#D4A346]">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Portfolio Bottom Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A281C] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6 border border-[#D4A346]/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-white">
              Have a specific vision in mind?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-lg">
              We frequently build custom private digital prototypes under NDA. Contact us to review confidential sector-specific case studies.
            </p>
          </div>
          <button
            id="portfolio-cta-inquiry-btn"
            onClick={onOpenConsultation}
            className="px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};
