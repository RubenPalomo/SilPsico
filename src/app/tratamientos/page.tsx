"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import TableElement from "./components/TableElement/TableElement";
import TableElementCell from "./components/TableCellWithoutBorder.tsx/TableElementCell";

export default function Treatments() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/sobremi");
    else if (deltaX < -50) router.push("/tarifas");

    setTouchStartX(0);
  };

  return (
    <div
      className="h-full min-h-screen w-full bg-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Tratamientos" />
      <h1 className="text-2xl font-bold mx-auto my-5 w-[80vw]">Tratamientos</h1>
      <TableContainer style={{ overflowX: "initial" }}>
        <Table aria-label="treatments-table" stickyHeader>
          <TableHead className="sticky top-24 bg-white">
            <TableRow>
              <TableCell />
              <TableElementCell>
                <p className="font-bold">Online</p>
              </TableElementCell>
              <TableElementCell>
                <p className="font-bold">Presencial</p>
              </TableElementCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableElementCell>
                <p className="font-bold">Daño cerebral adquirido</p>
              </TableElementCell>
              <TableCell />
              <TableCell />
            </TableRow>
            <TableElement text="Traumatismo craneoencefálico" remote={true} />
            <TableElement text="Accidente cerebrovascular" remote={true} />
            <TableElement text="Tumores cerebrales" remote={true} />
            <TableElement text="Infecciones cerebrales" remote={true} />
            <TableRow>
              <TableElementCell>
                <p className="font-bold mt-4">
                  Enfermedades neurodegenerativas
                </p>
              </TableElementCell>
              <TableCell />
              <TableCell />
            </TableRow>
            <TableElement text="Alzheimer" remote={true} />
            <TableElement text="Parkinson" remote={true} />
            <TableElement text="Demencia por cuerpos de Lewy" remote={true} />
            <TableElement text="Demencia frontotemporal" remote={true} />
            <TableElement text="Deterioro cognitivo leve" remote={true} />
            <TableRow>
              <TableElementCell>
                <p className="font-bold mt-4">
                  Transtornos del neurodesarrollo
                </p>
              </TableElementCell>
              <TableCell />
              <TableCell />
            </TableRow>
            <TableElement text="Transtorno del especto autista" remote={true} />
            <TableElement
              text="Transtorno de déficit de atención e hiperactividad"
              remote={true}
            />
            <TableRow>
              <TableElementCell>
                <p className="font-bold mt-4">Psicología clínica</p>
              </TableElementCell>
              <TableCell />
              <TableCell />
            </TableRow>
            <TableElement text="Ansiedad" remote={false} />
            <TableElement text="Depresión" remote={false} />
            <TableElement text="Estrés" remote={false} />
            <TableElement text="Duelo" remote={false} />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
