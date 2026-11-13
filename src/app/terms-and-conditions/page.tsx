import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms governing use of The Wilderness Collection website.",
};

const sections = [
  {
    heading: "About This Site",
    body:
      "The Wilderness Collection is a portfolio demonstration site. All lodges, rates, guest stories and journal articles shown here are fictional and do not represent a real operating hospitality company.",
  },
  {
    heading: "Enquiries Are Not Bookings",
    body:
      "Submitting the Plan Your Journey form sends a sample enquiry only. It does not create a confirmed reservation, and no payment or booking is processed anywhere on this site.",
  },
  {
    heading: "Intellectual Property",
    body:
      "Photography and video used throughout this site are sourced from Pexels under its free-to-use licence and are used here for demonstration purposes.",
  },
  {
    heading: "Changes",
    body:
      "These sample terms may be updated at any time without notice, as this is a demonstration site rather than a live commercial service.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions."
        image="elephantRiver"
        height="short"
      />

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-sans text-xs text-moss/70">
              This is sample terms text for a portfolio demonstration site
              and does not constitute legal advice.
            </p>
          </Reveal>
          <div className="mt-10 space-y-12">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.06}>
                <h2 className="font-serif text-2xl font-semibold text-forest">
                  {section.heading}
                </h2>
                <p className="mt-3 font-sans text-base leading-relaxed text-moss">
                  {section.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
