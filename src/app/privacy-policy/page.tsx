import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Wilderness Collection handles your information.",
};

const sections = [
  {
    heading: "Information We Collect",
    body:
      "When you submit an enquiry through this site, we collect the details you provide — such as your name, contact information, travel dates and preferences — solely to respond to your request.",
  },
  {
    heading: "How We Use Your Information",
    body:
      "Information submitted through the Plan Your Journey form is used only to prepare a response to your enquiry. This demonstration site does not store submissions or send them to any third party.",
  },
  {
    heading: "Cookies",
    body:
      "This site does not use tracking or advertising cookies. Any technical cookies that do exist are used only to make the site function correctly.",
  },
  {
    heading: "Contact",
    body:
      "Questions about this policy can be directed to the contact details listed on our Contact page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy."
        image="acaciaTree"
        height="short"
      />

      <section className="bg-ivory px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-sans text-xs text-moss/70">
              This is sample policy text for a portfolio demonstration site
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
