"use client";

import { motion, useReducedMotion } from "motion/react";

function seeded(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function DustParticles({ count = 18 }: { count?: number }) {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) return null;

  const particles = Array.from({ length: count }, (_, i) => ({
    left: seeded(i, 1) * 100,
    size: 2 + seeded(i, 2) * 3,
    duration: 10 + seeded(i, 3) * 14,
    delay: seeded(i, 4) * 10,
    drift: (seeded(i, 5) - 0.5) * 60,
    opacity: 0.15 + seeded(i, 6) * 0.3,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-sand"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            bottom: "-5%",
            opacity: p.opacity,
          }}
          animate={{
            y: ["0%", "-120vh"],
            x: [0, p.drift],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
