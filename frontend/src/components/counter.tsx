import {
  Wifi,
  Globe,
  Monitor,
  Router,
  Phone,
  Shield,
  Network,
} from "lucide-react";
import { useRef } from "react";

import { AnimatedBeam, Circle } from "@/components/ui/animated-beam";

const quickLinks = [
  { icon: Globe, label: "Fast Internet" },
  {
    icon: Monitor,
    label: "Satellite TV",
  },
  { icon: Router, label: "Router" },
  {
    icon: Phone,
    label: "Internet of Things",
  },
  { icon: Shield, label: "Privacy" },
  { icon: Wifi, label: "Support" },
];

const Counter = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  const refs = [div1Ref, div2Ref, div3Ref, div4Ref, div5Ref, div6Ref];
  const beamLayout = [
    { ref: div1Ref, curvature: -80, endYOffset: -12, reverse: false },
    { ref: div2Ref, curvature: 0, endYOffset: 0, reverse: false },
    { ref: div3Ref, curvature: 80, endYOffset: 12, reverse: false },
    { ref: div4Ref, curvature: -80, endYOffset: -12, reverse: true },
    { ref: div5Ref, curvature: 0, endYOffset: 0, reverse: true },
    { ref: div6Ref, curvature: 80, endYOffset: 12, reverse: true },
  ];

  return (
    <section className="relative overflow-hidden border-y border-purple-300/15 bg-[#050009]">
      <div className="w-full px-0 flex justify-center">
        <div
          ref={containerRef}
          className="animate-rise relative flex min-h-[320px] w-full items-center justify-center overflow-hidden bg-[#050009] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(255,255,255,0.06)] sm:min-h-[420px] sm:w-[85%] sm:p-8 md:w-[75%] md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(132,36,255,0.22),transparent_18rem),linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0))]" />

          <div className="relative z-10 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-6 md:gap-8">
            <div className="flex flex-col items-start justify-between gap-9 sm:gap-12">
              {quickLinks.slice(0, 3).map((q, index) => {
                const Icon = q.icon;

                return (
                  <Circle
                    key={q.label}
                    ref={refs[index]}
                    label={q.label}
                    className="ml-0 border-purple-200/25 bg-[#080012]/95 text-[#b884ff] shadow-[0_0_28px_rgba(132,36,255,0.26),0_12px_34px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.14)] sm:ml-4 md:ml-6"
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.9} />
                  </Circle>
                );
              })}
            </div>

            <Circle
              ref={centerRef}
              className="h-20 w-20 border-purple-200/35 bg-[#0b0216]/95 text-white shadow-[0_0_34px_rgba(139,34,255,0.35),0_12px_42px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.22)] sm:h-24 sm:w-24"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7614ff] via-[#8b22ff] to-[#b884ff] text-white shadow-[0_0_30px_rgba(132,36,255,0.5)] sm:h-14 sm:w-14">
                <Network className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.1} />
              </div>
            </Circle>

            <div className="flex flex-col items-end justify-between gap-9 sm:gap-12">
              {quickLinks.slice(3).map((q, index) => {
                const Icon = q.icon;

                return (
                  <Circle
                    key={q.label}
                    ref={refs[index + 3]}
                    label={q.label}
                    className="mr-0 border-purple-200/25 bg-[#080012]/95 text-[#b884ff] shadow-[0_0_28px_rgba(132,36,255,0.26),0_12px_34px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.14)] sm:mr-4 md:mr-6"
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.9} />
                  </Circle>
                );
              })}
            </div>
          </div>

          {beamLayout.map((beam, index) => (
            <AnimatedBeam
              key={quickLinks[index].label}
              containerRef={containerRef}
              fromRef={beam.ref}
              toRef={centerRef}
              curvature={beam.curvature}
              endYOffset={beam.endYOffset}
              reverse={beam.reverse}
              dotted
              gradientStartColor="#7614ff"
              gradientStopColor="#b884ff"
              delay={index * 0.32}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Counter;
