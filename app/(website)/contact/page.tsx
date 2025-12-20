import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ShieldCheck,
  Users,
  Clock,
  Phone,
  Mail,
  Send,
  Facebook,
  Instagram,
  Check,
} from "lucide-react";

const infoCards = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Trusted Counsel",
    subtitle: "15 Years Experience",
    bgColor: "bg-[#C84E26]",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Client First",
    subtitle: "1000+ Happy Client",
    bgColor: "bg-[#131927]",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Quick Response",
    subtitle: "24-Hours Turnaround",
    bgColor: "bg-[#C84E26]",
  },
];

const contactDetails = [
    {
        icon: <Image src="/whatsapp-white.png" alt="whatsapp" fill />,
        title: "Whatsapp",
        value: "+234 806 430 5645",
        subtitle: "Quick response available",
        bgColor: "bg-[#C84E26]"
    },
    {
        icon: <Phone className="w-6 h-6 text-white" />,
        title: "Call Us",
        value: "+234 813 614 1666",
        subtitle: "Mon-Fri, 9AM-6PM EST",
        bgColor: "bg-[#131927]"
    },
    {
        icon: <Mail className="w-6 h-6 text-white" />,
        title: "Email",
        value: "Contact@pearlaw.com",
        subtitle: "24-hours response time",
        bgColor: "bg-[#131927]"
    },
    {
        icon: <Clock className="w-6 h-6 text-white" />,
        title: "Business Hours",
        value: "Mon-Fri: 9:00AM - 6:00PM",
        subtitle: "Closed on Sundays",
        bgColor: "bg-[#131927]"
    }
];

const retainershipFeatures = [
    {
        icon: <Check className="w-7 h-7 text-[#C84E26]" />,
        title: "Priority support",
        description: "Get expedited responses and dedicated attention"
    },
    {
        icon: <Clock className="w-7 h-7 text-[#C84E26]" />,
        title: "Cost effective",
        description: "Fund monthly rates with predictable costs"
    },
    {
        icon: <ShieldCheck className="w-7 h-7 text-[#C84E26]" />,
        title: "flexible terms",
        description: "Choose Plans that adopt to your needs"
    }
];

