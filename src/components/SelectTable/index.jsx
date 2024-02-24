import { useState } from 'react'
import { Select, MenuItem } from '@mui/material';
import './SelectTable.css'



const  SelectTable = ({
    title,
    select,
    handle,
    consumer,
}) => {


  return (
  <>
    <div>
        <label>{title}</label>    
        <Select value={select} onChange={handle}>
            <MenuItem value="">All Dependencies</MenuItem>
            {consumer.map((dependency, index) => (
                <MenuItem key={index} value={dependency.name}>
                {dependency.name}
                </MenuItem>
            ))}
        </Select>

    </div>
  </>
  );
};


export {SelectTable};