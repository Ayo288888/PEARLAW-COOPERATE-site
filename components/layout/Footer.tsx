import Link from "next/link";
import Image from "next/image";
import {
  companyInfo,
  contactInfo,
  socialLinks,
  practiceAreaLinks,
  quickLinks,
} from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="flex flex-col items-start gap-2.5 px-0 py-20 lg:py-[120px] w-full bg-gradient-to-br from-brand-dark-alt to-brand-dark">
      <div className="flex flex-col items-center gap-20 lg:gap-40 w-full px-6 lg:px-20">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[90px]">
            <div className="flex flex-col items-start gap-6">
              <div className="flex flex-col items-start gap-[18px] w-full">
                <Link href="/" className="flex items-center gap-[13px]">
                  <div className="relative w-[50px] h-[50px]">
                    <Image
                      src="/pearlaw-corporate-logo-removebg-preview-1-1.png"
                      alt={`${companyInfo.name} Logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-montserrat font-semibold text-white text-xl leading-6 whitespace-nowrap">
                    {companyInfo.name}
                  </span>
                </Link>

                <p className="font-montserrat font-medium text-white text-base leading-6">
                  {companyInfo.tagline}
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-[18px]">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="flex w-7 h-7 items-center justify-center gap-2.5 p-[5px] bg-white/10 rounded-[14px] hover:bg-white/20 transition-colors"
                  >
                    <div className="relative w-4 h-4">
                      <Image
                        src={social.icon}
                        alt={social.platform}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-7">
              <h3 className="font-montserrat font-bold text-white text-lg leading-6 whitespace-nowrap">
                Contact Info
              </h3>

              <div className="flex flex-col items-start gap-[18px] w-full">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-1 hover:text-brand-orange transition-colors"
                  >
                    <div className="relative w-6 h-6">
                      <Image
                        src={contact.icon}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-montserrat font-normal text-white text-base leading-5 whitespace-nowrap">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-[18px]">
              <h3 className="font-montserrat font-bold text-white text-lg leading-6 whitespace-nowrap">
                Practice Areas
              </h3>

              <nav className="flex flex-col items-start gap-[18px]">
                {practiceAreaLinks.map((area, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="font-montserrat font-normal text-white text-base leading-5 whitespace-nowrap hover:text-brand-orange transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col items-start gap-[18px]">
              <h3 className="font-montserrat font-bold text-white text-lg leading-6 whitespace-nowrap">
                Quick Link
              </h3>

              <nav className="flex flex-col items-start gap-[18px]">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="font-montserrat font-normal text-white/80 text-base leading-5 whitespace-nowrap hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto">
          <div className="w-full h-px bg-white/10 mb-[60px]" />
          <p className="font-montserrat font-medium text-white text-sm text-center">
            {companyInfo.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
