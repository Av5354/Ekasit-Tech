import {
  CalendarDays,
  Clock3,
  MessageSquareText,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";
import { Sparkles as SparklesField } from "@/components/Sparkles";

const About = () => (
  <section className="relative isolate overflow-hidden bg-[#070012] px-4 py-20 text-center sm:py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_56%,rgba(132,36,255,0.42),transparent_20rem),linear-gradient(180deg,#070012_0%,#050009_58%,#090016_100%)]" />
    <div className="hero-grid absolute inset-x-0 top-0 mx-auto h-full max-w-[1300px] opacity-80" />
    <div className="hero-checkers hero-checkers-left" />
    <div className="hero-checkers hero-checkers-right" />

    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-300/35 bg-purple-500/20 px-4 py-2 text-xs font-medium text-purple-100 shadow-[0_0_28px_rgba(139,92,246,0.28)] backdrop-blur-2xl">
        <Sparkles className="h-3.5 w-3.5 text-[#d9c2ff]" />
        About
      </div>

      <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-[#d8c8ea] drop-shadow-[0_0_36px_rgba(149,74,255,0.32)] sm:text-4xl lg:text-5xl">
        Powerful Network Solutions to Simplify Your Connectivity
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-purple-100/72 sm:text-base">
        Discover how our reliable broadband services keep your home, business,
        and community connected with faster speeds and steady support.
      </p>

      <div className="mt-16 grid items-center gap-12 text-left lg:grid-cols-[0.9fr_1.1fr]">
        <div className="animate-rise">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-300/15 bg-purple-500/10 px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#b884ff]">
            <CalendarDays className="h-3.5 w-3.5" />
            Effortless Connectivity
          </div>

          <h3 className="max-w-xl text-3xl font-bold leading-tight text-[#d8c8ea] sm:text-4xl lg:text-5xl">
            Automate <span className="bg-gradient-to-r from-[#9f63ff] via-[#b884ff] to-[#e8d8ff] bg-clip-text text-transparent">Internet</span> Experiences
          </h3>

          <p className="mt-6 max-w-xl text-sm leading-7 text-purple-100/70 sm:text-base">
            Our service reduces downtime, improves speed, and makes every
            connection feel smooth, so you can focus on work, learning,
            entertainment, and everything that matters.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[220px] overflow-hidden">
            <SparklesField
              density={1200}
              speed={1.2}
              color="#9f63ff"
              direction="top"
              className="absolute inset-0 h-full w-full opacity-60"
            />
          </div>
          <div className="absolute left-1/2 top-0 h-28 w-72 -translate-x-1/2 rounded-full bg-[#8b22ff]/40 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-purple-300/28 bg-[#090016]/90 p-4 shadow-[0_0_42px_rgba(132,36,255,0.34),inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(179,119,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(179,119,255,0.08)_1px,transparent_1px)] bg-[size:84px_84px]" />
            <div className="relative min-h-[270px] rounded-xl border border-purple-300/10 bg-[#050009]/70 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#7614ff] to-[#b884ff] text-white shadow-[0_0_20px_rgba(132,36,255,0.5)]">
                  <Wifi className="h-4 w-4" />
                </div>
                <div className="max-w-[260px] rounded-lg border border-purple-300/10 bg-[#080012] px-4 py-3 text-xs leading-5 text-purple-100/78">
                  Can you optimize my home and office internet setup today?
                </div>
                <div className="ml-auto rounded-md bg-[#7614ff] px-2 py-1 text-xs font-semibold text-white">
                  ET
                </div>
              </div>

              <div className="mt-5 ml-12 max-w-[300px] rounded-xl border border-purple-300/10 bg-purple-500/10 p-4 text-xs leading-5 text-purple-100/76">
                Sure, we can recommend the right plan, router placement, and
                support options for your usage.
                <div className="mt-3 rounded-lg border border-purple-300/12 bg-[#10031d] p-3">
                  <div className="flex items-center gap-2 text-[#b884ff]">
                    <Zap className="h-3.5 w-3.5" />
                    Fiber broadband upgrade
                    <span className="ml-auto text-purple-100/48">Today</span>
                  </div>
                </div>
              </div>

              <div className="absolute right-6 top-16 w-32 rounded-xl border border-purple-300/22 bg-[#0b0216] p-3 text-xs shadow-[0_0_24px_rgba(132,36,255,0.22)]">
                <div className="mb-2 flex items-center gap-2 text-[#b884ff]">
                  <Clock3 className="h-3.5 w-3.5" />
                  Installation
                </div>
                <p className="text-purple-100/58">14:00 - 15:30</p>
                <div className="mt-4 text-[#b884ff]">AI Suggestion</div>
              </div>

              <div className="absolute bottom-6 right-8 w-[250px] rounded-xl border border-purple-300/22 bg-[#0c0416] p-4 shadow-[0_0_30px_rgba(132,36,255,0.28)]">
                <div className="mb-3 flex items-center justify-between text-sm text-purple-100">
                  <span>Connection Consultation</span>
                  <span className="text-purple-100/45">x</span>
                </div>
                <div className="space-y-3 text-xs text-purple-100/64">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-3.5 w-3.5 text-[#b884ff]" />
                    27th May, 14:00
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquareText className="h-3.5 w-3.5 text-[#b884ff]" />
                    Remote Support
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="rounded-full border border-purple-300/25 px-3 py-2 text-xs text-purple-100/72">
                    Reschedule
                  </button>
                  <button className="rounded-full bg-gradient-to-r from-[#7614ff] to-[#a955ff] px-3 py-2 text-xs font-medium text-white shadow-[0_0_18px_rgba(132,36,255,0.38)]">
                    Join
                  </button>
                </div>
              </div>

              <div className="absolute bottom-5 left-4 right-4 rounded-lg border border-purple-300/10 bg-[#080012] px-4 py-3 text-xs text-purple-100/45">
                Ask anything...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
