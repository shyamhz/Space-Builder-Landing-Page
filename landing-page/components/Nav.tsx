import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { label: "What we offer", href: "#offerings" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(8,8,10,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, var(--gold-1), var(--gold-3))" }}
          >
            Book a free call
            <ArrowRight size={15} strokeWidth={2} />
          </a>
        </div>

        <button
          onClick={() => setOpen((p) => !p)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-fg md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-fg-muted hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-bg"
              style={{ background: "linear-gradient(135deg, var(--gold-1), var(--gold-3))" }}
            >
              Book a free call
              <ArrowRight size={15} strokeWidth={2} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
