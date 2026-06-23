"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import * as THREE from "three";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Three.js Scene Setup (Noon.ai-style organic golden ribbon waves)
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    
    // Position camera slightly elevated and tilted down for perspective depth
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 8.5);
    camera.lookAt(0, -0.3, -1);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Construct parallel line wave grid
    const lines: THREE.Line[] = [];
    const lineGeometries: THREE.BufferGeometry[] = [];
    const linePositions: Float32Array[] = [];

    const linesCount = 60; // Dense parallel lines
    const pointsCount = 180; // Smooth curves

    for (let i = 0; i < linesCount; i++) {
      const positions = new Float32Array(pointsCount * 3);
      // Span lines along Z axis from back to front
      const zRatio = i / linesCount;
      const z = -5 + zRatio * 10;

      for (let j = 0; j < pointsCount; j++) {
        // Span points along X axis from left to right
        const x = -12 + (j / pointsCount) * 24;
        positions[j * 3] = x;
        positions[j * 3 + 1] = 0; // Dynamic height
        positions[j * 3 + 2] = z;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      lineGeometries.push(geo);
      linePositions.push(positions);

      // Create a warm gold color gradient from deep amber to bright gold
      const ratio = i / linesCount;
      const r = 0.78 + ratio * 0.15; // Red channel
      const g = 0.62 - ratio * 0.12; // Green channel
      const b = 0.28 - ratio * 0.10; // Blue channel
      const color = new THREE.Color(r, g, b);

      // Center lines are brighter, edges fade out for focus
      const lineOpacity = Math.sin(ratio * Math.PI) * 0.65 + 0.05;

      const mat = new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: lineOpacity,
      });

      const line = new THREE.Line(geo, mat);
      scene.add(line);
      lines.push(line);
    }

    // Mouse tracking for parallax camera motion
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Damped mouse movement (lerp)
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      // Rotate camera viewport slightly depending on mouse position (Parallax)
      camera.position.x = currentMouseX * 1.5;
      camera.position.y = 2.2 + currentMouseY * 0.8;
      camera.lookAt(0, -0.3, -1);

      // Animate wave vertices
      for (let i = 0; i < linesCount; i++) {
        const positions = linePositions[i];
        const geo = lineGeometries[i];
        const posAttr = geo.attributes.position;
        const zRatio = i / linesCount;
        const z = -5 + zRatio * 10;

        for (let j = 0; j < pointsCount; j++) {
          const x = -12 + (j / pointsCount) * 24;

          // Main sine wave over X axis modulated by Z axis and time
          let y = Math.sin(x * 0.38 + elapsed * 1.3) * Math.cos(z * 0.25 + elapsed * 0.7) * 1.2;
          
          // High-frequency secondary wave for organic texture
          y += Math.sin(x * 0.95 - elapsed * 1.8) * Math.cos(z * 0.45 + elapsed * 0.9) * 0.28;
          
          // Micro wave ripple
          y += Math.sin(x * 2.2 + elapsed * 2.8) * 0.06;

          // Gaussian Bell Mask so the waves die down perfectly at left/right viewport boundaries
          const horizontalMask = Math.exp(-Math.pow(x / 4.5, 2));

          // Depth Mask to fade waves at the very front and back
          const depthMask = Math.sin(zRatio * Math.PI);

          positions[j * 3 + 1] = y * horizontalMask * depthMask * 1.6;
        }

        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up geometries and materials
      lineGeometries.forEach((geo) => geo.dispose());
      lines.forEach((line) => {
        if (Array.isArray(line.material)) {
          line.material.forEach((m) => m.dispose());
        } else {
          line.material.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-center px-6">
      
      {/* 3D Wave Canvas Background */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-85">
        <canvas ref={canvasRef} className="w-full h-full block bg-transparent" />
      </div>

      {/* Centered Typography overlay */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl pt-24 pb-12 select-none">
        
        {/* Big noon.ai-style Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight bg-gradient-to-b from-[#E8E4DD] via-[#ffffff] to-[#C8A84E] bg-clip-text text-transparent pb-3"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          SpaceBuilder
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-sm sm:text-base md:text-lg text-[#8A8680]/90 tracking-wide font-normal max-w-lg leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          The most powerful AI-driven automation workflows and digital experiences ever deployed.
        </motion.p>

        {/* Golden-glowing CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 px-8 py-3.5 mt-10 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-[#C8A84E]/10 hover:bg-[#C8A84E]/20 text-[#C8A84E] border border-[#C8A84E]/30 hover:border-[#C8A84E]/60 shadow-[0_0_20px_rgba(200,168,78,0.1)] hover:shadow-[0_0_30px_rgba(200,168,78,0.25)]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Decorative corner guidelines */}
      <div className="absolute top-10 left-10 text-[9px] font-mono text-muted/10 tracking-widest hidden md:block">
        [ SB // ENGINE_ACTIVE ]
      </div>
      <div className="absolute bottom-10 right-10 text-[9px] font-mono text-muted/10 tracking-widest hidden md:block">
        [ OSCILLATOR: 60Hz // GOLD_NOISE ]
      </div>
    </section>
  );
}
