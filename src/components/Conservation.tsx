import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

const pillars = [
  {
    title: "Respect for Nature",
    copy: "Every lodge is designed to tread lightly — low-impact building, renewable power and a deep respect for the land it sits on.",
  },
  {
    title: "Community Partnerships",
    copy: "We work alongside the communities who call these landscapes home, supporting local employment, skills and enterprise.",
  },
  {
    title: "Responsible Travel",
    copy: "Small guest numbers, considered itineraries and guides who know these ecosystems intimately, season after season.",
  },
];

export function Conservation() {
  return (
    <section className="bg-linen px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden lg:order-2">
          <Image
            src={images.elephantHerd.src}
            alt={images.elephantHerd.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-sans text-[12px] font-medium uppercase tracking-[0.25em] text-moss">
              Conservation &amp; Community
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-forest sm:text-5xl">
              A collection built on belonging, not ownership.
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={0.1 + i * 0.08}>
                <h3 className="font-serif text-xl text-forest">{pillar.title}</h3>
                <p className="mt-2 max-w-md font-sans text-[15px] leading-relaxed text-moss">
                  {pillar.copy}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Link
              href="/about"
              className="mt-10 inline-block border-b border-forest pb-1 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-forest transition-opacity hover:opacity-70"
            >
              Our Approach to Responsible Travel
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
