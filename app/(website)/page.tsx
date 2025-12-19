import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PracticeAreasSection } from "@/components/sections/PracticeAreasSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";

export default function Home() {
  return (
    <div className="bg-brand-light w-full min-h-screen flex flex-col">
      <Navbar />

      <main className="w-full flex flex-col items-center">
        <HeroSection />

        <div className="w-full flex flex-col items-center gap-20 py-20">
          <PracticeAreasSection />
        </div>

        <div className="w-full flex flex-col items-start gap-[140px]">
          <div className="flex flex-col items-center gap-20 w-full">
            <StatisticsSection />
            <ContactFormSection />
          </div>

          <div className="flex flex-col items-start gap-[120px] w-full">
            <TeamSection />
            <TestimonialSection />
            <BlogSection />
            <CTABannerSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
