import type { Metadata } from "next";
import { Conservation } from "@/components/Conservation";
import { JourneyCTA } from "@/components/JourneyCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The philosophy behind The Wilderness Collection: quiet luxury, considered hospitality and a deep respect for the land.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Different Kind of Extraordinary."
        description="The Wilderness Collection was built on a simple belief: that the best luxury is unhurried, deeply considered, and shaped by the land it stands on."
        video="savannahAerial"
      />

      <section className="bg-ivory px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
              Our Philosophy
            </p>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-forest sm:text-5xl">
              Where the wild brings you back to yourself.
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-moss">
              Every lodge in the collection is limited in scale, built from
              the land it stands on, and guided by people who have walked
              these valleys for a lifetime. We believe the most memorable
              luxury is rarely the loudest &mdash; it is the quiet,
              considered detail: the right light at breakfast, a guide who
              knows exactly when to stop talking, a room that disappears into
              its surroundings rather than imposing on them.
            </p>
          </Reveal>
        </div>
      </section>

      <div id="conservation">
        <Conservation />
      </div>

      <JourneyCTA />
    </>
  );
}
