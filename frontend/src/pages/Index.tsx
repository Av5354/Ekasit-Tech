import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Planstab from "@/components/Planstab";
import About from "@/components/About";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wifi, Check } from "lucide-react";
import broadbandImg from "@/assets/broadband.jpg";
import fiberImg from "@/assets/fiber.jpg";
import Counter from "@/components/counter";
import Announcement from "@/components/Annoucemnet";
import ContactForm from "@/components/ContactForm";

const Index = () => (
  <div>
    <Hero />
    
    <Announcement />
    <About />
    <Counter />
    <Planstab showViewAll />

    {/* <Steps /> */}

    {/* CTA Banner */}
    {/* <section className="gradient-primary py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          A simple, reliable, and affordable solution for unlimited internet
          access
        </h2>
        <p className="text-white/70 mb-6 max-w-2xl mx-auto">
          High-speed broadband with zero interruptions. Join thousands of happy
          customers today.
        </p>
        <Button
          asChild
          size="lg"
          className="rounded-full bg-white text-foreground hover:bg-white/90 font-semibold px-10 shadow-lg"
        >
          <Link to="/plans">Subscribe Now</Link>
        </Button>
      </div>
    </section> */}

    {/* Dark feature section */}
    {/* <section className="gradient-dark py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Best Value
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Connecting the world, one WiFi at a time.
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Experience the fastest, most reliable internet connection with our
              premium plans. We provide cutting-edge technology for seamless
              connectivity.
            </p>
            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Wifi className="h-5 w-5 text-primary" />
                <span className="font-bold">
                  ₹48.99
                  <span className="text-sm font-normal text-white/60">/mo</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Check className="h-5 w-5 text-green-400" />
                <span>Free setup</span>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full gradient-primary border-0 text-white font-semibold px-8 shadow-lg shadow-orange-500/30"
            >
              <Link to="/plans">View Plans</Link>
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={fiberImg}
              alt="Router"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section> */}

    {/* Final CTA */}
    <section className="relative isolate overflow-hidden bg-[#070012] px-4 py-20 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(132,36,255,0.32),transparent_22rem),linear-gradient(180deg,#0b0216_0%,#070012_100%)]" />
      <div className="hero-grid absolute inset-x-0 top-0 mx-auto h-full max-w-[1300px] opacity-70" />
      <div className="relative z-10 container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-[#d8c8ea] drop-shadow-[0_0_28px_rgba(149,74,255,0.38)]">
          Ready to Get Connected?
        </h2>
        <p className="text-purple-100/65 mb-8">
          Reach out to us today and experience the best internet service.
        </p>
        <ContactForm />
      </div>
    </section>
  </div>
);

export default Index;
