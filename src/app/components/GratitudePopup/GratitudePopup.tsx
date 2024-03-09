import { useEffect } from "react";
import React from "react";
import { GratitudePopupProps } from "./GratitudePopup.props";

export default function GratitudePopup({
  hidden,
  closePopup,
}: GratitudePopupProps) {
  useEffect(() => {
    console.log(hidden);
  }, [hidden]);

  return (
    <div
      className="absolute bg-white p-5 border shadow rounded-xl mx-10"
      hidden={hidden}
    >
      <p className="text-2xl sm:text-4xl text-red-500 font-light italic text-center my-2">
        ¡Muchas gracias!
      </p>
      <p className="text-center text-sm sm:text-base">
        Nos pondremos en contacto contigo lo antes posible
      </p>
      <button className="absolute top-1 right-4" onClick={closePopup}>
        <p className="text-xl text-red-500 font-bold">x</p>
      </button>
    </div>
  );
}
