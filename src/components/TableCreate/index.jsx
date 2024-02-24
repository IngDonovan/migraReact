import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Select, MenuItem, requirePropFactory } from '@mui/material';
import { SelectTable } from '../SelectTable';
import styled from '@emotion/styled';
import './TableCreate.css';

const Container = styled.div`
  
  margin: 0 auto;
  padding: 20px;
  background: white;
`;



const dependencies = [
    { name: '@emotion/react', version: '^11.11.3' },
    { name: '@emotion/styled', version: '^11.11.0' },
    { name: '@mui/material', version: '^5.15.10' },
  ];
const backend = [

  {
    title:"Plan de beneficio",
    menu:[
      { name: 'Sura', version: '^11.11.3' },
      { name: 'NuevaEps', version: '^11.11.0' },
      { name: 'SegurosBolivar', version: '^5.15.10' },
    ],
  },
  {
    title:"Tipo de Regimen",
    menu:[
      { name: 'Contributivo' },
      { name: 'Subsidiado'},
      { name: 'Especial' },
    ],
  },
  {
    title:"Estado",
    menu:[
      { name: 'Activo' },
      { name: 'Inactivo'},
    ],
  },

  ];


const TableCreate = () => {
  const [selectedDependency, setSelectedDependency] = useState('');

  const handleChange = (event) => {
    setSelectedDependency(event.target.value);
  };

  return (
    <>
      <div className='container-tab'>
        {/* <Select value={selectedDependency} onChange={handleChange}>
          <MenuItem value="">All Dependencies</MenuItem>
          {dependencies.map((dependency, index) => (
            <MenuItem key={index} value={dependency.name}>
              {dependency.name}
            </MenuItem>
          ))}
        </Select> */}
        <SelectTable select={selectedDependency} handle={handleChange} consumer={dependencies} />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Codigo</TableCell>
              <TableCell>Plan de beneficio</TableCell>
              <TableCell>Tipo régimen</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Activo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dependencies
              .filter((dependency) => selectedDependency === '' || dependency.name === selectedDependency)
              .map((dependency, index) => (
                <TableRow key={index}>
                  <TableCell>{dependency.name}</TableCell>
                  <TableCell>{dependency.version}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export {TableCreate};