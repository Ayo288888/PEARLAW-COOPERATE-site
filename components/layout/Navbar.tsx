"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { NavigationItem } from "@/lib/types";
import { companyInfo, navigationItems } from "@/lib/mock-data";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="h-20 flex items-center px-6 lg:px-20">
          <div className="flex items-center justify-between w-full gap-4 lg:gap-8">
            <Link href="/" className="flex items-center gap-[13px] flex-shrink-0">
              <div className="relative w-[50px] h-[50px]">
                <Image
                  src="/peerlaw-logo.png"
                  alt={`${companyInfo.name} Logo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="font-montserrat font-semibold text-brand-dark text-base lg:text-xl whitespace-nowrap">
                {companyInfo.name}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center justify-center gap-7">
              {navigationItems.map((item: NavigationItem, index: number) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-montserrat font-medium text-brand-dark text-base tracking-[0] leading-[18px] whitespace-nowrap hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-neutral-100 px-4 lg:px-[18px] py-3 lg:py-[13px] h-auto rounded font-montserrat font-medium text-xs tracking-[0] leading-[14px]">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-brand-dark focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-6 animate-in slide-in-from-top-5 h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item: NavigationItem, index: number) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-montserrat font-medium text-brand-dark text-lg hover:text-brand-orange transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild className="bg-brand-orange hover:bg-brand-orange-dark text-neutral-100 w-full h-12 rounded font-montserrat font-medium text-base">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
