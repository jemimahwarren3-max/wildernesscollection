"use client";

import { motion, useReducedMotion } from "motion/react";
import { videos, type VideoKey } from "@/lib/images";
import { DustParticles } from "./DustParticles";
import { Reveal } from "./Reveal";

type CinematicInterludeProps = {
  video?: VideoKey;
  eyebrow?: string;
  title?: string;
  emphasis?: string;
};

export function CinematicInterlude({
  video = "elephantAerial",
  eyebrow = "From Above",
  title = "This is wilderness,",
  emphasis = "uninterrupted.",
}: CinematicInterludeProps) {
  const prefersReducedMotion = useReducedMotion();
  const clip = videos[video];

  return (
    <section className="relative isolate flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden bg-forest">
      {prefersReducedMotion ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${clip.poster})` }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={clip.poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={clip.src} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-forest/55" />
      <DustParticles count={14} />

      <div className="relative z-10 px-6 text-center">
        <Reveal>
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand">
            {eyebrow}
          </p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-ivory sm:text-6xl md:text-7xl"
          >
            {title} <em className="italic text-sand">{emphasis}</em>
          </motion.h2>
        </Reveal>
      </div>
    </section>
  );
}
