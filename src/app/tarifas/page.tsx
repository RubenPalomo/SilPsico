import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PriceBox from "./components/PriceBox/PriceBox";

export default function PricesPage() {
  return (
    <div className="h-full min-h-screen bg-lime-50">
      <Header />
      <h1 className="text-lg font-bold mx-auto my-5 w-[80vw]">Tarifas:</h1>
      <div className="flex flex-wrap justify-center">
        <div className="flex w-80">
          <PriceBox
            title="Bono mensual 1"
            price="XX"
            plan={[
              "Sesiones de 50'",
              "1 Sesión/semana",
              "Modalidad a domicilio",
              "Pago por adelantado",
            ]}
          />
        </div>
        <div className="flex w-80">
          <PriceBox
            title="Bono mensual 2"
            price="XX"
            plan={[
              "Sesiones de 50'",
              "2 Sesiones/semana",
              "Modalidad a domicilio",
              "Pago por adelantado",
            ]}
          />
        </div>
        <div className="flex w-80">
          <PriceBox
            title="Bono mensual 3"
            price="XX"
            plan={[
              "Sesiones de 50'",
              "3 Sesiones/semana",
              "Modalidad a domicilio",
              "Pago por adelantado",
            ]}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center sm:mx-20 mt-2">
        <div className="flex w-96">
          <PriceBox
            title="Bono Clínica"
            price="XX"
            plan={[
              "Sesiones de 50'",
              "Solo psicología clínica",
              "Modalidad online",
              "Pago por adelantado",
            ]}
          />
        </div>
        <div className="flex flex-1 min-w-96 max-w-[38vw]">
          <PriceBox
            title="Valoración Neuropsicológica"
            price="XX"
            plan={[
              "Modalidad dependiendo de patología",
              "Administración de pruebas neuropiscológicas",
              "Elaboración de informe",
              "Modalidad a domicilio",
              "Mitad del pago por adelantado, el resto al finalizar el informe",
            ]}
          />
        </div>
      </div>
      <ul className="flex flex-col mt-10 mx-auto w-[80vw]">
        <li className="text-sm">
          • Política de cancelación o cambio de sesiones: Se cobrará la sesión
          si no se avisa con un mínimo de 24h
        </li>
        <li className="text-sm">
          • La duración de las sesiones puede variar dependiendo de la
          valoración inicial
        </li>
        <li className="text-sm">
          • El precio de las sesiones a domicilio puede variar dependiendo del
          lugar del domicilio.
        </li>
      </ul>
      <Footer />
    </div>
  );
}
