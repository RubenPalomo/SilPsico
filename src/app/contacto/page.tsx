"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";
import Form from "./components/Form/Form";
import Header from "../components/Header/Header";
import GratitudePopup from "./components/GratitudePopup/GratitudePopup";

export default function ContactPage(): ReactNode {
  const router = useRouter();
  const [showGratitude, setShowGratitude] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 400) router.push("/tarifas");
    else if (deltaX < -400) router.push("/");

    setTouchStartX(0);
  };

  return (
    <div
      className="flex flex-col items-center w-full h-full min-h-screen bg-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Contacto" />
      <div className="flex flex-col items-center justify-center w-fit bg-lime-50 bg-opacity-60 p-10 border rounded-xl mt-[5vh]">
        <h1 className="text-2xl sm:text-4xl font-bold italic">Contacto</h1>
        <p className="text-sm">¿Quieres ponerte en contacto conmigo?</p>
        <Form
          showGratitude={() => {
            setShowGratitude(true);
          }}
        />
        <GratitudePopup
          hidden={!showGratitude}
          closePopup={() => {
            setShowGratitude(false);
          }}
        />
      </div>
    </div>
  );
}
