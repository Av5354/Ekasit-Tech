import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserPlus, Settings, CreditCard } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    num: "1",
    title: "Registration",
    desc: "Create your account by filling in your basic details and choosing your preferred plan.",
  },
  {
    icon: Settings,
    num: "2",
    title: "Installation",
    desc: "Our expert team will visit your location and set up all the equipment for you.",
  },
  {
    icon: CreditCard,
    num: "3",
    title: "Payment",
    desc: "Make a simple, secure payment and start enjoying high-speed internet immediately.",
  },
];

// const Steps = () => (
//   <section className="gradient-purple py-20">
//     <div className="container mx-auto px-4 text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Subscribe EKASIT TECH</h2>
//       <p className="text-white/70 max-w-2xl mx-auto mb-12">
//         Getting started is easy. Follow these simple steps and enjoy lightning-fast internet.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
//         {steps.map((s) => (
//           <div key={s.title} className="flex flex-col items-center">
//             <div className="h-20 w-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white mb-4 border-2 border-white/30">
//               <s.icon className="h-9 w-9" />
//             </div>
//             <div className="text-white/60 text-sm font-semibold mb-1">{s.num}.</div>
//             <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
//             <p className="text-white/60 text-sm leading-relaxed max-w-xs">{s.desc}</p>
//           </div>
//         ))}
//       </div>
//       <Button asChild size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 font-semibold px-10 shadow-lg">
//         <Link to="/contact">Subscribe Now</Link>
//       </Button>
//     </div>
//   </section>
// );

// export default Steps;



const Steps = () => (
  <section className="ai-section gradient-purple py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="soft-heading-glow text-3xl md:text-4xl font-bold text-white mb-4">Test Your Internet Speed</h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-12">
       Check your current download and upload speeds instantly. For the most accurate results, we recommend using a wired LAN connection.
      </p>
      <iframe className="glass-card rounded-2xl" src="https://yourdomain.com/speedtest" width="100%" height="500px" frameBorder="0"></iframe>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
        {steps.map((s) => (
          <div key={s.title} className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-cyan-300/10 backdrop-blur flex items-center justify-center text-[#00F2FF] mb-4 border border-cyan-300/25 shadow-[0_0_28px_rgba(0,242,255,0.16)]">
              <s.icon className="h-9 w-9" />
            </div>
            <div className="text-white/60 text-sm font-semibold mb-1">{s.num}.</div>
            <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{s.desc}</p>
          </div>
        ))}
      </div>
      <Button asChild size="lg" className="neon-button font-semibold px-10">
        <Link to="/contact">Subscribe Now</Link>
      </Button>
    </div>
  </section>
);

export default Steps;
