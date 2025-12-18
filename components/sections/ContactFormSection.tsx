"use client";

import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import Image from "next/image";

export function ContactFormSection() {
  return (
    <div className="relative -mt-[440px] lg:-mt-[340px] w-full flex justify-center px-6 lg:px-4 pb-[140px]">
      <Card className="w-full max-w-[868px] rounded-lg overflow-hidden bg-gradient-to-b from-white/88 to-white/88 bg-blend-overlay border-0 shadow-2xl">
        <CardContent className="px-6 md:px-12 lg:px-20 py-[60px]">
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="flex flex-col w-full max-w-[585px] items-center gap-[18px]">
              <h2 className="font-montserrat font-semibold text-brand-text text-2xl lg:text-[28px] text-center tracking-[0] leading-[34px]">
                Let's Start the Conversation
              </h2>

              <p className="font-inter font-normal text-brand-text-muted text-base text-center tracking-[0] leading-6">
                Whether you need legal advice, consultation, or representation,
                we're here to help you every step of the way
              </p>
            </div>

            <form className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col md:flex-row items-center gap-[22px] w-full">
                    <Input
                      placeholder="Name*"
                      className="flex-1 h-14 bg-white rounded font-dm-sans font-normal text-[#9e9e9e] text-sm"
                      required
                    />

                    <Input
                      type="email"
                      placeholder="Email*"
                      className="flex-1 h-14 bg-white rounded font-dm-sans font-normal text-[#9e9e9e] text-sm"
                      required
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-[22px] w-full">
                    <Input
                      type="tel"
                      placeholder="Phone*"
                      className="flex-1 h-14 bg-white rounded font-dm-sans font-normal text-[#9e9e9e] text-sm"
                      required
                    />

                    <Select>
                      <SelectTrigger className="flex-1 h-14 bg-white rounded font-montserrat font-normal text-[#9e9e9e] text-sm">
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning</SelectItem>
                        <SelectItem value="afternoon">Afternoon</SelectItem>
                        <SelectItem value="evening">Evening</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Textarea
                  placeholder="Message*"
                  className="min-h-[117px] bg-white rounded font-dm-sans font-normal text-[#333333] text-sm pt-[18px] pb-7 px-2.5"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange/90 rounded-lg border-[0.6px] border-solid border-[#9695954c] p-4 gap-2"
              >
                <span className="font-montserrat font-normal text-white text-sm tracking-[0] leading-[18px]">
                  Submit Inquiry
                </span>
                <div className="relative w-5 h-5">
                  <Image
                    src="/lucide-send.svg"
                    alt="Send"
                    fill
                    className="object-contain"
                  />
                </div>
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
