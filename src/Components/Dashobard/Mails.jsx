import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date,name, mail) {
  return { id, date,name, mail};
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'text'
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'text'
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz'),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen'
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Mails</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.mail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}