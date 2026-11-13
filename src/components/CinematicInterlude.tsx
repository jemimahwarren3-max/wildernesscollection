"use client";

import { motion, useReducedMotion } from "motion/react";
import { videos } from "@/lib/images";
import { Reveal } from "./Reveal";

export function CinematicInterlude() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-forest">
      {prefersReducedMotion ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${videos.elephantAerial.poster})` }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={videos.elephantAerial.poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videos.elephantAerial.src} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-forest/55" />

      <div className="relative z-10 px-6 text-center">
        <Reveal>
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand">
            From Above
          </p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-ivory sm:text-6xl md:text-7xl"
          >
            This is wilderness, <em className="italic text-sand">uninterrupted.</em>
          </motion.h2>
        </Reveal>
      </div>
    </section>
  );
}
