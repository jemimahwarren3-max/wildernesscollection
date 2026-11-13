import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Wilderness Collection.",
};

const details = [
  { label: "Enquiries", value: "hello@wildernesscollection.example" },
  { label: "Reservations", value: "journeys@wildernesscollection.example" },
  { label: "Telephone", value: "+263 00 000 0000 (sample number)" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us."
        description="For enquiries about the collection, press, or anything else — we'd love to hear from you."
        image="poolEvening"
        height="short"
      />

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-4xl gap-14 sm:grid-cols-2">
          <Reveal>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
              Reach Us Directly
            </p>
            <dl className="mt-8 space-y-6">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-sand">
                    {d.label}
                  </dt>
                  <dd className="mt-1 font-serif text-xl text-forest">{d.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 font-sans text-xs text-moss/70">
              Sample contact details for demonstration purposes.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
              Prefer to Plan a Trip?
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-moss">
              If you already have dates and a destination in mind, our
              Journey Planner is the fastest way to reach our travel
              designers directly.
            </p>
            <Link
              href="/plan-your-journey"
              className="mt-8 inline-block bg-forest px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-opacity hover:opacity-90"
            >
              Plan Your Journey
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
