"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import logo from "./components/consulta.jpg";

export default function Home() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/contacto");
    else if (deltaX < -50) router.push("/sobremi");

    setTouchStartX(0);
  };

  return (
    <main
      className="flex w-full h-screen flex-col items-center bg-white"
      data-testid="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="/" />
      <Image
        src={logo}
        alt="logo"
        className="opacity-20 w-full"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl sm:text-4xl text-center">
            Terapia Neuropsicológica a domicilio
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl text-center">
            Sur de Madrid
          </h2>
          <p className="font-bold text-center">
            Móstoles · Alcorcón · Leganés · Getafe · Fuenlabrada
          </p>
        </div>
        <div className="flex flex-col items-center my-8">
          <h1 className="font-bold text-2xl sm:text-4xl text-center">
            Terapia de Psicología Clínica online
          </h1>
          <h2 className="font-bold text-xl sm:text-2xl text-center">
            Desde cualquier lugar
          </h2>
        </div>
        <div className="flex mt-4">
          <Link
            href="/contacto"
            className="bg-blue-200 p-4 px-8 rounded-3xl transition-transform transform-gpu hover:scale-110"
          >
            <p className="font-bold text-3xl">Pide tu cita</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
