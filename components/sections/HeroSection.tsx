import { Button } from "../ui/button";
import { heroContent } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] lg:h-[772px] overflow-hidden">
    
      <Image
        src="/peerlawhero.jpg"
        alt="Pearlaw Corporate Background"
        fill
        priority
        className="object-cover"
      />

      
      <div className="absolute inset-0 bg-[#13192799]" />

      
      <div className="absolute z-10 flex flex-col w-full max-w-[800px] items-center gap-10 top-32 lg:top-40 left-1/2 -translate-x-1/2 px-6">
        <div className="flex flex-col items-center gap-7 w-full">
          <div className="flex flex-col items-center gap-8 lg:gap-10 w-full">
            <h2 className="font-montserrat font-medium text-white text-2xl lg:text-4xl text-center tracking-[0] leading-9 whitespace-nowrap">
              {heroContent.welcomeText}
            </h2>

            <h1 className="font-montserrat font-bold text-neutral-50 text-5xl lg:text-8xl text-center leading-tight lg:leading-[100px]">
              {heroContent.mainHeading}
            </h1>
          </div>

          <p className="font-montserrat font-semibold text-white text-sm lg:text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {heroContent.subheading}
          </p>
        </div>

        <Button asChild className="bg-gradient-to-br from-brand-orange-gradient-start to-brand-orange-gradient-end hover:opacity-90 rounded px-7 py-3.5 gap-2">
          <Link href="/retainership">
            <span className="font-montserrat font-semibold text-brand-light text-xs tracking-[0] leading-[14px]">
              {heroContent.ctaText}
            </span>
            <div className="relative w-3.5 h-3.5">
              <Image
                src="/arrow-right.png"
                alt="Arrow"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </Button>
      </div>
    </section>
  );
}