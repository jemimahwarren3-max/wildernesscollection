import type { Metadata } from "next";
import { Journal } from "@/components/Journal";
import { Marquee } from "@/components/Marquee";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Sample editorial stories exploring our destinations, wildlife, conservation and the philosophy of slow, considered travel.",
};

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Travel Inspiration, Closely Considered."
        description="Sample editorial content exploring our destinations, wildlife and the philosophy behind slow, considered travel."
        image="lodgePatio"
      />
      <Marquee />
      <Journal showHeading={false} />
    </>
  );
}
