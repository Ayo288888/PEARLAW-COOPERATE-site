import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { BlogPost } from "@/lib/blog-mock";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="w-full h-auto bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="flex flex-col items-center gap-6 p-0">
        <div
          className="w-full h-[250px] lg:h-[300px] bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${post.image})` }}
        />

        <div className="flex flex-col w-full px-6 lg:px-7 items-start gap-4 pb-6">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-block px-3 py-1 bg-brand-orange/10 rounded text-brand-orange font-montserrat font-medium text-xs">
              {post.category}
            </span>
            <span className="font-inter font-normal text-brand-text-muted text-xs">
              {post.readingTime} min read
            </span>
          </div>

          <h3 className="font-montserrat font-semibold text-brand-text text-lg tracking-tight leading-[26px]">
            {post.title}
          </h3>

          <p className="font-inter font-normal text-brand-text-muted text-sm leading-[20px]">
            {post.excerpt}
          </p>

          <div className="w-full pt-2 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-inter font-normal text-brand-text-muted text-xs">
                  {post.date}
                </span>
                <span className="text-brand-text-muted">•</span>
                <span className="font-inter font-normal text-brand-text-muted text-xs">
                  By {post.author}
                </span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="text-brand-orange hover:text-brand-orange-dark font-montserrat font-semibold text-xs transition-colors"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
