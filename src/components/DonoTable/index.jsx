import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@mui/material";
import { data } from "../../data";
import "./DonoTable.css";

const DonoTable = () => {
  // Obtenemos el primer objeto de la lista
  const primerObjeto = data[0];
  // Obtenemos las claves del primer objeto
  const titulos = Object.keys(primerObjeto);
  // console.log(titulos);

  return (
    <>
      <h1>Tabla 2</h1>
      <Container
        sx={{
          bgcolor: "white",
          boxShadow:3,
        }}
      >
        <TableContainer>
          <Table >
            <TableHead>
              <TableRow >
                {titulos.map((key, index) => (
                  <TableCell key={index} sx={{ fontSize: "1.2rem" }}>{key}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((fila, index) => (
                <TableRow key={index}>
                  {titulos.map((titulo, index) => (
                    <TableCell key={index} sx={{ fontSize: "1.2rem" }}>{fila[titulo]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export { DonoTable };
