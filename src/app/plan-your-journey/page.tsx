import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Plan Your Journey",
  description:
    "Tell us where you'd like to go, when, and with whom — our travel designers will shape a journey around you.",
};

export default function PlanYourJourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Begin Your Journey"
        title="Plan Your Journey."
        description="Tell us where you'd like to go, when, and with whom — our travel designers will shape a journey around you."
        image="diningCandlelit"
        height="short"
      />

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
