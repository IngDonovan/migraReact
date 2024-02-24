import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { data } from "../../data";
import "./DonoTable.css";

// Obtenemos el primer objeto de la lista
const primerObjeto = data[0];
// Obtenemos las claves del primer objeto
const titulos = Object.keys(primerObjeto);
// console.log(titulos);
const titulosFiltro = Object.keys(data[0]).filter(
  (key, index) => index !== 0 && index !== 4
);
const valoresUnicosPorTitulo = titulosFiltro.map(titulo => {
    const valoresUnicosSet = new Set();
    data.forEach(objeto => {
      valoresUnicosSet.add(objeto[titulo]);
    });
    return Array.from(valoresUnicosSet);
  });

//   console.log(valoresUnicosPorTitulo);


const DonoTable = () => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (event) => {
    setSelectedDependency(event.target.value);
  };

  return (
    <>
      <h1>Tabla 2</h1>
      <Container
        sx={{
          bgcolor: "white",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:"space-between",
            color: "black",
            fontSize: "1.4rem",
            p: "12px",
          }}
        >
            {titulosFiltro.map((key, index) => (
                <Box key={index}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap:"5px",
                    p: "12px",
                  }}
                >
                    <p>{key}</p>
                    <Select>
                        <MenuItem>Todo el contenido</MenuItem>
                        {valoresUnicosPorTitulo[index].map((valor, idx) => (
                            <MenuItem key={idx}>{valor}</MenuItem>
                        ))}
                    </Select>
                </Box>
            ))}
        </Box>
        {/* <div className="containSelects">
        <label>{title}</label>    
        <Select value={select} onChange={handle}>
        <MenuItem value="">All Dependencies</MenuItem>
        {menu.map((item, index) => (
            <MenuItem key={index} value={item}>
            {item}
            </MenuItem>
        ))}
        </Select>

        </div> */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {titulos.map((key, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontSize: "1.4rem",
                      color: "red",
                    }}
                  >
                    {key}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((fila, index) => (
                <TableRow key={index}>
                  {titulos.map((titulo, index) => (
                    <TableCell key={index} sx={{ fontSize: "1.2rem" }}>
                      {fila[titulo]}
                    </TableCell>
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
