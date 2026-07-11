"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/without bg.png"
                alt="Selex Prime Engineering"
                width={230}
                height={66}
                className="h-11 sm:h-12 md:h-13 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    isActive ? "text-gold font-semibold" : "text-navy-light"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:0767825324"
              className="flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span>076 782 5324</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-navy px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-gold hover:text-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-navy hover:text-gold transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200" id="mobile-menu">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-gold/10 text-gold"
                      : "text-navy-light hover:bg-slate-50 hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="border-t border-slate-100 pt-4 mt-4 flex flex-col gap-3">
              <a
                href="tel:0767825324"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-navy hover:text-gold transition-colors"
              >
                <Phone className="h-5 w-5 text-gold" />
                <span>076 782 5324</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center inline-flex items-center justify-center rounded bg-navy px-4 py-2.5 text-base font-medium text-white transition-colors hover:bg-gold hover:text-navy"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
