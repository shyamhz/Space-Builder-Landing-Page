/* eslint-disable react-doctor/no-array-index-as-key -- intentional: key forces remount to re-trigger flip animation */
/* eslint-disable react-doctor/no-initialize-state -- ResizeObserver monitors ongoing content changes, not just mount */
import { useState, useEffect, useRef } from "react";

const WORDS = ["Space", "Saas", "Brand", "Growth", "Apps"];

export default function FlipWord() {
  const [i, setI] = useState(0);
  const [width, setWidth] = useState<number | null>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      if (entry) setWidth(entry.contentRect.width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <span
      className="relative inline-block overflow-hidden pb-[0.12em] align-bottom transition-all duration-300 ease-out"
      style={{ width: width ? `${width}px` : "auto" }}
    >
      <span ref={measureRef} className="invisible absolute top-0 left-0 whitespace-nowrap">
        {WORDS[i]}
      </span>

      <span
        key={i}
        className="block animate-flip-in bg-gradient-to-br from-gold-1 via-gold-2 to-gold-3 bg-clip-text text-transparent whitespace-nowrap"
      >
        {WORDS[i]}
      </span>
    </span>
  );
}
