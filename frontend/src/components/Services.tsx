import {
  Globe,
  Wifi,
  Monitor,
  Router,
  Shield,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Internet Service",
    desc: "High-speed broadband internet with unlimited data and consistent connectivity for homes and businesses.",
  },
  {
    icon: Monitor,
    title: "Satellite TV",
    desc: "Crystal clear satellite television with hundreds of channels and premium content packages.",
  },
  {
    icon: Wifi,
    title: "Entertainment",
    desc: "Stream your favorite movies, shows and music with our high-speed entertainment packages.",
  },
  {
    icon: Router,
    title: "Voice Calling",
    desc: "Crystal clear voice calling with unlimited minutes and international coverage options.",
  },
  {
    icon: Shield,
    title: "WiFi Setup",
    desc: "Professional WiFi installation and setup with full coverage for your home or office space.",
  },
  {
    icon: Headphones,
    title: "IT Help",
    desc: "24/7 expert technical support to resolve any connectivity or service issues quickly.",
  },
];

const Services = () => (
  <section className="relative isolate overflow-hidden bg-[#070012] py-20">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,36,255,0.16),transparent_26rem)]" />
    <div className="relative z-10 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#d8c8ea] drop-shadow-[0_0_28px_rgba(149,74,255,0.35)]">
        What We Offer
      </h2>
      <p className="text-purple-100/55 text-center max-w-2xl mx-auto mb-12">
        We offer a wide range of internet and connectivity services to meet your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="relative overflow-hidden rounded-xl border border-purple-300/18 bg-[#090016]/90 p-6 shadow-[0_0_28px_rgba(132,36,255,0.12),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/35 hover:shadow-[0_0_40px_rgba(132,36,255,0.24)] hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#7614ff] to-[#b884ff] flex items-center justify-center text-white mb-4 shadow-[0_0_18px_rgba(132,36,255,0.42)]">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-[#d8c8ea]">{s.title}</h3>
            <p className="text-purple-100/55 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
