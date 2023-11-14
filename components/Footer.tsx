import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/Legislation", label: "Legislation" },
  { href: "/SafeSpark", label: "Why SafeSpark" },
  { href: "/Eicr", label: "EICR" },
  { href: "/Faq", label: "FAQ's" },
];

const Footer = () => {
  return (
    <footer className="bg-[#17182D] text-white">
      <div className="max-w-6xl mx-auto py-8 md:py-16 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="lg:w-1/3 md:w-full mb-8 md:mb-0">
            <Image src={"/Flogo.png"} alt="flogo" width={85} height={76} />
            <p className="footerp mt-4 text-center md:text-left">
              As well as offering PAT testing, we will also be offering a
              comprehensive repairs service all under one roof. Contact us TODAY
              for FAST Professional and Friendly Service: 07824585549, Address:
              16 Bulldale Place, Glasgow, G14 0NE
            </p>
          </div>
          <div className="lg:w-1/3 md:w-full mb-8 md:mb-0">
            <h1 className="text-xl font-bold mb-4">MAIN LINKS</h1>
            <div className="grid grid-cols-2 gap-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={cn("footerlinks")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 md:w-full">
            <h1 className="text-xl font-bold mb-4">SOCIAL LINKS</h1>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="footericon">
                <Image
                  src={"/facebook-circle-fill.png"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </div>
              <div className="footericon">
                <Image
                  src={"/twitter-fill.png"}
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </div>
              <div className="footericon">
                <Image
                  src={"/instagram-fill.png"}
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
