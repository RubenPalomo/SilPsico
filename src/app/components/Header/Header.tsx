import React from "react";
import HeaderMenuComponent from "./HeaderMenuComponent/HeaderMenuComponent";

export default function Header() {
  return (
    <header className="flex justify-between w-full bg-white min-h-32 sm:min-h-0 pl-24 px-4 sm:px-24 py-8 sticky top-0 z-50">
      <div>
        <h1 className="md:text-3xl font-bold">
          Silvia de Isidro Delgado
        </h1>
        <p className="text-xs sm:text-sm">
          Psicóloga clínica especializada en Neuropsicología
        </p>
      </div>
      <HeaderMenuComponent menuElements={["Sobre mi", "Tarifas", "Contacto"]} />
    </header>
  );
}
