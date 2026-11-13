"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { images, videos, type ImageKey, type VideoKey } from "@/lib/images";
import { DustParticles } from "./DustParticles";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: ImageKey;
  video?: VideoKey;
  breadcrumb?: { label: string; href: string };
  height?: "full" | "tall" | "short";
};

const heightClass = {
  full: "h-[320vh]",
  tall: "h-[240vh]",
  short: "h-[70svh] min-h-[460px]",
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  video,
  breadcrumb,
  height = "tall",
}: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = title.split(" ");
  const bg = video ? videos[video] : image ? images[image] : images.heroSunset;
  const poster = "poster" in bg ? bg.poster : bg.src;

  if (height === "short" || prefersReducedMotion) {
    return (
      <StaticPageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumb={breadcrumb}
        poster={poster}
        words={words}
        short={height === "short"}
      />
    );
  }

  return (
    <ScrollDrivenPageHero
      eyebrow={eyebrow}
      description={description}
      breadcrumb={breadcrumb}
      words={words}
      video={video}
      poster={poster}
      heightClass={heightClass[height]}
    />
  );
}

function ScrollDrivenPageHero({
  eyebrow,
  description,
  breadcrumb,
  words,
  video,
  poster,
  heightClass: heightCls,
}: {
  eyebrow: string;
  description?: string;
  breadcrumb?: { label: string; href: string };
  words: string[];
  video?: VideoKey;
  poster: string;
  heightClass: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  const veilOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.75, 0.5, 0.25]);
  const finalOpacity = useTransform(scrollYProgress, [0.08, 0.22], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.08, 0.22], [40, 0]);
  const exitOpacity = useTransform(scrollYProgress, [0.78, 0.95], [1, 0]);
  const combinedOpacity = useTransform(
    [finalOpacity, exitOpacity],
    ([a, b]: number[]) => a * b,
  );

  return (
    <section ref={containerRef} className={`relative w-full bg-forest ${heightCls}`}>
      <div className="sticky top-0 h-[100svh] min-h-[640px] w-full overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          {video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={poster}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={videos[video].src} type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
          )}
        </motion.div>

        <motion.div style={{ opacity: veilOpacity }} className="absolute inset-0 bg-forest" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
        <DustParticles />

        <motion.div
          style={{ opacity: combinedOpacity, y: finalY }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          {breadcrumb && (
            <div className="mb-6">
              <Link
                href={breadcrumb.href}
                className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory"
              >
                &larr; {breadcrumb.label}
              </Link>
            </div>
          )}

          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand">
            {eyebrow}
          </p>

          <h1 className="mt-5 flex max-w-5xl flex-wrap justify-center gap-x-4 font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-[7vw]">
            {words.map((word, i) => (
              <span key={word + i}>{word}</span>
            ))}
          </h1>

          {description && (
            <p className="mt-7 max-w-xl font-sans text-base leading-relaxed text-linen md:text-lg">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-ivory/70"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-9 w-px bg-ivory/45"
          />
        </motion.div>
      </div>
    </section>
  );
}

function StaticPageHero({
  eyebrow,
  description,
  breadcrumb,
  poster,
  words,
  short,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string };
  poster: string;
  words: string[];
  short: boolean;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-forest ${
        short ? "h-[70svh] min-h-[460px]" : "h-[85svh] min-h-[640px]"
      }`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/20 to-forest/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <DustParticles count={14} />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {breadcrumb && (
          <div className="mb-6">
            <Link
              href={breadcrumb.href}
              className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory"
            >
              &larr; {breadcrumb.label}
            </Link>
          </div>
        )}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand"
        >
          {eyebrow}
        </motion.p>
        <h1 className="mt-5 flex max-w-5xl flex-wrap justify-center gap-x-4 font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-[7vw]">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-7 max-w-xl font-sans text-base leading-relaxed text-linen md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
