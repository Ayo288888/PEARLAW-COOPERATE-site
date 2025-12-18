import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { practiceAreas } from "@/lib/mock-data";

export function PracticeAreasSection() {
  return (
    <section className="flex flex-col w-full max-w-[1281px] items-start gap-[60px] px-6 lg:px-4 mx-auto">
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col w-full max-w-[611px] items-center gap-7">
            <Badge className="bg-[#a45c2a33] hover:bg-[#a45c2a33] rounded-[30px] px-7 py-3 gap-1">
              <div className="relative w-3.5 h-3.5">
                <Image
                  src="/simple-line-icons-check.svg"
                  alt="Check"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-montserrat font-medium text-brand-orange text-xs tracking-[0] leading-[14px]">
                Trusted Legal Partner
              </span>
            </Badge>

            <div className="flex flex-col items-center gap-[22px] w-full">
              <h2 className="font-montserrat font-semibold text-brand-text text-2xl lg:text-[32px] text-center tracking-[0] leading-9">
                Your Partner in Corporate
                <br />
                Business Success
              </h2>

              <p className="font-inter font-normal text-brand-text-muted text-base lg:text-lg text-center tracking-[0] leading-[26px]">
                Navigate complex corporate landscapes with confidence. Our
                boutique law firm delivers strategic legal solutions tailored to
                your business needs, combining seasoned expertise with innovative
                thinking.
              </p>
            </div>
          </div>

          <Image
            src="/line-2.svg"
            alt="Divider"
            width={1281}
            height={1}
            className="w-full"
          />
        </div>

        <div className="inline-flex items-center justify-center gap-4 lg:gap-[18px] flex-wrap">
          <Button className="bg-brand-orange hover:bg-brand-orange/90 rounded px-[18px] py-4">
            <span className="font-montserrat font-medium text-brand-light text-sm tracking-[0] leading-[14px]">
              Book Consultation
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

          <Button
            variant="outline"
            className="rounded border-[0.6px] border-solid border-[#f3f3f34c] bg-gradient-to-br from-white to-[#999999] hover:opacity-90 px-7 py-4"
          >
            <span className="font-montserrat font-medium text-brand-text text-sm tracking-[0] leading-[14px]">
              Explore Services
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-[60px] w-full">
        <div className="flex flex-col w-full max-w-[343px] items-center gap-[18px]">
          <div className="flex flex-col items-center gap-6 w-full">
            <p className="font-montserrat font-semibold text-brand-text/60 text-base text-center tracking-[0] leading-[18px]">
              OUR EXPERTISE
            </p>

            <h2 className="font-inter font-semibold text-brand-text text-2xl lg:text-[32px] text-center tracking-[0] leading-9 whitespace-nowrap">
              Legal Practice Areas
            </h2>
          </div>

          <Image src="/line-45.svg" alt="Divider" width={2} height={38} />
        </div>

        <div className="flex flex-col items-center justify-center gap-[60px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px] w-full">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-6"
              >
                <div className="flex flex-col items-center gap-6 w-full">
                  <div className="relative w-12 h-12">
                    <Image
                      src={area.icon}
                      alt={area.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <h3 className="font-montserrat font-semibold text-brand-text text-lg text-center tracking-[0] leading-[22px]">
                      {area.title}
                    </h3>

                    <p className="font-inter font-normal text-brand-text-muted text-base lg:text-lg text-center tracking-[0] leading-7">
                      {area.description}
                    </p>
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-1 hover:gap-2 transition-all">
                  <span className="font-montserrat font-medium text-brand-orange text-sm tracking-[0] leading-[18px]">
                    LEARN MORE
                  </span>
                  <div className="relative w-3.5 h-3.5">
                    <Image
                      src="/prime-arrow-right.svg"
                      alt="Arrow"
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
