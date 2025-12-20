import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { blogArticles } from "@/lib/mock-data";
import Link from "next/link";

export function BlogSection() {
  return (
    <section className="flex flex-col w-full max-w-[1280px] items-center gap-[60px] px-6 lg:px-4 mx-auto mb-20 lg:mb-[120px]">
      <div className="flex flex-col items-center gap-[60px] w-full">
        <div className="flex flex-col w-full max-w-[343px] items-center gap-[18px]">
          <div className="flex flex-col items-center gap-6 w-full">
            <p className="font-montserrat font-semibold text-brand-text/60 text-base text-center tracking-[0] leading-[18px]">
              OUR BLOGS
            </p>

            <h2 className="font-inter font-semibold text-brand-text text-2xl lg:text-[32px] text-center tracking-[0] leading-9 whitespace-nowrap">
              Recent Articles
            </h2>
          </div>

          <Image src="/line-45.png" alt="Divider" width={2} height={38} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px] w-full">
          {blogArticles.map((article) => (
            <Card
              key={article.id}
              className="w-full h-auto lg:h-[574px] bg-white rounded-lg overflow-hidden"
            >
              <CardContent className="flex flex-col items-center gap-[60px] p-0">
                <div
                  className="w-full h-[250px] lg:h-[348px] rounded-[8px_8px_0px_0px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${article.image})` }}
                />

                <div className="flex flex-col w-full px-6 lg:px-[28px] items-start gap-5 pb-[60px]">
                  <h3 className="font-montserrat font-semibold text-brand-text text-lg lg:text-xl tracking-[0] leading-[30px]">
                    {article.title}
                  </h3>

                  <div className="justify-center gap-[18px] inline-flex items-center flex-wrap">
                    <span className="font-inter font-normal text-brand-text-muted text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                      {article.date}
                    </span>

                    <div className="gap-1.5 inline-flex items-center">
                      <span className="font-montserrat font-semibold text-brand-text text-sm text-center tracking-[0] leading-[18px]">
                        .
                      </span>

                      <span className="font-montserrat font-normal text-brand-text-muted text-sm leading-[18px] tracking-[0] whitespace-nowrap">
                        {article.author}
                      </span>
                    </div>

                    <div className="gap-1.5 inline-flex items-center">
                      <span className="font-montserrat font-semibold text-brand-text text-sm text-center tracking-[0] leading-[18px]">
                        .
                      </span>

                      <span className="font-montserrat font-normal text-brand-text-muted text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                        {article.commentCount} comment
                        {article.commentCount !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button asChild className="flex w-[179px] h-[50px] items-center justify-center px-2.5 py-[18px] bg-brand-orange rounded hover:bg-brand-orange-dark">
        <Link href="/blog">
          <span className="w-fit font-montserrat font-medium text-brand-light text-xs tracking-[0] leading-[14px] whitespace-nowrap">
            Read the Blog
          </span>

          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </Button>
    </section>
  );
}
