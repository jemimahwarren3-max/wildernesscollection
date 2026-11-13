import Image from "next/image";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

export function Dining() {
  return (
    <section className="relative isolate overflow-hidden bg-forest px-6 py-28 md:px-10 md:py-40">
      <Image
        src={images.diningCandlelit.src}
        alt={images.diningCandlelit.alt}
        fill
        className="object-cover opacity-40"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/70 to-forest" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.25em] text-sand">
            Dining in the Wilderness
          </p>
          <h2 className="mt-5 font-accent text-3xl text-ivory sm:text-4xl">
            &ldquo;A table set beneath an acacia, lit by lanterns and stars.&rdquo;
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-linen">
            Every meal in the collection is an occasion — bush breakfasts at
            sunrise, riverside lunches, and candlelit dinners where the only
            soundtrack is the wilderness itself. Our chefs draw on local,
            seasonal ingredients to create menus as rooted in place as the
            lodges that serve them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
