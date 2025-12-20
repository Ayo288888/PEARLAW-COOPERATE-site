import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import { Clock, User, MessageSquare } from "lucide-react";

const tags = [
  "ANTITRUST", "BANKRUPTCY", "EMPLOYMENT", "FAMILY",
  "GENERAL PRACTICE", "IMMIGRATION", "LAW", "NONPROFIT",
  "PERSONAL INJURY", "PROPERTY",
];

const practiceAreasList = [
  "Corporate & Commercial",
  "Startups & MSME Law",
  "Tech Law",
  "Real Estate Law",
  "Regulatory Compliance",
  "Company Governance",
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug); // Handle spaces like "understanding%20law"
  
  const payload = await getPayload({ config });

  // Fetch the specific post by slug
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: decodedSlug,
      },
      status: {
        equals: "published",
      },
    },
    limit: 1,
    depth: 2,
  });

  const post = posts[0];

  if (!post) {
    console.error(`Blog post not found for slug: "${decodedSlug}"`); // Check your terminal for this log
    return notFound();
  }

  // Fetch recent posts for sidebar (excluding current post)
  const { docs: recentPostsRaw } = await payload.find({
    collection: "posts",
    where: {
      slug: { not_equals: decodedSlug },
      status: { equals: "published" },
    },
    sort: "-publishedAt",
    limit: 3,
    depth: 1,
  });

  // Format data safely
  const imageUrl = typeof post.featuredImage === 'string' 
    ? post.featuredImage 
    : (post.featuredImage as any)?.url || "/peerlawhero.jpg";

  const authorName = typeof post.author === 'string' 
    ? post.author 
    : (post.author as any)?.name || (post.author as any)?.email || "Pearlaw Team";

  const publishDate = new Date(post.publishedAt as string).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const recentArticles = recentPostsRaw.map((p: any) => ({
    id: p.id,
    title: p.title,
    slug: p.slug,
    image: typeof p.featuredImage === 'string' ? p.featuredImage : p.featuredImage?.url || "/peerlawhero.jpg",
    date: new Date(p.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    author: typeof p.author === 'string' ? p.author : p.author?.name || p.author?.email || "Pearlaw Team",
  }));

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F1F2F6]">
      <Navbar />

      <main className="flex-col items-center w-full relative">
        {/* Hero Section with Post Image */}
        <section className="relative w-full h-[276px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/peerlawhero.jpg" // Using generic hero bg as per design, or use imageUrl if preferred
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-[18px] px-4 max-w-[804px] text-center">
            <h1 className="font-montserrat font-bold text-[28px] md:text-[36px] leading-tight md:leading-[40px] text-white capitalize">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-[18px] text-white/80">
                <span className="font-montserrat font-semibold text-sm md:text-[16px] leading-[18px]">
                    {publishDate}
                </span>
                
                <div className="flex items-center gap-2">
                    <span className="font-montserrat font-semibold text-[14px] text-white">.</span>
                    <span className="font-montserrat font-semibold text-sm md:text-[16px] leading-[18px]">
                        {authorName}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="font-montserrat font-semibold text-[14px] text-white">.</span>
                    <span className="font-montserrat font-semibold text-sm md:text-[16px] leading-[18px]">
                        0 comments
                    </span>
                </div>
            </div>
          </div>
        </section>

        {/* Main Content & Sidebar Container */}
        <section className="w-full max-w-[1282px] mx-auto px-4 py-10 md:py-16 flex flex-col xl:flex-row gap-10 xl:gap-[59px]">
            
            {/* Left Column: Blog Content */}
            <div className="w-full xl:w-[630px] shrink-0 flex flex-col gap-[28px]">
                {/* Featured Image */}
                <div className="relative w-full h-[250px] sm:h-[350px] md:h-[514px] rounded-[4px] overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Rich Text Content */}
                <div className="w-full flex flex-col gap-[28px]">
                    {post.content && (post.content as any).root ? (
                    serializeLexical((post.content as any).root.children)
                    ) : (
                    <div dangerouslySetInnerHTML={{ __html: (post.content as unknown as string) || "No content found." }} />
                    )}
                </div>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="w-full xl:w-[593px] shrink-0 flex flex-col gap-10 md:gap-[60px]">
                
                {/* Recent Articles Widget */}
                <div className="flex flex-col gap-[40px]">
                    <div className="flex flex-col gap-[18px]">
                        <div className="w-[40px] h-0 border-[3.5px] border-[#C84E26] rotate-180" />
                        <h3 className="font-montserrat font-semibold text-[24px] leading-[28px] text-[#2B2B2B] capitalize">
                            Recent Articles
                        </h3>
                    </div>

                    <div className="flex flex-col gap-[24px]">
                        {recentArticles.map((article: any) => (
                            <Link href={`/blog/${article.slug}`} key={article.id} className="flex flex-row gap-4 md:gap-[40px] group">
                                <div className="relative w-[100px] h-[80px] md:w-[139px] md:h-[120px] shrink-0 rounded-[8px] overflow-hidden">
                                    <Image 
                                        src={article.image} 
                                        alt={article.title} 
                                        fill 
                                        className="object-cover transition-transform group-hover:scale-105" 
                                    />
                                </div>
                                <div className="flex flex-col gap-[16px] justify-center">
                                    <h4 className="font-montserrat font-semibold text-[16px] md:text-[18px] leading-[22px] md:leading-[24px] text-[#2B2B2B] line-clamp-2 group-hover:text-[#C84E26] transition-colors">
                                        {article.title}
                                    </h4>
                                    <div className="flex items-center gap-[28px] text-[#2B2B2B]/80">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-[18px] h-[18px]" />
                                            <span className="font-inter font-normal text-[14px] leading-[18px]">
                                                {article.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Tags Widget */}
                <div className="flex flex-col gap-[40px]">
                    <h3 className="font-montserrat font-semibold text-[24px] leading-[28px] text-[#2B2B2B] capitalize">
                        Tags
                    </h3>
                    <div className="flex flex-wrap gap-[18px]">
                        {tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="flex items-center justify-center px-[16px] py-[10px] md:px-[20px] md:py-[14px] bg-[#C84E26]/80 rounded-[4px] font-montserrat font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#FEFEFE] text-center capitalize cursor-default hover:bg-[#C84E26] transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Practice Areas Widget */}
                <div className="flex flex-col gap-[28px]">
                    <h3 className="font-montserrat font-semibold text-[24px] leading-[28px] text-[#2B2B2B] capitalize">
                        Practice Areas
                    </h3>
                    <div className="flex flex-col gap-[20px]">
                        {practiceAreasList.map((area, index) => (
                            <div key={index} className="flex flex-col gap-[20px] group cursor-pointer">
                                <div className="flex items-center gap-[18px]">
                                    <div className="w-[24px] h-0 border-[1px] border-[#2B2B2B] rotate-90" />
                                    <span className="font-montserrat font-medium text-[18px] leading-[24px] text-[#2B2B2B] capitalize group-hover:text-[#C84E26] transition-colors">
                                        {area}
                                    </span>
                                </div>
                                {index !== practiceAreasList.length - 1 && (
                                    <div className="w-full h-px border-t border-[#969595]/30" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Helper function to serialize Lexical Rich Text nodes to JSX
function serializeLexical(nodes: any): any {
  if (!Array.isArray(nodes)) return null;

  return nodes.map((node: any, index: number) => {
    if (node.type === 'text') {
      let text = <span key={index}>{node.text}</span>;
      // Bitmask checks for formatting
      if (node.format & 1) text = <strong key={index}>{text}</strong>; // Bold
      if (node.format & 2) text = <em key={index}>{text}</em>; // Italic
      if (node.format & 8) text = <u key={index}>{text}</u>; // Underline
      if (node.format & 4) text = <s key={index}>{text}</s>; // Strikethrough
      if (node.format & 16) text = <code key={index} className="bg-gray-100 px-1 rounded">{text}</code>; // Code
      return text;
    }

    if (!node) return null;

    switch (node.type) {
      case 'paragraph':
        return (
          <p key={index} className="font-inter font-normal text-[16px] md:text-[20px] leading-[26px] md:leading-[30px] text-[#2B2B2B]/80 break-words">
            {serializeLexical(node.children)}
          </p>
        );
      case 'heading':
        const Tag = (node.tag || 'h2') as React.ElementType;
        const headingClasses: Record<string, string> = {
            h1: "font-montserrat font-semibold text-[24px] md:text-[30px] leading-[30px] md:leading-[36px] text-[#2B2B2B] capitalize break-words",
            h2: "font-montserrat font-semibold text-[20px] md:text-[24px] leading-[26px] md:leading-[28px] text-[#2B2B2B] capitalize break-words",
            h3: "font-montserrat font-semibold text-[18px] md:text-[22px] leading-[24px] md:leading-[26px] text-[#2B2B2B] capitalize break-words",
            h4: "text-lg font-bold text-[#2B2B2B] break-words",
            h5: "text-base font-bold text-[#2B2B2B] break-words",
            h6: "text-sm font-bold text-[#2B2B2B] break-words",
        };
        return <Tag key={index} className={headingClasses[node.tag as string] || headingClasses.h2}>{serializeLexical(node.children)}</Tag>;
      
      case 'list':
        const ListTag = node.tag === 'ol' ? 'ol' : 'ul';
        return (
            <ListTag key={index} className={`pl-6 ${node.tag === 'ol' ? 'list-decimal' : 'list-disc'}`}>
                {serializeLexical(node.children)}
            </ListTag>
        );
      case 'listitem':
        return <li key={index} className="mb-2 pl-1">{serializeLexical(node.children)}</li>;
      
      case 'link':
        return (
            <a 
                key={index} 
                href={node.fields?.url || node.url} 
                target={node.fields?.newTab ? '_blank' : '_self'}
                className="text-[#C84E26] hover:underline font-medium"
                rel="noopener noreferrer"
            >
                {serializeLexical(node.children)}
            </a>
        );
        
      default:
        return <div key={index}>{serializeLexical(node.children)}</div>;
    }
  });
}
