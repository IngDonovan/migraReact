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
    id:1,
    title:"Plan de beneficio",
    menu:['Sura','NuevaEps','SegurosBolivar'],
  },
  {
    id:2,
    title:"Tipo de Regimen",
    menu:['Contributivo','Subsidiado','Especial'],
  },
  {
    id:3,
    title:"Estado",
    menu:['Activo','Inactivo'],
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
        {backend.map((back) => (
          <SelectTable 
            key={back.id}
            select={selectedDependency} 
            handle={handleChange} 
            title={back.title}
            menu={back.menu}
          />
        ) 
        )}
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