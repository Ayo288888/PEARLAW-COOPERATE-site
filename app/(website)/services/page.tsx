import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Briefcase,
  Cpu,
  House,
  Rocket,
  FileCheck,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F1F2F6]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full h-[276px] relative flex flex-col items-center justify-center px-6 lg:px-[263px] py-20 gap-2.5 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/peerlaw9.jpg"
              alt="Our Expertise"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#131927]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131927]/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-7 max-w-[913px]">
            <h1 className="font-montserrat font-bold text-[20px] leading-[20px] text-center uppercase text-[#C84E26]">
              Our expertise
            </h1>
            <p className="font-inter font-semibold text-[24px] leading-[34px] text-center text-[#FEFEFE]">
              Pearlaw provides focused legal solutions tailored to Nigerian
              businesses, combing deep industry knowledge with practical,
              results-driven counsel.
            </p>
          </div>
        </section>

        {/* Legal Practice Areas Section */}
        <section className="w-full max-w-[1440px] px-6 lg:px-20 py-20 flex flex-col items-center gap-[60px]">
          <div className="flex flex-col items-center gap-[18px]">
            <div className="flex flex-col items-center gap-6">
              <span className="font-montserrat font-semibold text-[16px] leading-[18px] flex items-center text-center uppercase text-[#2B2B2B]/60">
                Our Expertise
              </span>
              <h2 className="font-inter font-semibold text-[32px] leading-[36px] text-center text-[#2B2B2B]">
                Legal Practice Areas
              </h2>
              <div className="w-[38px] h-0 border-2 border-[#C84E26] rotate-90"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] w-full max-w-[1280px]">
            {/* Card 1 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                                      src={'/vector.png'}
                                      alt="icon"
                                      fill
                                      className="object-contain"
                                    />
  
              </div>
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                  Corporate & Commercial
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                  End-to-end corporate structuring, M&A transactions, commercial
                  contracts and joint ventures tailored to your business
                  objectives.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                 <Image
                    src={'/vector1.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                  TECH LAW
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                  Navigate the digital landscape with expertise in data privacy,
                  IP protection, software licensing, and technology
                  transactions.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
               <Image
                    src={'/vector2.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                  REAL ESTATE LAW
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                  Complete real estate solutions covering property transactions,
                  due diligence, leasing, and title verification.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                    src={'/vector3.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                  STARTUPS & MSME LAW
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                  Comprehensive legal support for startups and MSME’s including
                  incorporation, funding rounds, term sheets, and growth
                  strategies.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                    src={'/vector4.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                  COMPANY GOVERNANCE
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                  Ensure compliance with corporate governance standards, board
                  processes, statutory fillings and regulatory.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                    src={'/vector5.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                  REGULATORY COMPLIANCE
                </h3>
                <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                  Stay ahead of regulatory changes with our proactive compliance
                  advisory across multiple sectors and jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Expertise Matters Section */}
        <section className="w-full min-h-[718px] h-auto relative flex flex-col items-center justify-center px-6 lg:px-20 py-20 gap-10 overflow-hidden">
          <Image
            src="/peerlaw10.png" 
            alt="Why our expertise matters"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#131927]/60" />

          <div className="relative z-10 flex flex-col items-center gap-[60px] w-full max-w-[1280px]">
            <div className="flex flex-col items-center gap-[18px]">
              <div className="flex flex-col items-center gap-6">
                <span className="font-montserrat font-semibold text-[16px] leading-[24px] text-center uppercase text-[#C84E26]">
                  why our expertise matters
                </span>
                <h2 className="font-inter font-medium text-[32px] leading-[36px] text-center text-[#FEFEFE]">
                  How Our Expertise makes a difference
                </h2>
                <div className="w-[38px] h-0 border-2 border-[#C84E26] rotate-90"></div>
              </div>
            </div>

            <div className="w-full border border-[#979797]/80 rounded-tr-[30px] rounded-bl-[30px] p-[30px] lg:p-[38px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Item 1 */}
                 <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                    src={'/vector11.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
                  <div className="flex flex-col items-center gap-7">
                    <h3 className="font-montserrat font-semibold text-[18px] leading-[24px] text-center uppercase text-[#FEFEFE]">
                      Strategic business growth
                    </h3>
                    <p className="font-montserrat font-normal text-[16px] leading-[24px] text-center text-[#FEFEFE]/80">
                      Our expertise empowers your business with the legal
                      clarity and protection needed to pursue aggressive growth
                      strategies, enter new markets, and seize opportunities
                      with confidence.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                 <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                    src={'/vector11.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="font-montserrat font-semibold text-[18px] leading-[24px] text-center uppercase text-[#FEFEFE]">
                      Risk mitigation & compliance
                    </h3>
                    <p className="font-montserrat font-normal text-[16px] leading-[24px] text-center text-[#FEFEFE]/80">
                      We help you navigate Nigeria’s regulatory environment,
                      identifying potential legal risks before they become
                      problems and ensuring your operations remain compliant and
                      protected.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                  <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <Image
                    src={'/vector11.png'}
                    alt="icon"
                    fill
                    className="object-contain"
                      />
              </div>
                  <div className="flex flex-col items-center gap-6">
                    <h3 className="font-montserrat font-semibold text-[18px] leading-[24px] text-center uppercase text-[#FEFEFE]">
                      Tailored solutions for nigerian context
                    </h3>
                    <p className="font-montserrat font-normal text-[16px] leading-[24px] text-center text-[#FEFEFE]/80">
                      Our deep understanding of local business practices, cultural nuances, and regulatory frameworks ensures legal strategies that are not just compliant, but practically effective in the Nigerian market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full max-w-[1440px] mx-auto">
          <div className="w-full h-auto lg:h-[456px] flex flex-col items-center justify-center px-6 lg:px-[420px] py-20 gap-10 bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] border border-[#969595]/30 shadow-lg">
            <div className="flex flex-col items-center gap-7 max-w-[600px]">
              <span className="font-montserrat font-semibold text-[16px] leading-[24px] text-center uppercase text-[#FEFEFE]/80">
                REady to get started?
              </span>
              <h2 className="font-inter font-semibold text-[24px] leading-[28px] text-center text-[#FEFEFE]">
                Whether you’re looking for ongoing legal support through our
                retainership plans or need a guidance on a specific matter,
                we’re here to help.
              </h2>
            </div>
            <Button
              asChild
              className="w-full max-w-[600px] h-[50px] bg-[#C84E26] hover:bg-[#b04320] text-[#F1F2F6] rounded-[4px] flex items-center justify-center gap-2.5"
            >
              <Link href="/contact">
                <span className="font-montserrat font-medium text-[12px] leading-[14px]">
                  Book Consultation
                </span>
                <ArrowRight className="w-[14px] h-[14px]" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
