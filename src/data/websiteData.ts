import { ServiceItem, PortfolioProject, Testimonial, PricingPlan, FAQItem, BusinessSettings, ProjectInquiryData } from '../types';

export const INITIAL_BUSINESS_SETTINGS: BusinessSettings = {
  businessName: 'CreativeSpace Designs',
  location: 'Chennai, Tamil Nadu, India',
  whatsapp: '+91 7010160844',
  email: 'creativespacedesign.official@gmail.com',
  tagline: 'Designing Ideas Into Digital Experiences'
};

export const INITIAL_LEADS: ProjectInquiryData[] = [
  {
    id: 'lead-1',
    fullName: 'Aravind Krishnan',
    email: 'aravind@finovate.io',
    companyName: 'Finovate Technologies',
    selectedServices: ['UI/UX Design', 'Website Design'],
    budgetRange: '$10k - $20k',
    projectTimeline: 'Within 1-2 months',
    description: 'Looking to redesign our fintech SaaS platform and public website for regional expansion.',
    preferredMeetingDate: '2025-04-10',
    preferredTimeSlot: '11:00 AM GMT',
    createdAt: '2025-04-01',
    status: 'In Review'
  },
  {
    id: 'lead-2',
    fullName: 'Meera Sundaram',
    email: 'meera@heritagecrafts.com',
    companyName: 'Heritage Crafts Co.',
    selectedServices: ['Branding', 'Website Design'],
    budgetRange: '$5k - $10k',
    projectTimeline: 'Immediately (< 2 weeks)',
    description: 'Need a distinctive brand identity refresh and responsive e-commerce web storefront.',
    preferredMeetingDate: '2025-04-12',
    preferredTimeSlot: '02:00 PM GMT',
    createdAt: '2025-04-03',
    status: 'New'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'UI/UX Design',
    shortDesc: 'Intuitive, research-driven user interfaces and interaction architectures that captivate users and elevate engagement.',
    fullDesc: 'We craft human-centric user journeys, high-fidelity prototypes, and comprehensive design systems. Every interaction is engineered to minimize friction and maximize user delight and conversion.',
    iconName: 'LayoutGrid',
    deliverables: [
      'User Research & Persona Development',
      'Wireframing & Information Architecture',
      'Interactive Figma Prototypes',
      'Design System & Component Library',
      'Usability Testing & Iteration Reports'
    ],
    tools: ['Figma', 'Protopie', 'Maze', 'Miro', 'Storybook'],
    startingPrice: '$3,800',
    timeline: '3 - 5 weeks',
    highlightStat: '98% Usability Score'
  },
  {
    id: 'website-design',
    title: 'Website Design',
    category: 'Website Design',
    shortDesc: 'Bespoke, high-converting digital storefronts and marketing platforms crafted to tell your brand story with authority.',
    fullDesc: 'From immersive visual narratives to lightning-fast load times, our websites combine aesthetic sophistication with robust engineering to turn casual visitors into loyal brand advocates.',
    iconName: 'Globe',
    deliverables: [
      'Custom Visual Direction & Art Direction',
      'Full Responsive Web Templates',
      'Micro-animations & Interactive Motion',
      'CMS Integration & Content Architecture',
      'Technical SEO & Core Web Vitals Optimization'
    ],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Webflow', 'Framer'],
    startingPrice: '$4,500',
    timeline: '4 - 6 weeks',
    highlightStat: '+142% Avg. Conversion Lift'
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    category: 'Branding',
    shortDesc: 'Distinctive visual identities, typographic guidelines, and brand design that resonate across every customer touchpoint.',
    fullDesc: 'Your brand is your greatest asset. We construct holistic brand worlds—from iconic logos and curated color palettes to print collateral, packaging, and digital brand guidelines.',
    iconName: 'Sparkles',
    deliverables: [
      'Core Logo Suite (Primary, Secondary, Monogram)',
      'Color Palette & Typographic Hierarchy',
      'Brand Style Guide & Art Direction Book',
      'Social Media Assets & Marketing Templates',
      'Stationery & Packaging Mockups'
    ],
    tools: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    startingPrice: '$3,200',
    timeline: '3 - 4 weeks',
    highlightStat: '100% Trademark Ready'
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design',
    category: 'Responsive Design',
    shortDesc: 'Seamless digital experiences engineered to perform flawlessly across desktops, tablets, mobile devices, and high-DPI displays.',
    fullDesc: 'Modern audiences engage on the move. We ensure your digital experience adapts fluidly across every screen size, preserving visual impact, readability, and frictionless navigation.',
    iconName: 'Smartphone',
    deliverables: [
      'Mobile-First Layout Optimization',
      'Touch-friendly UI Controls & Gestures',
      'Adaptive Media & Retina Display Assets',
      'Cross-Browser & Device Compatibility Audits',
      'Performance Budget & Speed Acceleration'
    ],
    tools: ['Tailwind CSS', 'CSS Grid & Flexbox', 'Chrome DevTools', 'BrowserStack'],
    startingPrice: '$2,900',
    timeline: '2 - 4 weeks',
    highlightStat: '100% Mobile Lighthouse'
  }
];

