import React from "react";
import { FormElementProps } from "./FormElement.props";

export default function FormElement({
  label,
  name,
  required,
  updateStatus,
}: FormElementProps) {
  const confirmMinimumFormData = (value: string): boolean => {
    if (name === "phone") return value.length >= 9;
    else if (name === "email")
      return value.includes("@") && value.includes(".") && value.length > 10;
    else return true;
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!updateStatus) return;
    if (confirmMinimumFormData(e.target.value)) updateStatus(true);
    else updateStatus(false);
  };

  return (
    <div className="flex mx-auto my-1" style={{ maxWidth: "350px" }}>
      <div className="flex flex-grow items-center w-60 ">
        <input
          className="border-2 rounded-md w-full p-2"
          name={name}
          placeholder={label}
          required={required}
          maxLength={name === "phone" ? 12 : 35}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
