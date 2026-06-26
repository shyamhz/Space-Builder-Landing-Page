"use client";

import { useState, useRef, useEffect } from "react";
import { LazyMotion, m, AnimatePresence, domAnimation } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { X, Linkedin } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Our Offerings", href: "#offerings" },
  { label: "Our Team", href: "/team" },
  { label: "Book Call", href: "/call" },
  { label: "Read FAQ", href: "#faq" },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface AnimatedLinkProps {
  href: string;
  label: string;
  onClick: () => void;
}

function AnimatedLink({ href, label, onClick }: AnimatedLinkProps) {
  const characters = label.split("");

  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative flex items-baseline gap-2 text-3xl sm:text-4xl font-medium tracking-tight text-white transition-colors duration-300"
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <span className="relative overflow-hidden inline-flex">
        {/* Main Text (Slides up and out on hover) */}
        <span className="inline-flex">
          {characters.map((char, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-full"
              style={{
                transitionDelay: `${index * 0.02}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Hover Text (Slides up into view on hover) */}
        <span className="absolute inset-0 inline-flex">
          {characters.map((char, index) => (
            <span
              key={index}
              className="inline-block translate-y-full text-[#e4c585] transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-y-0"
              style={{
                transitionDelay: `${index * 0.02}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [clipPathOrigin, setClipPathOrigin] = useState("calc(100% - 3.5rem) 2.75rem");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={`fixed top-0 left-0 w-full z-45 border-b transition-all duration-300 ${
          scrolled
            ? "bg-black/65 backdrop-blur-md border-white/5 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="overflow-hidden rounded-full">
              <Image
                src="/brand.png"
                width={36}
                height={36}
                className="border border-[3px] scale-[1.2] bg-[#e4c585]"
                alt="Picture of the author"
              />
            </div>
            <span
              className="md:text-4xl text-2xl font-semibold tracking-tight transition-colors duration-200 text-[#e4c585]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Space
              <span className={isOpen ? "text-black/70 font-semibold" : "text-accent"}>
                Builder
              </span>
            </span>
          </Link>

          {/* Navbar Controls Group */}
          <div className="flex items-center gap-4">
            {/* Book Free Call Button */}
            <Link
              href="/call"
              className={`sm:inline-flex items-center justify-center hidden
                h-12 shrink-0 rounded-full md:text-lg text-base font-semibold uppercase md:px-8 px-2
                tracking-wider transition-all duration-200 ${
                  isOpen
                    ? "bg-black text-[#C8A84E] hover:bg-black/90"
                    : "bg-gradient-to-b from-[#E8E4DD] via-white to-[#C8A84E] text-black hover:brightness-110"
                }`}
              style={{
                fontFamily: "var(--font-space-grotesk)",
              }}
            >
              Book Free Call
            </Link>

            <button
              type="button"
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
                <m.span
                  animate={isOpen ? { top: "50%", rotate: 45 } : { top: "0%", rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute left-0 block w-5 h-[1.5px] origin-center transition-colors duration-200 ${
                    isOpen ? "bg-black" : "bg-white/50"
                  }`}
                  style={{ top: 0 }}
                />
                <m.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 block w-3 h-[1.5px] origin-center transition-colors duration-200 ${
                    isOpen ? "bg-black" : "bg-white/50"
                  }`}
                />
                <m.span
                  animate={isOpen ? { top: "50%", rotate: -45 } : { top: "100%", rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute left-0 block w-5 h-[1.5px] origin-center transition-colors duration-200 ${
                    isOpen ? "bg-black" : "bg-white/50"
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
          <m.div
            initial={{ clipPath: `circle(0% at ${clipPathOrigin})` }}
            animate={{ clipPath: `circle(150% at ${clipPathOrigin})` }}
            exit={{ clipPath: `circle(0% at ${clipPathOrigin})` }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#C8A84E] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <m.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-white/60 hover:text-white transition-colors cursor-pointer group flex items-center justify-center"
                  aria-label="Close Menu"
                >
                  {link.label}
                </m.a>
              ))}
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
