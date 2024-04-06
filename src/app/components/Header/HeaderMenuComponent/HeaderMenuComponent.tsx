import Link from "next/link";
import React from "react";
import { HeaderMenuComponentProps } from "./HeaderMenuComponent.props";

export default function HeaderMenuComponent({
  menuElements,
}: HeaderMenuComponentProps) {
  return (
    <nav className="min-w-52 absolute right-6 top-24 md:top-10 sm:top-20">
      <ul className="flex space-x-4 mt-2 mr-2 justify-end">
        {menuElements.map((element, index) => (
          <li key={index}>
            <Link
              href={`/${element.replaceAll(" ", "").toLowerCase()}`}
              className="hover:underline"
            >
              <p className="text-xs sm:text-base">{element}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
