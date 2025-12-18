"use client"

import { useState, useEffect } from "react"
import { PageHero } from "@/components/ui/page-hero"
import { BlogCard } from "@/components/sections/BlogCard"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"

interface PayloadPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: any
  featuredImage: string
  category: string
  author: string
  publishedAt: string
  readTime: number
  status: string
  createdAt: string
  updatedAt: string
}

function transformPost(post: PayloadPost) {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    image: post.featuredImage,
    category: post.category,
    author: post.author,
    date: new Date(post.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    readTime: `${post.readTime} min read`,
    tags: [post.category.toLowerCase().replace(/\s+/g, "-")],
  }
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts")
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        const transformedPosts = data.map(transformPost)
        setPosts(transformedPosts)
        setLoading(false)
      } catch (err) {
        console.error("[v0] Error fetching posts:", err)
        setError("Failed to load blog posts")
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter((post) => {
    const categoryMatch = !selectedCategory || post.category === selectedCategory
    const tagsMatch = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))
    return categoryMatch && tagsMatch
  })

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-light">
      <Navbar />

      <PageHero title="Our Blog" subtitle="INSIGHTS AND LEGAL PERSPECTIVES" />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <h3 className="font-montserrat font-bold text-brand-text text-lg">Recent Articles</h3>

                <div className="flex flex-col gap-4">
                  {loading ? (
                    <p className="font-inter text-sm text-brand-text-muted">Loading...</p>
                  ) : (
                    posts.slice(0, 4).map((post) => (
                      <div
                        key={post.id}
                        className="flex gap-3 pb-4 border-b border-gray-200 last:border-0 cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <div
                            className="w-full h-full bg-cover bg-center rounded"
                            style={{ backgroundImage: `url(${post.image})` }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-montserrat font-semibold text-brand-text text-sm leading-[18px] line-clamp-2">
                            {post.title}
                          </p>
                          <p className="font-inter font-normal text-brand-text-muted text-xs mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="font-montserrat font-bold text-brand-text text-lg">Tags</h3>

                <div className="flex flex-wrap gap-2">
                  {/* Assuming blogTags will be fetched from API in future updates */}
                  {["legal", "insights", "technology"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-4 py-2 rounded-full font-montserrat font-medium text-xs transition-all ${
                        selectedTags.includes(tag)
                          ? "bg-brand-orange text-white"
                          : "bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/20"
                      }`}
                    >
                      {tag.replace("-", " ").toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h3 className="font-montserrat font-bold text-brand-text text-lg">Categories</h3>

                <div className="flex flex-col gap-3">
                  {/* Assuming blogCategories will be fetched from API in future updates */}
                  {["Law", "Technology", "Business"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className={`px-4 py-2 rounded-lg text-left font-montserrat font-medium text-sm transition-all ${
                        selectedCategory === category
                          ? "bg-brand-orange text-white"
                          : "bg-gray-100 text-brand-text hover:bg-gray-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 bg-brand-orange rounded-lg">
                <h3 className="font-montserrat font-bold text-white text-base">Subscribe to Updates</h3>
                <p className="font-inter font-normal text-white/80 text-sm">
                  Get the latest articles and legal insights delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 text-white placeholder:text-white/50 font-dm-sans text-sm focus:outline-none"
                />
                <button className="w-full px-4 py-2 bg-white text-brand-orange font-montserrat font-semibold text-sm rounded hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="font-inter font-normal text-brand-text-muted text-lg">Loading blog posts...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="font-inter font-normal text-red-500 text-lg">{error}</p>
                <p className="font-inter font-normal text-brand-text-muted text-sm mt-2">
                  Please make sure Payload CMS is configured correctly.
                </p>
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <p className="font-inter font-normal text-brand-text-muted text-lg">
                  No articles found with the selected filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
