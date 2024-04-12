import Link from "next/link";
import Image from "next/image";
import React from "react";
import Header from "./components/Header/Header";
import logo from "./components/consulta.jpg";

export default function Home() {
  return (
    <main
      className="flex w-full h-screen flex-col items-center bg-white"
      data-testid="home"
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
          <h1 className="font-bold text-2xl sm:text-4xl text-center mb-10">
            Terapia Neuropsicológica a domicilio y remoto
          </h1>
        </div>
        <div className="flex flex-col my-2">
          <h2 className="font-bold text-xl sm:text-2xl text-center">Domicilio</h2>
          <p className="font-bold text-lg md:text-xl text-center">Sur de Madrid</p>
          <p className="font-bold text-center">
            Móstoles · Alcorcón · Leganés · Getafe · Fuenlabrada
          </p>
        </div>
        <div className="flex flex-col my-5">
          <h2 className="font-bold text-xl sm:text-2xl text-center">Remoto</h2>
          <p className="font-bold text-lg md:text-xl text-center">Cualquier lugar</p>
        </div>
        <div className="flex">
          <Link
            href="/contacto"
            className="mt-12 bg-blue-200 p-4 px-8 rounded-3xl transition-transform transform-gpu hover:scale-110"
          >
            <p className="font-bold text-3xl">Pide tu cita</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
