export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'pricing' | 'contact' | 'admin';

export type ServiceCategory = 'UI/UX Design' | 'Website Design' | 'Branding' | 'Responsive Design';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  tools: string[];
  startingPrice: string;
  timeline: string;
  highlightStat: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: ServiceCategory;
  year: string;
  image: string;
  galleryImages: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
  link?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  projectPrice: number;
  popular?: boolean;
  features: string[];
  turnaround: string;
  idealFor: string;
  deliverablesSummary: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Process' | 'Pricing' | 'Deliverables';
}

export interface ProjectInquiryData {
  id?: string;
  fullName: string;
  email: string;
  companyName: string;
  selectedServices: string[];
  budgetRange: string;
  projectTimeline: string;
  description: string;
  preferredMeetingDate?: string;
  preferredTimeSlot?: string;
  createdAt?: string;
  status?: 'New' | 'In Review' | 'Contacted' | 'Closed';
}

export interface BusinessSettings {
  businessName: string;
  location: string;
  whatsapp: string;
  email: string;
  tagline: string;
}

