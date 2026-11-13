import { BrandIntro } from "@/components/BrandIntro";
import { CinematicInterlude } from "@/components/CinematicInterlude";
import { Conservation } from "@/components/Conservation";
import { DestinationCollection } from "@/components/DestinationCollection";
import { Dining } from "@/components/Dining";
import { ExperienceGrid } from "@/components/ExperienceGrid";
import { GuestStories } from "@/components/GuestStories";
import { Hero } from "@/components/Hero";
import { Journal } from "@/components/Journal";
import { JourneyCTA } from "@/components/JourneyCTA";
import { LodgeShowcase } from "@/components/LodgeShowcase";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <BrandIntro />
      <DestinationCollection />
      <LodgeShowcase />
      <CinematicInterlude />
      <ExperienceGrid />
      <Dining />
      <Conservation />
      <GuestStories />
      <Journal />
      <JourneyCTA />
    </>
  );
}
