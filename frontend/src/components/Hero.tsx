import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Sparkles as SparklesField } from "@/components/Sparkles";

const Hero = () => (
  <>
    {/* Hero Banner */}
    <section className="relative isolate overflow-hidden bg-[#070012]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_84%,rgba(132,36,255,0.46),transparent_22rem),transparent_38rem),linear-gradient(180deg,#080012_0%,#070012_54%,#0b0216_100%)]" />
      <div className="hero-grid absolute inset-x-0 top-0 mx-auto h-[640px] max-w-[1500px]" />
      <div className="hero-checkers hero-checkers-left" />
      <div className="hero-checkers hero-checkers-right" />
      <div className="hero-plus left-[13%] top-[48%]" />
      <div className="hero-plus right-[13%] top-[20%]" />
      {/* <div className="hero-plus hero-plus-small left-[56%] top-[70%]" /> */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[68vh] min-h-[460px] overflow-hidden [mask-image:linear-gradient(to_top,black_0%,black_12%,rgba(0,0,0,0.86)_34%,rgba(0,0,0,0.38)_66%,transparent_100%)] before:absolute before:inset-x-0 before:bottom-0 before:h-2/3 before:bg-[radial-gradient(ellipse_at_bottom,rgba(132,36,255,0.26),rgba(139,34,255,0.14)_38%,transparent_72%)]">
        <SparklesField
          density={1900}
          speed={0.75}
          color="#3aaeff"
          direction="top"
          fadeFrom="bottom"
          className="absolute inset-x-0 bottom-0 h-full w-full opacity-90"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]  min-h-[60px] overflow-hidden [mask-image:linear-gradient(to_top,black_0%,rgba(0,0,0,0.74)_28%,rgba(0,0,0,0.22)_72%,transparent_100%)]">
        <SparklesField
          density={3000}
          speed={3}
          color="#7bd8ff"
          direction="top"
          fadeFrom="bottom"
          className="absolute inset-x-0 bottom-0 h-full w-full opacity-60"
        />
      </div>

      <div className="relative z-10 container mx-auto flex min-h-[90vh] flex-col items-center px-4 pt-20 text-center md:pt-20">
        <div className="animate-rise flex max-w-6xl flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/35 bg-purple-500/20 px-4 py-2 text-xs font-medium text-purple-100 shadow-[0_0_34px_rgba(139,92,246,0.28)] backdrop-blur-2xl sm:px-6 sm:py-3 sm:text-sm md:text-base">
            <Sparkles className="h-4 w-4 text-white drop-shadow-[0_0_10px_rgba(196,151,255,0.9)] sm:h-5 sm:w-5" />
            Reliable Internet Services
          </div>

          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-[#efe1ff] drop-shadow-[0_0_42px_rgba(149,74,255,0.38)] sm:text-5xl md:text-7xl lg:text-8xl">
            EKASIT{" "}
            <span className="bg-gradient-to-r from-[#9f63ff] via-[#b884ff] to-[#e8d8ff] bg-clip-text text-transparent">
              TECH
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-purple-100/78 sm:text-base sm:leading-8 md:text-[20px]">
            It's time to upgrade to ultra-fast, unlimited fiber internet. Connect now and experience internet like
            never before.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full border border-purple-200/40 bg-gradient-to-r from-[#7614ff] via-[#8b22ff] to-[#a955ff] px-8 py-6 text-base font-bold text-white shadow-[0_0_32px_rgba(132,36,255,0.68),inset_0_-6px_14px_rgba(255,255,255,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_46px_rgba(167,96,255,0.82)] sm:px-10 sm:py-7 sm:text-lg"
          >
            <Link to="/plans">
              View Plans <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
