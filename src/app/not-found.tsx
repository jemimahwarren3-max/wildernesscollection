import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[85svh] w-full items-center justify-center overflow-hidden bg-forest">
      <Image
        src={images.acaciaTree.src}
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest/70" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center text-ivory">
        <Logo className="h-10 w-10 text-sand" />
        <p className="mt-6 font-sans text-[11px] font-bold uppercase tracking-[0.35em] text-sand">
          Off the Map
        </p>
        <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight sm:text-6xl">
          This trail ends here.
        </h1>
        <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-linen">
          The page you&apos;re looking for has wandered off into the bush. Let&apos;s
          get you back on the path.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block bg-ivory px-8 py-4 font-sans text-[13px] font-bold uppercase tracking-[0.12em] text-forest transition-opacity hover:opacity-85"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
