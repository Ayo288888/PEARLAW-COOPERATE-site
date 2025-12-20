import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Zap, Clock, MessageSquare, User } from "lucide-react";
import { getPayload } from "payload";
import config from "@payload-config";

// Specific data from CSS for the sidebar
const tags = [
  "ANTITRUST",
  "BANKRUPTCY",
  "EMPLOYMENT",
  "FAMILY",
  "GENERAL PRACTICE",
  "IMMIGRATION",
  "LAW",
  "NONPROFIT",
  "PERSONAL INJURY",
  "PROPERTY",
];

const practiceAreasList = [
  "Corporate & Commercial",
  "Startups & MSME Law",
  "Tech Law",
  "Real Estate Law",
  "Regulatory Compliance",
  "Company Governance",
];

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const { docs: posts } = await payload.find({
    collection: "posts",
    where: {
      status: {
        equals: "published",
      },
    },
    sort: "-publishedAt",
    depth: 1,
  });

  const formattedCmsPosts = posts
    .filter((post: any) => post.slug) // Only show posts that have a slug
    .map((post: any) => ({
    id: `cms-${post.id}`,
    slug: post.slug,
    image: typeof post.featuredImage === 'string' ? post.featuredImage : post.featuredImage?.url || "/peerlawhero.jpg",
    title: post.title,
    excerpt: post.excerpt,
    date: new Date(post.publishedAt), // Keep as Date object for sorting
    author: typeof post.author === 'string' ? post.author : post.author?.name || post.author?.email || "Pearlaw Team",
    commentCount: 0, // Placeholder as comments are not in CMS yet
    readTime: post.readTime,
  }));

  // Combine and sort all posts
  const allPosts = [...formattedCmsPosts]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .map(post => ({
        ...post,
        // Now format the date for display
        date: post.date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }),
    }));

  
  const stickyPost = allPosts[0];
  const otherPosts = allPosts.slice(1);
  const recentArticles = allPosts.slice(0, 3);

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F1F2F6]">
      <Navbar />

      <main className="flex-col items-center w-full relative">
        {/* Hero Section */}
        <section className="relative w-full h-[276px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/peerlawhero.jpg" // Using a placeholder based on context, replace with specific image if needed
              alt="Blog Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-[17px] px-4">
            <h1 className="font-montserrat font-bold text-[28px] md:text-[36px] leading-tight md:leading-[40px] text-white text-center capitalize">
              Blog
            </h1>
            <p className="font-montserrat font-bold text-[16px] md:text-[20px] leading-[20px] md:leading-[24px] text-white/80 text-center uppercase">
              Insights and Legal Perspectives
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="w-full max-w-[1200px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start gap-10">
            
            {/* Left Column: Blog Feed */}
            <div className="flex flex-col gap-8 w-full lg:w-[58%] shrink-0">
              
              {/* Sticky Post */}
              {stickyPost && (
              <div className="w-full bg-white rounded-[4px] overflow-hidden shadow-sm relative group">
                <div className="relative w-full aspect-[16/10]">
                  <Image
                    src={stickyPost.image}
                    alt={stickyPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131927]/20 to-[#131927]/20" />
                  
                  {/* Sticky Badge */}
                  <div className="absolute bottom-[20px] md:bottom-[73px] left-0 w-[160px] md:w-[217px] h-[50px] md:h-[73px] bg-[#F1F2F6] flex items-center justify-center rounded-tr-[4px]">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5 flex items-center justify-center">
                         <Zap className="w-5 h-5 text-[#C84E26] fill-[#C84E26]" />
                      </div>
                      <span className="font-montserrat font-bold text-[16px] leading-[20px] text-[#C84E26] uppercase">
                        STICKY POST
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-[30px] pt-[40px] flex flex-col gap-[24px]">
                  <div className="flex flex-col gap-[28px]">
                    <h2 className="font-montserrat font-semibold text-[24px] leading-[28px] text-[#2B2B2B] capitalize">
                      {stickyPost.title}
                    </h2>
                    <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#2B2B2B]/70 line-clamp-3">
                      {stickyPost.excerpt}
                    </p>
                  </div>

                  {/* Meta Data */}
                  <div className="flex flex-wrap items-center gap-[18px] text-[#2B2B2B]/80">
                    <div className="flex items-center gap-2">
                        <Clock className="w-[18px] h-[18px]" />
                        <span className="font-inter font-normal text-[14px] leading-[18px]">
                            {stickyPost.date}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-semibold text-[14px] text-[#2B2B2B]">.</span>
                        <User className="w-[18px] h-[18px]" />
                        <span className="font-montserrat font-normal text-[14px] leading-[18px]">
                            {stickyPost.author}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-montserrat font-semibold text-[14px] text-[#2B2B2B]">.</span>
                        <MessageSquare className="w-[18px] h-[18px]" />
                        <span className="font-montserrat font-normal text-[14px] leading-[18px]">
                            {stickyPost.commentCount} comments
                        </span>
                    </div>
                  </div>

                  {/* Button */}
                  <Link href={`/blog/${stickyPost.slug}`} className="mt-4">
                    <div className="flex items-center justify-center w-[113px] h-[46px] bg-[#C84E26] rounded-[4px] hover:bg-[#a83f1e] transition-colors">
                        <span className="font-montserrat font-medium text-[14px] text-[#F1F2F6]">
                            Read More
                        </span>
                    </div>
                  </Link>
                </div>
              </div>
              )}

              {/* Other Posts */}
              {otherPosts.map((post) => (
                <div key={post.id} className="w-full bg-white rounded-[4px] overflow-hidden shadow-sm relative group">
                    <div className="relative w-full aspect-[16/10]">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="p-[30px] pt-[40px] flex flex-col gap-[24px]">
                        <div className="flex flex-col gap-[28px]">
                            <h2 className="font-montserrat font-semibold text-[24px] leading-[32px] text-[#2B2B2B] capitalize">
                                {post.title}
                            </h2>
                            <p className="font-montserrat font-normal text-[16px] leading-[24px] text-[#2B2B2B]/70 line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Meta Data */}
                        <div className="flex flex-wrap items-center gap-[18px] text-[#2B2B2B]/80">
                            <div className="flex items-center gap-2">
                                <Clock className="w-[18px] h-[18px]" />
                                <span className="font-inter font-normal text-[14px] leading-[18px]">
                                    {post.date}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-montserrat font-semibold text-[14px] text-[#2B2B2B]">.</span>
                                <User className="w-[18px] h-[18px]" />
                                <span className="font-montserrat font-normal text-[14px] leading-[18px]">
                                    {post.author}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-montserrat font-semibold text-[14px] text-[#2B2B2B]">.</span>
                                <MessageSquare className="w-[18px] h-[18px]" />
                                <span className="font-montserrat font-normal text-[14px] leading-[18px]">
                                    {post.commentCount} comments
                                </span>
                            </div>
                        </div>

                        {/* Button */}
                        <Link href={`/blog/${post.slug}`} className="mt-4">
                            <div className="flex items-center justify-center w-[113px] h-[46px] bg-[#C84E26] rounded-[4px] hover:bg-[#a83f1e] transition-colors">
                                <span className="font-montserrat font-medium text-[14px] text-[#F1F2F6]">
                                    Read More
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
              ))}

            </div>

            {/* Right Column: Sidebar */}
            <aside className="flex flex-col gap-10 w-full lg:w-[38%] shrink-0">
              
              {/* Recent Articles Widget */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-[18px]">
                    <div className="w-[40px] h-0 border-[3.5px] border-[#C84E26] rotate-180" />
                    <h3 className="font-montserrat font-semibold text-[24px] leading-[28px] text-[#2B2B2B] capitalize">
                        Recent Articles
                    </h3>
                </div>

                <div className="flex flex-col gap-6">
                    {recentArticles.map((article) => (
                        <Link href={`/blog/${article.slug}`} key={article.id} className="flex flex-row gap-6 group">
                            <div className="relative w-[120px] h-[100px] shrink-0 rounded-[4px] overflow-hidden">
                                <Image 
                                    src={article.image} 
                                    alt={article.title} 
                                    fill 
                                    className="object-cover transition-transform group-hover:scale-105" 
                                />
                            </div>
                            <div className="flex flex-col gap-[16px] justify-center">
                                <h4 className="font-montserrat font-semibold text-[18px] leading-[24px] text-[#2B2B2B] line-clamp-2 group-hover:text-[#C84E26] transition-colors">
                                    {article.title}
                                </h4>
                                <div className="flex items-center gap-[28px] text-[#2B2B2B]/80">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-[18px] h-[18px]" />
                                        <span className="font-inter font-normal text-[14px] leading-[18px]">
                                            {article.date}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-[18px] h-[18px]" />
                                        <span className="font-montserrat font-normal text-[14px] leading-[18px]">
                                            {article.author}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
              </div>

              {/* Tags Widget */}
              <div className="flex flex-col gap-8">
                <h3 className="font-montserrat font-semibold text-[24px] leading-[28px] text-[#2B2B2B] capitalize">
                    Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                        <span 
                            key={tag} 
                            className="flex items-center justify-center px-4 py-2 bg-[#C84E26]/80 rounded-[4px] font-montserrat font-semibold text-sm text-[#FEFEFE] text-center capitalize cursor-default hover:bg-[#C84E26] transition-colors"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
