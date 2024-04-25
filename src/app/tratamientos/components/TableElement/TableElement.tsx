import React from "react";
import TableCellWithoutBorder from "../TableCellWithoutBorder.tsx/TableCellWithoutBorder";
import { TableRow } from "@mui/material";
import { TableElementProps } from "./TableElement.props";
import TickImage from "../TickImage/TickImage";

export default function TableElement({ text, remote }: TableElementProps) {
  if (remote)
    return (
      <TableRow>
        <TableCellWithoutBorder>{text}</TableCellWithoutBorder>
        <TableCellWithoutBorder> </TableCellWithoutBorder>
        <TableCellWithoutBorder>
          <TickImage />
        </TableCellWithoutBorder>
      </TableRow>
    );
  else
    return (
      <TableRow>
        <TableCellWithoutBorder>{text}</TableCellWithoutBorder>
        <TableCellWithoutBorder>
          <TickImage />
        </TableCellWithoutBorder>
        <TableCellWithoutBorder> </TableCellWithoutBorder>
      </TableRow>
    );
}