export const PORTFOLIO_DATA: PortfolioProject[] = [
  {
    id: 'lumina-fintech',
    title: 'Lumina Wealth Dashboard',
    client: 'Lumina Capital Partners',
    category: 'UI/UX Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop'
    ],
    summary: 'A next-generation wealth management application featuring predictive analytics, real-time portfolio tracking, and an intuitive dark-mode interface.',
    challenge: 'Lumina’s high-net-worth investors struggled with cluttered legacy spreadsheets and confusing financial navigation, resulting in low mobile engagement.',
    solution: 'We engineered an elegant, modular design system with contextual data cards, smooth transitions, and instant transaction visualization in deep olive and gold accents.',
    results: [
      { label: 'User Retention', value: '+78%' },
      { label: 'Daily Active Users', value: '45,000+' },
      { label: 'NPS Score', value: '84' }
    ],
    deliverables: ['Design System', 'iOS & Web App Design', 'Usability Audits', 'Figma Prototype'],
    testimonial: {
      quote: 'CreativeSpace Designs transformed a daunting financial dataset into an interface that our clients genuinely enjoy opening every morning.',
      author: 'Julian Vance',
      role: 'Head of Product, Lumina Wealth',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    },
    featured: true
  },
  {
    id: 'nordic-living',
    title: 'Nordic Sanctuary E-Commerce',
    client: 'Nordic Living Co.',
    category: 'Website Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop'
    ],
    summary: 'A minimalist digital atelier for handcrafted Scandinavian furniture, highlighting sustainable materials and immersive 360-degree product showcases.',
    challenge: 'The brand needed an online presence that matched the tactile luxury and serene minimalism of their physical flagship boutiques in Copenhagen and Stockholm.',
    solution: 'Designed a calm, editorial-style layout using generous negative space, warm organic neutrals, subtle hover transitions, and a streamlined 2-step checkout.',
    results: [
      { label: 'E-Commerce Conversion', value: '+164%' },
      { label: 'Average Order Value', value: '$840' },
      { label: 'Checkout Abandonment', value: '-32%' }
    ],
    deliverables: ['E-Commerce UI', 'Art Direction', 'Motion Design', 'Tailwind Implementation'],
    testimonial: {
      quote: 'The level of craft and aesthetic discipline CreativeSpace brought to our online store elevated our brand to an international luxury benchmark.',
      author: 'Astrid Lindholm',
      role: 'Creative Director, Nordic Sanctuary',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
    },
    featured: true
  },
  {
    id: 'aurora-botanicals',
    title: 'Aurora Botanics Holistic Brand',
    client: 'Aurora Laboratories',
    category: 'Branding',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop'
    ],
    summary: 'Comprehensive brand identity, packaging design system, and digital guidelines for a sustainable luxury organic skincare line.',
    challenge: 'Entering a crowded clean-beauty market required an unmistakable visual identity that communicated clinical efficacy without losing earthy soulfulness.',
    solution: 'Developed a bespoke serif wordmark, custom botanical illustrations, embossed tactile packaging specifications, and cohesive digital design guidelines.',
    results: [
      { label: 'Retail Stockists Added', value: '180+' },
      { label: 'Press Coverage', value: 'Vogue & Elle' },
      { label: 'Brand Recall Rate', value: '92%' }
    ],
    deliverables: ['Brand Architecture', 'Packaging Guidelines', 'Typeface Pairing', 'Social Kit'],
    testimonial: {
      quote: 'CreativeSpace gave our botanical line an iconic identity that looks equally magnificent on the shelf at Harrods and on our mobile site.',
      author: 'Elena Rostova',
      role: 'Founder, Aurora Botanics',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    featured: true
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Studio Responsive Platform',
    client: 'Pulse Wellness Group',
    category: 'Responsive Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop'
    ],
    summary: 'A fast-loading, cross-platform member hub for boutique fitness studios with instant class booking and real-time biometric tracking.',
    challenge: 'Members faced lagging schedules and clunky touch targets when booking high-demand cycling and pilates sessions from their phones on the subway.',
    solution: 'Implemented mobile-first micro-interactions, single-tap reservation confirmation, offline schedule caching, and responsive live availability badges.',
    results: [
      { label: 'Mobile Bookings', value: '88% of Total' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Member Retention', value: '+35%' }
    ],
    deliverables: ['Mobile Responsive Architecture', 'Class Booking Flow', 'Interactive Calender', 'Speed Optimization'],
    testimonial: {
      quote: 'Our class booking rate doubled in the first month. The mobile experience is effortlessly smooth and our members love the clean interface.',
      author: 'Marcus Chen',
      role: 'Operations Director, Pulse Wellness',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    featured: false
  },
  {
    id: 'solstice-coffee',
    title: 'Solstice Artisan Roastery',
    client: 'Solstice Craft Coffee',
    category: 'Branding',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop'
    ],
    summary: 'Hand-lettered brand identity, biodegradable packaging system, and subscription portal for single-origin specialty coffee roasters.',
    challenge: 'Transitioning from a regional roastery into a national direct-to-consumer coffee subscription model required a cohesive, premium presence.',
    solution: 'Crafted warm earth-toned labels with metallic foil stamping cues, custom origin flavor wheels, and a quick bean quiz that guides customers to their ideal roast.',
    results: [
      { label: 'Subscriber Growth', value: '+320%' },
      { label: 'Repeat Purchase', value: '74%' },
      { label: 'Packaging Award', value: 'Dieline 2023' }
    ],
    deliverables: ['Identity System', 'Coffee Bag Packaging', 'Interactive Roast Quiz', 'Subscription UI'],
    featured: false
  },
  {
    id: 'zenith-architecture',
    title: 'Zenith Studio Architectural Showcase',
    client: 'Zenith Design Architects',
    category: 'Website Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop'
    ],
    summary: 'A gallery-grade portfolio website showcasing award-winning sustainable residential architecture and commercial bioclimatic towers.',
    challenge: 'Architectural photography required extreme fidelity and aspect ratio flexibility without sacrificing page responsiveness or layout structure.',
    solution: 'Constructed an adaptive masonry grid, full-bleed cinematic image sliders, architectural blueprint overlays, and seamless project transitions.',
    results: [
      { label: 'Inquiry Quality', value: 'Top 1% Tier' },
      { label: 'Session Duration', value: '4m 15s avg' },
      { label: 'Architecture Award', value: 'AIA Featured' }
    ],
    deliverables: ['Interactive Portfolio', 'Editorial Typography', 'Project Showcase', 'Custom Inquiries'],
    featured: true
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Working with CreativeSpace Designs felt like having an elite in-house design studio. They translated our complex vision into a digital masterpiece that doubled our client inquiries within sixty days.',
    author: 'Eleanor Vance',
    role: 'Chief Marketing Officer',
    company: 'Lumina Capital Partners',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    projectType: 'UI/UX & Web Development'
  },
  {
    id: 't-2',
    quote: 'Their eye for typography, organic color palettes, and delicate micro-interactions is unmatched. The website they built for us has won two international design accolades and increased sales by 160%.',
    author: 'Henrik Larsson',
    role: 'Managing Partner',
    company: 'Nordic Sanctuary Co.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    projectType: 'Bespoke E-Commerce Website'
  },
  {
    id: 't-3',
    quote: 'What impressed us most was their strategic thinking. CreativeSpace doesn’t just make things pretty—they deeply study your business, your audience, and your conversion funnels.',
    author: 'Dr. Sophia Reyes',
    role: 'Founder & CEO',
    company: 'Aurora Labs',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    projectType: 'Holistic Brand Identity'
  },
  {
    id: 't-4',
    quote: 'The responsive overhaul of our member portal was executed ahead of schedule with zero downtime. Clean code, responsive communication, and absolute perfectionism.',
    author: 'David Sterling',
    role: 'VP of Technology',
    company: 'Apex Mobility',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    projectType: 'Responsive Design & System'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Foundation',
    subtitle: 'For ambitious startups and emerging businesses needing a standout launchpad.',
    projectPrice: 3800,
    monthlyPrice: 2400,
    features: [
      'Up to 5 bespoke designed responsive pages',
      'Core brand palette, typography & asset kit',
      'Mobile-first responsive architecture',
      'Interactive Figma prototypes & revisions',
      'Contact form & basic SEO optimization',
      '2 weeks of post-launch support & documentation'
    ],
    turnaround: '2 - 3 weeks',
    idealFor: 'Early-stage startups, boutique consultancies, and rebrands.',
    deliverablesSummary: 'Complete brand starter & responsive 5-page digital site.'
  },
  {
    id: 'professional',
    name: 'Signature Studio',
    subtitle: 'Our most sought-after engagement for growing businesses demanding market leadership.',
    projectPrice: 6500,
    monthlyPrice: 4200,
    popular: true,
    features: [
      'Up to 10 custom pages with tailored interactive components',
      'Full brand identity system (Logo suite, collateral & stylebook)',
      'Custom micro-interactions & motion design',
      'Comprehensive Figma design system with reusable components',
      'High-converting lead generation & booking integration',
      'Advanced technical SEO, schema markup & Core Web Vitals tune-up',
      '4 weeks of post-launch priority refinement & training'
    ],
    turnaround: '4 - 5 weeks',
    idealFor: 'Growing enterprises, upscale brands, and scaling agencies.',
    deliverablesSummary: 'Full brand universe, custom digital product & design system.'
  },
  {
    id: 'retainer',
    name: 'Retainer & Scale',
    subtitle: 'A dedicated embedded design partner for continuous product iteration and brand growth.',
    projectPrice: 9800,
    monthlyPrice: 6200,
    features: [
      'Unlimited design requests & active continuous sprint queue',
      'Full UI/UX, product features, web updates & marketing graphics',
      'Dedicated Slack channel & weekly strategic video sync',
      'Turnaround of 48-72 hours per discrete request',
      'Comprehensive design system governance & versioning',
      'Direct access to Senior Creative Director',
      'Pause or cancel anytime with transparent terms'
    ],
    turnaround: 'Continuous 48h sprints',
    idealFor: 'Funded ventures, established companies, and fast-moving teams.',
    deliverablesSummary: 'Dedicated high-output creative arm with instant turnaround.'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Process',
    question: 'How do we begin working together?',
    answer: 'Every project starts with a 30-minute discovery call where we review your brand goals, target audience, and scope. We then deliver a tailored proposal with clear milestones, deliverables, and transparent pricing. Once approved, we kick off within 5 business days.'
  },
  {
    category: 'Deliverables',
    question: 'What files and assets do I receive at project completion?',
    answer: 'You receive 100% intellectual property ownership of all assets. This includes organized Figma source files, production-ready component libraries, exported high-res vectors/SVGs, brand guidelines in PDF, and fully implemented responsive codebases.'
  },
  {
    category: 'Process',
    question: 'How many rounds of revisions are included?',
    answer: 'Our milestone-based process includes structured feedback cycles at wireframing, moodboarding, and high-fidelity stages, with up to three comprehensive refinement rounds per milestone to ensure you are thrilled with the outcome.'
  },
  {
    category: 'Pricing',
    question: 'Can I choose between a fixed project rate or an ongoing retainer?',
    answer: 'Yes. For defined projects (such as a website launch or complete brand overhaul), we offer guaranteed fixed-scope pricing. For ongoing product growth or continuous design needs, our monthly studio retainers offer flexible priority access.'
  },
  {
    category: 'Deliverables',
    question: 'Do you develop the websites you design?',
    answer: 'Absolutely. We develop responsive, high-performance web experiences using modern frameworks like React, Vite, Tailwind CSS, and Webflow. Every site is rigorously tested across devices and tuned for Core Web Vitals.'
  },
  {
    category: 'General',
    question: 'How long does a typical website or brand project take?',
    answer: 'A comprehensive website or brand overhaul typically takes 3 to 6 weeks from kick-off to final deployment, depending on project scope, page volume, and revision turnaround times.'
  }
];
