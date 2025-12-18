import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-light">
      <Navbar />

      <PageHero
        title="About Pearlaw Corporate"
        subtitle="STORY ABOUT OUR FIRM"
      />

      <main className="flex-1 w-full flex flex-col">
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-[450px] rounded-lg overflow-hidden">
              <Image
                src="/frame-2147209198-1.svg"
                alt="Pearlaw Office"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-8">
              <div className="border-l-4 border-brand-orange pl-6">
                <p className="font-montserrat font-semibold text-brand-orange text-base mb-2 uppercase">
                  ABOUT PEARLAW
                </p>
                <h2 className="font-montserrat font-bold text-brand-text text-3xl">
                  Our Gorgeous History
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                <p className="font-inter font-normal text-brand-text-muted text-base leading-7">
                  Founded with a commitment to excellence and integrity,
                  Pearlaw Corporate has been serving clients with distinction
                  for over two decades. Our team of experienced attorneys
                  combines deep legal expertise with a client-first approach,
                  ensuring that every case receives the attention and
                  dedication it deserves.
                </p>

                <p className="font-inter font-normal text-brand-text-muted text-base leading-7">
                  We believe in building lasting relationships based on trust,
                  transparency, and results. Whether you're facing a complex
                  litigation matter or need strategic legal counsel, Pearlaw
                  Corporate is your partner in achieving the best possible
                  outcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-gray-50">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="rounded-lg overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-12 bg-white">
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/lucide-target.svg"
                        alt="Mission"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <h3 className="font-montserrat font-bold text-brand-text text-xl text-center">
                        OUR MISSION
                      </h3>

                      <p className="font-inter font-normal text-brand-text-muted text-base text-center leading-7">
                        To provide exceptional legal services with unwavering
                        integrity, advocating fiercely for our clients while
                        maintaining the highest ethical standards. We strive to
                        deliver practical solutions that protect our client's
                        interests and advance their goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-lg overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-12 bg-white">
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/ri-eye-line.svg"
                        alt="Vision"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <h3 className="font-montserrat font-bold text-brand-text text-xl text-center">
                        OUR VISION
                      </h3>

                      <p className="font-inter font-normal text-brand-text-muted text-base text-center leading-7">
                        To be recognized as the most trusted and innovative law
                        firm, setting the standard for legal excellence and
                        client service. We envision a future where justice is
                        accessible, and every client receives personalized
                        attention that leads to meaningful results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-brand-light">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <p className="font-montserrat font-semibold text-brand-text/60 text-base text-center tracking-widest">
                  OUR HISTORY
                </p>
                <h2 className="font-montserrat font-bold text-brand-text text-2xl lg:text-3xl text-center">
                  A legacy of excellence spanning over two decades
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-20 bg-gradient-to-br from-brand-dark to-brand-dark-alt">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "/lucide-building-2.svg",
                  title: "PEARLAW FOUNDED",
                  description:
                    "Established with a vision to provide exceptional legal services to our community.",
                },
                {
                  icon: "/ri-arrow-up-line.svg",
                  title: "EXPANSION & GROWTH",
                  description:
                    "Expanded to a team of 15 attorneys and opened our second office location.",
                },
                {
                  icon: "/ri-medal-line.svg",
                  title: "RECOGNITION OF EXCELLENCE",
                  description:
                    "Received multiple industry awards and recognition for outstanding legal representation.",
                },
                {
                  icon: "/ri-lightbulb-flash-line.svg",
                  title: "TECHNOLOGY INNOVATION",
                  description:
                    "Pioneered digital client services and modern case management systems.",
                },
              ].map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-4 p-6 border border-white/10 rounded-lg"
                >
                  <div className="relative w-14 h-14">
                    <Image
                      src={milestone.icon}
                      alt={milestone.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-montserrat font-bold text-white text-sm text-center">
                    {milestone.title}
                  </h3>
                  <p className="font-inter font-normal text-white/70 text-xs text-center leading-5">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-20 bg-gradient-to-br from-brand-dark-alt to-brand-dark">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-6 max-w-2xl">
                <p className="font-montserrat font-semibold text-brand-orange text-base text-center">
                  READY TO GET STARTED?
                </p>
                <h2 className="font-montserrat font-bold text-white text-2xl lg:text-3xl text-center">
                  Schedule a consultation with our experienced legal team today.
                  Take a step to solve your legal matters with confidence.
                </h2>
              </div>

              <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded font-montserrat font-semibold">
                Book Consultation →
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
