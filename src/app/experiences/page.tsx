import type { Metadata } from "next";
import { CinematicInterlude } from "@/components/CinematicInterlude";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { JourneyCTA } from "@/components/JourneyCTA";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "From dawn game drives to candlelit dinners beneath the stars — every experience is shaped around meeting Africa on its own terms.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Extraordinary, By Design."
        description="Guided safaris, private dining, honeymoon escapes and more — each one built around a single idea: unhurried, authentic encounters with the wild."
        video="lionWalking"
      />
      <Marquee />
      <ExperienceGrid showHeading={false} />
      <CinematicInterlude
        video="victoriaFalls"
        eyebrow="Beyond the Safari"
        title="Some moments"
        emphasis="need no vehicle at all."
      />
      <JourneyCTA />
    </>
  );
}
