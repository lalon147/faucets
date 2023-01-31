import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Table1 = () => {
    
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
   
  }
const rows = [
    createData('1', "12:30AM", 487,	"4s8er5s5fe57rjmxnfuewrurks" ),
    createData('2', "10:30AM", 875,"sf7s7ers4e7r7wser"),
    createData('3', "11:30AM", 797, "se4s7er7"),
    
    
  ];
  
  return (
    <TableContainer style={{marginTop:"20px"}} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Hash</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Table1