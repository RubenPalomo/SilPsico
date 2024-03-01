import React from "react";
import HeaderMenuComponent from "./HeaderMenu/HeaderMenu";
import HeaderIconComponent from "./HeaderIconComponent/HeaderIconComponent";

export default function Header() {
  return (
    <header className="flex justify-between w-full pl-24 px-4 sm:px-24 py-8 ml-5 sticky top-0 bg-gray-150 z-50">
      <h1 className="md:text-3xl font-bold italic">Silvia de Isidro Delgado</h1>
      <HeaderMenuComponent menuElements={["Sobre mi", "Tarifas", "Contacto"]} />
      <HeaderIconComponent />
    </header>
  );
}
