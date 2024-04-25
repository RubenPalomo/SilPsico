import React from "react";
import { TableCell } from "@mui/material";

export default function TableElementCell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TableCell className="py-1">{children}</TableCell>;
}
