import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
} from "@mui/material";
import { data } from "../../data";

const DonoTable = () => {
  // Obtenemos el primer objeto de la lista
  const primerObjeto = data[0];
  // Obtenemos las claves del primer objeto
  const titulos = Object.keys(primerObjeto);
  // console.log(titulos);

  return (
    <>
      <h1>Tabla 2</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {titulos.map((key, index) => (
                <TableCell key={index}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((fila, index) => (
              <TableRow key={index}>
                {titulos.map((titulo, index) => (
                  <TableCell key={index}>
                    {fila[titulo]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export { DonoTable };
