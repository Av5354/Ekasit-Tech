import { Target, Eye } from "lucide-react";
import Services from "@/components/Services";
import Features from "@/components/Features";

const About = () => (
  <div>
    {/* Page Hero */}
    <section className="relative isolate overflow-hidden bg-[#070012] py-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(132,36,255,0.42),transparent_22rem),linear-gradient(180deg,#080012_0%,#070012_54%,#0b0216_100%)]" />
      <div className="hero-grid absolute inset-x-0 top-0 mx-auto h-full max-w-[1300px] opacity-75" />
      <div className="hero-checkers hero-checkers-left" />
      <div className="hero-checkers hero-checkers-right" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-300/35 bg-purple-500/20 px-4 py-2 text-xs font-medium uppercase tracking-wider text-purple-100 shadow-[0_0_28px_rgba(139,92,246,0.28)] backdrop-blur-2xl">
          Our Story
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-[#efe1ff] drop-shadow-[0_0_42px_rgba(149,74,255,0.38)] mb-6">
          Network{" "}
          <span className="bg-gradient-to-r from-[#9f63ff] via-[#b884ff] to-[#e8d8ff] bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>
        <p className="text-purple-100/70 max-w-3xl mx-auto text-base leading-8">
          Delivering ultra-fast, reliable internet with seamless connectivity,
          empowering homes and businesses through advanced technology, unmatched
          performance, and trusted service excellence.
        </p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="relative isolate overflow-hidden bg-[#070012] px-4 pt-16 pb-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(132,36,255,0.18),transparent_20rem)]" />
      <div className="relative z-10 container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#d8c8ea] drop-shadow-[0_0_22px_rgba(149,74,255,0.35)]">Who We Are</h2>
        <p className="text-purple-100/70 leading-relaxed max-w-3xl">
          EKASIT TECH is a leading internet service provider committed to bridging
          the digital divide. We deliver fast, affordable, and dependable internet
          to homes, businesses, and communities. With a passion for technology and
          a customer-first approach, we have grown into a trusted name in
          connectivity.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="relative isolate overflow-hidden bg-[#070012] py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(132,36,255,0.16),transparent_20rem)]" />
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative overflow-hidden rounded-2xl border border-purple-300/20 bg-[#090016]/90 p-6 shadow-[0_0_32px_rgba(132,36,255,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/35 hover:shadow-[0_0_44px_rgba(132,36,255,0.28)] cursor-pointer">
          <div className="flex gap-4 items-start">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#7614ff] to-[#b884ff] flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_18px_rgba(132,36,255,0.45)]">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-[#d8c8ea]">Our Mission</h3>
              <p className="text-purple-100/60 text-sm leading-relaxed">
                To provide fast, reliable, and affordable internet access to
                every household and business, empowering people through
                connectivity.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-purple-300/20 bg-[#090016]/90 p-6 shadow-[0_0_32px_rgba(132,36,255,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/35 hover:shadow-[0_0_44px_rgba(132,36,255,0.28)] cursor-pointer">
          <div className="flex gap-4 items-start">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#7614ff] to-[#b884ff] flex items-center justify-center text-white flex-shrink-0 shadow-[0_0_18px_rgba(132,36,255,0.45)]">
              <Eye className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-[#d8c8ea]">Our Vision</h3>
              <p className="text-purple-100/60 text-sm leading-relaxed">
                To become the most trusted and innovative ISP, connecting
                millions with seamless, high-speed internet experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Services />
    <Features />

    {/* <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-10 text-white">
        Why Choose EKASIT TECH
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {[
          {
            icon: ThumbsUp,
            title: "Customer First",
            desc: "We put our customers at the center of everything.",
          },
          {
            icon: Award,
            title: "Quality Network",
            desc: "Enterprise-grade infrastructure for reliable performance.",
          },
          {
            icon: Users,
            title: "Local Support",
            desc: "Dedicated support team that understands your needs.",
          },
          {
            icon: Clock,
            title: "Quick Setup",
            desc: "Get connected within 24 hours of placing your order.",
          },
        ].map((f) => (
          <div key={f.title} className="flex items-start gap-3 p-4">
            <f.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}
  </div>
);

export default About;
