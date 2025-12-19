export interface NavigationItem {
  label: string;
  href: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface PracticeArea {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  image: string;
  name: string;
  role: string;
  bio?: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  image: string;
  title: string;
  date: string;
  author: string;
  commentCount: number;
  excerpt?: string;
  content?: string;
  readTime?: number;
  category?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  image: string;
  company?: string;
}

export interface ContactInfo {
  icon: string;
  text: string;
  type: 'phone' | 'email' | 'whatsapp';
  link: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export interface HeroContent {
  welcomeText: string;
  mainHeading: string;
  subheading: string;
  ctaText: string;
}

export interface NewsletterSection {
  heading: string;
  emailPlaceholder: string;
  buttonText: string;
}

export interface CallToActionBanner {
  heading: string;
  subheading: string;
  phone: string;
  email: string;
  hours: string;
}
