import { Button } from "../ui/button";
import { heroContent } from "@/lib/mock-data";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] lg:h-[772px] bg-gradient-to-b from-brand-dark via-brand-dark/90 to-brand-dark overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      </div>
      <div className="flex flex-col w-full max-w-[800px] items-center gap-10 absolute top-32 lg:top-40 left-1/2 -translate-x-1/2 px-6">
        <div className="flex flex-col items-center gap-7 w-full">
          <div className="flex flex-col items-center gap-8 lg:gap-10 w-full">
            <h2 className="font-montserrat font-medium text-white text-2xl lg:text-4xl text-center tracking-[0] leading-9 whitespace-nowrap">
              {heroContent.welcomeText}
            </h2>

            <h1 className="font-montserrat font-bold text-neutral-50 text-5xl lg:text-8xl text-center leading-tight lg:leading-[100px]">
              {heroContent.mainHeading}
            </h1>
          </div>

          <p className="font-montserrat font-semibold text-white text-sm lg:text-base text-center tracking-[0] leading-6 max-w-2xl">
            {heroContent.subheading}
          </p>
        </div>

        <Button className="bg-gradient-to-br from-brand-orange-gradient-start to-brand-orange-gradient-end hover:opacity-90 rounded px-7 py-3.5 gap-2">
          <span className="font-montserrat font-semibold text-brand-light text-xs tracking-[0] leading-[14px]">
            {heroContent.ctaText}
          </span>
          <div className="relative w-3.5 h-3.5">
            <Image
              src="/prime-arrow-right.svg"
              alt="Arrow"
              fill
              className="object-contain"
            />
          </div>
        </Button>
      </div>
    </section>
  );
}
