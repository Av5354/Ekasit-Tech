import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Wifi } from "lucide-react";
import { Button } from "../components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  // { to: "/services", label: "Services" },
  { to: "/plans", label: "Plans" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-300/15 bg-[#070012]/72 backdrop-blur-2xl shadow-[0_12px_42px_rgba(0,0,0,0.32),0_0_34px_rgba(132,36,255,0.12)]">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 ">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-[#efe1ff] drop-shadow-[0_0_18px_rgba(166,108,255,0.5)]"
        >
          <Wifi className="h-6 w-6 text-[#b884ff] drop-shadow-[0_0_12px_rgba(184,132,255,0.75)]" />
          <span className="bg-gradient-to-r from-[#b884ff] to-[#efe1ff] bg-clip-text text-transparent">
            EKASIT
          </span>
          <span className="text-[#efe1ff]">TECH</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === l.to
                  ? "bg-purple-400/15 text-[#caa8ff] shadow-[0_0_20px_rgba(166,108,255,0.22)]"
                  : "text-purple-100/70 hover:bg-purple-300/10 hover:text-[#d9c3ff]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-4 rounded-full border border-purple-200/35 bg-gradient-to-r from-[#7614ff] via-[#8b22ff] to-[#a955ff] px-6 font-semibold text-white shadow-[0_0_22px_rgba(132,36,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(167,96,255,0.7)]"
          >
            <Link to="/contact">Renew </Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden rounded-full border border-purple-300/15 bg-purple-300/10 p-2 text-[#efe1ff]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-purple-300/15 bg-[#090016]/95 px-4 pb-4 backdrop-blur-2xl">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                pathname === l.to
                  ? "bg-purple-400/15 text-[#caa8ff]"
                  : "text-purple-100/70 hover:bg-purple-300/10 hover:text-[#d9c3ff]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className="mt-2 w-full rounded-full border border-purple-200/35 bg-gradient-to-r from-[#7614ff] via-[#8b22ff] to-[#a955ff] font-semibold text-white shadow-[0_0_22px_rgba(132,36,255,0.5)]"
          >
            <Link to="/contact" onClick={() => setOpen(false)}>
              Subscribe Now
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
