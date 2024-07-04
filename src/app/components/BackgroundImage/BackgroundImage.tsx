import Image from "next/image";
import React from "react";
import BackgroundImageProps from "./BackgroundImage.props";

export default function BackgroundImage({
  image,
  opacity,
}: BackgroundImageProps) {
  const opacityValue = opacity / 100;

  return (
    <Image
      src={image}
      alt="logo"
      className="w-full z-0"
      style={{ opacity: opacityValue }}
      layout="fill"
      objectFit="cover"
    />
  );
}
