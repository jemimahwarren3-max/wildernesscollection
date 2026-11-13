import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function DestinationCollection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-linen px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        {showHeading && (
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Destinations"
              title="Five countries. One extraordinary continent."
              description="Each destination in the collection offers its own character, landscape and rhythm — bound together by the same commitment to quiet, authentic luxury."
            />
            <Reveal delay={0.1}>
              <Link
                href="/destinations"
                className="hidden shrink-0 border border-forest px-6 py-3 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-forest transition-colors hover:bg-forest hover:text-ivory sm:inline-block"
              >
                View All Destinations
              </Link>
            </Reveal>
          </div>
        )}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {destinations.map((destination, i) => {
            const img = images[destination.image];
            const large = i === 0;
            return (
              <Reveal
                key={destination.slug}
                delay={i * 0.08}
                className={large ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              >
                <Link
                  href={`/destinations/${destination.slug}`}
                  className={`group relative block overflow-hidden ${
                    large ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/85 via-forest/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-sand">
                      {destination.tagline}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ivory sm:text-4xl">
                      {destination.name}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
