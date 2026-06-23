"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <div className="w-full min-h-screen relative flex flex-col bg-black overflow-hidden">
            <Navbar />
            <main className="w-full flex-1 flex flex-col">
                <Hero />
            </main>
        </div>
    );
}
