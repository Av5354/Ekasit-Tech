import { Zap, Shield, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    desc: "Blazing fast internet speeds for seamless browsing and streaming.",
  },
  {
    icon: Globe,
    title: "Reliable Network",
    desc: "99.9% uptime guarantee with redundant network infrastructure.",
  },
  {
    icon: Shield,
    title: "Security & Privacy",
    desc: "Enterprise-grade security to protect your data and privacy.",
  },
  {
    icon: Headphones,
    title: "24/7 Live Support",
    desc: "Expert support team available round the clock for assistance.",
  },
];

const Features = () => (
  <section className="relative isolate overflow-hidden bg-[#070012] py-20">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,36,255,0.14),transparent_24rem)]" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#d8c8ea] drop-shadow-[0_0_28px_rgba(149,74,255,0.35)]">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="relative overflow-hidden flex flex-col items-center gap-4 rounded-2xl border border-purple-300/18 bg-[#090016]/90 p-6 shadow-[0_0_28px_rgba(132,36,255,0.12),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/35 hover:shadow-[0_0_40px_rgba(132,36,255,0.24)] hover:-translate-y-1"
          >
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#7614ff] to-[#b884ff] flex items-center justify-center text-white shadow-[0_0_22px_rgba(132,36,255,0.45)]">
              <f.icon className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-base text-[#d8c8ea]">{f.title}</h3>
            <p className="text-purple-100/55 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
