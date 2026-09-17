import React, { useState } from 'react';
import { PageId } from '../types';
import { Compass, Mail, ArrowRight, CheckCircle2, MapPin, Phone, MessageCircle, Instagram, Linkedin, Twitter, Dribbble, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 5000);
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-site-footer" className="bg-[#121C13] text-[#FAF8F5] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A346] to-[#B88B34] p-0.5">
                <div className="w-full h-full bg-[#1A281C] rounded-[10px] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-[#D4A346]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-['Syne'] font-bold text-xl tracking-tight text-[#FAF8F5]">
                  CreativeSpace
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4A346] font-semibold">
                  Designs
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FAF8F5]/70 leading-relaxed max-w-sm">
              We design and engineer bespoke digital experiences, high-converting websites, intuitive UI/UX systems, and enduring brand identities for visionary enterprises.
            </p>

            <div className="pt-2">
              <button
                id="footer-start-project-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-all"
              >
                <span>Book a Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4A346]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#D4A346] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#D4A346] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-[#D4A346] transition-colors">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#D4A346] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-[#D4A346] transition-colors">
                  Pricing & Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#D4A346] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4A346]">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#D4A346] transition-colors text-left">
                  UI/UX Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#D4A346] transition-colors text-left">
                  Website Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#D4A346] transition-colors text-left">
                  Brand Identity
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#D4A346] transition-colors text-left">
                  Responsive Design
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#D4A346] transition-colors text-left">
                  Design Systems
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4A346]">
              Design Journal
            </h4>
            <p className="text-xs text-[#FAF8F5]/70 leading-relaxed">
              Curated design insights, case studies, and digital strategy delivered monthly.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  id="newsletter-email-input"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-white/5 border border-white/15 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#D4A346] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-[#D4A346] text-[#1A281C] hover:bg-[#E2B254] transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {newsletterSubscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed! Welcome to our circle.</span>
                </div>
              )}
            </form>

            <div className="pt-2 text-xs text-[#FAF8F5]/80 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4A346] shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#D4A346] shrink-0" />
                <a
                  href="https://wa.me/917010160844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4A346] transition-colors"
                >
                  +91 7010160844 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A346] shrink-0" />
                <a
                  href="mailto:creativespacedesign.official@gmail.com"
                  className="hover:text-[#D4A346] transition-colors break-all"
                >
                  creativespacedesign.official@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50">
          <p>© {new Date().getFullYear()} CreativeSpace Designs. All rights reserved. Crafting digital elegance in Chennai.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('admin')}
              className="text-white/40 hover:text-[#D4A346] transition-colors text-[11px] flex items-center gap-1 cursor-pointer"
            >
              <Shield className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
            <span className="text-white/20">•</span>
            <a href="#dribbble" aria-label="Dribbble" className="hover:text-[#D4A346] transition-colors">
              <Dribbble className="w-4 h-4" />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-[#D4A346] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-[#D4A346] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-[#D4A346] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
