"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen relative flex flex-col bg-bg text-fg overflow-hidden">
      <main className="w-full flex-1 flex flex-col">
        <Hero />
        <Offerings />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
