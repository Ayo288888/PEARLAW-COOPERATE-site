import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Check, Calendar } from "lucide-react";

interface RetainershipPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  cta: string;
  hasBorder?: boolean;
}

const retainershipPlans: RetainershipPlan[] = [
  {
    id: "gem",
    name: "GEM Plan",
    price: "#400,000",
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
    name: "IVORY Plan",
    price: "#750,000",
    description: "Ideal for growing businesses with regular legal needs.",
    isPopular: true,
    features: [
      "Up to 25 hours of legal consultation monthly",
      "Unlimited contract review and drafting",
      "Full compliance management",
      "Priority email & phone support (24hr response)",
      "Monthly compliance audits",
      "Data protection advisory",
      "Employment law support",
    ],
    cta: "Get Started",
  },
  {
    id: "jade",
    name: "JADE Plan",
    price: "#1,400,000",
    description: "Comprehensive legal support for established businesses",
    hasBorder: true,
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
    <div className="w-full min-h-screen flex flex-col bg-[#F1F2F6]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[276px] flex items-center justify-center overflow-hidden">
          <Image
            src="/peerlaw10.jpg"
            alt="Retainership Plans"
            fill
            className="object-cover"
            priority
          />
          
          <div className="absolute inset-0 bg-[#131927]/60" />
          <div className="relative z-10 flex flex-col items-center gap-7 max-w-[913px] px-6">
           
            <h1 className="font-montserrat font-bold text-[20px] leading-[20px] text-[#C84E26] text-center uppercase">
              Retainership plans
            </h1>
            <p className="font-inter font-semibold text-[24px] leading-[34px] text-[#FEFEFE] text-center">
              Choose a plan that fits your business need. Get ongoing legal support with predictable costs and priority access to our expertise.
            </p>
          </div>
        </section>
 <br></br>
  
        {/* Main Content Section */}
        <section className="relative w-full flex justify-center py-[60px] lg:py-[120px] px-6 lg:px-20">
           <div className="absolute inset-0 w-full h-full">
              <Image
                src="/peerlaw11.jpg"
                alt="Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#131927]/60" />
           </div>

           <div className="relative z-10 w-full max-w-[1280px] border border-[#979797] rounded-[0px_30px_0px_30px] p-6 md:p-10 lg:p-20 bg-transparent">
              <div className="flex flex-col items-center gap-10 lg:gap-[60px]">
                
                <div className="flex flex-col items-center gap-6 max-w-[719px]">
                  <h2 className="font-montserrat font-bold text-[24px] leading-[20px] text-[#FEFEFE] text-center uppercase">
                    RETAINERSHIP PLANS
                  </h2>
                  <p className="font-inter font-semibold text-[16px] leading-[24px] text-[#FEFEFE]/80 text-center">
                    Choose a plan that fits your business need. Get ongoing
                    legal support with predictable costs and priority access to
                    our expertise.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 w-full items-end">
                  {retainershipPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative flex flex-col items-center p-7 rounded-[14px] bg-[#F1F2F6] w-full h-full min-h-[598px] ${
                        plan.hasBorder ? "border border-[#131927]" : ""
                      }`}
                    >
                      {plan.isPopular && (
                        <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 bg-[#C84E26] rounded-[30px] px-[10px] py-[6px]">
                          <span className="font-montserrat font-semibold text-[14px] leading-[18px] text-white whitespace-nowrap">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="flex flex-col items-center gap-[63px] w-full flex-1 justify-between">
                        <div className="flex flex-col items-center gap-6 w-full">
                          <div className="flex flex-col items-center gap-5 w-full">
                            <h3 className="font-montserrat font-semibold text-[14px] leading-[18px] text-[#2B2B2B] text-center uppercase">
                              {plan.name}
                            </h3>
                            <div className="flex flex-col items-center gap-[18px]">
                              <span className="font-montserrat font-bold text-[32px] leading-[36px] text-[#2B2B2B] text-center">
                                {plan.price}
                              </span>
                              <p className="font-montserrat font-medium text-[14px] leading-[18px] text-[#2B2B2B]/60 text-center">
                                {plan.description}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col items-start gap-[18px] w-full">
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Check className="w-[18px] h-[18px] text-[#C84E26] shrink-0" />
                                <span className="font-montserrat font-normal text-[14px] leading-[18px] text-[#2B2B2B]">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button
                          className={`w-full h-[44px] rounded-[8px] flex items-center justify-center gap-2 ${
                            plan.isPopular
                              ? "bg-[#C84E26] hover:bg-[#b04320] border border-[#C84E26]"
                              : "bg-[#F1F2F6] hover:bg-[#e5e5e5] border-[0.6px] border-[#969595]"
                          }`}
                        >
                          <Calendar className={`w-5 h-5 ${plan.isPopular ? "text-white" : "text-[#2B2B2B]"}`} />
                          <span className={`font-montserrat font-normal text-[14px] leading-[18px] ${plan.isPopular ? "text-white" : "text-[#2B2B2B]"}`}>
                            {plan.cta}
                          </span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-5 w-full max-w-[445px]">
                  <p className="font-montserrat font-normal text-[14px] leading-[18px] text-[#FEFEFE] text-center">
                    Not sure which plan is right for you? Book a free
                    consultation and we'll help you choose the best option for
                    your business
                  </p>
                  <Button
                    className="w-full h-[44px] bg-[#F1F2F6]/20 border border-[#969595] rounded-[8px] hover:bg-[#F1F2F6]/30 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5 text-white" />
                    <span className="font-montserrat font-normal text-[14px] leading-[18px] text-white">
                    Book Free Consultation
                    </span>
                  </Button>
                </div>

              </div>
           </div>
        </section>
      </main>
<br></br>
<br></br>
<br></br>
      <Footer />
    </div>
  );
}
