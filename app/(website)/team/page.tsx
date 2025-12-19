// app/(website)/team/page.tsx

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { teamMembers } from "@/lib/mock-data";
import Image from "next/image";

export default function TeamPage() {
  return (
    <div className="bg-brand-light w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex-col items-center flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] flex items-center justify-center bg-brand-dark">
            <div className="relative z-10 text-center px-6">
                <h1 className="font-montserrat font-bold text-white text-4xl lg:text-5xl">Meet Our Team</h1>
                <p className="font-inter text-white/80 text-lg mt-4">Experienced professionals dedicated to your success</p>
            </div>
        </section>

        {/* Team Grid */}
        <section className="w-full max-w-[1280px] px-6 lg:px-20 py-20 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {teamMembers.map((member) => (
                    <div key={member.id} className="flex flex-col group">
                        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-gray-200">
                            <Image 
                                src={member.image} 
                                alt={member.name} 
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-105" 
                            />
                        </div>
                        <h3 className="font-montserrat font-bold text-brand-text text-xl group-hover:text-brand-orange transition-colors">
                            {member.name}
                        </h3>
                        <p className="font-inter text-brand-orange font-medium text-sm mt-1 uppercase tracking-wider">
                            {member.role}
                        </p>
                    </div>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
