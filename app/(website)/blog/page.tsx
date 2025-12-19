// app/(website)/blog/page.tsx

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/blog-mock";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="bg-brand-light w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex-col items-center flex-grow">
         {/* Hero Section */}
         <section className="relative w-full h-[300px] flex items-center justify-center bg-brand-dark">
            <div className="relative z-10 text-center px-6">
                <h1 className="font-montserrat font-bold text-white text-4xl lg:text-5xl">Our Blog</h1>
                <p className="font-inter text-white/80 text-lg mt-4">Latest legal insights, news, and updates</p>
            </div>
         </section>

         {/* Blog Grid */}
         <section className="w-full max-w-[1280px] px-6 lg:px-20 py-20 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.id} className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full">
                        <div className="relative h-56 w-full">
                            <Image 
                                src={post.image} 
                                alt={post.title} 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-xs text-brand-orange font-medium mb-3">
                                <span>{post.category}</span>
                                <span className="text-brand-text-muted">•</span>
                                <span className="text-brand-text-muted">{post.date}</span>
                            </div>
                            <h3 className="font-montserrat font-semibold text-brand-text text-xl mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="font-inter text-brand-text-muted text-sm line-clamp-3 mb-4 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                <span className="text-xs text-brand-text-muted font-medium">By {post.author}</span>
                                <span className="text-xs text-brand-text-muted">{post.readingTime} min read</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
         </section>
      </main>
      <Footer />
    </div>
  );
}
