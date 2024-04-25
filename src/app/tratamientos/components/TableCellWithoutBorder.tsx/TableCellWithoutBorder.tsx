import React from "react";
import { TableCell } from "@mui/material";

export default function TableCellWithoutBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TableCell className="border-none py-1">{children}</TableCell>;
}
