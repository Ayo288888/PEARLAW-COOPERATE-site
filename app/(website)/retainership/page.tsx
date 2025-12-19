// app/(website)/services/page.tsx

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { practiceAreas } from "@/lib/mock-data";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="bg-brand-light w-full min-h-screen flex flex-col">
      <Navbar />
      
      <main className="w-full flex-col items-center flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-brand-dark">
           <div className="absolute inset-0">
             <Image
                src="/peerlaw2.png" 
                alt="Services Background"
                fill
                className="object-cover opacity-30"
                priority
             />
           </div>
           <div className="relative z-10 flex flex-col items-center gap-6 px-6">
             <h1 className="font-montserrat font-bold text-white text-4xl lg:text-6xl text-center">
               reyaianhi
             </h1>
             <p className="font-inter text-white/80 text-lg text-center max-w-[600px]">
               Expert legal solutions for every stage of your business journey.
             </p>
           </div>
        </section>

        {/* Services Grid */}
        <section className="w-full max-w-[1280px] px-6 lg:px-20 py-20 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[80px]">
            {practiceAreas.map((area, index) => (
              <div key={index} className="flex flex-col items-center gap-6 group">
                  <div className="relative w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                    <Image
                      src={area.icon}
                      alt={area.title}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 text-center">
                    <h3 className="font-montserrat font-semibold text-brand-text text-xl group-hover:text-brand-orange transition-colors">
                      {area.title}
                    </h3>
                    <p className="font-inter text-brand-text-muted leading-7 text-base">
                      {area.description}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
