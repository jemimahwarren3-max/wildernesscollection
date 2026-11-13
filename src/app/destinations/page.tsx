import type { Metadata } from "next";
import { CinematicInterlude } from "@/components/CinematicInterlude";
import { DestinationCollection } from "@/components/DestinationCollection";
import { JourneyCTA } from "@/components/JourneyCTA";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Five countries, one wilderness: Zimbabwe, Botswana, Zambia, South Africa and Tanzania, each with its own character and rhythm.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Five Countries. One Wilderness."
        description="From the thunder of Victoria Falls to the endless plains of the Serengeti, every destination in the collection carries its own light, landscape and story."
        video="savannahAerial"
        height="tall"
      />
      <Marquee />
      <DestinationCollection showHeading={false} />
      <CinematicInterlude
        video="zebraRunning"
        eyebrow="Life in Motion"
        title="Across these plains,"
        emphasis="the herds still move freely."
      />
      <JourneyCTA />
    </>
  );
}
