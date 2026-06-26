import { ArrowRight } from "lucide-react";
import FlipWord from "./FlipWord";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-40 pb-24 md:pt-52 md:pb-32">
      <div
        aria-hidden
        className="bg-dotgrid pointer-events-none absolute inset-0 opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 h-[460px] w-[860px] max-w-[95%] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(228,197,133,0.18), transparent 68%)",
          filter: "blur(14px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <span
          className="relative overflow-hidden animate-fade-up inline-flex items-center gap-1.5 sm:gap-3 rounded-full border border-gold-3/30 bg-surface/60 px-2.5 sm:px-4 py-1.5 text-[9px] sm:text-[11px] font-medium tracking-wide text-fg-muted whitespace-nowrap
         after:absolute after:inset-0 after:content-['']
         after:-translate-x-full
         after:bg-[linear-gradient(90deg,transparent_40%,color-mix(in_srgb,var(--gold-1)_15%,transparent)_47%,color-mix(in_srgb,var(--gold-3)_50%,transparent)_50%,color-mix(in_srgb,var(--gold-1)_15%,transparent)_53%,transparent_60%)]
         after:animate-shimmer"
          style={{ animationDelay: "0ms" }}
        >
          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-tr from-gold-3 to-gold-1 shadow-[0_0_8px_rgba(228,197,133,0.6)]" />
          <span>On-Time Delivery</span>
          <span className="text-gold-2 font-bold opacity-60">•</span>
          <span>Clean &amp; Scalable Code</span>
          <span className="text-gold-2 font-bold opacity-60">•</span>
          <span>Growth Focused</span>
        </span>

        <h1 className="mt-12 font-display text-[12vw] sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold leading-[0.92] tracking-tight flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4">
          <span className="animate-fade-up inline-block" style={{ animationDelay: "80ms" }}>
            <FlipWord />
          </span>
          <span
            className="animate-fade-up inline-block text-fg"
            style={{ animationDelay: "140ms" }}
          >
            Builder
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-8 max-w-5xl text-balance text-lg leading-relaxed text-fg-muted md:text-xl"
          style={{ animationDelay: "220ms" }}
        >
          SpaceBuilder helps you build <span className="text-fg">businesses</span> - not just
          websites. We design the AI systems, automations, and software that move your company
          forward.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-row items-center justify-center gap-3"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base md:text-lg font-semibold text-bg transition-transform hover:-translate-y-0.5 whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, var(--gold-1), var(--gold-3))",
            }}
          >
            Book a free call
            <ArrowRight className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
          </a>
          <a
            href="#offerings"
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-line-strong px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-base md:text-lg font-semibold text-fg transition-colors hover:bg-surface whitespace-nowrap"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
}
