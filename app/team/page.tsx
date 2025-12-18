import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamLead = {
  name: "Pearl Eghimentor",
  role: "Team Lead",
  image: "/image-2.png",
  credentials: "LLB, B.L, Michelman Nigerian Bar Association",
  education: "University of Lagos, Nigerian Law School",
  specialities:
    "Corporate Law, Contract Negotiation, Litigation",
  about:
    "With over 15 years of experience in corporate law and litigation, Pearl leads our firm with a strategic vision and unwavering commitment to client success. Her strategic approach and attention to detail have earned her recognition as one of the top legal minds in the region.",
};

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "ADEBAYO JOHNSON",
    role: "SENIOR ASSOCIATE",
    image: "/image-2.png",
  },
  {
    id: "2",
    name: "CHIOMA OKONKWO",
    role: "ASSOCIATE",
    image: "/image-3.png",
  },
  {
    id: "3",
    name: "TUNDE ADELEKE",
    role: "LEGAL CONSULTANT",
    image: "/image-7.png",
  },
  {
    id: "4",
    name: "BLESSING NNAMDI",
    role: "ASSOCIATE",
    image: "/image-8.png",
  },
  {
    id: "5",
    name: "IBRAHIM HASSAN",
    role: "LEGAL ADVISOR",
    image: "/image-6.png",
  },
  {
    id: "6",
    name: "GRACE EZE",
    role: "JUNIOR ASSOCIATE",
    image: "/image-9.png",
  },
];

export default function TeamPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-light">
      <Navbar />

      <PageHero title="Meet The Team" subtitle="MEET WITH THE ATTORNEYS" />

      <main className="flex-1 w-full flex flex-col">
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={teamLead.image}
                  alt={teamLead.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="border-l-4 border-brand-orange pl-6">
                <h2 className="font-montserrat font-bold text-brand-text text-3xl mb-2">
                  {teamLead.name}
                </h2>
                <p className="font-inter font-normal text-brand-orange text-lg">
                  {teamLead.role}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-montserrat font-bold text-brand-text text-sm uppercase tracking-wider mb-3">
                    Credentials
                  </h3>
                  <p className="font-inter font-normal text-brand-text-muted text-base leading-6">
                    {teamLead.credentials}
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-bold text-brand-text text-sm uppercase tracking-wider mb-3">
                    Education
                  </h3>
                  <p className="font-inter font-normal text-brand-text-muted text-base leading-6">
                    {teamLead.education}
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-bold text-brand-text text-sm uppercase tracking-wider mb-3">
                    Specialities
                  </h3>
                  <p className="font-inter font-normal text-brand-text-muted text-base leading-6">
                    {teamLead.specialities}
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-bold text-brand-text text-sm uppercase tracking-wider mb-3">
                    About
                  </h3>
                  <p className="font-inter font-normal text-brand-text-muted text-base leading-6">
                    {teamLead.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-20 bg-gradient-to-br from-brand-dark to-brand-dark-alt">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "linear-gradient(135deg, #131927 0%, #1e223f 100%)",
            }}
          />
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-16">
              <div className="flex flex-col items-center gap-6">
                <h2 className="font-inter font-semibold text-white text-2xl lg:text-3xl text-center">
                  Our Legal Team
                </h2>
                <p className="font-montserrat font-semibold text-brand-orange text-base">
                  MEET ALL PEOPLE
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {teamMembers.map((member) => (
                  <Card
                    key={member.id}
                    className="w-full bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center">
                        <div className="relative w-full h-[300px]">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex flex-col items-center gap-2 py-6 px-4 w-full text-center">
                          <h3 className="font-montserrat font-semibold text-brand-text text-lg">
                            {member.name}
                          </h3>

                          <p className="font-inter font-normal text-brand-orange text-sm">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-brand-light">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <p className="font-montserrat font-semibold text-brand-text/60 text-base text-center tracking-widest">
                  OUR VALUES
                </p>
                <h2 className="font-inter font-semibold text-brand-text text-2xl lg:text-3xl text-center">
                  Areas of Expertise
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {[
                  {
                    icon: "/ri-scales-3-line.svg",
                    title: "PROFESSIONALISM",
                    description:
                      "Maintaining the highest standards of legal professionalism and conduct",
                  },
                  {
                    icon: "/ri-heart-2-line.svg",
                    title: "INTEGRITY",
                    description:
                      "Building trust through transparency, honesty and unwavering commitment to our clients",
                  },
                  {
                    icon: "/ri-lightbulb-line.svg",
                    title: "INNOVATION",
                    description:
                      "Embracing modern legal solutions and leveraging technology for exceptional results",
                  },
                  {
                    icon: "/ri-focus-3-line.svg",
                    title: "CLIENT FOCUS",
                    description:
                      "Your success is our priority. We provide tailored legal solutions",
                  },
                ].map((value, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-4 p-6 border border-gray-200 rounded-lg bg-white"
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src={value.icon}
                        alt={value.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-montserrat font-bold text-brand-text text-sm text-center">
                      {value.title}
                    </h3>
                    <p className="font-inter font-normal text-brand-text-muted text-xs text-center leading-5">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-20 bg-gradient-to-br from-brand-dark to-brand-dark-alt">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center gap-6 max-w-2xl">
                <p className="font-montserrat font-semibold text-brand-orange text-base text-center">
                  READY TO GET STARTED?
                </p>
                <h2 className="font-montserrat font-bold text-white text-2xl lg:text-3xl text-center">
                  Let's discuss how Pearlaw Corporate can drive your business
                  forward.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded font-montserrat font-semibold">
                  Book Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded font-montserrat font-semibold"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
