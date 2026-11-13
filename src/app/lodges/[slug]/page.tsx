import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { lodges } from "@/lib/content";
import { images } from "@/lib/images";
import { JourneyCTA } from "@/components/JourneyCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return lodges.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/lodges/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lodge = lodges.find((l) => l.slug === slug);
  if (!lodge) return {};
  return { title: lodge.name, description: lodge.description };
}

export default async function LodgePage({ params }: PageProps<"/lodges/[slug]">) {
  const { slug } = await params;
  const lodge = lodges.find((l) => l.slug === slug);
  if (!lodge) notFound();

  return (
    <>
      <PageHero
        eyebrow={lodge.location}
        title={lodge.name}
        description={lodge.description}
        image={lodge.image}
        breadcrumb={{ label: "All Lodges", href: "/lodges" }}
      />

      <section className="bg-ivory px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
                About This Lodge
              </p>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
                {lodge.destination}
              </h2>
              <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-moss">
                {lodge.description}
              </p>

              <dl className="mt-10 flex flex-wrap gap-10">
                <div>
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-sand">
                    Capacity
                  </dt>
                  <dd className="mt-1 font-serif text-xl text-forest">{lodge.guestCapacity}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-sand">
                    Rooms
                  </dt>
                  <dd className="mt-1 font-serif text-xl text-forest">{lodge.rooms}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-sand">
                    Rate
                  </dt>
                  <dd className="mt-1 font-serif text-xl text-forest">{lodge.fromRate}</dd>
                </div>
              </dl>

              <Link
                href="/plan-your-journey"
                className="mt-10 inline-block bg-forest px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-opacity hover:opacity-85"
              >
                Enquire About {lodge.name}
              </Link>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {lodge.gallery.map((key, i) => {
                const img = images[key];
                return (
                  <Reveal
                    key={key + i}
                    delay={i * 0.1}
                    className={i === 0 ? "col-span-2 aspect-[16/10] relative overflow-hidden" : "aspect-square relative overflow-hidden"}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover"
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <JourneyCTA />
    </>
  );
}
