// app/(website)/about/page.tsx

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { statistics, companyInfo } from "@/lib/mock-data";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-brand-light w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex-col items-center flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] flex items-center justify-center bg-brand-dark">
             <div className="relative z-10 text-center px-6 max-w-3xl">
                <h1 className="font-montserrat font-bold text-white text-4xl lg:text-5xl mb-6">About {companyInfo.name}</h1>
                <p className="font-inter text-white/80 text-lg leading-relaxed">{companyInfo.tagline}</p>
            </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full bg-white py-16 border-b border-gray-100">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {statistics.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <span className="font-montserrat font-bold text-brand-orange text-4xl lg:text-5xl mb-2">{stat.value}</span>
                            <span className="font-inter text-brand-text-muted text-sm lg:text-base font-medium">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Main Content */}
        <section className="w-full max-w-[1280px] px-6 lg:px-20 py-20 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="font-montserrat font-bold text-brand-text text-3xl mb-6">Who We Are</h2>
                    <div className="font-inter text-brand-text-muted space-y-6 leading-relaxed text-lg">
                        <p>
                            Pearlaw Corporate is a leading law firm dedicated to providing exceptional legal services to businesses and individuals. 
                            With a focus on clarity, confidence, and experience, we navigate complex legal landscapes to deliver results that matter.
                        </p>
                        <p>
                            Our team of experienced attorneys brings a wealth of knowledge across various practice areas, including Corporate Law, 
                            Tech Law, and Dispute Resolution, ensuring that our clients receive comprehensive and tailored legal solutions.
                        </p>
                        <p>
                            We believe in building lasting relationships with our clients based on trust, transparency, and a shared commitment to success.
                        </p>
                    </div>
                </div>
                <div className="flex-1 relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                     <Image 
                        src="/peerlaw2.png" 
                        alt="About Pearlaw Corporate" 
                        fill 
                        className="object-cover" 
                     />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
