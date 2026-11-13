import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const spanClasses = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2 lg:col-start-5 lg:row-start-1",
];

export function ExperienceGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-ivory px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        {showHeading && (
          <SectionHeading
            eyebrow="Experiences"
            title="Extraordinary, by design."
            description="From dawn game drives to candlelit dinners beneath the stars, every experience is shaped around a single idea: to meet Africa on its own terms."
          />
        )}

        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {experiences.map((experience, i) => {
            const img = images[experience.image];
            return (
              <Reveal
                key={experience.slug}
                delay={i * 0.06}
                className={`${spanClasses[i] ?? "lg:col-span-2"}`}
              >
                <Link
                  href={`/experiences/${experience.slug}`}
                  className="group relative block aspect-[4/5] w-full overflow-hidden lg:h-full lg:aspect-auto"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-serif text-2xl text-ivory">{experience.name}</h3>
                    <p className="mt-2 max-w-[22ch] font-sans text-sm leading-relaxed text-linen/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {experience.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
