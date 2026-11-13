"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { videos, type VideoKey } from "@/lib/images";

export function HoverMedia({
  src,
  alt,
  video,
  sizes,
  imageClassName = "",
}: {
  src: string;
  alt: string;
  video?: VideoKey;
  sizes: string;
  imageClassName?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => {
        setHovered(true);
        videoRef.current?.play().catch(() => {});
      }}
      onMouseLeave={() => {
        setHovered(false);
        videoRef.current?.pause();
      }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} />
      {video && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          poster={videos[video].poster}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videos[video].src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
