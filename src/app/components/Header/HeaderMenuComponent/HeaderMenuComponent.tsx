import React from "react";
import { HeaderMenuComponentProps } from "./HeaderMenuComponent.props";

export default function HeaderMenuComponent({
  menuElements,
}: HeaderMenuComponentProps) {
  return (
    <nav className="min-w-52 ">
      <ul className="flex space-x-4 mt-2 mr-2 justify-end">
        {menuElements.map((element, index) => (
          <li key={index}>
            <a
              href={`/${element.replaceAll(" ", "").toLowerCase()}`}
              className="hover:underline"
            >
              <p className="text-xs sm:text-base">{element}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
