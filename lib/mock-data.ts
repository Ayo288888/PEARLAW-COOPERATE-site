import type {
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
} from "./types"

export const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Experience plc", href: "/experience" },
  { label: "Expertise", href: "/services" },
  { label: "Meet the team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
]

export const heroContent: HeroContent = {
  welcomeText: "WELCOME TO",
  mainHeading: "PEARLAW CORPORATE",
  subheading: "We provide expert legal solutions for businesses and individuals. Experience. Trust. Results.",
  ctaText: "BOOK NOW",
}

export const statistics: Statistic[] = [
  {
    value: "500+",
    label: "Clients Served",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
  {
    value: "10M+",
    label: "Recovered Costs for Clients",
  },
  {
    value: "15+",
    label: "Years Experience",
  },
]

export const practiceAreas: PracticeArea[] = [
  {
    icon: "/law-icon.png",
    title: "CORPORATE & COMMERCIAL",
    description:
      "End-to-end corporate structuring, M&A transactions, commercial contracts and joint ventures tailored to your business objectives.",
    slug: "corporate-commercial",
  },
  {
    icon: "/law-icona.png",
    title: "TECH LAW",
    description:
      "Navigate the digital landscape with expertise in data privacy, IP protection, software licensing, and technology transactions.",
    slug: "tech-law",
  },
  {
    icon: "/law-iconb.png",
    title: "REAL ESTATE LAW",
    description:
      "Complete real estate solutions covering property transactions, due diligence, leasing, and title verification.",
    slug: "real-estate-law",
  },
  {
    icon: "/law-iconc.png",
    title: "STARTUPS & MSME LAW",
    description:
      "Comprehensive legal support for startups and MSME's including incorporation, funding rounds, term sheets, and growth strategies.",
    slug: "startups-msme-law",
  },
  {
    icon: "/law-icond.png",
    title: "COMPANY GOVERNANCE",
    description:
      "Ensure compliance with corporate governance standards, board processes, statutory filings and regulatory.",
    slug: "company-governance",
  },
  {
    icon: "/law-icone.png",
    title: "REGULATORY COMPLIANCE",
    description:
      "Stay ahead of regulatory changes with our proactive compliance advisory across multiple sectors and jurisdictions.",
    slug: "regulatory-compliance",
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    image: "/team1.png",
    name: "ADEBAYO JOHNSON",
    role: "SENIOR ASSOCIATE",
  },
  {
    id: "2",
    image: "/team2.png",
    name: "CHIOMA OKONKWO",
    role: "ASSOCIATE",
  },
  {
    id: "3",
    image: "/team3.png",
    name: "TUNDE ADELEKE",
    role: "LEGAL CONSULTANT",
  },
  {
    id: "4",
    image: "/team4.png",
    name: "BLESSING NNAMDI",
    role: "ASSOCIATE",
  },
  {
    id: "5",
    image: "/team1.png",
    name: "IBRAHIM HASSAN",
    role: "LEGAL ADVISOR",
  },
  {
    id: "6",
    image: "/team2.png",
    name: "GRACE EZE",
    role: "JUNIOR ASSOCIATE",
  },
]

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    slug: "navigating-cruise-ship-contractual-claim-restrictions",
    image: "/peerlaw1.jpg",
    title: "Navigating Cruise Ship Contractual Claim Restrictions",
    excerpt: "Cruise ship tickets often contain restrictive clauses that can limit your rights. Learn how to navigate these complex contractual claims and what to do if you have an issue.",
    date: "2025-03-15T12:00:00.000Z",
    author: "Adam Ekong",
    commentCount: 4,
    readTime: 7,
    category: "Contract Law",
  },
  {
    id: "2",
    slug: "understanding-legal-rights-domestic-violence-cases",
    image: "/peerlaw2.png",
    title: "Understanding Your Legal Rights in Domestic Violence Cases",
    excerpt: "A comprehensive guide to understanding your legal rights and the protections available in domestic violence cases in Nigeria. Knowledge is the first step to safety.",
    date: "2025-03-10T12:00:00.000Z",
    author: "Adamu Julius",
    commentCount: 1,
    readTime: 9,
    category: "IP Law",
  },
  {
    id: "3",
    slug: "legal-guide-child-support-parental-responsibilities",
    image: "/peerlaw3.jpg",
    title: "A Legal Guide to Child Support and Parental Responsibilities",
    excerpt: "Child support is a critical aspect of family law. This guide breaks down parental responsibilities and how child support is calculated and enforced in Nigeria.",
    date: "2025-03-05T12:00:00.000Z",
    author: "Tony Patra",
    commentCount: 2,
    readTime: 8,
    category: "Business Law",
  },
  {
    id: "4",
    slug: "the-rise-of-legal-tech-in-nigeria",
    image: "/peerlaw4.jpg",
    title: "The Rise of Legal Tech in Nigeria: What Your Firm Needs to Know",
    excerpt: "Legal technology is transforming the practice of law. Discover the latest trends in Nigerian legal tech and how your firm can adapt to stay competitive.",
    date: "2025-02-28T12:00:00.000Z",
    author: "Chioma Okonkwo",
    commentCount: 5,
    readTime: 10,
    category: "Legal Tech",
  },
  {
    id: "5",
    slug: "intellectual-property-protection-for-startups",
    image: "/peerlaw5.jpg",
    title: "Intellectual Property Protection for Startups",
    excerpt: "For startups, IP is a critical asset. Learn the essential steps to protect your trademarks, copyrights, and patents from the very beginning.",
    date: "2025-02-20T12:00:00.000Z",
    author: "Adebayo Johnson",
    commentCount: 3,
    readTime: 12,
    category: "IP Law",
  },
]

