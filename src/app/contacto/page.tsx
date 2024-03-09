"use client";

import React, { ReactNode, useState } from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

export default function ContactPage(): ReactNode {
  const [showGratitude, setShowGratitude] = useState(true);

  return (
    <div className="flex flex-col h-screen w-screen bg-lime-50">
      <Header />
      <div className="flex flex-col items-center justify-center h-full mb-36">
        <h1 className="text-4xl font-bold italic">Contacto</h1>
        <p className="text-sm">¿Quieres ponerte en contacto conmigo?</p>
        <Form
          showGratitude={() => {
            setShowGratitude(false);
          }}
          resetGratitude={() => {
            setShowGratitude(true);
          }}
        />
        <div
          className="absolute bottom-12 2xl:bottom-28"
          hidden={showGratitude}
        >
          <p className="text-4xl text-red-500 font-light italic text-center">
            ¡Muchas gracias!
          </p>
          <p>Nos pondremos en contacto contigo lo antes posible</p>
        </div>
      </div>
    </div>
  );
}
