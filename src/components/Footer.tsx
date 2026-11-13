import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { Logo } from "./Logo";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Destinations", href: "/destinations" },
      { label: "Our Lodges", href: "/lodges" },
      { label: "Experiences", href: "/experiences" },
      { label: "Journal", href: "/journal" },
    ],
  },
  {
    heading: "The Collection",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Conservation", href: "/about#conservation" },
      { label: "Plan Your Journey", href: "/plan-your-journey" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Information",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest px-6 pt-20 pb-10 text-ivory md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 font-serif text-2xl">
              <Logo className="h-8 w-8 shrink-0" />
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-linen/70">
              {siteConfig.description}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-sand">
                {col.heading}
              </p>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-linen/80 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-xs text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Portfolio
            demonstration site &mdash; all lodges, rates and guest stories are
            fictional.
          </p>
          <p>Built for a design portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
