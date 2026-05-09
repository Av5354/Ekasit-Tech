import { Wifi, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="relative isolate overflow-hidden bg-[#050009]">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(132,36,255,0.28),transparent_22rem),linear-gradient(180deg,#070012_0%,#050009_100%)]" />
    <div className="hero-grid absolute inset-x-0 top-0 mx-auto h-full max-w-[1300px] opacity-60" />

    {/* CTA strip */}
    <div className="relative z-10 border-y border-purple-300/18 bg-purple-500/8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_0_42px_rgba(132,36,255,0.14)] backdrop-blur-2xl">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left md:gap-6">
        <div>
          <h3 className="text-xl font-bold text-[#d8c8ea] drop-shadow-[0_0_22px_rgba(149,74,255,0.38)] sm:text-2xl">
            Get connected with us and stay connected!
          </h3>
          <p className="text-purple-100/60 text-sm mt-1">
            Experience lightning-fast internet with EKASIT TECH.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2 text-purple-100/80">
            <Phone className="h-5 w-5 text-[#b884ff]" />
            <span className="font-semibold text-sm sm:text-base">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2 text-purple-100/80">
            <Mail className="h-5 w-5 text-[#b884ff]" />
            <span className="font-semibold text-sm sm:text-base">+91 12345 67890</span>
          </div>
        </div>
      </div>
    </div>

    {/* Main footer */}
    <div className="relative z-10 container mx-auto px-4 py-10">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl mb-4">
            <Wifi className="h-6 w-6 text-[#b884ff]" />
            <span className="bg-gradient-to-r from-[#9f63ff] via-[#b884ff] to-[#e8d8ff] bg-clip-text text-transparent">
              EKASIT
            </span>
            <span className="text-[#d8c8ea]">TECH</span>
          </div>
          <p className="text-sm text-purple-100/45 leading-relaxed">
            Reliable Internet Services — Fast, affordable broadband for everyone.
            Connecting homes and businesses since 2020.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-purple-100/80 text-sm uppercase tracking-wider">
            Product
          </h4>
          <div className="flex flex-col gap-2 text-sm text-purple-100/45">
            <Link to="/" className="hover:text-[#b884ff] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#b884ff] transition-colors">About</Link>
            <Link to="/services" className="hover:text-[#b884ff] transition-colors">Services</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-purple-100/80 text-sm uppercase tracking-wider">
            Support
          </h4>
          <div className="flex flex-col gap-2 text-sm text-purple-100/45">
            <Link to="/plans" className="hover:text-[#b884ff] transition-colors">Plans</Link>
            <Link to="/contact" className="hover:text-[#b884ff] transition-colors">Contact</Link>
            <span className="cursor-pointer hover:text-[#b884ff] transition-colors">FAQ</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-purple-100/80 text-sm uppercase tracking-wider">
            Contact
          </h4>
          <div className="flex flex-col gap-3 text-sm text-purple-100/45">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#b884ff]" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#b884ff]" /> info@ekasittech.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#b884ff]" /> India
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-purple-300/12 mt-10 pt-6 text-center text-sm text-purple-100/28">
        © {new Date().getFullYear()} EKASIT TECH. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
