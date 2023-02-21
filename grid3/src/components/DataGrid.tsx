
import React, { useState } from 'react';
import { Table, THead, TH, TR, TD } from './DataGrid.style';

interface Data {
  id: number;
  name: string;
  age: number;
}

const DataGrid: React.FC = () => {
  const [data, setData] = useState<Data[]>([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bill', age: 35 }
  ]);

  return (
    <Table>
      <THead>
        <TR>
          <TH>ID</TH>
          <TH>Name</TH>
          <TH>Age</TH>
        </TR>
      </THead>
      <tbody>
        {data.map(row => (
          <TR key={row.id}>
            <TD>{row.id}</TD>
            <TD>{row.name}</TD>
            <TD>{row.age}</TD>
          </TR>
        ))}
      </tbody>
    </Table>
  );
};

export default DataGrid;
