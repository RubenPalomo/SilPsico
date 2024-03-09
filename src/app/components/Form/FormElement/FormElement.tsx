import React from "react";
import { FormElementProps } from "./FormElement.props";

export default function FormElement({
  label,
  name,
  type,
  required,
}: FormElementProps) {
  return (
    <div className="flex mx-auto my-1" style={{ maxWidth: "350px" }}>
      <div className="flex flex-grow items-center w-60 ">
        <input
          className="border-2 rounded-md w-full p-2"
          name={name}
          type={type ? type : "text"}
          onChange={(e) => e.preventDefault()}
          placeholder={label}
          required={required}
        />
      </div>
    </div>
  );
}
