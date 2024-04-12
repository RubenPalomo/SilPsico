import React from "react";
import Header from "../components/Header/Header";
import TextArea from "./components/TextArea/TextArea";

export default function PathologiesPage() {
  return (
    <main
      className="flex w-full h-full min-h-screen flex-col items-center bg-white"
      data-testid="pathologies"
    >
      <Header currentPage="Patologias" />
      <div className="flex flex-wrap justify-between w-[90vw] mx-6">
        <TextArea
          title="Recibe tu tratamiento de NEUROPSICOLOGÍA a domicilio"
          text="Realizo tratamientos de neuropsicología a domicilio en toda la zona
        sur de Madrid (Móstoles, Alcorcón, Leganés, Getafe, Fuenlabrada y
        Villaviosa de Odón)."
        />
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
        <div className="flex justify-center w-full xl:w-[60vw]">
          <TextArea
            title="Areas de intervención"
            text={`Intervención en:
      • Estimulación cognitiva en general.
      • Déficits de atención y memoria.
      • Dificultades en las funciones ejecutivas.
      • Trastornos conductuales.
      • Trastornos emocionales.
      • TDAH
      • TEA
      • Ansiedad
      • Depresión
      • Duelo`}
          />
        </div>
      </div>
    </main>
  );
}
