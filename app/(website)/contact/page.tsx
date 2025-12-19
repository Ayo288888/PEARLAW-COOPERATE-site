// app/(website)/retainership/page.tsx

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { contactInfo } from "@/lib/mock-data";
import Image from "next/image";

export default function RetainershipPage() {
  return (
    <div className="bg-brand-light w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex-col items-center flex-grow">
        {/* Hero Section - Taller to accommodate the overlapping contact form */}
        <section className="relative w-full h-[500px] lg:h-[550px] flex items-start pt-20 justify-center bg-brand-dark">
             <div className="relative z-10 text-center px-6">
                <h1 className="font-montserrat font-bold text-white text-4xl lg:text-5xl">Retainership & Contact</h1>
                <p className="font-inter text-white/80 text-lg mt-4 max-w-2xl mx-auto">
                    Partner with us for dedicated legal support. We are ready to assist you with your corporate and individual legal needs.
                </p>
            </div>
        </section>

        {/* Contact Form - Overlaps the hero section */}
        <ContactFormSection />

        {/* Contact Information Grid */}
        <section className="w-full max-w-[1280px] px-6 lg:px-20 pb-20 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((info, index) => (
                    <a 
                        href={info.link} 
                        key={index} 
                        className="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center gap-4 group"
                    >
                        <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                            <Image src={info.icon} alt={info.type} fill className="object-contain" />
                        </div>
                        <p className="font-montserrat font-medium text-brand-text break-all">{info.text}</p>
                    </a>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
