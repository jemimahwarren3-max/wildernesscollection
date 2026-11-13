import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

export function JourneyCTA() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-28 md:px-10 md:py-40">
      <Image
        src={images.elephantPortrait.src}
        alt={images.elephantPortrait.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-forest/70" />
      <div className="relative mx-auto max-w-2xl text-center text-ivory">
        <Reveal>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Your extraordinary journey starts with a conversation.
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-linen">
            Tell us where you&apos;d like to go, when, and with whom &mdash;
            our travel designers will shape a journey around you.
          </p>
          <Link
            href="/plan-your-journey"
            className="mt-10 inline-block bg-ivory px-8 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-forest transition-opacity hover:opacity-85"
          >
            Plan Your Journey
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
