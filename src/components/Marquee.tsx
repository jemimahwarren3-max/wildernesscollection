const stops = [
  "Victoria Falls",
  "Okavango Delta",
  "Mana Pools",
  "Matobo Hills",
  "Serengeti",
  "Lower Zambezi",
  "Greater Kruger",
];

export function Marquee() {
  const line = stops.join("  ✦  ") + "  ✦  ";

  return (
    <div className="relative overflow-hidden border-y border-ivory/10 bg-forest py-5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="px-4 font-serif text-2xl italic text-ivory/90 md:text-3xl">
          {line}
        </span>
        <span className="px-4 font-serif text-2xl italic text-ivory/90 md:text-3xl" aria-hidden>
          {line}
        </span>
      </div>
    </div>
  );
}
