import React, { useState } from 'react';
import { PageId, PortfolioProject } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#admin') {
      return 'admin';
    }
    return 'home';
  });
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProject = (project: PortfolioProject) => {
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
    setPreselectedService(undefined);
  };

  const handleStartSimilarProject = (project: PortfolioProject) => {
    handleCloseProject();
    handleOpenConsultation(project.category);
  };

  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen bg-[#F7F5F0] text-[#1A281C] font-sans antialiased">
        <AdminDashboard onReturnToSite={() => handleNavigate('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A281C] font-sans antialiased selection:bg-[#D4A346] selection:text-[#1A281C]">
      {/* Primary Sticky Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page View Switching */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProject={handleOpenProject}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenProject={handleOpenProject}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={handleCloseProject}
        onStartSimilarProject={handleStartSimilarProject}
      />

      {/* Consultation & Discovery Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
        preselectedService={preselectedService}
      />
    </div>
  );
}
