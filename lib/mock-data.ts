import {
  NavigationItem,
  Statistic,
  PracticeArea,
  TeamMember,
  BlogArticle,
  Testimonial,
  ContactInfo,
  SocialLink,
  QuickLink,
  HeroContent,
  CallToActionBanner,
} from './types';

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Retainership', href: '/retainership' },
];

export const heroContent: HeroContent = {
  welcomeText: 'WELCOME TO',
  mainHeading: 'PEARLAW CORPORATE',
  subheading:
    'We provide expert legal solutions for businesses and individuals. Experience. Trust. Results.',
  ctaText: 'BOOK NOW',
};

export const statistics: Statistic[] = [
  {
    value: '500+',
    label: 'Clients Served',
  },
  {
    value: '98%',
    label: 'Success Rate',
  },
  {
    value: '10mlns',
    label: 'Recovered Cost for Client',
  },
  {
    value: '15+',
    label: 'Years Experience',
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    icon: '/streamline-ultimate-corporate-social-media.svg',
    title: 'CORPORATE & COMMERCIAL',
    description:
      'End-to-end corporate structuring, M&A transactions, commercial contracts and joint ventures tailored to your business objectives.',
    slug: 'corporate-commercial',
  },
  {
    icon: '/octicon-law-24.svg',
    title: 'TECH LAW',
    description:
      'Navigate the digital landscape with expertise in data privacy, IP protection, software licensing, and technology transactions.',
    slug: 'tech-law',
  },
  {
    icon: '/lucide-house.svg',
    title: 'REAL ESTATE LAW',
    description:
      'Complete real estate solutions covering property transactions, due diligence, leasing, and title verification.',
    slug: 'real-estate-law',
  },
  {
    icon: '/lucide-rocket.svg',
    title: 'STARTUPS & MSME LAW',
    description:
      "Comprehensive legal support for startups and MSME's including incorporation, funding rounds, term sheets, and growth strategies.",
    slug: 'startups-msme-law',
  },
  {
    icon: '/heroicons-document-check.svg',
    title: 'COMPANY GOVERNANCE',
    description:
      'Ensure compliance with corporate governance standards, board processes, statutory fillings and regulatory.',
    slug: 'company-governance',
  },
  {
    icon: '/line-md-security.svg',
    title: 'REGULATORY COMPLIANCE',
    description:
      'Stay ahead of regulatory changes with our proactive compliance advisory across multiple sectors and jurisdictions.',
    slug: 'regulatory-compliance',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    image: '/image-2.png',
    name: 'ADEBAYO JOHNSON',
    role: 'SENIOR ASSOCIATE',
  },
  {
    id: '2',
    image: '/image-3.png',
    name: 'CHIOMA OKONKWO',
    role: 'ASSOCIATE',
  },
  {
    id: '3',
    image: '/image-7.png',
    name: 'TUNDE ADELEKE',
    role: 'LEGAL CONSULTANT',
  },
  {
    id: '4',
    image: '/image-8.png',
    name: 'BLESSING NNAMDI',
    role: 'ASSOCIATE',
  },
  {
    id: '5',
    image: '/image-6.png',
    name: 'IBRAHIM HASSAN',
    role: 'LEGAL ADVISOR',
  },
  {
    id: '6',
    image: '/image-9.png',
    name: 'GRACE EZE',
    role: 'JUNIOR ASSOCIATE',
  },
];

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'navigating-cruise-ship-contractual-claim-restrictions',
    image: '/frame-2147209198-1.svg',
    title: 'Navigating Cruise Ship Contractual Claim Restrictions',
    date: 'Feb 26, 2025',
    author: 'Adam Ekong',
    commentCount: 4,
  },
  {
    id: '2',
    slug: 'understanding-legal-rights-domestic-violence-cases',
    image: '/frame-2147209198-2.svg',
    title: 'Understanding Your Legal Rights in Domestic Violence Cases',
    date: 'Feb 26, 2025',
    author: 'Adamu Julius',
    commentCount: 1,
  },
  {
    id: '3',
    slug: 'legal-guide-child-support-parental-responsibilities',
    image: '/frame-2147209198.png',
    title: 'A Legal Guide to Child Support and Parental Responsibilities',
    date: 'Feb 26, 2025',
    author: 'Tony Patra',
    commentCount: 2,
  },
];

export const testimonial: Testimonial = {
  id: '1',
  quote:
    "Pearlaw's expertise in tech law helped us navigate complex regulatory requirements as we scaled. Their practical advice was invaluable. The firm handled my case with exceptional professionalism and clarity. I felt supported at every stage.",
  name: 'Chidi Okonkwo',
  title: 'CEO, TechVenture Nigeria',
  image: '/ellipse-10.png',
};

export const contactInfo: ContactInfo[] = [
  {
    icon: '/ri-whatsapp-line.svg',
    text: '+234 806 430 5645',
    type: 'whatsapp',
    link: 'https://wa.me/2348064305645',
  },
  {
    icon: '/cuida-phone-outline.svg',
    text: '+234 813 614 1666',
    type: 'phone',
    link: 'tel:+2348136141666',
  },
  {
    icon: '/ic-outline-email.svg',
    text: 'contact@pearlawcorporate.com',
    type: 'email',
    link: 'mailto:contact@pearlawcorporate.com',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Facebook',
    icon: '/iconoir-facebook.svg',
    url: 'https://facebook.com',
    ariaLabel: 'Visit our Facebook page',
  },
  {
    platform: 'Instagram',
    icon: '/fe-instagram.svg',
    url: 'https://instagram.com',
    ariaLabel: 'Visit our Instagram profile',
  },
  {
    platform: 'TikTok',
    icon: '/streamline-plump-tiktok.svg',
    url: 'https://tiktok.com',
    ariaLabel: 'Visit our TikTok profile',
  },
];

export const practiceAreaLinks: string[] = [
  'Corporate & Securities',
  'Tech Law',
  'Estate Law',
  'Startups & MSME Law',
  'Company Governance',
  'Regulatory Compliance',
];

export const quickLinks: QuickLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export const ctaBanner: CallToActionBanner = {
  heading: 'ARE YOU LOOKING FOR SOMEONE TO HELP?',
  subheading: 'Let us help you! Call Now : (234)813 614 1666',
  phone: '+234 813 614 1666',
  email: 'Contact@pearlaw.com',
  hours: 'Mon - Fri: 9:00AM - 6:00PM',
};

export const companyInfo = {
  name: 'Pearlaw Corporate',
  logo: '/pearlaw-corporate-logo-removebg-preview-1.png',
  tagline: 'Protecting your right with clarity, confidence, and experience.',
  copyright: '2025 Pearlaw Corporate. All rights reserved.',
};
