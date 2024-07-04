"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import TextArea from "./components/TextArea/TextArea";
import logo from "../components/consulta.jpg";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

export default function PathologiesPage() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/sobremi");
    else if (deltaX < -50) router.push("/tarifas");

    setTouchStartX(0);
  };

  return (
    <main
      className="flex flex-col w-full h-full min-h-screen items-center bg-white"
      data-testid="pathologies"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Patologias" />
      <BackgroundImage image={logo} opacity={10}/>
      <div className="flex flex-wrap justify-between w-[95vw]">
        <div className="flex w-full sm:w-[45vw] my-10">
          <TextArea
            title="Recibe tu tratamiento de NEUROPSICOLOGÍA a domicilio"
            text="Realizo tratamientos de neuropsicología a domicilio en toda la zona
          sur de Madrid (Móstoles, Alcorcón, Leganés, Getafe, Fuenlabrada y
            Villaviosa de Odón)."
          />
        </div>
        <div className="flex w-full sm:w-[45vw] my-10">
          <TextArea
            title="Patologías"
            text={`Especializada en tratamiento de daño cerebral adquirido:
      • Ictus
      • Traumatismos craneoencefálicos
      • Tumores cerebrales
Así como en trastornos del desarrollo:
      • TDAH
      • TEA
Y en psicología clínica:
      • Ansiedad
      • Depresión
      • Estrés
      • Duelo`}
          />
        </div>
      </div>
    </main>
  );
}
