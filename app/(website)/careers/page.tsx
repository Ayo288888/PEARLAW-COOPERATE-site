import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Facebook, Instagram, Calendar } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="bg-[#F1F2F6] w-full min-h-screen flex flex-col">
      <Navbar />

      <main className="w-full flex flex-col items-center relative">
        {/* Hero Section */}
        <section className="relative w-full h-[276px] flex items-center justify-center overflow-hidden">
          <Image
            src="/peerlaw10.jpg"
            alt="Careers Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#131927]/60" />
          
          <div className="relative z-10 flex flex-col items-center gap-7 px-4">
            <h1 className="font-montserrat font-bold text-[20px] leading-[20px] text-[#C84E26] text-center uppercase">
              Careers at pearlaw corporate
            </h1>
            <p className="font-inter font-semibold text-[24px] leading-[34px] text-[#FEFEFE] text-center">
              Join our team of dedicated legal professionals
            </p>
          </div>
        </section>

        {/* Content Wrapper */}
        <div className="w-full flex flex-col items-center gap-[120px] py-[80px] lg:py-[120px]">
            
            {/* Join Our Team Card */}
            <div className="w-full max-w-[1280px] px-6">
                <div className="w-full bg-white border border-[#96959566] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] rounded-lg py-[60px] px-6 lg:px-[120px] flex flex-col items-center gap-7 text-center">
                    <h2 className="font-montserrat font-bold text-[40px] lg:text-[64px] leading-[1.1] text-[#C84E26]">
                        Join Our Team
                    </h2>
                    <p className="font-inter font-normal text-[16px] lg:text-[20px] leading-[28px] text-[#2B2B2B] max-w-[718px]">
                        At Pearlaw Corporate, we believe in nurturing fresh talent and providing opportunities for growth in the dynamic field of corporate law.
                        <br></br>
                        <br></br>
                         We are continuously looking for interns and fresh graduates who are passionate about legal excellence and eager to learn from experienced professionals.
                          <br></br>
                          <br></br>
                          While we may not have immediate openings, we maintain a pool of qualified candidates. Submit your application below, and we will reach out when suitable opportunities arise.
                    </p>
                </div>
            </div>

            {/* Application Form Section */}
            <div className="w-full max-w-[1280px] px-6">
                <div className="relative w-full rounded-lg overflow-hidden">
                    <Image
                        src="/peerlaw5.jpg"
                        alt="Form Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/90" />
                    
                    <div className="relative z-10 py-[80px] px-6 md:px-[80px] flex flex-col items-center gap-10">
                        <div className="flex flex-col items-center gap-[18px] text-center">
                            <h2 className="font-montserrat font-semibold text-[28px] leading-[34px] text-[#2B2B2B]">
                                Apply Now!
                            </h2>
                            <p className="font-inter font-normal text-[16px] leading-[24px] text-[#2B2B2B]/80">
                                Fill out the form below to submit your application.
                            </p>
                        </div>

                        <form className="w-full max-w-[1120px] flex flex-col gap-[36px]">
                            <div className="flex flex-col gap-[36px]">
                                <div className="flex flex-col md:flex-row gap-9">
                                    <div className="flex-1 flex flex-col gap-[18px]">
                                        <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">
                                            Full Name*
                                        </label>
                                        <Input 
                                            placeholder="Full name" 
                                            className="h-[56px] bg-white border-none rounded-[4px] placeholder:text-[#9E9E9E]/80 font-dm-sans"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-[18px]">
                                        <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">
                                            Email Address*
                                        </label>
                                        <Input 
                                            placeholder="Enter your email address" 
                                            className="h-[56px] bg-white border-none rounded-[4px] placeholder:text-[#9E9E9E]/80 font-dm-sans"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-9">
                                    <div className="flex-1 flex flex-col gap-[18px]">
                                        <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">
                                            Phone*
                                        </label>
                                        <Input 
                                            placeholder="Enter your phone number" 
                                            className="h-[56px] bg-white border-none rounded-[4px] placeholder:text-[#9E9E9E]/80 font-dm-sans"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-[18px]">
                                        <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">
                                            Availability*
                                        </label>
                                        <Select>
                                            <SelectTrigger className="h-[56px] bg-white border-none rounded-[4px] text-[#9E9E9E]/80 font-montserrat">
                                                <SelectValue placeholder="Select your availability" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="immediate">Immediate</SelectItem>
                                                <SelectItem value="2weeks">2 Weeks Notice</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[18px]">
                                    <label className="font-montserrat font-medium text-[16px] leading-[18px] text-[#2B2B2B]">
                                        Year of Graduation*
                                    </label>
                                    <Input 
                                        placeholder="Year of Graduation*" 
                                        className="h-[56px] bg-white border-none rounded-[4px] placeholder:text-[#333333]/80 font-dm-sans"
                                    />
                                </div>
                            </div>

                            <Button className="w-full h-[54px] bg-[#C84E26] hover:bg-[#b04320] border-[0.6px] border-[#9695954D] rounded-[8px] flex items-center justify-center gap-2">
                                <Calendar className="w-5 h-5 text-white" />
                                <span className="font-montserrat font-medium text-[14px] leading-[18px] text-white">
                                    Submit Application
                                </span>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full max-w-[1280px] px-6 flex flex-col items-center gap-[60px]">
                <h2 className="font-montserrat font-semibold text-[28px] leading-[34px] text-[#2B2B2B] text-center">
                    Frequently Asked Questions
                </h2>
                <div className="w-full flex flex-col gap-7">
                    {[
                        "Who can apply for positions at Pearlaw Corporate",
                        "When will i be contacted after applying",
                        "What does the selection process involve?"
                    ].map((question, idx) => (
                        <div key={idx} className="w-full h-[68px] border-[0.6px] border-[#96959566] rounded-[4px] px-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
                            <span className="font-montserrat font-medium text-[14px] leading-[18px] text-[#2B2B2B]">
                                {question}
                            </span>
                            <ChevronDown className="w-[18px] h-[18px] text-[#292D32]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Social Media CTA */}
            <div className="w-full bg-gradient-to-r from-[#2B2B2B] to-[#1E223F] border-y-[0.5px] border-[#9695954D] shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                <div className="w-full max-w-[1440px] mx-auto py-[80px] px-6 flex flex-col items-center gap-[60px]">
                    <div className="flex flex-col items-center gap-7 text-center max-w-[600px]">
                        <p className="font-montserrat font-semibold text-[16px] leading-[24px] text-[#FEFEFE]/80 uppercase">
                            READY TO GET STARTED?
                        </p>
                        <h2 className="font-inter font-semibold text-[24px] leading-[28px] text-[#FEFEFE]">
                            Follow us on social media for the latest updates on job openings and firm news.
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-[41px]">
                        <a href="#" className="flex items-center justify-center gap-1 w-[129px] h-[46px] bg-white/10 border-[0.6px] border-[#F1F2F6] rounded-[4px] hover:bg-white/20 transition-colors">
                            <Facebook className="w-[18px] h-[18px] text-[#C84E26]" />
                            <span className="font-montserrat font-medium text-[14px] leading-[18px] text-[#C84E26]">Facebook</span>
                        </a>
                        <a href="#" className="flex items-center justify-center gap-1 w-[129px] h-[46px] bg-white/10 border-[0.6px] border-[#F1F2F6] rounded-[4px] hover:bg-white/20 transition-colors">
                            <Instagram className="w-[16px] h-[16px] text-[#C84E26]" />
                            <span className="font-montserrat font-medium text-[14px] leading-[18px] text-[#C84E26]">Instagram</span>
                        </a>
                        <a href="#" className="flex items-center justify-center gap-1 w-[129px] h-[46px] bg-white/10 border-[0.6px] border-[#F1F2F6] rounded-[4px] hover:bg-white/20 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C84E26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                            <span className="font-montserrat font-medium text-[14px] leading-[18px] text-[#C84E26]">Tiktok</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
