"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="w-full min-h-screen relative flex flex-col bg-bg text-fg overflow-hidden">
            <Navbar />
            <main className="w-full flex-1 flex flex-col">
                <Hero />
                <Offerings />
                <Testimonials />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
