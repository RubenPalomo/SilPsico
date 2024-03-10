"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [styleText, setStyleText] = useState<string>("");
  const [styleHere, setStyleHere] = useState<string>("");

  const handleHover = () => {
    setStyleText("font-bold");
    setStyleHere("text-red-500 text-lg underline");
  };

  const handleLeave = () => {
    setStyleText("");
    setStyleHere("");
  };

  return (
    <Link href="/contacto" passHref>
      <div
        className="flex fixed bottom-8 right-2 justify-center align-middle w-52 border-2 border-black rounded p-2 bg-lime-100 hover:bg-lime-200 hover:p-4"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <p className={`text-sm mr-2 ${styleText}`}>Pide información</p>
        <p className={`font-bold ${styleHere}`}>AQUÍ</p>
      </div>
    </Link>
  );
}
