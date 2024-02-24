import { useState } from 'react'
import { Select, MenuItem } from '@mui/material';
import './SelectTable.css'



const  SelectTable = ({
    title,
    menu,
    select,
    handle,
}) => {


  return (
  <>
    <div>
        <label>{title}</label>    
        <Select value={select} onChange={handle}>
            <MenuItem value="">All Dependencies</MenuItem>
            {menu.map((item, index) => (
                <MenuItem key={index} value={item}>
                {item}
                </MenuItem>
            ))}
        </Select>

    </div>
  </>
  );
};


export {SelectTable};