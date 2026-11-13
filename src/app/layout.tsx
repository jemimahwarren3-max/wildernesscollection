import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Italiana } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "The Wilderness Collection | Luxury African Safari & Lodges",
    template: "%s | The Wilderness Collection",
  },
  description:
    "Find yourself somewhere extraordinary. A curated collection of extraordinary African destinations, intimate wilderness lodges and unforgettable journeys across Zimbabwe, Botswana, Zambia, South Africa and Tanzania.",
  openGraph: {
    title: "The Wilderness Collection",
    description: "Find yourself somewhere extraordinary.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-forest">
        <Navigation />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
