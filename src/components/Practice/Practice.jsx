import "./Practice.css";
import React, { useState, useEffect } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from "primereact/button";

import { Route, Routes } from "react-router-dom";

export const Practice = () => {
  //   const [buttonText, setButtonText] = useState("");

  //   const ButtonClick = () => {
  //     buttonText === 'Ты нажал на кнопку' ? setButtonText("Ты не нажал на кнопку") : setButtonText("Ты нажал на кнопку")
  //   };

//   const columns = [
//     { field: "id", header: "ID" },
//     { field: "name", header: "Имя" },
//     { field: "pain", header: "Коэффициент боли" },
//     { field: "difficulty", header: "Коэффициент сложности" },
//     { field: "chaos", header: "Коэффициент хаоса" },
//     { field: "beaty", header: "Коэффициент красоты кода" },
//   ];

//   const data = [
//     {
//       id: 1,
//       name: "Vue",
//       pain: 0.3,
//       difficulty: 0.6,
//       chaos: 0.3,
//       beaty: 0.7,
//     },
//     {
//       id: 2,
//       name: "React",
//       pain: 0.7,
//       difficulty: 0.3,
//       chaos: 1.0,
//       beaty: 0.3,
//     },
//     {
//       id: 3,
//       name: "Angular",
//       pain: 1.0,
//       difficulty: 0.5,
//       chaos: 0.1,
//       beaty: 0.05,
//     },
//     {
//       id: 4,
//       name: "Django",
//       pain: 0.4,
//       difficulty: 0.5,
//       chaos: 0.6,
//       beaty: 0.2,
//     },
//     {
//       id: 4,
//       name: "Node.js",
//       pain: 1.0,
//       difficulty: 1.0,
//       chaos: 1.0,
//       beaty: 0.0,
//     },
//     {
//       id: 5,
//       name: "FastAPI",
//       pain: 0.1,
//       difficulty: 0.2,
//       chaos: 0.2,
//       beaty: 0.5,
//     },
//   ];

  return (
    // <div className="card flex justify-content-center">

    //   <Button
    //     label="Show"
    //     icon="pi pi-external-link"
    //     onClick={ButtonClick}
    //   />
    //    <p>{buttonText}</p>
    // </div>

    // <div>
    //   <table>
    //     <thead>
    //       <tr>
    //         {columns.map((column) => (
    //           <th key={column.field}>{column.header}</th>
    //         ))}
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((item) => (
    //         <tr key={item.id}>
    //           <td>{item.id}</td>
    //           <td>{item.name}</td>
    //           <td>{item.pain * 100}%</td>
    //           <td>{item.difficulty * 100}%</td>
    //           <td>{item.chaos * 100}%</td>
    //           <td>{item.beaty * 100}%</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div>
        <Routes>
            
        </Routes>
<Button label="Warning" severity="warning" />
<Button label="Help" severity="help" />
<Button label="Danger" severity="danger" />
    </div>
  );
};
