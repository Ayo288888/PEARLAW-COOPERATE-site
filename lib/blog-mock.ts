export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
  commentCount: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-is-mediation-useful-in-family-law-cases',
    title: 'How Is Mediation Useful in Family Law Cases?',
    excerpt:
      'Explore the benefits of mediation in resolving family law disputes with minimal conflict and cost.',
    content: `Mediation is a powerful tool in family law that helps resolve disputes without the need for costly litigation.

    In this comprehensive guide, we examine how mediation can save time, money, and emotional strain while reaching fair agreements on custody, support, and asset division. Our experienced mediators at Pearlaw Corporate guide families through the process with compassion and expertise.`,
    image: '/blog-1.jpg',
    author: 'Adam Ekong',
    date: 'Feb 26, 2025',
    category: 'Family Law',
    tags: ['mediation', 'family-law', 'dispute-resolution'],
    readingTime: 5,
    commentCount: 8,
  },
  {
    id: '2',
    slug: 'understand-your-legal-right-in-domestic-violence',
    title: 'Understand Your Legal Right in Domestic Violence',
    excerpt: 'Understanding your legal rights is the first step toward safety and justice.',
    content: `Domestic violence is a serious issue that requires proper legal intervention. Learn about protective orders, evidence collection, and your rights throughout the legal process.`,
    image: '/blog-2.jpg',
    author: 'Adamu Julius',
    date: 'Feb 24, 2025',
    category: 'Criminal Law',
    tags: ['domestic-violence', 'protective-orders', 'safety'],
    readingTime: 6,
    commentCount: 12,
  },
  {
    id: '3',
    slug: 'a-legal-guide-to-child-support-parental-responsibilities',
    title: 'A Legal Guide to Child Support and Parental Responsibilities',
    excerpt:
      'Navigate child support obligations and understand your parental rights and responsibilities.',
    content: `Child support is a critical aspect of family law that ensures children receive financial support from both parents. This guide covers calculation methods, modification procedures, and enforcement mechanisms.`,
    image: '/blog-3.jpg',
    author: 'Tony Patra',
    date: 'Feb 22, 2025',
    category: 'Family Law',
    tags: ['child-support', 'parental-rights', 'family-law'],
    readingTime: 7,
    commentCount: 5,
  },
  {
    id: '4',
    slug: 'navigating-cruise-ship-contractual-claim-restrictions',
    title: 'Navigating Cruise Ship Contractual Claim Restrictions',
    excerpt:
      'Understanding liability waivers and contractual limitations in cruise ship incidents.',
    content: `Cruise ship contracts often contain complex liability limitations. Learn how to navigate these restrictions and protect your rights if you suffer injury or loss while at sea.`,
    image: '/blog-4.jpg',
    author: 'Sarah Mitchell',
    date: 'Feb 20, 2025',
    category: 'Commercial Law',
    tags: ['contracts', 'maritime-law', 'liability'],
    readingTime: 8,
    commentCount: 3,
  },
  {
    id: '5',
    slug: 'the-role-of-attorneys-in-domestic-abuse-cases',
    title: 'The Role of Attorneys in Domestic Abuse Cases',
    excerpt:
      'How legal professionals can provide support and protection for victims of domestic abuse.',
    content: `Our attorneys play a crucial role in protecting domestic abuse victims through legal action, protective orders, and representation in court proceedings.`,
    image: '/blog-5.jpg',
    author: 'Grace Okonkwo',
    date: 'Feb 18, 2025',
    category: 'Criminal Law',
    tags: ['domestic-abuse', 'victim-protection', 'legal-support'],
    readingTime: 6,
    commentCount: 7,
  },
  {
    id: '6',
    slug: 'the-role-of-family-courts-in-child-protection',
    title: 'The Role of Family Courts in Child Protection and Welfare',
    excerpt:
      'Understanding how family courts prioritize and implement child welfare decisions.',
    content: `Family courts operate with the paramount principle of acting in the best interest of the child. This article explores their role in custody decisions, abuse investigations, and welfare protection.`,
    image: '/blog-6.jpg',
    author: 'James Chen',
    date: 'Feb 16, 2025',
    category: 'Family Law',
    tags: ['family-courts', 'child-welfare', 'custody'],
    readingTime: 7,
    commentCount: 4,
  },
  {
    id: '7',
    slug: 'corporate-compliance-strategies-for-2025',
    title: 'Corporate Compliance Strategies for 2025',
    excerpt:
      'Stay ahead of regulatory changes with comprehensive corporate compliance strategies.',
    content: `Modern corporations face increasingly complex regulatory requirements. Our guide covers the latest compliance strategies, risk management, and best practices for corporate governance.`,
    image: '/blog-7.jpg',
    author: 'David Mensah',
    date: 'Feb 14, 2025',
    category: 'Corporate Law',
    tags: ['compliance', 'corporate-governance', 'regulations'],
    readingTime: 9,
    commentCount: 6,
  },
  {
    id: '8',
    slug: 'intellectual-property-protection-for-startups',
    title: 'Intellectual Property Protection for Startups',
    excerpt:
      'Essential IP strategies to protect your startup innovation and competitive advantage.',
    content: `Startups must prioritize intellectual property protection from day one. Learn about patents, trademarks, copyrights, and trade secrets in this comprehensive startup IP guide.`,
    image: '/blog-8.jpg',
    author: 'Chioma Eze',
    date: 'Feb 12, 2025',
    category: 'Tech Law',
    tags: ['intellectual-property', 'startups', 'innovation'],
    readingTime: 8,
    commentCount: 9,
  },
];

export const blogTags = [
  'mediation',
  'family-law',
  'domestic-violence',
  'child-support',
  'contracts',
  'maritime-law',
  'victim-protection',
  'family-courts',
  'compliance',
  'corporate-governance',
  'intellectual-property',
  'startups',
  'innovation',
  'regulations',
  'personal-injury',
];

export const blogCategories = [
  'Family Law',
  'Criminal Law',
  'Commercial Law',
  'Corporate Law',
  'Tech Law',
];
