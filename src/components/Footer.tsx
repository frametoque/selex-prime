import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 border-t border-navy">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/without bg.png"
                alt="Selex Prime Engineering"
                width={240}
                height={70}
                className="h-12 md:h-15 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 max-w-md">
              Established in 2017, Selex Prime Engineering provides complete construction and core cutting solutions across Sri Lanka. Precision in every cut. Excellence in every project.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-sm">Monday – Saturday: 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-gold pl-2 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-l-2 border-gold pl-2 mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span>No 93/1, Kuda Waskaduwa, Waskaduwa, Sri Lanka</span>
              </li>
              <li>
                <a href="tel:0767825324" className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                  <span>076 782 5324</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@selexprime.lk" className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                  <span>info@selexprime.lk</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/p/SELEX-Engineering-100063520334047/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                  <Facebook className="h-5 w-5 text-gold flex-shrink-0" />
                  <span>Facebook Page</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="mt-16 border-t border-navy-light pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Selex Prime Engineering. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <p>Developed by </p>
            <Link href="https://frametoque.online"><p className="text-gold">FrameToque Digital Media</p></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
