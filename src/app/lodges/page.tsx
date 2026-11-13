import type { Metadata } from "next";
import { CinematicInterlude } from "@/components/CinematicInterlude";
import { JourneyCTA } from "@/components/JourneyCTA";
import { LodgeShowcase } from "@/components/LodgeShowcase";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Lodges",
  description:
    "Intimate, limited-scale lodges across the collection, each with its own distinct personality and sense of place.",
};

export default function LodgesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Lodges"
        title="Intimate Places, Distinct Personalities."
        description="Every lodge in the collection is limited in scale and singular in character — built to feel like a discovery, not a destination."
        video="giraffeGrazing"
      />
      <Marquee />
      <LodgeShowcase showHeading={false} />
      <CinematicInterlude video="elephantAerial" />
      <JourneyCTA />
    </>
  );
}
