import React from 'react';
import { PortfolioProject } from '../types';
import { X, ExternalLink, CheckCircle2, Quote, Award, Sparkles, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onStartSimilarProject: (project: PortfolioProject) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartSimilarProject
}) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] text-[#1A281C] rounded-2xl shadow-2xl overflow-y-auto border border-[#D4A346]/30 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E1D3]">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1A281C] text-[#FAF8F5]">
              {project.category}
            </span>
            <span className="text-xs text-neutral-500 font-medium">
              Completed {project.year}
            </span>
          </div>

          <button
            id="close-project-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-200/80 hover:bg-[#1A281C] hover:text-white transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title & Summary */}
          <div>
            <h2 className="font-['Syne'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A281C] tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs uppercase tracking-widest text-[#D4A346] font-bold mt-1">
              Client: {project.client}
            </p>
            <p className="text-base sm:text-lg text-neutral-700 mt-4 leading-relaxed font-serif italic">
              "{project.summary}"
            </p>
          </div>

          {/* Primary Showcase Image */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#E7E1D3] aspect-video bg-neutral-100">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Metrics / Results Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-[#1A281C] text-[#FAF8F5] border border-[#D4A346]/30">
            {project.results.map((res, i) => (
              <div key={i} className="text-center sm:text-left sm:border-r last:border-0 border-white/10 sm:pr-4">
                <div className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-[#D4A346]">
                  {res.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                  {res.label}
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#F3EFE6] border border-[#E7E1D3] space-y-2.5">
              <h3 className="font-['Syne'] text-base font-bold text-[#1A281C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                The Challenge
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#F3EFE6] border border-[#E7E1D3] space-y-2.5">
              <h3 className="font-['Syne'] text-base font-bold text-[#1A281C] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4A346]"></span>
                Our Solution
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables tags */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-500">
              Key Deliverables
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white text-[#1A281C] border border-[#E7E1D3] shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4A346]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery Preview Images */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-500">
                Visual Artifacts & Detail Views
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm border border-[#E7E1D3] aspect-[4/3] bg-neutral-100">
                    <img
                      src={imgUrl}
                      alt={`${project.title} detail ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Testimonial if available */}
          {project.testimonial && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#1A281C] to-[#121C13] text-[#FAF8F5] relative overflow-hidden border border-[#D4A346]/20">
              <Quote className="w-12 h-12 text-[#D4A346]/20 absolute right-4 bottom-4" />
              <p className="text-sm sm:text-base italic text-white/90 leading-relaxed font-serif relative z-10">
                "{project.testimonial.quote}"
              </p>
              <div className="mt-4 flex items-center gap-3 relative z-10">
                <img
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4A346]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xs font-bold text-white">{project.testimonial.author}</p>
                  <p className="text-[11px] text-[#D4A346]">{project.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#E7E1D3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-600">
              Inspired by this project? Let’s craft a tailored solution for your brand.
            </p>
            <button
              id="start-similar-project-btn"
              onClick={() => {
                onClose();
                onStartSimilarProject(project);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
