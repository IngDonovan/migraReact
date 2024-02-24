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
// filtro los titulos que requiero menos los del indice 0 y 4
const titulosFiltro = Object.keys(data[0]).filter(
  (key, index) => index !== 0 && index !== 4
);
//obtengo los values conrrespondientes a cada titulo sin repetir
const valoresUnicosPorTitulo = titulosFiltro.map(titulo => {
    const valoresUnicosSet = new Set();
    data.forEach(objeto => {
      valoresUnicosSet.add(objeto[titulo]);
    });
    return Array.from(valoresUnicosSet);
  });


const DonoTable = () => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (event) => {
    // const newValue = event.target.value;
    setSelectValue(event.target.value)
    // setSelectValue(newValue !== undefined ? newValue : ''); // Asegurar que el nuevo valor no sea undefined
  };

  return (
    <>
      <h1>Tabla 2</h1>
      <Container
        sx={{
          bgcolor: "white",
          boxShadow: 3,
          borderRadius:"12px",
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
                    <Select value={selectValue} onChange={handleChange}>
                        <MenuItem value="">Todo el contenido</MenuItem>
                        {valoresUnicosPorTitulo[index].map((valor, idx) => (
                            <MenuItem key={idx} value={valor}>{valor}</MenuItem>
                        ))}
                    </Select>
                </Box>
            ))}
        </Box>
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
                {data
                    .filter((dat) => {
                        if (selectValue === '') return true; // Si no se ha seleccionado nada, se muestran todos los datos
                        return titulosFiltro.some(titulo => dat[titulo] === selectValue);
                    })
                    .map((dato, index) => (
                        <TableRow key={index}>
                            {titulos.map((titulo, index) => (
                                <TableCell key={index} sx={{ fontSize: "1.2rem" }}>
                                {dato[titulo]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))

                }

                {/* {dependencies
                .filter((dependency) => selectedDependency === '' || dependency.name === selectedDependency)
                .map((dependency, index) => (
                    <TableRow key={index}>
                    <TableCell>{dependency.name}</TableCell>
                    <TableCell>{dependency.version}</TableCell>
                    </TableRow>
                ))} */}
              {/* {data.map((fila, index) => (
                <TableRow key={index}>
                  {titulos.map((titulo, index) => (
                    <TableCell key={index} sx={{ fontSize: "1.2rem" }}>
                      {fila[titulo]}
                    </TableCell>
                  ))}
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export { DonoTable };
