import React from "react";
import { HeaderMenuProps } from "./HeaderMenu.props";

export default function HeaderMenuComponent({ menuElements }: HeaderMenuProps) {
  return (
    <nav>
      <ul className="flex space-x-4 mt-2">
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
