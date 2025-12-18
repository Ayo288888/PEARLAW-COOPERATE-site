import Image from "next/image";
import { testimonial } from "@/lib/mock-data";

export function TestimonialSection() {
  return (
    <section className="relative flex flex-col items-start gap-2.5 p-6 lg:p-20 w-full bg-gradient-to-br from-brand-dark via-gray-800 to-brand-dark-alt mb-20 lg:mb-[120px]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900/50 via-brand-dark/80 to-gray-900/50" />
      <div className="flex items-center gap-2.5 px-6 md:px-12 lg:px-[328px] py-12 lg:py-20 w-full rounded-[0px_30px_0px_30px] border border-solid border-[#979797cc]">
        <div className="flex flex-col w-full max-w-[623px] mx-auto items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col w-full max-w-[270px] items-center gap-10">
              <div className="flex flex-col items-center gap-6 w-full">
                <p className="font-montserrat font-semibold text-brand-orange text-base text-center tracking-[0] leading-[22px] whitespace-nowrap">
                  TESTIMONIAL
                </p>

                <h2 className="font-inter font-medium text-white text-2xl lg:text-[28px] text-center tracking-[0] leading-[34px] whitespace-nowrap">
                  Words From Clients
                </h2>
              </div>

              <Image src="/line-45.svg" alt="Divider" width={2} height={38} />
            </div>

            <div className="flex flex-col items-center gap-10 w-full">
              <div className="relative w-[80px] lg:w-[120px] h-[80px] lg:h-[120px]">
                <Image
                  src="/sidekickicons-quotation-mark.svg"
                  alt="Quotation mark"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-center gap-10 w-full">
                <p className="font-['Georgia'] font-normal text-white/80 text-lg lg:text-2xl text-center tracking-[0] leading-[28px] lg:leading-[34px]">
                  {testimonial.quote}
                </p>

                <div className="inline-flex items-center gap-3">
                  <div className="relative w-[70px] h-[70px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-inter font-bold text-white text-lg tracking-[0] leading-5 whitespace-nowrap">
                      {testimonial.name}
                    </h3>

                    <p className="font-inter font-normal text-brand-orange text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-[5px]">
            <Image src="/line-47.svg" alt="" width={37} height={8} />
            <Image src="/line-48.svg" alt="" width={21} height={8} />
            <Image src="/line-49.svg" alt="" width={11} height={8} />
          </div>
        </div>
      </div>
    </section>
  );
}
