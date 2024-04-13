import React from "react";
import TextAreaProps from "./TextArea.props";

export default function TextArea({ title, text }: TextAreaProps) {
  return (
    <div className="flex flex-col w-full my-2">
      <h2 className="font-bold my-1 text-sm sm:text-base text-center">{title}</h2>
      <div className="flex border rounded-md shadow-lg bg-lime-50 bg-opacity-30 p-2">
        <p className="text-sm sm:text-md whitespace-pre text-wrap">{text}</p>
      </div>
    </div>
  );
}
