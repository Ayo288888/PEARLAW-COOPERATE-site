import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F1F2F6]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full h-[276px] relative flex flex-col items-center justify-center px-6 lg:px-[263px] py-20 gap-2.5 bg-[#131927] overflow-hidden">
          <Image
            src={'/peerlaw6.jpg'}
            alt="Our History"
            fill
            className="object-cover"
          />
        
          <div className="absolute inset-0 bg-[#131927B2]"></div>
          <div className="relative flex flex-col items-center gap-7 max-w-[913px] z-10">
            <h1 className="font-montserrat font-bold text-[20px] leading-[20px] text-center uppercase text-[#C84E26]">
              Experience PLC
            </h1>
            <p className="font-inter font-semibold text-[24px] leading-[34px] text-center text-[#FEFEFE]">
              Pearlaw Corporate delivers strategic legal excellence tailored to
              your business ambitions, empowering companies to navigate
              complexity with confidence.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="w-full max-w-[1440px] px-6 lg:px-20 pt-20 pb-10 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-start gap-14 w-full max-w-[1280px]">
           
            <div className="relative w-full lg:w-[629px] h-[440px] rounded-[6px] overflow-hidden bg-gray-200 shadow-sm">
              <Image
                src="/peerlaw7.jpg"
                alt="Experience Intro"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-start gap-[18px] w-full lg:w-[595px] mt-10 lg:mt-0">
              <div className="w-10 h-0 border-[3.5px] border-[#C84E26] rotate-180 mb-4"></div>
              <p className="font-['Georgia'] italic font-normal text-[24px] leading-[30px] text-[#2B2B2B]">
                At Pearlaw Corporate, we bridge the legal gaps that stand
                between your business and its full potential. Our boutique
                approach combines deep legal expertise with strategic business
                acumen, ensuring every solution we craft aligns with your
                commercial objectives. We don’t just solve legal problems, we
                partner with you to unlock opportunities, mitigate risks, and
                drive sustainable growth.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full max-w-[1440px] px-20"><div className="w-full h-px bg-[#969595]/30" /></div>

        {/* How We Work / Specialized Areas */}
        <section className="w-full bg-white pt-10 lg:pt-[40px] pb-10 lg:pb-[40px] px-6 lg:px-[80px]">
          <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[60px]">
            <div className="flex flex-col items-center gap-[18px]">
              <div className="flex flex-col items-center gap-6">
                <span className="font-montserrat font-semibold text-[16px] leading-[18px] flex items-center text-center uppercase text-[#2B2B2B]/60">
                  how we work
                </span>
                <h2 className="font-inter font-semibold text-[32px] leading-[36px] text-center text-[#2B2B2B]">
                  Specialized Areas
                </h2>
                <div className="w-[38px] h-0 border-2 border-[#C84E26] rotate-90"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[60px] w-full">
              {/* Card 1 */}
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src="/vector8.png"
                    alt="Schedule"
                    width={48}
                    height={48}
                    className="text-[#C84E26]"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                    book a conversation
                  </h3>
                  <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                    Schedule an initial consultation where we listen carefully
                    to understand your business context and legal needs.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src="/vector9.png"
                    alt="Search"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                    we understand your needs
                  </h3>
                  <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                    Through detailed analysis and dialogue, we identify the
                    core challenges and opportunities that requires legal
                    attention.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src="/vector10.png"
                    alt="Idea"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <h3 className="font-montserrat font-semibold text-[18px] leading-[22px] text-center uppercase text-[#2B2B2B]">
                    we craft tailored solutions
                  </h3>
                  <p className="font-inter font-normal text-[18px] leading-[28px] text-center text-[#2B2B2B]/80">
                    Leveraging our expertise, we design and implement legal
                    strategies that align with your business objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
 <br></br>
  <br></br>
  
        {/* Where We Work */}
        <section className="w-full min-h-[430px] h-auto relative flex flex-col items-center justify-center px-6 lg:px-[361px] py-20 gap-2.5 overflow-hidden">
          <Image
            src="/peerlaw8.jpg" 
            alt="Where we work"
            fill
            className="object-cover filter blur-[0.25px]"
          />
          <div className="absolute inset-0 bg-[#131927]/60"></div>
          <div className="relative flex flex-col items-center gap-10 max-w-[718px]">
            <span className="font-montserrat font-bold text-[16px] leading-[22px] text-center text-[#FEFEFE]">
              WHERE WE WORK
            </span>
            <div className="flex flex-col items-center gap-7">
              <h2 className="font-montserrat font-bold text-[64px] leading-[68px] text-center text-[#C84E26]">
                PEARLAW
              </h2>
              <p className="font-montserrat font-medium text-[20px] leading-[28px] text-center text-[#FEFEFE]/80">
                Operating virtually across jurisdictions, we bring legal
                excellence to your location. Our flexible model allows us to
                serve clients wherever business takes them, combining the
                agility of modern technology with the depth of traditional legal
                expertise.
              </p>
            </div>
          </div>
        </section>
          <br></br>
        {/* How Do We Work */}
        <section className="w-full min-h-[412px] h-auto relative flex flex-col items-center justify-center px-6 lg:px-[361px] py-20 gap-2.5 overflow-hidden">
          <Image
            src="/peerlaw8.jpg" 
            alt="How we work"
            fill
            className="object-cover filter blur-[0.25px]"
          />
          <div className="absolute inset-0 bg-[#131927]/60"></div>
          <div className="relative flex flex-col items-center gap-10 max-w-[718px]">
            <span className="font-montserrat font-bold text-[16px] leading-[22px] text-center text-[#FEFEFE]">
              HOW DO WE WORK
            </span>
            <div className="flex flex-col items-center gap-7">
              <h2 className="font-montserrat font-bold text-[64px] leading-[68px] text-center text-[#C84E26]">
                PEARLAW
              </h2>
              <p className="font-montserrat font-medium text-[20px] leading-[28px] text-center text-[#FEFEFE]/80">
                Our client-centric approach emphasizes proactive communication,
                transparent pricing, and result-driven strategies. We combine
                traditional legal excellence with modern efficiency.
              </p>
            </div>
          </div>
        </section>
<br></br>
<br></br>
<br></br>
        {/* CTA Section */}
        <section className="w-full max-w-[1440px] mx-auto">
          <div className="w-full h-auto lg:h-[358px] flex flex-col items-center justify-center px-6 lg:px-[420px] py-20 gap-10 bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] border border-[#969595]/30 shadow-lg">
            <div className="flex flex-col items-center gap-7 max-w-[600px]">
              <span className="font-montserrat font-semibold text-[16px] leading-[24px] text-center uppercase text-[#FEFEFE]/80">
                Ready to change Your Legal Strategy?
              </span>
              <h2 className="font-inter font-semibold text-[24px] leading-[28px] text-center text-[#FEFEFE]">
                Let’s discuss how Pearlaw Corporate can drive your business
                forward.
              </h2>
            </div>
            <Button asChild className="w-full max-w-[600px] h-[50px] bg-[#C84E26] hover:bg-[#b04320] text-[#F1F2F6] rounded-[4px] flex items-center justify-center gap-2.5">
              <Link href="/retainership">
                <span className="font-montserrat font-medium text-[12px] leading-[14px]">
                  Book Consultation
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.91669 7H11.0834"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 2.91669L11.0833 7.00002L7 11.0834"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
