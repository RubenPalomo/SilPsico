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
      <Header />
      <Image
        src={logo}
        alt="logo"
        className="opacity-20 w-full"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col justify-center items-center w-full h-96">
        <h1 className="font-bold text-xl sm:text-4xl text-center mb-10">
          Tratamiento Psicológico a domicilio
        </h1>
        <p className="font-bold text-xl text-center">Sur de Madrid</p>
        <p className="font-bold text-center">
          Móstoles · Alcorcón · Leganés · Getafe · Fuenlabrada
        </p>
      </div>
    </main>
  );
}
