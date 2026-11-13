import Image from "next/image";
import Link from "next/link";
import { lodges } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function LodgeShowcase({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-forest px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        {showHeading && (
          <SectionHeading
            eyebrow="Our Lodges"
            title="Intimate places, distinct personalities."
            description="Every lodge in the collection is limited in scale and singular in character — built to feel like a discovery, not a destination."
            dark
          />
        )}

        <div className="mt-14 flex flex-col gap-16">
          {lodges.map((lodge, i) => {
            const img = images[lodge.image];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={lodge.slug} delay={0.05}>
                <div
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-sand">
                      {lodge.location}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl text-ivory sm:text-4xl">
                      {lodge.name}
                    </h3>
                    <p className="mt-5 max-w-md font-sans text-[15px] leading-relaxed text-linen">
                      {lodge.description}
                    </p>
                    <dl className="mt-6 flex gap-8 font-sans text-sm text-sand/90">
                      <div>
                        <dt className="uppercase tracking-[0.1em] text-[11px] text-sand/70">
                          Capacity
                        </dt>
                        <dd className="mt-1 text-linen">{lodge.guestCapacity}</dd>
                      </div>
                      <div>
                        <dt className="uppercase tracking-[0.1em] text-[11px] text-sand/70">
                          Rooms
                        </dt>
                        <dd className="mt-1 text-linen">{lodge.rooms}</dd>
                      </div>
                    </dl>
                    <Link
                      href={`/lodges/${lodge.slug}`}
                      className="mt-8 inline-block w-fit border-b border-sand pb-1 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-sand transition-opacity hover:opacity-70"
                    >
                      Discover {lodge.name}
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16 text-center">
          <Link
            href="/lodges"
            className="inline-block border border-sand px-8 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-sand transition-colors hover:bg-sand hover:text-forest"
          >
            View the Full Lodge Collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
