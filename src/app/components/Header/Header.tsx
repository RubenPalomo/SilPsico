import Link from "next/link";
import React from "react";
import HeaderMenuComponent from "./HeaderMenuComponent/HeaderMenuComponent";

export default function Header({ currentPage }: { currentPage: string }) {
  return (
    <header className="flex flex-col md:flex-row justify-between w-full bg-white h-fit p-4 sticky top-0 z-50">
      <div>
        <h1 className="md:text-3xl font-bold">Silvia de Isidro Delgado</h1>
        <p className="text-xs sm:text-sm">
          Psicóloga clínica especializada en Neuropsicología
        </p>
      </div>
      <HeaderMenuComponent
        menuElements={[
          "Inicio",
          "Sobre mi",
          "Patologias",
          "Tarifas",
          "Contacto",
        ]}
        currentPage={currentPage}
      />
    </header>
  );
}
