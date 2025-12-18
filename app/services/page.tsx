import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { practiceAreas } from "@/lib/mock-data";

export default function ServicesPage() {
  const serviceIntroImage =
    "/frame-2147209198.png";

  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-light">
      <Navbar />

      <PageHero
        title="Our Services"
        subtitle="EXPERIENCE PLC"
      />

      <main className="flex-1 w-full flex flex-col">
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={serviceIntroImage}
                alt="Service Introduction"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-montserrat font-semibold text-brand-orange text-base">
                AT PEARLAW CORPORATE
              </p>

              <div className="flex flex-col gap-6">
                <p className="font-inter font-normal text-brand-text text-lg leading-[26px]">
                  At Pearlaw Corporate, we bridge the legal gaps that stand
                  between your business and its full potential. Our boutique
                  approach combines deep legal expertise with strategic business
                  acumen, ensuring every solution we craft aligns with your
                  commercial objectives.
                </p>

                <p className="font-inter font-normal text-brand-text text-lg leading-[26px]">
                  We don't just solve legal problems; we partner with you to
                  identify opportunities, mitigate risks, and drive sustainable
                  growth. Our boutique approach combines deep legal expertise
                  with strategic business acumen, ensuring every solution we
                  craft aligns with your commercial objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-brand-light py-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-20">
              <div className="w-full max-w-[500px] mx-auto">
                <h2 className="font-montserrat font-semibold text-brand-text text-2xl lg:text-3xl text-center mb-4">
                  How We Work
                </h2>
                <p className="font-montserrat font-semibold text-brand-text/60 text-base text-center tracking-widest">
                  SPECIALIZED AREAS
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-lg">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/ri-chat-4-line.svg"
                      alt="Book"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="font-montserrat font-bold text-brand-text text-lg text-center">
                      BOOK A CONVERSATION
                    </h3>
                    <p className="font-inter font-normal text-brand-text-muted text-base text-center leading-6">
                      Schedule an initial consultation where we listen carefully
                      to understand your business context and legal needs.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-lg">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/ri-search-line.svg"
                      alt="Search"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="font-montserrat font-bold text-brand-text text-lg text-center">
                      WE UNDERSTAND YOUR NEEDS
                    </h3>
                    <p className="font-inter font-normal text-brand-text-muted text-base text-center leading-6">
                      Through detailed analysis and dialogue, we identify the
                      core challenges and opportunities that require legal
                      attention.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-lg">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/ri-lightbulb-line.svg"
                      alt="Lightbulb"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="font-montserrat font-bold text-brand-text text-lg text-center">
                      WE CRAFT TAILORED SOLUTIONS
                    </h3>
                    <p className="font-inter font-normal text-brand-text-muted text-base text-center leading-6">
                      Leveraging our expertise, we design and implement legal
                      strategies that align with your business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-gradient-to-br from-brand-dark to-brand-dark-alt">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <h2 className="font-inter font-semibold text-white text-2xl lg:text-3xl text-center">
                  WHERE WE WORK
                </h2>
                <p className="font-montserrat font-bold text-brand-orange text-4xl lg:text-5xl text-center">
                  PEARLAW
                </p>
              </div>

              <p className="max-w-3xl font-inter font-normal text-white/80 text-base lg:text-lg text-center leading-[26px]">
                Operating virtually across jurisdictions, we bring legal
                excellence to your location. Our flexible model allows us to
                serve clients wherever they are, combining the convenience of
                technology with the depth of traditional legal expertise.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-gradient-to-br from-brand-dark-alt to-brand-dark">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <h2 className="font-inter font-semibold text-white text-2xl lg:text-3xl text-center">
                  HOW DO WE WORK
                </h2>
                <p className="font-montserrat font-bold text-brand-orange text-4xl lg:text-5xl text-center">
                  PEARLAW
                </p>
              </div>

              <p className="max-w-3xl font-inter font-normal text-white/80 text-base lg:text-lg text-center leading-[26px]">
                Our client-centric approach emphasizes proactive communication,
                transparent pricing, and result-driven strategies. We combine
                traditional legal excellence with modern efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-brand-dark">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-6 max-w-2xl">
                <p className="font-montserrat font-semibold text-brand-orange text-base text-center">
                  READY TO CHANGE YOUR LEGAL STRATEGY?
                </p>
                <h2 className="font-montserrat font-bold text-white text-2xl lg:text-3xl text-center">
                  Let's discuss how Pearlaw Corporate can drive your business
                  forward.
                </h2>
              </div>

              <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded font-montserrat font-semibold">
                Book Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
