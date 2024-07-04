"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Title from "./components/Title/Title";
import Image from "next/image";
import sil from "./components/sil.jpeg";
import logo from "../components/consulta.jpg";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

export default function AboutMePage() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/");
    else if (deltaX < -50) router.push("/tratamientos");

    setTouchStartX(0);
  };

  return (
    <main
      className="flex w-full h-full min-h-screen flex-col items-center bg-white"
      data-testid="about-me"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Sobre Mi" />
      <BackgroundImage image={logo} opacity={10}/>
      <div className="flex flex-wrap justify-center md:justify-between w-[90vw] mx-6">
        <div className="flex justify-center w-full xl:w-96">
          <Image
            src={sil}
            alt="Silvia de Isidro"
            className="w-72 rounded-full"
          />
        </div>
        <div className="flex flex-col p-2 w-[50vw] min-w-96 my-5">
          <Title text="Sobre mí" />
          <p>
            Soy Silvia, graduada en Psicología en 2015 con una pasión por
            entender cómo funciona nuestra mente. Desde entonces, he estado en
            constante búsqueda de conocimiento y experiencia en el campo de la
            psicología. En 2017, completé el Máster en Psicología General
            Sanitaria y el Máster en Neuropsicología Clínica y
            Neurorrehabilitación. Ahí adquirí una comprensión profunda de los
            transtornos neurológicos y cómo afectan a nuestra forma de pensar y
            sentir. Además, me han dotado de las habilidades necesarias para
            ofrecer intervenciones terapéuticas efectivas y centradas en el
            bienestar integral de mis pacientes.
          </p>
        </div>
        <div className="flex flex-col p-2 w-[35vw] min-w-96 my-5">
          <Title text="Estudios" />
          <div className="flex justify-between">
            <p>Psicología</p>
            <p>2015</p>
          </div>
          <div className="flex justify-between">
            <p>Máster en Psicología General Sanitaria</p>
            <p>2017</p>
          </div>
          <div className="flex justify-between">
            <p>Máster en Neuropsicología Clínica y Neurorrehabilitación</p>
            <p>2017</p>
          </div>
        </div>
        <div className="flex flex-col p-2 w-[50vw] min-w-96 my-5">
          <Title text="Experiencia" />
          <p>
            Mi experiencia como psicóloga clínica especializada en
            neuropsicología y rehabilitación ha sido gratificante y
            enriquecedora. Trabajar con pacientes que enfrentan desafíos
            neurológicos, desde ictus hasta traumatismos craneoencefálicos, ha
            sido inspirador. Mi enfoque es simple: cada persona es única y
            merece un enfoque de atención personalizado. Creo firmemente en
            crear un ambiente seguro y de apoyo para ayudar a mis pacientes a
            crecer y sanar. Mi misión es ayudarte a alcanzar tu máximo potencial
            y mejorar tu calidad de vida.
          </p>
        </div>
      </div>
    </main>
  );
}
