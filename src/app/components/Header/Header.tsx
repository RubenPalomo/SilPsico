import Link from "next/link";
import React from "react";
import HeaderMenuComponent from "./HeaderMenuComponent/HeaderMenuComponent";

export default function Header() {
  return (
    <header className="flex justify-between w-full bg-white min-h-32 sm:min-h-0 pl-8 py-8 sticky top-0 z-50">
      <Link href={"/"}>
        <h1 className="md:text-3xl font-bold">Silvia de Isidro Delgado</h1>
        <p className="text-xs sm:text-sm">
          Psicóloga clínica especializada en Neuropsicología
        </p>
      </Link>
      <HeaderMenuComponent
        menuElements={["Sobre mi", "Patologias", "Tarifas", "Contacto"]}
      />
    </header>
  );
}
