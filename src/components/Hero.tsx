"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { videos } from "@/lib/images";
import { siteConfig } from "@/lib/content";
import { DustParticles } from "./DustParticles";

const words = siteConfig.tagline.replace(".", "").split(" ");

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return prefersReducedMotion ? <StaticHero /> : <WildernessEntrance />;
}

function WildernessEntrance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // The further you scroll, the closer the camera moves into the footage.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.1]);
  const videoBlur = useTransform(scrollYProgress, [0.85, 1], [0, 1.5]);
  const filter = useTransform(videoBlur, (v) => `blur(${v}px)`);

  // A dark veil that slowly lifts as you descend, as if your eyes were adjusting.
  const veilOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.88, 0.6, 0.3]);

  const beat1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.26], [0, 1, 1, 0]);
  const beat1Y = useTransform(scrollYProgress, [0, 0.26], [10, -40]);

  const beat2Opacity = useTransform(scrollYProgress, [0.3, 0.38, 0.52, 0.6], [0, 1, 1, 0]);
  const beat2Y = useTransform(scrollYProgress, [0.3, 0.6], [40, -40]);

  const finalOpacity = useTransform(scrollYProgress, [0.66, 0.8], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.66, 0.8], [40, 0]);

  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[320vh] w-full bg-forest">
      <div className="sticky top-0 h-[100svh] min-h-[720px] w-full overflow-hidden">
        <motion.div style={{ scale, filter }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={videos.heroAerialSunset.poster}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={videos.heroAerialSunset.src} type="video/mp4" />
          </video>
        </motion.div>

        <motion.div style={{ opacity: veilOpacity }} className="absolute inset-0 bg-forest" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
        <DustParticles count={22} />

        <motion.div
          style={{ opacity: beat1Opacity, y: beat1Y }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand">
            Begin the descent
          </p>
          <h2 className="mt-5 font-serif text-5xl italic text-ivory sm:text-6xl md:text-7xl">
            Into the wilderness.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: beat2Opacity, y: beat2Y }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <h2 className="max-w-3xl font-serif text-4xl italic leading-tight text-ivory sm:text-5xl md:text-6xl">
            Deeper into Africa&apos;s
            <br />
            last wild places.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: finalOpacity, y: finalY }}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        >
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand">
            Luxury African Safari &middot; Lodges &middot; Destinations
          </p>

          <h1 className="mt-6 flex max-w-6xl flex-wrap justify-center gap-x-4 font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-ivory sm:text-7xl md:text-8xl lg:text-[9vw]">
            {words.map((word, i) => (
              <span key={word + i} className={word === "Extraordinary" ? "italic text-sand" : ""}>
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-linen md:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/destinations"
              className="bg-ivory px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-forest transition-opacity hover:opacity-85"
            >
              Explore Our Collection
            </Link>
            <Link
              href={siteConfig.ctaHref}
              className="border border-ivory/70 px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-ivory/10"
            >
              Plan Your Journey
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: scrollCueOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-ivory/80"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.2em]">
            Scroll to go deeper
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-ivory/50"
          />
        </motion.div>
      </div>
    </section>
  );
}

function StaticHero() {
  return (
    <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-forest">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${videos.heroAerialSunset.poster})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/25 to-forest/85" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand">
          Luxury African Safari &middot; Lodges &middot; Destinations
        </p>
        <h1 className="mt-6 max-w-6xl font-serif text-6xl font-semibold leading-[0.95] tracking-tight text-ivory sm:text-7xl md:text-8xl lg:text-[9vw]">
          {siteConfig.tagline}
        </h1>
        <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-linen md:text-lg">
          {siteConfig.description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/destinations"
            className="bg-ivory px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-forest transition-opacity hover:opacity-85"
          >
            Explore Our Collection
          </Link>
          <Link
            href={siteConfig.ctaHref}
            className="border border-ivory/70 px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-colors hover:bg-ivory/10"
          >
            Plan Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
