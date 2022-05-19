import React from 'react'
import {useTable} from "react-table"

function TableDashboard({columns,data}) {
    const tableInstance = useTable({ columns,data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <div>
    <table {...getTableProps()} className="w-full">
     <thead>
       {headerGroups.map(headerGroup => (
         <tr {...headerGroup.getHeaderGroupProps()} className="rounded-md">
           {headerGroup.headers.map(column => (
             <th
               {...column.getHeaderProps()}
               className="py-3 bg-white border-b-2 border-black text-left text-black font-medium text-sm  "
             >
               {column.render('Header')}
             </th>
           ))}
         </tr>
       ))}
     </thead>
     <tbody {...getTableBodyProps()}>
       {rows.map(row => {
         prepareRow(row)
         return (
           <tr {...row.getRowProps()}>
             {row.cells.map(cell => {
               return (
                 <td
                   {...cell.getCellProps()}
                   className="bg-white py-3 pr-2 text-left text-gray-500 font-medium"
                 >
                   {cell.render('Cell')}
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
   </table></div>
  )
}

export default TableDashboard