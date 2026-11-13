import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { journalArticles } from "@/lib/content";
import { JourneyCTA } from "@/components/JourneyCTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function JournalArticlePage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const article = journalArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const others = journalArticles.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${article.category} · ${article.readTime}`}
        title={article.title}
        image={article.image}
        breadcrumb={{ label: "The Journal", href: "/journal" }}
        height="tall"
      />

      <article className="bg-ivory px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-moss">
              Sample editorial content &mdash; portfolio demonstration only
            </p>
            <p className="mt-8 font-serif text-2xl italic leading-relaxed text-forest">
              {article.excerpt}
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-moss">
              This is a short sample passage standing in for the full article.
              In the finished site, this space would carry a complete,
              editorially considered feature &mdash; photography, pull quotes
              and a considered reading rhythm &mdash; built around this same
              story.
            </p>
          </Reveal>
        </div>
      </article>

      <section className="bg-linen px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.3em] text-moss">
              Continue Reading
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 0.1}>
                <Link href={`/journal/${other.slug}`} className="group block">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-moss">
                    {other.category} &middot; {other.readTime}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-forest transition-colors group-hover:text-moss">
                    {other.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JourneyCTA />
    </>
  );
}
