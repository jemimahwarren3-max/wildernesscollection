import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences } from "@/lib/content";
import type { VideoKey } from "@/lib/images";
import { JourneyCTA } from "@/components/JourneyCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/experiences/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) return {};
  return { title: experience.name, description: experience.description };
}

export default async function ExperiencePage({ params }: PageProps<"/experiences/[slug]">) {
  const { slug } = await params;
  const experience = experiences.find((e) => e.slug === slug);
  if (!experience) notFound();

  const others = experiences.filter((e) => e.slug !== slug).slice(0, 3);

  const heroVideo: VideoKey | undefined = {
    "guided-safari": "lionWalking",
    "walking-safari": "elephantAerial",
    "photography-safaris": "giraffeGrazing",
    "family-adventures": "zebraRunning",
  }[experience.slug] as VideoKey | undefined;

  return (
    <>
      <PageHero
        eyebrow="Experience"
        title={experience.name}
        description={experience.description}
        image={heroVideo ? undefined : experience.image}
        video={heroVideo}
        breadcrumb={{ label: "All Experiences", href: "/experiences" }}
      />

      <section className="bg-ivory px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
              What to Expect
            </p>
            <p className="mt-6 font-serif text-2xl italic leading-relaxed text-forest">
              {experience.description}
            </p>
            <p className="mt-6 font-sans text-sm leading-relaxed text-moss">
              Sample experience content &mdash; your travel designer will
              tailor the detail, pacing and guiding style of this experience
              to the lodge and season of your journey.
            </p>
            <Link
              href="/plan-your-journey"
              className="mt-10 inline-block bg-forest px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-opacity hover:opacity-85"
            >
              Enquire About This Experience
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-linen px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
              More Experiences
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 0.1}>
                <Link href={`/experiences/${other.slug}`} className="group block">
                  <h3 className="font-serif text-2xl text-forest transition-colors group-hover:text-moss">
                    {other.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-forest/70">
                    {other.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JourneyCTA />
    </>
  );
}