export const testimonial: Testimonial = {
  id: "1",
  quote:
    "Pearlaw's expertise in tech law helped us navigate complex regulatory requirements as we scaled. Their practical advice was invaluable. The firm handled my case with exceptional professionalism and clarity. I felt supported at every stage.",
  name: "Chidi Okonkwo",
  title: "CEO, TechVenture Nigeria",
  image: "/ceo.jpg",
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "/whatsapp-icon.png",
    text: "+234 806 430 5645",
    type: "whatsapp",
    link: "https://wa.me/2348064305645",
  },
  {
    icon: "/phone-icon.png",
    text: "+234 813 614 1666",
    type: "phone",
    link: "tel:+2348136141666",
  },
  {
    icon: "/email-icon.png",
    text: "contact@pearlawcorporate.com",
    type: "email",
    link: "mailto:contact@pearlawcorporate.com",
  },
]

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    icon: "/facebook-icon.png",
    url: "https://facebook.com",
    ariaLabel: "Visit our Facebook page",
  },
  {
    platform: "Instagram",
    icon: "/insta-icon.png",
    url: "https://instagram.com",
    ariaLabel: "Visit our Instagram profile",
  },
  {
    platform: "TikTok",
    icon: "/tiktok-icon.png",
    url: "https://tiktok.com",
    ariaLabel: "Visit our TikTok profile",
  },
]

export const practiceAreaLinks: string[] = [
  "Corporate & Securities",
  "Tech Law",
  "Estate Law",
  "Startups & MSME Law",
  "Company Governance",
  "Regulatory Compliance",
]

export const quickLinks: QuickLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Retainership", href: "/retainership" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

export const ctaBanner: CallToActionBanner = {
  heading: "ARE YOU LOOKING FOR SOMEONE TO HELP?",
  subheading: "Let us help you! Call Now : (234)813 614 1666",
  phone: "+234 813 614 1666",
  email: "contact@pearlawcorporate.com",
  hours: "Mon - Fri: 9:00AM - 6:00PM",
}

export const companyInfo = {
  name: "Pearlaw Corporate",
  logo: "/logo-white.png",
  tagline: "Protecting your rights with clarity, confidence, and experience.",
  copyright: "2025 Pearlaw Corporate. All rights reserved.",
}

export const leadAttorney = {
  name: "Pearl Eghimentor",
  title: "Principal Partner",
  image: "/ceo.jpg",
  credentials: [
    "Licensed Attorney at Law, Supreme Court of Nigeria",
    "Member, Nigerian Bar Association (NBA)",
    "Certified Mediator and Arbitrator",
  ],
  education: [
    "LL.B (Hons), University of Lagos",
    "BL, Nigerian Law School",
    "LL.M Corporate & Commercial Law, London School of Economics",
  ],
  specialties: ["Corporate Restructuring & M&A", "Technology & IP Law", "Regulatory Compliance", "Dispute Resolution"],
}

export const historyMilestones = [
  {
    icon: "TrendingUp",
    title: "PEARLAW FUNDED",
    description: "Established with a vision to provide exceptional legal services to our community.",
  },
  {
    icon: "Building2",
    title: "EXPANSION & GROWTH",
    description: "Expanded to 3 teams of 15 attorneys and opened our second office location.",
  },
  {
    icon: "Award",
    title: "RECOGNITION OF EXCELLENCE",
    description: "Received multiple industry awards and recognition for outstanding legal representation.",
  },
  {
    icon: "Laptop",
    title: "TECHNOLOGY INNOVATION",
    description: "Pioneered digital client services and modern case management systems.",
  },
]

export const aboutContent = {
  hero: {
    title: "About Pearlaw Corporate",
    subtitle: "STORY ABOUT OUR FIRM",
    backgroundImage: "/professional-law-firm-office-team-meeting.jpg",
  },
  history: {
    eyebrow: "ABOUT PEARLAW",
    title: "Our Gorgeous History",
    image: "/ornate-glass-ceiling-skylight-historic-building-ar.jpg",
    paragraphs: [
      "Founded with a commitment to excellence and integrity, Pearlaw Corporate has been serving clients with distinction for over two decades. Our team of experienced attorneys combines deep legal expertise with a client-first approach, ensuring that every case receives the attention and dedication it deserves.",
      "We believe in building lasting relationships based on trust, transparency, and results. Whether you're facing a complex litigation matter or need strategic legal counsel, Pearlaw Corporate is your partner in achieving the best possible outcome.",
    ],
  },
  mission: {
    icon: "Shield",
    title: "OUR MISSION",
    description:
      "To provide exceptional legal services with unwavering integrity, advocating fiercely for our clients while maintaining the highest ethical standards. We strive to deliver practical solutions that protect our client's interests and advance their goals.",
  },
  vision: {
    icon: "Eye",
    title: "OUR VISION",
    description:
      "To be recognized as the most trusted and innovative law firm, setting the standard for legal excellence and client service. We envision a future where justice is accessible, and every client receives personalized attention that leads to meaningful results.",
  },
}
