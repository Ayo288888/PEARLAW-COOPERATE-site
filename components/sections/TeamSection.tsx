import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { teamMembers } from "@/lib/mock-data";

export function TeamSection() {
  return (
    <section className="relative w-full min-h-[778px] mb-20">     
      <div className="absolute top-0 left-0 w-full h-[652px]">
        <Image
          src="/peerlaw2.png"
          alt="Team Background"
          fill
          className="object-cover"
        />

        
        <div className="absolute inset-0 bg-[#13192799]" />
      </div>
      <div className="z-10 flex flex-col w-full max-w-[1358px] items-center gap-20 absolute top-20 left-1/2 -translate-x-1/2 px-6 lg:px-4">
        <div className="flex flex-col items-center gap-7">
          <h2 className="font-inter font-medium text-white text-2xl lg:text-[32px] text-center tracking-[0] leading-9 whitespace-nowrap">
            Our Legal Team
          </h2>

          <div className="flex flex-col items-center gap-6">
            <button className="flex items-center gap-5 hover:gap-6 transition-all">
              <span className="font-montserrat font-semibold text-brand-orange text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                VIEW ALL PEOPLE
              </span>
              <div className="relative w-6 h-6">
                <Image
                  src="/arrow-right(orange).png"
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div>
            </button>

            <Image src="/line 45.png" alt="Divider" width={2} height={38} />
          </div>
        </div>

        <div className="w-full">
          <ScrollArea className="w-full">
            <div className="flex items-center gap-7 pb-4">
              {teamMembers.map((member) => (
                <Card
                  key={member.id}
                  className="w-[300px] lg:w-[377px] flex-shrink-0 bg-[#F5F5F54D] rounded-lg overflow-hidden border border-solid border-[#f5f5f54c]"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-5">
                      <div className="relative w-full h-[260px] lg:h-[342px] rounded-[1px_1px_0px_0px]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col items-center gap-2 pb-5">
                        <h3 className="font-montserrat font-semibold text-brand-text text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                          {member.name}
                        </h3>

                        <p className="font-inter font-normal text-brand-orange text-sm text-center tracking-[0] leading-[18px] whitespace-nowrap">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}