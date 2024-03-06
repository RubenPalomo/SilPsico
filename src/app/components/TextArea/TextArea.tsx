import React from "react";
import TextAreaProps from "./TextArea.props";

export default function TextArea({ title, text }: TextAreaProps) {
  return (
    <div className="flex flex-col my-2">
      <h2 className="font-bold my-1">{title}</h2>
      <div className="border rounded-md shadow bg-lime-100 p-2">
        <pre>{text}</pre>
      </div>
    </div>
  );
}
