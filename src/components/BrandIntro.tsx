import Image from "next/image";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

export function BrandIntro() {
  return (
    <section className="bg-ivory px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.25em] text-moss">
            Our Philosophy
          </p>
          <h2 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] tracking-tight text-forest sm:text-6xl">
            Where the wild brings you back to yourself.
          </h2>
          <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-moss">
            The Wilderness Collection gathers a small number of extraordinary
            places across southern and eastern Africa — each one chosen not
            for scale, but for depth of feeling. Our lodges are built from
            the land they stand on, our guides have walked these valleys for
            a lifetime, and every journey is shaped around the quiet,
            immersive encounters that stay with you long after you leave.
          </p>
          <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-moss">
            This is quiet luxury: considered, unhurried and deeply connected
            to the natural world.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src={images.acaciaTree.src}
            alt={images.acaciaTree.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
