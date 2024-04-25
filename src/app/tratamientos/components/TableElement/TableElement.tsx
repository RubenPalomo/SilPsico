import React from "react";
import TableElementCell from "../TableCellWithoutBorder.tsx/TableElementCell";
import { TableRow } from "@mui/material";
import { TableElementProps } from "./TableElement.props";
import TickImage from "../TickImage/TickImage";

export default function TableElement({ text, remote }: TableElementProps) {
  if (remote)
    return (
      <TableRow>
        <TableElementCell>{text}</TableElementCell>
        <TableElementCell> </TableElementCell>
        <TableElementCell>
          <TickImage />
        </TableElementCell>
      </TableRow>
    );
  else
    return (
      <TableRow>
        <TableElementCell>{text}</TableElementCell>
        <TableElementCell>
          <TickImage />
        </TableElementCell>
        <TableElementCell> </TableElementCell>
      </TableRow>
    );
}
