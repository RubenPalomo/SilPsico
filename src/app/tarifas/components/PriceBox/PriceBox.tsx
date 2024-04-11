import React from "react";
import { PriceBoxProps } from "./PriceBox.props";

export default function PriceBox({ title, price, plan }: PriceBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-lime-50 bg-opacity-60 rounded-lg shadow-lg m-2 p-2 border-2 border-black">
      <h2 className="font-bold sm:text-xl">{title.toUpperCase()}</h2>
      <div className="flex flex-row my-5">
        <p className="text-5xl font-semibold">{price}€</p>
        <p className="text-xs max-h-4 mt-7">/SESIÓN</p>
      </div>
      <ul className="text-xs w-full ml-1">
        {plan.map((item, index) => (
          <li key={index}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}
