import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

const teamLead = {
  name: "Pearl Eghimentor",
  role: "Team Lead",
  image: "/team5.png",
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
    image: "/team1.png",
  },
  {
    id: "2",
    name: "CHIOMA OKONKWO",
    role: "ASSOCIATE",
    image: "/team2.png",
  },
  {
    id: "3",
    name: "TUNDE ADELEKE",
    role: "LEGAL CONSULTANT",
    image: "/team3.png",
  },
  {
    id: "4",
    name: "BLESSING NNAMDI",
    role: "ASSOCIATE",
    image: "/team4.png",
  },
  {
    id: "5",
    name: "IBRAHIM HASSAN",
    role: "LEGAL ADVISOR",
    image: "/team1.png",
  },
  {
    id: "6",
    name: "GRACE EZE",
    role: "JUNIOR ASSOCIATE",
    image: "/team2.png",
  },
];

export default function TeamPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-light">
      <Navbar />

      <section className="relative w-full h-[276px] flex items-center justify-center overflow-hidden">
        <Image
          src="/aboutus.jpg"
          alt="Meet the team background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 flex flex-col items-center gap-[17px] px-4">
          <h1 className="font-montserrat font-bold text-[36px] leading-[40px] text-white text-center capitalize">
            Meet The Team
          </h1>
          <p className="font-montserrat font-bold text-[20px] leading-[24px] text-white/80 text-center uppercase">
            meet with the attorneys
          </p>
        </div>
      </section>

      <main className="flex-1 w-full flex flex-col">
        <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
            <div className="flex flex-col gap-8">
              <div className="relative h-[618px] rounded-lg overflow-hidden">
                <Image
                  src={teamLead.image}
                  alt={teamLead.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="w-10 h-0 border-[3.5px] border-brand-orange" />
                <h2 className="font-montserrat font-bold text-brand-text text-2xl leading-7 mb-2">
                  {teamLead.name}
                </h2>
                <p className="font-montserrat font-medium text-brand-orange text-lg leading-6">
                  {teamLead.role}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-montserrat font-medium text-brand-text text-lg mb-3">
                    Credentials
                  </h3>
                  <p className="font-inter font-normal text-brand-text-muted text-base leading-6">
                    {teamLead.credentials}
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-medium text-brand-text text-lg mb-3">
                     Education
                  </h3>
                  <p className="font-inter font-normal text-brand-text-muted text-base leading-6">
                    {teamLead.education}
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-medium text-brand-text text-lg mb-3">
                     Specialities
                  </h3>
                  <p className="font-inter font-normal text-brand-text-muted text-base leading-6">
                    {teamLead.specialities}
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat font-medium text-brand-text text-lg mb-3">
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
                <h2 className="font-inter font-medium text-white text-2xl lg:text-[32px] text-center">
                  Our Legal Team
                </h2>
                <div className="flex flex-col items-center gap-6">
                  <Link href="/team" className="flex items-center gap-5 hover:gap-6 transition-all">
                    <span className="font-montserrat font-semibold text-brand-orange text-base text-center tracking-[0] leading-5 whitespace-nowrap">
                      VIEW ALL PEOPLE
                    </span>
                    <div className="relative w-6 h-6">
                      <Image src="/arrow-right-orange.png" alt="Arrow" fill className="object-contain" />
                    </div>
                  </Link>
                  <Image src="/line-45.png" alt="Divider" width={2} height={38} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {teamMembers.map((member) => (
                  <Card key={member.id} className="w-full bg-[#F9F9F9] rounded-lg overflow-hidden hover:shadow-xl transition-shadow border border-solid border-white/30">
                    <CardContent className="p-0">
                      <div className="flex flex-col items-center">
                        <div className="relative w-full h-[342px]">
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

        <section className="w-full py-20 bg-brand-light flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-montserrat font-semibold text-brand-text/60 text-base tracking-widest uppercase">
              our values
            </p>
            <h2 className="font-inter font-semibold text-brand-text text-2xl lg:text-3xl">
              Areas of Expertise
            </h2>
          </div>

          <div className="relative w-full max-w-[1440px] px-6 lg:px-20 py-20">
            <Image
              src="/peerlaw4.jpg"
              alt="background"
              fill
              className="object-cover blur-[0.25px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark/60" />
            <div className="relative z-10 border border-solid border-[#979797cc] rounded-[0px_30px] p-10 md:p-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 w-full">
                {[
                  {
                    icon: "/vector1.png",
                    title: "PROFESSIONALISM",
                    description:
                      "Maintaining the highest standards of legal practice and ethical conduct in every case arises",
                  },
                  {
                    icon: "/vector12.png",
                    title: "INTEGRITY",
                    description:
                      "Building trust through transparency, honesty and unwavering commitment to our clients worldwide.",
                  },
                  {
                    icon: "/vector13.png",
                    title: "INNOVATION",
                    description:
                      "Embracing modern legal solutions and technology to deliver exceptional results to our clients.",
                  },
                  {
                    icon: "/vector14.png",
                    title: "CLIENT FOCUS",
                    description:
                      "Your success is our priority. We listen, understand, and deliver tailored legal solutions",
                  },
                ].map((value, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center gap-6">
                    <div className="relative w-12 h-12">
                      <Image
                        src={value.icon}
                        alt={value.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-montserrat font-semibold text-white text-lg uppercase">
                      {value.title}
                    </h3>
                    <p className="font-montserrat font-normal text-white/80 text-base leading-5">
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
                <h2 className="font-montserrat font-bold text-white text-2xl leading-7 text-center">
                  Let's discuss how Pearlaw Corporate can drive your business
                  forward.
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded font-montserrat font-semibold">
                  <Link href="/retainership">Book Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border border-orange text-black hover:bg-white/10 px-8 py-4 rounded font-montserrat font-semibold"
                >
                  <Link href="/contact">Contact Us</Link>
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
