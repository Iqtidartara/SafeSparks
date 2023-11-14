"use client";
import { cn } from "@/lib/utils";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  Popover as SHPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/Dialog"


import { Button } from "@/components/ui/button";
import EmailDialog from "@/components/EmailDialog";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/Legislation", label: "Legislation" },
    { href: "/SafeSpark", label: "Why SafeSpark ?" },
    { href: "/Eicr", label: "EICR" },
    { href: "/Faq", label: "FAQ's" },
  ];


  return (
    <div className="w-full bg-[#fffff] bgborder">
      <Popover className="container mx-auto flex items-center py-3  max-w-[77.5rem] ">
        <Image
          src="/Flogo.png"
          width={85}
          height={85}
          alt="logo"
          className="cursor-pointer"
        />
        <div className="grow">
          <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "font-[500] text-[1.125rem] leading-normal  text-[#323232] Cliptext",
                  pathname.toLocaleLowerCase() === link.href.toLocaleLowerCase()
                    ? "current-page-text"
                    : ""
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 buttongradient text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div
          className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition ${
            menuOpen ? "md:hidden" : "hidden"
          }`}
        >
          <div className="rounded-lg text-[#323232] text-center  bg-white  shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Image src="/logo.png" width={83} height={47} alt="logo" />
                <div className="mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-white  hover-bg-gray-100 hover-text-gray-500 focus-outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6 buttongradient" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={cn(
                        "focus-outline-none focus-ring-2 focus-ring-inset focus-ring-gray-500 px-2",
                        pathname.toLocaleLowerCase() ===
                          link.href.toLocaleLowerCase()
                          ? "current-page-text"
                          : ""
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
              <Dialog>
              <DialogTrigger asChild>
              <Button className="homebtn">Contact us</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
              <EmailDialog />
              </DialogContent>
              </Dialog>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
        <SHPopover>
      <PopoverTrigger asChild className="">
        <Button className="homebtn">Contact us</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 mr-[5.3rem]">
       <EmailDialog />
      </PopoverContent>
    </SHPopover>
        </div>
      </Popover>
    </div>
  );
};

export default Navbar;
