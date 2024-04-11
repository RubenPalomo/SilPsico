import React from "react";

export default function Title({ text }: { text: string }) {
  return <h1 className="font-bold text-3xl mb-2 md:mb-4">{text}</h1>;
}
