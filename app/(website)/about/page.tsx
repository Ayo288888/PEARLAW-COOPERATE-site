import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { aboutContent, historyMilestones } from "@/lib/mock-data";
import { Target, Eye, TrendingUp, Building2, Award, Laptop, ArrowRight } from "lucide-react";

// Helper to map icon strings from mock data to Lucide components
const IconMap: Record<string, any> = {
  TrendingUp: TrendingUp,
  Building2: Building2,
  Award: Award,
  Laptop: Laptop,
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F1F2F6]">
      <Navbar />

      <main className="flex-col items-center w-full relative">
        {/* Hero Section */}
        <section className="relative w-full h-[276px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={'/aboutus.jpg'}
              alt="About Hero"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay to ensure text readability if needed, though CSS didn't explicitly specify one for this section, usually implied by white text */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-[17px] px-4">
            <h1 className="font-montserrat font-bold text-[36px] leading-[40px] text-[#FEFEFE] text-center capitalize">
              About Pearlaw corporate
            </h1>
            <p className="font-montserrat font-bold text-[20px] leading-[24px] text-[#FEFEFE]/80 text-center uppercase">
              Story about our firm
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-[120px] flex flex-col gap-[120px]">
          <div className="flex flex-col lg:flex-row items-center gap-[60px]">
            {/* Image */}
            <div className="relative w-full lg:w-[529px] h-[488px] rounded-[6px] overflow-hidden shrink-0 shadow-lg">
              <Image
                src={'/historyimage.jpg'}
                alt="Our History"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start gap-[40px] max-w-[595px]">
              <div className="flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[24px]">
                  {/* Orange Line */}
                  <div className="w-[40px] h-0 border-[3.5px] border-[#C84E26]" />
                  <span className="font-montserrat font-bold text-[18px] leading-[24px] text-[#2B2B2B]/60 uppercase">
                    About Pearlaw
                  </span>
                </div>
                <h2 className="font-montserrat font-bold text-[24px] leading-[28px] text-[#2B2B2B] capitalize">
                  Our Gorgeous History
                </h2>
              </div>

              <div className="font-['Georgia'] italic font-normal text-[24px] leading-[30px] text-[#2B2B2B] space-y-8">
                <p>
                  Founded with a commitment to excellence and integrity, Pearlaw
                  Corporate has been serving clients with distinction for over
                  two decades. Our team of experienced attorneys combines deep
                  legal expertise with a client-first approach, ensuring that
                  every case receives the attention and dedication it deserves.
                </p>
                <p>
                  We believe in building lasting relationships based on trust,
                  transparency, and results. Whether you’re facing a complex
                  litigation matter or need strategic legal counsel, Pearlaw
                  Corporate is your partner in acheiving the best possible
                  outcome.
                </p>
              </div>
            </div>
          </div>

          {/* Line Separator */}
          <div className="w-full h-px border border-[#969595]/30" />
        </section>

        {/* Mission & Vision Section */}
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 pb-[120px]">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[24px]">
            {/* Mission Card */}
            <div className="w-full lg:w-[628px] h-auto lg:h-[508px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] p-[60px_40px] lg:p-[60px_80px] flex flex-col items-center gap-[10px]">
              <div className="flex flex-col items-center gap-[28px]">
                {/* Icon */}
                <div className="relative w-[70px] h-[70px] flex items-center justify-center">
                  <div className="absolute inset-[8.33%] border-[3.5px] border-[#C84E26] rounded-full opacity-20" />
                  <Image
                src={'/law-iconf.png'}
                alt="Our History"
                fill
                className="object-cover"
              />
                </div>

                <div className="flex flex-col items-center gap-[40px]">
                  <h3 className="font-montserrat font-bold text-[16px] leading-[22px] text-[#2B2B2B] text-center">
                    OUR MISSION
                  </h3>
                  <p className="font-montserrat font-medium text-[20px] leading-[38px] text-[#2B2B2B]/80 text-center">
                    To provide exceptional legal services with unwavering
                    integrity, advocating fiercely for our clients while
                    maintaining the highest ethical standards. We strive to
                    deliver practical solutions that protect our client’s
                    interests and advance their goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="w-full lg:w-[628px] h-auto lg:h-[508px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] p-[60px_40px] lg:p-[60px_80px] flex flex-col items-center gap-[10px]">
              <div className="flex flex-col items-center gap-[28px]">
                {/* Icon */}
                <div className="relative w-[70px] h-[70px] flex items-center justify-center">
  
                  <Image
                src={'/law-icong.png'}
                alt="Our History"
                fill
                className="object-cover"
              />
                </div>

                <div className="flex flex-col items-center gap-[40px]">
                  <h3 className="font-montserrat font-bold text-[16px] leading-[22px] text-[#2B2B2B] text-center">
                    OUR VISION
                  </h3>
                  <p className="font-montserrat font-medium text-[20px] leading-[38px] text-[#2B2B2B]/80 text-center">
                    To be recognized as the most trusted and innovative law
                    firm, setting the standard for legal excellence and client
                    service. We envision a future where justice is accessible,
                    and every client receives personalized attention that leads
                    to meaningful results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones / Legacy Section */}
        <section className="w-full flex flex-col items-center gap-[60px] pb-[120px]">
          <div className="flex flex-col items-center gap-[24px] px-4">
            <span className="font-montserrat font-semibold text-[16px] leading-[18px] text-[#2B2B2B]/60 uppercase text-center">
              Our history
            </span>
            <h2 className="font-inter font-semibold text-[32px] leading-[36px] text-[#2B2B2B] text-center">
              A legacy of excellence spanning over two decades
            </h2>
          </div>

          <div className="relative w-full h-auto lg:h-[423px] p-[40px] lg:p-[80px] flex flex-col items-center justify-center">
            {/* Background with gradient and blur */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/peerlaw4.jpg"
                alt="Legacy Background"
                fill
                className="object-cover blur-[0.25px]"
              />
              <div className="absolute inset-0 bg-[#131927]/90" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1280px] border border-[#979797]/80 rounded-[0px_30px_0px_30px] p-[40px_28px] flex flex-col lg:flex-row items-start gap-[18px] bg-transparent">
              {/* Items */}
              {historyMilestones.map((item, index) => {
                const IconComponent = IconMap[item.icon] || TrendingUp;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-[28px] flex-1 w-full"
                  >
                    <div className="w-[48px] h-[48px] relative flex items-center justify-center">
                      <div className="absolute inset-0 border-[3.5px] border-[#C84E26] rounded-full opacity-0" />
                      <IconComponent className="w-[32px] h-[32px] text-[#C84E26]" />
                    </div>
                    <div className="flex flex-col items-center gap-[28px] text-center">
                      <h3 className="font-montserrat font-semibold text-[18px] leading-[24px] text-[#FEFEFE] uppercase">
                        {item.title}
                      </h3>
                      <p className="font-montserrat font-normal text-[16px] leading-[20px] text-[#FEFEFE]/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-br from-[#2B2B2B] to-[#1E223F] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] py-[80px] px-6 lg:px-[420px] flex flex-col items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[28px] text-center">
            <span className="font-montserrat font-semibold text-[16px] leading-[24px] text-[#FEFEFE]/80 uppercase">
              Ready to get started?
            </span>
            <h2 className="font-inter font-semibold text-[24px] leading-[28px] text-[#FEFEFE]">
              Schedule a consultation with our experienced legal team today.
              Take a step to solve your legal matters with confidence.
            </h2>
          </div>

          <Button asChild className="w-full max-w-[600px] h-[50px] bg-[#C84E26] hover:bg-[#C84E26]/90 rounded-[4px] flex items-center justify-center gap-[10px]">
            <Link href="/retainership">
              <span className="font-montserrat font-medium text-[12px] leading-[14px] text-[#F1F2F6]">
                Book Consultation
              </span>
              <ArrowRight className="w-[14px] h-[14px] text-[#F1F2F6]" />
            </Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
