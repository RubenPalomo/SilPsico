import React from "react";
import HeaderMenuComponent from "./HeaderMenuComponent/HeaderMenuComponent";
import HeaderIconComponent from "./HeaderIconComponent/HeaderIconComponent";

export default function Header() {
  return (
    <header className="flex justify-between w-full bg-lime-50 pl-24 px-4 sm:px-24 py-8 ml-5 sticky top-0 z-50">
      <div>
        <h1 className="md:text-3xl font-bold italic">
          Silvia de Isidro Delgado
        </h1>
        <p className="text-xs sm:text-sm">
          Psicóloga clínica especializada en Neuropsicología
        </p>
      </div>
      <HeaderMenuComponent menuElements={["Sobre mi", "Tarifas", "Contacto"]} />
      <HeaderIconComponent />
    </header>
  );
}
