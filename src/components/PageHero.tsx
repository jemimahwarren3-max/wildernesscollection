"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { images, videos, type ImageKey, type VideoKey } from "@/lib/images";

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
  full: "h-[100svh] min-h-[640px]",
  tall: "h-[85svh] min-h-[560px]",
  short: "h-[60svh] min-h-[440px]",
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const words = title.split(" ");
  const bg = video ? videos[video] : image ? images[image] : images.heroSunset;
  const poster = "poster" in bg ? bg.poster : bg.src;

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden bg-forest ${heightClass[height]}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
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
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/20 to-forest/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Link
              href={breadcrumb.href}
              className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory"
            >
              &larr; {breadcrumb.label}
            </Link>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand"
        >
          {eyebrow}
        </motion.p>

        <h1 className="mt-5 flex max-w-5xl flex-wrap justify-center gap-x-4 font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-[7vw]">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.25 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl font-sans text-base leading-relaxed text-linen md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
