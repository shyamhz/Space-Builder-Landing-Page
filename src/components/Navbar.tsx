"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const [clipPathOrigin, setClipPathOrigin] = useState("calc(100% - 3.5rem) 2.75rem");

    return (
        <>
            <header className="fixed top-6 left-1/2 -translate-x-1/2 w-full max-w-[1300px] z-[60] py-6">
                <div className="px-6 sm:px-20 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2.5">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
                                stroke={isOpen ? "#000000" : "#C8A84E"}
                                strokeWidth="1.5"
                                fill="none"
                                className="transition-colors duration-200"
                            />
                            <circle cx="16" cy="15" r="3" fill={isOpen ? "#000000" : "#C8A84E"} className="transition-colors duration-200" />
                        </svg>
                        <span
                            className={`text-2xl font-semibold tracking-tight transition-colors duration-200 ${
                                isOpen ? "text-black" : "text-foreground"
                            }`}
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                            Space<span className={isOpen ? "text-black/70 font-semibold" : "text-accent"}>Builder</span>
                        </span>
                    </a>

                    {/* Navbar Controls Group */}
                    <div className="flex items-center gap-4">
                        {/* Book Free Call Button */}
                        <a
                            href="#cta"
                            className={`inline-flex items-center justify-center h-12 shrink-0 rounded-full text-lg font-semibold uppercase tracking-wider transition-all duration-200 ${
                                isOpen ? "bg-black text-[#C8A84E] hover:bg-black/90" : "bg-[#C8A84E] text-black hover:bg-[#b0923d]"
                            }`}
                            style={{ fontFamily: "var(--font-space-grotesk)", paddingLeft: "40px", paddingRight: "40px" }}
                        >Book Free Call</a>

                        {/* Hamburger Button */}
                        <button
                            ref={hamburgerRef}
                            onClick={() => {
                                if (hamburgerRef.current) {
                                    const rect = hamburgerRef.current.getBoundingClientRect();
                                    const x = rect.left + rect.width / 2;
                                    const y = rect.top + rect.height / 2;
                                    setClipPathOrigin(`${x}px ${y}px`);
                                }
                                setIsOpen((prev) => !prev);
                            }}
                            className={`flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-200 ${
                                isOpen
                                    ? "bg-black/5 border-black/25 hover:bg-black/10"
                                    : "bg-foreground/5 border-border backdrop-blur-sm hover:bg-foreground/10"
                            }`}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <div className="relative w-5 h-4">
                                <motion.span
                                    animate={
                                        isOpen
                                            ? { top: "50%", rotate: 45 }
                                            : { top: "0%", rotate: 0 }
                                    }
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className={`absolute left-0 block w-5 h-[1.5px] origin-center transition-colors duration-200 ${
                                        isOpen ? "bg-black" : "bg-foreground"
                                    }`}
                                    style={{ top: 0 }}
                                />
                                <motion.span
                                    animate={
                                        isOpen
                                            ? { opacity: 0, scaleX: 0 }
                                            : { opacity: 1, scaleX: 1 }
                                    }
                                    transition={{ duration: 0.2 }}
                                    className={`absolute left-0 top-1/2 -translate-y-1/2 block w-3 h-[1.5px] origin-center transition-colors duration-200 ${
                                        isOpen ? "bg-black" : "bg-foreground"
                                    }`}
                                />
                                <motion.span
                                    animate={
                                        isOpen
                                            ? { top: "50%", rotate: -45 }
                                            : { top: "100%", rotate: 0 }
                                    }
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className={`absolute left-0 block w-5 h-[1.5px] origin-center transition-colors duration-200 ${
                                        isOpen ? "bg-black" : "bg-foreground"
                                    }`}
                                    style={{ top: "100%" }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: `circle(0% at ${clipPathOrigin})` }}
                        animate={{ clipPath: `circle(150% at ${clipPathOrigin})` }}
                        exit={{ clipPath: `circle(0% at ${clipPathOrigin})` }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 bg-[#C8A84E] flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 + i * 0.07,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="text-5xl sm:text-7xl font-medium tracking-tight text-black hover:text-black/60 transition-colors duration-200"
                                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
