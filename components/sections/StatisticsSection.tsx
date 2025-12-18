import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { statistics } from "@/lib/mock-data";

export function StatisticsSection() {
  return (
    <section className="relative w-full min-h-[1169px]">
      <div className="absolute top-0 left-0 w-full h-[1169px] bg-gradient-to-br from-brand-dark via-brand-dark-alt/95 to-brand-dark" />

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[1280px] px-6 lg:px-4">
        <Card className="w-full rounded-[0px_30px_0px_30px] overflow-hidden border border-solid border-[#979797cc] bg-transparent">
          <CardContent className="p-0">
            <div className="flex flex-col items-start gap-20 px-6 md:px-12 lg:px-20 py-[60px]">
              <div className="flex flex-col items-center gap-20 w-full">
                <div className="flex flex-col w-full max-w-[380px] items-center gap-10">
                  <div className="flex flex-col items-center gap-6 w-full">
                    <p className="font-montserrat font-semibold text-brand-orange text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                      WHAT WE ARE EXPERT AT
                    </p>

                    <h2 className="font-inter font-medium text-white text-2xl lg:text-[32px] text-center tracking-[0] leading-9 whitespace-nowrap">
                      Why Clients Choose Us?
                    </h2>
                  </div>

                  <Image src="/line-45.svg" alt="Divider" width={2} height={38} />
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[69px] w-full">
                  <p className="flex-1 font-inter font-normal text-white/80 text-lg lg:text-xl tracking-[0] leading-7">
                    Our firm is built on a foundation of trust, dedication, and
                    exceptional service. For years, we have guided clients through
                    complex legal matters with clarity and confidence. Every case
                    we handle is approached with care, precision, and a deep
                    commitment to achieving the best possible outcome.
                  </p>

                  <p className="flex-1 font-inter font-normal text-white/80 text-lg lg:text-xl tracking-[0] leading-7">
                    With extensive experience across diverse legal fields, we
                    provide clients with strategic advice and reliable
                    representation. Our focus is on delivering practical
                    solutions, protecting our clients' interests, and ensuring
                    they are supported every step of the way.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[120px] w-full">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-[18px]"
                  >
                    <p className="font-montserrat font-extrabold text-white text-4xl lg:text-[64px] text-center tracking-[0] leading-tight lg:leading-[70px] whitespace-nowrap">
                      {stat.value}
                    </p>

                    <p className="font-inter font-normal text-brand-orange text-base lg:text-xl text-center tracking-[0] leading-6 whitespace-nowrap">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
