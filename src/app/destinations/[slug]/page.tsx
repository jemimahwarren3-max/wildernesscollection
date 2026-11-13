import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, lodges } from "@/lib/content";
import { images } from "@/lib/images";
import { JourneyCTA } from "@/components/JourneyCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/destinations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return {};
  return {
    title: destination.name,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[slug]">) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  const destinationLodges = lodges.filter((l) => l.destination === destination.name);
  const heroImage = images[destination.image];

  return (
    <>
      <PageHero
        eyebrow={destination.tagline}
        title={destination.name}
        description={destination.description}
        image={destination.image}
        breadcrumb={{ label: "All Destinations", href: "/destinations" }}
      />

      <section className="bg-ivory px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
              Best Time to Visit
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              {destination.bestTime}
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-moss">
              {destination.description}
            </p>
            <Link
              href="/plan-your-journey"
              className="mt-8 inline-block border border-forest px-7 py-3.5 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              Plan a Journey to {destination.name}
            </Link>
          </Reveal>
          <Reveal delay={0.15} className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </Reveal>
        </div>
      </section>

      {destinationLodges.length > 0 && (
        <section className="bg-forest px-6 py-28 md:px-10 md:py-36">
          <div className="mx-auto max-w-[1600px]">
            <SectionHeading
              eyebrow="Where to Stay"
              title={`Lodges in ${destination.name}`}
              dark
            />
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {destinationLodges.map((lodge, i) => {
                const img = images[lodge.image];
                return (
                  <Reveal key={lodge.slug} delay={i * 0.1}>
                    <Link href={`/lodges/${lodge.slug}`} className="group block">
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="mt-5 font-serif text-2xl text-ivory">{lodge.name}</h3>
                      <p className="mt-2 font-sans text-sm text-linen/70">{lodge.location}</p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <JourneyCTA />
    </>
  );
}
