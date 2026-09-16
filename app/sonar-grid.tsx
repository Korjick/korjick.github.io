"use client";

import { useEffect, useRef } from "react";

type Pulse = { x: number; y: number; start: number };

export function SonarGrid({ accent }: { accent: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const rgb = [1, 3, 5].map((offset) => parseInt(accent.slice(offset, offset + 2), 16));
    const glowColor = rgb.join(", ");
    const highlightColor = rgb.map((channel) => Math.round(channel + (255 - channel) * .45)).join(", ");
    const spacing = 44;
    const lifetime = 2100;
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastPulse = -Infinity;
    let lastActivity = -Infinity;
    let pulses: Pulse[] = [];
    let pointer = { x: -1000, y: -1000 };

    function draw(now: number) {
      if (!context) return;
      context.clearRect(0, 0, width, height);
      pulses = pulses.filter((pulse) => now - pulse.start < lifetime);
      const glow = motion.matches ? 0 : Math.max(0, Math.min(1, 1 - (now - lastActivity) / lifetime));

      // Deform the grid gently as each sonar wave passes an intersection.
      const point = (x: number, y: number) => {
        let dx = 0;
        let dy = 0;
        let light = Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / 220) * glow;
        for (const pulse of pulses) {
          const age = Math.max(0, now - pulse.start) / lifetime;
          const distance = Math.hypot(x - pulse.x, y - pulse.y);
          const band = Math.exp(-(((distance - age * 760) / 38) ** 2)) * (1 - age);
          const displacement = band * 7;
          dx += ((x - pulse.x) / (distance || 1)) * displacement;
          dy += ((y - pulse.y) / (distance || 1)) * displacement;
          light = Math.max(light, band);
        }
        return { x: x + dx, y: y + dy, light };
      };

      context.lineWidth = 1;
      context.strokeStyle = "rgba(122, 142, 163, 0.09)";
      context.beginPath();
      for (let x = 0; x <= width + spacing; x += spacing) {
        for (let y = 0; y <= height + spacing; y += spacing) {
          const p = point(x, y);
          if (y === 0) context.moveTo(p.x, p.y); else context.lineTo(p.x, p.y);
        }
      }
      for (let y = 0; y <= height + spacing; y += spacing) {
        for (let x = 0; x <= width + spacing; x += spacing) {
          const p = point(x, y);
          if (x === 0) context.moveTo(p.x, p.y); else context.lineTo(p.x, p.y);
        }
      }
      context.stroke();

      if (glow > 0) {
        const gradient = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260);
        gradient.addColorStop(0, `rgba(${glowColor}, ${glow * .12})`);
        gradient.addColorStop(1, `rgba(${glowColor}, 0)`);
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
      }
      for (let x = 0; x <= width + spacing; x += spacing) {
        for (let y = 0; y <= height + spacing; y += spacing) {
          const p = point(x, y);
          if (p.light < .025) continue;
          context.fillStyle = `rgba(${highlightColor}, ${p.light * .75})`;
          context.fillRect(p.x - 1.5, p.y - 1.5, 3, 3);
        }
      }
      for (const pulse of pulses) {
        const age = Math.max(0, now - pulse.start) / lifetime;
        context.beginPath();
        context.arc(pulse.x, pulse.y, age * 760, 0, Math.PI * 2);
        context.strokeStyle = `rgba(${highlightColor}, ${(1 - age) ** 2 * .22})`;
        context.stroke();
      }
    }

    function animate(now: number) {
      frame = 0;
      draw(now);
      if (!motion.matches && !document.hidden && (pulses.length > 0 || now - lastActivity < lifetime)) {
        frame = requestAnimationFrame(animate);
      }
    }

    function schedule() {
      if (!frame && !document.hidden) frame = requestAnimationFrame(animate);
    }

    function resize() {
      if (!canvas || !context) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      schedule();
    }

    function move(event: PointerEvent) {
      if (motion.matches || document.hidden) return;
      const now = performance.now();
      pointer = { x: event.clientX, y: event.clientY };
      lastActivity = now;
      if (now - lastPulse > 420 || event.type === "pointerdown") {
        pulses.push({ ...pointer, start: now });
        pulses = pulses.slice(-5);
        lastPulse = now;
      }
      schedule();
    }

    function reset() {
      cancelAnimationFrame(frame);
      frame = 0;
      pulses = [];
      lastActivity = -Infinity;
      if (!document.hidden) schedule();
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", reset);
    motion.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", reset);
      motion.removeEventListener("change", reset);
    };
  }, [accent]);

  return <canvas ref={canvasRef} className="sonar-grid" aria-hidden="true" />;
}
