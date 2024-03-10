"use client";

import React, { useState } from "react";
import FormElement from "./FormElement/FormElement";
import { Button } from "@mui/material";
import { FormProps } from "./Form.props";
import { sendToTelegram } from "@/app/utils/apiCall/sendToTelegram";
import { FormDataType } from "@/app/utils/models/formDataType";

export default function Form({ showGratitude }: FormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isPhoneEntered, setIsPhoneEntered] = useState<boolean>(false);
  const [isEmailEntered, setIsEmailEntered] = useState<boolean>(false);

  const resetFeedback = (): void => {
    setError(false);
    setLoading(false);
    setIsPhoneEntered(false);
    setIsEmailEntered(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFeedback();

    const formData = new FormData(e.currentTarget);

    if (!formData) return;
    else setLoading(true);

    const formDataEntries: FormDataType = {
      name: formData.get("name") as string,
      lastName: formData.get("lastName") as string,
      phone: parseInt(formData.get("phone") as string),
      email: formData.get("email") as string,
      option: formData.get("option") as string,
      text: formData.get("text") as string,
    };

    if (e.currentTarget) e.currentTarget.reset();

    const confirmation = await sendToTelegram(formDataEntries);

    if (confirmation) showGratitude();
    else setError(true);

    setLoading(false);
  };

  return (
    <form
      className="flex flex-col items-center justify-center my-2"
      onSubmit={handleSubmit}
    >
      <div className="mb-5">
        <FormElement label="Nombre" name="name" required={true} />
        <FormElement label="Apellido" name="lastName" required={true} />
        <FormElement
          label="Teléfono"
          name="phone"
          required={false}
          updateStatus={setIsPhoneEntered}
        />
        <FormElement
          label="Email"
          name="email"
          required={false}
          updateStatus={setIsEmailEntered}
        />
        <div className="mt-2">
          <p>¿Por dónde prefieres hablar?</p>
          <select className="w-full p-1" name="option">
            <option>Teléfono</option>
            <option>Email</option>
          </select>
        </div>
      </div>
      <textarea
        className="flex mx-auto w-full p-2 mb-4 h-max-24 resize-none"
        name="text"
        maxLength={200}
        placeholder="Describe brevemente tu caso"
        required
      />
      <div className="flex relative items-center justify-center w-full">
        <Button
          className="w-28 h-9 bg-blue-500"
          variant="contained"
          type="submit"
          disabled={!isPhoneEntered && !isEmailEntered}
        >
          {loading ? (
            <div className="border-2 loading-spinner border-solid border-blue-300 border-t-white rounded-full w-5 h-5 animate-spin" />
          ) : (
            <p>Enviar</p>
          )}
        </Button>
        <p className="absolute top-10 text-red-500" hidden={!error}>
          Ha habido un problema
        </p>
      </div>
    </form>
  );
}