export default function ContactPage() {
  return (
    <div className="bg-[#F1F2F6] w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[387px] flex items-center justify-center p-6">
          <Image src="/peerlaw10.jpg" alt="Contact Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#131927]/20" />
          <div className="relative z-10 flex flex-col items-center gap-[50px] max-w-[688px] text-center">
            <div className="flex flex-col items-center gap-7">
              <p className="font-montserrat font-bold text-[20px] leading-[20px] text-white uppercase">
                Professional Legal service
              </p>
              <h1 className="font-inter font-semibold text-[32px] leading-[34px] text-[#C84E26]">
                Get in Touch with Our Legal Experts
              </h1>
            </div>
            <p className="font-inter font-medium text-[24px] leading-[34px] text-white">
              Reach out for legal inquires or professional support. Our experienced team is here to help you navigate your legal needs with confidence and clarity
            </p>
          </div>
        </section>

        {/* Info Cards Section */}
        <section className="w-full max-w-[1280px] mx-auto px-6 py-20 flex flex-col items-center justify-center gap-10">
            {infoCards.map((card, index) => (
                <div key={index} className="w-full min-h-[124px] h-auto border-[0.6px] border-[#96959566] flex items-center p-7 gap-7">
                    <div className={`w-[68px] h-[68px] rounded-lg flex items-center justify-center shadow-md ${card.bgColor}`}>
                        {card.icon}
                    </div>
                    <div className="flex flex-col gap-[18px]">
                        <h3 className="font-montserrat font-semibold text-[20px] lg:text-[24px] leading-[24px] text-[#2B2B2B]">{card.title}</h3>
                        <p className="font-inter font-normal text-[16px] leading-[18px] text-[#2B2B2B]">{card.subtitle}</p>
                    </div>
                </div>
            ))}
        </section>

        {/* Form and Contact Details */}
        <section className="w-full max-w-[1280px] mx-auto px-6 pb-20 flex flex-col gap-20">
            {/* Form */}
            <div className="bg-white p-10 w-full">
                <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-4">
                        <div className="w-[54px] h-0 border-[3px] border-[#C84E26]" />
                        <h2 className="font-montserrat font-semibold text-[20px] leading-[24px] text-[#2B2B2B]">Send Us a Message</h2>
                    </div>
                    <form className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 gap-8">
                            <div className="flex flex-col gap-[18px]">
                                <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">Full Name *</label>
                                <Input placeholder="Full name" className="h-[56px] bg-[#F1F2F6] border-[0.8px] border-[#96959566] rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-[18px]">
                                <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">Email Address *</label>
                                <Input type="email" placeholder="Enter your email address" className="h-[56px] bg-[#F1F2F6] border-[0.8px] border-[#96959566] rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-[18px]">
                                <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">Phone Number *</label>
                                <Input placeholder="Enter your phone number" className="h-[56px] bg-[#F1F2F6] border-[0.8px] border-[#96959566] rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-[18px]">
                                <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">Nature of Inquiry *</label>
                                <Select>
                                    <SelectTrigger className="h-[56px] bg-[#F1F2F6] border-[0.8px] border-[#96959566] rounded-lg text-[#9E9E9E]/80">
                                        <SelectValue placeholder="Select your availability" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="consultation">Consultation</SelectItem>
                                        <SelectItem value="retainership">Retainership</SelectItem>
                                        <SelectItem value="general">General Inquiry</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col gap-[18px]">
                                <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">Brief of Inquiry *</label>
                                <Textarea placeholder="Please provide details about your legal inquiry. Be specific as possible to help us better understand your needs......" className="min-h-[166px] bg-[#F1F2F6] border-[0.8px] border-[#96959566] rounded-lg" />
                            </div>
                        </div>
                        <Button type="submit" className="h-[60px] bg-[#C84E26] hover:bg-[#b04320] rounded-lg flex items-center justify-center gap-2">
                            <span className="font-montserrat font-medium text-[16px] leading-[18px] text-white">Submit Inquiry</span>
                            <Send className="w-5 h-5 text-white" />
                        </Button>
                    </form>
                </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-[18px]">
                    <div className="w-[54px] h-0 border-[3px] border-[#C84E26]" />
                    <h2 className="font-montserrat font-semibold text-[20px] leading-[24px] text-[#2B2B2B]">Contact Details</h2>
                </div>
                <div className="flex flex-col gap-10">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="w-full h-auto lg:h-[130px] border-[0.6px] border-[#96959566] flex flex-col lg:flex-row items-start lg:items-center p-5 lg:p-10 gap-5">
                            <div className={`w-[68px] h-[64px] rounded-lg flex items-center justify-center shadow-md ${detail.bgColor} shrink-0`}>
                                <div className="relative w-6 h-6">{detail.icon}</div>
                            </div>
                            <div className="flex flex-col gap-3.5">
                                <p className="font-montserrat font-normal text-[16px] leading-[18px] text-[#2B2B2B]">{detail.title}</p>
                                <div className="flex flex-col gap-2">
                                    <p className="font-montserrat font-semibold text-[24px] leading-[28px] text-[#2B2B2B]">{detail.value}</p>
                                    <p className="font-inter font-normal text-[16px] leading-[18px] text-[#2B2B2B]">{detail.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    <h3 className="font-montserrat font-semibold text-[16px] leading-[18px] text-[#2B2B2B]">Connect with Us</h3>
                    <div className="flex items-center gap-3.5">
                        <a href="#" className="w-12 h-[46px] bg-[#131927] rounded-lg flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
                            <Facebook className="w-6 h-6 text-white/90" />
                        </a>
                        <a href="#" className="w-12 h-[46px] bg-[#131927] rounded-lg flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
                            <Instagram className="w-6 h-6 text-white/90" />
                        </a>
                        <a href="#" className="w-12 h-[46px] bg-[#131927] rounded-lg flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(241, 242, 246, 0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        {/* Retainership CTA */}
        <section className="w-full relative py-20 px-6">
            <Image src="/peerlaw12.jpg" alt="Retainership" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#131927]/60" />
            <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-6 text-center">
                    <p className="font-montserrat font-semibold text-[16px] leading-[24px] text-[#C84E26] uppercase">Flexible plans</p>
                    <h2 className="font-inter font-medium text-[32px] leading-[36px] text-white">Explore Our Retainership Plans</h2>
                </div>
                <div className="w-[38px] h-0 border-2 border-[#C84E26] rotate-90" />

                <div className="w-full border border-[#979797CC] rounded-[0px_30px] p-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {retainershipFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center gap-6 text-center">
                                <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col gap-7">
                                    <h3 className="font-montserrat font-semibold text-[18px] leading-[24px] text-white uppercase">{feature.title}</h3>
                                    <p className="font-montserrat font-normal text-[16px] leading-[20px] text-white/80">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
