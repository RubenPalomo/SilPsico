"use client";

import React, { ReactNode, useState } from "react";
import Form from "./components/Form/Form";
import Header from "../components/Header/Header";
import GratitudePopup from "./components/GratitudePopup/GratitudePopup";

export default function ContactPage(): ReactNode {
  const [showGratitude, setShowGratitude] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center w-full bg-white">
      <Header currentPage="Contacto" />
      <div className="flex flex-col items-center justify-center w-fit bg-lime-50 bg-opacity-60 p-8 border rounded-xl mb-36">
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
