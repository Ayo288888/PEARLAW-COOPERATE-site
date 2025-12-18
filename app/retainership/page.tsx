import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface RetainershipPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
}

const retainershipPlans: RetainershipPlan[] = [
  {
    id: "gem",
    name: "GEM PLAN",
    price: 400000,
    description: "Perfect for early-stage startups and small businesses",
    features: [
      "Up to 10 hours of legal consultation monthly",
      "Contract review and drafting",
      "Basic compliance advisory",
      "Email support (48hr response)",
      "Quarterly compliance check",
    ],
    cta: "Get Started",
  },
  {
    id: "ivory",
    name: "IVORY PLAN",
    price: 750000,
    description:
      "Ideal for growing businesses with regular legal needs",
    isPopular: true,
    features: [
      "Up to 25 hours of legal consultation monthly",
      "Unlimited contract review and drafting",
      "Full compliance management",
      "Priority email and phone support (24hr response)",
      "Monthly compliance audits",
      "Data protection advisory",
      "Employment law support",
    ],
    cta: "Get Started",
  },
  {
    id: "jade",
    name: "JADE PLAN",
    price: 1400000,
    description: "Comprehensive legal support for established businesses",
    features: [
      "Unlimited legal consultation",
      "Dedicated legal counsel",
      "Full-service compliance management",
      "24/7 priority support",
      "Weekly compliance reviews",
      "M&A and transaction support",
      "Litigation management",
      "Board advisory services",
    ],
    cta: "Get Started",
  },
];

export default function RetainershipPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-brand-light">
      <Navbar />

      <PageHero
        title="Retainership Plans"
        subtitle="RETAINERSHIP PLANS"
      />

      <main className="flex-1 w-full flex flex-col">
        <section className="w-full py-20 bg-gradient-to-b from-brand-dark/80 to-brand-dark-alt/60 bg-blend-overlay">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(19,25,39,0.9) 0%, rgba(30,34,63,0.9) 100%)",
            }}
          />
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-6 max-w-2xl">
                <h2 className="font-montserrat font-bold text-white text-2xl lg:text-4xl text-center">
                  Choose a plan that fits your business need. Get ongoing legal
                  support with predictable costs and priority access to our
                  expertise.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-20 bg-brand-light">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="bg-gradient-to-b from-brand-dark/70 to-brand-dark-alt/70 rounded-[0px_30px_0px_30px] border border-white/10 p-12 lg:p-20">
              <div className="flex flex-col items-center gap-16">
                <div className="flex flex-col items-center gap-4 max-w-2xl">
                  <h2 className="font-montserrat font-bold text-white text-2xl lg:text-3xl text-center">
                    RETAINERSHIP PLANS
                  </h2>
                  <p className="font-inter font-normal text-white/70 text-base text-center">
                    Choose a plan that fits your business need. Get ongoing
                    legal support with predictable costs and priority access to
                    our expertise.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {retainershipPlans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`w-full rounded-xl overflow-hidden border ${
                        plan.isPopular
                          ? "ring-2 ring-brand-orange shadow-2xl"
                          : "border-white/10"
                      } ${plan.isPopular ? "bg-white" : "bg-white/95"}`}
                    >
                      {plan.isPopular && (
                        <div className="bg-brand-orange text-white text-center py-2">
                          <p className="font-montserrat font-bold text-sm">
                            MOST POPULAR
                          </p>
                        </div>
                      )}
                      <CardContent className="p-8">
                        <div className="flex flex-col gap-8">
                          <div className="flex flex-col gap-4">
                            <h3 className="font-montserrat font-bold text-brand-text text-lg">
                              {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-2">
                              <span className="font-montserrat font-bold text-4xl text-brand-text">
                                #{plan.price.toLocaleString()}
                              </span>
                            </div>
                            <p className="font-inter font-normal text-brand-text-muted text-sm leading-5">
                              {plan.description}
                            </p>
                          </div>

                          <div className="flex flex-col gap-4">
                            {plan.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                                <span className="font-inter font-normal text-brand-text text-sm leading-5">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          <Button
                            className={`w-full py-3 rounded-lg font-montserrat font-semibold ${
                              plan.isPopular
                                ? "bg-brand-orange hover:bg-brand-orange-dark text-white"
                                : "bg-brand-text text-white hover:bg-brand-text/90"
                            }`}
                          >
                            <div className="relative w-5 h-5">
                              <Image
                                src="/mingcute-check-line.svg"
                                alt="Check"
                                fill
                                className="object-contain"
                              />
                            </div>
                            {plan.cta}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-4 bg-white/10 rounded-lg p-6 max-w-2xl">
                  <p className="font-inter font-normal text-white/70 text-sm text-center">
                    Not sure which plan is right for you? Book a free
                    consultation and we'll help you choose the best option for
                    your business
                  </p>
                  <Button className="bg-white text-brand-dark hover:bg-gray-100 font-montserrat font-semibold">
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
