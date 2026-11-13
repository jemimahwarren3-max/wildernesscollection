import Image from "next/image";
import Link from "next/link";
import { journalArticles } from "@/lib/content";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Journal({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-ivory px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        {showHeading && (
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="The Journal"
              title="Travel inspiration, closely considered."
              description="Sample editorial content exploring our destinations, wildlife and the philosophy behind slow, considered travel."
            />
            <Reveal delay={0.1}>
              <Link
                href="/journal"
                className="hidden shrink-0 border border-forest px-6 py-3 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-forest transition-colors hover:bg-forest hover:text-ivory sm:inline-block"
              >
                Visit the Journal
              </Link>
            </Reveal>
          </div>
        )}

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {journalArticles.map((article, i) => {
            const img = images[article.image];
            return (
              <Reveal key={article.slug} delay={i * 0.1}>
                <Link href={`/journal/${article.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-moss">
                    {article.category} &middot; {article.readTime}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-snug text-forest transition-colors group-hover:text-moss">
                    {article.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-forest/70">
                    {article.excerpt}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
