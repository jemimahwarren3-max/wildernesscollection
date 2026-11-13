import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`font-sans text-[12px] font-bold uppercase tracking-[0.3em] ${
            dark ? "text-sand" : "text-moss"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-4 font-serif text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl ${
          dark ? "text-ivory" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 font-sans text-base leading-relaxed ${
            dark ? "text-linen" : "text-moss"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
