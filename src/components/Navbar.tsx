import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A281C]/95 backdrop-blur-md text-[#FAF8F5] py-3.5 shadow-xl shadow-black/10 border-b border-[#D4A346]/20'
          : 'bg-[#1A281C] text-[#FAF8F5] py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-3 text-left transition-transform duration-200 active:scale-95 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A346] to-[#B88B34] p-0.5 shadow-md shadow-[#D4A346]/20">
              <div className="w-full h-full bg-[#1A281C] rounded-[10px] flex items-center justify-center transition-colors group-hover:bg-[#121C13]">
                <Compass className="w-5 h-5 text-[#D4A346] transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-['Syne'] font-bold text-lg sm:text-xl tracking-tight text-[#FAF8F5] flex items-center gap-1.5">
                CreativeSpace
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]"></span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4A346] font-semibold">
                Designs
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#1A281C] bg-[#FAF8F5] font-semibold shadow-sm'
                      : 'text-[#FAF8F5]/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4A346]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] active:scale-95 transition-all shadow-md shadow-[#D4A346]/25 hover:shadow-lg hover:shadow-[#D4A346]/35 cursor-pointer"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-[#FAF8F5] hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#121C13] border-b border-[#D4A346]/20 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#D4A346] text-[#1A281C] font-semibold'
                      : 'text-[#FAF8F5] hover:bg-white/10'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#1A281C]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <button
              id="mobile-nav-consultation-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-[#D4A346] text-[#1A281C] shadow-md active:scale-95 transition-all"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
