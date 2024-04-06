import React from "react";
import Header from "../components/Header/Header";
import TextArea from "./components/TextArea/TextArea";

export default function AboutMePage() {
  return (
    <main
      className="flex w-full h-full min-h-screen flex-col items-center bg-white"
      data-testid="home"
    >
      <Header />
      <div className="flex flex-col w-[90vw] mx-6">
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
    </main>
  );
}
