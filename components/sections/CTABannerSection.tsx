import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ctaBanner } from "@/lib/mock-data";

export function CTABannerSection() {
  return (
    <section className="relative w-full mb-20 lg:mb-[120px] py-[60px]">
    
      <Image
        src="/peerlaw4.jpg"
        alt="CTA Banner Background"
        fill
        className="object-cover"
        priority 
      />

      <div className="absolute inset-0 bg-[#131927B2]  blur-md" />

      
      <div className="relative z-10 flex justify-center px-6 lg:px-20 w-full">
        <div className="flex flex-col w-full max-w-[1280px] items-start gap-2.5 px-6 md:px-12 lg:px-[285px] py-12 lg:py-20 rounded-[0px_30px_0px_30px] overflow-hidden border border-solid border-[#979797cc] ">
          <div className="flex flex-col items-start gap-[60px] w-full">
            <div className="flex flex-col items-center gap-[18px] w-full">
              <div className="flex flex-col items-center justify-center gap-7 w-full">
                <p className="font-montserrat font-bold text-white text-lg lg:text-xl text-center tracking-[0] leading-6">
                  {ctaBanner.heading}
                </p>

                <div className="flex flex-col items-center gap-6 w-full">
                  <h2 className="font-inter font-medium text-brand-orange text-2xl lg:text-[32px] text-center tracking-[0] leading-[34px]">
                    {ctaBanner.subheading}
                  </h2>

                  <div className="inline-flex flex-col lg:flex-row items-center gap-4 lg:gap-2 flex-wrap">
                    <div className="inline-flex items-center gap-1">
                      <div className="relative w-5 h-5">
                        <Image
                          src="/email-icon.png"
                          alt="Email"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <a
                        href={`mailto:${ctaBanner.email}`}
                        className="font-montserrat font-medium text-white text-sm lg:text-base tracking-[0] leading-5 underline whitespace-nowrap hover:text-brand-orange transition-colors"
                      >
                        {ctaBanner.email}
                      </a>
                    </div>

                    <div className="inline-flex items-center gap-1">
                      <div className="inline-flex items-center gap-2">
                        <div className="relative w-5 h-5">
                          <Image
                            src="/clock-icon.png"
                            alt="Clock"
                            fill
                            className="object-contain"
                          />
                        </div>

                        <span className="font-montserrat font-semibold text-white text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                          Mon -
                        </span>
                      </div>

                      <span className="font-montserrat font-medium text-white text-sm text-center tracking-[0] leading-[18px] whitespace-nowrap">
                        {ctaBanner.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <Image src="/line 45.png" alt="Divider" width={2} height={38} />
            </div>

            <div className="flex flex-col items-start gap-10 w-full">
              <h3 className="font-inter font-medium text-white text-2xl lg:text-[28px] text-center tracking-[0] leading-9 whitespace-nowrap w-full">
                Subscribe To Newsletter
              </h3>

              <div className="flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-0">
                <Input
                  placeholder="Your Email Address"
                  className="w-full lg:w-[542px] bg-brand-light/20 rounded-[4px] lg:rounded-[4px_0px_0px_4px] h-14 border-0 placeholder:opacity-80 placeholder:font-dm-sans placeholder:font-normal placeholder:text-[#9e9e9e] placeholder:text-sm text-white"
                />

                <Button className="flex w-full lg:w-[167px] h-14 items-center justify-center gap-2 px-4 py-3 bg-brand-orange rounded-[4px] lg:rounded-[0px_4px_4px_0px] border-[0.6px] border-solid border-[#9695954c] hover:bg-brand-orange-dark">
                  <span className="font-montserrat font-semibold text-white text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                    SUBSCRIBE
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}