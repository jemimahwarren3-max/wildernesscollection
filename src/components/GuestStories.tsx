"use client";

import { useState } from "react";
import { guestStories } from "@/lib/content";
import { Reveal } from "./Reveal";

export function GuestStories() {
  const [index, setIndex] = useState(0);
  const story = guestStories[index];

  return (
    <section className="bg-moss px-6 py-28 text-ivory md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-sans text-[12px] font-medium uppercase tracking-[0.25em] text-sand">
            Guest Stories
          </p>
        </Reveal>

        <Reveal delay={0.1} key={index} className="mt-8">
          <p className="font-serif text-2xl italic leading-[1.4] sm:text-3xl">
            &ldquo;{story.quote}&rdquo;
          </p>
          <p className="mt-6 font-sans text-sm uppercase tracking-[0.15em] text-sand">
            {story.name}
          </p>
          <p className="mt-1 font-sans text-xs text-linen/70">{story.detail}</p>
        </Reveal>

        <div className="mt-10 flex items-center justify-center gap-3">
          {guestStories.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show guest story ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-8 transition-colors ${
                i === index ? "bg-sand" : "bg-ivory/25 hover:bg-ivory/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
