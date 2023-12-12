import React, {useMemo, useState, useEffect} from 'react';
import { useTable} from 'react-table';


import './ClonesTable.css';
import {COLUMNS} from './Columns'


function Table({value}) {

//   const data = [
//       {
//         id: 1,
//         prefix: "CT-7567",
//         name: "Rex",
//         batallion: 101,
//         rank: 201,
//         equipment: 301
//       },
//       {
//         id: 2,
//         prefix: "CT-5555",
//         name: "Fives",
//         batallion: 101,
//         rank: 202,
//         equipment: 302
//       },
//       {
//         id: 3,
//         prefix: "CT-327",
//         name: "Bly",
//         batallion: 102,
//         rank: 203,
//         equipment: 303
//       },
//       {
//         id: 4,
//         prefix: "CT-7567",
//         name: "Rex",
//         batallion: 101,
//         rank: 201,
//         equipment: 301
//       },
//       {
//         id: 5,
//         prefix: "CT-5555",
//         name: "Fives",
//         batallion: 101,
//         rank: 202,
//         equipment: 302
//       },
//       {
//         id: 6,
//         prefix: "CT-327",
//         name: "Bly",
//         batallion: 102,
//         rank: 203,
//         equipment: 303
//       },
//       {
//         id: 7,
//         prefix: "CT-7567",
//         name: "Rex",
//         batallion: 101,
//         rank: 201,
//         equipment: 301
//       },
//       {
//         id: 8,
//         prefix: "CT-5555",
//         name: "Fives",
//         batallion: 101,
//         rank: 202,
//         equipment: 302
//       },
//       {
//         id: 9,
//         prefix: "CT-327",
//         name: "Bly",
//         batallion: 102,
//         rank: 203,
//         equipment: 303
//       },
//       {
//         id: 10,
//         prefix: "CT-7567",
//         name: "Rex",
//         batallion: 101,
//         rank: 201,
//         equipment: 301
//       },
//       {
//         id: 11,
//         prefix: "CT-5555",
//         name: "Fives",
//         batallion: 101,
//         rank: 202,
//         equipment: 302
//       },
//       {
//         id: 12,
//         prefix: "CT-327",
//         name: "Bly",
//         batallion: 102,
//         rank: 203,
//         equipment: 303
//       },
//       {
//         id: 13,
//         prefix: "CT-327",
//         name: "Bly",
//         batallion: 102,
//         rank: 203,
//         equipment: 303
//       },
//       {
//         id: 14,
//         prefix: "CT-327",
//         name: "Bly",
//         batallion: 102,
//         rank: 203,
//         equipment: 303
//       },
//       {
//         id: 15,
//         prefix: "CT-327",
//         name: "Bly",
//         batallion: 102,
//         rank: 203,
//         equipment: 303
//       }
// ];

  const [data, setData] = useState([]);

  const columns = useMemo(() => COLUMNS, []); 

  const { getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow} 
  = useTable({
    columns,
    data
});
  useEffect(() => {
    console.log(value);
    setData(value);
  }, [value])

  return (
    <>
    <table {...getTableProps()}>
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  );
}

export default Table;
